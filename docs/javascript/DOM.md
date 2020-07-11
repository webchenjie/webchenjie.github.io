---
title: DOM
date: 2020-07-05
---

``` js
// DOM是什么
DOM(Document Object Model)是文档对象模型(树形结构)
----------------------------------------------------------------------------------------------
// DOM性能
1. DOM查询做缓存(用变量定义起来)
2. 将频繁操作改为一次性操作
----------------------------------------------------------------------------------------------
// 节点类型(nodeName、nodeType、nodeValue)
1. 元素: nodeName为元素名称、nodeType为1、nodeValue为null
2. 属性: nodeName为属性名称、nodeType为2、nodeValue为属性值
3. 文本: nodeName为#text、nodeType为3、nodeValue为文本内容
----------------------------------------------------------------------------------------------
// NodeList、HTNLCollection、NamedNodeMap
1. NodeList是节点的集合,包含标签和文本和空行
2. HTNLCollection是html元素的集合,不包含空白和文本
3. NamedNodeMap是元素属性的集合
4. 都是类数组对象,都可以通过[]、item访问,都有length属性,不是Array
----------------------------------------------------------------------------------------------
// 查找DOM节点
1. getElementById('id') // 在IE中name与id值会冲突
2. getElementsByName('name') // 1和2只能通过document调用
3. getElementsByTagName('tag') // 传入*号可以获取所以的标签
4. getElementsByClassName('class') // 参数可多个
5. querySelector('#id') // 参数可以是css3选择器,返回一个元素
6. querySelectorAll('#id') // 参数同上,返回数组
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
----------------------------------------------------------------------------------------------
// DOM操作(添加)
1. ele.appendChlid(ele) // 为ele节点的最后一个子节点添加节点,返回新的子节点,如果参数是已存在的节点则会移动
2. ele.insertBefore(ele, 子节点) // 为ele节点的前面一个子节点添加节点,返回新的子节点
3. ele.replaceChlid(插入, 替换) // 用新节点替换某个子节点,返回替换的节点
4. ele.cloneNode() // 复制ele的内容,要通过1、2、3方法添加到document中,否则看不到,参数传入true进行深度复制包括子节点,默认false,返回值为复制的副本
5. ele.normalize() // 将文本节点进行拼接,将两段字符串合并text节点
6. ele.splitText(3) // 将文本节点进行拆分,返回新的文本节点,原本的节点将改变,参数为多少就从多少开始截取
----------------------------------------------------------------------------------------------
// DOM操作(删除)
1. ele.removeChild(ele) // 删除当前元素的某个子节点,返回被删除的节点
2. ele.removeNode() // 将目标节点从文档中删除,返回目标节点,参数默认为false会删除父节点保留子节点,传入true时将全部删除包括子节点
----------------------------------------------------------------------------------------------
// 设置元素样式
ele.style.styleName = styleValue
如: box.style.fontWeight = 'bold'
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
// 事件
1. html事件: 直接在html元素标签内添加事件执行脚本,如<tag 事件='执行脚本'></tag>,执行脚本可以是js代码或函数调用
2. DOM0级事件: ele.事件 = 执行脚本,如btn.onclick = function(){}
3. DOM2级事件绑定: ele.addEventListener('click', function(){}, false),默认false冒泡,true捕获
4. DOM2级事件移除: ele.removeEventListener('click', 函数名, false),默认false冒泡,true捕获
5. IE8及以下DOM2级事件绑定: ele.attachEvent('onclick', function(){})
5. IE8及以下DOM2级事件移除: ele.detachEvent('onclick', 函数名)
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
2. e.target // 事件源触发的元素
3. e.currentTarget // 事件绑定在哪就指哪,绑定事件的元素
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
```