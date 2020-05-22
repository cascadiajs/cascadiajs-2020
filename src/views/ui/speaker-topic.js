module.exports = function SpeakerTopic(topic) {
  topic = topic || ''
  let link = `/speakers?topic=${topic}`
  return `
<a href="${link}">${topic}</a>
  `
}
