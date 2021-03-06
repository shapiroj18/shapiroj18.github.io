import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function homeIndex() {
  return (
    <div className={styles.container}>
      <Head>
        <title>&nbsp;¸.·´`·.¸&gt;&lt;(((º&gt;</title>
        <meta name="description" content="" />
      </Head>

      <main className={styles.main}>
        <p className={styles.title}>
          Hi, I&apos;m Jonathan!
        </p>

        <p className={styles.description}>
          This site is an active project.
          In the meantime, check out my project ideas under&nbsp;
          <Link href="project-scratch"><a>project scratch</a></Link>.
        </p>
      </main>
    </div>
  )
}