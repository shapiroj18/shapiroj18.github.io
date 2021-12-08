import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function page_404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OoOps!</title>
        <meta name="description" content="" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>
          Uh Oh...
        </p>

        <p className={styles.description}>
          You seem to have lost your way.
        </p>
      </main>
    </div>
  )
}