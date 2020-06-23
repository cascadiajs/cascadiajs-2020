module.exports = function SocialLayout ({title, content}) {
  return /*html*/`
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>CascadiaJS 2020${ title ? ' - ' + title : '' }</title>
    <link rel="stylesheet" href="https://use.typekit.net/fro6sah.css">
    <link rel="stylesheet" href="/styles/normalize.css">
    <link rel="stylesheet" href="/styles/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div id="root">
      <div id="content">
      ${content}
      </div>
    </div>
  </body>
</html>
`
}
