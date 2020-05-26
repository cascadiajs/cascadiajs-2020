module.exports = function redirect(location) {
  return {
    statusCode: 302,
    headers: { location }
  }
}
