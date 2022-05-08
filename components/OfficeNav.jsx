import Link from "next/link"
import styles from '../styles/nav.module.css'

const Nav = () => {
   return (
      <nav className={styles.nav} >

         <ul className={`${styles.links} ${styles.fullWidth}`}>
            <li>
               <Link href="/office/data" > Jaza </Link>
            </li>
            <li>
               <Link href="/office/records" > Mauzo </Link>
            </li>
            <li>
               <Link href="/office/history" > Records </Link>
            </li>
            <li>
               <Link href="/" > Toka </Link>
            </li>
         </ul>

      </nav>
   )
}

export default Nav