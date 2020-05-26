module.exports = function error(err) {
  console.error(err)
  return {
    headers: {
      'content-type': 'text/javascript'
    },
    body: `console.error('500 ssr render error: ', "${err.message}")`
  }
}
