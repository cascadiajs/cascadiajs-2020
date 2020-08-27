let LiveLayout = require('../layout/live')
let { ConfSchedule } = require('../components/schedule')

module.exports = async function Live({ speakers }) {
    let scheduleContainer = ConfSchedule({ speakers })
    let content = /*html*/`
    <div id="live" class="slack-view-true">
        <section id="controls">
            <!--div><button id="audio_switch">Turn Clapping Audio On</button></div-->
            <p>On Now: foo bar bat</p>
            <p>Coming Up: blah blee bloo</p>
            <p><button id="slack-view-button">Toggle Slack View</button></p>
            <p><button id="stream-text-button">Toggle Stream Text</button></p>
            <p><button id="clapping-audio-button">Toggle Clapping Audio</button></p>
            <div id="q-and-a">
                <iframe src="https://draw-3sk.begin.app/"
                        height="400"
                        width="100%"
                        frameborder="0"
                        scrolling="yes">
                </iframe> 
            </div>
            <p><emote-widget talk-id="cjs20-test" position="bottom-left"></emote-widget></p>
        </section>
        <section id="stream"> 
            <div class="inner">                
                <div id="stream-video" class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/O9UgHFDntrQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id="stream-text" class="stream-text-true">
                    <iframe id="stFrame" 
                        src="//www.streamtext.net/player/?event=IHaveADream&header=false&footer=false&scroll=false&chat=false&fs=25" 
                        style="width:100%;height:95%"> </iframe>
                </div>
            </div>
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
    let html = LiveLayout({ content })
    return { html }
}
