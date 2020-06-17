let arc = require('@architect/functions')
let assets = require('./_assets')
let Index = require('@architect/views/index')
let Page = require('@architect/views/pages')
let NotFound = require('@architect/views/404')

/**
 * Index & page views
 * - This root function handles the main index view, and...
 * - Anything not specifically caught by explicitly defined paths (i.e. `GET /speakers/:speaker`)
 */
exports.handler = arc.http.async(assets, Index, Page, NotFound)
