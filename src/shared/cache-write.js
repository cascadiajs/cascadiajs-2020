const data = require('@begin/data')
const crypto = require('crypto')
const path = require('path')
const fs = require('fs')
const aws = require('aws-sdk')

module.exports = async function write({ name, source }) {

  // fingerprint it
  console.time('fingerprint')
  let hash = crypto.createHash('sha1')
  hash.update(Buffer.from(source))
  let sha = hash.digest('hex').substr(0, 7)
  let [filename, extension] = name.split('/').slice(0).reverse().shift().split('.')
  let fingerprint = `${ filename }-${ sha }.${ extension }`
  console.timeEnd('fingerprint')

  // write local when running local
  console.time('write')
  if (process.env.NODE_ENV === 'testing') {
    let pathToPublic = path.join(__dirname, '..', '..', '..', '..', '..', '..', 'public', 'bundled', fingerprint)
    fs.writeFileSync(pathToPublic, source)
  }
  else {
    // write to s3
    let s3 = new aws.S3
    await s3.putObject({
      ACL: 'public-read',
      Bucket: process.env.ARC_STATIC_BUCKET,
      Key: `${ process.env.ARC_STATIC_FOLDER }/bundled/${ fingerprint }`,
      Body: source,
      ContentType: `text/${  extension === 'js'? 'javascript': 'css' }; charset=UTF-8`,
      CacheControl: 'max-age=315360000',
    }).promise()
  }
  console.timeEnd('write')

  console.time('ddb-cache')
  let table = 'module-cache'
  let key = name
  let file = fingerprint
  let ttl = (Date.now() / 1000) + (60 * 60 * 24 * 7) // 1 week from now
  await data.set({ table, key, file, ttl })
  console.timeEnd('ddb-cache')

  return fingerprint
}
