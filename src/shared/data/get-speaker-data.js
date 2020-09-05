let speakers = require('./speakers.json')
//console.log("outside function: ", speakers)
module.exports = async function GetSpeakerData (req) {  
  //console.log("inside function: ", speakers)
  // scrub info for non-revealed speakers (only include reveal & pixelated props)
  speakers = speakers.map(s => ((new Date(s.reveal)).getTime() <= Date.now() ? s : { reveal: s.reveal, pixelated: s.pixelated, topics: s.topics }))
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