import styles from '../styles/form.module.css'
import Link from "next/link"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const PurchasesForm = () => {
    const router = useRouter()
    const [shown, setShown] = useState(false)
    const [sendSales, setSendSales] = useState(false)
    const [sendBorrowers, setsendBorrowers] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
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

    const submitSalesHandle = async (e) => {
        e.preventDefault()
        setSendSales(true)

        try {
            await axios.post("/api/sales", formData)
                .then(doc => {
                    const { data } = doc
                    console.log(data)
                    setFormData({
                        amount: "",
                        sales: "",
                        expenses: ""
                    })
                    router.push("/office/records")
                })
        } catch (error) {
            console.log(error)
        }

    }

    const submitBorrowersHandle = async (e) => {
        e.preventDefault()
        setsendBorrowers(true)

        try {
            await axios.patch("/api/sales/borrowers", borrowerData)
                .then(res => {
                    const { data } = res
                    console.log(data)
                    setBorrowerData({
                        name: "",
                        tell: "",
                        amount: "",
                        loan: ""
                    })
                    router.push("/office/records")
                })

        } catch (error) {
            console.error(error)
        }
    }

    const addBorrower = () => {
        setShown(!shown)
    }

    const calculatorHandle = () => {
        router.push("/office/pin")
    }

    const editPurchasesHandler = () => {
        router.push("/office/edit-purchases")
    }

    const openMenuHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.login} >
            <div className={styles.menuWrapper}>
                <svg onClick={openMenuHandler} xmlns="http://www.w3.org/2000/svg" className={`${styles.listmenu}`} viewBox="0 0 512 512"><path d="M88 48C101.3 48 112 58.75 112 72V120C112 133.3 101.3 144 88 144H40C26.75 144 16 133.3 16 120V72C16 58.75 26.75 48 40 48H88zM480 64C497.7 64 512 78.33 512 96C512 113.7 497.7 128 480 128H192C174.3 128 160 113.7 160 96C160 78.33 174.3 64 192 64H480zM480 224C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H192C174.3 288 160 273.7 160 256C160 238.3 174.3 224 192 224H480zM480 384C497.7 384 512 398.3 512 416C512 433.7 497.7 448 480 448H192C174.3 448 160 433.7 160 416C160 398.3 174.3 384 192 384H480zM16 232C16 218.7 26.75 208 40 208H88C101.3 208 112 218.7 112 232V280C112 293.3 101.3 304 88 304H40C26.75 304 16 293.3 16 280V232zM88 368C101.3 368 112 378.7 112 392V440C112 453.3 101.3 464 88 464H40C26.75 464 16 453.3 16 440V392C16 378.7 26.75 368 40 368H88z" /></svg>
                <ul className={`${ isOpen ? styles.openmenu : styles.closemenu }`} >
                    <li onClick={editPurchasesHandler} >EDIT MANUNUZI</li>
                    <li onClick={calculatorHandle} >FUNGA MAUZO</li>
                </ul>
            </div>

            <h3 className={styles.formHeading} >Mauzo ya leo</h3>
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

                    <button type='submit' className={styles.button} >
                        {!sendSales ? "TUMA" : "SUBIRI..."}
                    </button>

                </form>
            </div>


            <div className={`${styles.toggleForm}`}>
                <h3>Taarifa za wateja wanaodaiwa</h3>
                <svg onClick={addBorrower} className={styles.addIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM390.6 246.6l-112 112C272.4 364.9 264.2 368 256 368s-16.38-3.125-22.62-9.375l-112-112c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L256 290.8l89.38-89.38c12.5-12.5 32.75-12.5 45.25 0S403.1 234.1 390.6 246.6z" /></svg>
            </div>

            <div className={`${styles.borrowersForm} ${shown ? styles.showForm : styles.hideForm} `}>
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

                    <button type='submit' className={styles.button} >
                        {!sendBorrowers ? "TUMA" : "SUBIRI..."}
                    </button>

                </form>
            </div>

        </div>
    )
}

export default PurchasesForm


// <svg onClick={calculatorHandle} className={styles.calculator} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0h-288C22.38 0 0 22.38 0 48v416C0 489.6 22.38 512 48 512h288c25.62 0 48-22.38 48-48v-416C384 22.38 361.6 0 336 0zM64 208C64 199.2 71.2 192 80 192h32C120.8 192 128 199.2 128 208v32C128 248.8 120.8 256 112 256h-32C71.2 256 64 248.8 64 240V208zM64 304C64 295.2 71.2 288 80 288h32C120.8 288 128 295.2 128 304v32C128 344.8 120.8 352 112 352h-32C71.2 352 64 344.8 64 336V304zM224 432c0 8.801-7.199 16-16 16h-128C71.2 448 64 440.8 64 432v-32C64 391.2 71.2 384 80 384h128c8.801 0 16 7.199 16 16V432zM224 336c0 8.801-7.199 16-16 16h-32C167.2 352 160 344.8 160 336v-32C160 295.2 167.2 288 176 288h32C216.8 288 224 295.2 224 304V336zM224 240C224 248.8 216.8 256 208 256h-32C167.2 256 160 248.8 160 240v-32C160 199.2 167.2 192 176 192h32C216.8 192 224 199.2 224 208V240zM320 432c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32c0-8.801 7.201-16 16-16h32c8.801 0 16 7.199 16 16V432zM320 336c0 8.801-7.199 16-16 16h-32c-8.799 0-16-7.199-16-16v-32C256 295.2 263.2 288 272 288h32C312.8 288 320 295.2 320 304V336zM320 240C320 248.8 312.8 256 304 256h-32C263.2 256 256 248.8 256 240v-32C256 199.2 263.2 192 272 192h32C312.8 192 320 199.2 320 208V240zM320 144C320 152.8 312.8 160 304 160h-224C71.2 160 64 152.8 64 144v-64C64 71.2 71.2 64 80 64h224C312.8 64 320 71.2 320 80V144z" /></svg>
