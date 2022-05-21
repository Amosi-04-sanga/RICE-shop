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

/* 

 {
     

                                        records.map((record, index) => (
                                            <Link key={index} href={`/office/history/${record._id}`} >
                                                <li className={styles.listItem} >
                                                    <div className={styles.alignLeft}>
                                                    <svg style={{width: "4vw", fill: "rgb(97, 210, 206)", height: "4vw", marginRight: ".6rem"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 32V64H288V32C288 14.33 302.3 0 320 0C337.7 0 352 14.33 352 32V64H400C426.5 64 448 85.49 448 112V160H0V112C0 85.49 21.49 64 48 64H96V32C96 14.33 110.3 0 128 0C145.7 0 160 14.33 160 32zM0 192H448V464C448 490.5 426.5 512 400 512H48C21.49 512 0 490.5 0 464V192zM64 304C64 312.8 71.16 320 80 320H112C120.8 320 128 312.8 128 304V272C128 263.2 120.8 256 112 256H80C71.16 256 64 263.2 64 272V304zM192 304C192 312.8 199.2 320 208 320H240C248.8 320 256 312.8 256 304V272C256 263.2 248.8 256 240 256H208C199.2 256 192 263.2 192 272V304zM336 256C327.2 256 320 263.2 320 272V304C320 312.8 327.2 320 336 320H368C376.8 320 384 312.8 384 304V272C384 263.2 376.8 256 368 256H336zM64 432C64 440.8 71.16 448 80 448H112C120.8 448 128 440.8 128 432V400C128 391.2 120.8 384 112 384H80C71.16 384 64 391.2 64 400V432zM208 384C199.2 384 192 391.2 192 400V432C192 440.8 199.2 448 208 448H240C248.8 448 256 440.8 256 432V400C256 391.2 248.8 384 240 384H208zM320 432C320 440.8 327.2 448 336 448H368C376.8 448 384 440.8 384 432V400C384 391.2 376.8 384 368 384H336C327.2 384 320 391.2 320 400V432z"/></svg>
                                                        <p> {moment(record.createdAt).fromNow()} </p>
                                                    </div>
                                                    <p className={styles.borrowers} >{ record.borrowers.length === 0 ? "" : record.borrowers.length } </p>
                                                </li>
                                            </Link>
                                        ))
                                    }


<tr>
                                            <td>Alfreds Futterkiste</td>
                                            <td>Maria Anders</td>
                                            <td>Germany</td>
                                        </tr>
*/