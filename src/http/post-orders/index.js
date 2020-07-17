let arc = require('@architect/functions')
let parseBody = arc.http.helpers.bodyParser
/*let data = require('@begin/data')
let crypto = require("crypto")

let releaseSlugsForHoodies = ["wmg4ibcq-zk", "uvup7alttr8", "du8rpnvpqeg", "jmdds5wxi4y", "7j-cyjllimi", "h-ksr70mfng"]*/

//exports.handler = arc.http.async(auth, order)

exports.handler = test

async function test(req) {
  let titoSig = req.headers['Tito-Signature'] || req.headers['tito-signature']
  console.log(titoSig)
  console.log(req.body)
  let body = parseBody(req)
  console.log(body)
  return {
    statusCode: 200,
    body: "success"
  }
}

/*async function auth(req) {
  // authenticate the token passed in the header
  console.log(req.body)
  let titoSig = req.headers['Tito-Signature']
  let hash = crypto.createHmac("sha256", "qd-TFXvwAHuljC_WpKG6sw").update(JSON.stringify(req.body)).digest("base64")
  if (hash !== titoSig) {
    console.log('Sadly, the Tito sig and the calculated hash value did not match ', titoSig, hash)
    return {
      statusCode: 401,
      body: JSON.stringify({message: "not authorized"})
    }
  }
}

// write to begin/data
async function order(req) {
  let titoOrder = req.body

  // see if this order contains a tickets that include a hoodie
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
}*/
