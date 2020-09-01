let LiveLayout = require('../layout/live')
let { DayOne, DayTwo } = require('../components/schedule')

module.exports = async function Live({ speakers, ticket }) {
    let dayOneContainer = DayOne({ speakers, ticket })
    let dayTwoContainer = DayTwo({ speakers, ticket })
    let content = /*html*/`
    <div id="live" class="slack-view-true">
        <section id="left-pane">
            <div id="graphic-recording">
                <h2>Talk Illustrations</h2>
                <div class="video-container">
                    <iframe
                        src="https://player.twitch.tv/?channel=cascadiajs&parent=localhost&parent=2020.cascadiajs.com"
                        height="100%"
                        width="100%"
                        frameborder="no"
                        scrolling="no"
                        allowfullscreen="allowfullscreen">
                    </iframe>
                </div>
            </div>
            ${ process.env.QA_WIDGET === 'on' ? 
            /*html*/`<div id="q-and-a">
                <h2>Q&A</h2>
                <div id="q-a-container">
                    <iframe id="draw-3sk" src="https://draw-3sk.begin.app/?user=${ ticket.key }"
                            height="100%"
                            width="100%"
                            frameborder="0"
                            scrolling="yes">
                    </iframe> 
                </div>
            </div>`
            : ``}
            <div id="emote">
                <emote-widget talk-id="cjs20-test" position="bottom-left" open="false"></emote-widget>
            </div>
        </section>
        <section id="stream"> 
            <div class="inner">            
                <div id="stream-video" class="video-container">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/Zsw637CCejI?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id="stream-text" class="stream-text-true">
                    <iframe id="stFrame" 
                        src="//www.streamtext.net/player/?event=CascadiaJS2020&header=true&footer=false&scroll=false&chat=false" 
                        style="width:100%;height:95%" frameborder="0"></iframe>
                </div>
            </div>
        </section>
        <section id="chat" class="slack-view-true">
            <h2>Slack View</h2>
            <div id="chat-slackview"></div>
        </section>
    </div>
    <div id="live-more">
        <div id="conf-schedule">
            ${ dayOneContainer }
            ${ dayTwoContainer }
        </div>
    </div>
    `
    let html = LiveLayout({ content })
    return { html }
}
