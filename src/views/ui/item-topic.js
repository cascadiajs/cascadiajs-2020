module.exports = function TopicItem(props) {
  props = props || {}
  let name = props.name || ''
  let checked = props.checked
    ? 'checked="checked"'
    : ''
  return `
<label for="topic">
  <input type="checkbox" ${ checked }>
  <a href="?topics=${ name }">${ name }</a>
</label>
  `
}
