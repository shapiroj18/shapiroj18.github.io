import Head from 'next/head'
import styles from '../../styles/Home.module.css'


export default function Project({ projectData }) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Project Info</title>
          <meta name="project" content="" />
        </Head>
  
        <main className={styles.main}>
        <p>{ projectData }</p>
        </main>
    </div>
    )}

export async function getStaticProps({ params }) {
  const projectData = params.project
  return {
    props: {
      projectData
    }
  }
} 

export async function getStaticPaths() {
    return {
      paths: [
        { params: { project: '1' } },
        { params: { project: '2' } }
      ],
      fallback: false
    }
  }