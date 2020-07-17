let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(auth, upsert)

/** ensure session */
async function auth(req) {
  if (!req.session.loggedIn)
    return { location: '/' }
}

/** write to begin/data */
async function upsert(req) {
  await data.set({
    table: 'tickets',
    ...req.body
  })

  return { location: '/admin.php' }
}
