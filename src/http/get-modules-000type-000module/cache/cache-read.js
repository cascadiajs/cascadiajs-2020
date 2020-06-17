const { existsSync } = require('fs')
const data = require('@begin/data')
const path = require('./cache-path')

module.exports = async function read({ type, mod }) {
  let key = `${type}/${mod}`

  // Get the cache contents
  let cache = await data.get({ table: 'module-cache' })

  // Fingerprinted requests
  let file = cache.length && cache.find(f => mod === f.filename && type === f.type) || false

  // Non-fingerprinted requests
  let upgrade = cache.find(f => key === f.key)
  upgrade = upgrade && upgrade.filename || false

  // Look for the entry file on the filesystem to ensure validity
  if (!file && existsSync(path(key)) === false)
    throw ReferenceError(`not_found: ${ key }`)

  return { file, upgrade }
}
