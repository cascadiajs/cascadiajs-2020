let Layout = require('../layout')
let assetPath = process.env.BEGIN_STATIC_ORIGIN

let content = `
    <h1>CascadiaJS - a JSConf for the PacNW</h1>
    <p><img src="${assetPath}/images/banner-sunriver.jpg" alt="beautiful Bend, OR"/></p>
    <p>
        <a class="cta" href="/tickets">Ticket Info</a>
        <a class="cta" href="/cfp">Apply to Speak</a>
        <a class="cta" href="/sponsor">Sponsor Us</a>
    </p>
    <h2>Early Bird Tickets are ON SALE</h2>
    <p>Early Bird tickets are now on sale. We only sell a limited quantity of these tickets, so please act fast. You can find more information about pricing and deadlines on our <a href="/tickets">Ticketing page</a>.</p> 
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
            <tr><td>1/31/2020</td><td>Early Bird tickets go on sale</td></tr>
            <tr><td>1/31/2020</td><td>Call for Presenters (CFP) opens</td></tr>
            <tr><td>3/20/2020</td><td>CFP closes</td></tr>
            <tr><td>4/3/2020</td><td>Regular Bird tickets go on sale</td></tr>
            <tr><td>4/6/2020</td><td>Start announcing speakers</td></tr>
            <tr><td>6/1/2020</td><td>Scholarship applications open</td></tr>
            <tr><td>7/3/2020</td><td>Scholarship applications close</td></tr>
            <tr><td>7/31/2020</td><td>Late Bird tickets go on sale</td></tr>
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