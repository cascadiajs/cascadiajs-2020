const Speaker = require('../ui/speaker')
const Topic = require('../ui/item-topic')

module.exports = function Speakers(props) {
  props = props || {}
  let speakers = (props.speakers || [])
    .map(s => Speaker(s)).join('')
  let selectedTopics = props.selectedTopics || []
  let topics = (props.topics || [])
    .map(t => Topic({ name:t, checked: selectedTopics.includes(t), selectedTopics })).join('')
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
