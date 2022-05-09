import styles from '../styles/form.module.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import jwt from 'jsonwebtoken';


const Close = () => {
    const router = useRouter()
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [isError, setIsError] = useState(false)
    const submitHandle = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        try {
            await axios.post("/api/closePin", { password })
                .then(res => {
                    const { data } = res
                    const token = data.token

                    const json = jwt.decode(token) as { [KEY: string]: Boolean }

                    if (json.user) {
                        router.push("/office/close")
                    }
                    else {
                        setIsError(true)
                        setMessage("password sio sahihi")
                    }

                })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={styles.login} >
            <div className={styles.formWrapper}>
                <p className={styles.errorMsg} > {message} </p>
                <form onSubmit={submitHandle} className={styles.form} autoCorrect="true" autoComplete="false" >

                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="password">Enter password</label>
                        <TextField
                            required
                            id="password"
                            type="password"
                            label="password"
                            className={styles.input}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <button type='submit' className={styles.button} >
                        LOGIN
                    </button>

                </form>
            </div>
        </div>
    )
}

export default Close


