let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(validate)

async function validate(req) {
  let session
  let location = '/home'
  if (req.body.reset) {
    session = {}
  }
  else {
    let ticketRef = req.body.ticketRef
    // see if this ticket ref exists in our system
    let doc = await data.get({ table: 'tickets', key: ticketRef })
    // if it does, add it to the session
    if (doc) {
      session = { ticketRef }
    }
    else {
      location = '/home?notfound=true'
    }
  }

  // redirect back to GET /home
  return { session, location }
}
