import Link from "next/link"
import styles from '../styles/nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav} >
        <div className={styles.logo}>
            <Link href="/" > Ｎ𝐙Ҝ </Link>
        </div>
        <ul className={styles.links}>
            <li>
               <Link href="/" > Home </Link>
            </li>
            <li>
               <Link href="/login" > Office </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Nav