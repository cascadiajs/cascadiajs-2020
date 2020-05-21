let data = require('@begin/data')
let arc = require('@architect/functions')

let layout = body=> `<!doctype>
<html>
<link rel=stylesheet href=/_static/styles/admin.css>
<body>${ body }</body>
</html>`

exports.handler = arc.http.async(unauthenticated, authenticated)

/** render the login form */
async function unauthenticated(req) {
  if (req.session.loggedIn) return
  else {
    let form = `<form action=/login method=post>
      <input type=password name=password>
    </form>`
    let html = layout(form)
    return { html }
  }
}

/** render the speaker list/form */
async function authenticated(req) {
  let result = await data.get({ table: 'speakers' })
  let form = `
<details>
  <summary>new speaker</summary>
  <form action=/upsert method=post>
    <input type=text name=name placeholder="Name" required>
    <input type=text name=location placeholder="Location (eg. Los Angeles, CA)" required>
    <input type=text name=title placeholder="Talk title" required>
    <input type=date name=reveal required>
    <input type=text name=topic placeholder="Topic (eg. Deno)" required>
    <input type=email name=email placeholder="foo@bar.buzz" required>
    <input type=text name=pronouns placeholder="Pronouns (space seperated pls)" required>
    <input type=text name=twitter placeholder="Twitter" required>
    <input type=text name=url placeholder="URL" required>
    <input type=text name=company placeholder="Company" required>
    <input type=text name=track placeholder="Track (eg. main)" required>
    <textarea name=abstract placeholder="VB.NET and C# go on a date with Java and JavaScript …" required></textarea>
    <button>Save</button>
  </form>
</details>`
  let rows =  result.map(speaker).join('')//'<pre>'+JSON.stringify(result, null, 2)
  let html = layout(form + rows)
  return { html }
}

function speaker(person) {
  return `<details>
  <summary>${ person.name }</summary>
  <form action=/upsert method=post>
    <input type=hidden name=key value="${ person.key }">
    <input type=text name=name placeholder="Name" value="${ person.name }" required>
    <input type=text name=location value="${ person.location }" placeholder="Location (eg. Los Angeles, CA)" required>
    <input type=text name=title value="${ person.title}" placeholder="Talk title" required>
    <input type=date name=reveal value="${ person.reveal }" required>
    <input type=text name=topic value="${ person.topic }" placeholder="Topic (eg. Deno)" required>
    <input type=email name=email value="${ person.email }" placeholder="foo@bar.buzz" required>
    <input type=text name=pronouns value="${ person.pronouns.join(' ') }" placeholder="Pronouns (space seperated pls)" required>
    <input type=text name=twitter value="${ person.twitter}" placeholder="Twitter" required>
    <input type=text name=url value="${ person.url }" placeholder="URL" required>
    <input type=text name=company value="${ person.company }" placeholder="Company" required>
    <input type=text name=track value="${ person.track }" placeholder="Track (eg. main)" required>
    <textarea name=abstract value="${ person.abstract }" placeholder="VB.NET and C# go on a date with Java and JavaScript …" required>${ person.abstract }</textarea>
    <button>Save</button>
  </form>
</details>`
}
