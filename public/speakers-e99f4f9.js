import Speakers from '../../../../../../../../../../../../../../modules/pages/speakers.js';

/* global window document */

function Main() {
  let selectedTopics = [];
  let topics = document.querySelectorAll('.js-topic');
  Array.prototype.forEach.call(
    topics,
    t => t.onclick = e => {
      e.preventDefault();
      let data = t.dataset || {};
      let topic = data.topic;
      let action = selectedTopics.includes(topic)
        ? removeTopic
        : addTopic;
      selectedTopics = action(selectedTopics, topic);
      let url = window.location.pathname + getTopicParams(selectedTopics);
      getData(url);
    }
  );

  async function getData(url) {
    let data = await(await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
    })).json();
    update(data);
  }

  function update(data) {
    let container = document.getElementByID('js-speakers');
    if (container) {
      container.innerHTML = Speakers(data);
    }
  }

  function addTopic(topics, topic) {
    topics.push(topic);
    return [...new Set([...topics])]
  }

  function removeTopic(topics, topic) {
    topics.splice(topics.indexOf(topic), 1);
    return topics
  }

  function getTopicParams(selectedTopics) {
    selectedTopics = selectedTopics || [];
    return selectedTopics.length
      ? `?topics=${selectedTopics.join(',')}`
      : ''
  }
}

Main();

export default Main;
