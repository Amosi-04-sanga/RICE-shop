import Link from "next/link"
import styles from '../styles/nav.module.css'

const Nav = () => {
   return (
      <nav className={styles.nav} >

         <ul className={`${styles.links} ${styles.fullWidth}`}>
            <li>
               <Link href="/office/data" > Data </Link>
            </li>
            <li>
               <Link href="/office/records" > sales </Link>
            </li>
            <li>
               <Link href="/office/history" > History </Link>
            </li>
            <li>
               <Link href="/" > Logout </Link>
            </li>
         </ul>

      </nav>
   )
}

export default Nav