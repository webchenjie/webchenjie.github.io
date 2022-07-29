---
title: BOM
date: 2020-07-04
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
// 定时器
1. 超时调用: setTimeout(函数, 等待的时间)
2. 清除超时调用: clearTimeout(timer)
var timer = setTimeout(function() {}, 1000)
clearTimeout(timer)
3. 间歇调用: setInterval(函数, 间歇的时间)
4. 清除间歇调用: clearInterval(timer)
var timer = setInterval(function() {}, 1000)
clearInterval(timer)
----------------------------------------------------------------------------------------------
// location: 地址栏的url
1. location.href // 返回当前加载页面的完整url
2. location.hash // 返回url中hash(#号)锚点,如果没有则返回空字符串,可获取可设置
3. location.host // 返回服务器名称和端口号
4. location.hostname // 返回不带端口号的服务器名称(主机名/域名/IP)
5. location.pathname // 返回url中的目录和文件名
6. location.port // 返回url中指定的端口号,如果没有则返回空字符串
7. location.protocol // 返回页面使用的协议(本地为file)
8. location.search // 返回url的查询字符串,以问号开头
9. location.replace(url) // 重新定向url(跳转),不会再历史记录中生成新记录
10. location.reload() // 重新加载当前显示的页面,无参是从缓存中加载,传入true从服务器重新加载
11. 解析 url 参数
  const search = location.search
  const p = new URLSearchParams(search)
  p.get(key) // 获取对应的 url 参数
----------------------------------------------------------------------------------------------
// history: 用户操作的历史记录
1. history.back() // 返回上一步
2. history.go(-1) // 返回上一步,参数为负几,就返回几步
3. history.forward() // 返回下一步
4. history.go(1) // 返回下一步,参数为几,就返回几步
----------------------------------------------------------------------------------------------
// screen: 客户端显示屏幕的信息
1. screen.availWidth // 返回可用的屏幕宽度(全部)
2. screen.availHeight // 返回可用的屏幕高度(全部)
3. window.innerWidth // 返回窗口文档显示区的宽度
4. window.innerHeight // 返回窗口文档显示区的高度
----------------------------------------------------------------------------------------------
// navigator: 浏览器的信息
navigator.userAgent // 返回浏览器名称、版本、引擎以及操作系统等信息
```
