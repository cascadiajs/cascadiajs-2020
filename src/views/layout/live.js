let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')

module.exports = function Layout ({title, content, socialUrl = 'https://2020.cascadiajs.com/images/cjs19-family.jpg' }) {
  // expand title
  title = `CascadiaJS 2020${ title ? ' - ' + title : '' }`
  let scripts = ['https://slackview.app/slackview.js', '/js/slackview.js', '/js/live.js', '/js/emote.js']
  return /*html*/`
  <!doctype html>
  <html lang=en>
    ${ head({ title, content, socialUrl })}
    <body>
      <div id="root">
        <section id="live-header">
        <!-- nothing to display -->
        </section>
        <div id="content">
          ${ content }
        </div>
        ${ footer() }
      </div>
      ${ bodyScripts({ scripts })}
    </body>
  </html>
`
}
