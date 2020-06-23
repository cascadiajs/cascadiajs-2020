let arc = require('@architect/functions')
const data = require('@begin/data')
const SpeakerView = require('@architect/views/speaker')

async function Speaker(req) {
  const { key } = req.params
  const { social } = req.queryStringParameters
  const table = 'speakers'
  const speaker = await data.get({ table, key })

  return await SpeakerView({speaker, social})

}

exports.handler = arc.http.async(Speaker)