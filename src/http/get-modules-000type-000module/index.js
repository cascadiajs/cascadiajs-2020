const read = require('./cache/cache-read')
const bundle = require('./bundle')
const waterfall = require('./responses/200')
const redirect = require('./responses/302')
const notfound = require('./responses/404')
const fatal = require('./responses/500')

exports.handler = async function http(req) {
  let { type, module: mod } = req.pathParameters
  let debug = process.env.DEBUG

  try {
    if (debug) {
      return waterfall(req)
    }
    else {
      // Check to see if file is in cache
      let { file, upgrade } = await read({ type, mod })
      // If we found the file, deliver it
      if (file) {
        let { body, headers } = file
        return {
          statusCode: 200,
          body,
          headers
        }
      }
      // If this is a valid request against a cache hit, upgrade to the bundle
      if (upgrade) {
        return redirect(upgrade)
      }
      // Otherwise, bundle it
      else {
        let fingerprinted = await bundle({ type, mod })
        return redirect(fingerprinted)
      }
    }
  }
  catch(err) {
    if (err.message.includes('not_found')) {
      return notfound(`${type}/${mod}`)
    }
    else {
      return fatal(err)
    }
  }
}
