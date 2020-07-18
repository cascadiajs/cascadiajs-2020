let Layout = require('../layout')

module.exports = async function Index({ ticket }) {
    let content = /*html*/`
        <div id=page>
            <div id=page-title><div><h1>Hello${ ticket.fullName ? ', ' + ticket.fullName : '' }!</h1></div></div>
            <div id=page-body class=narrow>
            <h2>Ticket Info</h2>
            <p><b>Type:</b> ${ ticket.ticket }</p>
            ${ ticket.hoodie === 'Y' && ticket.code ? /*html*/`
            <h2>Goodie Box Redemption</h2>
            <p>You must redeem your Goodie Box by July 24 if you want to recieve it prior to the conference!</p>
            <form action="https://stores.kotisdesign.com/cascadiajs2020/${ ticket.code }">
                <button>Redeem Goodie Box</button>
            </form>
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
