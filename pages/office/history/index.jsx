import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import OfficeNav from '../../../components/OfficeNav'
import styles from '../../../styles/records.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import moment from 'moment'


const History = () => {

    const [records, setRecords] = useState(null)

    useEffect(() => {

        const fetchInfo = async () => {
            try {
                axios.get("/api/closeSales")
                    .then(doc => {
                        const { data } = doc
                        console.log(data)
                        setRecords(data)
                    })
            } catch (error) {
                console.log(error)
            }
        }

        fetchInfo()

    }, [])


    return (
        <>
            < OfficeNav />
            <h2 style={{ textAlign: "center", margin: "1rem auto" }} >Records za mauzo yaliyopita</h2>

            <div className={styles.salesDetails}>
                {
                    !records ?
                        (
                            <Box sx={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
                                <CircularProgress />
                            </Box>
                        ) :
                        records.length === 0 ?
                            (
                                <Box sx={{ position: "fixed", color: "rebeccapurple", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
                                    <h2  >HAKUNA RECORDS!</h2>
                                </Box>
                            ) :
                            (

                                <table className={styles.customers}>
                                    <thead>
                                        <tr>
                                            <th>S/NO</th>
                                            <th>Tarehe</th>
                                            <th>Madeni</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            records.map((item, index) => (


                                                <tr key={item.createdAt} >
                                                    <td> {index + 1} </td>
                                                    <td>
                                                        <Link key={index} href={`/office/history/${item._id}`} >
                                                            {moment(item.createdAt).format("DD MMM, YYYY")}
                                                        </Link> </td>
                                                    <td> {item.borrowers.length === 0 ? "" : item.borrowers.length} </td>

                                                </tr>
                                            ))
                                        }

                                    </tbody>


                                </table>
                            )
                }
            </div>
        </>
    )
}

export default History



