---
title: Array
date: 2020-07-04
---

```js
// 创建数组
1. new Array(3) // 3表示数组长度，如果只有一个参数且是数值则代表长度，如果不是数值则代表内容
2. var arr = new Array(3, '4', true) // 3, '4', true 表示数组内容
3. var arr = [3, '4', true] // 3, '4', true 表示数组内容
4. console.log(arr[0]) // 读取数组下标对应的值
5. console.log(arr.length) // 返回数组的长度,也等于最后一个下标 + 1
----------------------------------------------------------------------------------------------
// 遍历数组
for(var i = 0; i < arr.length; i++) { arr[i] }
----------------------------------------------------------------------------------------------
// 栈方法
1. arr.push(1) // 把1添加到arr的尾部,返回新数组的长度Number
2. arr.unshift(1) // 把1添加到arr的头部,返回新数组的长度Number
3. arr.pop() // 删除数组最后一个元素,返回被删除的元素
4. arr.shift() // 删除数组第一个元素,返回被删除的元素
----------------------------------------------------------------------------------------------
// 操作数组
1. arr.sort(function(a, b) { return b - a }) // 降序
2. arr.sort(function(a, b) { return a - b }) // 升序
  1. 默认按照 ASLL 码先后书序排序（10 排在 2 的前面）
3. arr3 = arr1.concat(arr2) //用于连接两个或多个数组
4. arr.join(',') // 将数组转换成字符串,返回转换后的字符串,默认用逗号分隔,通过参数改变分隔符
5. arr.reverse() // 数组反序,返回转换后的数组
6. arr.slice(0, 3) // 不传参数, 相当于拷贝, 数组截取,返回截取的数组,从下标0开始截取到3结束,如没传3则表示从0截取到最后,参数如有负数则以arr.length + 负数再计算
7. arr.splice(2, 2) // 数组删除,返回被删除的元素所组成的数组,删除arr下标为2的后2个元素
8. arr.splice(2, 0, 3) // 数组插入,返回一个空数组(没有被删除的元素),在下标为2的后面插入3
9. arr.splice(2, 2, 3) // 数组替换,返回被删除的元素所组成的数组,在下标为2的后面删除2个元素,再插入3
10. arr.indexOf(7, 3) // 数组查找,返回下标,查找7在数组中从下标3开始找位置,如果找不到返回 -1
11. arr.lastIndexOf(7, 3) // 数组查找,返回下标,从后往前找,查找7在数组中从下标3开始找位置,如果找不到返回 -1
----------------------------------------------------------------------------------------------
// es5、es6数组常用方法
1. map: 有返回值,返回一个新的数组,每个元素为调用func的结果
let list = [1, 2, 3, 4, 5]
let other = list.map((val, index) => {
  return val * 2
});
console.log(other) // [2, 4, 6, 8, 10]
2. filter: 有返回值,返回一个符合func条件的元素数组
let list = [1, 2, 3, 4, 5]
let other = list.filter((val, index) => {
  return val > 2
});
console.log(other) // [3, 4, 5]
3. some: 返回一个boolean,判断是否有元素符合func条件,如果有一个元素符合func条件,则循环会终止
let list = [1, 2, 3, 4, 5]
list.some((val, index) => {
  return val === 6
}) // 返回false,如果条件改为 val === 1 则返回 true
4. every: 返回一个boolean,判断每个元素是否符合func条件,有一个元素不满足func条件,则循环终止,返回false
let list = [1, 2, 3, 4, 5]
list.every((val, index) => {
  return d < 3
}) // 返回false,如果条件改为 val < 6 则返回 true
5. forEach: 没有返回值,只针对每个元素调用func,无法使用continue,break,return等终止循环
let list = [1, 2, 3, 4, 5]
let other = []
list.forEach((val, index) => {
  other.push(val * 2)
});
console.log(other) // [2, 4, 6, 8, 10]
6. for in: for-in循环实际是为循环”enumerable“对象而设计的,for in也可以循环数组,但是不推荐这样使用,for–in是用来循环带有字符串key的对象的方法
7. for of: for of为ES6提供,具有iterator接口,就可以用for of循环遍历它的成员。也就是说,for of循环内部调用的是数据结构的Symbol.iterator方法,for of循环可以使用的范围包括数组、Set和Map结构、某些类似数组的对象(比如arguments对象、DOM NodeList对象)、后文的Generator对象,以及字符串,有些数据结构是在现有数据结构的基础上,计算生成的,比如,ES6的数组、Set、Map都部署了以下三个方法,调用后都返回遍历器对象
8. Array.from(伪数组, mapfn, this) // 用于把伪数组转换成数组或初始化伪数组,可以只传一个参数
9. Array.of(1, 2, 3) // 相当于push,或生成新数组,如果参数只有一个则返回单个元素参数的数组
10. Array.fill(8, 2, 4) // 从数组第2项到第4项换成8
    Array.fill(8) // 当Array长度为多少时,内容都是8
11. Array.find(fn) // 查找符合条件的内容,只返回第一个(fiflter返回全部)
12. Array.findIndex(fn) // 查找符合条件的内容,只返回第一个的索引
13. arr.includes(参数) // 判断arr是否包含参数,返回布尔值
14. arr.flat(深度) // 数组扁平化
----------------------------------------------------------------------------------------------
1. 如果是有树状结构的数组需要合并成一维数组需要通过concat和扩展运算符一起递归调用
    function flatten(arr) {
      return [].concat(...arr.map(item => [].concat(item, ...flatten(item.subArr))))
    }
2. 如果需要把二维数据降维需要通过concat和apply
    [].concat.apply([], arr)
3. 数组降维, 原理是2, 相当于1
  function flat(arr) {
    const isDeep = arr.some(item => item instanceof Array)
    if (!isDeep) {
      return arr // 已经是flatern
    }
    const res = Array.prototype.concat.apply([], arr)
    return flat(res) // 递归
  }
4. 数组去重
    传统方式:
      function unique(arr) {
        const res = []
        arr.forEach(item => {
          if (res.indexOf(item) < 0) {
            res.push(item)
          }
        })
        return res
      }
    ES6 Set:
    function unique(arr) {
      const set = new Set(arr)
      return [...set]
    }
```
