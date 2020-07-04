module.exports = {
  title: "chenjieBlog",
  description: "热爱生活，积极向上",
  head: [
    ["link", {
      rel: "icon",
      href: "https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/favicon.ico"
    }],
    ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
  ],
  locales: {
    "/": { lang: "zh-CN" },
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    // 进度条
    ['@vuepress/nprogress'],
    // 弹框
    ['@vuepress-yard/vuepress-plugin-window',
      {
        title: '微信公众号',
        contentInfo: {
          title: '前端技术指南 🎉',
          needImg: true,
          imgUrl: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/qrcode.png'
        },
        bottomInfo: {
          btnText: ''
        }
      }
    ],
    // bgm
    ['@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: '雨爱',
            artist: '周星星',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/雨爱 - 周星星.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/雨爱.png'
          },
          {
            name: '夏天的风',
            artist: '火羊瞌睡了',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/夏天的风 - 火羊瞌睡了.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/夏天的风.png'
          },
          {
            name: '夜空中最亮的星',
            artist: '戴羽彤',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/夜空中最亮的星 - 戴羽彤.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/夜空中最亮的星.png'
          },
          {
            name: '我的天空',
            artist: '南征北战NZBZ',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我的天空 - 南征北战NZBZ.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我的天空.png'
          },
          {
            name: '绽放',
            artist: '南征北战NZBZ',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/绽放 - 南征北战NZBZ.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/绽放.png'
          },
          {
            name: '辞九门回忆',
            artist: '等什么君',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/辞九门回忆 - 等什么君.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/辞九门回忆.png'
          },
          {
            name: '狂浪生',
            artist: '一棵小葱,李宗南',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/狂浪生 - 一棵小葱,李宗南.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/狂浪生.png'
          },
          {
            name: '盗墓笔记十年人间',
            artist: '李常超',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/盗墓笔记十年人间 - 李常超.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/盗墓笔记十年人间.png'
          },
          {
            name: '盗将行',
            artist: '花粥,马雨阳',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/盗将行 - 花粥,马雨阳.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/盗将行.png'
          },
          {
            name: '大天蓬',
            artist: '李袁杰',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/大天蓬 - 李袁杰.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/大天蓬.png'
          },
          {
            name: '天下',
            artist: '高鱼',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/天下 - 高鱼.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/天下.png'
          },
          {
            name: '世间美好与你环环相扣',
            artist: '柏松',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/世间美好与你环环相扣 - 柏松.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/世间美好与你环环相扣.png'
          },
          {
            name: '你是人间四月天',
            artist: '解忧邵帅',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/你是人间四月天 - 解忧邵帅.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/你是人间四月天.png'
          },
          {
            name: '写给黄淮',
            artist: '解忧邵帅',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/写给黄淮 - 解忧邵帅.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/写给黄淮.png'
          },
          {
            name: '/世界が终るまでは',
            artist: 'WANDS',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/世界が终るまでは - WANDS.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/世界が终るまでは.png'
          },
          {
            name: '我的歌声里',
            artist: '神控',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我的歌声里 - 神控.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我的歌声里.png'
          },
          {
            name: 'AvaMaxSweetButPsycho',
            artist: '迷人苏刚',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/AvaMaxSweetButPsycho - 迷人苏刚.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/AvaMaxSweetButPsycho.png'
          },
          {
            name: '如你一般的人',
            artist: '二狗村高富帅',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/如你一般的人 - 二狗村高富帅.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/如你一般的人.png'
          }, {
            name: '忘不掉的伤',
            artist: '新小新',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/忘不掉的伤 - 新小新.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/忘不掉的伤.png'
          },
          {
            name: '秋殇别恋',
            artist: '秦Sir',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/秋殇别恋 - 秦Sir.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/秋殇别恋.png'
          },
          {
            name: '爱一点',
            artist: '浪子康',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/爱一点 - 浪子康.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/爱一点.png'
          },
          {
            name: '7',
            artist: 'xmaswu',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/7 - xmaswu.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/7.png'
          },
          {
            name: '一笑倾城',
            artist: 'CHENTU尘土',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/一笑倾城 - CHENTU尘土.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/一笑倾城.png'
          },
          {
            name: '与我无关',
            artist: '阿冗',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/与我无关 - 阿冗.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/与我无关.png'
          },
          {
            name: '海底',
            artist: '一支榴莲',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/海底 - 一支榴莲.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/海底.png'
          },
          {
            name: '丢了你',
            artist: '井胧',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/丢了你 - 井胧.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/丢了你.png'
          },
          {
            name: '你的姑娘',
            artist: '隔壁老樊',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/你的姑娘 - 隔壁老樊.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/你的姑娘.png'
          },
          {
            name: '冬眠',
            artist: '司南',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/冬眠 - 司南.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/冬眠.png'
          },
          {
            name: '嘲笑声',
            artist: 'Big Daddy',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/嘲笑声 - Big Daddy.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/嘲笑声.png'
          },
          {
            name: '飘向北方',
            artist: '那吾克热-NW,尤长靖',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/飘向北方 - 那吾克热-NW,尤长靖.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/飘向北方.png'
          },
          {
            name: '太阳',
            artist: '王巨星',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/太阳 - 王巨星.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/太阳.png'
          },
          {
            name: '意外',
            artist: '薛之谦',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/意外 - 薛之谦.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/意外.png'
          },
          {
            name: '感谢你曾来过',
            artist: '周思涵,Ayo97',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/感谢你曾来过 - 周思涵,Ayo97.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/感谢你曾来过.png'
          },
          {
            name: '我不是你的宋冬野',
            artist: '我是张怡啊',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我不是你的宋冬野 - 我是张怡啊.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我不是你的宋冬野.png'
          },
          {
            name: '我们的天空',
            artist: '黄艺明',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我们的天空 - 黄艺明.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我们的天空.png'
          },
          {
            name: '我很快乐',
            artist: '刘惜君',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我很快乐 - 刘惜君.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/我很快乐.png'
          },
          {
            name: '有何不可',
            artist: '许嵩',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/有何不可 - 许嵩.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/有何不可.png'
          },
          {
            name: '素颜',
            artist: '许嵩,何曼婷',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/素颜 - 许嵩,何曼婷.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/素颜.png'
          },
          {
            name: '爱情错觉',
            artist: '半吨兄弟',
            url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/爱情错觉 - 半吨兄弟.mp3',
            cover: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/爱情错觉.png'
          }
        ],
        position: {
          bottom: '20px'
        },
        floatStyle: {
          bottom: '50px'
        }
      }
    ]
  ],
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
    nav: [
      { text: "主页", link: "/", icon: "reco-home" },
      {
        text: "文档",
        icon: "reco-document",
        items: [
          { text: "git", link: "/docs/git.md" },
          { text: "html", link: "/docs/html.md" },
          { text: "css", link: "/docs/css.md" },
          { text: "javascript", link: "/docs/javascript.md" },
          { text: "vuejs", link: "/docs/vuejs.md" },
          { text: "nodejs", link: "/docs/nodejs.md" },
          { text: "webpack", link: "/docs/webpack.md" },
          { text: "element-ui", link: "/docs/element-ui.md" },
          { text: "vue-element-admin", link: "/docs/vue-element-admin.md" },
          { text: "uni-app", link: "/docs/uni-app.md" },
          { text: "微信小程序", link: "/docs/微信小程序.md" }
        ]
      },
      { text: "时间线", link: "/timeline/", icon: "reco-date" },
      { text: "GitHub", link: "https://github.com/webchenjie", icon: "reco-github" },
    ],

    sidebar: {
      "/docs/": ["git", "html", "css", "javascript", "vuejs", "nodejs", "webpack", "element-ui", "vue-element-admin", "uni-app", "微信小程序"],
    },

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
      appId: 'PfR1wsFJNHBbypY4iC5lRKtg-gzGzoHsz',// LeanCloud appId
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
