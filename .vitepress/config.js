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
        text: 'Transformation',
        children: [
          { text: 'Width and height', link: '/width-and-height' },
        ]
      }
    ]
  }
}
