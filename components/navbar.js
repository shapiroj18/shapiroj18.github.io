import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar({ children }) {
  return (
    <>
      <Head>
        <title>Page Layout</title>
      </Head>
      <p className={styles.grid}>
        <Link href="/">
            <a>main</a>
        </Link>
        &nbsp;&nbsp;{'/'}&nbsp;&nbsp;
        <Link href="/project-scratch">
            <a>project scratch</a>
        </Link>
        &nbsp;&nbsp;{'/'}&nbsp;&nbsp;
        <Link href="/contact">
            <a>contact</a>
        </Link>
        </p>
      {children}
    </>
  )
}