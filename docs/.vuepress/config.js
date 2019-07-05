module.exports = {
  base: '/weexbox/',
  dest: 'weexbox',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'WeexBox 2',
      description: '一套简洁高效的APP混合开发解决方案'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  themeConfig: {
    repo: 'aygtech/aygtech.github.io',
    editLinks: true,
    docsDir: 'docs',
    // #697 Provided by the official algolia team.
    // algolia: {
    //   apiKey: '3a539aab83105f01761a137c61004d85',
    //   indexName: 'vuepress'
    // },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          {
            text: '指南',
            link: '/guide/',
          },
          // {
          //   text: '配置',
          //   link: '/config/'
          // },
          // {
          //   text: '默认主题',
          //   link: '/default-theme-config/'
          // },
          // {
          //   text: 'Changelog',
          //   link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          // }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('指南')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'hello-world',
        'migrate',
        'project',
        'native-ios',
        'native-android',
        'assets',
        'component',
        'module',
        'debug',
        'eslint',
        'guideline',
        'change-log',
        'who-s-using'
      ]
    }
  ]
}
