/* eslint-disable no-undef */

// feel bad polluting the window object :(
window.clapping = {
    context: new AudioContext(),
    buffer: null,
    audio: false
}

function visualClap(content) {
    floating({
        content,
        number: 1,
        repeat: 1,
        duration: 10,
        size: [2, 4]
      });
}

function audioClap() {
    const source = window.clapping.context.createBufferSource();
    source.buffer = window.clapping.buffer;
    // Set volume to 50%
    const gainNode = window.clapping.context.createGain();
    source.connect(gainNode);
    gainNode.connect(window.clapping.context.destination);
    gainNode.gain.value = 0.1;
    source.start();
}

const claps = [
    '👏',
    '👏🏻',
    '👏🏼',
    '👏🏽',
    '👏🏾',
    '👏🏿',
];

function clap(content) {
    const regex = /\:clap\:(?:\:skin-tone-([0-6])\:)?/ig;
    const matches = regex.exec(content);
    const emoji = matches[1] && claps[matches[1] - 1] ? claps[matches[1] - 1] : claps[0];

    visualClap(emoji)
    if (window.clapping.audio) {
        audioClap()
    }
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
        const streamId = 'TObfd0ab2772a04cb68098c8deca374878';   // the #live channel
        //const streamId = 'TOed3c03eb7d39493585f2a35b580b5d20'; // the test channel
        const teamId = 'T02QDM2DV';
        const logLevel = 'warn';
        const joinUrl = 'https://join.slack.com/t/cascadiajs/shared_invite/enQtNzYzMzYxMTc0OTc5LWM0ZDZiZDc5MDgwMmFkODdlZTdiMGE3NjFhYTZmNWVkMWEwMDcxNWE0Nzg5YTcwOGQzZDk0Y2M3ZWRmN2QwNzU';
        slackview.configure({streamId, teamId, logLevel, joinUrl}).then(() => {
            slackview.listen(msg => {
                if (msg.rawText.indexOf(':clap:') !== -1) {
                    clap(msg.rawText);
                }
            });

            slackview.render(document.getElementById('chat-slackview'))
        });
    }
    else {
        console.log('Slackview global not initialized :(')
    }
}
