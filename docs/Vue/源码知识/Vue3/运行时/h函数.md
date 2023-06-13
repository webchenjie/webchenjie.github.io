---
title: Vue-源码知识-Vue3-运行时-h函数
date: 2023-06-13
tags:
    - Vue
categories:
    - 技术
---

## 1. 简介

h 函数的作用是生成 vnode，它根据参数生成对应的 js 对象，生成的对象中会包含当前节点的类型以及子节点的类型和数据，后面 render 的时候会使用到

-   vnode 的本质就是一个 js 对象

## 2. 不同类型的 vnode

h 函数会根据不同的参数生成不同的 vnode，最终生成的 js 对象中会有个 `shapeFlag` 属性来表示当前是什么类型的节点，如果有 children，则会通过 `按位或` 运算生成

-   普通元素节点 + 文本子节点

```js
{
    __v_isVNode: true,
    shapeFlag: 9,
    children: '这是文本子节点',
    type: 'div'
}
```

-   普通元素节点 + 多个文本子节点（数组）

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

-   组件的 vnode

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
        render() { ... } // components 对象中的 render
    }
}
```

-   文本节点 + 文本子节点

```js
{
    __v_isVNode: true,
    shapeFlag: 8,
    children: '这是文本子节点',
    type: Symbol(Text)
}
```

-   注释节点 + 文本子节点

```js
{
    __v_isVNode: true,
    shapeFlag: 8,
    children: '这是文本子节点',
    type: Symbol(Comment)
}
```

-   片段节点 + 文本子节点

```js
{
    __v_isVNode: true,
    shapeFlag: 8,
    children: '这是文本子节点',
    type: Symbol(Fragment)
}
```

## 3. class 和 style 的增强

我们知道可以给 class 或 style 传递动态类型，比如对象或数组或字符串，在生产 vnode 的时候，会对 props 中的 class 和 style 进行特殊处理，如果传递的是可迭代对象，则会遍历把对应的属性加入到 class 或 style 中，这就实现了动态传递的功能
