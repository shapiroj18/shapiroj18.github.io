# Personal Site

## Adding a new project
1. Go to `/data/project-scratch.json` and fill in the requisite information as a new array item.
2. If needed, add a markdown scratch file under `/data/projects/` with the name of your `project` in `project-scratch.json`. Make sure to write the markdown file with the same format as others in the directory, which uses [`gray-matter`](https://github.com/jonschlinkert/gray-matter) to parse.

## Stack
* Framework: [next.js](https://nextjs.org/)
* Parse Markdown: [gray-matter](https://github.com/jonschlinkert/gray-matter)
* Display Markdown: [react-markdown](https://github.com/remarkjs/react-markdown)

## To-Do:
* Make site mobile friendly
* Add site analytics
* Add site SEO
* Add [flow-field](https://github.com/romellogoodman/flow-field.js)
* Add portfolio page