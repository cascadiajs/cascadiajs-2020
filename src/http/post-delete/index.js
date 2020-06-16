let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(auth, deleteSpeaker)

/** ensure session */
async function auth(req) {
  if (!req.session.loggedIn)
    return { location: '/' }
}

/** write to begin/data */
async function deleteSpeaker(req) {

  await data.destroy({
    table: 'speakers',
    key: req.body.key
  })

  return { location: '/admin.php' }
}
