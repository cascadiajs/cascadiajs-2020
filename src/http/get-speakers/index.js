const data = require('@begin/data')
const Speakers = require('@architect/views/pages/speakers')

exports.handler = async function http(req) {
  let speakers = await data.get({ table: 'speakers' })
  let topics = speakers.reduce((a, r) => [...new Set(a.concat(r.topics))].sort(), [])
  let params = req.queryStringParameters || {}
  let selectedTopics = params.topics &&
    params.topics.split(',')
      .map(t => t.trim())

  if (selectedTopics) {
    speakers = speakers.filter(s => {
      let speakerTopics = s.topics || []
      return speakerTopics.some(speakerTopic => selectedTopics.some(selectedTopic => speakerTopic === selectedTopic))
    })
  }

  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Speakers({
      speakers,
      selectedTopics,
      topics
    })
  }
}
