import SpeakerTopic from './speaker-topic'

export default function Speaker(props) {
  props = props || {}
  let speaker = props.speaker || {}
  let selectedTopics = props.selectedTopics || []
  let name = speaker.name || ''
  let topics = (speaker.topics || [])
    .map(topic => SpeakerTopic({ topic, selected: selectedTopics.includes(topic), selectedTopics }))
      .join('')
  return `
<h1>
  ${ name }
</h1>
<div>
  ${ topics }
</div>
  `
}
