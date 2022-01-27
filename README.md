# Personal Site

## Running locally
1. `cd shapiroj18.github.io`
2. `npm run dev`

## Building
Build is automatically done via the GitHub action `./github/workflows/build_and_deploy.yml`. However, to build locally:
1. `cd shapiroj18.github.io`
2. `npm run build`

## Adding a new project
1. Go to `/data/project-scratch.json` and fill in the requisite information as a new array item.
2. If needed, add a markdown scratch file under `/data/projects/` with the name of your `project` in `project-scratch.json`. Make sure to write the markdown file with the same format as others in the directory, which uses [`gray-matter`](https://github.com/jonschlinkert/gray-matter) to parse.

## Stack
* Framework: [next.js](https://nextjs.org/)
* Parse Markdown: [gray-matter](https://github.com/jonschlinkert/gray-matter)
* Display Markdown: [react-markdown](https://github.com/remarkjs/react-markdown)

## To-Do:
* Make site mobile friendly
* Add portfolio page