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

新旧节点的所有挂载和更新情况，可以被分为九种场景：

-   旧节点为纯文本时：

    -   新节点为纯文本：执行文本替换操作
    -   新节点为空：删除旧节点
    -   新节点为数组：清空文本，添加多个新节点

-   旧节点为空时：

    -   新节点为纯文本：添加新节点
    -   新节点为空：不做任何事情
    -   新节点为数组时：添加多个新节点

-   旧节点为数组时：
    -   新节点为纯文本：删除所有旧节点，添加新节点
    -   新节点为空：删除所有旧节点
    -   新节点为数组时：进行 diff 操作

## 过程

DOM 环境下使用的 API：

-   创建节点：document.createElement(type)

-   设置节点内容：el.textContent = text

-   挂载节点： el.insertBefore(child)

### 元素节点

#### 挂载

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

#### 更新

-   触发 patchElement 方法，在里面主要更新子节点和更新 props

-   如果新旧两个节点的 type 和 key 相同，则会认为是同一个节点，如果是不同类型的节点进行更新，会直接把旧节点进行删除，然后进行新节点的挂载

-   diff 算法出现的场景是旧节点是多个子节点并且新节点也是多个字节点的场景

### 文本节点

-   挂载： document.createTextNode(text) + el.insertBefore(child)
-   更新：document.nodeValue = text

### 注释节点

-   挂载： document.createComment(text) + el.insertBefore(child)
-   更新：n1.el = n2.el（n1 是旧节点、n2 是新节点）

### 片段节点

-   挂载：会遍历里面的子 节点生成为文本节点进行挂载
-   更新：el.textContent = text

### 组件节点

-   挂载

    -   创建出组件的实例对象，对象里面的 vnode 属性指向 vnode，vnode 里面的 components 属性指向这个实例对象

        ```js
        const instance = {
            uid: 0,
            vnode,
            type, // 组件 vnode 的类型
            subTree: null, // 执行 render 函数返回的 vnode
            effect: null,
            update: null,
            render: null // 组件的 render 函数
        }
        ```

    -   执行 vnode 中的 type 属性对象的 render 函数得到新的 vnode
        -   执行 render 函数使用 call 方式，把 this 指向了当前组件的实例
    -   触发 patch 函数进行挂载

-   更新
    -   实际上就是把旧组件的 DOM 节点直接移除，然后再把新的组件节点进行挂载
    -   组件中依赖的数据发生变化的时候，实际上就是重新执行了 render 函数获取到最新的 vnode 再进行挂载

#### 有状态组件

-   执行 data 的函数得到对象，使用 reavtive 把 data 进行包装，变成响应式数据
-   配合执行 render 函数时的 call 方法实现对应值的获取

### 属性相关的操作

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

### 生命周期

-   在解析组件之前会直接触发 beforeCreate，解析之后会触发 create
-   其他的生命周期则是会注册到一个对象缓存中，其中还会处理多个同一种生命周期的判断，即数组形式循环触发调用
-   在生命周期回调中去访问响应式数据是通过 bind 函数改变了 this 指向进行获取的

### setup 函数

-   如果有 setup 函数，则会执行拿到返回结果即 render 函数，然后把这个 render 函数赋值给组件的 render 函数，这样就完成了 setup 的挂载

### diff 算法

-   只有新旧两个节点都是多个子元素即数组形式才会进入 diff，判断是否是同一个节点是根据节点的类型和 key 两者是否一样

-   diff 指的是：添加、删除、打补丁、移动这四个行为

-   有以下五种场景，按顺序执行（定义变量 i 进行循环，两个数组取值进行比较）

#### 1. 自前向后的比对

-   旧节点：a、b、c
-   新节点：a、b、d

这种情况就是先从 a 和 a 比，b 和 b 比，c 和 d 比，如果中间有一个没有匹配上则会进入下一个场景的比对

#### 2. 自后向前的比对

-   旧节点：c、b、a
-   新节点：d、b、a

这种情况就是先从 a 和 a 比，b 和 b 比，c 和 d 比，如果中间有一个没有匹配上则会进入下一个场景的比对

#### 3. 新节点比旧节点多时的比对

-   新节点在后面

    -   旧节点：a、b
    -   新节点：a、b、c

-   新节点在前面

    -   旧节点：a、b
    -   新节点：c、a、b

这两种情况都是从新节点中获取到要插入的节点，然后拿到锚点（即要插入哪个节点的前面）进行插入

#### 4. 旧节点比新节点多时的比对

-   新节点在后面

    -   旧节点：a、b、c
    -   新节点：a、b

-   新节点在前面

    -   旧节点：c、a、b
    -   新节点：a、b

这两种情况都是把旧节点进行删除

#### 5. 乱序比对

-   这边需要先搞明白一个概念：`最长递增子序列`，它可以减少移动场景的计算

> 最长递增子序列：在一个给定的数值序列中，找到一个子序列，使得这个子序列元素的数值依次递增，并且这个子序列的长度尽可能得大

例子：有个节点是 1,3,2,4,6,5，而这个节点的递增子序列可以是以下几个结果，其中最长的就是 `最长递增子序列`

-   结果 1：1,3,6

-   结果 2：1,2,4,6

-   结果 3：...

比对过程：

-   旧节点：a、b、c、d、e
-   新节点：a、c、b、f、e

    -   生成新节点的 key 和新节点的位置（即下标）的 map 对象

    -   循环旧节点，并尝试进行 patch（打补丁）或 unmount（删除）旧节点

    -   针对移动和挂载的处理
        -   这边会生成 `最长递增子序列` 的下标数组进行计算移动
