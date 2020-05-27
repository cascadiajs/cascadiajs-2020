import Speaker from '../ui/speaker.js'
import Topic from '../ui/item-topic.js'

export default function Speakers(props) {
  props = props || {}
  let selectedTopics = props.selectedTopics || []
  let speakers = (props.speakers || [])
    .map(speaker => Speaker({ speaker, selectedTopics })).join('')
  let topics = (props.topics || [])
    .map(topic => Topic({
      topic,
      selected: selectedTopics.includes(topic),
      selectedTopics
    })).join('')
  return `
<div>
  ${ topics }
  <a href="/speakers">clear</a>
</div>
<ul>
  ${ speakers }
</ul>
  `
}
