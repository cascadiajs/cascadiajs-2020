const { rollup } = require('rollup')
const path = require('../cache/cache-path')
const write = require('../cache/cache-write')

module.exports = async function bundle({ type, mod }) {
  console.time('bundle')
  let key = `${type}/${mod}`
  let input = path(key)
  let bundle = await rollup({ input })
  let bundled = await bundle.generate({ format: 'esm' })
  let body = bundled.output[0].code
  console.timeEnd('bundle')

  return write({ key, body, type })
}
