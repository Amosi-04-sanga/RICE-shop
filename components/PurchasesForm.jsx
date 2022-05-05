import styles from '../styles/form.module.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const PurchasesForm = () => {
    const router = useRouter()
    const [isSubmited, setIsSubmited] = useState(false)
    const [formData, setFormData] = useState({
        amount: "",
        price: "",
        expenses: ""
    })

    const submitHandle = async e => {
        e.preventDefault()
        setIsSubmited(!isSubmited)


        try {
            await axios.post("/api/purchases", formData)
                .then(doc => {
                    const { data } = doc
                    console.log(data)
                    setFormData({
                        amount: "",
                        price: "",
                        expenses: ""
                    })
                    router.push("/office/records")
                })
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className={styles.login} >
            <h3 className={styles.formHeading} > purchases details </h3>
            <div className={styles.formWrapper}>
                <form onSubmit={submitHandle} className={styles.form} autoCorrect="true" autoComplete="false" >
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="amount">Enter amount(KGS)</label>
                        <TextField
                            required
                            id="amount"
                            type="text"
                            label="amount"
                            placeholder='example 20000'
                            className={styles.input}
                            value={formData.amount}
                            onChange={e => setFormData({ ...formData, amount: e.target.value })}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="price">Enter price of goods(TSH)</label>
                        <TextField
                            required
                            id="price"
                            type="text"
                            label="price"
                            className={styles.input}
                            placeholder="example 25000000"
                            value={formData.price}
                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="expenses">Enter expenses cost(TSH)</label>
                        <TextField
                            required
                            id="expenses"
                            type="text"
                            label="expenses"
                            className={styles.input}
                            placeholder="example 250000"
                            value={formData.expenses}
                            onChange={e => setFormData({ ...formData, expenses: e.target.value })}
                        />
                    </div>

                    <button type='submit' className={styles.button} >
                        {!isSubmited ? "SEND" : "PROCESSING..."}
                    </button>

                </form>
            </div>
        </div>
    )
}

export default PurchasesForm

