let arc = require('@architect/functions')
let staticAssets = require('@architect/shared/static.json')

/**
 * Looks out for static asset requests
 * Found assets will be upgraded to fingerprinted URLs
 */
module.exports = async function getAssets (req) {
  let path = req.path
  if (path[0] === '/') path = path.substr(1)
  if (!staticAssets) return
  if (!staticAssets[path]) return
  else {
    let proxy = arc.http.proxy()
    return await proxy(req)
  }
}
