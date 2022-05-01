import styles from '../styles/form.module.css'
import Link from "next/link"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';


const PurchasesForm = () => {
    const [isSubmited, setIsSubmited] = useState(false)
    const [formData, setFormData] = useState({
        amount: "",
        sales: "",
        expenses: ""
    })
    const [borrowerData, setBorrowerData] = useState({
        name: "",
        tell: "",
        amount: "",
        loan: ""
    })

    const submitSalesHandle = async e => {
        e.preventDefault()
        setIsSubmited(true)

        try {
            await axios.post("/api/sales", formData)
                .then(doc => {
                    const { data } = doc
                    console.log(data)
                    setIsSubmited(false)
                })
        } catch (error) {
            console.log(error)
        }

    }

    const submitBorrowersHandle = async e => {
        e.preventDefault()


        await axios.patch("/api/sales/borrowers", borrowerData)
            .then(res => {
                const { data } = res
                console.log(data)
            })

        setBorrowerData({
            name: "",
            tell: "",
            amount: "",
            loan: ""
        })
    }

    const addBorrower = () => {
        console.log("added")
    }

    return (
        <div className={styles.login} >
            <svg onClick={addBorrower} className={styles.add} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z" /></svg>

            <h3 className={styles.formHeading} >daily sales details</h3>
            <div className={styles.formWrapper}>
                <form onSubmit={submitSalesHandle} className={styles.form} autoCorrect="true" autoComplete="false" >
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="amount">Enter your amount(KGS)</label>
                        <TextField
                            required
                            id="amount"
                            type="text"
                            label="amount"
                            placeholder='example 5000'
                            className={styles.input}
                            value={formData.amount}
                            onChange={e => setFormData({ ...formData, amount: e.target.value })}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="sales">Enter sales</label>
                        <TextField
                            required
                            id="sales"
                            type="text"
                            label="sales"
                            className={styles.input}
                            placeholder="example 2000000"
                            value={formData.sales}
                            onChange={e => setFormData({ ...formData, sales: e.target.value })}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="expenses">Enter expenses cost</label>
                        <TextField
                            required
                            id="expenses"
                            type="text"
                            label="expenses"
                            className={styles.input}
                            placeholder="example 14000"
                            value={formData.expenses}
                            onChange={e => setFormData({ ...formData, expenses: e.target.value })}
                        />
                    </div>

                    <Button type='submit' className={styles.button} variant="contained" >
                        <Link href="/office/data" >
                            {!isSubmited ? "SEND" : "PROCESSING..."}
                        </Link>
                    </Button>

                </form>
            </div>

            <div className={styles.borrowersForm}>
                <h3>borrowers details</h3>
                <form onSubmit={submitBorrowersHandle} className={styles.form} autoCorrect="true" autoComplete="false" >
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="name">Enter name of borrower</label>
                        <TextField
                            required
                            id="name"
                            type="text"
                            label="name"
                            placeholder='example jane doe'
                            className={styles.input}
                            value={borrowerData.name}
                            onChange={e => setBorrowerData({ ...borrowerData, name: e.target.value })}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="sales">Enter borrower tell</label>
                        <TextField
                            required
                            id="tell"
                            type="text"
                            label="tell"
                            className={styles.input}
                            placeholder="example 0747694644464"
                            value={borrowerData.tell}
                            onChange={e => setBorrowerData({ ...borrowerData, tell: e.target.value })}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="amount">Enter amount(KG)</label>
                        <TextField
                            required
                            id="amount"
                            type="text"
                            label="amount"
                            className={styles.input}
                            placeholder="example 20"
                            value={borrowerData.amount}
                            onChange={e => setBorrowerData({ ...borrowerData, amount: e.target.value })}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="expenses">Enter loan</label>
                        <TextField
                            required
                            id="loan"
                            type="text"
                            label="loan"
                            className={styles.input}
                            placeholder="example 200000"
                            value={borrowerData.loan}
                            onChange={e => setBorrowerData({ ...borrowerData, loan: e.target.value })}
                        />
                    </div>

                    <Button type='submit' className={styles.button} variant="contained" >
                        <Link href="/office/data" >
                            {!isSubmited ? "SEND" : "PROCESSING..."}
                        </Link>
                    </Button>

                </form>
            </div>

        </div>
    )
}

export default PurchasesForm


