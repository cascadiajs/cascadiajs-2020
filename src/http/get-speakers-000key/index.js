let arc = require('@architect/functions')
const getSpeakerData = require('@architect/shared/data/get-speaker-data')
const SpeakerView = require('@architect/views/speaker')

async function Speaker(req) {
  const { key } = req.params
  const { social } = req.queryStringParameters
  const { speakers } = getSpeakerData(req)
  const speaker = speakers.find(s => s.key === key) 

  return await SpeakerView({speaker, social})

}

exports.handler = arc.http.async(Speaker)