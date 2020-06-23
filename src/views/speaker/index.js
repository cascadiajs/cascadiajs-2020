
let Layout = require('../layout')
let SocialLayout = require('../layout/social')
let assetPath = 'https://create-4jr-staging.begin.app/_static/2020'

let SocialTemplate = function(speaker) {
    const { key, name, title } = speaker
    return /*html*/`
    <div id="speaker-share">
        <div class="speaker-info">
            <div class="speaker-photo" style="background-image:url('${ assetPath }/${ key }.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div>
            <div id="speaker-share-info">
                <div id="speaker-share-name">${ name }</div>
                <div id="speaker-share-title">${ title }</div>
                <div id="speaker-share-footer">
                    <div id="speaker-share-event">
                        CascadiaJS<br/>
                        Sept 1-2, 2020<br/>
                        Cyberspace
                    </div>
                    <div id="speaker-share-logo">
                        <img src="/images/icon-green.svg" height="103" width="91" alt="logo"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
}

let Template = function(speaker) {
    const { key, name, location, company, /*url, twitter,*/ title, topics, pronouns, abstract } = speaker
    return /*html*/`
    <div id="page">
        <div id="page-title">
            <div>
                <h1>Speakers</h1>
            </div>
        </div>
        <div id="page-body">
            <section id="speaker">
                <h1>${ name }</h1>
                <div class="speaker-info">
                    <div class="speaker-photo" style="background-image:url('${ assetPath }/${ key }.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div>
                    <div class="speaker-more">
                        <h3>Pronouns</h3>
                        <p>${ pronouns }</p>
                        <h3>Location</h3>
                        <p>${ location }</p>
                        <h3>Company</h3>
                        <p>${ company }</p>
                    </div>
                </div>
                <h2>Talk: ${ title }</h2>
                <div class="topics">${ topics.map(t => `<div class=js-topic>${ t }</div>`).join('') }</div>
                <div class="abstract">${ abstract }</div>
            </section>
        </div>
    </div>
`
}

module.exports = async function Speaker({speaker, social}) {
    let html
    if (social !== undefined) {
        let content = SocialTemplate(speaker)
        html = SocialLayout({content})
    }
    else {
        let content = Template(speaker)
        let socialUrl = `${ assetPath }/${ speaker.key }-social.png`
        let meta = `<meta property="og:image" content="${ socialUrl }" />
        <meta name="twitter:image" content="${ socialUrl }">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@cascadiajs">
        <meta name="twitter:title" content="CascadiaJS 2020 | ${ speaker.name } | ${ speaker.title }">`
        html = Layout({ content, meta })
    }

    return { html }
}
