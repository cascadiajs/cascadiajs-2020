function script(source) {
  return `<script src=${source} type=module crossorigin></script>`
}

module.exports = function Scripts ({ scripts = [] }) {
  return /*html*/`
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
      <script>
      (function setFavicon() {
        const lightSchemeIcon = document.querySelector('link#light-scheme-icon');
        const darkSchemeIcon = document.querySelector('link#dark-scheme-icon');
        const setLight = () => {
          document.head.append(lightSchemeIcon);
          darkSchemeIcon.remove();
        }
        const setDark = () => {
          lightSchemeIcon.remove();
          document.head.append(darkSchemeIcon);
        }
        const onUpdate = () => {
          if (matcher.matches) setDark();
          else setLight();
        }
        const matcher = window.matchMedia('(prefers-color-scheme:dark)');
        matcher.addListener(onUpdate);
        onUpdate();
      })();
      </script>
      ${ scripts.map(s => script(s)) }
`
}
