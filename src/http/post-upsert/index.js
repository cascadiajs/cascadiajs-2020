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

  if (!req.body.key)
    req.body.key = req.body.name.toLowerCase().replace(/ /, '-')

  req.body.pronouns = req.body.pronouns.split(",")
  req.body.topics = req.body.topics.split(",")

  await data.set({
    table: 'speakers',
    ...req.body
  })

  return { location: '/admin.php' }
}
