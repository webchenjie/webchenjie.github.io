module.exports = [
  // 进度条
  ['@vuepress/nprogress'],
  // 弹框
  ['@vuepress-yard/vuepress-plugin-window',
    {
      title: '微信公众号',
      contentInfo: {
        title: '小孑影视剪辑 🎉',
        needImg: true,
        imgUrl: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/3e1430b0-4856-11eb-8a36-ebb87efcf8c0.png'
      },
      bottomInfo: {
        btnText: ''
      }
    }
  ],
  // bgm
  ['@vuepress-reco/vuepress-plugin-bgm-player',
    {
      audios: [{
          name: '雨爱',
          artist: '周星星',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d6f88290-4856-11eb-bd01-97bc1429a9ff.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d7b60630-4856-11eb-bdc1-8bd33eb6adaa.png'
        },
        {
          name: '夏天的风',
          artist: '火羊瞌睡了',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/cd8d7800-4856-11eb-bdc1-8bd33eb6adaa.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/ce41d3e0-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '夜空中最亮的星',
          artist: '戴羽彤',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d03f0370-4856-11eb-8ff1-d5dcf8779628.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d0f13c70-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '我的天空',
          artist: '南征北战NZBZ',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c98b9ed0-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/ca38cec0-4856-11eb-97b7-0dc4655d6e68.png'
        },
        {
          name: '绽放',
          artist: '南征北战NZBZ',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d8570120-4856-11eb-bd01-97bc1429a9ff.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d90c4760-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '辞九门回忆',
          artist: '等什么君',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/abd1e8e0-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/ac829b40-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '狂浪生',
          artist: '一棵小葱,李宗南',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b77d94a0-4856-11eb-97b7-0dc4655d6e68.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b82d5ca0-4856-11eb-8ff1-d5dcf8779628.png'
        },
        {
          name: '盗墓笔记十年人间',
          artist: '李常超',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b02df000-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b0f3ff20-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '盗将行',
          artist: '花粥,马雨阳',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/aea81350-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/af72dd60-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '大天蓬',
          artist: '李袁杰',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/ad343800-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/adf87260-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '天下',
          artist: '高鱼',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c3fb0f50-4856-11eb-b680-7980c8a877b8.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c4b8e110-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '世间美好与你环环相扣',
          artist: '柏松',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/bfde3410-4856-11eb-b680-7980c8a877b8.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c083e9f0-4856-11eb-bd01-97bc1429a9ff.png'
        },
        {
          name: '你是人间四月天',
          artist: '解忧邵帅',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/ba5dd130-4856-11eb-b997-9918a5dda011.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/bb1428e0-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '写给黄淮',
          artist: '解忧邵帅',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/cef1c2f0-4856-11eb-bdc1-8bd33eb6adaa.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/cf9d4530-4856-11eb-bdc1-8bd33eb6adaa.png'
        },
        {
          name: '世界が终るまでは',
          artist: 'WANDS',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c13d9d00-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c1db63a0-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '我的歌声里',
          artist: '神控',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c8322950-4856-11eb-bdc1-8bd33eb6adaa.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c8e15510-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: 'AvaMaxSweetButPsycho',
          artist: '迷人苏刚',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/a6184d90-4856-11eb-8a36-ebb87efcf8c0.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/a6d7f410-4856-11eb-b680-7980c8a877b8.png'
        },
        {
          name: '如你一般的人',
          artist: '二狗村高富帅',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/be763fa0-4856-11eb-bd01-97bc1429a9ff.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/bf1fed20-4856-11eb-a16f-5b3e54966275.png'
        }, {
          name: '忘不掉的伤',
          artist: '新小新',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c561a430-4856-11eb-8a36-ebb87efcf8c0.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c6114520-4856-11eb-b680-7980c8a877b8.png'
        },
        {
          name: '秋殇别恋',
          artist: '秦Sir',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/bd121bc0-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/bdbe1330-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '爱一点',
          artist: '浪子康',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/a8fcf6f0-4856-11eb-8a36-ebb87efcf8c0.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/a9a1c270-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '7',
          artist: 'xmaswu',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/a48fb1c0-4856-11eb-bd01-97bc1429a9ff.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/a5487a70-4856-11eb-b680-7980c8a877b8.png'
        },
        {
          name: '一笑倾城',
          artist: 'CHENTU尘土',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d1a12b80-4856-11eb-8ff1-d5dcf8779628.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d24533b0-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '与我无关',
          artist: '阿冗',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d5a3c800-4856-11eb-8ff1-d5dcf8779628.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d650a9d0-4856-11eb-8ff1-d5dcf8779628.png'
        },
        {
          name: '海底',
          artist: '一支榴莲',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b61fd960-4856-11eb-8ff1-d5dcf8779628.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b6ccbb30-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '丢了你',
          artist: '井胧',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b1aaa4f0-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b29c09d0-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '你的姑娘',
          artist: '隔壁老樊',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b8e5d730-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b9a04d90-4856-11eb-97b7-0dc4655d6e68.png'
        },
        {
          name: '冬眠',
          artist: '司南',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b3540f30-4856-11eb-97b7-0dc4655d6e68.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b407ced0-4856-11eb-97b7-0dc4655d6e68.png'
        },
        {
          name: '嘲笑声',
          artist: 'Big Daddy',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/aa533820-4856-11eb-8a36-ebb87efcf8c0.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/ab1b1c00-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '飘向北方',
          artist: '那吾克热-NW,尤长靖',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/bbc2df70-4856-11eb-b997-9918a5dda011.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/bc6205a0-4856-11eb-a16f-5b3e54966275.png'
        },
        {
          name: '意外',
          artist: '薛之谦',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d2eb85d0-4856-11eb-8ff1-d5dcf8779628.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d397a450-4856-11eb-8ff1-d5dcf8779628.png'
        },
        {
          name: '感谢你曾来过',
          artist: '周思涵,Ayo97',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b4b59b00-4856-11eb-8ff1-d5dcf8779628.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/b55eac40-4856-11eb-97b7-0dc4655d6e68.png'
        },
        {
          name: '我不是你的宋冬野',
          artist: '我是张怡啊',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c6dbc110-4856-11eb-8a36-ebb87efcf8c0.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c77da660-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '我们的天空',
          artist: '黄艺明',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/cc3b0760-4856-11eb-97b7-0dc4655d6e68.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/cce61470-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '我很快乐',
          artist: '刘惜君',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/caeb07c0-4856-11eb-a16f-5b3e54966275.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/cb98fb00-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '有何不可',
          artist: '许嵩',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d44e7130-4856-11eb-8ff1-d5dcf8779628.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/d4f586a0-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '素颜',
          artist: '许嵩,何曼婷',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c28ab670-4856-11eb-b680-7980c8a877b8.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/c33d1680-4856-11eb-8a36-ebb87efcf8c0.png'
        },
        {
          name: '爱情错觉',
          artist: '半吨兄弟',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/a79bb940-4856-11eb-8a36-ebb87efcf8c0.mp3',
          cover: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-umybkfmeehmg0383ca/a849faa0-4856-11eb-bd01-97bc1429a9ff.png'
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