---
title: DOM
date: 2020-07-05
---

```js
// DOM是什么
1. DOM(Document Object Model)是文档对象模型(树形结构)
----------------------------------------------------------------------------------------------
// DOM性能
1. DOM查询做缓存(用变量定义起来)
2. 将频繁操作改为一次性操作
----------------------------------------------------------------------------------------------
// 节点类型(nodeName、nodeType、nodeValue)
1. 元素: nodeName为元素名称、nodeType为1、nodeValue为null
2. 属性: nodeName为属性名称、nodeType为2、nodeValue为属性值
3. 文本: nodeName为#text、nodeType为3、nodeValue为文本内容
4. 其他 nodeType 的值，具体可查询 MDN
  1. nodeType === 1，元素节点，div、span 等
    1. 创建：document.createElement
    2. children（nodeType = 1，这是 Element 的属性），childNodes（这是 Node 的属性）
  2. nodeType === 3，文本，对象模型：Text
    1. 神秘空白的文本节点
    2. 使用 childNodes 访问
    3. 使用 nodeValue 取值
  3. nodeType === 8，注释，对象模型：Comment
    1. '<!--' 和 '-->' 之间的内容
  4. nodeType === 9，文档，对象模型：Document
  5. nodeType === 10，文档类型，对象模型：DocumentType
    1. 访问方式：document.doctype，document.firstChild
    2. 有用的属性只有一个，就是 name，返回值是 'html'
  6. nodeType === 11，文档碎片，对象模型：DocumentFragment
    1. 和标准的 documnet 一样，存储由节点（nodes）组成的文档结构
    2. 所有的节点会被一次插入到文档中，而这个操作仅发生一个重渲染的操作
    3. 常用于批量创建大量节点，提高性能
----------------------------------------------------------------------------------------------
// NodeList、HTMLCollection、NamedNodeMap
1. NodeList是节点的集合,包含标签和文本和空行
2. HTMLCollection是html元素的集合,不包含空白和文本
3. NamedNodeMap是元素属性的集合
4. 都是类数组对象,都可以通过[]、item访问,都有length属性,不是Array
5. HTMLCollection 和 NodelList 的区别
  1. DOM 是一棵树，所有节点都是 Node
  2. Node 是 Element 的基类
  3. Element 是其他 HTML 元素的基类，如 HTMLDivElement
  4. 示例
    class Node {}
    // document
    class Document extends Node {}
    class DocumentFragment extends Node {}
    // 文本和注释
    class CharacterData extends Node {}
    class Comment extends CharacterData {}
    class Text extends CharacterData {}
    // element
    class Element extends Node {}
    class HTMLElement extends Element {}
    class HTMLDivElement extends HTMLElement {}
    class HTMLInputElement extends HTMLElement {}
  5. HTMLCollection 是 Element 的集合
  6. NodeList 是 Node 集合
  7. Node 是所有元素的父类
  8. children 属性是 Element 独有的
  9. childNodes 属性是 NodeL 独有的，包含 children
  10. 通过 for/while 遍历，NodeList 有 forEach 方法，但是注意兼容性，可以转为数组
----------------------------------------------------------------------------------------------
// 查找DOM节点
1. getElementById('id') // 在IE中name与id值会冲突
  1. 根据元素的 id 属性值进行节点查询，返回单一元素
  2. 只返回元素，nodeType 为 1 的 Element
  3. id 是大小写敏感的字符串
  4. 如果有多个元素有相同 id，只会返回第一个元素
  5. 此方法仅仅存在于 Document 实例上
2. getElementsByName('name') // 1和2只能通过document调用
  1. 根据指定的 name 属性查询元素
  2. 返回的是实时的节点集合 NodeList
  3. 包括不能被解析的节点
  4. 此方法仅仅存在于 Document 实例上
3. getElementsByTagName('tag') // 传入*号可以获取所有的标签
  1. 根据指定的标签查询元素
  2. 返回的是实时的元素集合
  3. tagName 可以是 '*'，代表所有元素，当参数是 '*' 时，作用和 document.all 一样
  4. WebKit 旧版本内核的浏览器中可能返回一个 NodeList
4. getElementsByClassName('class') // 参数可多个
  1. 根据指定的类名查询元素
  2. 返回结果是实时的元素集合，但不是数组
  3. 可以同时匹配多个 class，'class' 类名通过空格分隔，匹配是 And 的关系
  4. 元素均拥有此方法，不限于 documnet
5. querySelector('#id') // 参数可以是css3选择器,返回一个元素
  1. 根据 css 选择器进行节点查询，返回匹配的第一个元素 Element
  2. 仅仅返回匹配的第一个元素 Element
  3. 如果传入的不是有效的 css 选择器字符串，会抛出异常，所以这个不是一个安全的方法
  4. 元素均有此方法，不限于 document
  5. 注意 css 选择器字符串的转义字符
6. querySelectorAll('#id') // 参数同上,返回数组
  1. 根据 css 选择器进行节点查询，返回节点列表 NodeList
  2. 返回的是静态的 NodeList，随后对 DOM 元素的改动不会影响其集合的内容
  3. querySelectorAll 可能返回的不是你期望的值（scope）
    1. querySelectorAll(':scope .outer .inner')
    2. 如果不加 scope，则不会按照 DOM 的层级结构查询，会全局查询
  4. 元素均有此方法，不限于 document
7. 一些特殊查询属性
  1. document.all，所有的元素
  2. document.images，所有的图片元素
  3. document.forms，所有的 form 表单元素
  4. document.scripts，所有的脚本元素
  5. document.links，所有具有 href 的 area（热点）和 a 元素
  6. document.fonts，所有字体
8. 怎么查询伪元素？
  1. 不能查询
  2. 可以通过 window.getComputedStyle 方法获取内容
    1. 示例
      <style>
        .box::before {
          content: '你好，'
        }
      </style>
      <div class="box">chenj</div>
      const box = document.querySelector('.box')
      const before = window.getComputedStyle(box, 'before')
      console.log(before.content)
----------------------------------------------------------------------------------------------
// 获取DOM节点(包含空白文本)
1. ele.firstChild // 获取元素的第一个子节点
2. ele.lastChild // 获取元素的最后一个子节点
3. ele.parentNode  // 获取元素的父节点
4. ele.nextSibling // 获取元素的下一个兄弟节点
5. ele.previousSibling // 获取元素的上一个兄弟节点
6. ele.childNodes[0] // 获取元素的第一个子节点
7. ele.childNodes.item(0) // 同上
8. document.documentElement // 获取文档的根节点
9. ele.tagName // 获取元素的标签名
10. ele.ownerDocument // 获取元素的最高祖先元素
11. ele.hasChildNodes() // 判断元素是否有子节点,返回布尔值
----------------------------------------------------------------------------------------------
// 获取DOM节点(不包含空白文本)
1. ele.firstElementChild // 获取元素的第一个子节点
2. ele.lastElementChild // 获取元素的最后一个子节点
3. ele.nextElementSibling // 获取元素的下一个兄弟节点
4. ele.previousElementSibling // 获取元素的上一个兄弟节点
5. ele.children[0] // 获取元素的第一个子节点
6. ele.childElementCount // 获取元素子节点的个数
----------------------------------------------------------------------------------------------
// DOM操作(创建)
1. document.createElement('li') // 创建标签
2. document.createTextNode('文本') // 创建文本
3. document.createDocumentFragment(标签) // 创建一个文档片段,相当于一个把标签装起来的盒子
4. document.createComment('注释') // 创建注释语句
5. 对象模型直接 new
  1. const comment = new Comment('注释')
  2. const test = new Text('文本')
  3. document.body.append(comment)
  4. document.body.append(text)
----------------------------------------------------------------------------------------------
// DOM操作（挂载）
1. Node
  1. appendChild，将一个节点附加到指定父节点的子节点列表的末尾
  2. insertBefore，在参考节点之前插入一个拥有指定父节点的子节点
  3. replaceChild，指定的节点替换当前节点的一个子节点，并返回被替换掉的节点
  4. textContent，替换一个节点及其后代的文本内容
2. Element
  1. after，在该节点之后插入一组 Node（操作同级节点）
  2. before，在该节点之后插入一组 Node（操作同级节点）
  3. append，在节点最后一个子节点后插入一组 Node（操作子节点）
  4. prepend，在节点的第一个子节点之前插入一组 Node（操作子节点）
  5. replaceChildren，将后代替换为指定节点
----------------------------------------------------------------------------------------------
// DOM操作(添加)
1. ele.appendChild(ele) // 为ele节点的最后一个子节点添加节点,返回新的子节点,如果参数是已存在的节点则会移动
2. ele.insertBefore(ele, 子节点) // 为ele节点的前面一个子节点添加节点,返回新的子节点
3. ele.replaceChild(插入, 替换) // 用新节点替换某个子节点,返回替换的节点
4. ele.cloneNode() // 复制ele的内容,要通过1、2、3方法添加到document中,否则看不到,参数传入true进行深度复制包括子节点,默认false,返回值为复制的副本
5. ele.normalize() // 将文本节点进行拼接,将两段字符串合并text节点
6. ele.splitText(3) // 将文本节点进行拆分,返回新的文本节点,原本的节点将改变,参数为多少就从多少开始截取
----------------------------------------------------------------------------------------------
// DOM操作(删除)
1. ele.removeChild(ele) // 删除当前元素的某个子节点,返回被删除的节点
2. ele.removeNode() // 将目标节点从文档中删除,返回目标节点,参数默认为false会删除父节点保留子节点,传入true时将全部删除包括子节点
3. Node.removeNode
4. Element.remove
5. outerHTML、innerHTML
6. Document.adoptNode
----------------------------------------------------------------------------------------------
// 设置元素样式
1. ele.style.styleName = styleValue
  如: box.style.fontWeight = 'bold'
2. ele.style.cssText = "color: red; background-color: blue;"
3. className 和 classList
4. 可以在 style 标签上加 id，然后获取到对应的 style 标签，通过 textContent 进行样式的替换
5. window.getComputeStyle
  1. 返回一个对象，该对象在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值
  2. 语法：const style = window.getComputeStyle(el, [pseudoElt]) // pseudoElt 可以查询伪元素，如 before
  3. 计算后的样式不等于 css 文件、style 标签和属性设置的样式的值
  4. 可以获取伪类样式
  5. 此方法会引起重排
6. CSSOM
  1. 关系
    1. document ==> CSSStyleSheet（style 标签） ==> CSSRuleList（对应样式块） ==> CSSRule（对应样式） ==> styleMap（append/clear/delete/set）
  2. 使用：document.styleSheets
----------------------------------------------------------------------------------------------
// 获取设置标签之间的内容
1. ele.innerHTML // 获取ele元素开始和结束标签之间的html
2. ele.innerHTML = 'html' // 设置ele元素开始和结束标签之间的html
3. ele.innerText // 获取ele元素开始和结束标签之间的文本
4. ele.innerText = 'text' // 设置ele元素开始和结束标签之间的文本
----------------------------------------------------------------------------------------------
// 获取设置标签的class属性
1. ele.className // 返回ele元素的class属性
2. ele.className = 'class' // 设置ele元素的class属性为class,如果原本有个class则会被替换掉
----------------------------------------------------------------------------------------------
// 获取设置删除标签的属性
1. ele.getAttribute('class') // 获取ele元素的class属性值
2. ele.setAttribute('class', 'box') // 设置ele元素的class属性值为box
3. ele.removeAttribute('class') // 删除ele元素上的class属性
----------------------------------------------------------------------------------------------
// clientWidth、offsetWidth、scrollWidth
1. clientWidth = content + padding-left + padding-right
2. offsetWidth = content + padding-left + padding-right + border-left + border-right + scrollbar
3. scrollWidth = content + padding-left + padding-right + scrollbar + border-left + border-right +滚动进入不可见的内容
----------------------------------------------------------------------------------------------
// 事件
1. html事件: 直接在html元素标签内添加事件执行脚本,如<tag 事件='执行脚本'></tag>,执行脚本可以是js代码或函数调用
2. DOM0级事件: ele.事件 = 执行脚本,如btn.onclick = function(){}
  1. 效率高
  2. 节点上 onclick 属性被 Node.cloneNode 克隆，通过 js 赋值的 onclick 不可以
  3. 移除事件非常简单
  4. this 是当前的节点
  5. 如果调用函数，会在全局作用域中查找
  6. 唯一性，只能顶一个事件回调函数
3. DOM2级事件绑定: ele.addEventListener('click', function(){}, false),默认false冒泡,true捕获
4. DOM2级事件移除: ele.removeEventListener('click', 函数名, false),默认false冒泡,true捕获
5. IE8及以下DOM2级事件绑定: ele.attachEvent('onclick', function(){})
6. IE8及以下DOM2级事件移除: ele.detachEvent('onclick', 函数名)
7. DOM2级事件执行顺序
  1. 捕获阶段
  2. 目标阶段
  3. 冒泡阶段
  4. 如：window ==> document ==> body ==> button ==> body ==> document ==> window
8. DOM2级事件第三个参数除了可以是 true or false，还是可以是个 options
  1. once，是否只响应一次
    1. 最典型的应用就是视频播放，现代浏览器可能需要用户参与后，视频才可以有声播放
       也就是说即使设置了 autoplay，如果用户没有操作，视频也不会自动播放，所以可以通过
       此属性绑定一个事件监听用户操作，从而进行播放
  2. passive，设置为 true 时，事件处理成不会调用 preventDefault
    1. 某些触摸事件的监听器在尝试处理滚动时，可能阻止浏览器的主线程，从而导致滚动处理期间性能大大降低
  3. AbortSignal，removeEventListener 的另一种方案，也可以用于取消 fetch 请求
9. DOM2级事件如果绑定的事件、参数、回调函数相同，只会绑定一个
10. 所有的事件都是继承于 EventTarget
----------------------------------------------------------------------------------------------
// 冒泡捕获
1. 事件冒泡: 事件沿DOM树向上传播,直系亲属树结构中,点击某个元素,由于冒泡作用,亲属树上的元素凡是添加的事件的都会被触发
2. 事件捕获: 事件沿DOM树向下传播
3. 通过冒泡机制实现事件代理,不用监听子元素多个的情况,直接监听父元素
----------------------------------------------------------------------------------------------
// 事件类型(鼠标事件)
1. onclick // 鼠标点击时触发
2. onmouseover // 鼠标滑过时触发
3. onmouseout // 鼠标离开时触发
4. onmousemove // 鼠标移动时触发
5. onmousedown // 鼠标在元素上按下时触发
6. onmouseup // 鼠标在元素上松开时触发
7. ondbclick // 双击
8. onmouseenter // 鼠标滑过时触发(只触发本身不包括父级),与onmouseover对应
9. onmouseleave // 鼠标离开时触发(只触发本身不包括父级),与onmouseout对应
----------------------------------------------------------------------------------------------
// 事件类型(表单事件)
1. onfocus // 表单元素获取焦点时触发
2. onblur // 表单元素失去焦点时触发
3. onchange // 表单元素内容改变时触发
4. onsubmit // 表单中的确认按钮点击触发
----------------------------------------------------------------------------------------------
// 事件类型(其他事件)
1. onload // 页面加载时触发
2. onresize // 当调整浏览器窗口的大小时触发
3. onscroll // 拖动滚动条滚动时触发
4. textInput // 文本框内容变化
5. DomNodeRemoved // 当ele中任意元素被删除时触发
6. DomSubtreeModified // 当ele中发生任何变化都会触发
7. DomnodeRemovedFromDocument // 当ele从文档中移除之前触发
8. DomNodeInserted // 当ele中任意元素被添加就会被触发
9. DomNodeInsertedIntoDocument // 当ele从文档中添加之前触发
10. DomContentLoaded // 在Dom树加载完成后触发比onload快
11. readystatechange // ajax状态
12. hashchange // window事件,指url#后面的值变化时触发
13. onunload // 页面被关闭时触发
----------------------------------------------------------------------------------------------
// 事件类型(键盘事件)
1. onkeydown // 在用户按下一个键盘按键时触发
2. onkeypress // 在按下键盘按键时触发(只会响应字母和数字符号)
3. onkeyup // 在键盘按键被松开时触发
----------------------------------------------------------------------------------------------
// 事件类型(移动端事件)
1. ontouchstart // 手指触摸屏幕时触发
2. ontouchmove // 手指在屏幕滑动时触发
3. ontouchend // 手指从屏幕上移开时触发
4. ontouchcancel // 当系统停止跟踪触摸时触发
----------------------------------------------------------------------------------------------
// 事件参数function(event){}, 高级浏览器
1. e.type // 事件类型
2. e.target // 触发事件的元素
3. e.currentTarget // 绑定事件的元素
4. e.preventDefault() // 阻止默认行为
5. e.stopPropagation() // 阻止事件冒泡或捕获
6. e.clientY // 浏览器顶部底边到鼠标位置(可视区)
7. e.pageY // 浏览器顶部底边到鼠标位置(计算滚动的距离)
8. e.screenY // 屏幕顶部到鼠标位置
9. e.offsetY // 点击元素的顶部到鼠标的位置
10. e.button === 0 // 鼠标左键
11. e.button === 1 // 鼠标滑轮
12. e.button === 2 // 鼠标右键
13. e.shiftKey // 按下shift键
14. e.ctrlKey // 按下ctrl键
15. e.altKey // 按下alt键
16. e.stoplmmediatePropagation()
  1. 阻止监听同一事件的其他事件监听器被调用
  2. e.stopPropagation 的增强版
  3. 简单理解就是，前面的事件调用 stoplmmediatePropagation 后，后面的事件就不会被执行
----------------------------------------------------------------------------------------------
// 事件参数function(event){}, IE浏览器
1. e.type // 事件类型
2. e.returnValue = false // 阻止默认行为
3. e.cancelBubble = true // 阻止事件冒泡或捕获
4. e.srcElement // 事件源
5. e.button === 0 // 没有按下按钮
6. e.button === 1 // 鼠标左键
7. e.button === 2 // 鼠标右键
8. e.button === 4 // 同时按下左右键
9. e.button === 5 // 鼠标滑轮
----------------------------------------------------------------------------------------------
// 事件参数function(event){}, 移动端
1. e.touches // 当屏幕上有多个手指按下的数组
2. e.changedTouches // 当屏幕上有多个手指,其中有移动的信息
3. e.targetTouches // 当屏幕上有多个手指,作用在元素上的触摸信息
----------------------------------------------------------------------------------------------
// 自定义事件
1. document.createEvent // 已废弃
2. new Event // 不支持传参
3. new CustomEvent // 支持传参
  1. 从继承关系看来，CustomEvent 是 Event 的扩展
----------------------------------------------------------------------------------------------
// 容易混淆的属性
1. HTMLElement.innerText 和 Node.textContent
  1. HTMLElement.innerText 表示一个节点以及后代被渲染的文本内容（未渲染不包含，如 style、script、display: none 等）
  2. Node.textContent 表示一个节点以及其后代节点的文本内容
  3. 区别
    1. innerText 可操作已被渲染的内容，textContent 不会
    2. innerText 受样式影响会触发浏览器绘制部分或全部页面，带来性能问题，尽可能使用 textContent
2. Node.nodeValue 和 value
  1. Node.nodeValue
    1. 对应 text、comment 和 CDATA 节点来说，nodeValue 返回该节点的文本内容
    2. 对应 attribute 节点来说，返回该属性的属性值
  2. value
    1. 特定的一些 HTMLELement 元素，用 value 属性获取其值，如 HTMLInputElement、HTMLSelectElement 等
  3. 区别
    1. nodeValue 是文本节点、属性节点、注释节点等类型的节点用来取文本/值的属性
    2. value 是特定的元素节点用来取值的属性
3. Node.compareDocumentPosition 和 Node.contains
  1. Node.compareDocumentPosition
    1. 比较当前节点与任意文档中的另一个节点的位置关系，返回是数字，多个条件成立时返回的数字会累加
  2. Node.contains
    1. 返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点
  3. 区别
    1. compareDocumentPosition 返回的是数字，带组合意义的数据，不仅仅可以返回包含，还可以返回在之前或之后等信息
    2. contains 返回的是布尔值，仅仅告诉你是否有包含关系
4. Element.getBoundingClientRect 和 Element.getClientRects
  1. Element.getBoundingClientRect 返回元素的大小及其相对于可视化窗口的位置
  2. Element.getClientRects 返回盒子的边界矩形集合
    1. 对于行内元素，元素内部的每一行都会有一个边框，对于块级元素，如果里面没有其他元素，一整块元素只有一个边框
5. window.onload 和 DOMContentLoaded
  1. window.onload 在文档装载完成后会触发 load 事件，此时，在文档中的所有对象都在 DOM 中
     所有图片、脚本、链接以及子框架都完成了装载
  2. DOMContentLoaded 当初始的 HTML 文档被完全加载和解析完成之后，DOMContentLoaded 事件被触发
     而无需等待样式表、图片和子框架（iframe）的完全加载
6. Document.adoptNode 和 Document.importNode 和 Node.cloneNode
  1. Document.adoptNode 将外部文档的一个节点拷贝一份，然后可以把这个拷贝的节点插入到当前文档中
  2. Document.importNode 是从其他 document 文档中获取一个节点，该节点以及它的子树上的所有节点都会从原文档删除
     并且它的 ownerDocument 属性会变成当前 documnet 文档，之后你可以把这个节点插入到当前文档中
  3. Node.cloneNode 是生成一个节点的副本，分为浅克隆和深克隆
    1. cloneNode deep 参数在不同版本的浏览器实现中，默认值可能不一样，所以建议写上值
    2. cloneNode 会克隆一个元素节点，会拷贝它所有的属性以及属性值，当前也包括了属性上绑定的事件
       比如 onClick="xxx"，但不会拷贝那些使用 addEventListener 方法或 node.onclick=fn 这种用 js 动态绑定的事件
  4. 区别
    1. adoptNode 从外部文档进行拷贝
    2. importNode 从外部文档进行拷贝，并从外部文档删除
    3. cloneNode 从本文档进行复制，有浅复制和深复制
7. append 和 appendChild
  1. Node.appendChild 是将一个节点附加到指定父节点的子节点列表的末尾处
  2. Element.append 是在 parentNode 的最后一个子节点之后插入一组 Node 对象或 DOMString 对象
  3. 区别
    1. append 允许追加 DOMString，appendChild 不允许
    2. append 和 appendChild 都允许追加 Node 对象
    3. append 没有返回值，appendChild 返回追加的 Node 对象
    4. append 可以追加多个节点，appendChild 只能追加一个
8. childNodes 和 children
  1. Node.childNodes 是节点的子节点集合，包括元素节点、文本节点、注释节点等
  2. Element.children 返回的只是节点的元素节点集合，即 nodeType 为 1 的节点
```
