// TODO make a nice 404 page here!
module.exports = function notFound () {
    // Return 404
    let html = "404, sorry!"
    return {
      html,
      status: 404
    }
  }