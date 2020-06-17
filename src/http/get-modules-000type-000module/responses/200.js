const { promisify } = require('util')
const fs = require('fs')
const readFile = promisify(fs.readFile)
const join = require('path').join

module.exports = async function ok (req) {
  let { type, module: mod } = req.pathParameters
  let requested = join(process.cwd(), 'node_modules', '@architect', 'views', 'modules', type, mod)
  let js = await readFile(requested)

  return {
    statusCode: 200,
    headers: {
      'content-type': 'text/javascript; charset=utf8'
    },
    body: js.toString()
  }
}
