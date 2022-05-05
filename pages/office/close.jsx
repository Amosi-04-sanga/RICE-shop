import axios from 'axios'
import moment from 'moment'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../../styles/close.module.css'

const Close = () => {
  const router = useRouter()
  const [processing, setProcessing] = useState(false)

  const closeSalesHandle = async () => {
    setProcessing(true)
    let purchases, sales, amountBought, amountSold, days
    let borrowers = []

    await axios.get("/api/purchases")
      .then(res => {
        const { data } = res
        const { price, expenses, amount } = data[0]

        const purchasesInfo = {
          price, expenses, amount: amount / 1000
        }

        purchases = Number(purchasesInfo.price) + Number(purchasesInfo.expenses)
        amountBought = purchasesInfo.amount
      })

    await axios.get("/api/sales")
      .then(res => {
        const { data } = res
        let totalTonnes = 0
        let totalSales = 0
        let totalExpenses = 0

        days = data.length

        data.map(item => {
          totalTonnes += Number(item.amount)
          totalSales += Number(item.sales)
          totalExpenses += Number(item.expenses)

          if (item.borrowers.length > 0) {
            borrowers.push(...item.borrowers)
          }


        })

        sales = totalSales - totalExpenses
        amountSold = totalTonnes / 1000
      })

    const profit = sales - purchases

    const data = { profit, sales, purchases, amountBought, amountSold, borrowers, days }

    const Data = await axios.post("/api/closeSales", data)

    console.log(Data);

    router.push("/office/history")
  }



  return (
    <>
      <div className={styles.container} >
        <h1 className={styles.date} > {moment(new Date()).format("DD MM, YYYY dddd")} </h1>
        <button onClick={closeSalesHandle} className={styles.btn} > {!processing ? "close sales" : "processing..."} </button>
      </div>

    </>
  )
}

export default Close


