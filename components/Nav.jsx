import Link from "next/link"
import styles from '../styles/nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav} >
      <div className={styles.logo}>
        <img width="50px" src="/logo.png" alt="logo" />
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