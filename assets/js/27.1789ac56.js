(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{623:function(r,e,t){"use strict";t.r(e);var n=t(11),a=Object(n.a)({},(function(){var r=this,e=r.$createElement,t=r._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[r._v("#")]),r._v(" 前言")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v('之前碰到一个问题，就是html中通过img标签引入一个图片地址，报403。但是这个图片地址直接复制出来在地址栏打开，却是看得到的。\n先说下解决方法： 在HTML代码的head中添加一句<meta name="referrer" content="no-referrer" />即可，后面再说下原理\n')])])]),t("h2",{attrs:{id:"http-请求中的-referrer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http-请求中的-referrer"}},[r._v("#")]),r._v(" http 请求中的 referrer")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("1. http请求体的header中有一个referrer字段，用来表示发起http请求的源地址信息，这个referrer信息是可以省略但是不可修改的\n   就是说你只能设置是否带上这个referrer信息，不能定制referrer里面的值\n2. 服务器端在拿到这个referrer值后就可以进行相关的处理，比如图片资源，可以通过referrer值判断请求是否来自本站\n   若不是则返回403或者重定向返回其他信息，从而实现图片的防盗链。上面出现403就是因为，请求的是别人服务器上的资源\n   但把自己的referrer信息带过去了，被对方服务器拦截返回了403\n3. 在前端可以通过meta来设置referrer policy(来源策略)，具体可以设置哪些值以及对应的结果参考MDN。所以针对上面的403情况的解决方法\n   就是把referrer设置成no-referrer，这样发送请求不会带上referrer信息，对方服务器也就无法拦截了\n4. 浏览器中referrer默认的值是no-referrer-when-downgrade，就是除了降级请求的情况以外都会带上referrer信息\n   降级请求是指https协议的地址去请求http协议，所以上面403的情况还有另一种解决方法就是，请求的图片地址换成http协议\n   自己的地址使用http协议，这样降级请求也不会带上referrer\n")])])]),t("h2",{attrs:{id:"nginx-配置图片防盗链"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置图片防盗链"}},[r._v("#")]),r._v(" nginx 配置图片防盗链")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("1. 最后再说一下这种根据referrer拦截，在服务器如何配置。我自己服务器用的nginx，这里就说下nginx的配置\n   首先打开nginx的配置文件:conf/nginx.conf，在server下面添加如下:\n    location ~* \\.(gif|jpg|png|jpeg)$ {\n      valid_referers none  valid.url.com;\n      if ($invalid_referer) {\n        return 403;\n      }\n    }\n2. 首先第一句以文件格式后缀匹配出图片资源路径，然后通过valid_referers添加合法的referer地址，加上none\n   表示没有传referer也是合法的，最后referer不合法的情况返回403\n   如果想跳其他地址或返回其他图片资源可以这样：rewrite xxx.xxx.com/xxx.jpg\n")])])]),t("h2",{attrs:{id:"orgin"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#orgin"}},[r._v("#")]),r._v(" orgin")]),r._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[r._v("http头部中还有一个与referrer类似的叫orgin的字段，在发送跨域请求或预检请求(preflight request)时会带上这个参数\n它用来表示发起请求的服务器地址，这个参数是必定会传的，然后服务器端用此字段来判断是否允许跨域。\n")])])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"title"}),t("p",[r._v("作者：ITgecko "),t("br"),r._v("\n链接：https://www.jianshu.com/p/56df73d0d128 "),t("br"),r._v("\n来源：简书")])])])}),[],!1,null,null,null);e.default=a.exports}}]);