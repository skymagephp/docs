export default {
  title: 'Skymage docs',
  description: 'Documentation for Skymage image transformation service',
  base: '/docs/',
  themeConfig: {
    outline: [2,3],
    nav: [
      { text: 'Home', link: 'https://skymage.daudau.cc' },
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/index.md' }
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
          { text: 'Watermark', link: '/watermark.md' },
        ]
      }
    ]
  }
}
