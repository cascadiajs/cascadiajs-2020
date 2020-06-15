const path = require('path')

module.exports = function cachePath({ name }) {
  return path.join(__dirname, '..', 'views', 'modules', name)
}
