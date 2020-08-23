---
title: Date
date: 2020-07-04
---

```js
// 获取
1. var today = new Date() // 无参时返回当前的日期时间对象
2. today.getFullYear() // 返回4位数的年份
3. today.getMonth() // 返回日期中的月份,返回值为0-11
4. today.getDate() // 返回日期中的天数
5. today.getDay() // 返回星期,返回值为0-6
6. today.getHours() // 返回小时
7. today.getMinutes() // 返回分钟
8. today.getSeconds() // 返回秒
9. today.getTime() // 返回表示日期的毫秒数
----------------------------------------------------------------------------------------------
// 设置
1. var today = new Date(年,月,日,时,分,秒) // 特定的日期
2. today.setFullYear(year) //设置4位数的年份
3. today.setMonth(mon) // 设置日期中的月份0-11
4. today.setDate(date) // 设置日期
5. today.setDay(day) // 设置星期
6. today.setHours(h) // 设置小时
7. today.setMinutes(m) // 设置分钟
8. today.setSeconds(s) // 设置秒
9. today.setTime(t) // 以毫秒数设置日期,会改变整个日期
----------------------------------------------------------------------------------------------
// 其他
1. var today = new Date()
2. today.toUTCString() // 根据世界时 (UTC) 把 Date 对象转换为字符串
```
