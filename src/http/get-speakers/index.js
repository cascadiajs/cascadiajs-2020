const arc = require('@architect/functions')
const data = require('@begin/data')
const Speakers = require('@architect/views/pages/speakers')

exports.handler = async function http (req) {
  let speakers = await data.get({ table: 'speakers' })
  let params = req.queryStringParameters || {}
  console.log('PARAMS: ', params)
  let topic = params.topic
  if (topic) {
    speakers = speakers.filter(s => {
      console.log('TOPIC: ', topic)
      console.log('SPEAKER TOPICS: ', s.topics, s.topics.includes(topic))
      return s.topics.includes(topic)
    })
  }

  return {
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8'
    },
    body: Speakers({ speakers })
  }
}
