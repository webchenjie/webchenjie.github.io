---
title: Ajax和Json
date: 2020-07-04
---

```js
// ajax是什么
1. ajax是一种在无需要重新加载整个网页的情况下,能够更新部分网页的技术
2. 全称是 Asynchronous Javascript And XML，即异步 Javascript 和 XML
3. 它并不是指单一的某种技术，而是多种现有技术的结合，实现无页面刷新的数据获取
4. 这些技术包括了 HTML、XHTML、CSS、JavaScript、DOM、XML、XSLT，以及最重要的 XMLHttpRequest
----------------------------------------------------------------------------------------------
// ajax的优点
1. 通过异步模式,提升了用户体验
2. 优化了浏览器和服务器之间的传输,减少了不必要的数据往返,减少了带宽占用
3. ajax引擎在客户端运行,承担了一部分本来由服务器承担的工作,从而减少了大用户量下的服务器负载
----------------------------------------------------------------------------------------------
// ajax的缺点
1. 不支持浏览器的back按钮
2. 安全问题,ajax暴露了与服务器交互的细节
3. 对搜索引擎的支持比较弱
----------------------------------------------------------------------------------------------
// XMLHttpResquest是ajax的核心
1. 向服务器提出请求
2. 在页面加载后进行页面的局部更新
----------------------------------------------------------------------------------------------
// 如何使用XMLHttpResquest
1. 创建XMLHttpResquest对象,也就是创建一个异步调用对象
2. 创建一个新的HTTP请求,再指定该HTTP请求方法、url
3. 设置响应HTTP请求状态变化的函数
4. 发送HTTP请求
5. 获取异步调用返回数据
6. 使用js和DOM实现局部刷新
----------------------------------------------------------------------------------------------
// XMLHttpResquest
1. upload，返回一个 XMLHttpResquestUpload 对象，表示上传进度
2. withCredentials，用来指定跨域请求是否携带授权信息，如 cookie
3. readyState，返回 XHR 代理当前所处的状态（0-4）
4. status，返回响应的状态码，请求之前为 0，成功为 200
5. statusText，服务器返回的状态码文本
6. timeout，指定 ajax 的超时时长
7. response，服务器响应的内容
8. responseText，服务器响应内容的文本形式
9. responseType，响应的类型（arrayBuffer、blob、document、json、text）
10. responseXML，xml 形式的响应数据
11. responseURL，ajax 最终请求的 url，存在重定向时，就是重定向后的 url
12. abort()，如果请求已发出，立刻将终止该请求
13. getAllResponseHeaders()，获取所有的响应头
14. getResponseHeader()，获取指定的响应头文本字符串
15. open()，初始化请求
16. overrideMimeType()，指定一个 MIME 类型，代替服务器指定的类型
17. send()，发送请求
18. setRequestHeader()，设置请求头部
19. 事件
  1. onreadystatechange，readyState 属性变化时触发
  2. ontimeout，在预设时间内没收到响应触发
  3. onabort，request 被停止时触发
  4. onloadstart，接收到响应数据时触发
  5. onload，请求成功完成触发
  6. onloadend，请求结束触发，无论请求成功与否
  7. onerror，请求遇到错误时触发
  8. onprogress，当请求收到更多数据时，周期性触发
20. 缺点
  1. 回调地狱
  2. XHR 不符合关注点分离原则，如请求和响应都在一个对象上面
----------------------------------------------------------------------------------------------
// request的属性
1. request.responseText // 获取字符串形式的响应数据
2. request.responseXml // 获取xml形式的响应数据
3. request.status // 数字,状态码
4. request.statusText // 文本,状态码
5. request.getAllResponseHeader() // 获取所有的响应报头
6. request.getResponseHeader() // 获取某个的响应报头
----------------------------------------------------------------------------------------------
// request.readystate
1. 0(未初始化)还没有调用send()方法
2. 1(载入)已调用send()方法,正在发送请求
3. 2(载入完成)send()方法执行完成,已经接收全部响应内容
4. 3(交互)正在解析响应内容
5. 4(完成)响应内容解析完成,可以在客户端调用
----------------------------------------------------------------------------------------------
// request.status
1. 1xx: 服务器收到请求
2. 2xx: 表示成功处理请求,如200
3. 3xx: 需要重定向,浏览器直接跳转,301表示永久重定向,302表示临时重定向,304表示资源未改变(缓存)
4. 4xx: 客户端请求错误,404表示资源找不到,403表示没有权限
5. 5xx: 服务器端错误,504表示网关超时,500表示服务器错误
----------------------------------------------------------------------------------------------
// ajax演示
var request = new XMLHttpRequest
request.open('post', url, true) // 创建请求,true为异步
request.setRequestHeader('content-type', 'application/json') // post请求要写请求头
request.send('name=cj&age=23') // 发送请求
request.onreadystatechange = function() {
  if (request.readystate === 4 && request.status === 200) {
    console.log(JSON.parse(request.responeText))
  }
}
----------------------------------------------------------------------------------------------
// json是什么
1. json全称是js对象表示法,它是一种数据交换的文本格式
2. 不是一种编程语言,用于读取结构化数据,目的是取代繁琐的xml
3. JSON 特征
  1. JSON 就是一串字符串，使用特定的符号标注
  2. {} 双括号表示对象
  3. [] 中括号表示数组
  4. "" 双引号内是属性键或值
4. JSON 键
  1. 只能是字符串
  2. 必须双引号包裹
5. JSON 值 // 没有 Symbol、undefined 等其他值
  1. object
  2. array
  3. number // 只能是 10 进制
  4. string
  5. true
  6. false
  7. null
----------------------------------------------------------------------------------------------
// 支持语法
1. 简单值: 字符串、数值、布尔值、null,字符串以双引号表示,数值以十进制表示
2. 对象
3. 数组
4. 不支持undefiend
----------------------------------------------------------------------------------------------
// 方法
1. JSON.parse(参数, 过滤函数) // 用于将JSON字符串转化成对象
  1. 参数是 json 字符串
  2. 过滤函数接收两个参数，第一个是当前的 key，第二个是当前的 value，类似 array.filter
     如果返回 undefined，则当前的 key 会被删除，返回其他值不会
  3. 示例
    const jsonStr = `
      {
        "name": "chenj",
        "age": 18
      }
    `
    const obj = JSON.parse(jsonStr, function(key, value) {
      if (key == 'name') {
        return undefined
      } else {
        return value
      }
    })
2. JSON.stringify(参数, 过滤, 格式) // 用于将对象转化成JSON字符串
  1. 参数是 object 对象
  2. 过滤有三种情况
    1. 如果是函数，则在序列化的过程中，被序列化的值的每个属性都会经过该函数的转换和处理
      1. 过滤函数接收两个参数，第一个是当前的 key，第二个是当前的 value，类似 array.filter
         如果返回 undefined，则当前的 key 会被删除，返回其他值不会
      2. 和 JSON.parse 的第二个参数使用方式一样
    2. 如果是数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中
    3. 如果是 null 或 undefined，则表示默认，所有属性都会被序列化
  3. 格式有两种情况
    1. 如果是数字，则表示有多少空格，上限是 10，如果值小于 1，则表示没有空格
    2. 如果是字符串，则使用字符串作为空格，上限也是 10，只会取前 10 个字符
  4. 如果参数中有 undefined、任意的函数、Symbol 时
    1. 作为对象属性值，自动忽略
    2. 作为数组的值，序列化返回 null
    3. 单独序列化时，返回 undefined
  5. 其他规则
    1. Date 返回 ISO 字符串
    2. NaN、Infinity、null 都会作为 null
    3. Map/Set/WeakMap 等对象，仅序列化可枚举属性
    4. 循环引用会报错
    5. BigInt 会报错
  6. toJSON
    1. 如果对象中存在 toJSON 这个方法时，把这个对象作为参数传入 JSON.stringify 中
       会执行 toJSON 方法，并使用 toJSON 返回的值作为结果
    2. 也就是说如果对象拥有 toJSON 方法时，会覆盖对象默认的序列化行为
----------------------------------------------------------------------------------------------
// fetch
1. promise 语法，解决了回调地狱问题
2. 更合理的设计，分离 request/response 等对象
3. 前端可拦截 301/302 等跳转（XMR 不能）
4. 支持数据流（Stream），方便处理大文件
5. 语法简单
6. 缺点
  1. 缺少中断请求，需要使用其他 API 实现（AbortController 和 AbortSignal）
  2. 缺少获取请求传输进度的能力，需要使用 Response.body 给我们返回一个 ReadableStream 对象
  3. 兼容性比 XMR 差
  4. 不支持超时，需要使用 setTimeout 自己封装
  5. 错误不会被拒绝，服务器返回 400-500 等错误，并不会触发 promise 的 reject 回调
```
