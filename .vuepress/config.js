const nav = require('./public/nav.js')
const sidebar = require('./public/sidebar.js')
const plugins = require('./public/plugins.js')
module.exports = {
  title: "chenjieBlog",
  description: "热爱生活，积极向上",
  head: [
    ["link", {
      rel: "icon",
      href: "https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/favicon.ico"
    }],
    ["meta", {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no"
    }],
  ],
  locales: {
    "/": {
      lang: "zh-CN"
    },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins,
  theme: "reco",
  themeConfig: {
    type: "blog",
    logo: "https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/logo.png",
    // 作者
    author: "chenjie",
    // 作者头像
    authorAvatar: "https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/logo.png",

    // 404腾讯公益
    noFoundPageByTencent: false,

    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,

    nav,

    sidebar,

    // 博客设置
    blogConfig: {
      category: {
        location: 3, // 在导航栏菜单中所占的位置
        text: "分类"
      },
      tag: {
        location: 4, // 在导航栏菜单中所占的位置
        text: "标签"
      },
    },

    // 评论浏览量设置 Vssue
    valineConfig: {
      appId: 'PfR1wsFJNHBbypY4iC5lRKtg-gzGzoHsz', // LeanCloud appId
      appKey: 'qf4G6VaLJHHzzQsEAykjvrCL', // LeanCloud appKey
    },

    // 最后更新时间
    lastUpdated: "Last Updated",
    // 项目开始时间
    startYear: "2020"
    // 备案号
    // record: "xxxx"
  }
}
