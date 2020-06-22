const data = require('@begin/data')

module.exports = async function GetSpeakerData (req) {
  let speakers = await data.get({ table: 'speakers', limit: 24 })
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

  return { speakers, selectedTopics, topics }
}