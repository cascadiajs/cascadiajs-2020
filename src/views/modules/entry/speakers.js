/* global window document */
import SpeakerList from '../ui/speaker-list.js'

(function Main() {
  let selectedTopics = []
  addEventHandlers()

  async function getData(url) {
    let data = await(await window.fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
    })).json()
    update(data)
  }

  function update(data) {
    let container = document.getElementById('js-speaker-list')
    if (container) {
      container.innerHTML = SpeakerList(data)
      addEventHandlers()
    }
  }

  function addEventHandlers() {
    let topics = document.querySelectorAll('.js-topic')
    // attach add/remove topic handlers
    Array.prototype.forEach.call(
      topics,
      t => t.onclick = e => {
        e.preventDefault()
        let data = t.dataset || {}
        let topic = data.topic
        let action = selectedTopics.includes(topic)
          ? removeTopic
          : addTopic
        selectedTopics = action(selectedTopics, topic)
        let url = '/speakers' + getTopicParams(selectedTopics)
        getData(url)
        window.history.pushState('', '', window.location.pathname + getTopicParams(selectedTopics))
      }
    )
    // attach clear topics handler
    let clear = document.getElementById('js-topics-clear')
    clear.onclick = e => {
      e.preventDefault()
      selectedTopics = []
      let url = '/speakers'
      getData(url)
      window.history.pushState('', '', window.location.pathname)
    }
  }

  function addTopic(topics, topic) {
    topics.push(topic)
    return [...new Set([...topics])]
  }

  function removeTopic(topics, topic) {
    topics.splice(topics.indexOf(topic), 1)
    return topics
  }

  function getTopicParams(selectedTopics) {
    selectedTopics = selectedTopics || []
    return selectedTopics.length
      ? `?topics=${selectedTopics.join(',')}`
      : ''
  }
}())
