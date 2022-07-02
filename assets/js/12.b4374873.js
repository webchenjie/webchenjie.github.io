(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{608:function(t,s,e){"use strict";e.r(s);var a=e(11),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"偶然的相遇-options-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#偶然的相遇-options-请求"}},[t._v("#")]),t._v(" 偶然的相遇——options 请求")]),t._v(" "),e("p",[t._v("最近写的项目，应用里所有的 ajax 请求都发送了 2 遍。由于新项目，基础模块是新搭的，所以出现一些奇葩问题也是意料之中，啊终于第一次在 chrome 的 devTools 遇见了活的 options 请求。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/blogs/%E6%8A%80%E6%9C%AF/20200714/1.png",alt:"HTTP"}})]),t._v(" "),e("h3",{attrs:{id:"第-1-次请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-1-次请求"}},[t._v("#")]),t._v(" 第 1 次请求")]),t._v(" "),e("p",[t._v("这里首先发送了一次额外的 options 请求，在浏览器里看到请求 request header 和 response header 的信息如下：")]),t._v(" "),e("h4",{attrs:{id:"预检请求头-request-header-的关键字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预检请求头-request-header-的关键字段"}},[t._v("#")]),t._v(" 预检请求头 request header 的关键字段：")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("Access-Control-Request-Method: 告诉服务器实际请求所使用的 HTTP 方法")]),t._v(" "),e("p",[t._v("Access-Control-Request-Headers: 告诉服务器实际请求所携带的自定义首部字段，本次实际请求首部字段中 content-type 为自定义")])]),e("p",[t._v("服务器基于从预检请求头部获得的信息来判断，是否接受接下来的实际请求。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/blogs/%E6%8A%80%E6%9C%AF/20200714/2.png",alt:"HTTP"}})]),t._v(" "),e("h4",{attrs:{id:"预检响应头-response-header-的关键字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#预检响应头-response-header-的关键字段"}},[t._v("#")]),t._v(" 预检响应头 response header 的关键字段：")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("Access-Control-Allow-Methods: 返回了服务端允许的请求，包含 GET/HEAD/PUT/PATCH/POST/DELETE")]),t._v(" "),e("p",[t._v("Access-Control-Allow-Credentials: 允许跨域携带 cookie（跨域请求要携带 cookie 必须设置为 true）")]),t._v(" "),e("p",[t._v("Access-Control-Allow-Origin: 允许跨域请求的域名，这个可以在服务端配置一些信任的域名白名单")]),t._v(" "),e("p",[t._v("Access-Control-Request-Headers: 客户端请求所携带的自定义首部字段 content-type")])]),e("p",[t._v("此次 OPTIONS 请求返回了响应头的内容，但没有返回响应实体 response body 内容。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/blogs/%E6%8A%80%E6%9C%AF/20200714/3.png",alt:"HTTP"}})]),t._v(" "),e("h3",{attrs:{id:"第-2-次请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#第-2-次请求"}},[t._v("#")]),t._v(" 第 2 次请求")]),t._v(" "),e("p",[t._v("这是本来要发送的请求，如图所示是普通的 post 请求。其中 Content-Type 的 application/json 是此次和后端约定的请求内容格式，这个也是后面讲到为什么会发送 options 请求的原因之一。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://6368-chenjie-blog-88b4b7-1302547066.tcb.qcloud.la/blogs/%E6%8A%80%E6%9C%AF/20200714/4.png",alt:"HTTP"}})]),t._v(" "),e("h2",{attrs:{id:"关于-options-请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于-options-请求"}},[t._v("#")]),t._v(" 关于 OPTIONS 请求")]),t._v(" "),e("p",[t._v("从很多资料我们可以了解到使用 OPTIONS 方法对服务器发起请求，可以检测服务器支持哪些 HTTP 方法。但是这次我们并没有主动去发起 OPTIONS 请求，那 OPTIONS 请求为何会自动发起？")]),t._v(" "),e("h3",{attrs:{id:"options-请求自动发起"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options-请求自动发起"}},[t._v("#")]),t._v(" OPTIONS 请求自动发起")]),t._v(" "),e("p",[t._v("MDN 的 CORS 一文中提到:")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("规范要求，对那些可能对服务器数据产生副作用的 HTTP 请求方法（特别是 GET 以外的 HTTP 请求，或者搭配某些 MIME 类型的 POST 请求），浏览器必须首先使用 OPTIONS 方法发起一个预检请求（preflight request），从而获知服务端是否允许该跨域请求。")])]),e("p",[t._v("所以这个跨域请求触发了浏览器自动发起 OPTIONS 请求，看看此次跨域请求具体触发了哪些条件。")]),t._v(" "),e("h3",{attrs:{id:"跨域请求时-options-请求触发条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求时-options-请求触发条件"}},[t._v("#")]),t._v(" 跨域请求时，OPTIONS 请求触发条件")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("ol",[e("li",[e("p",[t._v("使用了下面任一 HTTP 方法：")]),t._v(" "),e("p",[t._v("PUT/DELETE/CONNECT/OPTIONS/TRACE/PATCH")]),t._v(" "),e("p",[t._v("否，本次为 post 请求")])]),t._v(" "),e("li",[e("p",[t._v("人为设置了以下集合之外首部字段：")]),t._v(" "),e("p",[t._v("Accept/Accept-Language/Content-Language/Content-Type/DPR/Downlink/Save-Data/Viewport-Width/Width")]),t._v(" "),e("p",[t._v("否，未设置其他头部字段")])]),t._v(" "),e("li",[e("p",[t._v("Content-Type 的值不属于下列之一:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v("application/x-www-form-urlencoded、multipart/form-data、text/plain\n\n是，为application/json\n")])])]),e("p",[t._v(":::")])])]),t._v(" "),e("p",[t._v("由于修改了 Content-Type 为 application/json，触发了 CORS 预检请求。")]),t._v(" "),e("h2",{attrs:{id:"优化-options-请求-access-control-max-age-或者-避免触发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#优化-options-请求-access-control-max-age-或者-避免触发"}},[t._v("#")]),t._v(" 优化 OPTIONS 请求：Access-Control-Max-Age 或者 避免触发")]),t._v(" "),e("p",[t._v("可见一旦达到触发条件，跨域请求便会一直发送 2 次请求，这样增加的请求数是否可优化呢？答案是可以，OPTIONS 预检请求的结果可以被缓存。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("Access-Control-Max-Age 这个响应首部表示 preflight request （预检请求）的返回结果（即 Access-Control-Allow-Methods 和 Access-Control-Allow-Headers 提供的信息） 可以被缓存的最长时间，单位是秒。(MDN)")])])]),e("p",[t._v("如果值为 -1，则表示禁用缓存，每一次请求都需要提供预检请求，即用 OPTIONS 请求进行检测。\n评论区的朋友提醒了，尽量避免不要触发 OPTIONS 请求，上面例子中把 content-type 改掉是可以的。在其他场景，比如跨域并且业务有自定义请求头的话就很难避免了。现在使用的 axios 或者 superagent 等第三方 ajax 插件，如果出现 CORS 预检请求，可以看看默认配置或者二次封装是否规范。")]),t._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),e("p",[t._v("OPTIONS 请求即预检请求，可用于检测服务器允许的 http 方法。当发起跨域请求时，由于安全原因，触发一定条件时浏览器会在正式请求之前自动先发起 OPTIONS 请求，即 CORS 预检请求，服务器若接受该跨域请求，浏览器才继续发起正式请求。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"title"}),e("p",[t._v("作者：熊也抱抱 "),e("br"),t._v("\n链接：https://juejin.im/post/5cb3eedcf265da038f7734c4 "),e("br"),t._v("\n来源：掘金")])])])}),[],!1,null,null,null);s.default=o.exports}}]);