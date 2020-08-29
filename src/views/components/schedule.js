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

function DayZero({ ticket = undefined }) {
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

function DayOne({ speakers, ticket = undefined }) {
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
                ${ renderSpeaker("09:25", speakers.find(s => s.key === 'kyle-simpson'))}
                ${ renderSpeaker("09:54", speakers.find(s => s.key === 'james-steinbach'))}
                <div class="show-item">       
                    <div class="when">10:15</div>
                    <div class="what"><div class="title"><i class="fas fa-coffee"></i> Break</div></div>
                </div>
                ${ renderSpeaker("10:48", speakers.find(s => s.key === 'tiger-oakes'))}
                ${ renderSpeaker("11:10", speakers.find(s => s.key === 'romulo-cintra'))}
                ${ renderSpeaker("11:37", speakers.find(s => s.key === 'jemima-abu'))}
                <div class="show-item">       
                    <div class="when">12:00</div>
                    <div class="what"><div class="title"><i class="fas fa-taco"></i> Lunch</div></div>
                </div>
                ${ renderSpeaker("13:28", speakers.find(s => s.key === 'will-klein'))}
                ${ renderSpeaker("13:48", speakers.find(s => s.key === 'kelsey-breseman'))}
                ${ renderSpeaker("14:14", speakers.find(s => s.key === 'najla-elmachtoub'))}
                <div class="show-item">       
                    <div class="when">14:35</div>
                    <div class="what"><div class="title"><i class="fas fa-popcorn"></i> Break</div></div>
                </div>
                ${ renderSpeaker("15:12", speakers.find(s => s.key === 'joel-hooks'))}
                ${ renderSpeaker("15:37", speakers.find(s => s.key === 'sangeetha-kp'))}
                ${ renderSpeaker("15:51", speakers.find(s => s.key === 'shawn-wang'))}
                <div class="show-item">       
                    <div class="when">16:20</div>
                    <div class="what"><div class="title"><i class="fas fa-door-closed"></i> Conference Close</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">16:30</div>
                    <div class="what"><div class="title"><i class="fas fa-turntable"></i> <a href="/opening-party">Live Music Show</a></div></div>
                </div>
            </div>
            <div class="hallway track">
                <h3>Hallway Track</h3>
                <h4>Video Chat</h4>
                ${ ticket && ticket.conference === 'Y'
                    ? `<div class="cta"><a href="${ process.env.REMO_DAYONE_URL }" target="_hallway">Join</a></div>` 
                    : ``}
                <div class="show-item">       
                    <div class="what">
                        <div class="title">Remo Doors Open at 10:00</div>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="what">
                        <div class="title">Enter the #CJS20 Day One Raffle!</div>
                        <p>More info about this coming soon!</p>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="what">
                        <div class="title">Booth Sponsors</div>
                        <div><img src="/images/sponsors/imgix.svg" width="150" alt="Imgix logo"/></div>
                        <div><img src="/images/sponsors/auth0.svg" width="150" alt="Auth0 logo"/></div>
                        <div><img src="/images/sponsors/tagboard.png" width="150" alt="Tagboard logo"/></div>
                        <div><img src="/images/sponsors/ld.svg" width="150" alt="Launch Darkly logo"/></div>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="what">
                        <p class="title">Birds of a Feather Tables</p>
                        <p><b>All Floors</b></p>
                        <p>
                            <span class="highlight info">JavaScript</span>
                            <span class="highlight info">Node.js</span>
                            <span class="highlight info">React.js</span>
                            <span class="highlight info">Vue.js</span>
                            <span class="highlight info">Angular.js</span>
                            <span class="highlight info">Serverless</span>
                            <span class="highlight info">CSS</span>
                            <span class="highlight info">Open Source</span>
                            <span class="highlight info2">Seattle, WA</span>
                            <span class="highlight info2">Portland, OR</span>
                            <span class="highlight info2">Vancouver, BC</span>
                            <span class="highlight info2">Bend, OR</span>
                        </p>
                        <p><b>2nd Floor</b></p>
                        <p>
                            <span class="highlight info">dweb</span>
                            <span class="highlight info">IoT</span>
                            <span class="highlight info">Web Components</span>
                            <span class="highlight info">JAM Stack</span>
                            <span class="highlight info">Deno</span>
                            <span class="highlight info">UI / Design</span>
                        </p>
                        <p><b>3rd Floor</b></p>
                        <p>
                            <span class="highlight info">Ionic</span>
                            <span class="highlight info">React Native</span>
                            <span class="highlight info">Testing</span>
                            <span class="highlight info">NLP</span>
                            <span class="highlight info">ML / AI</span>
                            <span class="highlight info">Accessibility</span>
                        </p>
                        <p><b>4th Floor</b></p>
                        <p>
                            <span class="highlight info">APIs</span>
                            <span class="highlight info">NoSQL</span>
                            <span class="highlight info">DevOps</span>
                            <span class="highlight info">Git</span>
                            <span class="highlight info">Hardware</span>
                            <span class="highlight info">Mental Health</span>
                        </p>
                        <p><b>5th Floor</b></p>
                        <p>
                            <span class="highlight info">Career</span>
                            <span class="highlight info">Perf</span>
                            <span class="highlight info">TypeScript</span>
                            <span class="highlight info">SVG</span>
                            <span class="highlight info">Canvas</span>
                            <span class="highlight info">Web MIDI</span>
                        </p>
                    </div>
                </div>
                <div class="show-item">
                    <div class="what">
                        <div class="title">Remo Doors Close at 15:00</div>
                    </div>
                </div>
                <h4>Audio Chat</h4>
                ${ ticket && ticket.conference == 'Y' 
                    ? `<div class="cta"><a href="${ process.env.RAMBLY_URL }" target="_rambly">Join</a></div>` 
                    : ``}
                <div class="show-item">
                    <div class="what">
                        <div class="title">Rambly</div>
                        <p>Rambly is an 8-bit universe where you pick an avatar and walk around having audio-only conversations.</p>
                        <p>The volume for each participants is dependent on how close you are to them, so listen for the murmurs of a group and wander over to join them!</p>
                    </div>
                </div>
            </div>
            <div class="workshops track">
                <h3>Workshop Track</h3>
                <div class="show-item">       
                    <div class="when">10:30</div>
                    <div class="what">
                        <div class="title"><a href="/workshop-ui-testing">UI Testing Workshop</a></div>
                        <div class="speaker">
                            <p>Dig into the most popular UI web testing frameworks with Sauce Labs.</p>
                            <p><img src="/images/sponsors/saucelabs.svg" alt="Sauce Labs logo" width="150"/></p>
                        </div>
                    </div>
                </div>
                <!--div class="show-item">       
                    <div class="when">14:00</div>
                    <div class="what">
                        <div class="title">TBD</div>
                        <div class="speaker">
                            <p>More info coming soon!</p>
                        </div>
                    </div>
                </div-->
            </div>
        </div>
    </div>
`
}

function DayTwo({ speakers, ticket = undefined }) {
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
                ${ renderSpeaker("09:24", speakers.find(s => s.key === 'evan-tahler'))}
                ${ renderSpeaker("09:49", speakers.find(s => s.key === 'tianyu-pu'))}
                ${ renderSpeaker("10:13", speakers.find(s => s.key === 'scott-ammon'))}
                <div class="show-item">       
                    <div class="when">10:32</div>
                    <div class="what"><div class="title"><i class="fas fa-coffee"></i> Break</div></div>
                </div>
                ${ renderSpeaker("11:07", speakers.find(s => s.key === 'pantelis-kalogiros'))}
                ${ renderSpeaker("11:34", speakers.find(s => s.key === 'amber-hoak'))}
                ${ renderSpeaker("12:00", speakers.find(s => s.key === 'rahat-chowdhury'))}
                <div class="show-item">       
                    <div class="when">12:20</div>
                    <div class="what"><div class="title"><i class="fas fa-burger-soda"></i> Lunch</div></div>
                </div>
                ${ renderSpeaker("13:56", speakers.find(s => s.key === 'kj'))}
                ${ renderSpeaker("14:21", speakers.find(s => s.key === 'april-speight'))}
                ${ renderSpeaker("14:47", speakers.find(s => s.key === 'myriam-walden-duarte'))}
                <div class="show-item">       
                    <div class="when">15:04</div>
                    <div class="what"><div class="title"><i class="fas fa-pie"></i> Break</div></div>
                </div>
                ${ renderSpeaker("15:42", speakers.find(s => s.key === 'dan-mckeon'))}
                ${ renderSpeaker("16:01", speakers.find(s => s.key === 'rachelle-rathbone'))}
                ${ renderSpeaker("16:16", speakers.find(s => s.key === 'fred-k-schott'))}
                <div class="show-item">       
                    <div class="when">16:45</div>
                    <div class="what"><div class="title"><i class="fas fa-door-closed"></i> Conference Close</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">17:00</div>
                    <div class="what"><div class="title"><i class="fas fa-utensils-alt"></i> Dinner Break</div></div>
                </div>
                <div class="show-item">       
                    <div class="when">19:00</div>
                    <div class="what">
                        <div class="title">
                            <i class="fas fa-microphone"></i> <a href="/closing-party">Karaoke Party</a>
                        </div>
                        <p>
                        ${ ticket && ticket.conference === 'Y' 
                        ? `<div class="cta"><a href="${ process.env.KARAOKE_URL_1 }" target="_karaoke">Room #1</a></div> <div class="cta"><a href="${ process.env.KARAOKE_URL_2 }" target="_karaoke">Room #2</a></div>`
                        : ``}
                        </p>
                    </div>
                </div>
            </div>
            <div class="hallway track">
                <h3>Hallway Track</h3>
                <h4>Video Chat</h4>
                ${ ticket && ticket.conference === 'Y'
                    ? `<div class="cta"><a href="${ process.env.REMO_DAYONE_URL }" target="_hallway">Join</a></div>` 
                    : ``}
                <div class="show-item">       
                    <div class="what">
                        <div class="title">Remo Doors Open at 10:00</div>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="what">
                        <div class="title">Enter the #CJS20 Day Two Raffle!</div>
                        <p>More info about this coming soon!</p>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="what">
                        <div class="title">Booth Sponsors</div>
                        <div><img src="/images/sponsors/imgix.svg" width="150" alt="Imgix logo"/></div>
                        <div><img src="/images/sponsors/auth0.svg" width="150" alt="Auth0 logo"/></div>
                        <div><img src="/images/sponsors/tagboard.png" width="150" alt="Tagboard logo"/></div>
                        <div><img src="/images/sponsors/ld.svg" width="150" alt="Launch Darkly logo"/></div>
                    </div>
                </div>
                <div class="show-item">       
                    <div class="what">
                        <p class="title">Birds of a Feather Tables</p>
                        <p><b>All Floors</b></p>
                        <p>
                            <span class="highlight info">JavaScript</span>
                            <span class="highlight info">Node.js</span>
                            <span class="highlight info">React.js</span>
                            <span class="highlight info">Vue.js</span>
                            <span class="highlight info">Angular.js</span>
                            <span class="highlight info">Serverless</span>
                            <span class="highlight info">CSS</span>
                            <span class="highlight info">Open Source</span>
                            <span class="highlight info2">Seattle, WA</span>
                            <span class="highlight info2">Portland, OR</span>
                            <span class="highlight info2">Vancouver, BC</span>
                            <span class="highlight info2">Bend, OR</span>
                        </p>
                        <p><b>2nd Floor</b></p>
                        <p>
                            <span class="highlight info">dweb</span>
                            <span class="highlight info">IoT</span>
                            <span class="highlight info">Web Components</span>
                            <span class="highlight info">JAM Stack</span>
                            <span class="highlight info">Deno</span>
                            <span class="highlight info">UI / Design</span>
                        </p>
                        <p><b>3rd Floor</b></p>
                        <p>
                            <span class="highlight info">Ionic</span>
                            <span class="highlight info">React Native</span>
                            <span class="highlight info">Testing</span>
                            <span class="highlight info">NLP</span>
                            <span class="highlight info">ML / AI</span>
                            <span class="highlight info">Accessibility</span>
                        </p>
                        <p><b>4th Floor</b></p>
                        <p>
                            <span class="highlight info">APIs</span>
                            <span class="highlight info">NoSQL</span>
                            <span class="highlight info">DevOps</span>
                            <span class="highlight info">Git</span>
                            <span class="highlight info">Hardware</span>
                            <span class="highlight info">Mental Health</span>
                        </p>
                        <p><b>5th Floor</b></p>
                        <p>
                            <span class="highlight info">Career</span>
                            <span class="highlight info">Perf</span>
                            <span class="highlight info">TypeScript</span>
                            <span class="highlight info">SVG</span>
                            <span class="highlight info">Canvas</span>
                            <span class="highlight info">Web MIDI</span>
                        </p>
                    </div>
                </div>
                <div class="show-item">
                    <div class="what">
                        <div class="title">Remo Doors Close at 15:00</div>
                    </div>
                </div>
                <h4>Audio Chat</h4>
                ${ ticket && ticket.conference == 'Y' 
                    ? `<div class="cta"><a href="${ process.env.RAMBLY_URL }" target="_rambly">Join</a></div>` 
                    : ``}
                <div class="show-item">
                    <div class="what">
                        <div class="title">Rambly</div>
                        <p>Rambly is an 8-bit universe where you pick an avatar and walk around having audio-only conversations.</p>
                        <p>The volume for each participants is dependent on how close you are to them, so listen for the murmurs of a group and wander over to join them!</p>
                    </div>
                </div>
            </div>
            <div class="workshops track">
                <h3>Workshop Track</h3>
                <div class="show-item">       
                    <div class="when">10:30</div>
                    <div class="what">
                        <div class="title"><a href="/workshop-twilioquest">TwilioQuest Workshop</a></div>
                        <div class="speaker">
                            <p>You are invited to play TwilioQuest, a PC RPG inspired by classics of the 16-bit era!</p>
                            <p><img src="/images/sponsors/twilioquest.svg" alt="TwilioQuest logo" width="150"/></p>
                        </div>
                    </div>
                </div>
                <!--div class="show-item">       
                    <div class="when">14:00</div>
                    <div class="what">
                        <div class="title"><a href="/workshop-iot">IoT Workshop</a></div>
                        <div class="speaker">
                            <p>Get hands-on experience building IoT apps with Heroku and the pre-release Explore IoT Kit from Arduino!</p>
                            <p><img src="/images/sponsors/heroku.svg" alt="Heroku logo" width="150"/></p>
                        </div>
                    </div>
                </div-->
            </div>
        </div>
    </div>
`
}

function ConfSchedule ({ speakers, ticket = undefined }) {
    return /*html*/`
    <div id="conf-schedule">
        ${ DayZero({ ticket }) }
        ${ DayOne({ speakers, ticket }) }
        ${ DayTwo({ speakers, ticket }) }
    </div>`
}

module.exports = {
    ConfSchedule,
    DayZero,
    DayOne,
    DayTwo
}
