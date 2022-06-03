const nav = require('../config/nav.js')
const sidebar = require('../config/sidebar.js')
const plugins = require('../config/plugins.js')

module.exports = {
  base: '/ChenJieBlog',

  title: 'ChenJieBlog',

  description: '愿你能乘风破浪所向无前',

  plugins,

  head: [
    [
      'link',
      {
        rel: 'icon',
        href:
          'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/base/base-favicon.ico'
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no'
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },

  markdown: {
    lineNumbers: true
  },

  theme: 'reco',

  themeConfig: {
    nav,
    sidebar,
    type: 'blog',
    logo:
      'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/base/base-logo.png',
    author: 'chenjie', // 作者
    // 作者头像
    authorAvatar:
      'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/base/base-logo.png',
    // 404腾讯公益
    noFoundPageByTencent: false,
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 博客设置
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置
        text: '分类'
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置
        text: '标签'
      }
    },

    // 评论浏览量设置 Vssue
    valineConfig: {
      appId: 'PfR1wsFJNHBbypY4iC5lRKtg-gzGzoHsz', // LeanCloud appId
      appKey: 'qf4G6VaLJHHzzQsEAykjvrCL' // LeanCloud appKey
    },

    // 最后更新时间
    lastUpdated: 'Last Updated',

    // 项目开始时间
    startYear: '2020'

    // 备案号
    // record: 'xxxx'
  }
}
