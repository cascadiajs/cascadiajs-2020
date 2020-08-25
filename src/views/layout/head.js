function script(source) {
  return `<script src=${source} type=module crossorigin></script>`
}

module.exports = function Head ({title, socialUrl = 'https://2020.cascadiajs.com/images/cjs19-family.jpg', scripts = []}) {
  // expand title
  title = `CascadiaJS 2020${ title ? ' - ' + title : '' }`

  return /*html*/`
  <head>
    <meta charset=utf-8>
    <title>${ title }</title>
    <link rel="stylesheet" href="https://use.typekit.net/fro6sah.css">
    <link rel="stylesheet" href="/styles/normalize.css">
    <link rel="stylesheet" href="/styles/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta property="og:image" content="${ socialUrl }" />
    <meta name="twitter:image" content="${ socialUrl }">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@cascadiajs">
    <meta name="twitter:title" content="${ title }">
    <link id="light-scheme-icon" rel="icon" href="/images/icon.svg">
    <link id="dark-scheme-icon" rel="icon" href="/images/icon-green.svg">
    <script src="/js/floating.js"></script>
    ${ scripts.map(s => script(s)) }
  </head>
`
}
