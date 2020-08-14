let Layout = require('../layout')

module.exports = async function Index({ ticket }) {
    let content = /*html*/`
        <div id=page>
            <div id=page-title><div><h1>Hello${ ticket.fullName ? ', ' + ticket.fullName : '' }!</h1></div></div>
            <div id=page-body class=narrow>
            <h2>Ticket Info</h2>
            <p><b>Type:</b> ${ ticket.ticket }</p>
            ${ ticket.hoodie === 'Y' ? /*html*/`
            <h2>Goodie Box</h2>
                ${ ticket.code ? /*html*/`
                <!--p>Disclaimer: Your Goodie Box may not arrive in time for the conference, but it will arrive</p-->
                <form action="https://stores.kotisdesign.com/cascadiajs2020/${ ticket.code }">
                    <button>Redeem Goodie Box</button>
                </form>`
                : /*html*/`
                <p>We have your information and your Goodie Box will be delivered to the address provided prior to Sept 1.</p>
                ` }
            ` : '' }
            ${ ticket.conference === 'Y' ? /*html*/`
            <h2>Live Stream</h2>
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
