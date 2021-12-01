import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import styles from '../../styles/Home.module.css'


export default function Index({ projectScratchData }) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Project Scratch</title>
          <meta name="description" content="" />
        </Head>
  
        <main className={styles.main}>
        <p className={styles.title}>
          Project Ideas and Scratch Work
        </p>
        <div className={styles.grid}>
          <a href="project-scratch/chemical-refs" className={styles.card}>
            <h2>{projectScratchData[0]['header']}&nbsp;&rarr;</h2>
            <p>
            {projectScratchData[0]['description']}
            </p>
          </a>
        </div>
        </main>
    </div>
    )}

export async function getStaticProps(context) {
    
    const projectScratchDataFile = path.join(process.cwd(), 'data/project-scratch.json')
    const projectScratchData = JSON.parse(fs.readFileSync(projectScratchDataFile))

    return {
        props: { projectScratchData },
    }
}
    