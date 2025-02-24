---
title: JavaScript-BOM
date: 2020-07-04
tags:
    - JavaScript
categories:
    - 技术
publish: false
---

```js
// BOM是什么
1. BOM(Browser Object Model)是浏览器对象模型
----------------------------------------------------------------------------------------------
// 全局对象
1. 在浏览器中是 window === self
  window.setTimeout()
  self.setTimeout()
2. 在 node 中的全局变量是 global
3. 在新版的 ES 中新增了全局变量 globalThis
  1. 如果当前环境是浏览器则 globalThis === window === self
  2. 如果当前环境是 Node 则 globalThis === global
  3. 不需要再通过函数去判断当前环境和全局对象，直接使用 globalThis
----------------------------------------------------------------------------------------------
// windown 是什么
1. 一个包含 DOM 文档的窗口，表示浏览器窗口以及页面可见区域
2. 是一个全局对象，全局变量和函数均是它的属性
3. 是一个全局变量
----------------------------------------------------------------------------------------------
// window
1. 所有全局变量和全局方法都归在window上
2. window.alert('text') // 警告框
3. window.confirm('text') // 对话框,点确定返回true,点取消返回false
4. window.prompt('text', 'defaultText') // 输入框,点确定返回输入的字段,点取消返回null
5. window.close() // 关闭窗口
  1. 只有通过脚本打开的窗口，才可以调用 window.close 进行关闭
// 参数赋值用等于号,参数有width、height、left、top、toolbar(是否显示浏览器工具栏)、menbar(是否显示菜单栏)
// scroll(是否显示滚动条)、location(是否显示地址字段)、status(是否添加状态栏)
6. window.open(url, name, 参数)
  1. 会返回打开的窗口引用，如果是同源，可以直接调用其窗体的方法
7. window.isSecureContext
  1. 是一个布尔值，标识当前上下文是否安全，安全是 true，不安全是 false
  2. 常见于网页是不是 https 协议
  3. 浏览器有一些特性或功能仅仅限于在安全的上下文中执行
  4. 127.0.0.1/localhost/file协议，这些是例外
8. screenX/screenY，表示浏览器左/上距离屏幕的距离
9. innerWidth/innerHeight，表示可视化区域的宽高，即 documnet 内容
10. outerWidth/outerHeight，表示窗口的外层的宽高，即整个浏览器的宽高
11. iframe 嵌套
  1. self === window
  2. this 在全局上下文或全局作用域下 === window
  3. parent 是父窗口
  4. top 是顶级窗口，最外层窗口
12. 如果判断当前窗口可见性，即是展示状态
  1. window 上监听 focus + blur 事件进行判断
  2. document.hidden，返回布尔值
  3. document.visibilityState
    1. 返回 document 的可见性，由此可以知道当前页面是在背后，或是不可见的隐藏的标签页，或者是正在预渲染
    2. 可用的值：visible、hidden、prerender
  4. document 监听 visibilitychange 事件
12. window.devicePixelRatio
  1. 返回当前显示设备的物理像素分辨率与 CSS 像素分辨率之比
  2. 物理像素：设备能控制显示的最小单位，是设备屏幕上的像素点个数
  3. 逻辑像素：又称为设备独立像素，屏幕上的物理像素和逻辑像素，并不是相等，一般是物理像素大于逻辑像素，其比值就是 devicePixelRatio
13. 滚动相关
  1. window.scroll/el.scroll，滚动到指定的位置
  2. window.scrollTo/el.scrollTo，滚动到指定的位置
  3. window.scrollBy/el.scrollBy，滚动到指定的偏移量
  4. el.scrollInfoView，滚动到可视区
  5. 设置 scrollTop、scrollLeft 等
  6. 设置锚点
14. windows.matchMedia
    1. 可用于判断 document 是否匹配媒体查询，会返回一个对象，在对象上进行监听 chage 事件，就能够知道当前是否匹配
    2. 示例
      let mql = window.matchMedia('(min-width: 600px)')
      console.log(mql.matches)
      mql.addEventListener('change', function() {
        mql = window.matchMedia('(min-width: 600px)')
        console.log(mql.matches)
      })
15. window.getSelection
  1. 表示用户选择的文本范围或光标的当前位置
  2. 可使用 document.activeElement 来返回当前的焦点元素
  3. 另一个等价的方法是 document.getSelection
16. window.frameElement
  1. 返回当前 window 中的 iframe 的引用，如果没有则返回 null
17. 网络状态
  1. navigator.onLine，返回布尔值，表示是否在线
  2. window.onoffline/window.ononline，可监听这两个事件进行判断
18. window.print
  1. 打开打印对话框打印当前文档
  2. 如何设置打印的样式
    1. 媒体查询
      @media print {
        .box {
          color: red;
        }
      }
    2. style 标签
      <style media="print">
        .box {
          color: red;
        }
      </style>
    3. link 标签
      <link rel="stylesheet" href="./print.css" media="print"></link>
    4. @import
      @import url('print.css') print;
----------------------------------------------------------------------------------------------
// 多个窗口如何交互？
1. WebSocket
  1. 缺点
    1. 需要引入服务端
2. 定时器 + 客户端存储
  1. 本地存储
    1. cookie
    2. localStorage/sessionStorage
    3. indexDB
    4. chore 的 FileSystem
  2. 缺点
    1. cookie 会增加网络负担，FileSystem 数据需要清理
    2. 不够及时
    3. 有跨域限制
3. postMessage
  1. 用某种手段建立窗口间的联系，通过 postMessage 进行跨窗体通信，然后在 window 上监听 message 事件
  2. 没有跨域限制
  3. 缺点
    1. 需要拿到对应窗口的引用
4. sessionStorage/localStorage 的 StorageEvent
  1. 当前页面使用的 storage 被其他页面修改时会触发 StorageEvent，在 window 上监听 storage 事件
  2. 缺点
    1. 传递的数据大小有限制
    2. 可能需要进行清理工作
    3. 有跨域限制
    4. 同窗口不能监听，只有一个页面时不会生效
5. Broadcast Channel
  1. 允许同源的不同浏览器窗口、tab 页、iframe 下的不同文档之间相互通信
  2. 和 postMessage 有点类似
  2. 缺点
    1. 有跨域限制
6. MessageChannel
  1. 允许我们创建一个新的消息通道，并通过它的两个 MessagePort 属性发送数据
  2. 需要先建立联系
  3. 和 postMessage 类似
7. SharedWorker
  1. 这是 Web Worker 之后出来的共享的 Worker，不同页面可以共享这个 Worker
  2. 缺点
    1. 兼容性
    2. 有跨域限制
----------------------------------------------------------------------------------------------
// 定时器
1. 超时调用: setTimeout(函数, 等待的时间)
2. 清除超时调用: clearTimeout(timer)
var timer = setTimeout(function() {}, 1000)
clearTimeout(timer)
3. 间歇调用: setInterval(函数, 间歇的时间)
4. 清除间歇调用: clearInterval(timer)
var timer = setInterval(function() {}, 1000)
clearInterval(timer)
5. setInterval 累计效应
  1. 定时器代码执行之间的间隔可能比你预期的要小
  2. 定时器某些间隔会被跳过，因为如果存在 setInterval 未被执行则下一个 setInterval 不会被加入队列
6. setTimeout 最低延迟
  1. 以 chrome 为例，最低延迟 1ms，如果延迟时间大于 31次方-1，则默认为 1ms
  2. setTimeout 嵌套多层时（5层），最小延迟 4ms
7. requestAnimationFrame 在事件循环中的执行时机
  1. 事件循环步骤：1个宏任务 ==> 所有微任务 ==> 是否需要渲染 ==> 渲染 UI
  2. 在事件循环中，requestAnimationFrame 是在渲染 UI 中执行的
8. requestAnimationFrame
  1. 优点
    1. dom 操作与浏览器刷新频率保持一致，保障动画流畅
    2. 在隐藏或不可见的元素中，requestAnimationFrame 将不进行重绘和回流，节省CPU/GPU
    3. 页面不是激活状态，动画会自动暂停，节省CPU开销
  2. 注意：如果事件循环有任务耗时特别长，requestAnimationFrame 的动画效果会大打折扣
9. requestIdleCallback：将在浏览器的空闲时段调用函数排队
  1. 空闲时间的计算
    1. 存在连续渲染的两帧，空闲时间就是帧的频率减去执行任务的时间（宏任务、微任务），减去绘制的时间
    2. 当一段时间没有绘制或任务发生，空闲时间将会尽可能变大，但不会超过 50ms
  2. 如何使用
    1. 低优先级的任务使用空闲回调
    2. 空闲回调尽量不超过可分配的时间，回调的参数会返回可分配时间
    3. 由于该回调是在 render 之后，尽量避免在回调中改变 DOM
    4. 避免运行时间无法预测的任务
----------------------------------------------------------------------------------------------
// location: 地址栏的url
1. location.href // 返回当前加载页面的完整url，赋值时会产生新的历史记录
2. location.hash // 返回url中hash(#号)锚点,如果没有则返回空字符串,可获取可设置
  1. 可以通过 hashchange 事件监听 hash 变化
3. location.host // 返回服务器名称和端口号
4. location.hostname // 返回不带端口号的服务器名称(主机名/域名/IP)
5. location.pathname // 返回url中的目录和文件名
6. location.port // 返回url中指定的端口号,如果没有则返回空字符串
7. location.protocol // 返回页面使用的协议(本地为file)
8. location.search // 返回url的查询字符串,以问号开头
9. location.replace(url) // 重新定向url(跳转),不会再历史记录中生成新记录，会产生新的历史记录
10. location.reload() // 重新加载当前显示的页面,无参是从缓存中加载,传入true从服务器重新加载
11. 解析 url 参数
  const search = location.search
  const p = new URLSearchParams(search)
  p.get(key) // 获取对应的 url 参数
12. location.origin 属性是只读的，存在兼容问题
13. 除了 hash 以外，其他任意属性修改都会以新的 URL 重新加载，然后生成一个新的历史记录
14. 修改 pathname 不用传开头的 '/' 参数，修改 search 不用传 '?' 参数，修改 hash 不用传 '#' 参数
15. location === window.location === document.location === window.document.location
16. location.assign() // 会产生新的历史记录
17. location.href 和 location.open
  1. href 是用新的域名页调换当前页，不会打开新窗口
  2. open 用来打开新窗口或者查找已命名的窗口，打开新窗口可能会被浏览器拦截
----------------------------------------------------------------------------------------------
// URL 对象
cosnt url = new URL('https://webchenjie.cn')
1. url 上有和 location 上类似的属性
2. URL.createObjectURL() // 创建一个唯一的 blob 链接
  1. 在动态创建 js 脚本时可以使用
  2. 创建 js 脚本可以通过 new Function 和 eval 两种方式，但是这两种如果浏览器开启了 CSP，禁用不安全的脚本后，就无法使用
     此时可以使用此方法创建一个 blob url 链接，然后动态创建一个 script 标签，赋值给 src，挂载到 body 上
3. URL.revokeObjectURL() // 销毁 createObjectURL 创建的实例
4. URL.searchParams() // 解析 url 参数
----------------------------------------------------------------------------------------------
// history: 用户操作的历史记录，本质上是一个栈，最多 50 个左右，超出时最前面会删掉
1. history.back() // 返回上一步
  1. 如果没有上一页，能调用成功，但是不会执行任何操作
2. history.go(-1) // 返回上一步,参数为负几,就返回几步
3. history.forward() // 返回下一步
  1. 如果没有下一页，能调用成功，但是不会执行任何操作
4. history.go(1) // 返回下一步,参数为几,就返回几步
5. history.length 返回当前会话中的历史页面数，包含当前在内，对于新开一个 tab 加载的页面当前属性返回值是 1
  1. 通过 window.open()，什么都不传的时候打开的页面，此时的 length 是 0
6. history.go()
  1. 在会话历史中向前或向后移动指定页数
  2. 负值表示向后移动，正值表示向前移动，如果未向该函数传参或等于0，则该函数与调用 location.reload() 具有相同的效果
  3. 如果需要移动的页面数，大于可以移动的页面数，就不会进行任何移动
7. history.pushState(state, title, [, url])
  1. 向当前浏览器会话的历史堆栈中添加一个状态
  2. 会增加历史访问记录，但不会改变页面的内容
  3. 新的 URL 跟当前的 URL 必须是同源
  4. 刷新时需要服务端配合返回同一份 index.html
8. history.replaceState(stateObj, title, [url])
  1. 修改当前历史记录状态
  2. 替换浏览记录栈顶部的记录，不会增加栈的深度
  3. 新的 URL 跟当前的 URL 必须是同源
9. history.state
  1. 返回在会话栈顶的状态值的拷贝
10. window.onpopstate
  1. 当活动历史记录条目更改时，将触发 popstate 事件
  2. 调用 history.pushState 和 history.replaceState 不会触发 popstate 事件
  3. popstate 事件只会在浏览器某些行为下触发，比如点击后退、前进按钮
     或者在 js 中调用 history.back、history.forward、history.go 方法
     a 标签的锚点也会触发该事件
----------------------------------------------------------------------------------------------
// screen: 客户端显示屏幕的信息
1. screen.availWidth // 返回可用的屏幕宽度(全部)
2. screen.availHeight // 返回可用的屏幕高度(全部)
3. window.innerWidth // 返回窗口文档显示区的宽度
4. window.innerHeight // 返回窗口文档显示区的高度
----------------------------------------------------------------------------------------------
// navigator: 浏览器的信息
1. navigator.userAgent // 返回浏览器名称、版本、引擎以及操作系统等信息
  1. ua-parser-js // 第三方解析库
2. navigator.onLine // 在线状态
  1. 结合 document.ononline 和 document.onoffline 监听网络变化
3. navigator.clipboard // 剪切板
  1. 返回剪切板对象
  2. 必须是在安全上下文中执行（local、https、wss），可以使用 window.isSecureContext 检测当前是否处于安全上下文
  3. 必须是认为的操作，直接使用 js 代码不能赋值成功
4. navigator.cookieEnabled // 返回当前页面是否启用了 cookie
5. navigator.serviceWorker
  1. 返回关联文件的 ServiceWorkerContainer 对象，提供 ServiceWorker 的注册、删除、升级和通信访问
  2. 只能在安全上下文中使用
  3. Service Worker 应用场景
    1. 后台数据同步，push 功能（只对美国有效）
    2. 集中处理计算成本高的数据更新
    3. 性能增强，用于预获取用户需要的资源
    4. 'serviceWorker' in navgator 判断当前是否支持 serviceWorker
6. navigator.mediaDevices // 媒体设备
  1. 返回一个 MediaDevices 对象，用户获取媒体信息设备
  2. 应用场景：H5 调用摄像头识别二维码，共享屏幕等
7. navigator.storage
  1. 返回 StorageManager 对象，用于访问浏览器的整体存储能力
  2. 只能在安全上下文中使用
  3. 应用场景：获取 storage 的存储大小以及可分配大小
8. navigator.sendBeacon // 上报数据
  1. 通过 httpPost 将少量的数据异步传输到 web 服务器
  2. 它主要用于将统计数据发送到 web 服务器，同时避免了用传统技术（Ajax）发送分析数据的一些问题
    1. 刷新页面时，本质上是会先 unload，此时进行 Ajax 上报可能上传不成功
    2. 页面关闭前要上报时，此时使用 Ajax 上报可能上报不成功
    3. 使用 sendBeacon 一定会成功
9. navigator.connection // 网络信息（实验性API）
  1. 返回一个 NetworkInformation 对象，该对象包含网络信息
  2. 主要应用于获取当前用户的宽带信息，如网络类型、下载速度等
10. navigator.permissions // 权限对象（实验性API）
  1. 返回一个 Permissions 对象
  2. 主要应用于获取权限信息，如位置信息
11. navigator.mediaSession // 共享媒体信息（实验性API）
  1. 返回一个 MediaSession 对象，用来与浏览器共享媒体信息，如播放状态、标题、封面等
  2. 主要应用于通知栏自定义媒体信息
----------------------------------------------------------------------------------------------
// 其他
1. decodeURIComponent 和 encodeURIComponent 是用来对 URI 其中的一部分做转义
  decodeURI 和 encodeURI 是用来对整个 URI 做转义
2. 路由传参时要通过 encodeURI 或 encodeURIComponent 进行参数处理，如果涉及对象时需要 JSON.stringify 处理，
  解析的时候通过 decodeURI 或 decodeURIComponent 进行处理，如果涉及对象时需要 JSON.parse 处理
3. RGB 颜色值中的每一个数值是 0-255，其中每个数值都可以通过 js 的 toString(16) 方法传入 16 进制转成 #FF00AA 形式
4. #FF00AA 形式的颜色值，其中每个数值都可以通过 js 的 parseInt(num, 16) 方法传入 RGB 的数值转成 RGB 格式
```
