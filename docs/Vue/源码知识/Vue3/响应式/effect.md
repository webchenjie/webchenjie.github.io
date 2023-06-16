---
title: Vue-源码知识-Vue3-响应式-effect
date: 2023-04-09
tags:
    - Vue
categories:
    - 技术
---

## 简介

创建 ReactiveEffect 实例，执行实例中的 run 函数，run 函数会把当前实例保存在全局变量上（这个主要在收集依赖时需要使用），并且执行传入的 fn 函数，即用户自定义的函数，执行用户的自定义函数就会触发 get 操作，然后进行依赖收集，当修改时触发 set 操作，然后进行依赖触发

## 过程

-   reactive 如果是复杂类型则会有一个 WeakMap 的数据结构对应的一对多的依赖对象，从而才能知道对应的哪个属性哪个依赖的触发

    -   WeakMap（数据结构）
        -   key: 响应式对象
        -   value: Map 对象
            -   key: 响应式对象的指定属性
            -   value: Set 对象

-   ref 如果是简单类型则会有 Set 对象，其实就是 WeakMap 中的 Set 对象，也就是简单数据类型比复杂数据类型的依赖收集和触发会简单些
