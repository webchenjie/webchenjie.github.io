---
title: Vue-源码知识-Vue3-运行时-h函数
date: 2023-06-13
tags:
    - Vue
categories:
    - 技术
publish: false
---

## 简介

h 函数的作用是生成 vnode，它根据参数生成对应的 js 对象，生成的对象中会包含当前节点的类型以及子节点的类型和数据，后面 render 的时候会使用到

> vnode 的本质就是一个 js 对象

## 过程

Vue 中维护了一个 `shapeFlag` 的枚举值，其中不同的类型对应的不同的数值，下面所有关于 `shapeFlag` 值的生成的改变都是来源于这里

h 函数会根据传入的不同参数生成 vnode，其中第一次会根据父节点的类型来构建出一个 `shapeFlag` 的变量，用于标识当前是属于什么类型的节点，在执行到处理子节点的逻辑中，会再次根据父节点的 `shapeFlag` 的值和子节点的类型来改变 `shapeFlag` 的值（即通过 `按位或` 运算生成最终的 `shapeFlag` 的值），这样这个值就标识了当前的父节点和子节点的类型，在后面 render 的时候会去解析对应值从而得到对应的类型

-   `按位或` 运算可以简单理解为是把数值变成 32 位的二进制进行相比，只要一个为 1 结果就是 1，否则就是 0，然后再把二进制转为十进制

### 不同类型的 vnode

#### 元素节点 + 文本子节点

```js
{
    __v_isVNode: true,
    shapeFlag: 9,
    children: '这是文本子节点',
    type: 'div'
}
```

#### 元素节点 + 多个文本子节点（数组）

```js
{
    __v_isVNode: true,
    shapeFlag: 17,
    children: [
        {
            __v_isVNode: true,
            shapeFlag: 9,
            children: '这是文本子节点1',
            type: 'div'
        },
        {
            __v_isVNode: true,
            shapeFlag: 9,
            children: '这是文本子节点2',
            type: 'div'
        }
    ],
    type: 'div'
}
```

#### 文本节点 + 文本子节点

```js
{
    __v_isVNode: true,
    shapeFlag: 8,
    children: '这是文本子节点',
    type: Symbol(Text) // symbol
}
```

#### 注释节点 + 文本子节点

```js
{
    __v_isVNode: true,
    shapeFlag: 8,
    children: '这是文本子节点',
    type: Symbol(Comment) // symbol
}
```

#### 片段节点 + 文本子节点

```js
{
    __v_isVNode: true,
    shapeFlag: 8,
    children: '这是文本子节点',
    type: Symbol(Fragment) // symbol
}
```

#### 组件的 vnode

组件的本质也是一个对象或一个函数

```js
const components = {
    render() {
        const vnode = h('div', '这是一个 components')
        return vnode
    }
}
const vnode = h(components)
render(vnode, document.querySelector('#app'))
```

实际的 vnode

```js
{
    __v_isVNode: true,
    shapeFlag: 4,
    children: null,
    type: {
        data() {}, // components 对象中的数据
        render() { ... } // components 对象中的 render
    }
}
```

### class 和 style 的增强

我们知道可以给 class 或 style 传递动态类型，比如对象或数组或字符串，在生成 vnode 的时候，会对 props 中的 class 和 style 进行特殊处理，如果传递的是可迭代对象，则会遍历把对应的属性加入到 class 或 style 中，这就实现了动态传递的功能，最后把处理好的 class 和 style 赋值给 vnode 中的 props 属性进行保存
