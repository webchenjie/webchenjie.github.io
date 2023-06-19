---
title: Vue-源码知识-Vue3-运行时-render函数
date: 2023-06-14
tags:
    - Vue
categories:
    - 技术
---

## 简介

render 函数的作用就是根据 vnode 去渲染对应的 DOM 元素，其中会根据 vnode 中的类型去创建不同的 DOM 节点

## 过程

以下主要分析 Element 元素节点类型的挂载更新逻辑

### 挂载

-   如果新节点是空的并且旧节点存在，则会执行删除动作

-   触发 patch 方法，根据 vnode 中的 type 和 shapeFlag 的值来确定要进行哪种类型的节点挂载（shapeFlag 使用 `按位与` 运算计算）

> `按位与` 运算可以简单理解为是把数值变成 32 位的二进制进行相比，只有两个都为 1 结果才是 1，否则就是 0，然后再把二进制转为十进制

-   确定了类型，就可以进行挂载操作，挂载函数会判断是否有旧节点，如果有则是更新，如果没有则是挂载

-   挂载逻辑

    -   生成 DOM 标签
    -   生成标签中的内容
    -   处理 props（class/style）
    -   挂载节点

-   挂载后会把当前的 vnode 保存在 DOM 元素上，标识为旧节点

### 更新

-   触发 patchElement 方法，在里面主要更新子节点和更新 props

-   如果新旧两个节点的 type 和 key 相同，则会认为是同一个节点，如果是不同类型的节点进行更新，会直接把旧节点进行删除，然后进行新节点的挂载

-   diff

### 文本节点、注释节点、片段节点

-   对于这三种节点的挂载更新比较简单，这边不描述，原理也是直接调用 DOM API

## 属性相关的操作

-   class 和其他属性的挂载逻辑

    -   如果是 class，则通过 el.className 挂载
    -   实际上 class 的设置可以通过 el.className 和 el.setAttribute 进行设置，Vue 使用 el.className 设置的原因是 className 比 setAttribute 的性能要好

-   style 属性挂载逻辑

    -   如果是 '--' 开头的，则认为是 CSS 变量，会使用 style.setProperty 进行挂载
    -   如果是 style 和 class 逻辑差不多，都是循环遍历通过 el.style.xxx = xxx 进行赋值
    -   赋值后会缓存 style 的值，如果后面再次改变了 style，会判断新的 style 有没有包含旧的 style，如果没有，则会把旧的进行移除

-   其他属性的挂载逻辑

    -   如果是 value，则通过 el.value 挂载
    -   如果是 el 中的某个属性（key in el），则通过 el[key] = xxx 挂载
    -   如果是其他属性，则通过 el.setAttribute 挂载

-   事件的挂载逻辑

    -   本质通过 addEventListener 进行事件添加，通过 removeEventListener 进行事件移除
    -   会过滤掉 onUpdate 的事件，这个是 v-model 的事件
    -   在事件中，Vue 通过 vei 即 vue event invokers 进行事件回调缓存，如果是同一个事件，一开始的回调函数是 A，后面改成了回调函数 B，这种情况不会进行多次 add 和 remove，而是通过改变 vei 中的回调函数，因为 add 和 remove 会消耗性能
