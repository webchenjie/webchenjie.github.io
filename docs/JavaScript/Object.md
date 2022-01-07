---
title: Object
date: 2020-07-05
---

```js
1. obj是所有对象的基类,根,所有js对象都是由obj延伸的
----------------------------------------------------------------------------------------------
// 创建对象
1. var obj = new Object(obj1) // obj === obj1，不传 obj1 则创建一个空对象
2. var obj = { 'name': 'chenj',  'age': 23 }
3. var obj = Object.create(obj1) // 创建一个空对象，并把该对象的原型指向 obj1
4. {} === new Object()，原型是 Object.prototype
5. Object.create(null)，没有原型
----------------------------------------------------------------------------------------------
// 操作对象
1. obj.name或obj['name'] // 读取值
2. obj.name = tom或obj['name'] = tom // 设置值
3. delete obj.name // 删除值
4. ('name' in obj) // 返回true,判断属性是否存在对象中
5. for(var key in obj) { key为属性名,obj[key]为属性值 } // 遍历对象
----------------------------------------------------------------------------------------------
// es5
1. Object.getPrototypeOf(obj) // 获取原型链上的对象
2. Object.defineProperty() // 修改属性描述符
3. Object.deleteProperty() // 删除属性描述符
4. Object.getOwnPropertyDescriptor() //获取属性描述符
5. Object.freeze(obj) // 把obj变为不可扩展
6. Object.hasOwnProperty(key) // 判断 key 是否是该对象自身的属性，而不是原型上的
----------------------------------------------------------------------------------------------
// 属性描述符
1. configurable: true // 是否可删除
2. enumerable: true // 是否可遍历
3. value: 值 // 本身的val值
4. writable: true // 是否可修改
5. 当使用了getter或setter方法，不允许使用writable和value这两个属性
----------------------------------------------------------------------------------------------
// es6
1. Object.keys(对象) // 取所有的key值,返回数组,可调用数组方法
2. Object.values(对象) // 取所有的val值,返回数组,可调用数组方法
3. Object.entries(对象) // 把对象变成可遍历对象,即可使用for of
4. Object.fromEntries(arr) // 把数组变成对象
5. Object.is(对象) // 判断是否全等,相当于 ===
6. Object.assign(对象) // 如果是第一层级是深拷贝，如果有多层级，则除了第一层级是深拷贝其他都是浅拷贝
```
