import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export function getAllProjects() {
    const projectsDir = path.join(process.cwd(), 'data/projects')
    const fileNames = fs.readdirSync(projectsDir)

    return fileNames.map(fileName => {
        return {
            params: {
                project: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export function getProjectData(project) {
    const projectsDir = path.join(process.cwd(), 'data/projects')
    const fullPath = path.join(projectsDir, `${project}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter
    const matterResult = matter(fileContents)

    return {
        project,
        ...matterResult.data
    }
}