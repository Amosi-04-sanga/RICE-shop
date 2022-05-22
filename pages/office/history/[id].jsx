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

  console.log(records)

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
              <h2 className={styles.heading} >Mauzo Ya Tarehe: {moment(records.createdAt).format("DD/MMM/YYYY dddd")} </h2>

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
                      Tonnes zilizonunuliwa
                    </td>
                    <td>
                      {records.amountBought} Tonnes
                    </td>

                  </tr>

                  <tr >
                    <td>
                      02
                    </td>
                    <td>
                      Tonnes zilizouzwa
                    </td>
                    <td>
                      {records.amountSold} Tonnes
                    </td>

                  </tr>

                  <tr >
                    <td>
                      03
                    </td>
                    <td>
                      Mda
                    </td>
                    <td>
                      {records.days} days
                    </td>

                  </tr>

                  <tr >
                    <td>
                      04
                    </td>
                    <td>
                      Manunuzi
                    </td>
                    <td>
                      {format3Dig(records.purchases)}/=
                    </td>

                  </tr>

                  <tr >
                    <td>
                      05
                    </td>
                    <td>
                      Mauzo
                    </td>
                    <td>
                      {format3Dig(records.sales)}/=
                    </td>

                  </tr>

                  <tr >
                    <td>
                      06
                    </td>
                    <td>
                      <p>
                        {
                          records.profit > 0 ?
                            "Faida" :
                            "Hasara"
                        }
                      </p>
                    </td>
                    <td>
                      {format3Dig(Math.abs(records.profit))}/=
                    </td>

                  </tr>

                </tbody>


              </table>



              <div className={styles.borrowers}>
                {
                  !records.borrowers ?
                    "null" :
                    records.borrowers.length === 0 ?
                      "NO BORROWERS" :
                      (
                        <div>
                          <h3 style={{ textAlign: "center", margin: "1rem auto" }} >taarifa za madeni</h3>
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
                                records.borrowers.map((client, index) => (
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


