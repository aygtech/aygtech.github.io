module.exports = {
  base: '/hm-oms/',
  dest: 'hm-oms',
  host: '0.0.0.0',
  port: 9000,
  head: [
    [ 'link', { rel: 'icon', href: `/logo.png` } ],
    // ['link', { rel: 'manifest', href: '/manifest.json' }],
    [ 'meta', { name: 'theme-color', content: '#268EFF' } ],
    [ 'meta', { name: 'apple-mobile-web-app-capable', content: 'yes' } ],
    [ 'meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' } ],
    // ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#268EFF' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '合摩标准化运营后台',
      description: '公司内部所有运营后台都能复用该套标准（UI界面，前端开发，交互，体验）',
    },
  },
  pageClass: 'blade',
  serviceWorker: true,
  themeConfig: {
    repo: 'aygtech/aygtech.github.io',
    // repoLabel: 'github',
    editLinks: true,
    docsDir: 'hm-oms-docs',
    // sidebarDepth: 1,
    // activeHeaderLinks: false,
    displayAllHeaders: false,
    locales: {
      '/': { // 多语言-根目录时
        label: '简体中文',
        selectText: '选择语言',
        lastUpdated: '上次更新',
        editLinkText: '帮助我们改善此页面！',
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
          }
        },
        nav: [
          { text: '指南', link: '/guide/' },
        ],
        sidebar: {
          '/guide/': getSidebarConf('指南')
        },
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@p': '.vuepress/public'
      }
    }
  },
}


function getSidebarConf(title) {
  return [{
    title,
    collapsable: false,
    children: [
      '',
      'fast',
      'global',
      'layout',
      'page',
      'components',
      'changelog',
      'aboutus',
    ]
  }];
}