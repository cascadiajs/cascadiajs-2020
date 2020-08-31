let head = require('./head')
let footer = require('./footer')
let bodyScripts = require('./scripts')

module.exports = function Layout ({title, content, socialUrl = 'https://2020.cascadiajs.com/images/cjs19-family.jpg' }) {
  // expand title
  title = `CascadiaJS 2020${ title ? ' - ' + title : '' }`
  let scripts = ['https://slackview.app/slackview.js', '/js/slackview.js', '/js/live.js', 'https://cascadiajs-emote-server.herokuapp.com/emote.js']
  return /*html*/`
  <!doctype html>
  <html lang=en>
    ${ head({ title, content, socialUrl })}
    <body>
      <div id="root">
        <section id="live-header">
          <div id="logo">
            <a href="/"><img src="/images/icon-green.svg" alt="CascadiaJS logo"/></a>
          </div>
          <div id="settings">
            <div>
              <span class="cta"><a href="/handbook" target="_handbook">Handbook</a></span>
            </div>
            <div style="margin-left:8px;">
              <span class="cta"><a href="https://www.twilio.com/quest/events/CascadiaJS/players" target="_twilioquest">TwilioQuest Leaderboard</a></span>
            </div>
            <div id="settings-label-slackview" class="label">Slack View</div>
            <div id="settings-switch-slackview">
              <label class="switch">
                <input id="slack-view-button" type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
            <div class="label">Captions</div>
            <div>
              <label class="switch">
                <input id="stream-text-button" type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
            <div class="label">Clapping Audio</div>
            <div>
              <label class="switch">
                <input id="clapping-audio-button" type="checkbox" checked>
                <span class="slider"></span>
              </label>
            </div>
          </div>
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
