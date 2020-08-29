const agenda = [
    { when: '2020-09-01T09:00:00-07:00', what: 'day-one-open'},
    { when: '2020-09-01T09:16:00-07:00', what: 'day-one-cassidy-open'},
    { when: '2020-09-01T09:19:00-07:00', what: 'claudius-mbemba'},
    { when: '2020-09-01T09:24:00-07:00', what: 'kyle-simpson'},
    { when: '2020-09-01T09:53:00-07:00', what: 'james-steinbach'},
    { when: '2020-09-01T10:09:00-07:00', what: 'day-one-morning-break'},
    { when: '2020-09-01T10:44:00-07:00', what: 'tiger-oakes'},
    { when: '2020-09-01T11:06:00-07:00', what: 'romulo-santo'},
    { when: '2020-09-01T11:33:00-07:00', what: 'jemima-abu'},
    { when: '2020-09-01T11:46:00-07:00', what: 'brenden-speaker-squad'},
    { when: '2020-09-01T11:49:00-07:00', what: 'day-one-lunch-break'},
    { when: '2020-09-01T13:28:00-07:00', what: 'will-klein'},
    { when: '2020-09-01T13:53:00-07:00', what: 'kelsey-breseman'},
    { when: '2020-09-01T14:19:00-07:00', what: 'najla-elmachtoub'},
    { when: '2020-09-01T14:37:00-07:00', what: 'day-one-afternoon-break'},
    { when: '2020-09-01T15:10:00-07:00', what: 'joel-hooks'},
    { when: '2020-09-01T15:36:00-07:00', what: 'sangeetha-kp'},
    { when: '2020-09-01T15:50:00-07:00', what: 'shawn-wang'},
    { when: '2020-09-01T16:16:00-07:00', what: 'brian-scholarships'},
    { when: '2020-09-01T16:19:00-07:00', what: 'day-one-close'},
    { when: '2020-09-01T16:29:00-07:00', what: 'music-show'},
    { when: '2020-09-01T18:00:00-07:00', what: 'day-one-over'},
]

document.addEventListener('DOMContentLoaded', async function main() {
    // set initial state
    const state = {
        slackView: true,
        liveText: true,
        clapping: true,
        clappingContext: new AudioContext(),
        clappingBuffer: null,
        agendaIndex: undefined
    }

    const CLAPPABLE = ['celebrate', 'heart', 'plusone', 'clap', 'smile']
    
    function audioClap() {
        const source = state.clappingContext.createBufferSource();
        source.buffer = state.clappingBuffer;
        // Set volume to 10%
        const gainNode = state.clappingContext.createGain();
        source.connect(gainNode);
        gainNode.connect(state.clappingContext.destination);
        gainNode.gain.value = 0.1;
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

    //document.getElementById("draw-3sk").setAttribute('src', "https://2019.cascadiajs.com")

    document.getElementById('clapping-audio-button').onclick = () => toggleAudio()

    // Check to see if there's a new agenda item happening so we reset elements of the UI
    function checkForNewAgendaItem() {
        // find our current place in the agenda
        let currentAgendaIndex
        let now = Date.now()
        for (let i in agenda) {
            let item = agenda[i]
            let itemTime = (new Date(item.when)).getTime()
            // if this item is after the current time
            if (now > itemTime) {
                currentAgendaIndex = i;
            }
        }

        if (state.agendaIndex !== currentAgendaIndex) {
            // a new agenda item!
            let current = agenda[currentAgendaIndex]
            console.log("A new agenda item!", current)
            // reset the emote counter by pointing it at the new agenda item
            document.querySelector('emote-widget').setAttribute('talk-id', current.what)
            // reset index
            state.agendaIndex = currentAgendaIndex
        }
        
        if (state.agendaIndex === undefined || state.agendaIndex < agenda.length - 1) {
            // if the show hasn't started yet OR isn't over yet, keep checking for a new agenda item
            setTimeout(() => {
                checkForNewAgendaItem()
            }, 1000 * 60 /* re-run in one minute */)
        }
        else {
            console.log("No more agenda items, the show must be over! Thanks for attending CascadiaJS :)")
        }
    }

    checkForNewAgendaItem()

}, false)