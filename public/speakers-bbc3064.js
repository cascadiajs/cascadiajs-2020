function SpeakerTopic(topic) {
  topic = topic || '';
  let link = `/speakers?topics=${topic}`;
  return `
<a href="${link}">${topic}</a>
  `
}

function Speaker(props) {
  props = props || {};
  let name = props.name || '';
  let topics = (props.topics || [])
    .map(t => SpeakerTopic(t))
      .join('');
  return `
<h1>
  ${ name }
</h1>
<div>
  ${ topics }
</div>
  `
}

function TopicItem(props) {
  props = props || {};
  let selectedTopics = props.selectedTopics || [];
  let name = props.name || '';
  let checked = props.checked
    ? 'checked="checked"'
    : '';
  let href = getHref(checked, selectedTopics, name);
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

function Speakers(props) {
  props = props || {};
  let speakers = (props.speakers || [])
    .map(s => Speaker(s)).join('');
  let selectedTopics = props.selectedTopics || [];
  let topics = (props.topics || [])
    .map(t => TopicItem({ name:t, checked: selectedTopics.includes(t), selectedTopics })).join('');
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

export default Speakers;
