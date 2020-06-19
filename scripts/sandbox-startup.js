let data = require('@begin/data')
let speakers = require('../data/test/speakers.json')

module.exports = async function populate() {
  try {
    let loaded = await data.set(speakers)
    console.log('Added speakers: \n', loaded)
  } catch(err) {
    console.error('ERROR: ', err)
  }
}
