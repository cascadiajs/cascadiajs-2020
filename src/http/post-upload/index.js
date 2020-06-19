let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(auth, upload)

/** ensure session */
async function auth(req) {
  if (!req.session.loggedIn)
    return { location: '/' }
}

/** write to begin/data */
async function upload(req) {
  let speakers = req.body
  for (let i in speakers) {
    let speaker = speakers[i]
    await data.set({
      table: 'speakers',
      ...speaker
    })
  }

  return {
    statusCode: 201,
    body: JSON.stringify({success: true})
  }
}
