import Speaker from '../ui/item-speaker.js'
import Topic from '../ui/item-topic.js'

module.exports = function Speakers(props) {
  props = props || {}
  let speakers = (props.speakers || [])
    .map(s => Speaker(s))
  let topics = (props.topics || [])
    .map(t => Topic(t))
  return `
<form action="/topics" method="POST">
  ${ topics }
</form>
<ul id="cjs-speakers">
  ${ speakers }
</ul>
  `
}
