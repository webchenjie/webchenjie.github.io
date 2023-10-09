(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{475:function(v,_,l){"use strict";l.r(_);var i=l(2),t=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"直播流程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#直播流程"}},[v._v("#")]),v._v(" 直播流程")]),v._v(" "),_("ol",[_("li",[v._v("摄像头\n"),_("ol",[_("li",[v._v("PC 端采集")]),v._v(" "),_("li",[v._v("Android 端采集")]),v._v(" "),_("li",[v._v("IOS 端采集")])])]),v._v(" "),_("li",[v._v("视频编辑\n"),_("ol",[_("li",[v._v("H.264 （视频） / AAC （音频） 压缩编码")]),v._v(" "),_("li",[v._v("视频处理（字幕处理等）")]),v._v(" "),_("li",[v._v("推流（上传服务器）")]),v._v(" "),_("li",[v._v("CDN（地址）")])])]),v._v(" "),_("li",[v._v("播放器\n"),_("ol",[_("li",[v._v("PC 回放")]),v._v(" "),_("li",[v._v("Android 回放")]),v._v(" "),_("li",[v._v("IOS 回放")])])])]),v._v(" "),_("h2",{attrs:{id:"视频格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#视频格式"}},[v._v("#")]),v._v(" 视频格式")]),v._v(" "),_("ol",[_("li",[v._v("mp4\n"),_("ol",[_("li",[v._v("Chrome/Firfox/Safari")]),v._v(" "),_("li",[v._v("一般做点播")])])]),v._v(" "),_("li",[v._v("webm\n"),_("ol",[_("li",[v._v("Chrome/Firfox")]),v._v(" "),_("li",[v._v("流式的视频格式")]),v._v(" "),_("li",[v._v("一般做点播")])])]),v._v(" "),_("li",[v._v("hls 协议，即 m3u8 索引、ts 格式\n"),_("ol",[_("li",[v._v("Safari")]),v._v(" "),_("li",[v._v("一般做直播")]),v._v(" "),_("li",[v._v("在移动端浏览器上基本上都支持，而在 pc 端则需要通过下面的常用方案进行转码")])])]),v._v(" "),_("li",[v._v("flv\n"),_("ol",[_("li",[v._v("B 站使用")]),v._v(" "),_("li",[v._v("一般做直播")])])])]),v._v(" "),_("h2",{attrs:{id:"直播协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#直播协议"}},[v._v("#")]),v._v(" 直播协议")]),v._v(" "),_("ol",[_("li",[v._v("HLS 协议\n"),_("ol",[_("li",[v._v("对应视频格式是 m3u8 格式\n"),_("ol",[_("li",[v._v("包含了多了 ts 片段\n"),_("ol",[_("li",[v._v(".ts 片段中包含了 PAT、PMT 和多个 ts 文件\n"),_("ol",[_("li",[v._v("通过 PAT 找到 PMT，PMT 会返回哪个 ts 文件是视频哪个是音频")])])])])])])]),v._v(" "),_("li",[v._v("直播流程\n"),_("ol",[_("li",[v._v("video ——> m3u8 ——> 多个片段")]),v._v(" "),_("li",[v._v("浏览器会在片段结束前重新去请求 m3u8 文件，然后服务器会返回新的 m3u8 文件里面也是包含了多个片段，实现直播")])])]),v._v(" "),_("li",[v._v("缺点\n"),_("ol",[_("li",[v._v("会有延迟，原因在于分片数量即有几个 ts 文件")])])]),v._v(" "),_("li",[v._v("优点\n"),_("ol",[_("li",[v._v("简单、好用")])])]),v._v(" "),_("li",[v._v("HTTP 传输")])])]),v._v(" "),_("li",[v._v("RTMP 协议（不常用）\n"),_("ol",[_("li",[v._v("对应视频格式是 flv 格式")]),v._v(" "),_("li",[v._v("实时消息传输协议，基于 TCP，是一个协议族，包括 RTMP 基本协议及 RTMPT、RTMPS、RTMPE 等多种变种")]),v._v(" "),_("li",[v._v("RTMP 是一种设计用来进行实时数据通信的网络协议，主要用来在 Flash、AIR 平台和支持 RTMP 协议的流媒体/交互服务器之间进行音视频和数据通信")]),v._v(" "),_("li",[v._v("不是 HTTP 传输")])])]),v._v(" "),_("li",[v._v("HTTP-FLV 协议（RTMP 协议 升级版）\n"),_("ol",[_("li",[v._v("对应视频格式是 flv 格式")]),v._v(" "),_("li",[v._v("因为 HLS 协议会有延迟，原因在于 m3u8 文件中包含了多少个 ts 文件")]),v._v(" "),_("li",[v._v("相对 RTMP 协议的优势\n"),_("ol",[_("li",[v._v("可以在一定程度上避免防火墙的干扰")]),v._v(" "),_("li",[v._v("可以很好的兼容 HTTP 302 跳转，做到灵活调度")]),v._v(" "),_("li",[v._v("可以使用 HTTPS 做加密通道")]),v._v(" "),_("li",[v._v("很好的支持移动端（Android、IOS）")])])]),v._v(" "),_("li",[v._v("HTTP 传输")])])])]),v._v(" "),_("h2",{attrs:{id:"直播源制作"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#直播源制作"}},[v._v("#")]),v._v(" 直播源制作")]),v._v(" "),_("ol",[_("li",[v._v("ffmpeg")])]),v._v(" "),_("h2",{attrs:{id:"常用方案"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#常用方案"}},[v._v("#")]),v._v(" 常用方案")]),v._v(" "),_("ol",[_("li",[v._v("video.js （功能完整，插件丰富）")]),v._v(" "),_("li",[v._v("hls.js （小巧）")]),v._v(" "),_("li",[v._v("flv.js （国内）")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[v._v("作者：chenjie "),_("br"),v._v("\n链接：https://webchenjie.cn "),_("br"),v._v("\n来源：ChenJieBlog")])])])}),[],!1,null,null,null);_.default=t.exports}}]);