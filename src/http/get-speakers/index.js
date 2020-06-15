// eslint-disable-next-line no-global-assign
require = require('esm')(module)
const data = require('@begin/data')
const Speakers = require('@architect/views/modules/pages/speakers.js').default
const isXHR = require('@architect/shared/utils/is-xhr')

exports.handler = async function http(req) {
  let speakers = await data.get({ table: 'speakers' })
  // Collect all the speakers topics into an array with no duplicate topics
  let topics = speakers.reduce((a, r) => [...new Set(a.concat(r.topics))].sort(), [])
  let params = req.queryStringParameters || {}
  // Parse topics from the comma separated list in the query params
  let selectedTopics = params.topics &&
    params.topics.split(',')
      .map(t => t.trim())

  // If topics were passed as params
  if (selectedTopics) {
    // Only return speakers that have one of the selected topics
    speakers = speakers.filter(s => {
      let speakerTopics = s.topics || []
      return speakerTopics.some(speakerTopic => selectedTopics.some(selectedTopic => speakerTopic === selectedTopic))
    })
  }
  // If this is an XHR request respond with JSON
  if (isXHR(req)) {
    return {
      headers: {
        'content-type': 'application/json; charset=utf8'
      },
      body: JSON.stringify({
        speakers,
        selectedTopics,
        topics
      })
    }
  } else {
    return {
      headers: {
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'content-type': 'text/html; charset=utf8'
      },
      body: `
      <div id=js-speakers>
        ${Speakers({
          speakers,
          selectedTopics,
          topics
        })}
      </div>
        <script src=modules/entry/speakers.js type=module crossorigin></script>
      `
    }
  }
}
