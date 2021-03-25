const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'ES Doc',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    ['link', { rel: 'icon', href: '/favicon.png' }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'yegorgunko/es-doc',
    docsDir: 'src',
    docsBranch: 'master',
    lastUpdated: 'Обновлено',
    editLinks: true,
    editLinkText: 'Вы можете помочь улучшить эту страницу!',
    displayAllHeaders: true,
    nav: [
      {
        text: 'Руководство',
        link: '/guide/',
      },
      {
        text: 'Таблицы ресурсов',
        items: [
          {
            text: 'Ресурсы игры',
            link: '/resources/default/',
          },
          {
            text: 'Ресурсы сообщества',
            link: '/resources/community/',
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': ['', 'videos', 'advanced', 'errors', 'code-examples'],
      '/resources/': [
        {
          title: 'Ресурсы игры',
          path: '/resources/default/',
          collapsable: false,
          children: [
            'default/characters.md',
            {
              title: 'Изображения',
              collapsable: false,
              children: ['default/images/bgs.md', 'default/images/cgs.md'],
            },
            {
              title: 'Звуки',
              collapsable: false,
              children: [
                'default/sounds/ambiences.md',
                'default/sounds/music.md',
                'default/sounds/sfx.md',
              ],
            },
          ],
        },
        {
          title: 'Ресурсы сообщества',
          path: '/resources/community/',
          collapsable: false,
          children: [
            {
              title: 'Изображения',
              collapsable: false,
              children: ['community/images/bgs.md', 'community/images/cgs.md'],
            },
          ],
        },
      ],
    },
    sidebarDepth: 2,
    logo: '/logo.png',
  },

  markdown: {
    lineNumbers: true,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      '@vuepress/plugin-medium-zoom',
      {
        options: {
          margin: 24,
          background: '#212121',
        },
      },
    ],
  ],
}
