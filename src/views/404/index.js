let Layout = require('../layout')

module.exports = function notFound () {
    // Return 404
    let content = `<div id="not-found">404, not found :(</div>`
    let html = Layout({ content })
    return {
      html,
      status: 404
    }
  }