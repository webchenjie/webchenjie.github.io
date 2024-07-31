(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{483:function(v,_,t){"use strict";t.r(_);var i=t(2),l=Object(i.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"知识总览"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#知识总览"}},[v._v("#")]),v._v(" 知识总览")]),v._v(" "),_("ol",[_("li",[v._v("编码基础知识\n"),_("ol",[_("li",[v._v("ASCLL 码")]),v._v(" "),_("li",[v._v("Unicode 和码点")]),v._v(" "),_("li",[v._v("utf-8/utf-16")]),v._v(" "),_("li",[v._v("进制转换")])])]),v._v(" "),_("li",[v._v("'' 字符")]),v._v(" "),_("li",[v._v("'' 八进制")]),v._v(" "),_("li",[v._v("'\\x' 两位十六进制")]),v._v(" "),_("li",[v._v("'\\u' 四位十六进制")]),v._v(" "),_("li",[v._v("'\\u{ 十六进制 }'")]),v._v(" "),_("li",[v._v("ES6 的模板字符串")]),v._v(" "),_("li",[v._v("实际的应用\n"),_("ol",[_("li",[v._v("匹配中文的正则")]),v._v(" "),_("li",[v._v("去掉空白字符")]),v._v(" "),_("li",[v._v("CSS content 属性和 CSS 字体图标")]),v._v(" "),_("li",[v._v("CSS 颜色色值")]),v._v(" "),_("li",[v._v("字符个数统计")]),v._v(" "),_("li",[v._v("文件类型识别")]),v._v(" "),_("li",[v._v("其他")])])]),v._v(" "),_("li",[v._v("base64 编码")]),v._v(" "),_("li",[v._v("百分比编码")])]),v._v(" "),_("h2",{attrs:{id:"ascll-码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#ascll-码"}},[v._v("#")]),v._v(" ASCLL 码")]),v._v(" "),_("ol",[_("li",[v._v("ASCLL 码占用一个字节，一个字节为 8 个 bit 位")]),v._v(" "),_("li",[v._v("ASCLL 码第一位始终是 0，那么实际可以表示的状态是 2^7 = 128 种字符")]),v._v(" "),_("li",[v._v("0 ~ 31 之间的 ASCLL 码常用于控制像打印机一样的外围设备")]),v._v(" "),_("li",[v._v("32 ~ 127 之间的 ASCLL 码表示的符号，在我们的键盘上都可以被找到")]),v._v(" "),_("li",[v._v("有一个扩展版的 ASCLL 码叫 EASCLL 码，指的是 128 ~ 255 部分")])]),v._v(" "),_("h2",{attrs:{id:"unicode"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#unicode"}},[v._v("#")]),v._v(" Unicode")]),v._v(" "),_("ol",[_("li",[v._v("Unicode 为世界上所有字符都分配了一个唯一的编号（码点），这个编号范围从 0x000000 到 0x10FFFFFF（十六进制），\n有 100 多万个（1114112），每个字符都有一个唯一的 Unicode 编码")]),v._v(" "),_("li",[v._v("Unicode 是字符集，为了兼容 ASCLL，Unicode 规定前 0 ~ 127 个字符和 ASCLL 一样，后面的 128 ~ 255 这部分是不一样的")])]),v._v(" "),_("h2",{attrs:{id:"utf-8-utf-16"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#utf-8-utf-16"}},[v._v("#")]),v._v(" utf-8/utf-16")]),v._v(" "),_("ol",[_("li",[v._v("utf-8 是一种变长的编码方案，使用 1~6 个字节来存储，码元是一个字节")]),v._v(" "),_("li",[v._v("utf-16 对应码点小于 0xFFFF（65535）的字符，使用 2 个字节存储，反之使用 4 个字节存储，码元是两个字节")]),v._v(" "),_("li",[v._v("utf-8 和 utf-16 均是 Unicode 字符编码的一种实现，Unicode 只规定了某个码点对应某个字符，\n但是没有规定在计算机中转为二进制时是如何存储的，而 utf-8 和 utf-16 就是定义了对应的字符如何存储")]),v._v(" "),_("li",[v._v("localStrage 存储的字符是基于 utf-16 编码，cookie 存储的字符是基于 utf-8 编码的")])]),v._v(" "),_("h2",{attrs:{id:"码点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#码点"}},[v._v("#")]),v._v(" 码点")]),v._v(" "),_("ol",[_("li",[v._v("某个字符规定对应的数值，我们经常称其为码点")]),v._v(" "),_("li",[v._v("可以通过字符串的实例方法 codePointAt 获取码点")]),v._v(" "),_("li",[v._v("String 的静态方法 fromCodePoint 用码点获取对应的字符")])]),v._v(" "),_("h2",{attrs:{id:"码元"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#码元"}},[v._v("#")]),v._v(" 码元")]),v._v(" "),_("ol",[_("li",[v._v("js 内部，字符以 utf-16 格式存储，码点范围介于 u+0000 ~ u+FFFF，是两个字节，unicode 码点大于 0xFFFF 的字符是四个字节")]),v._v(" "),_("li",[v._v("对应 utf-16 来说，一个码元是 16bit 即两个字节")]),v._v(" "),_("li",[v._v("对应 utf-32 来说，一个码元是 32bit 即四个字节")]),v._v(" "),_("li",[v._v("字符串的 length 属性返回的是码元")])]),v._v(" "),_("h2",{attrs:{id:"字符"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#字符"}},[v._v("#")]),v._v(" '/' 字符")]),v._v(" "),_("ol",[_("li",[v._v("'' 是一个特殊的存在，转义字符，大多数情况下，不产生什么作用，只对一些特殊的字符起作用\n如 '\\n' 是换行")])]),v._v(" "),_("h2",{attrs:{id:"八进制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#八进制"}},[v._v("#")]),v._v(" '/' 八进制")]),v._v(" "),_("ol",[_("li",[v._v("能表示的码点范围值为 0 ~ 255")]),v._v(" "),_("li",[v._v("有些码点的字符是不能被正常显示的，比如码点为 31 和 127 的字符，因为没有对应的字符\n在不同的浏览器下可能出现的效果不一样，在 chrome 中如果没有对应的字符会用 16 进制的形式展示\n如 '\\37' 会显示为 '\\x1F'，'\\177' 会显示为 '\\x7F'")])]),v._v(" "),_("h2",{attrs:{id:"x-两位十六进制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#x-两位十六进制"}},[v._v("#")]),v._v(" '\\x' 两位十六进制")]),v._v(" "),_("ol",[_("li",[v._v("0x 表示 16 进制的数字，所有 \\x 大家也很好理解，就是 16 进制")]),v._v(" "),_("li",[v._v("两位十六进制码点，0x00 ~ 0xFF 就是 0 ~ 255，如果没有对应的字符会直接显示其编码\n如 '\\x7e' 显示 '~'，'\\x7f' 没有对应的字符会显示 '\\x7F'")])]),v._v(" "),_("h2",{attrs:{id:"u-四位十六进制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#u-四位十六进制"}},[v._v("#")]),v._v(" '\\u' 四位十六进制")]),v._v(" "),_("ol",[_("li",[v._v("这里固定是 4 位，不满足会报错，码点范围是 0 ~ 65535")]),v._v(" "),_("li",[v._v("超过 4 位时，前面 4 位当做码点，后面的会直接追加，如 '\\u0061' 是 'a'，'\\u00610' 就是 'a0'")]),v._v(" "),_("li",[v._v("码点大于 0xFFFF，大于 4 位 16 进制的字符怎么表示，需要使用 \\u{ 十六进制 } 形式")])]),v._v(" "),_("h2",{attrs:{id:"u-十六进制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#u-十六进制"}},[v._v("#")]),v._v(" \\u{ 十六进制 }")]),v._v(" "),_("ol",[_("li",[v._v("ES6 新增的能力，码点范围是 0 ~ 0x10FFFF")]),v._v(" "),_("li",[v._v("如：'\\u{0061}' 表示 'a'，'\\u{9}' 表示 '\\t'")])]),v._v(" "),_("h2",{attrs:{id:"es6-模板字符串"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#es6-模板字符串"}},[v._v("#")]),v._v(" ES6 模板字符串")]),v._v(" "),_("ol",[_("li",[v._v("可以使用 \\u、\\u{}、\\x 格式")]),v._v(" "),_("li",[v._v("'' 八进制是不被允许的，实在要用的话，需要使用 ${''} 包裹一下\n如 "),_("code",[v._v("我\\141")]),v._v(" 这样会报错，需要用 "),_("code",[v._v("我 ${'\\141'}")])])]),v._v(" "),_("h2",{attrs:{id:"base64"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#base64"}},[v._v("#")]),v._v(" base64")]),v._v(" "),_("ol",[_("li",[v._v("base64 数据编码起源\n"),_("ol",[_("li",[v._v("早期邮件传输协议基于 ASCLL 文本，对于诸如图片、视频等二进制文件处理并不好，ASCLL 主要用于显示现代英文，到目前为止\n只定义了 128 个字符，包含控制字符和可显示字符，为了解决上述问题，base64 编码顺势而生")]),v._v(" "),_("li",[v._v("base64 是编解码，主要的作用不在于安全性，而在于让内容能在各个网关间无错的传输，这才是 base64 编码的核心作用")]),v._v(" "),_("li",[v._v("base64 图片 url 前面要加 "),_("code",[v._v("data:image/jpeg;base64,")]),v._v(" 后面跟具体的编码")])])]),v._v(" "),_("li",[v._v("64 就是 64 个字符的意思\n"),_("ol",[_("li",[v._v("A-Z，有 26 个")]),v._v(" "),_("li",[v._v("a-z，有 26 个")]),v._v(" "),_("li",[v._v("0-9，有 10 个")]),v._v(" "),_("li",[v._v("+/，有两个")]),v._v(" "),_("li",[v._v("当然还有一个字符 '=' 等于号，这个是填充字符，不属于 64 里面的范畴")])])]),v._v(" "),_("li",[v._v("优点\n"),_("ol",[_("li",[v._v("可以将二进制数据（比如图片）转化为可打印字符，方便传输数据")]),v._v(" "),_("li",[v._v("对数据进行简单的加密，肉眼是安全的")]),v._v(" "),_("li",[v._v("如果是在 html 或 css 处理图片，可以减少 http 请求")])])]),v._v(" "),_("li",[v._v("缺点\n"),_("ol",[_("li",[v._v("内容编码后体积变大，至少三分之一，因为是三字节变成四字节，当只有一个字节的时候，也至少会变成三个字节")]),v._v(" "),_("li",[v._v("编码和解码需要额外的工作量")])])])]),v._v(" "),_("h2",{attrs:{id:"百分比编码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#百分比编码"}},[v._v("#")]),v._v(" 百分比编码")]),v._v(" "),_("ol",[_("li",[v._v("百分比编码是一种拥有 8 位字符编码的编码机制，这些编码在 URL 的上下文中具有特定的函数")]),v._v(" "),_("li",[v._v("编码由英文字母替换组成：% 后跟替换字符的 ASCLL 的十六进制表示")]),v._v(" "),_("li",[v._v("它广泛的应用于统一资源标志符/统一资源定位符集（URI），其中包括 URL 和统一资源名（URN）\n它还用于 application/x-www-form-urlencodeed 媒体类型的数据，这通常用于在 http 请求中提交表单数据")]),v._v(" "),_("li",[v._v("对 unicode 字符进行编码时，如果超出了 ASCLL 码范围的字符，则会使用 utf-8 对其进行编码得到相应的字节\n然后对每个字节执行百分号编码")]),v._v(" "),_("li",[v._v("其他 API\n"),_("ol",[_("li",[v._v("escape 是基于类似 utf-16 编码的")]),v._v(" "),_("li",[v._v("encodeURI 和 encodeURIComponent 是基于 utf-8 编码的")])])])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"title"}),_("p",[v._v("作者：chenjie "),_("br"),v._v("\n链接：https://webchenjie.cn "),_("br"),v._v("\n来源：ChenJieBlog")])])])}),[],!1,null,null,null);_.default=l.exports}}]);