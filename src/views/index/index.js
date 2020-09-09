let Layout = require('../layout')
let OrganizerContainer = require('../components/organizers')
let SpeakersContainer = require('../components/speakers')

let Template = function(props) {
    let { organizerContainer, speakersContainer } = props
    return /*html*/`
    <div id="landing">
        <section id="hero">
            <div>
                <img src="/images/website-hero-game-over.svg" alt="the show has ended, see you in 2021!"/>
            </div>
        </section>
        <section id="speakers" class="landing">
            ${ speakersContainer }
        </section>
        <section id="newsletter" class="landing">
            <div class="wide">    
                <h2>Sign-up for Info on Upcoming Events</h2>
                <div class="cta"><a href="http://eepurl.com/dPmCkT">Join Our Mailing List</a></div>
            </div>
        </section>
        <section id="organizers" class="landing">
            <div class="wide">
                <h2>Organizers</h2>
                ${ organizerContainer }
            </div>
        </section>
        <section id="sponsors" class="landing">
            <div>
                <h2>Sponsors</h2>
                <div id="sponsor-container">
                    <div id="sponsors-left">
                        <section id="sponsors-platinum">
                            <a href="https://developer.salesforce.com"><img src="/images/sponsors/sfdc.svg" alt="Salesforce.com Engineering logo"/></a>
                        </section>
                        <section id="sponsors-silver">
                            <a href="https://fizbuz.com"><img src="/images/sponsors/fizbuz.svg" alt="Fizbuz logo"/></a>
                            <a href="http://begin.com/"><img src="/images/sponsors/begin.svg" alt="Begin logo"/></a>
                            <a href="https://mozilla.com"><img src="/images/sponsors/mozilla.svg" alt="Mozilla logo"/></a>
                            <a href="https://developer.microsoft.com/en-us/advocates/"><img src="/images/sponsors/microsoft.svg" alt="Microsoft logo"/></a>
                            <a href="/kotis-design"><img src="/images/sponsors/kotis-design-logo-black.svg" alt="Kotis logo"/></a>
                        </section>
                        <section id="sponsors-community">    
                            <a href="http://seattlejs.com/"><img src="/images/sponsors/seattlejs.png" alt="SeattleJS logo"/></a>
                            <a href="https://www.meetup.com/ReactJS-Vancouver-Meetup/"><img src="/images/sponsors/reactvancouver.svg" alt="React Vancouver logo"/></a>
                            <a href="https://www.meetup.com/SeattleVueJS/"><img src="/images/sponsors/sea-vuejs.jpg" alt="Seattle Vue.js logo"/></a>
                            <a href="http://pdxnode.org/"><img src="/images/sponsors/pdx-node.svg" alt="PDXNode logo"/></a>
                            <a href="https://www.meetup.com/Seattle-Node-js/"><img src="/images/sponsors/seattle-node.png" alt="Seattle Node logo"/></a>
                        </section>
                    </div>
                    <div id="sponsors-right">
                        <section id="sponsors-gold">
                            <a href="https://launchdarkly.com/solutions/development-teams/?utm_source=sponsored_corporate&utm_medium=Events_Conferences&utm_campaign=cascadiajs"><img src="/images/sponsors/ld.svg" alt="Launch Darkly logo"/></a>
                            <a href="https://heroku.com"><img src="/images/sponsors/heroku.svg" alt="Heroku logo"/></a>    
                            <a href="https://auth0.com"><img src="/images/sponsors/auth0.svg" alt="Auth0 logo"/></a>
                            <a href="https://circleci.com/"><img src="/images/sponsors/circle-ci.png" alt="Circle CI logo"/></a>
                            <a href="https://twilio.com"><img src="/images/sponsors/twilio.svg" alt="Twilio logo"/></a>
                            <a href="https://saucelabs.com"><img src="/images/sponsors/saucelabs.svg" alt="Twilio logo"/></a>
                            <a href="https://imgix.com"><img src="/images/sponsors/imgix.svg" alt="Imgix logo"/></a>
                            <a href="https://tagboard.com"><img src="/images/sponsors/tagboard.png" alt="Tagboard logo"/></a>
                        </section>
                    </div>
                </div>
                <div class="cta"><a href="/sponsor">Sponsor Info</a></div>
            </div>
        </section>
        <section id="attendees" class="landing">
            <h2>Who's Coming?</h2>
            <div id="attendees-pics"></div>
            <div><a href="/directory">Add your profile to the Conference Directory</a></div>
        </section>
    </div>
`
}

module.exports = async function Index({ speakers }) {
    let organizerContainer = OrganizerContainer()
    let speakersContainer = SpeakersContainer({ speakers })
    let content = Template({ organizerContainer, speakersContainer })
    let html = Layout({content, scripts: ['/js/attendees.js']})
    return { html }
}