import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../../../styles/records.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import OfficeNav from '../../../components/OfficeNav'
import moment from 'moment'


const Records = () => {
    const [salesInfo, setSalesInfo] = useState(null)

    useEffect(() => {
        const getSales = async () => {
            try {
                await axios.get("/api/sales")
                    .then(res => {
                        const { data } = res
                        console.log(data)
                        setSalesInfo(data)
                    })
            } catch (error) {
                console.log(error)
            }
        }
        getSales()
    }, [])


    return (
        <div className={styles.container} >
            < OfficeNav />
            <h2 style={{ textAlign: "center", margin: "1rem auto" }} >Taarifa za mauzo ya kilasiku</h2>

            <div className={styles.salesDetails}>
                {
                    !salesInfo ?
                        (
                            <Box sx={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
                                <CircularProgress />
                            </Box>
                        ) :
                        salesInfo.length === 0 ?
                            (
                                <Box sx={{ position: "fixed", color: "rebeccapurple", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
                                    <h2  >NO SALES YET!</h2>
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
                                            salesInfo.map((item, index) => (


                                                <tr key={item.createdAt} >
                                                    <td> {index + 1} </td>
                                                    <td>
                                                        <span >
                                                            <Link key={index} href={`/office/records/${item._id}`} >
                                                                {moment(item.createdAt).format("DD MMM, YYYY")}
                                                            </Link>
                                                        </span>
                                                    </td>
                                                    <td> {item.borrowers.length === 0 ? "0" : item.borrowers.length} </td>

                                                </tr>
                                            ))
                                        }

                                    </tbody>


                                </table>
                            )
                }
            </div>

        </div>
    )
}

export default Records



