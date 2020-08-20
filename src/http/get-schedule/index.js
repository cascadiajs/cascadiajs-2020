// eslint-disable-next-line no-global-assign
let arc = require('@architect/functions')
let ScheduleView = require('@architect/views/schedule')
const getSpeakerData = require('@architect/shared/data/get-speaker-data')

/**
 * Display the full schedule
 */

async function Schedule (req) {
  return await ScheduleView(await getSpeakerData(req))
}

exports.handler = arc.http.async(Schedule)
