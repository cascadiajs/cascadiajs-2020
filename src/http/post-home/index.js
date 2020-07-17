let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(validate)

async function validate(req) {
  let ticketRef = req.body.ticketRef
  // see if this ticket ref exists in our system
  let doc = await data.get({ table: 'tickets', key: ticketRef })
  let validated = !!doc
  let location = '/home'
  return { session: { validated }, location }
}
