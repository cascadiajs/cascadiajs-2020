let Layout = require('../layout')

module.exports = async function({ message }) {
    let content = /*html*/`
        <div id=page>
            <div class=page-title><div><h1>Log-in to Your Conference Dashboard</h1></div></div>
            <div class=page-body class=narrow>
            ${ message ? `<div class="highlight error">${ message }</div>` : '' }
                <h2>Welcome to the show!</h2>
                <p>Everyone who bought a ticket to CascadiaJS 2020 was assigned a unique ticket code. This ticket code
                is what you will use to log-in to your Conference Dashboard.</p>
                <p>You can find your ticket code in an email that was sent to you with the subject "Your CascadiaJS 2020 Ticket". See below
                for a screenshot that will help you located the ticket code.</p>
                <form action=/home method=post>
                    <input style="width:100%;margin-bottom:8px" type=text placeholder="Ticket Reference (i.e. ABCD-1)" name=ticketRef>
                    <button>Submit</button>
                </form>
                <h3>Screenshot of Ticket Confirmation Email</h3>
                <p><img src="/images/tito-ticket.png" alt="screen shot of ticket confirmation"/></p>
            </div>
        </div>
    `
    let html = Layout({ content })
    return { html }
}
