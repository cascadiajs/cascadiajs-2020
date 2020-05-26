const rollup = require('rollup')
const path = require('@architect/shared/cache-path')
const write = require('@architect/shared/cache-write')

module.exports = async function bundle({ name }) {
  console.time('bundle')
  let input = path({ name })
  let bundle = await rollup.rollup({ input })
  let bundled = await bundle.generate({ format: 'esm' })
  let source = bundled.output[0].code
  console.timeEnd('bundle')

  return write({ name, source })
}
