let SpeakerList = require('../modules/ui/speaker-list.js').default

module.exports = async function SpeakerContainer ({ speakers, topics, selectedTopics }) {
    let output = SpeakerList({ speakers, topics, selectedTopics })
    return `<div id=js-speaker-list>${ output }</div>`
}
