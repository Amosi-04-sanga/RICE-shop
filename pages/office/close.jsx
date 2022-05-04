import moment from 'moment'
import { useRouter } from 'next/router'
import styles from '../../styles/close.module.css'

const Close = () => {
  const router = useRouter()
  const closeSalesHandle = () => {
    router.push("/office/history")
  }

  return (
    <div className={styles.container} >
     <h1 className={styles.date} > {moment(new Date()).format("DD MM, YYYY dddd")} </h1>
     <button onClick={closeSalesHandle} className={styles.btn} > close sales </button>   
    </div>
  )
}

export default Close


