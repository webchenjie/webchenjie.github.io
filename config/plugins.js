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
          src: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/25d21ccc-c75b-4942-b8e6-a2a64d38ab5b.png'
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
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/4c7a0c1f-770e-4813-a80c-099a0af51213.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/54479015-ded9-455f-965b-88f613ede1d6.png'
        },
        {
          name: '世界が终るまでは',
          artist: 'WANDS',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/bf730a74-421a-4914-97d5-5b76794662f4.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/60f33c28-e278-49b3-b98b-5bf88a54bed5.png'
        },
        {
          name: '我们的天空',
          artist: '黄艺明',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/6d2c896f-86ca-41a9-a79f-90d80a2b1fe0.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/b1761ee5-e69b-456d-b3a8-e47162c90f65.png'
        },
        {
          name: '嘲笑声',
          artist: 'Big Daddy',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/4e84734a-9014-4dc9-8e27-5829f8826824.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/c64a399e-f4bc-48dc-ad28-7bafbbb6068a.png'
        },
        {
          name: '雨爱',
          artist: '周星星',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/6c3442cb-8b65-452e-a3c1-d82a037c91ac.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/497444d0-1114-4efd-9e1f-4c7b7279f00b.png'
        },
        {
          name: '夏天的风',
          artist: '火羊瞌睡了',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/83688d39-4242-44dc-83d3-e0f1cdfb487c.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/7c9d21d0-aecf-4bec-bbf4-910c8f12f019.png'
        },
        {
          name: '夜空中最亮的星',
          artist: '戴羽彤',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/b556e45a-d6cd-4dcb-8bc7-05ee824e6604.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/16a386e2-a6ef-4175-b580-dbefceea72ec.png'
        },
        {
          name: '我的天空',
          artist: '南征北战NZBZ',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/356232af-15f7-41d9-aa07-e131f1a2cbc5.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/89115253-b811-43ae-971d-ff5d9bf546b6.png'
        },
        {
          name: '绽放',
          artist: '南征北战NZBZ',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/03b34d5a-34a8-43b7-b6ae-b5147cbcf619.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/5dff8118-0cff-41ce-af15-e7a84e67b9a6.png'
        },
        {
          name: '辞九门回忆',
          artist: '等什么君',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/61d6766b-c620-4b58-97a8-5bb4d3099a35.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/a577d8ca-b623-4214-b507-1b6e55c51157.png'
        },
        {
          name: '狂浪生',
          artist: '一棵小葱,李宗南',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/70800bd3-bc61-47fe-8281-f451e4b9cfb4.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/7c951891-2f27-4488-b9a6-be12e2405ab0.png'
        },
        {
          name: '盗墓笔记十年人间',
          artist: '李常超',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/157e4638-6b3e-46bb-8ff2-08d530325039.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/7d9a8b50-a39e-4b38-ac45-fd1f51108019.png'
        },
        {
          name: '盗将行',
          artist: '花粥,马雨阳',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/54b2ae06-9152-47ee-9131-d4f6866d84d5.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/fd89994c-a9b5-4beb-a34e-189b9f2094ca.png'
        },
        {
          name: '大天蓬',
          artist: '李袁杰',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/cf54f68e-697a-49ee-8ba6-d94552a528b4.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/e1c73b68-a31d-44d8-8bd9-a15a65646339.png'
        },
        {
          name: '天下',
          artist: '高鱼',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/b0ea4013-ce98-41e3-9eaa-37bca8aa11a2.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/11b5ffd4-438c-4d9b-988c-68c91d77b54e.png'
        },
        {
          name: '世间美好与你环环相扣',
          artist: '柏松',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/91ee5a79-892e-44f4-a98b-a8d767718d1c.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/edd23480-49da-422f-a8f6-1b95156a113b.png'
        },
        {
          name: '你是人间四月天',
          artist: '解忧邵帅',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/aa1b6466-67f5-424b-abcc-13e33bcded92.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/086fbaad-be5e-48ee-ba36-40b83c7943da.png'
        },
        {
          name: '写给黄淮',
          artist: '解忧邵帅',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/9202494f-4be2-4d63-bc57-0c20e4c9197c.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/d6ad0e89-71a8-4d5c-b090-0509aeac7732.png'
        },
        {
          name: '我的歌声里',
          artist: '神控',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/032ba028-3503-4ad0-82d3-5076edfc88dc.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/68f88b30-98f4-4916-9e13-9f3ee67b21b0.png'
        },
        {
          name: 'AvaMaxSweetButPsycho',
          artist: '迷人苏刚',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/7b95c914-195b-4dd7-9274-faa5963ab340.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/4adeecfe-e19b-4dc7-b566-bf6c3c103bbc.png'
        },
        {
          name: '如你一般的人',
          artist: '二狗村高富帅',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/f8b6d933-a338-4af0-ba63-eb4aa8952374.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/201c4c1d-41a4-4d3f-b5bd-b85928ec9c80.png'
        },
        {
          name: '7',
          artist: 'xmaswu',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/2fca8735-8327-4c4d-b99f-b6d478589c6a.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/dcd6a76f-3b94-4ae0-88cd-c1a73b03fecb.png'
        },
        {
          name: '一笑倾城',
          artist: 'CHENTU尘土',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/9c204d07-fb2c-4774-8a83-7d4eb7036d7d.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/785a5dc8-6de0-4997-9472-65ba806f3fe2.png'
        },
        {
          name: '与我无关',
          artist: '阿冗',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/c3f3ec87-2ab5-4a69-987c-13742ac1d286.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/5beb687e-2cca-4156-8a8e-5b0a9ac4b14c.png'
        },
        {
          name: '海底',
          artist: '一支榴莲',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/5664b35f-bc8e-40c6-90e2-c03ee25f8a0a.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/c1ebd9bc-0dc6-4448-9af1-60aec27f65ff.png'
        },
        {
          name: '丢了你',
          artist: '井胧',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/02e6a1de-b453-41fb-ac06-81e7c9525ee4.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/0a1a2e77-f24b-4533-8c55-59ce7e27ee7c.png'
        },
        {
          name: '你的姑娘',
          artist: '隔壁老樊',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/04f33dcf-ae47-4df9-b849-7bfaaca2956c.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/b81b372b-4c4a-48b5-932d-2898ebc0af0b.png'
        },
        {
          name: '冬眠',
          artist: '司南',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/d3fb1201-36ac-41cb-800d-e683e759e97d.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/3fd9b5af-d53e-4734-88b1-bd8fde5f2a7c.png'
        },

        {
          name: '意外',
          artist: '薛之谦',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/c6ff6eba-a753-42da-b2a1-ff82459c56cb.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/04d101b3-7f20-4e0d-a85d-ed0d48f3a695.png'
        },
        {
          name: '感谢你曾来过',
          artist: '周思涵,Ayo97',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/1330b3d5-6a3c-4d8b-898b-2b7d8f84ecf0.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/1bc909e7-054d-4cd9-8b16-aa4d0583c10c.png'
        },
        {
          name: '我不是你的宋冬野',
          artist: '我是张怡啊',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/a50719c9-62fb-429b-9ca1-d87d8b55816f.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/66b233f8-69d0-460c-a1e9-8e4c3679bd4e.png'
        },
        {
          name: '我很快乐',
          artist: '刘惜君',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/02386b3d-1e57-4cff-90b0-8807a77ebd9c.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/bba9325c-7996-4bf7-900a-5a75703b9822.png'
        },
        {
          name: '有何不可',
          artist: '许嵩',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/4cc7b8bb-f2d0-4646-92b0-3bab6f80d570.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/c27da834-54e8-4ee7-abf8-a1801bedd28c.png'
        },
        {
          name: '素颜',
          artist: '许嵩,何曼婷',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/ae2d2040-0cf7-4148-b8d0-1e41c24e4b8c.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/b47106c9-dfbb-4e17-975d-e990f0bc22ba.png'
        },
        {
          name: '爱情错觉',
          artist: '半吨兄弟',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/e5e0c6a6-4a10-47c8-b117-374561dde17a.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/b7257db1-08f5-43e5-ae85-dc6b6d66b503.png'
        },
        {
          name: '忘不掉的伤',
          artist: '新小新',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/4df250f7-cd79-4f40-b38c-f123bf8197f2.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/67af15e7-aca9-4bf8-9d7d-83076853040a.png'
        },
        {
          name: '秋殇别恋',
          artist: '秦Sir',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/93e693e8-b57d-4d6f-a209-dd0458f49d7e.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/216e5740-675e-48f7-9b9e-920adb77bd8e.png'
        },
        {
          name: '爱一点',
          artist: '浪子康',
          url: 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/ea18a9e2-10fd-4be6-871c-f6755c33649d.mp3',
          cover:
            'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-0649cea2-eb34-44bc-b1a4-315b89ff0f52/301dc814-d12a-4151-a055-c90b552d7490.png'
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
