
let Layout = require('../layout')
let SpeakerContainer = require('../components/speakers')

let Template = function(props) {
    let { speakersContainer } = props
    return /*html*/`
    <div id="landing">
        <div id="hero">
            <div id="hero-logo"><img src="/images/hero-logo.svg" alt="logo"/></div>
            <div id="hero-images">
                <div><img src="/images/hero-illustration-01.svg" alt="list of talks #1"/></div>
                <div><img src="/images/hero-illustration-02.svg" alt="list of talks #2"/></div>
            </div>
        </div>
        ${ speakersContainer ? `<div id="speakers"><h2>Speakers</h2>${ speakersContainer }</div>` : ``} 
        <div id="attend">
            <div class="container">
                <div id="karaoke"><img src="/images/karaoke.svg" alt="There WILL be karaoke!"/></div>
                <div id="why">
                    <div class="headline">CascadiaJS has always been about bringing together an amazing group of web developers from across the Pacific Northwest (and beyond) to hear great talks, meet amazing people, and have fun.</div>
                    <div class="benefits">
                        When you buy a ticket, you get:
                        <ul>
                            <li><i class="fas fa-tv"></i> Access to the live stream of talks</li>
                            <li><i class="fas fa-microphone"></i> Access to speaker Q&A</li>
                            <li><i class="fas fa-briefcase"></i> Access to the Job Fair on August 31st</li>
                            <li><i class="fas fa-music"></i> Access to both evening social events (Karaoke Night &amp; Game Night)</li>
                            <li><i class="fas fa-gift"></i> A Goodie Box <u>shipped to you</u> that will include:
                                <ul>
                                    <li><i class="fas fa-tshirt"></i> CascadiaJS hoodie</li>
                                    <li><i class="fas fa-cat"></i> Stickers</li>
                                    <li><i class="fas fa-smile-wink"></i> Extra surprises!</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="coc">
            <div class="narrow">
                <h2>Code of Conduct</h2>
                <p>Everyone , including attendees, sponsors, speakers, and organizers - is required to agree to and follow our Code of Conduct. Inappropriate behavior or harassment of any kind is not tolerated. If you feel uncomfortable, are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference Staff are identified by red STAFF badges. You can also send an email to info@cascadiajs.com.</p>
                <div class="cta"><a href="/coc">Read the Code of Conduct</a></div>
            </div>
        </div>
        <div id="workshops">
            <div class="narrow">
                <h2>Workshops</h2>
                <h3>JavaScript: The Recent Parts</h3>
                <h4>Sept 3</h4>
                <p>Kyle Simpson will walk us through the newest additions to JavaScript, including: spread/rest, destructuring, template literals, iterators, generators, Array.includes, string padding, async-await, RegExp improvements, async generators/iteration and more.</p>
                <h3>Digging Into Node</h3>
                <h4>Sept 4</h4>
                <p>Kyle Simpson will spend a day Digging Into Node, including: building CLI tools (parameters, I/O, etc), file system operations, async, streams, HTTP handling, Express.js routing, SQLite databases, child processes and more.</p>
                <h3>React: Beyond the Basics</h3>
                <h4>Sept 8</h4>
                <p>Eve Porcello will cover the following in this intermediate React.js workshop: Hooks, Creating Custom Hooks, State Machines, Suspense Preview and Ecosystem APIs like React Router, Next.js, and more!</p>
                <h3>GraphQL: The Next Steps</h3>
                <h4>Sept 9</h4>
                <p>Eve Porcello will cover the following in this intermediate GraphQL workshop: Unions & Interfaces, Error Handling, Microservices with Apollo Federation, Graph Manager and Relay.</p>
                <div class="cta"><a href="/workshops">Workshops Info</a></div>
            </div>
        </div>
        <div id="schedule">
            <div class="wide">
                <h2>Sponsors</h2>
                <div class="container">
                    <div class="left"><img src="https://pbs.twimg.com/media/DtM87aIU0AMyD94.jpg:large" alt="Amazon sponsorship"/></div>
                    <div class="right">
                        <p>
                            It is our mission to create an online event that
                            brings our community together, levels everyone up on building for the Web and helps everyone meet new people,
                            try out new products and start thinking about what's next in their career.
                        </p>
                        <p>
                            This is a big lift and we can't do it without the support of sponsors. If your company is interested in
                            supporting our community please reach out!
                        </p>
                    </div>
                </div>
                <div class="cta"><a href="/sponsor">Sponsor Info</a></div>
            </div>
        </div>
    </div>
`
}

module.exports = async function Index({ speakers, topics, selectedTopics }) {
    let speakersContainer
    if (speakers && speakers.length >= 1)
        speakersContainer = SpeakerContainer({ speakers, topics, selectedTopics })
    let content = Template({ speakersContainer })
    let html = Layout({content, scripts: ['modules/entry/speakers.js']})
    return { html }
}
