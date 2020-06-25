/* eslint-disable global-require */
const join = require("path").join
const fs = require('fs')
const sandbox = require("@architect/sandbox")
const puppeteer = require("puppeteer")
const url = "http://localhost:3333"

async function createImages() {
  // start the sandbox webserver
  const end = await sandbox.start()

  // define which pages (URLs) we are going to generate social sharing images for
  const source = join(__dirname, "..", "src", "views", "pages", "content")

  // define destination for social sharing images
  const dest = join(__dirname, "..", "public", "images", "social")

  // set-up headless browser
  let browser
  let height = 627
  let width = 1200
  let deviceScaleFactor = 1

  console.log("Loading globally installed localdev puppeteer")

  browser = await puppeteer.launch({
    defaultViewport: {
      height,
      width,
      deviceScaleFactor,
    },
  })

  let page = await browser.newPage()

  const files = fs.readdirSync(source)

  for (const file of files) {
    console.log(`Generating a screen shot for ${ file }`)
    const stub = file.split('.md')[0]
    await page.goto(`${ url }/${ stub }?social`)
    await page.screenshot({ path: `${dest}/${ stub }-share.png` })
  }

  //Promise.all(promises).then(async function() {
  console.log("Shutting down")
  // shut down te browser
  await browser.close()
  // shut down the sandbox
  await end()
  //})
}

createImages()
