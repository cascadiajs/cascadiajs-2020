let Layout = require('../layout')
let assetPath = process.env.BEGIN_STATIC_ORIGIN

let content = /*html*/`
    <div id="landing">
        <div id="hero">
            <div class="wide">
                <img id="hero-badge" src="${assetPath}/images/hero-badge.svg" alt="hero image"/>
                <div>
                <div><a href="/tickets" class="buy">Early Bird Tickets on Sale Now</a></div>
                <div class="cta"><a href="/covid-19">COVID-19 Update</a></div>
            </div>
            </div>
        </div>
        <div id="attend">
            <div class="wide">
                <h2>Attend</h2> 
                <div class="container">
                    <div class="left"><img src="${assetPath}/images/cyberspace.jpg" alt="Cyberspace"/></div>
                    <div class="right">
                        <p>Tickets to the Cyberspace Edition™ of CascadiaJS are on sale. In order to ensure a great experience for everyone, we will cap the number of tickets that we sell. You can find more information about pricing and what comes with your ticket on our Ticketing page.</p>
                    </div>
                </div>
                <div class="cta"><a href="/tickets">Ticket Info</a></div>
            </div>
        </div>
        <div id="cfp">
            <div class="wide">
                <h2>Call for Speakers</h2> 
                <div class="container">
                    <div class="left"><img src="${assetPath}/images/photo-yuraima.jpg" alt="Photo of Yuraima"/></div>
                    <div class="right">
                        <p>Every developer has a story. We'd love to hear yours.</p>
                        <p> Our CFP is open to both experienced speakers and those who have never given a big conference talk. The criteria we will use for evaluating submissions will be the same, and no added weight will be awarded to anyone just because they've spoken before. Some of the best talks given at past CascadiaJS events have come from first-time conference speakers.</p>
                        <p> Submissions close on May 15, 2020.</p>
                    </div>
                </div>
                <div class="cta"><a href="/cfp">Tell Your Story</a></div>
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
                <div class="cta"><a href="/tickets">Reserve Your Spot</a></div>
            </div>
        </div>
        <div id="schedule">
            <div class="wide">
                <h2>Schedule</h2> 
                <p>CascadiaJS is more than just a 2-day conference. We are planning a full week of fun events. Stay tuned!</p>
            </div>
        </div>
        <div id="coc">
            <div class="narrow">
                <h2>Code of Conduct</h2> 
                <p>Everyone , including attendees, sponsors, speakers, and organizers - is required to agree to and follow our Code of Conduct. Inappropriate behavior or harassment of any kind is not tolerated. If you feel uncomfortable, are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference Staff are identified by red STAFF badges. You can also send an email to info@cascadiajs.com.</p>
                <div class="cta"><a href="/coc">Read the Code of Conduct</a></div>
            </div>
        </div>
    </div>
`

module.exports = async function Index(req) {
    if (req.path === '/') {
        let html = await Layout({content})
        return {
            html
        }
    }
    else return
}