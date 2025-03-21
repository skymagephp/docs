export default {
  title: 'Skymage docs',
  description: 'Documentation for Skymage image transformation service',
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: [
      {
        text: 'Usage',
        link: '/usage.md',
      },
      {
        text: 'Image transformations',
        items: [
          { text: 'Resize', link: '/resizing.md' },
        ]
      }
    ]
  }
}
