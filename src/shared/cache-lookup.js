const read = require('@architect/shared/cache-read.js')

module.exports = async function lookup({ name }) {
  let debug = process.env.DEBUG
  let module = `/modules/${name}`
  let entry
  if (!debug) {
    let cached = await read({ name })
    entry = cached
      ? `/_static/${ cached }`
      : module
  } else {
    entry = module
  }
  return entry
}
