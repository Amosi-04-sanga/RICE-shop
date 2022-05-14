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

      <header className={styles.header} >
        <div class={styles.overlay}>
          <h1 className={styles.heading} >wauzaji wa mchele jumla na rejareja</h1>
          <p className={styles.text} >pata mchele bora kutoka mbeya kwa bei nafuu Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </header>


      <h1 className={styles.heading}>our shop</h1>
      
    </div>
  )
}
