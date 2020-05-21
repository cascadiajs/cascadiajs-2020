let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(api)

async function api() {
  return { json: await data.get({ table: 'speakers' }) }
}
