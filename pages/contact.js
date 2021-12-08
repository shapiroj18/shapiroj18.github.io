import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Contact() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Jonathan&apos;s Contact Info</title>
          <meta name="description" content="" />
        </Head>
  
        <main className={styles.main}>
        <p>
          <img className={styles.photoprofile}
            src="https://avatars.githubusercontent.com/u/55108156?v=4" 
            alt="profile photo" 
            width="300"
          />
          <h2>Contact</h2>
            <br/>
            <a className={styles.contactlinks} href="https://github.com/shapiroj18">
            <img 
              src="/images/github.png"
              alt="github"
              width="25"
            />
            &nbsp;GitHub
            </a>
            <br/>
            <a className={styles.contactlinks} href="https://www.linkedin.com/in/jonathan-shapiro/">
            <img 
              src="/images/linkedin.png"
              alt="linkedin"
              width="25"
            />
            &nbsp;LinkedIn
            </a>
            <br/>
            <a className={styles.contactlinks} href="https://medium.com/@jonshapiro_53366">
            <img 
              src="/images/medium.png"
              alt="medium"
              width="25"
            />
            &nbsp;Medium
            </a>
          </p>
        </main>
    </div>
    )}