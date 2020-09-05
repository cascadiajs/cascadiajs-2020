// eslint-disable-next-line no-global-assign
let arc = require('@architect/functions')
let ScheduleView = require('@architect/views/schedule')
const getSpeakerData = require('@architect/shared/data/get-speaker-data')

/**
 * Display the full schedule
 */

async function Schedule (req) {
  let { speakers, selectedTopics, topics } = getSpeakerData(req)
  return await ScheduleView({ speakers, selectedTopics, topics })
}

exports.handler = arc.http.async(Schedule)
