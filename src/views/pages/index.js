let fs = require('fs')
let exists = fs.existsSync
let read = fs.readFileSync
let md = require('marked')
let fm = require('front-matter')
let join = require('path').join
let Layout = require('../layout')
let SocialLayout = require('../layout/social')

function Template({title, body}) {
  return `<div id="page"><div id="page-title"><div><h1>${title}</h1></div></div><div id="page-body">${md(body)}</div></div>`

}

/**
 * Page view: catchall for all other pages, authored either in markdown or HTML
 */
module.exports = async function Page (req) {
  let page = req.path.substr(1)
  let { social } = req.queryStringParameters
  let doc = join(__dirname, 'content', `${page}.md`)
  if (!exists(doc))
    doc = join(__dirname, 'content', `${page}.html`)

  if (!exists(doc))
    return // Bails to 404

  // Set up view content
  doc = read(doc).toString()

  let { attributes, body } = fm(doc)
  let title = attributes.title
  let html

  if (social !== undefined) {
    let excerpt = attributes.excerpt
    let image = attributes.image
    let header = title
    html = SocialLayout({ image, header, excerpt })
  }
  else {
    let content = Template({ title, body })
    //console.log(req)
    let socialUrl = `https://${ process.env.NODE_ENV === 'staging' ? 'staging.' : '' }2020.cascadiajs.com/images/social/${ page }-share.png`
    html = Layout({ title, content, socialUrl })
  }

  return {
    html
  }
}
