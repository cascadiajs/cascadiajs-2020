let Layout = require('../layout')

module.exports = async function Live() {
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
        </section>
        <section id="chat">
            <div id="chat-slackview"></div>
        </section>
    </div>
    <div id="live-more">
        <div><button id="audio_switch">Turn Clapping Audio On</button></div>
        <!--div><span class="cta"><a href="/coc">Please Read our Code of Conduct</a></span></div-->
        <h2>Agenda</h2>
        <ul>
            <li>16:30 - Networking in Remo</li>
            <li>17:30 - Greetings & Kick-off</li>
            <li>17:40 - Timirah James</li>
            <li>17:55 - Q&A</li>
            <li>18:00 - Joe Karlsson: Bechdel.io: How We Used JavaScript To Help Make Film More Inclusive</li>
            <li>18:15 - Q&A</li>
            <li>18:20 - David Guttman: js.la to js.online: Meetups & MMORPGs</li>
            <li>18:35 - Q&A</li>
            <li>18:40 - Farewell</li>
            <li>18:45 - Karaoke &amp; Rambly</li>
            <li>20:00 - End</li>
        </ul>
        <h2>Accessing Remo/Rambly/Karaoke</h2>
        <p>Links to the these platforms were sent out in an email to everyone who registered for the meetup.</p>
    </div>
    `
    let html = Layout({ content })
    return { html }
}
