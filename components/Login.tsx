import styles from '../styles/form.module.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import jwt from 'jsonwebtoken'


const Login = () => {
    const router = useRouter()
    const [isError, setIsError] = useState(false)
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        name: "",
        password: ""
    })
    const submitHandle = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        await axios.post("/api/login", formData)
            .then(res => {
                const { data } = res
                const token = data.token

                const json = jwt.decode(token) as { [KEY: string]: Boolean }

                if (json.user) {
                    router.push("/office/data")
                }
                else {
                    setIsError(true)
                    setMessage("password sio sahihi!")
                }
            })

    }

    return (
        <div className={styles.login} >
            <p className={styles.errorMsg} > {message} </p>
            <div className={styles.formWrapper}>
                <form onSubmit={submitHandle} className={styles.form} autoCorrect="true" autoComplete="false" >
                    <div className={styles.row}>
                        <label className={styles.label} htmlFor="email">Enter your email</label>
                        <TextField
                            required
                            id="text"
                            type="name"
                            label="name"
                            placeholder='Enter scret name'
                            className={styles.input}
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
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
                            value={formData.password}
                            onChange={e => setFormData({ ...formData, password: e.target.value })}
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

export default Login


