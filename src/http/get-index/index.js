// eslint-disable-next-line no-global-assign
require = require('esm')(module)
let arc = require('@architect/functions')
let assets = require('./_assets')
let IndexView = require('@architect/views/index')
let Page = require('@architect/views/pages')
let NotFound = require('@architect/views/404')
let getSpeakerData = require('@architect/shared/data/get-speaker-data')

/**
 * Index & page views
 * - This root function handles the main index view, and...
 * - Anything not specifically caught by explicitly defined paths (i.e. `GET /coc`)
 */

async function Index (req) {
    if (req.path === '/') {
        let { speakers, selectedTopics, topics } = getSpeakerData(req)
        return await IndexView({ speakers, selectedTopics, topics })
    }
    else return
}

exports.handler = arc.http.async(assets, Index, Page, NotFound)
