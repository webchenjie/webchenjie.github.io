---
title: Vue-源码知识-Vue3-响应式-computed
date: 2023-04-10
tags:
    - Vue
categories:
    - 技术
---

## 1. 简介

创建 ComputedRefImpl 实例，然后返回，和 ref 的 RefImpl 类似，主要通过 ReactiveEffect 中的优先执行 computed 的 effect 逻辑来触发 schedule 调度器，在调度器中会再次触发对应的依赖，就会执行使用 computed 的 run 函数

## 2. 过程

-   ComputedRefImpl 中通过 dirty 变量来控制 run 的执行和 triggerRefValue 的触发
-   想要访问计算属性的值，必须通过 .value，因为它内部和 ref 一样是通过 get value 来进行实现的
-   每次 .value 时都会触发 trackRefValue 即依赖收集
-   在依赖触发时，是先触发 computed 的 effect，再触发非 computed 的 effect
    -   effect 的 ReactiveEffect 中的 schedule 调度器（调度器会再触发依赖）和 computed 属性搭配使用
    -   即先触发 computed 的 effect，然后执行 schedule 调度器
    -   然后执行非 computed 的 effect，执行 run 函数即 fn
    -   也就是说 computed 中会触发多次依赖触发的操作
