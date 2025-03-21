export default {
  title: 'Skymage',
  description: 'Documentation for SkymagePHP',
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
  themeConfig: {
    // Add logo to the site header
    logo: 'https://skymage.daudau.cc/logo.svg',

    outline: [2,3],
    nav: [
      { text: 'Home', link: 'https://skymage.daudau.cc' },
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
        collapsible: true,
        collapsed: false,
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

    // Social links with icons
    socialLinks: [
      { icon: 'x', link: 'https://x.com/bangnokia' },
      { icon: 'github', link: 'https://github.com/daudau/skymagephp' }
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
