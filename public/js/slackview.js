/* eslint-disable no-undef */

// feel bad polluting the window object :(
window.clapping = {
    context: new AudioContext(),
    buffer: null,
    audio: false
}

function clap() {
    const source = window.clapping.context.createBufferSource();
    source.buffer = window.clapping.buffer;
    // Set volume to 50%
    const gainNode = window.clapping.context.createGain();
    source.connect(gainNode);
    gainNode.connect(window.clapping.context.destination);
    gainNode.gain.value = 0.1;
    source.start();
}

function loadClapping() {      
    const URL = '/sounds/applause-8.mp3';
  
    window.fetch(URL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => window.clapping.context.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            window.clapping.buffer = audioBuffer;
        });
}

function toggleAudio() {
    window.clapping.audio = !window.clapping.audio;
    if (window.clapping.audio) {
        window.clapping.context.resume();
    }
    else {
        window.clapping.context.suspend();
    }
    const audioButton = document.querySelector('#audio_switch');
    audioButton.innerHTML = `Turn Clapping Audio ${ window.clapping.audio ? 'Off' : 'On' }`;
}

function handleAudioButtonClick() {
    const audioButton = document.querySelector('#audio_switch');
    audioButton.onclick = () => toggleAudio();
}

window.onload = function() {
    // Attach builtin widget to your page
    if (slackview) {
        loadClapping();
        handleAudioButtonClick();
        //const token = 'TObfd0ab2772a04cb68098c8deca374878'
        const token = 'TOed3c03eb7d39493585f2a35b580b5d20'
        slackview.configure(token, {logLevel: 'debug'})
        slackview.listen(msg => {
            if (msg.rawText.indexOf(':clap:') !== -1) {
                floating({
                    content: "👏",
                    number: 1,
                    repeat: 1,
                    duration: 10,
                    size: [2, 4]
                  }); 
                clap();
            }
        });
        slackview.render(document.getElementById('chat-slackview'))
    }
    else {
        console.log('Slackview global not initialized :(')
    }
}
