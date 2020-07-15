function script(source) {
  return `<script src=${source} type=module crossorigin></script>`
}

module.exports = function Layout ({title, content, socialUrl = '/images/cjs19-family.jpg', scripts = []}) {
  // expand title
  title = `CascadiaJS 2020${ title ? ' - ' + title : '' }`

  return /*html*/`
<!doctype html>
<html lang=en>
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
    <link rel="icon" href="/images/icon.svg">
  </head>
  <body>
    <div id="root">
      <header>
        <section class="alert">
          <i class="fas fa-hand-point-right"></i> The deadline to register &amp; receive a Goodie Box in the mail is JULY 24th! <i class="fas fa-hand-point-left"></i>
        </section>
        <nav>
          <div class="wide">
            <div id="logo"><a href="/"><img src="/images/icon-green.svg" alt="logo"/></a></div>
            <div><span><a href="/">CascadiaJS</a></span></div>
            <div class="push"><a href="/schedule">Schedule</a></div>
            <div class="spacer"><a href="/accessibility">Accessibility</a></div>
            <div class="spacer"><a href="/scholarships">Scholarships</a></div>
            <div class="spacer"><a href="/coc">Code of Conduct</a></div>
            <div class="spacer"><a href="https://ti.to/event-loop/cascadiajs-2020/" class="buy">Tickets</a></div>
          </div>
        </nav>
      </header>
      <div id="content">
      ${content}
      </div>
      <footer>
        <div class="wide">
          <section id="when-where">
            <h2>CascadiaJS<br/>Sep 1-2, 2020<br/>Cyberspace</h2>
          </section>
          <section id="stay-connected" class="push">
            <h2>Stay Connected</h2>
            <ul>
              <li><a href="http://eepurl.com/dPmCkT">Sign-up for our Newsletter</a></li>
              <li><a href="https://join.slack.com/t/cascadiajs/shared_invite/enQtNzYzMzYxMTc0OTc5LWM0ZDZiZDc5MDgwMmFkODdlZTdiMGE3NjFhYTZmNWVkMWEwMDcxNWE0Nzg5YTcwOGQzZDk0Y2M3ZWRmN2QwNzU">Join us on Slack</a></li>
              <li><a href="https://twitter.com/cascadiajs">Follow us on Twitter</a></li>
              <li><a href="https://github.com/cascadiajs/cascadiajs-2020/">Send us a PR on Github</a></li>
            </ul>
          </section>
          <section id="past-events">
            <h2>Past Events</h2>
            <ul>
              <li><a href="https://2019.cascadiajs.com">2019</a></li>
              <li><a href="https://2018.cascadiajs.com">2018</a></li>
              <li><a href="https://2016.cascadiafest.org">2016</a></li>
              <li><a href="https://2015.cascadiajs.com">2015</a></li>
              <li><a href="https://2014.cascadiajs.com">2014</a></li>
              <li><a href="https://2013.cascadiajs.com">2013</a></li>
              <li><a href="https://2012.cascadiajs.com">2012</a></li>
            </ul>
          </section>
        </div>
      </footer>
    </div>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-153510023-1"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'UA-153510023-1');
    </script>
    <!-- Twitter universal website tag code -->
    <script>
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
    // Insert Twitter Pixel ID and Standard Event data below
    twq('init','o054c');
    twq('track','PageView');
    </script>
    <!-- End Twitter universal website tag code -->
    <script src="https://kit.fontawesome.com/439d39b111.js" crossorigin="anonymous" async></script>
    ${ scripts.map(s => script(s)) }
  </body>
</html>
`
}
