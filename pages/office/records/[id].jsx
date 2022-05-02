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
  const [sales, setSales] = useState(null)

  useEffect(() => {

    const getSales = async () => {
      try {
        await axios.get(`/api/sales/${id}`)
          .then(doc => {
            const { data } = doc
            setSales(data)
            console.log(data);
          })
      } catch (error) {
        console.log(error)
      }
    }

    getSales()


  }, [id])

  const repayHandle = (i) => {
     console.log(i)
  }


  return (
    <>
      < OfficeNav />

      {
        !sales ?
          (<Box sx={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
            <CircularProgress />
          </Box>) :
          (
            <div className={styles.salesContainer}>
              <h2 className={styles.heading} >sales on: {moment(sales.createdAt).format("DD MMM, YYYY dddd")} </h2>
              <div className={styles.salesInfo}>
                <p><span style={{ fontWeight: "900" }} >amount</span>: {sales.amount}KG </p>
                <p><span style={{ fontWeight: "900" }} >sales</span> {sales.sales}/= </p>
                <p><span style={{ fontWeight: "900" }} >expenses</span> {sales.expenses}/= </p>
              </div>

              <div className={styles.borrowers}>
                {
                  !sales.borrowers ?
                    "null" :
                    sales.borrowers.length === 0 ?
                      "NO BORROWER" :
                      (
                        <ul className={styles.list} >
                          {
                            sales.borrowers.map( (client, index) => (
                              <li key={index} className={styles.listItem} >
                                <p>Name: {client.name} </p>
                                <p>Tell: {client.tell} </p>
                                <p>Amount: {client.amount}KG </p>
                                <p>Loan: {client.loan}/= </p>
                                <button onClick={ () => repayHandle(index) } className={styles.button} >pay</button>
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