import axios from 'axios'
import { useEffect, useState } from 'react'
import PurchasesForm from '../../components/PurchasesForm'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import SalesForm from '../../components/DailySales'
import OfficeNav from '../../components/OfficeNav'

const Data = () => {

  const [purchases, setPurchases] = useState(null)
  useEffect(() => {

    const fetchPurchases = async () => {
      try {
        await axios.get("/api/purchases")
          .then(res => {
            const { data } = res
            console.log(data)
            setPurchases(data)
          })

      } catch (error) {
        console.log(error);
      }
    }

    fetchPurchases()

  }, [])


  return (
    <div>
      < OfficeNav />
      <h1 style={{ textAlign: "center", margin: "2rem auto 1rem" }} >Fill required data here</h1>

      {
        !purchases ?
          (<Box sx={{ position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }}>
            <CircularProgress />
          </Box>) :
          purchases.length === 1 ?
            (< SalesForm />) :
            (< PurchasesForm />)
      }
    </div>
  )
}

export default Data


