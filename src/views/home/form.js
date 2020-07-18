let Layout = require('../layout')

module.exports = async function({ message }) {
    let content = /*html*/`
        <div id=page>
            <div id=page-title><div><h1>Validate Ticket</h1></div></div>
            <div id=page-body class=narrow>
            ${ message ? `<div class="highlight error">${ message }</div>` : '' }
                <p>Please enter your Ticket Reference below. You can find this in an email that was sent to you with the subject "Your CascadiaJS 2020 Ticket".</p>
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
