import { TextField } from '@mui/material'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/form.module.css'


const EditPurchases = () => {
    const router = useRouter()
    const [purchases, setPurchases] = useState([])
    const [sendPurchases, setSendPurchases] = useState(false)
    const blankForm = {
        amount: "",
        price: "",
        expenses: ""
    }
    const [formData, setFormData] = useState(blankForm)
    useEffect(() => {

        const getPurchases = async () => {
            await axios.get("/api/purchases")
                .then(res => {
                    const { data } = res
                    console.log(data);
                    setPurchases(data)
                    setFormData({
                        amount: data[0].amount,
                        price: data[0].price,
                        expenses: data[0].expenses
                    })
                })
        }
        getPurchases()

    }, [])

    const submitSalesHandle = async (e) => {
        e.preventDefault()
        setSendPurchases(true)

        try {
            await axios.patch("/api/purchases", formData)
                .then(doc => {
                    const { data } = doc
                    console.log(data)
                    setFormData(blankForm)
                    router.push("/office/data")
                })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h2 className={styles.formHeading} >rekebisha taarifa za manunuzi</h2>

            {
                purchases.length === 0 ?
                    (
                        <div>
                            <img style={{opacity: ".4", width: "50px", position: "fixed", left: "50%", top: "50%", transform: 'translate(-50%,-50%)'}} src="/logo.png" alt="logo" />
                        </div>
                    ) :
                    purchases.length > 0 && (
                        <div className={styles.formWrapper}>
                            <form onSubmit={submitSalesHandle} className={styles.form} autoCorrect="true" autoComplete="false" >
                                <div className={styles.row}>
                                    <label className={styles.label} htmlFor="amount">ingiza kiasi(KGS)</label>
                                    <TextField
                                        required
                                        id="amount"
                                        type="text"
                                        label="kiasi"
                                        placeholder='example 5000'
                                        className={styles.input}
                                        value={formData.amount}
                                        onChange={e => setFormData({ ...formData, amount: e.target.value })}
                                    />
                                </div>
                                <div className={styles.row}>
                                    <label className={styles.label} htmlFor="price">ingiza gharama zilizotumika(TSH)</label>
                                    <TextField
                                        required
                                        id="price"
                                        type="text"
                                        label="gharama"
                                        className={styles.input}
                                        placeholder="example 2000000"
                                        value={formData.price}
                                        onChange={e => setFormData({ ...formData, price: e.target.value })}
                                    />
                                </div>
                                <div className={styles.row}>
                                    <label className={styles.label} htmlFor="expenses">Ingiza gharama zinginezo(TSH)</label>
                                    <TextField
                                        required
                                        id="expenses"
                                        type="text"
                                        label="mengineyo"
                                        className={styles.input}
                                        placeholder="example 14000"
                                        value={formData.expenses}
                                        onChange={e => setFormData({ ...formData, expenses: e.target.value })}
                                    />
                                </div>

                                <button type='submit' className={styles.button} >
                                    {!sendPurchases ? "TUMA" : "SUBIRI..."}
                                </button>

                            </form>
                        </div>
                    )
            }
        </div>
    )
}

export default EditPurchases