import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Jonathan&apos;s Personal Site</title>
          <meta name="description" content="" />
          <link rel="icon" href="/images/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
        <p className={styles.grid}>
          <Link href="/">
            <a>main</a>
          </Link>
          &nbsp;&nbsp;{'/'}&nbsp;&nbsp;
          <Link href="project-scratch">
            <a>project scratch</a>
          </Link>
          &nbsp;&nbsp;{'/'}&nbsp;&nbsp;
          <Link href="contact">
            <a>contact</a>
          </Link>
        </p>
        </main>
    </div>
    )}