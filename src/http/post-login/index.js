let arc = require('@architect/functions')

exports.handler = arc.http.async(login)

async function login(req) {
  let loggedIn = req.body.password === process.env.CARTER_RULES
  let location = '/admin.php'
  return { session: { loggedIn }, location }
}
