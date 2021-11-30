import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Project Scratch</title>
          <meta name="description" content="" />
        </Head>
  
        <main className={styles.main}>
        <p className={styles.title}>
          Project Ideas and Scratch
        </p>
        <div className={styles.grid}>
          <a href="project-scratch/chemical-refs" className={styles.card}>
            <h2>Auto-Compounds&nbsp;&rarr;</h2>
            <p>
            I remember writing my thesis in organic chemistry for undergrad how difficult it was to use placeholders for all of my numbered compounds and references. It would be great to build a program that could automate the naming and references for papers. 
            </p>
          </a>
        </div>
        </main>
    </div>
    )}