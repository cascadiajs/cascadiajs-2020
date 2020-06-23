let fs = require('fs')
let exists = fs.existsSync
let read = fs.readFileSync
let md = require('marked')
let fm = require('front-matter')
let join = require('path').join
let Layout = require('../layout')

/**
 * Page view: catchall for all other pages, authored either in markdown or HTML
 */
module.exports = async function Page (req) {
  let page = req.path.substr(1)
  let doc = join(__dirname, 'content', `${page}.md`)
  if (!exists(doc))
    doc = join(__dirname, 'content', `${page}.html`)

  if (!exists(doc))
    return // Bails to 404

  // Set up view content
  doc = read(doc).toString()

  let { attributes, body } = fm(doc)
  let title = attributes.title
  let content = `<div id="page"><div id="page-title"><div><h1>${title}</h1></div></div><div id="page-body">${md(body)}</div></div>`

  page = {
    title,
    content
  }
  let html = Layout(page)
  return {
    html
  }
}
