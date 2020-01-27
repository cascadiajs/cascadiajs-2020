let Layout = require('../layout')
//let assetPath = process.env.BEGIN_STATIC_ORIGIN

let content = `
    <h1>
      Get Excited for CascadiaJS 2020!
    </h1>
    <p>We are hard at work on this year's Call for Presenters and Early Bird Ticket round. While you wait, check out the highlights from our 2019 event in Seattle, WA!</p>
    <p class="video-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4bFj9aavP6Y?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
    <h2>Timeline</h2>
    <table>
        <thead>
            <tr><th>Date</th><th>Milestone</th></tr>
        </thead>
        <tbody>
            <tr><td>11/8/2019</td><td>CascadiaJS 2020 - location & dates</td></tr>
            <tr><td>12/4/2019</td><td>Super Early Bird tickets available</td></tr>
            <tr><td>1/31/2019</td><td>Early Bird tickets go on sale</td></tr>
            <tr><td>1/31/2019</td><td>Call for Presenters (CFP) opens</td></tr>
            <tr><td>3/20/2019</td><td>Regular Bird tickets go on sale</td></tr>
            <tr><td>3/20/2019</td><td>CFP closes</td></tr>
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