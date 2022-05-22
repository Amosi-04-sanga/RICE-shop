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
                      (
                        <p style={{textAlign: "center"}} >HAKUNA MADENI</p>
                      ) :
                      (
                        <div>
                          <h3 style={{textAlign: "center", margin: "1rem auto"}} >taarifa za madeni</h3>
                          <table className={tablecss.customers}>
                            <thead>
                              <tr>
                                <th>S/NO</th>
                                <th>Jina</th>
                                <th>Namba</th>
                                <th>kiasi</th>
                                <th>deni</th>
                                <th></th>
                              </tr>
                            </thead>

                            <tbody>

                              {
                                sales.borrowers.map((client, index) => (
                                  <tr key={index} className={styles.listItem} >
                                    <td>{index + 1} </td>
                                    <td>{client.name} </td>
                                    <td>{client.tell} </td>
                                    <td>{client.amount}KG </td>
                                    <td>{client.loan}/= </td>
                                    <td> ondoa </td>
                                  </tr>
                                ))
                              }

                            </tbody>

                          </table>
                        </div>
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


