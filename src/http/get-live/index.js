let arc = require('@architect/functions')
const data = require('@begin/data')
const LiveView = require('@architect/views/live')

// check for session
async function unauthenticated(req) {
  if (req.session.ticketRef) return
  else {
    let location = "/home?needAuth=true"
    return { location }
  }
}

// display live stream page
async function authenticated(req) {
  const ticket = await data.get({ table: 'tickets', key: req.session.ticketRef })
  if (ticket.conference === 'Y') {
    return LiveView()
  }
  else {
    let location = "/home?noTicket=true"
    return { location }
  }
}

exports.handler = arc.http.async(unauthenticated, authenticated)