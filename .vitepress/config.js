export default {
  title: 'My Project',
  description: 'Documentation for my project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Guide',
          children: [
            { text: 'Introduction', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/getting-started' }
          ]
        }
      ]
    }
  }
}
