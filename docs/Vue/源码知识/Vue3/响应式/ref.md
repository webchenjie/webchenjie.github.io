---
title: Vue-源码知识-Vue3-响应式-ref
date: 2023-04-09
tags:
    - Vue
categories:
    - 技术
publish: false
---

## 简介

创建 RefImpl 实例，然后返回，在创建时判断了当前是否是 ref 类型数据，如果是则直接返回，不是再去创建

> 判断是否是 ref 对象是通过对象中的 \_\_v_isRef 这个属性进行判断，这个值是个 boolean

## 过程

-   复杂类型

如果是复杂类型则直接调用 reactive 进行创建响应式赋值给 RefImpl 中的 \_value

-   简单类型

如果是简单类型则是直接使用 class 中的 getter 和 setter 属性进行创建的，其实没有响应式，需要用户手动触发 .value 的访问从而触发 get 和 set 的操作

## 依赖收集和触发

RefImpl 中有个 dep 属性，对应的是一个 Set 对象，对应的 ReactiveEffect 依赖就存放在这里，这里的依赖没有 WeakMap 缓存

-   复杂类型

如果是复杂类型则会触发两个依赖收集，一个是 ref 本身的 get 和 set，一个是 reactive 中的 get 和 set

-   简单类型

如果是简单类型则就是把依赖存放在 dep 属性中
