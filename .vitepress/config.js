export default {
  title: 'My Project',
  description: 'Documentation for my project',
  base: '/docs/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Transformation',
          children: [
            { text: 'Width and height', link: '/width-and-height' },
          ]
        }
      ]
    }
  }
}
