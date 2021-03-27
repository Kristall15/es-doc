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
    ['link', { rel: 'icon', href: '/images/icons/favicon.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#CD0000' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        href: '/images/icons/pwa/apple-touch-icon-152x152.png',
      },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/pwa/safari-pinned-tab.png',
        color: '#CD0000',
      },
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/images/icons/pwa/msapplication-icon-144x144.png',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
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
      {
        text: 'Разное',
        link: '/misc/',
      },
    ],
    sidebar: {
      '/guide/': [
        '',
        'videos.md',
        'advanced.md',
        'errors.md',
        'code-examples.md',
      ],
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
      '/misc/': [
        {
          title: 'Разное',
          path: '/misc/',
          collapsable: false,
          children: ['news-sources.md'],
        },
      ],
    },
    sidebarDepth: 2,
    logo: '/images/icons/logo.png',
  },

  markdown: {
    lineNumbers: true,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    [
      '@vuepress/plugin-medium-zoom',
      {
        options: {
          margin: 24,
          background: '#212121',
        },
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          message: 'Доступен новый контент.',
          buttonText: 'Обновить',
        },
      },
    ],
    '@vuepress/plugin-back-to-top',
    'check-md',
    'img-lazy',
    'fulltext-search',
  ],
}
