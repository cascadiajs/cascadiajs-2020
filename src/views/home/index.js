
let Layout = require('../layout')
let SpeakerContainer = require('../components/speakers')

let Template = function(props) {
    let { speakersContainer } = props
    return /*html*/`
    <div id="landing">
        <div id="hero">
            <div id="hero-logo"><img src="/images/hero-logo.svg" alt="logo"/></div>
            <div id="hero-images">
                <div><img src="/images/hero-illustration-01.svg" alt="list of talks #1"/></div>
                <div><img src="/images/hero-illustration-02.svg" alt="list of talks #2"/></div>
            </div>
        </div>
        ${ speakersContainer ? `<div id="speakers"><h2>Speakers</h2>${ speakersContainer }</div>` : ``} 
        <div id="attend">
            <div class="container">
                <div id="karaoke"><img src="/images/karaoke.svg" alt="There WILL be karaoke!"/></div>
                <div id="why">
                    <div class="headline">CascadiaJS has always been about bringing together an amazing group of web developers from across the Pacific Northwest (and beyond) to hear great talks, meet amazing people, and have fun.</div>
                    <div class="benefits">
                        When you buy a ticket, you get:
                        <ul>
                            <li><i class="fas fa-tv"></i> Access to the live stream of talks</li>
                            <li><i class="fas fa-microphone"></i> Access to speaker Q&A</li>
                            <li><i class="fas fa-briefcase"></i> Access to the Job Fair on August 31st</li>
                            <li><i class="fas fa-music"></i> Access to both evening social events (Karaoke Night &amp; Game Night)</li>
                            <li><i class="fas fa-gift"></i> A Goodie Box <u>shipped to you</u> that will include:
                                <ul>
                                    <li><i class="fas fa-tshirt"></i> CascadiaJS hoodie</li>
                                    <li><i class="fas fa-cat"></i> Stickers</li>
                                    <li><i class="fas fa-smile-wink"></i> Extra surprises!</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="coc">
            <div class="narrow">
                <h2>Code of Conduct</h2>
                <p>Everyone , including attendees, sponsors, speakers, and organizers - is required to agree to and follow our Code of Conduct. Inappropriate behavior or harassment of any kind is not tolerated. If you feel uncomfortable, are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference Staff are identified by red STAFF badges. You can also send an email to info@cascadiajs.com.</p>
                <div class="cta"><a href="/coc">Read the Code of Conduct</a></div>
            </div>
        </div>
        <div id="workshops">
            <div class="narrow">
                <h2>Workshops</h2>
                <h3>JavaScript: The Recent Parts</h3>
                <h4>Sept 3</h4>
                <p>Kyle Simpson will walk us through the newest additions to JavaScript, including: spread/rest, destructuring, template literals, iterators, generators, Array.includes, string padding, async-await, RegExp improvements, async generators/iteration and more.</p>
                <h3>Digging Into Node</h3>
                <h4>Sept 4</h4>
                <p>Kyle Simpson will spend a day Digging Into Node, including: building CLI tools (parameters, I/O, etc), file system operations, async, streams, HTTP handling, Express.js routing, SQLite databases, child processes and more.</p>
                <h3>React: Beyond the Basics</h3>
                <h4>Sept 8</h4>
                <p>Eve Porcello will cover the following in this intermediate React.js workshop: Hooks, Creating Custom Hooks, State Machines, Suspense Preview and Ecosystem APIs like React Router, Next.js, and more!</p>
                <h3>GraphQL: The Next Steps</h3>
                <h4>Sept 9</h4>
                <p>Eve Porcello will cover the following in this intermediate GraphQL workshop: Unions & Interfaces, Error Handling, Microservices with Apollo Federation, Graph Manager and Relay.</p>
                <div class="cta"><a href="/workshops">Workshops Info</a></div>
            </div>
        </div>
        <div id="organizers">
            <div class="wide">
                <h2>Organizers</h2>
                <div id="organizer-list">
                    <div class="organizer">
                        <div class="organizer-photo" style="background-image:url('/images/organizers/carter-rabasa.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
                        <div class="organizer-info">
                            <div class="organizer-name">Carter Rabasa</div>
                            <div class="organizer-misc">
                                Lead Organizer<br/>Seattle, WA
                            </div>
                        </div>
                    </div>
                    <div class="organizer">
                        <div class="organizer-photo" style="background-image:url('/images/organizers/carrie-rabasa.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
                        <div class="organizer-info">
                            <div class="organizer-name">Carrie Rabasa</div>
                            <div class="organizer-misc">
                                Lead Designer<br/>Seattle, WA
                            </div>
                        </div>
                    </div>
                    <div class="organizer">
                        <div class="organizer-photo" style="background-image:url('/images/organizers/jessica-west.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
                        <div class="organizer-info">
                            <div class="organizer-name">Jessica West</div>
                            <div class="organizer-misc">
                                Speaker Lead<br/>Seattle, WA
                            </div>
                        </div>
                    </div>
                    <div class="organizer">
                        <div class="organizer-photo" style="background-image:url('/images/organizers/jim-liu.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
                        <div class="organizer-info">
                            <div class="organizer-name">Jim Liu</div>
                            <div class="organizer-misc">
                                Community Lead<br/>Seattle, WA
                            </div>
                        </div>
                    </div>
                    <div class="organizer">
                        <div class="organizer-photo" style="background-image:url('/images/organizers/brenden-niedermeyer.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
                        <div class="organizer-info">
                            <div class="organizer-name">Brenden Niedermeyer</div>
                            <div class="organizer-misc">
                                New Speaker Support<br/>Seattle, WA
                            </div>
                        </div>
                    </div>
                    <div class="organizer">
                        <div class="organizer-photo" style="background-image:url('/images/organizers/heidi-laursen.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
                        <div class="organizer-info">
                            <div class="organizer-name">Heidi Laursen</div>
                            <div class="organizer-misc">
                                Speaker Wrangler<br/>Seattle, WA
                            </div>
                        </div>
                    </div>
                    <div class="organizer">
                        <div class="organizer-photo" style="background-image:url('/images/organizers/gabi-dombrowski.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
                        <div class="organizer-info">
                            <div class="organizer-name">Gabi Dombrowski</div>
                            <div class="organizer-misc">
                                Mentorship Lead<br/>Kansas City, MO
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="sponsors">
            <div>
                <h2>Sponsors</h2>
                <div id="sponsor-container">
                    <section id="sponsors-platinum">
                        <a href="https://fizbuz.com"><img src="/images/sponsors/fizbuz.svg" alt="Fizbuz logo"/></a>
                    </section>
                    <section id="sponsors-gold">
                        <a href="http://begin.com/"><img src="/images/sponsors/begin.svg" alt="Begin logo"/></a>
                        <a href="https://developer.microsoft.com/en-us/advocates/"><img src="/images/sponsors/microsoft.svg"/></a>
                    </section>
                    <section id="sponsors-silver">
                        <a href="https://mozilla.com"><img src="/images/sponsors/mozilla.svg"/></a>
                    </section>
                </div>
                <section id="sponsors-community">    
                    <a href="http://seattlejs.com/"><img src="/images/sponsors/seattlejs.svg" alt="SeattleJS logo"/></a>
                    <a href="https://www.meetup.com/ReactJS-Vancouver-Meetup/"><img src="/images/sponsors/reactvancouver.svg" alt="React Vancouver logo"/></a>
                </section>
                <div class="cta"><a href="/sponsor">Sponsor Info</a></div>
            </div>
        </div>
    </div>
`
}

module.exports = async function Index({ speakers, topics, selectedTopics }) {
    let speakersContainer
    if (speakers && speakers.length >= 1)
        speakersContainer = SpeakerContainer({ speakers, topics, selectedTopics })
    let content = Template({ speakersContainer })
    let html = Layout({content, scripts: ['modules/entry/speakers.js']})
    return { html }
}
