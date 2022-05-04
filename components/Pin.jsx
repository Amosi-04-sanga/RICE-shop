import styles from '../styles/form.module.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useRouter } from 'next/router';


const Close = () => {
    const router = useRouter()
    const [password, setPassword] = useState("")
    const submitHandle = e => {
        e.preventDefault()

        router.push("/office/close")
    }

    return (
        <div className={styles.login} >
            <div className={styles.formWrapper}>
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


