export default {
  title: 'Skymage',
  description: 'Documentation for SkymagePHP, the image transfomration service on the fly',
  base: '/',
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
  themeConfig: {
    // Add logo to the site header
    logo: 'https://skymage.daudau.cc/logo.svg',

    outline: [2,3],
    nav: [
      { text: 'Home', link: 'https://skymage.daudau.cc', target: '_self' },
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
          { text: 'Resize', link: '/docs/resizing.md' },
          { text: 'Fit', link: '/docs/fit.md' },
          { text: 'Crop', link: '/docs/crop.md' },
          { text: 'Blur & Sharpen', link: '/docs/blur-and-sharpen.md' },
          { text: 'Flip', link: '/docs/flip.md' },
          { text: 'Filters', link: '/docs/filters.md' },
          { text: 'Watermark', link: '/docs/watermark.md' },
        ]
      }
    ],

    // Social links with icons
    socialLinks: [
      { icon: 'x', link: 'https://x.com/bangnokia' },
    ],

    // Footer message
    footer: {
      message: 'Built with ♥ using VitePress',
      copyright: 'Copyright © 2023 SkymagePHP'
    },

    // Add "Edit this page" links to GitHub
    editLink: {
      pattern: 'https://github.com/daudau/skymagephp/edit/main/docs/:path',
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
    appearance: 'dark'
  },

  // Add VitePress theme color customization
  head: [
    ['link', { rel: 'icon', type: 'image/svg', href: 'https://skymage.daudau.cc/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3498db' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ]
}
