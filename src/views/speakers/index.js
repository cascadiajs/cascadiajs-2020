let Layout = require('../layout')
let SpeakerContainer = require('../components/speakers')

module.exports = async function Index({ speakers, topics, selectedTopics }) {
    let content = await SpeakerContainer({ speakers, topics, selectedTopics })
    let html = Layout({content, scripts: ['modules/entry/speakers.js']})
    return { html }
}