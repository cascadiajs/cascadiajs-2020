let Layout = require('../layout')

module.exports = async function Index({ ticket }) {
    let content = /*html*/`
        <div id=page>
            <div class=page-title><div><h1>Hello${ ticket.fullName ? ', ' + ticket.fullName : '' }!</h1></div></div>
            <div class=page-body class=narrow>
            <h2>Ticket Info</h2>
            <ul>
                <li><b>Ticket Type:</b> ${ ticket.ticket }</li>
                <li><b>Conference:</b> ${ ticket.conference == 'Y' ? "Yes" : "No" }</li>
                <li><b>Goodie Box:</b> ${ ticket.hoodie === 'Y' ? "Yes" : "No" }</li>
            </ul>
            ${ ticket.hoodie === 'Y' ? /*html*/`
            <h2>Goodie Box</h2>
                ${ ticket.code ? /*html*/`
                <div class="highlight warning">You must redeem this by Friday, August 28</div>
                <div class="cta"><a href="https://stores.kotisdesign.com/cascadiajs2020/${ ticket.code }">Redeem Goodie Box</a></div>`
                : /*html*/`
                <p>We have your information and your Goodie Box will be delivered to the address provided during registration.</p>
                ` }
            ` : '' }
            ${ ticket.conference === 'Y' ? /*html*/`
            <h2>Career Night (8/31)</h2>
            <div class="cta"><a href="${ process.env.CAREER_NIGHT_URL }">RSVP</a></div>
            <h2>Conference Live Stream (9/1 &amp; 9/2)</h2>
            <div class="cta"><a href="/live">Live Stream</a></div>
            ` : '' }
            <h2>Reset Session</h2>
            <p>If you need to use a different Ticket Reference, just reset the session and start over.
            <form action=/home method=post>
                <input type=hidden name=reset value=reset/>
                <button>Reset Session</button>
            </form>
        </div>
    `
    let html = Layout({ content })
    return { html }
}
