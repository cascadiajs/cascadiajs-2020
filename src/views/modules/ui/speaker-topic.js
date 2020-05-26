export default function SpeakerTopic(topic) {
  topic = topic || ''
  let link = `/speakers?topics=${topic}`
  return `
<a href="${link}">${topic}</a>
  `
}
