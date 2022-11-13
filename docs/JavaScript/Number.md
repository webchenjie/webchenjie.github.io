---
title: JavaScript-Number
date: 2022-07-09
---

```js
// NaN
1. typeof NaN === 'number'
2. NaN === NaN // false
3. 不能被删除
4. 注意：在数组中如果有 NaN，使用 indexOf(NaN) 返回的是 -1，而使用 includes(NaN) 返回的是 true
   原因是两个 API 底层实现不一致
----------------------------------------------------------------------------------------------
// isNaN
1. 检查 toNumber 返回值，如果是 NaN 则返回 true，否则返回 false
2. 如果参数是 BigInt，就会报错，这不是一个安全的方法
3. 原理示例
  const isNaN = function(val) {
    return Object.is(Number(val), NaN)
  }
----------------------------------------------------------------------------------------------
// Number.isNaN
1. 判断一个值是否是数字，并且值等于 NaN
2. 是 isNaN 的增强版，ES6
3. 原理示例
  Number.isNaN = function(val) {
    if (typeof val !== 'number') {
      return false
    }
    return Object.is(val, NaN)
  }
```
