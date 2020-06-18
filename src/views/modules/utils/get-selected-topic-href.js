export default function getSelectedTopicsHref(selected, selectedTopics, topic) {
  let foo = 'foo'
  console.log(foo)
  return selected
    ? selectedTopics.length === 1
      ? '/speakers'
      : `?topics=${selectedTopics.filter(t => t !== topic).join(',')}`
    : `?topics=${selectedTopics.concat([topic]).join(',')}`
}
