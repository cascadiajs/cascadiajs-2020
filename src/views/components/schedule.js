function renderSpeaker(time, speaker = {}) {
    return /*html*/`
    <div class="show-item">                
        <div class="when">${ time }</div>
        <div class="what">
            <div class="title"><a href="/speakers/${ speaker.key }">${ speaker.title }</a> ${ speaker.track === 'lightning' ? '⚡️' : '' }</div>
            <div class="speaker">${ speaker.name }</div>
        </div>
    </div>`
}

function DayZero() {
    return /*html*/`
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Day 0<br/>August 31
            </h2>
            <aside class="day-timezone">
            All times in PDT (UTC-7)
            </aside>
        </div>
        <div class="day-content">
            <div class="show track">   
                <h3><a href="/career-night">Career Night</a></h3>
                <div class="show-item">       
                    <div class="when">16:30</div>
                    <div class="what"><div class="title"><i class="fas fa-door-open"></i> Doors Open</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">17:30</div>
                    <div class="what"><div class="title">Greetings &amp; Kick-off</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">17:40</div>
                    <div class="what"><div class="title">Mentorship Panel</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">18:40</div>
                    <div class="what"><div class="title">Venturing Out</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">19:40</div>
                    <div class="what"><div class="title">Wrap Up</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">20:00</div>
                    <div class="what"><div class="title"><i class="fas fa-door-closed"></i> Doors Close</div></div>
                </div>
            </div>
        </div>
    </div>
`
}

function DayOne({ speakers }) {
    return /*html*/`
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Day 1<br/>September 1
            </h2>
            <aside class="day-timezone">
            All times in PDT (UTC-7)
            </aside>
        </div>
        <div class="day-content">
            <div class="show track">   
                <h3>Live Stream Track</h3>
                <div class="show-item">       
                    <div class="when">09:00</div>
                    <div class="what"><div class="title"><i class="fas fa-door-open"></i> Conference Opens</div></div>
                </div>
                ${ renderSpeaker("09:20", speakers.find(s => s.key === 'claudius-mbemba'))}
                ${ renderSpeaker("09:30", speakers.find(s => s.key === 'kyle-simpson'))}
                ${ renderSpeaker("10:00", speakers.find(s => s.key === 'james-steinbach'))}
                <div class="show-item">       
                    <div class="when">10:15</div>
                    <div class="what"><div class="title"><i class="fas fa-coffee"></i> Break</div></div>
                </div>
                ${ renderSpeaker("10:50", speakers.find(s => s.key === 'tiger-oakes'))}
                ${ renderSpeaker("11:15", speakers.find(s => s.key === 'romulo-cintra'))}
                ${ renderSpeaker("11:40", speakers.find(s => s.key === 'jemima-abu'))}
                <div class="show-item">       
                    <div class="when">12:00</div>
                    <div class="what"><div class="title"><i class="fas fa-taco"></i> Lunch</div></div>
                </div>
                ${ renderSpeaker("13:40", speakers.find(s => s.key === 'will-klein'))}
                ${ renderSpeaker("14:05", speakers.find(s => s.key === 'kelsey-breseman'))}
                ${ renderSpeaker("14:30", speakers.find(s => s.key === 'najla-elmachtoub'))}
                <div class="show-item">       
                    <div class="when">15:00</div>
                    <div class="what"><div class="title"><i class="fas fa-popcorn"></i> Break</div></div>
                </div>
                ${ renderSpeaker("15:25", speakers.find(s => s.key === 'joel-hooks'))}
                ${ renderSpeaker("15:50", speakers.find(s => s.key === 'sangeetha-kp'))}
                ${ renderSpeaker("16:10", speakers.find(s => s.key === 'shawn-wang'))}
                <div class="show-item">       
                    <div class="when">16:35</div>
                    <div class="what"><div class="title"><i class="fas fa-door-closed"></i> Conference Close</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">16:50</div>
                    <div class="what"><div class="title"><i class="fas fa-turntable"></i> <a href="/opening-party">Live Music Show</a></div></div>
                </div>
            </div>
            <div class="hallway track">
                <h3>Hallway Track</h3>
                <div class="what"><div class="title">Remo</div></div>
                <p>More info coming soon!</p>
            </div>
            <div class="workshops track">
                <h3>Workshop Track</h3>
                <div class="what"><div class="title">Sauce Labs Workshop</div></div>
                <p>More info coming soon!</p>
                <div class="what"><div class="title">Launch Darkly Workshop</div></div>
                <p>More info coming soon!</p>
            </div>
        </div>
    </div>
`
}

function DayTwo({ speakers }) {
    return /*html*/`
    <div class="day">
        <div class="day-header">
            <h2 class="day-date">
            Day 2<br/>September 2
            </h2>
            <aside class="day-timezone">
            All times in PDT (UTC-7)
            </aside>
        </div>
        <div class="day-content">
            <div class="show track">   
                <h3>Live Stream Track</h3>
                <div class="show-item">       
                    <div class="when">09:00</div>
                    <div class="what"><div class="title"><i class="fas fa-door-open"></i> Conference Opens</div></div>
                </div>
                ${ renderSpeaker("09:20", speakers.find(s => s.key === 'evan-tahler'))}
                ${ renderSpeaker("09:50", speakers.find(s => s.key === 'tianyu-pu'))}
                ${ renderSpeaker("10:20", speakers.find(s => s.key === 'scott-ammon'))}
                <div class="show-item">       
                    <div class="when">10:35</div>
                    <div class="what"><div class="title"><i class="fas fa-coffee"></i> Break</div></div>
                </div>
                ${ renderSpeaker("11:05", speakers.find(s => s.key === 'pantelis-kalogiros'))}
                ${ renderSpeaker("11:35", speakers.find(s => s.key === 'amber-hoak'))}
                ${ renderSpeaker("12:00", speakers.find(s => s.key === 'rahat-chowdhury'))}
                <div class="show-item">       
                    <div class="when">12:20</div>
                    <div class="what"><div class="title"><i class="fas fa-burger-soda"></i> Lunch</div></div>
                </div>
                ${ renderSpeaker("13:55", speakers.find(s => s.key === 'kj'))}
                ${ renderSpeaker("14:25", speakers.find(s => s.key === 'april-speight'))}
                ${ renderSpeaker("14:50", speakers.find(s => s.key === 'myriam-walden-duarte'))}
                <div class="show-item">       
                    <div class="when">15:10</div>
                    <div class="what"><div class="title"><i class="fas fa-pie"></i> Break</div></div>
                </div>
                ${ renderSpeaker("15:40", speakers.find(s => s.key === 'dan-mckeon'))}
                ${ renderSpeaker("16:10", speakers.find(s => s.key === 'rachelle-rathbone'))}
                ${ renderSpeaker("16:25", speakers.find(s => s.key === 'fred-k-schott'))}
                <div class="show-item">       
                    <div class="when">16:50</div>
                    <div class="what"><div class="title"><i class="fas fa-door-closed"></i> Conference Close</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">17:05</div>
                    <div class="what"><div class="title"><i class="fas fa-utensils-alt"></i> Dinner Break</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">19:00</div>
                    <div class="what"><div class="title"><i class="fas fa-microphone"></i> <a href="/closing-party">Karaoke Party</a></div></div>
                </div>
            </div>
            <div class="hallway track">
                <h3>Hallway Track</h3>
                <div class="what"><div class="title">Remo</div></div>
                <p>More info coming soon!</p>
            </div>
            <div class="workshops track">
                <h3>Workshop Track</h3>
                <div class="what"><div class="title">Twilio Workshop</div></div>
                <p>More info coming soon!</p>
                <div class="what"><div class="title">Heroku Workshop</div></div>
                <p>More info coming soon!</p>
            </div>
        </div>
    </div>
`
}

function ConfSchedule ({ speakers }) {
    return /*html*/`
    <div id="conf-schedule">
        ${ DayZero() }
        ${ DayOne({ speakers }) }
        ${ DayTwo({ speakers }) }
    </div>`
}

module.exports = {
    ConfSchedule,
    DayZero,
    DayOne,
    DayTwo
}
