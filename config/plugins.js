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
          src: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/85f3a5d5-80ab-4aee-9ba3-e7a9d93e59d3.png'
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
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/4c6d0f84-611d-4a5c-b8f1-b57001bc4fad.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/068acfcf-549c-43c4-b2ae-619128c3a1a5.png'
        },
        {
          name: '世界が终るまでは',
          artist: 'WANDS',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/2844cf18-8dbf-42fc-8300-65c7ff2cdf2c.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/19845afe-634c-4aa1-a8a6-4369281abadf.png'
        },
        {
          name: '我们的天空',
          artist: '黄艺明',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/a275db98-4799-4629-aa1d-0f2d250d296a.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9e75f15d-2f8e-4993-8f64-bcb5065ffde7.png'
        },
        {
          name: '嘲笑声',
          artist: 'Big Daddy',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/a2e2f78d-4730-487f-a13f-0636824271a8.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/39e66c1c-5708-43e9-8af9-4c610d540c7f.png'
        },
        {
          name: '雨爱',
          artist: '周星星',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9fbfc3e0-562a-4213-8277-795779602d79.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/d1b62f5e-8698-4000-907a-fa12897afd03.png'
        },
        {
          name: '夏天的风',
          artist: '火羊瞌睡了',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9ba2c8f5-6b43-482c-85e1-5bfd14c43918.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/2d8cb643-d31d-438d-9dbe-1e36305f2a95.png'
        },
        {
          name: '夜空中最亮的星',
          artist: '戴羽彤',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/8e7dfdf1-8fa2-4768-aae3-83c040ebd9f3.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/2cad513c-ff12-4c98-b870-9df5b5db92e4.png'
        },
        {
          name: '我的天空',
          artist: '南征北战NZBZ',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/8745b2ec-ad4d-4fae-9dc1-20fb6c9a1247.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/a14b48f3-7e8f-40be-81f0-2b399a456755.png'
        },
        {
          name: '绽放',
          artist: '南征北战NZBZ',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/d1338370-68e7-4415-86bf-7d9eb97b1718.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/60525210-636d-4a17-a40b-d9dfb8ca38ab.png'
        },
        {
          name: '辞九门回忆',
          artist: '等什么君',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/61b64904-3153-41cb-bd8e-fabc5fee1c20.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/abe01d7f-741a-4420-8f82-f181aa5d5896.png'
        },
        {
          name: '狂浪生',
          artist: '一棵小葱,李宗南',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/e67a4c98-accd-46bf-8fbb-15fd4748c07b.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/475f8c13-3485-4c2c-8575-8eba66981023.png'
        },
        {
          name: '盗墓笔记十年人间',
          artist: '李常超',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/4ebb1c9c-b60d-4cee-b1f0-440cadf41da0.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9b2674b8-9cd2-481b-b38c-fb31752d5469.png'
        },
        {
          name: '盗将行',
          artist: '花粥,马雨阳',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/42d15749-d6c8-4f83-bf1f-cc6f3d2faa6f.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/84aab86b-adde-4484-9805-6a21378c9747.png'
        },
        {
          name: '大天蓬',
          artist: '李袁杰',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/286120a7-93ae-4df1-9e28-921e8f0497a7.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/97725541-2c84-40d8-b2a0-14a582fbeac9.png'
        },
        {
          name: '天下',
          artist: '高鱼',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/e7a73c8b-cb06-44fc-9718-047c2ddac49d.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9f6b88cc-727a-42a6-a892-88b9cfd80734.png'
        },
        {
          name: '世间美好与你环环相扣',
          artist: '柏松',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/bcf2fe51-69c8-4d4b-971c-b898550835fa.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/fd1848f3-3e96-4ba5-9386-b0666f885398.png'
        },
        {
          name: '你是人间四月天',
          artist: '解忧邵帅',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/31a069cf-a56b-4e26-9f8c-461a38013576.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/1ee299a7-616d-4562-8bbd-678f0ac3be50.png'
        },
        {
          name: '写给黄淮',
          artist: '解忧邵帅',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/538e5364-8572-4888-bdab-0eb8f1e70583.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/cd55e9b8-10df-47b4-968d-ea60e3ebf4d7.png'
        },
        {
          name: '我的歌声里',
          artist: '神控',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/bc8fb51d-1352-4be4-9e6f-0f64f0f19013.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/70c1c45f-c37f-4f3f-8d1b-9be21961e649.png'
        },
        {
          name: 'AvaMaxSweetButPsycho',
          artist: '迷人苏刚',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/951b8ebd-6523-4308-8031-0fba15fae69e.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/349a4db2-53c4-4a03-a6ef-af3d9f5cf62d.png'
        },
        {
          name: '如你一般的人',
          artist: '二狗村高富帅',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/b909f4de-eda8-4864-8c03-0331479759b1.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/6e7c5387-bec8-417e-8c97-f64e250f76e7.png'
        },
        {
          name: '7',
          artist: 'xmaswu',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9f9ae4f2-f80d-4616-9ef3-69c7ce02dcff.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/f139de25-e4a3-4286-a521-0280e66c7819.png'
        },
        {
          name: '一笑倾城',
          artist: 'CHENTU尘土',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/02c9e17b-74ad-4dd8-b1a0-a1d8051735c0.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/3a0e44ba-9d5d-4baf-8a79-ebe591c43e54.png'
        },
        {
          name: '与我无关',
          artist: '阿冗',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/d88c7895-6709-440b-ad37-5e1d04c6e04c.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9767ce9c-5339-4b4e-9465-6e7fa5f6a929.png'
        },
        {
          name: '海底',
          artist: '一支榴莲',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/44c214a4-1a80-4438-83bf-950e775697cd.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/39619664-fd82-4a58-84f2-13bca16d66ae.png'
        },
        {
          name: '丢了你',
          artist: '井胧',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/75c7ccd1-44f0-40d9-b4ab-f56814e23139.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/67f65bb5-a4c5-4c79-a6df-c5e079c48f43.png'
        },
        {
          name: '你的姑娘',
          artist: '隔壁老樊',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/7094f6a2-192e-4f23-83cc-6860ea843bd6.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9d5f348c-4d89-454b-99f1-8d0378d3b7de.png'
        },
        {
          name: '冬眠',
          artist: '司南',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/ac3461e8-fa96-4e6a-b3d1-d753756e66e6.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/f754df24-eac0-47a0-8059-e363ba7d68cd.png'
        },

        {
          name: '意外',
          artist: '薛之谦',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/ed24d1be-c96b-4e7d-b94e-881e945dc2c7.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/5e589da2-8fd4-4ff4-81e0-bdd7989e36eb.png'
        },
        {
          name: '感谢你曾来过',
          artist: '周思涵,Ayo97',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/90b3fa42-7ac7-49bf-b8c9-26737018a922.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/f950e004-233a-46f5-816a-58eddab25c4a.png'
        },
        {
          name: '我不是你的宋冬野',
          artist: '我是张怡啊',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/3f7dfd77-a3c9-4cfd-98a8-62c4ccb49b42.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/a67f8504-638d-474c-b88c-c2f23e1475f5.png'
        },
        {
          name: '我很快乐',
          artist: '刘惜君',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/9f13c3c5-dfda-4d5e-b776-5bffd79e4125.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/0bd58aea-3f3c-42be-be53-5d02de09170e.png'
        },
        {
          name: '有何不可',
          artist: '许嵩',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/60b50272-649d-4636-b3b4-ff28f28175f4.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/2f0a33aa-9ef3-47f7-aa9d-d89ec7379e10.png'
        },
        {
          name: '素颜',
          artist: '许嵩,何曼婷',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/c455723b-2249-4498-bf9f-a2421522b9e8.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/6035ac32-5c5a-4248-b203-d23dc45ab803.png'
        },
        {
          name: '爱情错觉',
          artist: '半吨兄弟',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/a9a81b64-af8b-424c-9ff1-14217d921a2d.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/c8ad3c3c-4919-4ce8-8bfe-abca5d581f47.png'
        },
        {
          name: '忘不掉的伤',
          artist: '新小新',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/97a5644b-5f93-49b3-b52d-599a18ac3e6d.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/ebcdf046-16f8-4f59-80ae-739cdc20178d.png'
        },
        {
          name: '秋殇别恋',
          artist: '秦Sir',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/96be51d7-e34a-45d6-9e0d-cde22ea96c61.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/e3a5eb11-e98c-4173-8b39-abebd3c93f55.png'
        },
        {
          name: '爱一点',
          artist: '浪子康',
          url: 'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/c857fca8-1e17-4925-a53e-8d030d197be0.mp3',
          cover:
            'https://mp-bb37bf33-58d5-448f-bdac-3f38f7f72de0.cdn.bspapp.com/cloudstorage/6eb40ce9-5878-4c9e-b00d-5948e9dd5442.png'
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
