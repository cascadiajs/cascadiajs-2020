import SpeakerTopic from './speaker-topic'

export default function Speaker(props) {
  props = props || {}
  let name = props.name || ''
  let topics = (props.topics || [])
    .map(t => SpeakerTopic(t))
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