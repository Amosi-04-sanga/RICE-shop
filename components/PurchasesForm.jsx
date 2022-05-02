import styles from '../styles/form.module.css'
import Link from "next/link"
import TextField from '@mui/material/TextField';
import { useState } from 'react';


const PurchasesForm = () => {
    const [isSubmited, setIsSubmited] = useState(false)

    const submitHandle = e => {
        e.preventDefault()
        setIsSubmited(!isSubmited)
        console.log("form data submited!")
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
                        />
                    </div>

                    <button type='submit' className={styles.button} >
                        <Link href="/office/data" >
                            {!isSubmited ? "LOGIN" : "PROCESSING..."}
                        </Link>
                    </button>

                </form>
            </div>
        </div>
    )
}

export default PurchasesForm