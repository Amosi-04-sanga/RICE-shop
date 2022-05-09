import Head from 'next/head'
import Nav from '../components/Nav'
import moment from 'moment'
import styles from '../styles/home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Home page</title>
      </Head>
      < Nav />

      <h1 style={{ textAlign: "center", lineHeight: "15vh" }} > {moment(new Date()).format("MMMM Do YYYY")} </h1>
      
     <div className={styles.photo_container}>
        <img className={styles.photo} src="/rice1.jpeg" alt="rice" />
     </div>
    </div>
  )
}
