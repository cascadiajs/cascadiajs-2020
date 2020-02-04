let assetPath = process.env.BEGIN_STATIC_ORIGIN

module.exports = async function Layout ({title, content}) {
    return `
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <title>CascadiaJS 2020${ title ? ' - ' + title : '' }</title>
    <link rel="stylesheet" href="https://use.typekit.net/fro6sah.css">
    <link rel="stylesheet" href="${assetPath}/styles/normalize.css">
    <link rel="stylesheet" href="${assetPath}/styles/main.css">
    <script src="https://kit.fontawesome.com/439d39b111.js" crossorigin="anonymous"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div id="root">
      <header>
        <nav>
          <a href="/"><i class="fas fa-home"></i>Home</a>
          <a href="/schedule"><i class="fas fa-calendar"></i>Schedule</a>
          <a href="/travel"><i class="fas fa-suitcase"></i>Travel</a>
          <a href="/coc"><i class="fas fa-book-heart"></i>Code of Conduct</a>
          <a href="/tickets" class="buy highlight"><i class="fas fa-ticket-alt"></i>Buy Tickets</a>
        </nav>
      </header>
      <div id="content">
      ${content}
      </div>
      <footer>
        <section id="when-where">
          <h2>CascadiaJS<br/>Sep 1-2, 2020<br/>Sunriver, OR</h2>
        </section>
        <section id="stay-connected">
          <h2>Stay Connected</h2>
          <ul>
            <li><a href="http://eepurl.com/dPmCkT">Sign-up for our Newsletter</a></li>
            <li><a href="https://join.slack.com/t/cascadiajs/shared_invite/enQtNzYzMzYxMTc0OTc5LWM0ZDZiZDc5MDgwMmFkODdlZTdiMGE3NjFhYTZmNWVkMWEwMDcxNWE0Nzg5YTcwOGQzZDk0Y2M3ZWRmN2QwNzU">Join us on Slack</a></li>
            <li><a href="https://twitter.com/cascadiajs">Follow us on Twitter</a></li>
            <li><a href="https://github.com/cascadiajs/cascadiajs-2019/">Send us a PR on Github</a></li>
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
  </body>
</html>
`
}