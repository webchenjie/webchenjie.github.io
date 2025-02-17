---
title: JavaScript-ES6
date: 2020-07-04
tags:
    - JavaScript
categories:
    - 技术
---

```js
// 变量声明
1. let声明的变量只在当前(块级)作用域有效
2. let声明的变量不能被重复声明
3. 不存在变量提升(不能通过window.属性访问)
4. var定义的全局变量可以通过window.属性访问
5. const声明时必须赋值
6. const不能重复声明
7. const不存在变量提升
8. const只在当前(块级)作用域内有效
9. 常量不可改变
10. 当常量是引用类型时里面的值可以改变,但指向不可改变
11. const 和 let 如果在声明之前调用则会报错说不能在声明之前调用，它也是有变量提升的，只是不像 var 一样把它赋值给 undif，它会存在暂时性死区当中
----------------------------------------------------------------------------------------------
// 作用域
1. 全局
2. 函数
3. eval
4. 块级作用域是一对花括号中的区域块级可以嵌套(es6新增)
----------------------------------------------------------------------------------------------
// 数组解构赋值
1.  const arr = [1, 2, 3]
    let [a, b, c] = arr
2.  const arr = [a, b, c]
    const [ , , c] = arr // 只拿c的值而跳过a和b
3.  const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const arr3 = [...arr1, ...arr2] //合并数组,...为扩展运算符
4.  const arr = [1, 2, 3]
    const [a, ...b] = arr // a = 1, b = [2, 3]
5. 当赋值中有undefined时,会优先选择默认值,可用于交换变量,接收多个函数返回值
----------------------------------------------------------------------------------------------
// 对象解构赋值,属性名要一致
1.  const obj = { a: 1, b: 2 }
    const { a, b } = obj
2.  const obj = { a: 1 }
    const obj1 = { b: 1, ...obj }
----------------------------------------------------------------------------------------------
// 扩展运算符和 rest 参数
1. 如果 ... 在等号的左边或在形参上就是 rest 参数 // 收缩
2. 如果 ... 在等号的右边或在实参上就是扩展运算符 // 展开
3. 数组的 ... 原理就是通过 [].concat()
4. 对象的 ... 原理就是通过 polyfill 实现的
----------------------------------------------------------------------------------------------
// 模板字符串
`${变量}`
----------------------------------------------------------------------------------------------
// Set数据结构,接收可遍历对象,里面的数据不能重复
1. let s = new Set()
2. s.add('hello').add('cj') // 增
3. s.delete('hello') // 删
4. s.clear() // 全删
5. s.has('hello') // 查
6. s.size // 相当于length
7. s.keys() // 读
8. s.values() // 读
9. s.entries() // 读
10. 删完再加则是改
11. for of、forEach //遍历
12. Set 和数组的区别：
    1. API 不同
    2. Set 元素不能重复
    3. Set 是无序结构，操作很快
----------------------------------------------------------------------------------------------
// Map数据结构,接收可遍历对象,满足key/value形式
1. let m = new Map() // 有下标，类似伪数组的下标
2. m.set(name, 'cj') // 增、改
3. m.delete('hello') // 删
4. m.clear() // 全删
5. m.has('hello') // 查,查的时候是查key值
6. m.size // 相当于length
7. m.keys() // 读
8. m.values() // 读
9. m.entries() // 读
10. m.get(name) //获取
11. for of、forEach //遍历
12. Map 和 Object 的区别：
    1. 与 Object 不同，Map 是有序结构，Object 是无序结构
    2. API 不同，Map 可以已任意类型作为 key
    3. Map 操作同样很快
13. 应用场景：两个对象之间进行关联操作，如果使用 Object 会导致关联的对象属性数据过大
    使用 Map 可以保持独立且没有引用关系
----------------------------------------------------------------------------------------------
// WeakSet 和 WeakMap
1. 这两个都是弱引用数据
2. 只能使用引用类型作为 key 值
3. 在垃圾回收或内存泄漏方面可以有效的提供两个引用类型之间的关联
4. WeakMap 只能用对象作为 key，WeakSet 只能用对象作为 value
5. 没有 forEach 和 size，只能用 get、add、delete、has
6. 使用场景：建立关联关系，两者保持独立，而且不相互影响销毁逻辑

// WeakSet
1. WeakSet 是一种集合数据结构，它允许你将对象存储为唯一的值（即集合中的值都是唯一的，不会有重复的对象）。
2. 与Set不同的是，WeakSet中的对象都是弱引用的，这意味着如果对象没有被其他强引用所持有，那么垃圾回收器可以回收这些对象，即使它们还在WeakSet中。
// 特点：
1. 弱引用：WeakSet中的对象不会被WeakSet本身所持有，因此不会影响垃圾回收。
2. 只能存储对象：WeakSet只能存储对象引用，不能存储原始值（如数字、字符串等）。
3. 不可迭代：WeakSet不是可迭代的，因此不能使用for...of循环来遍历它的元素。但是，你可以使用WeakSet.prototype.has()方法来检查一个对象是否存在于WeakSet中。
4. 没有clear()方法：WeakSet没有提供clear()方法来清空集合，因为这不是它的设计目的。相反，当对象变得不可达时，它们会自动从WeakSet中被移除。

// WeakMap
1. WeakMap 是一种键值对的集合，其中键是对象，而值是任意的。
2. 与普通的Map不同，WeakMap中的键是弱引用的，这意味着如果键对象没有被其他强引用所持有，那么垃圾回收器可以回收这些键和对应的值对，即使它们还在WeakMap中。
// 特点：
1. 弱引用键：WeakMap中的键是弱引用的，因此不会影响垃圾回收。
2. 键必须是对象：与WeakSet类似，WeakMap的键只能是对象，不能是原始值。
3. 不可枚举：WeakMap的键是不可枚举的，因此不能使用for...in循环、for...of循环或WeakMap.prototype.keys()方法来遍历键。同样地，也不能使用WeakMap.prototype.values()或WeakMap.prototype.entries()来遍历值或键值对。
4. 没有clear()方法：与WeakSet一样，WeakMap也没有提供clear()方法来清空集合。

// 使用场景：
1. WeakSet和WeakMap通常用于在不需要防止垃圾回收的情况下存储对象引用。例如，你可以使用WeakSet来跟踪一组临时对象，而不用担心这些对象会被WeakSet所持有。
2. 由于WeakMap的键是弱引用的，因此它非常适合用于缓存场景。你可以将对象作为键，将计算结果或其他与对象相关的数据作为值存储在WeakMap中。当对象变得不可达时，与之关联的数据也会自动被垃圾回收器回收。
3. 需要注意的是，由于WeakSet和WeakMap的弱引用特性，它们不能用于需要持久存储对象引用的场景。此外，由于它们不可迭代且没有提供clear()方法，因此在某些情况下可能会比普通的集合类型更加难以管理和调试。
----------------------------------------------------------------------------------------------
// 反射机制是在编译阶段不知道是哪个类被加载,而是在运行的时候才加载执行
1. Reflect.apply(Math.floor, null, [4, 5]) // es6
   Math.floor(null, [4, 5]) // es5
2. Reflect.construct(Date, []) //es6
   let d = new Date()
3. Reflect.getOwnPropertyDescriptor() //获取属性描述符
4. Reflect.defineProperty() // 修改属性描述符
5. Reflect.deleteProperty() // 删除属性描述符
6. Reflect.get(obj, 'name') // 获取值
7. Reflect.set(obj, 'name', 'cj') // 设置值
8. Reflect.getPrototypeOf(obj) // 获取原型链上的对象
9. Reflect.has(obj 'cj') // 判断是否有这个属性,返回布尔值
10. Reflect.isExtensible(obj) // 判断是否可扩展,返回布尔值
11. Reflect.prevenExtensions(obj) // 把obj变为不可扩展
12. Reflect.setPrototypeOf(arr, String.prototype) //  把arr的原型改成String
13. Reflect.ownKeys(obj) // 获取非原型的属性
14. Reflect.hasOwnProperty('name') // 判断name是否是自身属性而不是原型上的
----------------------------------------------------------------------------------------------
// proxy代理,保护信息,不可修改
1. let c = { name: 'cj', age: 23 }
   let j = new proxy(c, {
       get(target, key) {
        return target[key]
       },
       set(target, key, value) {
        return false
       }
     })
2. let j = Proxy.revocable(c, {
       get(target, key) {
        return target[key]
       },
       set(target, key, value) {
        return false
       }
     })
   })
可以撤销代理的对象j,里面包括j.proxy代理的内容和j.revoke()方法撤销代理
3. 当第2个参数为空时,相当是对第一个参数做的一次浅拷贝
4. 类似es5的getter/setter
5. proxy相当于去修改设置对象的属性行为,而Reflect则是获取对象的这些行为
----------------------------------------------------------------------------------------------
// Generator(控制函数执行)
1. function * loop() {
    for(let i = 0; i < 5; i++){
     yield console.log(i)
    }
   }
   const l = loop()
   l.next()
   l.next()
   l.next()
2. yield后面可以是可遍历对象或generator加*
3. next()返回值当前执行结果的状态
4. next(10)可以传参,第一个无效
5. 提前结束l.return(10),可传可不传
6. l.throw(new Error('err')),在外部抛出异常,在内部接收,try catch
7. yield没有返回值,后面的值会做计算
8. next返回是yield后面的val值和done是否结束
9. next传参是给yield
10. next返回一个迭代器协议
11. next遇到yield停止
----------------------------------------------------------------------------------------------
// Iterator(实现自定义遍历的接口)
1. 部署一个[Symbol.iterator]的方法,this指当前的值,必须return一个函数
2. 迭代器协议: 是一个对象,对象包含一个无参函数next,next返回一个对象
  return {
    next() {
     return {
      done: false,
       value: 1
       }
     }
   }
3. 可迭代协议: [Symbol.iterator]
    // 原生具备 iterator 接口的数据结构
    1. Array
    2. Map
    3. Set
    4. String
    5. TypedArray // 二进制
    6. 函数的 arguments 对象
    7. nodeList 对象
4. 异步可迭代协议：[Symbol.asyncIterator] 或 for-await-of 处理异步遍历
5. for...in 用于可枚举的数据，即修饰符中的 enumerable === true，如对象、数组、字符串
6. for...of 用于可迭代的数据，即有 [Symbol.iterator] 这个方法，如数组、字符串、Map、Set
7. for-await-of 和 Promise.all 是同一个效果
----------------------------------------------------------------------------------------------
// 模块化
1. 在import时,如果是默认导出的情况可以直接起不同的名字,如果加了{}的形式则需要使用as进行换名字
2. 在导入时如果用* as 名字方式全部导入的话,默认导出的内容是在名字.default中
3. 在导出时也可以用as修改名字,默认导出对象时要加{},export default { 对象 }
4. import时没有from相当于执行了这个模块的全部代码
5. export default 相当于导出了一个名字叫 default 的模块
6. export default 可以导出匿名函数或匿名变量，export 不可以
7. export 中如果直接导出一个匿名对象，则里面只能写变量的引用，export { obj, arr }
   其他 export 只能导出有名字的变量，实际也都会挂载到 export {} 里面去
8. 示例
    import obj, { arr } from './test' // 正确
    import { arr }, obj from './test' // 错误
9. 使用 ESModules 时，如果 'import' 进来的是引用类型的数据，可以在此数据上进行修改，注意会导致该数据变成修改后的数据
----------------------------------------------------------------------------------------------
// 其他
1. 可以在try catch时,catch(e)不加e参数
2. 可以处理2的53次方长度的数字
```
