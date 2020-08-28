document.addEventListener('DOMContentLoaded', async function main() {
    // set initial state
    const state = {
        slackView: true,
        liveText: true,
        clapping: true,
        clappingContext: new AudioContext(),
        clappingBuffer: null
    }

    const CLAPPABLE = ['celebrate', 'heart', 'plusone', 'clap', 'smile']
    
    function audioClap() {
        const source = state.clappingContext.createBufferSource();
        source.buffer = state.clappingBuffer;
        // Set volume to 10%
        const gainNode = state.clappingContext.createGain();
        source.connect(gainNode);
        gainNode.connect(state.clappingContext.destination);
        gainNode.gain.value = 0.01;
        source.start();
    }
    
    function toggleAudio() {
        state.clapping = !state.clapping;
        if (state.clapping) {
            state.clappingContext.resume();
        }
        else {
            state.clappingContext.suspend();
        }
        //const audioButton = document.getElementById('clapping-audio-button');
        //audioButton.innerHTML = `Turn Clapping Audio ${ state.clapping ? 'Off' : 'On' }`;
    }

    // load clapping audio
    const URL = '/sounds/applause-8.mp3';
      
    window.fetch(URL)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => state.clappingContext.decodeAudioData(arrayBuffer))
        .then(audioBuffer => {
            state.clappingBuffer = audioBuffer;
    });

    // wire-up controls
    document.getElementById('slack-view-button').onclick = () => {
        state.slackView = !state.slackView
        document.getElementById('live').classList.replace(`slack-view-${ !state.slackView }`, `slack-view-${ state.slackView }`)
    };

    document.getElementById('stream-text-button').onclick = () => {
        state.liveText = !state.liveText
        document.getElementById('stream-text').classList.replace(`stream-text-${ !state.liveText }`, `stream-text-${ state.liveText }`)
    };

    document.querySelector('emote-widget').onEmote((event) => {
        if (CLAPPABLE.includes(event.data) && state.clapping) {
            audioClap()
        } 
    });

    document.getElementById('clapping-audio-button').onclick = () => toggleAudio()

}, false)