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
  let codes = req.body
  for (let code of codes) {
    await data.set({
      table: 'codes',
      code
    })
  }

  return {
    statusCode: 201,
    body: JSON.stringify({success: true})
  }
}
