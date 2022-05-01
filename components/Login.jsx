import styles from '../styles/form.module.css'
import Link from "next/link"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


const Login = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const submitHandle = e => {
        e.preventDefault()
        setIsLoggedIn(!isLoggedIn)
        console.log("form data submited!")
    }

    return (
        <div className={styles.login} >
            <div className={styles.formWrapper}>
                <form onSubmit={submitHandle} className={styles.form} autoCorrect="true" autoComplete="false" >
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="email">Enter your email</label>
                        <TextField
                            required
                            id="email"
                            type="email"
                            label="email"
                            placeholder='Enter email'
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="password">Enter password</label>
                        <TextField
                            required
                            id="password"
                            type="password"
                            label="password"
                            className={styles.input}
                        />
                    </div>

                    <Button type='submit' className={styles.button} variant="contained" >
                            <Link href="/office/data" >
                            {!isLoggedIn ? "LOGIN" : "PROCESSING..."}
                            </Link>
                    </Button>

                </form>
            </div>
        </div>
    )
}

export default Login