---
title: Vue-源码知识-Vue3-运行时-render函数
date: 2023-06-14
tags:
    - Vue
categories:
    - 技术
---

## 1. 简介

render 函数的作用就是根据 vnode 去创建对应的 DOM 元素，其中会根据 vnode 中的类型去创建不同的 DOM 节点

## 2. 挂载

-   触发 patch 方法，根据 vnode 中的 type 和 shapeFlag 的值来确定要进行哪种类型的节点挂载

-   在挂载方法中，会根据旧节点是否存在，从而进行挂载节点或更新节点的操作

-   挂载逻辑

    -   生成 DOM 标签
    -   生成标签中的内容
    -   处理属性内容（class/style）
    -   挂载节点

-   挂载后会把当前的 vnode 保存在 DOM 元素上，标识为旧节点

-   如果新节点是空的并且旧节点存在，Vue 会直接把旧节点删除

-   class 和其他属性的挂载逻辑

    -   如果是 class，则通过 el.className 挂载
    -   如果是其他属性，则通过 el.setAttribute 挂载
    -   如果是 value，则通过 el.value 挂载
    -   实际上 class 的设置可以通过 el.className 和 el.setAttribute 进行设置，Vue 使用 el.className 设置的原因是 className 比 setAttribute 的性能要好

-   style 属性挂载逻辑

    -   如果是 style 和 class 逻辑差不多，都是循环遍历通过 el.style.xxx = xxx 进行赋值
    -   赋值后会缓存 style 的值，如果后面再次改变了 style，会判断新的 style 有没有包含旧的 style，如果没有，则会把旧的进行移除

-   事件的挂载逻辑

    -   本质通过 addEventListener 进行事件添加，通过 removeEventListener 进行事件移除
    -   在事件中，Vue 通过 vei 即 vue event invokers 进行事件回调缓存，如果是同一个事件，一开始是回调 A，后面是回调 B，这种情况不会进行多次 add 和 remove，而是通过改变 vei 中的回调函数，因为 add 和 remove 会消耗性能

## 3. 更新

-   更新子节点，其中会 diff 算法的逻辑

-   更新节点的属性，包含新的属性和旧的属性

-   当新节点和旧节点不相同时，Vue 会直接把旧节点给删除，然后执行新节点的挂载
