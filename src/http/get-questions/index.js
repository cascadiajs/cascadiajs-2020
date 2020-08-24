let arc = require('@architect/functions')
let data = require('@begin/data')

exports.handler = arc.http.async(questions)

/**
 * Retrieves the list of active questions from Begin Data and
 * returns a list sorted by times the question has been asked descending
 */
async function questions() {
  const questions = await data.get({ table: 'questions' })
  const timeNow = (Date.now() / 1000)
  const sortedQuestions = questions
    // do not return questions w/ an expired TTL
    .filter(({ ttl }) => ttl > timeNow)
    .sort((a, b) => b.timesAsked - a.timesAsked)
  return { body: JSON.stringify(sortedQuestions) }
}
