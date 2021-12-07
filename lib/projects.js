import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export function getAllProjects() {
    
    const projectScratchDataFile = path.join(process.cwd(), 'data/project-scratch.json')
    const projectScratchData = JSON.parse(fs.readFileSync(projectScratchDataFile))

    return projectScratchData.map(arrayItem => {
        return {
            params: {
                project: arrayItem.project
            }
        }
    })
}
    

export function getProjectData(project) {
    const projectsDir = path.join(process.cwd(), 'data/projects')
    const fullPath = path.join(projectsDir, `${project}.md`)
    const backupPath = path.join(projectsDir, 'backup.md')

    if (fs.existsSync(fullPath)) {
        var fileContents = fs.readFileSync(fullPath, 'utf8')
    } else {
        var fileContents = fs.readFileSync(backupPath, 'utf8')
    }

    const { data, content } = matter(fileContents)
    return {
        project,
        frontMatter: data,
        content
    }
}