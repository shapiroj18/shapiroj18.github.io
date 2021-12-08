import Head from 'next/head'
import ReactMarkdown from 'react-markdown'
import { getAllProjects, getProjectData } from '../../lib/projects'
import styles from '../../styles/Home.module.css'


export default function Project({ projectData }) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Project Info</title>
          <meta name="project" content="" />
        </Head>
  
        <main className={styles.main}>
        <p className={styles.scratch}>
          <ReactMarkdown linkTarget="_blank">{ projectData['content'] }</ReactMarkdown>
        </p>
        </main>
    </div>
    )}

export async function getStaticProps({ params }) {
  const projectData = getProjectData(params.project)

  return {
    props: {
      projectData
    }
  }
}

export async function getStaticPaths() {

  const paths = getAllProjects()
  return {
    paths,
    fallback: false
  }
}