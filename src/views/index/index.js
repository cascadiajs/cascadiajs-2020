let Layout = require('../layout')
let assetPath = process.env.BEGIN_STATIC_ORIGIN

let content = /*html*/`
    <h1>CascadiaJS 2020: Cyberspace Edition&trade;</h1>
    <p><img src="${assetPath}/images/cyberspace.jpg" alt="cyberspace"/></p>
    <p>
        <a class="cta" href="/tickets">Ticket Info</a>
        <a class="cta" href="/cfp">Apply to Speak</a>
        <a class="cta" href="/sponsor">Sponsor Us</a>
    </p>
    <p class="warning highlight">
        Update: This year's CascadiaJS will a fully virtual, on-line event.
        Please check-out our <a href="/covid-19">COVID-19 update and FAQ</a> for more information on this change.
    </p>
    <h2>Conference Tickets are ON SALE</h2>
    <p>
    <p>Tickets to the Cyberspace Edition&trade; of CascadiaJS are on sale. In order to ensure a great experience for everyone, we will cap the number
    of tickets that we sell. You can find more information about pricing and what comes with your ticket on our <a href="/tickets">Ticketing page</a>.</p> 
    <h2>Call for Presenters is OPEN</h2>
    <p>
        If you've ever thought about speaking at a conference, we strongly encourage you to check out our <a href="/cfp">Call for Presenters</a>.
    </p>
    <h2>Recap of CascadiaJS 2019</h2>
    <p class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4bFj9aavP6Y?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
    <h2>Upcoming Milestones</h2>
    <table>
        <thead>
            <tr><th>Date</th><th>Milestone</th></tr>
        </thead>
        <tbody>
            <tr><td>5/15/2020</td><td>CFP closes</td></tr>
            <tr><td>4/27/2020</td><td>Speakers announced</td></tr>
            <tr><td>6/1/2020</td><td>Scholarship applications open</td></tr>
            <tr><td>9/1/2020</td><td>CascadiaJS 2020</td></tr>
        </tbody>
    </table>
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