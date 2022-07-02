module.exports = [
  // 进度条
  ['@vuepress/nprogress'],
  // 弹框
  [
    '@vuepress-reco/vuepress-plugin-bulletin-popover',
    {
      title: '微信公众号',
      body: [
        {
          type: 'title',
          content: 'ChenJieBlog 🎉',
          style: 'text-aligin: center;'
        },
        {
          type: 'image',
          src: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/base/base-qrcode.png'
        }
      ]
    }
  ],
  // bgm
  [
    '@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [
        {
          name: '飘向北方',
          artist: '那吾克热-NW,尤长靖',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-飘向北方 - 那吾克热-NW,尤长靖.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-飘向北方.png'
        },
        {
          name: '世界が终るまでは',
          artist: 'WANDS',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-世界が终るまでは - WANDS.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-世界が终るまでは.png'
        },
        {
          name: '我们的天空',
          artist: '黄艺明',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我们的天空 - 黄艺明.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我们的天空.png'
        },
        {
          name: '嘲笑声',
          artist: 'Big Daddy',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-嘲笑声 - Big Daddy.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-嘲笑声.png'
        },
        {
          name: '雨爱',
          artist: '周星星',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-雨爱 - 周星星.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-雨爱.png'
        },
        {
          name: '夏天的风',
          artist: '火羊瞌睡了',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-夏天的风 - 火羊瞌睡了.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-夏天的风.png'
        },
        {
          name: '夜空中最亮的星',
          artist: '戴羽彤',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-夜空中最亮的星 - 戴羽彤.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-夜空中最亮的星.png'
        },
        {
          name: '我的天空',
          artist: '南征北战NZBZ',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我的天空 - 南征北战NZBZ.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我的天空.png'
        },
        {
          name: '绽放',
          artist: '南征北战NZBZ',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-绽放 - 南征北战NZBZ.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-绽放.png'
        },
        {
          name: '辞九门回忆',
          artist: '等什么君',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-辞九门回忆 - 等什么君.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-辞九门回忆.png'
        },
        {
          name: '狂浪生',
          artist: '一棵小葱,李宗南',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-狂浪生 - 一棵小葱,李宗南.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-狂浪生.png'
        },
        {
          name: '盗墓笔记十年人间',
          artist: '李常超',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-盗墓笔记十年人间 - 李常超.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-盗墓笔记十年人间.png'
        },
        {
          name: '盗将行',
          artist: '花粥,马雨阳',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-盗将行 - 花粥,马雨阳.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-盗将行.png'
        },
        {
          name: '大天蓬',
          artist: '李袁杰',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-大天蓬 - 李袁杰.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-大天蓬.png'
        },
        {
          name: '天下',
          artist: '高鱼',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-天下 - 高鱼.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-天下.png'
        },
        {
          name: '世间美好与你环环相扣',
          artist: '柏松',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-世间美好与你环环相扣 - 柏松.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-世间美好与你环环相扣.png'
        },
        {
          name: '你是人间四月天',
          artist: '解忧邵帅',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-你是人间四月天 - 解忧邵帅.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-你是人间四月天.png'
        },
        {
          name: '写给黄淮',
          artist: '解忧邵帅',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-写给黄淮 - 解忧邵帅.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-写给黄淮.png'
        },
        {
          name: '我的歌声里',
          artist: '神控',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我的歌声里 - 神控.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我的歌声里.png'
        },
        {
          name: 'AvaMaxSweetButPsycho',
          artist: '迷人苏刚',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-AvaMaxSweetButPsycho - 迷人苏刚.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-AvaMaxSweetButPsycho.png'
        },
        {
          name: '如你一般的人',
          artist: '二狗村高富帅',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-如你一般的人 - 二狗村高富帅.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-如你一般的人.png'
        },
        {
          name: '7',
          artist: 'xmaswu',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-7 - xmaswu.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-7.png'
        },
        {
          name: '一笑倾城',
          artist: 'CHENTU尘土',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-一笑倾城 - CHENTU尘土.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-一笑倾城.png'
        },
        {
          name: '与我无关',
          artist: '阿冗',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-与我无关 - 阿冗.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-与我无关.png'
        },
        {
          name: '海底',
          artist: '一支榴莲',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-海底 - 一支榴莲.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-海底.png'
        },
        {
          name: '丢了你',
          artist: '井胧',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-丢了你 - 井胧.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-丢了你.png'
        },
        {
          name: '你的姑娘',
          artist: '隔壁老樊',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-你的姑娘 - 隔壁老樊.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-你的姑娘.png'
        },
        {
          name: '冬眠',
          artist: '司南',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-冬眠 - 司南.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-冬眠.png'
        },

        {
          name: '意外',
          artist: '薛之谦',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-意外 - 薛之谦.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-意外.png'
        },
        {
          name: '感谢你曾来过',
          artist: '周思涵,Ayo97',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-感谢你曾来过 - 周思涵,Ayo97.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-感谢你曾来过.png'
        },
        {
          name: '我不是你的宋冬野',
          artist: '我是张怡啊',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我不是你的宋冬野 - 我是张怡啊.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我不是你的宋冬野.png'
        },
        {
          name: '我很快乐',
          artist: '刘惜君',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我很快乐 - 刘惜君.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-我很快乐.png'
        },
        {
          name: '有何不可',
          artist: '许嵩',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-有何不可 - 许嵩.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-有何不可.png'
        },
        {
          name: '素颜',
          artist: '许嵩,何曼婷',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-素颜 - 许嵩,何曼婷.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-素颜.png'
        },
        {
          name: '爱情错觉',
          artist: '半吨兄弟',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-爱情错觉 - 半吨兄弟.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-爱情错觉.png'
        },
        {
          name: '忘不掉的伤',
          artist: '新小新',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-忘不掉的伤 - 新小新.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-忘不掉的伤.png'
        },
        {
          name: '秋殇别恋',
          artist: '秦Sir',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-秋殇别恋 - 秦Sir.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-秋殇别恋.png'
        },
        {
          name: '爱一点',
          artist: '浪子康',
          url: 'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-爱一点 - 浪子康.mp3',
          cover:
            'https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/bgm/bgm-爱一点.png'
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
]
