let LiveLayout = require('../layout/live')
let { ConfSchedule } = require('../components/schedule')

module.exports = async function Live({ speakers }) {
    let scheduleContainer = ConfSchedule({ speakers })
    let content = /*html*/`
    <div id="live">
        <section id="stream"> 
            <div class="video-container">
                <iframe
                    src="https://player.twitch.tv/?channel=cascadiajs&parent=localhost&parent=staging.2020.cascadiajs.com&parent=2020.cascadiajs.com"
                    height="560"
                    width="315"
                    frameborder="0"
                    scrolling="no"
                    allowfullscreen="allowfullscreen">
                </iframe>
            </div>
            <iframe id="stFrame" 
                src="//www.streamtext.net/player/?event=IHaveADream&header=false&footer=false&scroll=false&chat=false" 
                style="width:100%;height:200px"> </iframe>
        </section>
        <section id="controls">
            <!--div><button id="audio_switch">Turn Clapping Audio On</button></div-->
            <p>On Stage: foo bar bat</p>
            <p>Coming Up: blah blee bloo</p>
        </section>
        <section id="chat">
            <div id="chat-slackview"></div>
        </section>
    </div>
    <div id="live-more">
        ${ scheduleContainer }
        <h2>Accessing Remo/Rambly/Karaoke</h2>
        <p>Links to the these platforms were sent out in an email to everyone who registered for the meetup.</p>
    </div>
    `
    let scripts = ['https://slackview.app/slackview.js', '/js/slackview.js']
    let html = LiveLayout({ content, scripts })
    return { html }
}
