---
title: Vue-源码知识-Vue3-响应式-reactive
date: 2023-04-09
tags:
    - Vue
categories:
    - 技术
publish: false
---

## 简介

使用 proxy 创建代理对象，在生成时做了 WeakMap 的缓存，如果有则直接返回，没有则创建后缓存，最后返回 proxy 实例

## 过程

getter 和 setter 配合 Reflect 进行 get 和 set 操作，在 get 时进行 track 即依赖收集，在 set 时进行 trigger 即依赖触发

## 缺陷

-   reactive 只能对复杂数据类型进行使用，没办法使用简单数据类型，所以有 ref
-   reactive 的响应性数据，不可以进行解构，因为解构之后的数据就不是 proxy 实例，从而也就不是响应式数据了
    -   toRef
    -   toRefs
