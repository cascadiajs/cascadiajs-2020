module.exports = function SocialLayout ({ header, image = '/images/cjs19-family.jpg', excerpt = '' }) {
  return /*html*/`
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <link rel="stylesheet" href="https://use.typekit.net/fro6sah.css">
    <link rel="stylesheet" href="/styles/normalize.css">
    <link rel="stylesheet" href="/styles/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div id="root">
      <div id="content">        
          <div id="social-share">
              <div id="social-image" style="background-image:url('${ image }'), linear-gradient(45deg, #112378, #17C37B);background-position: center;"></div>
              <div id="social-info">
                  <div id="social-header">${ header }</div>
                  <div id="social-excerpt">${ excerpt }</div>
                  <div id="social-footer">
                      <div id="social-event">
                          CascadiaJS<br/>
                          Sept 1-2, 2020<br/>
                          Cyberspace
                      </div>
                      <div>
                          <img src="/images/icon-green.svg" height="103" width="91" alt="logo"/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </body>
</html>
`
}
