import getSelectedTopicsHref from '../utils/get-selected-topic-href.js'

export default function TopicItem(props) {
  props = props || {}
  let selectedTopics = props.selectedTopics || []
  let topic = props.topic || ''
  let selected = props.selected
  let href = getSelectedTopicsHref(selected, selectedTopics, topic)
  return `
<a
  href="${ href }"
  class="js-topic ${ selected ? 'topic-selected' : '' }"
  data-topic="${ topic }"
  data-selected="${ selected }"
>
  ${ topic }
</a>
  `
}
