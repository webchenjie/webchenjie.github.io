---
title: Date
date: 2020-07-04
---

``` js
// 获取
var today = new Date() // 无参时返回当前的日期时间对象
today.getFullYear() // 返回4位数的年份
today.getMonth() // 返回日期中的月份，返回值为0-11
today.getDate() // 返回日期中的天数
today.getDay() // 返回星期，返回值为0-6
today.getHours() // 返回小时
today.getMinutes() // 返回分钟
today.getSeconds() // 返回秒
today.getTime() // 返回表示日期的毫秒数
----------------------------------------------------------------------------------------------
// 设置
var today = new Date(年，月，日，时，分，秒) // 特定的日期
today.setFullYear(year) //设置4位数的年份
today.setMonth(mon) // 设置日期中的月份0-11
today.setDate(date) // 设置日期
today.setDay(day) // 设置星期
today.setHours(h) // 设置小时
today.setMinutes(m) // 设置分钟
today.setSeconds(s) // 设置秒
today.setTime(t) // 以毫秒数设置日期，会改变整个日期
```