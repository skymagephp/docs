export default {
  title: 'Skymage',
  description: 'Documentation for Skymage, the image transformation service on the fly',
  base: '/docs/',
  // Enable full text search
  search: {
    provider: 'local',
    options: {
      disableDetailedView: false,
      disableQueryPersistence: false
    }
  },
  // Add last updated info
  lastUpdated: true,
  sitemap: {
    hostname: 'https://skymage.dev/docs/'
  },
  themeConfig: {
    // Add logo to the site header with a link to the main site
    logo: 'https://skymage.dev/logo.svg',

    // Link the logo to the main site
    logoLink: {
      link: '/',
      target: '_self'
    },

    logoLinkTarget: '_self',

    outline: [2,3],
    nav: [
      { text: 'Home', link: 'https://skymage.dev', target: '_self', noIcon: true },
      { text: 'Blog', link: 'https://skymage.dev/blog', target: '_self', noIcon: true },
      { text: 'Pricing', link: 'https://skymage.dev/pricing', target: '_self', noIcon: true },
      { text: 'Login', link: 'https://skymage.dev/login', target: '_self', noIcon: true },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/index.md' },
        ]
      },
      {
        text: 'Transformations',
        items: [
          { text: 'Resize', link: '/resizing.md' },
          { text: 'Fit', link: '/fit.md' },
          { text: 'Crop', link: '/crop.md' },
          { text: 'Blur & Sharpen', link: '/blur-and-sharpen.md' },
          { text: 'Flip', link: '/flip.md' },
          { text: 'Filters', link: '/filters.md' },
          { text: 'Watermark', link: '/watermark.md' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'x', link: 'https://x.com/bangnokia' },
    ],

    // Footer message
    footer: {
      copyright: 'Copyright © 2025 Skymage'
    },

    // Add "Edit this page" links to GitHub
    editLink: {
      pattern: 'https://github.com/skymagephp/docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    // Customize the last updated text
    lastUpdatedText: 'Last Updated',

    // Improve the doc footer
    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    // Add dark/light mode toggle
    appearance: 'dark',
    search: {
      provider: 'local'
    }
  },

  // Add VitePress theme color customization
  head: [
    ['link', { rel: 'icon', type: 'image/svg', href: 'https://skymage.dev/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3498db' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-BCD27V2R1D' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-BCD27V2R1D');
    `],
    ['script', {}, `
      !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
      posthog.init('phc_Ly5ktKlpK6IcF6UtC00S4gv9nloHPW6GYcRcGoidOLU', {
        api_host: 'https://us.i.posthog.com',
        person_profiles: 'identified_only',
      });
    `]
  ]
}
