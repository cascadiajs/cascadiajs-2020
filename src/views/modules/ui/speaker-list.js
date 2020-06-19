import Speaker from './speaker.js'
import Topic from './item-topic.js'

export default function Speakers(props) {
  props = props || {}
  let selectedTopics = props.selectedTopics || []
  let speakers = (props.speakers || [])
    .sort((a,b) => new Date(a.reveal) - new Date(b.reveal))
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
  <div id="speaker-list">
    ${ speakers }
  </div>
  `
}
