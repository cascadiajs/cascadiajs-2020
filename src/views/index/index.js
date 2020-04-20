let Layout = require('../layout')
//let assetPath = process.env.BEGIN_STATIC_ORIGIN

let content = /*html*/`
    <div id="hero">
        <p>Hero</p>
    </div>
    <div id="attend">
        <p>Attend</p> 
    </div>
    <div id="cfp">
        <p>CFP</p> 
    </div>
    <div id="workshops">
        <p>Workshops</p> 
    </div>
    <div id="schedule">
        <p>Schedule</p> 
    </div>
    <div id="coc">
        <p>Code of Conduct</p> 
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