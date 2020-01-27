let fs = require('fs')
let exists = fs.existsSync
let read = fs.readFileSync
let md = require('marked')
let join = require('path').join
let assetPath = process.env.BEGIN_STATIC_ORIGIN
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
                 .replace(/\$\{STATIC\}/g, assetPath)

  let title = doc.split('\n')[0].replace('# ', '')
  let content = `<div class="page">${md(doc)}</div>`

  page = {
    title,
    content,
    assetPath
  }
  let html = await Layout(page)
  return {
    html
  }
}
