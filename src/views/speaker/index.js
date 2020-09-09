
let md = require('marked')
let Layout = require('../layout')
let SocialLayout = require('../layout/social')
let assetPath = 'https://create-4jr-staging.begin.app/_static/2020'

let Template = function(speaker) {
    const { key, name, location, company, url, twitter, title, topics, pronouns, abstract, resources } = speaker

    return /*html*/`
    <div id="page">
        <div class="page-title">
            <div>
                <h1>Speakers</h1>
            </div>
        </div>
        <div class="page-body">
            <section id="speaker">
                <h1>${ name }</h1>
                <div class="speaker-info">
                    <div class="speaker-photo" style="background-image:url('${ assetPath }/${ key }.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div>
                    <div class="speaker-more">
                        ${ pronouns ? `<h3>Pronouns</h3><p>${ pronouns }</p>` : '' }
                        <h3>Location</h3>
                        <p>${ location }</p>
                        <h3>Company</h3>
                        <p>${ company }</p>
                        <h3>Links</h3>
                        <div class="speaker-links">
                        ${ twitter ? `<div><i class="fab fa-twitter"></i> <a href="https://twitter.com/${ twitter }">@${ twitter }</a></div>` : '' }
                        ${ url ? `<div><i class="fa fa-globe"></i> <a href="${ url }">${ url.split("://")[1] }</a></div>` : '' }
                        </div>
                    </div>
                </div>
                <h2>${ title }</h2>
                <div class="topics">${ topics.map(t => `<div class=js-topic>${ t }</div>`).join('') }</div>
                <div class="abstract">${ md(abstract) }</div>
                <div class="illustration">
                    <img src="/images/speakers/${ key }-illustration.png" alt="talk illustration"/><br/>
                    <p><small><i>Illustrations made posible by our friends at <a href="https://circleci.com/signup">CircleCI</a> ❤️</i></small></p>
                </div>
                <div class="video">
                    <h3>Talk Recording</h3>
                    <p>Coming Soon!</p>
                </div>
                <div class="resources">
                    <h3>Talk Resources</h3>
                    ${ resources ? 
                        /*html*/`<ul>${resources.map(r => 
                            /*html*/`<li><a href="${ r.url }">${ r.title }</a></li>`)}</ul>` 
                    
                    : /*html*/`<p>Coming Soon!</p>` }
                </div>
            </section>
        </div>
    </div>
`
}

module.exports = async function Speaker({speaker, social}) {
    let html
    if (social !== undefined) {
        const { key, name: header, title: excerpt } = speaker
        const image = `${ assetPath }/${ key }.jpg`
        html = SocialLayout({ image, header, excerpt })
    }
    else {
        let content = Template(speaker)
        let socialUrl = `${ assetPath }/${ speaker.key }-social.png`
        let title = `${ speaker.name } | ${ speaker.title }`
        html = Layout({ content, title, socialUrl })
    }

    return { html }
}
