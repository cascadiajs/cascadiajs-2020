module.exports = function notfound(file) {
  return {
    headers: {
      'content-type': 'text/javascript'
    },
    body: `console.error('404 not found: ', "${ file }")`
  }
}
