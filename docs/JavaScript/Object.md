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
1. Object.getPrototypeOf(obj) // 获取原型链上的对象，参数不能是 null 或 undefined，否则会报错
2. Object.defineProperty() // 修改属性描述符
  1. Object.defineProperty(obj, 'name', {})
     如果对一个属性这样设置，它的属性描述符都是 false，即属性描述符的默认值都是 false
3. Object.deleteProperty() // 删除属性描述符
4. Object.getOwnPropertyDescriptor() //获取属性描述符
5. Object.hasOwnProperty(key) // 判断 key 是否是该对象自身的属性，而不是原型上的
6. Object.preventExtensions(obj)
  1. 把 obj 变为不可扩展
  2. 不能新增属性
  3. 可以修改描述符
  4. 可以删除属性
  5. 可以更改属性值
  6. Object.isExtensible(obj) // 判断是否是可扩展
7. Object.seal(obj)
  1. 把 obj 变为封闭状态
  2. 不能新增属性
  3. 不能修改描述符
  4. 不能删除属性
  5. 可以更改属性值
  6. Object.isSealed(obj) // 判断是否是封闭状态
8. Object.freeze(obj)
  1. 把 obj 变为冻结状态
  2. 不能新增属性
  3. 不能修改描述符
  4. 不能删除属性
  5. 不能更改属性值
  6. Object.isFrozen(obj) // 判断是否被冻结
----------------------------------------------------------------------------------------------
// 属性描述符
1. configurable: true // 是否可删除，其他描述符是否可以被更改
  1. 如果 configurable 是 false，这个对象的属性只能改 value 和 writable 从 true 变成 false，其他都会失败
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
5. Object.is(对象) // 判断是否是同一个值，不会隐式转换类型
6. Object.assign(对象) // 如果是第一层级是深拷贝，如果有多层级，则除了第一层级是深拷贝其他都是浅拷贝
----------------------------------------------------------------------------------------------
// 普通属性和排序属性
1. 当使用非数字的字符串作为 key 时，遍历 obj 它会按顺序遍历
2. 如果使用数字或数字字符串作为 key 时，遍历 obj 它会按 key 大小进行顺序遍历，从小到大
3. 如果一个对象里面既有普通属性又有排序顺序，遍历输出时，排序属性会在普通属性的前面
4. 为什么要设计普通属性和排序属性？
  1. 提升属性的访问速度
  2. 两种线性数据结构保存
  3. 在对象上会有两个隐藏的属性，elements 即排序属性，properties 即普通属性
     在这两个属性下又分别挂载了这个对象上的对应的属性
5. 对象内属性：被保存在对象自身的普通属性，即不在 properties 上面，而是在直接挂载在对象上面
  1. 内属性的数量是 10 个，可以在浏览器的 Memory 上测试验证
  2. 在 properties 中，如果数量较少是以顺序的下标存储的，如果多则是以无序下标存储的，这是 V8 的优化
6. 隐藏类（Map）：类似快照，记录这个对象的属性的来源等信息，可以在浏览器的 Memory 中查看某一个对象
7. 对象的 delete 和赋值为 undefined，赋值的动作会比 delete 快，尤其是对普通属性来说，快很多
----------------------------------------------------------------------------------------------
// 对象的属性的遍历
1. 属性的分类
  1. 普通属性
  2. 不可枚举的属性
  3. 原型属性
  4. Symbol 属性
2. 遍历的方法
  1. for in // 可以遍历普通属性 + 原型属性
  2. Object.keys // 可以遍历普通属性
  3. Object.getOwnPropertyNames // 可以遍历普通属性 + 不可枚举属性
  4. Object.getOwnPropertySymbols // 可以遍历不可枚举属性 + Symbol 属性
  5. Reflect.ownKeys // 可以遍历普通属性 + 不可枚举属性 + Symbol 属性
----------------------------------------------------------------------------------------------
// delete 本质
1. delete 的返回值是什么
  1. Boolean 类型
  2. true，不一定删除成功，代表删除没有发生异常
  3. false，一定没有删除成功
2. delete 不能删除哪些属性
  1. 任何用 var 声明的属性，不能从全局作用域或者函数作用域删除
  2. 任何使用 let 或 const 声明的属性，不能从它声明的作用域删除
  3. 不可配置（configurable）的属性不能被删除
3. 本质
  1. 操作表达式的结果
  2. 值、字面量，不操作，直接返回 true
  3. 引用类型，删除引用
4. 严格模式
  1. 在非严格模式下，delete 方法是安全方法，不会抛异常
  2. 在严格模式下可能会抛出 3 种异常
    1. SyntaxError：尝试删除变量、函数名、函数参数
    2. TypeError：尝试删除 configurable 为 false 的属性
    3. ReferenceError：尝试删除引用类型上的属性，如 delete super.xxx // class
```
