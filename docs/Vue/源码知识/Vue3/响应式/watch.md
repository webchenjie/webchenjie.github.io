---
title: Vue-源码知识-Vue3-响应式-watch
date: 2023-04-25
tags:
    - Vue
categories:
    - 技术
---

## 1. 简介

创建 ReactiveEffect 实例，然后根据 option 判断是否执行 run 函数

## 2. 过程

-   先会判断是 ref 或 reactive 类型，因为取值方式不同，如果是 reactive，option 中的 deep 默认是 true
-   中间会生成调度器，这个调度器会生成一个 promise 的任务队列，每一项就是 job，这个 job 本质上就是 watch 上的回调函数
-   其中 Vue 通过 callWithAsyncErrorHandling 这个函数来捕获了可能会出现的异常去统一处理
-   依赖收集是 watch 内部自己主动循环进行触发的，和其他的 getter 行为不一样

## 3. 调度器

-   在 computed 和 watch 中都有涉及到调度器的概念
-   调度器主要作用分为两个
    -   控制执行顺序，主要是 effect 中判断了有调度器则优先执行
    -   控制执行规则，主要是通过 promise 创建了异步队列进行控制
