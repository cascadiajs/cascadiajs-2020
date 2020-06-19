// eslint-disable-next-line no-global-assign
require = require('esm')(module)
let arc = require('@architect/functions')
const getSpeakerData = require('@architect/shared/data/get-speaker-data')
const isXHR = require('@architect/shared/utils/is-xhr')
const SpeakersView = require('@architect/views/speakers')

async function Speakers(req) {
  const { speakers, topics, selectedTopics } = await getSpeakerData(req)
  // If this is an XHR request respond with JSON
  if (isXHR(req)) {
    let body = JSON.stringify({ speakers, selectedTopics, topics })
    let headers = { 'content-type': 'application/json; charset=utf8' }
    return { headers, body }
  } else {
    // else render the webpage
    return await SpeakersView({ speakers, topics, selectedTopics })
  }
}

exports.handler = arc.http.async(Speakers)