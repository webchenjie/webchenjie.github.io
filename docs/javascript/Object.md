---
title: Object
date: 2020-07-05
---

``` js
obj是所有对象的基类，根，所有js对象都是由obj延伸的
----------------------------------------------------------------------------------------------
// 创建对象
1. var obj = new Object()
2. var obj = { 'name': 'chenj',  'age': 23 }
----------------------------------------------------------------------------------------------
// 操作对象
1. obj.name或obj['name'] // 读取值
2. obj.name = tom或obj['name'] = tom // 设置值
3. delete obj.name // 删除值
4. ('name' in obj) // 返回true，判断属性是否存在对象中
5. for(var key in obj) { key为属性名，obj[key]为属性值 } // 遍历对象
----------------------------------------------------------------------------------------------
// es6
1. Object.keys(对象) // 取所有的key值，返回数组，可调用数组方法
2. Object.values(对象) // 取所有的val值，返回数组，可调用数组方法
3. Object.entries(对象) // 把对象变成可遍历对象，即可使用for of
4. Object.fromEntries(arr) // 把数组变成对象
5. Object.is(对象) // 判断是否全等，相当于 ===
6. Object.assign(对象) // 浅拷贝
7. Object.defineProperty() // 修改属性描述符
8. Object.deleteProperty() // 删除属性描述符
9. Object.getOwnPropertyDescriptor() //获取属性描述符
10. Object.getPrototypeOf(obj) // 获取原型链上的对象
11. Object.freeze(obj) // 把obj变为不可扩展
12. Object.
```