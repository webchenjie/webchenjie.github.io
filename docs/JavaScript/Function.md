---
title: Function
date: 2020-07-05
---

```js
// 函数的定义
1. 'function' 声明,预解析可提前,var赋值时不可提前,函数也是对象
2. 立即执行函数（IIFE）
----------------------------------------------------------------------------------------------
// Function 和 Class 的区别
1. 相同点：都可以用作构造函数
2. 不同点：`class` 不可以使用 call、apply、bind 的方式来改变执行上下文
----------------------------------------------------------------------------------------------
// 函数的调用
1. 匿名函数调用: (函数本身)() 或者 (函数本身()) 或者 +-~!函数本身()
2. 构造函数调用: new 函数名()
3. 函数.call(this指向, 参数, 参数) // 立即执行
4. 函数.apply(this指向, [参数]) // 立即执行
5. const 函数2 = 函数1.bind(参数) // 返回函数2，不会立即执行
----------------------------------------------------------------------------------------------
// 函数的参数
1. 函数的参数为形参,调用传的是实参,传参本质: 形参 = 实参,一一对应
2. arguments: 类数组对象,对应实参,arguments.callee指向函数本身
----------------------------------------------------------------------------------------------
// 函数的返回值
1. return: 函数结束或者返回值
2. 函数.length为形参的个数
----------------------------------------------------------------------------------------------
// 箭头函数
1. 无参
  () => { conosle.log(1) }
2. 一个参
  e => { console.log(e) }
3. 多个参数
  (a, b) => { console.log(a, b) }
4. 如果只返回一个表达式
  (a, b) => a + b
5. 返回一个对象
  () => ({ key: 'value' })
6. this 指向是继承于父级执行上下文里的 this // 简单对象(非函数)是没有执行上下文的
7. 箭头函数中没有 arguments
8. 不适用箭头函数的场景
  1. 对象方法
  2. 对象原型
  3. 构造函数
  4. 动态上下文的回调函数
  5. Vue 生命周期、methods // React 是 class 组件可以使用
----------------------------------------------------------------------------------------------
// Function.name
1. 正常的函数声明，Function.name === 函数名称
2. 匿名函数声明和 Obj.key = function(){} 声明，Function.name === ''
3. new Function，Function.name === 'anoymous'
4. Symbol 作为属性，Function.name === Symbol 名称
5. getter、setter，Function.name === get [函数名称]、set [函数名]
6. bind 函数，Function.name === 'bound 函数名称' // 多次 bind，会有多个 bound
7. 属性名，Function.name === 属性简写
----------------------------------------------------------------------------------------------
// es6
1. fn.length获取定义时没有默认值参数的个数 // 形参的长度
2. fn参数默认值直接在参数上赋值,没有默认值写在前面,传值时要跳过中间的参数则传undefined
3. es6不推荐用arguments获取参数,可使用扩展运算符获取
4. Function.caller 指的是本身的函数
----------------------------------------------------------------------------------------------
// 纯函数
1. 纯函数是具备幂等性（对于相同的参数，任何时间执行纯函数都将得到同样的结果），它不会引起副作用。
2. 纯函数与外部的关联应该都来源于函数参数。如果一个函数直接依赖了外部变量，那它就不是纯函数，
   因为外部变量是可变的，那么纯函数的执行结果就不可控了。
----------------------------------------------------------------------------------------------
// 高价函数
1. 接受一个或多个函数作为输入
2. 输出一个函数
3. 如数组中的 forEach、map 等
----------------------------------------------------------------------------------------------
// 柯里化
柯里化是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
----------------------------------------------------------------------------------------------
// 手写 call 实现
Function.prototype.myCall = function () {
	const agrs = Array.prototype.slice.call(arguments)

	const t = agrs.shift() // t 要么是 window，要么是传入的参数

	t.fn = this // this 就是调用的函数体，相当于扩展了 t 下的属性改变原本的 this 指向

	const result = t.fn(agrs)

	delete t.fn

	return result
}
----------------------------------------------------------------------------------------------
// 手写 apply 实现
Function.prototype.myApply = function () {
	const agrs = Array.prototype.slice.call(arguments)

	const t = agrs.shift() // t 要么是 window，要么是传入的参数

	t.fn = this // this 就是调用的函数体，相当于扩展了 t 下的属性改变原本的 this 指向

	const result = t.fn(...agrs)

	delete t.fn

	return result
}
----------------------------------------------------------------------------------------------
// 手写 bind 实现
Function.prototype.myBind = function () {
	const agrs = Array.prototype.slice.call(arguments)

	const t = agrs.shift()  // t 要么是 window，要么是传入的参数

	const self = this // this 就是调用的函数体

	return function () {
		return self.apply(t, agrs)
	}
}
----------------------------------------------------------------------------------------------
// 手写 new 实现
1. 创建一个空对象
2. 设置空对象的原型
3. 指向构造函数方法，把相关的属性和方法添加到对象上
4. 返回对象，如果构造函数返回的值是对象类型，就直接返回该对象，反之返回第一步创建的对象
const ObjectFactory = (...args) => {
  // 创建空对象
  const obj = {}

  // 获取构造函数
  const Constructor = [].shift.call(args)

  // 对象的 __proto__ 指向 Constructor.prototype
  obj.__proto__ = Constructor.prototype

  // 用 apply 的方式把构造函数 Constructor 的 this 指向 obj，执行 Constructor
  const res = Constructor.apply(obj, args)

  // 根据 res 的执行结果判断是返回构造函数的返回对象还是新创建的空对象
  return typeof res === 'object' ? res : obj
}

const res1 = new Person({ name: 'chenj' })
const res2 = ObjectFactory(Person, { name: 'chenj' })
----------------------------------------------------------------------------------------------
// 手写 instanceof 实现
function instance_of(Obj, Constructor) {
  const displayPrototype = Constructor.prototype // 获取构造函数的 prototype 属性
  let implicitPrototype = Obj.__proto__ // 获取实例对象的隐式原型

  // while 循环 -> 在原型链上不断向上查找
  while(true) {
    // 直到 implicitPrototype = null 都没有找到，返回 false
    if (implicitPrototype === null) {
      return false
      // 构造函数的 prototype 属性出现在实例对象的原型链上，返回 true
    } else if (implicitPrototype === displayPrototype) {
      return true
    }

    // 在原型链上不断查找，构造函数的显示原型
    implicitPrototype = implicitPrototype.__proto__
  }
}
----------------------------------------------------------------------------------------------
// 深拷贝
1. 判断简单数据类型还是复杂数据类型
2. 判断是数组还是对象
3. 递归
4. function deepClone(obj = {}) {
    if (typeof obj !== 'object' || obj == null) {
      // obj 是 null 或不是对象和数组直接返回
      return obj
    }
    // 初始化返回结果
    let result
    if (obj instanceof Array) {
      result = []
    } else {
      result = {}
    }
    for (let key in obj) {
      // 保证 key 不是原型的属性
      if (obj.hasOwnProperty(key)) {
        // 递归调用
        result[key] = deepClone(obj[key])
      }
    }
    // 返回结果
    return result
}
----------------------------------------------------------------------------------------------
// 深度比较isEqual
function isEqual(obj1, obj2) {
  if (!isObject(obj1) || !isObject(obj2)) {
    // 值类型, 一般不会是函数
    return obj1 === obj2
  }
  if (obj1 === obj2) {
    return true
  }
  // 两个都是对象或数组, 而且不相等
  // 先取出obj1和obj2的keys, 比较个数
  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)
  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }
  // 以obj1为基准和obj2依次递归比较
  for (let key in obj1) {
    const res = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }
  return true
}
function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}
----------------------------------------------------------------------------------------------
// 数组降维
function flat(arr) {
	const isDeep = arr.some(item => item instanceof Array)
	if (!isDeep) {
		return arr // 已经是flatern
	}
	const res = Array.prototype.concat.apply([], arr)
	return flat(res) // 递归
}
----------------------------------------------------------------------------------------------
// 节流和防抖
1. 节流: 限制只能每隔多久才能触发一次,有定时器要return // throttle
    拖拽一个元素时, 要随时拿到该元素被拖拽的位置
    直接使用drag事件, 则会频繁触发, 很容易导致卡顿
    无论拖拽速度多快, 都会每隔多久触发一次

    实现:
      const div = document.getElementById('div')
      let timer = null
      div.addEventListener('drag', function(e) {
        if (timer) {
          return
        }
        timer = setTimeout(() => {
          console.log(e)
          timer = null
        }, 100)
      })

    封装:
      function throttle(fn, delay = 100) {
        let timer = null
        return function() {
          if (timer) {
            return
          }
          timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
          }, delay)
        }
      }

2. 防抖: 用户输入结束或输入框暂停多久后才触发事件,有定时器要清空 // debounce
    监听一个输入框的, 文字变化后触发change
    直接用keyup事件, 则会频繁触发change事件

    实现:
      const input = document.getElementById('input')
      let timer = null
      input.addEventListener('keyup', function() {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          console.log(input.value)
          timer = null
        }, 500)
      })

    封装:
      function debounce(fn, delay = 500) {
        let timer = null
        return function() {
          if (timer) {
            clearTimeout(timer)
          }
          timer = setTimeout(() => {
            fn.apply(this, arguments)
            timer = null
          }, delay)
        }
      }
```
