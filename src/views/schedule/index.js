let Layout = require('../layout')
let { ConfSchedule } = require('../components/schedule')

function template({ confSchedule }) {
    return /*html*/`
        <div id="page">
            <div class="page-title">
                <div class="wide"><h1>Conference Schedule</h1></div>
            </div>
            <div class="page-body wide">
                ${ confSchedule }
            </div>
        </div>
    `
}

module.exports = async function Index({ speakers }) {
    let confSchedule = await ConfSchedule({ speakers })
    let content = template({ confSchedule })
    let html = Layout({ content })
    return { html }
}