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
        <p className={styles.title}>
          Hi, I&apos;m Jonathan!
        </p>

        <p className={styles.description}>
          For now this is a playground project.
          In the meantime, check out my project ideas under&nbsp;
          <Link href="project-scratch"><a>project scratch</a></Link>.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
