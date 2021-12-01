import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function homeIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonathan&apos;s Personal Site</title>
        <meta name="description" content="" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>
          Hi, I&apos;m Jonathan!
        </p>

        <p className={styles.description}>
          For now this is a playground project.
          In the meantime, check out my project ideas under&nbsp;
          <Link href="project-scratch"><a>project scratch</a></Link>.
        </p>
      </main>
    </div>
  )
}