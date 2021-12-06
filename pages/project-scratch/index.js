import Head from 'next/head'
import fs from 'fs'
import path from 'path'
import styles from '../../styles/Home.module.css'


export default function projectScratchIndex({ projectScratchData }) {

    let projectScratchDataList = projectScratchData.map((item, index) => {
      return (
        <a href={"project-scratch/" + projectScratchData[index]['project']} className={styles.card} key={projectScratchData['id']}>
            <h2>{projectScratchData[index]['header']}&nbsp;&rarr;</h2>
            <p>
            {projectScratchData[index]['description']}
            </p>
        </a>
      )
    })

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
          {projectScratchDataList}
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
    