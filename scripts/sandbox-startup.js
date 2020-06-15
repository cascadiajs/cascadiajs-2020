let data = require('@begin/data')

module.exports = async function populate() {
  try {
    let speakers = await data.set([
      {
        table: 'speakers',
        key: '',
        name: 'Carter Rabasa',
        location: 'Starship Earth',
        title: 'How to make the best conference ever',
        reveal: '2020-07-15',
        topics: ['people', 'fun', 'laughter', 'learning', 'yellow-possum'],
        email: 'carter@fizbuz.com',
        pronouns: ['he', 'him'],
        twitter: '@crtr0',
        url: 'https://2020.cascadiajs.com/',
        company: 'Fizbuz',
        track: 'main',
        abstract: 'Do eet!'
      },
      {
        table: 'speakers',
        key: '',
        name: 'Nicholas Cage',
        location: 'The Pacific North West',
        title: 'Cheddar Goblin',
        reveal: '2020-07-15',
        topics: ['chainsaw', 'laughter', 'vodka'],
        email: 'nick@loggers.com',
        pronouns: ['he', 'him'],
        twitter: '@n',
        url: 'https://loggers.com',
        company: 'Loggers',
        track: 'main',
        abstract: 'Sometimes a chainsaw comes in handy.'
      },
      {
        table: 'speakers',
        key: '',
        name: 'El Barbón',
        location: 'Iceland',
        title: 'Turing for fun and profit',
        reveal: '2020-07-15',
        topics: ['ai', 'dancing', 'machine-learning'],
        email: 'nathan@bluebook.com',
        pronouns: ['he', 'him'],
        twitter: '@barbon',
        url: 'https://ava-sessions.com',
        company: 'Blue Book',
        track: 'main',
        abstract: 'Isn\'t it strange, to create something that hates you?'
      },
      {
        table: 'speakers',
        key: '',
        name: 'Officer K',
        location: 'Las Angeles, CA',
        title: 'Realistic AI interactions',
        reveal: '2020-07-15',
        topics: ['Joi', 'hover-cars', 'ai'],
        email: 'ok@LAPD.com',
        pronouns: ['they', 'them'],
        twitter: '@ok-lapd',
        url: 'https://lapd.com',
        company: 'LAPD',
        track: 'main',
        abstract: 'How to know when you\'ve left the uncanny valley'
      }
    ])
    console.log('Added speakers: \n', speakers)
  } catch(err) {
    console.error('ERROR: ', err)
  }
}
