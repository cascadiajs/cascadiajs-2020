export default function TopicItem(props) {
  props = props || {}
  let selectedTopics = props.selectedTopics || []
  let name = props.name || ''
  let checked = props.checked
    ? 'checked="checked"'
    : ''
  let href = getHref(checked, selectedTopics, name)
  return `
<a
  href="${ href }"
  class="js-topic"
  data-topic="${ name }"
  data-selected="${ checked }"
>
  <input type="checkbox" ${ checked }>
  ${ name }
</a>
  `
}

function getHref(checked,selectedTopics, name) {
  return checked
    ? selectedTopics.length === 1
      ? '/speakers'
      : `?topics=${selectedTopics.filter(t => t !== name).join(',')}`
    : `?topics=${selectedTopics.concat([name]).join(',')}`
}
