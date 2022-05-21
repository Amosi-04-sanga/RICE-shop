import OfficeNav from '../../../components/OfficeNav'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import moment from 'moment'
import styles from '../../../styles/salesdetails.module.css'
import tablecss from '../../../styles/records.module.css'


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

  const format3Dig = (num) => {
    return Number(num).toLocaleString('en-US')
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
              <h2 className={styles.heading} >Mauzo ya: {moment(sales.createdAt).format("DD MMM, YYYY dddd")} </h2>

              <table className={tablecss.customers}>
                <thead>
                  <tr>
                    <th>S/NO</th>
                    <th>Maelezo</th>
                    <th>Kiasi</th>
                  </tr>
                </thead>

                <tbody>

                  <tr >
                    <td>
                      01
                    </td>
                    <td>
                    Kiasi
                    </td>
                    <td>
                    {sales.amount}KG
                    </td>

                  </tr>

                  <tr >
                    <td>
                      02
                    </td>
                    <td>
                    Mauzo
                    </td>
                    <td>
                    {format3Dig(sales.sales)} /=
                    </td>

                  </tr>

                  <tr >
                    <td>
                      03
                    </td>
                    <td>
                    Mengineyo
                    </td>
                    <td>
                    {format3Dig(sales.expenses)}/=
                    </td>

                  </tr>

                </tbody>

              </table>


              <div className={styles.borrowers}>
                {
                  !sales.borrowers ?
                    "null" :
                    sales.borrowers.length === 0 ?
                      "HAKUNA MADENI" :
                      (
                        <ul className={styles.list} >
                          {
                            sales.borrowers.map((client, index) => (
                              <li key={index} className={styles.listItem} >
                                <p>Name: {client.name} </p>
                                <p>Tell: {client.tell} </p>
                                <p>Amount: {client.amount}KG </p>
                                <p>Loan: {client.loan}/= </p>
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