let Layout = require('../layout')

module.exports = async function Index({ ticket }) {
    let content = /*html*/`
        <div id=page>
            <div class=page-title><div><h1>Hello${ ticket.fullName ? ', ' + ticket.fullName : '' }!</h1></div></div>
            <div id="home" class="page-body narrow">
                <span class="highlight warning">PLEASE READ: IMPORTANT NOTE FOR ALL ATTENDEES</span>
                <p>The URLs below are <em>private</em> and only meant for use by registered attendees of CascadiaJS 2020.</p>
                <p><b>Sharing these links with anyone who is not a registered attendee will be considered a <a href="/coc">Code of Conduct</a> violation.</b></p>
                <p>If you see anyone sharing or distributing these links, please let an organizer know. Help us keep CascadiaJS a <span class="highlight info">safe place</span> for everyone.</p>
                <h2>Ticket Info</h2>
                ${ ticket.hoodie && ticket.code ? '<p><em>Note: Deadline to redeem Goodie Box is Wed, 9/2</em></p>' : ''}
                <ul>
                    <li><b>Ticket Type:</b> ${ ticket.ticket }</li>
                    <li><b>Conference:</b> ${ ticket.conference == 'Y' ? "Yes" : "No" }</li>
                    <li><b>Goodie Box:</b> ${ ticket.hoodie === 'Y' 
                        ? ticket.code
                            ? `<a href="https://stores.kotisdesign.com/cascadiajs2020/${ ticket.code }">Redeem Goodie Box</a>` 
                            : "Yes"
                        : "No" }
                    </li>
                </ul>
                ${ ticket.conference === 'Y' ? /*html*/`
                <h2>Career Night (8/31)</h2>
                <ul>
                    <li><span class="cta"><a href="${ process.env.CAREER_NIGHT_URL }" target="_rsvp">RSVP</a></span></li>
                    <li><span class="cta"><a href="${ process.env.REMO_CAREER_URL }" target="_hallway">Attend / Remo (8/31)</a></span></li>
                </ul>
                <h2>Conference (9/1 &amp; 9/2)</h2>
                <ul>
                    <!--li><span class="cta"><a href="/live" target="_live">Live Stream Track</a></span></li-->
                    <li><span class="cta"><a href="${ process.env.RAMBLY_URL }" target="_rambly">Hallway Track / Rambly</a></span></li>
                    <li><span class="cta"><a href="${ process.env.REMO_DAYONE_URL }" target="_hallway">Hallway Track / Remo (Sept 1)</a></span></li>
                    <li><span class="cta"><a href="${ process.env.REMO_DAYTWO_URL }" target="_hallway">Hallway Track / Remo (Sept 2)</a></span></li>
                    <li><span class="cta"><a href="${ process.env.KARAOKE_URL_1 }" target="_karaoke">Karaoke Room #1 / Zoom (Sept 2)</a></span></li>
                    <li><span class="cta"><a href="${ process.env.KARAOKE_URL_1 }" target="_karaoke">Karaoke Room #2 / Zoom (Sept 2)</a></span></li>
                </ul>
                ` : '' }
                <h2>Reset Session</h2>
                <p>If you need to use a different Ticket Reference, just reset the session and start over.
                <form action=/home method=post>
                    <input type=hidden name=reset value=reset/>
                    <button>Reset Session</button>
                </form>
            </div>
        </div>
    `
    let html = Layout({ content })
    return { html }
}
