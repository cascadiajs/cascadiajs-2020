import getSelectedTopicsHref from '../utils/get-selected-topic-href.js'

export default function SpeakerTopic(props) {
  props = props || {}
  let selectedTopics = props.selectedTopics || []
  let topic = props.topic || ''
  let selected = props.selected
  let href = getSelectedTopicsHref(selected, selectedTopics, topic)
  return `
<a
  class="js-topic"
  href="${ href }"
  data-topic="${ topic }"
>
  ${topic}
</a>
  `
}
