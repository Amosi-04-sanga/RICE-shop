import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import styles from '../../styles/records.module.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import OfficeNav from '../../components/OfficeNav'


const Records = () => {
    const [salesInfo, setSalesInfo] = useState([])

    useEffect(() => {
        const getSales = async () => {
            try {
                await axios.get("/api/sales")
                    .then(res => {
                        const { data } = res
                        console.log(data)

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
            <h2 style={{textAlign: "center", margin: "1rem auto"}} >Dairy sales information</h2>

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
                                <ol className={styles.list} >
                                   {
                                       salesInfo.map( (sale, index) => (
                                          <Link key={index} href={`/office/records/${sale._id}`} >
                                             <li> fake date </li>
                                          </Link>
                                        ))
                                   }
                                </ol>
                            )
                }
            </div>

        </div>
    )
}

export default Records