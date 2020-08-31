let arc = require('@architect/functions')
const data = require('@begin/data')
let getSpeakerData = require('@architect/shared/data/get-speaker-data')
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
  if (ticket && ticket.conference === 'Y') {
    let speakerData = await getSpeakerData(req)
    let speakers = speakerData.speakers
    return LiveView({ speakers, ticket })
  }
  else {
    let location = "/home?noTicket=true"
    return { location }
  }
}

exports.handler = arc.http.async(unauthenticated, authenticated)