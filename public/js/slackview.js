/* eslint-disable no-undef */
window.onload = function() {
    // Attach builtin widget to your page
    if (slackview) {
        //const token = 'TObfd0ab2772a04cb68098c8deca374878'
        const token = 'TOed3c03eb7d39493585f2a35b580b5d20'
        slackview.configure(token, {logLevel: 'debug'})
        slackview.render(document.getElementById('chat-slackview'))
    }
    else {
        console.log('Slackview global not initialized :(')
    }
}
