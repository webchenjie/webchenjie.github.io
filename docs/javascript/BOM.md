---
title: BOM
date: 2020-07-04
---

``` js
BOM：浏览器对象模型
----------------------------------------------------------------------------------------------
// window
1. 所有全局变量和全局方法都归在window上
2. window.alert('text') // 警告框
3. window.confirm('text') // 对话框，点确定返回true，点取消返回false
4. window.prompt('text', 'defaultText') // 输入框，点确定返回输入的字段，点取消返回null
5. window.close() // 关闭窗口
6. window.open(url, name, 参数) // 参数赋值用等于号，参数有width、height、left、top、toolbar(是否显示浏览器工具栏)、menbar(是否显示菜单栏)、scroll(是否显示滚动条)、location(是否显示地址字段)、status(是否添加状态栏)
----------------------------------------------------------------------------------------------
// 定时器
1. 超时调用：setTimeout(函数, 等待的时间)
2. 清除超时调用：clearTimeout(timer)
var timer = setTimeout(function() {}, 1000)
clearTimeout(timer)
3. 间歇调用：setInterval(函数, 间歇的时间)
4. 清除间歇调用：clearInterval(timer)
var timer = setInterval(function() {}, 1000)
clearInterval(timer)
----------------------------------------------------------------------------------------------
// location：地址栏的url
1. location.href // 返回当前加载页面的完整url
2. location.hash // 返回url中hash(#号)锚点，如果没有则返回空字符串，可获取可设置
3. location.host // 返回服务器名称和端口号
4. location.hostname // 返回不带端口号的服务器名称（主机名/域名/IP）
5. location.pathname // 返回url中的目录和文件名
6. location.port // 返回url中指定的端口号，如果没有则返回空字符串
7. location.protocol // 返回页面使用的协议（本地为file）
8. location.search // 返回url的查询字符串，以问号开头
9. location.replace(url) // 重新定向url（跳转），不会再历史记录中生成新记录
10. location.reload() // 重新加载当前显示的页面，无参是从缓存中加载，传入true从服务器重新加载
----------------------------------------------------------------------------------------------
// history：用户操作的历史记录
1. history.back() // 返回上一步
2. history.go(-1) // 返回上一步，参数为负几，就返回几步
3. history.forward() // 返回下一步
4. history.go(1) // 返回下一步，参数为几，就返回几步
----------------------------------------------------------------------------------------------
// screen：客户端显示屏幕的信息
1. screen.availWidth // 返回可用的屏幕宽度（全部）
2. screen.availHeight // 返回可用的屏幕高度（全部）
3. window.innerWidth // 返回窗口文档显示区的宽度
4. window.innerHeight // 返回窗口文档显示区的高度
----------------------------------------------------------------------------------------------
// navigator：浏览器的信息
1. navigator.userAgent // 返回浏览器名称、版本、引擎以及操作系统等信息
```