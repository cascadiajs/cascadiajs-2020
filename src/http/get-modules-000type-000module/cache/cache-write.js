const data = require('@begin/data')
const crypto = require('crypto')

module.exports = async function write({ key, body, type }) {

  // fingerprint it
  console.time('fingerprint')
  let hash = crypto.createHash('sha1')
  hash.update(Buffer.from(body))
  let sha = hash.digest('hex').substr(0, 7)
  let [file, extension] = key.split('/').slice(0).reverse().shift().split('.')
  let filename = `${ file }-${ sha }.${ extension }`
  console.timeEnd('fingerprint')

  console.time('begin-data-cache')
  let table = 'module-cache'
  let headers = {
    'content-type': `text/${ extension === 'js' ? 'javascript' : 'css' }; charset=UTF-8`,
    'cache-control': 'max-age=315360000'
  }
  await data.set({ table, key, type, filename, headers, body })
  console.timeEnd('begin-data-cache')

  return filename
}
