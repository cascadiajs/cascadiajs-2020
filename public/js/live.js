const agenda = [
    // testing / rehearsal
    //{ when: '2020-08-30T10:50:00-07:00', what: 'test-foo'},
    //{ when: '2020-08-30T10:51:00-07:00', what: 'test-bar'},
    // day one
    { when: '2020-09-01T09:00:00-07:00', what: 'day-one-open'},
    { when: '2020-09-01T09:18:00-07:00', what: 'day-one-cassidy-open'},
    { when: '2020-09-01T09:21:00-07:00', what: 'claudius-mbemba'},
    { when: '2020-09-01T09:25:00-07:00', what: 'kyle-simpson'},
    { when: '2020-09-01T09:55:00-07:00', what: 'james-steinbach'},
    { when: '2020-09-01T10:15:00-07:00', what: 'day-one-morning-break'},
    { when: '2020-09-01T10:48:00-07:00', what: 'tiger-oakes'},
    { when: '2020-09-01T11:10:00-07:00', what: 'romulo-santo'},
    { when: '2020-09-01T11:37:00-07:00', what: 'jemima-abu'},
    { when: '2020-09-01T11:50:00-07:00', what: 'brenden-speaker-squad'},
    { when: '2020-09-01T11:52:00-07:00', what: 'day-one-lunch-break'},
    { when: '2020-09-01T13:22:00-07:00', what: 'day-one-post-lunch'},
    { when: '2020-09-01T13:28:00-07:00', what: 'will-klein'},
    { when: '2020-09-01T13:48:00-07:00', what: 'kelsey-breseman'},
    { when: '2020-09-01T14:14:00-07:00', what: 'najla-elmachtoub'},
    { when: '2020-09-01T14:30:00-07:00', what: 'day-one-afternoon-break'},
    { when: '2020-09-01T15:12:00-07:00', what: 'joel-hooks'},
    { when: '2020-09-01T15:37:00-07:00', what: 'sangeetha-kp'},
    { when: '2020-09-01T15:51:00-07:00', what: 'shawn-wang'},
    { when: '2020-09-01T16:17:00-07:00', what: 'brian-scholarships'},
    { when: '2020-09-01T16:20:00-07:00', what: 'day-one-close'},
    { when: '2020-09-01T16:30:00-07:00', what: 'music-show'},
    { when: '2020-09-01T18:00:00-07:00', what: 'day-one-over'},
    // day two
    { when: '2020-09-02T09:00:00-07:00', what: 'day-two-open'},
    { when: '2020-09-02T09:21:00-07:00', what: 'day-two-cassidy-open'},
    { when: '2020-09-02T09:24:00-07:00', what: 'evan-tahler'},
    { when: '2020-09-02T09:49:00-07:00', what: 'tianyu-pu'},
    { when: '2020-09-02T10:14:00-07:00', what: 'scott-ammon'},
    { when: '2020-09-02T10:29:00-07:00', what: 'day-two-morning-break'},
    { when: '2020-09-02T11:07:00-07:00', what: 'pantelis-kalogiros'},
    { when: '2020-09-02T11:34:00-07:00', what: 'amber-hoak'},
    { when: '2020-09-02T12:00:00-07:00', what: 'rahat-chowdhury'},
    { when: '2020-09-02T12:17:00-07:00', what: 'day-two-lunch-break'},
    { when: '2020-09-02T13:53:00-07:00', what: 'day-two-post-lunch'},
    { when: '2020-09-02T13:56:00-07:00', what: 'kristopher-joseph'},
    { when: '2020-09-02T14:21:00-07:00', what: 'april-speight'},
    { when: '2020-09-02T14:47:00-07:00', what: 'myriam'},
    { when: '2020-09-02T15:01:00-07:00', what: 'day-two-afternoon-break'},
    { when: '2020-09-02T15:42:00-07:00', what: 'dan-mckeon'},
    { when: '2020-09-02T16:02:00-07:00', what: 'rachelle-rathbone'},
    { when: '2020-09-02T16:17:00-07:00', what: 'fred-k-schott'},
    { when: '2020-09-02T16:43:00-07:00', what: 'jim-community'},
    { when: '2020-09-02T16:46:00-07:00', what: 'day-two-close'},
    { when: '2020-09-02T17:00:00-07:00', what: 'day-two-over'},
]

document.addEventListener('DOMContentLoaded', async function main() {    
    // set initial state
    const state = {
        slackView: true,
        liveText: true,
        clapping: false,
        clappingContext: undefined,
        clappingBuffer: null,
        agendaIndex: undefined
    }

    // check for audio
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        state.clappingContext = new AudioContext();
    }
    catch(e) {
        console.log('Web Audio API is not supported in this browser');
    }

    const CLAPPABLE = ['celebrate', 'heart', 'plusone', 'clap', 'smile']
    
    function audioClap() {
        if (state.clappingContext) {
            const source = state.clappingContext.createBufferSource();
            source.buffer = state.clappingBuffer;
            // Set volume to 10%
            const gainNode = state.clappingContext.createGain();
            source.connect(gainNode);
            gainNode.connect(state.clappingContext.destination);
            gainNode.gain.value = 0.1;
            source.start();
        }
    }
    
    function toggleAudio() {
        state.clapping = !state.clapping;
        if (state.clappingContext) {
            if (state.clapping) {
                state.clappingContext.resume();
            }
            else {
                state.clappingContext.suspend();
            }
        }
    }

    // load clapping audio if we have access to the Web Audio API
    if (state.clappingContext) {
        const URL = '/sounds/applause-8.mp3';
      
        window.fetch(URL)
            .then(response => response.arrayBuffer())
            .then(arrayBuffer => state.clappingContext.decodeAudioData(arrayBuffer))
            .then(audioBuffer => {
                state.clappingBuffer = audioBuffer;
        });        
    }

    // wire-up controls
    document.getElementById('slack-view-button').onclick = () => {
        state.slackView = !state.slackView
        document.getElementById('live').classList.replace(`slack-view-${ !state.slackView }`, `slack-view-${ state.slackView }`)
        document.getElementById('chat').classList.replace(`slack-view-${ !state.slackView }`, `slack-view-${ state.slackView }`)
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
            // reset the Q&A widget
            let src =  document.getElementById('draw-3sk').getAttribute('src')
            let queryString = src.split("?")[1]
            let queryParams = new URLSearchParams(queryString);
            let ticketKey = queryParams.get("user")
            document.getElementById('draw-3sk').setAttribute('src', `https://draw-3sk.begin.app/?user=${ ticketKey }&talk=${ current.what }`)
            // reset index
            state.agendaIndex = currentAgendaIndex
        }
        
        if (state.agendaIndex === undefined || state.agendaIndex < agenda.length - 1) {
            // if the show hasn't started yet OR isn't over yet, keep checking for a new agenda item
            setTimeout(() => {
                checkForNewAgendaItem()
            }, 1000 * 20 /* re-run once every 20 seconds */)
        }
        else {
            console.log("No more agenda items, the show must be over! Thanks for attending CascadiaJS :)")
        }
    }

    checkForNewAgendaItem()

}, false)