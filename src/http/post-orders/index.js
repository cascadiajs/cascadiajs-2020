let arc = require('@architect/functions')
let parseBody = arc.http.helpers.bodyParser
let data = require('@begin/data')
let crypto = require("crypto")

let releaseSlugsForHoodies = ["wmg4ibcq-zk", "uvup7alttr8", "du8rpnvpqeg", "jmdds5wxi4y", "7j-cyjllimi", "h-ksr70mfng"]

exports.handler = async function(req) {
  // authenticate the token passed in the header
  let titoSig = req.headers['Tito-Signature'] || req.headers['tito-signature']
  console.log(titoSig)
  let decoded = Buffer.from(req.body, 'base64').toString()
  console.log(decoded)
  let hash = crypto.createHmac("sha256", process.env.TITO_WEBHOOK_KEY).update(decoded).digest("base64")
  // the hash of the POST body and the value of tito sig don't match, this is a bad request
  if (hash !== titoSig) {
    console.log('Sadly, the Tito sig and the calculated hash value did not match ', titoSig, hash)
    return {
      statusCode: 401,
      body: JSON.stringify({message: "not authorized"})
    }
  }
  // else, let's process the webhook!
  else {
    let titoOrder = parseBody(req)
    // see if this order contains a ticket that includes a hoodie
    let ticketRefs = []
    for (let ticket of titoOrder.tickets) {
      if (releaseSlugsForHoodies.includes(ticket.release_slug)) {
        ticketRefs.push(ticket.reference)
      }
    }

    // if so find a redemption code that is free, and assign it to this ticket id
    if (ticketRefs.length > 0) {
      let codes = await data.get({table: 'codes', limit: 500})
      console.log(codes)
      // loop through each ticket that qualifies for a hoodie
      for (let ticketRef of ticketRefs) {
        // find the first code that doesn't have a ticketRef associated with it
        let free = codes.find(c => c.ticketRef === undefined)
        if (free) {
          await data.set({...free, ticketRef})
        }
        else {
          // FUCK
          console.log('We have run out of available codes!!!')
        }
      }
    }
    else {
      console.log(`No hoodies associated with tickets for order ${ titoOrder.reference }`)
    }

    return {
      statusCode: 201,
      body: JSON.stringify({success: true})
    }
  }
}
