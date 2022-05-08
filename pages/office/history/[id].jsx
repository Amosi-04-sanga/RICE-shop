import OfficeNav from '../../../components/OfficeNav'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import moment from 'moment'
import styles from '../../../styles/salesdetails.module.css'


const SalesDetails = () => {
  const router = useRouter()
  const { id } = router.query
  const [records, setRecords] = useState(null)

  useEffect(() => {

    const getRecords = async () => {
      try {
        await axios.get(`/api/closeSales/${id}`)
          .then(doc => {
            const { data } = doc
            setRecords(data)
            console.log(data);
          })
      } catch (error) {
        console.log(error)
      }
    }

    getRecords()


  }, [id])

  const repayHandle = (i) => {
    console.log(i)
  }

  const format3Dig = (num) => {
    return Number(num).toLocaleString('en-US')
  }

  return (
    <>
      < OfficeNav />

      {
        !records ?
          (<Box sx={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
            <CircularProgress />
          </Box>) :
          (
            <div className={styles.salesContainer}>
              <h2 className={styles.heading} >Mauzo ya: {moment(records.createdAt).format("DD MMM, YYYY dddd")} </h2>
              <div className={styles.salesInfo}>
                <p><span style={{ fontWeight: "900" }} >Tonnes zilizonunuliwa</span>: {records.amountBought} Tonnes </p>
                <p><span style={{ fontWeight: "900" }} >Tonnes zilizouzwa</span>: {records.amountSold} Tonnes </p>
                <p><span style={{ fontWeight: "900" }} >Mda</span>: {records.days} days </p>
                <p><span style={{ fontWeight: "900" }} >Manunuzi</span>: {format3Dig(records.purchases)}/= </p>
                <p><span style={{ fontWeight: "900" }} >Mauzo</span>: {format3Dig(records.sales)}/= </p>
                <p><span style={{ fontWeight: "900" }} >
                  {
                    records.profit > 0 ?
                      "Faida" :
                      "Hasara"
                  }
                </span>: {format3Dig(Math.abs(records.profit))}/= </p>
              </div>

              <div className={styles.borrowers}>
                {
                  !records.borrowers ?
                    "null" :
                    records.borrowers.length === 0 ?
                      "NO BORROWERS" :
                      (
                        <ul className={styles.list} >
                          {
                            records.borrowers.map((client, index) => (
                              <li key={index} className={styles.listItem} >
                                <p>Jina: {client.name} </p>
                                <p>Phone: {client.tell} </p>
                                <p>Kiasi: {client.amount}KG </p>
                                <p>Mkopo: {client.loan}/= </p>
                                <button onClick={() => repayHandle(index)} className={styles.button} >pay</button>
                              </li>
                            ))
                          }
                        </ul>
                      )
                }
              </div>

            </div>
          )
      }
    </>
  )
}

export default SalesDetails


