---
title: Vue-源码知识-Vue3-编译器-parse
date: 2023-07-02
tags:
    - Vue
categories:
    - 技术
---

## 简介

解析（parse）template 模板，生成 AST

> AST 本质上也是个对象

## 过程

-   递归的使用 `parseChildren` 方法进行解析
-   其中会根据是否是标签或文本等类型进行不同的解析，并使用 type 字段进行保存，表示当前节点是什么类型
-   解析完成一部分会把模板的游标进行更新，即模板字符串的下标，表示当前解析到哪个位置
-   最终生成 AST 对象

### 例子

```html
<div>hello world</div>
```

上面这段代码的解析可以拆分为以下步骤：

1.  解析 <：由初始状态进入标签开始状态
2.  解析 div：由标签开始状态进入标签名称状态
3.  解析 >：由标签名称状态进入初始状态
4.  解析 hello world：由初始状态进入文本状态
5.  解析 <：由文本状态进入标签开始状态
6.  解析 /：由标签开始状态进入结束标签状态
7.  解析 div：由结束标签状态进入结束标签名称状态
8.  解析 >：由结束标签名称状态进入初始状态

经过这些解析会得到三个 token：

-   开始标签：`<div>`
-   文本节点：hello world
-   结束标签：`</div>`

当有了这些 token，Vue 会使用 `递归下降算法` 进行构建生成 AST

```js
const ast = {
    type: 0,
    children: [
        {
            type: 1,
            tag: 'div',
            tagType: 0,
            props: [],
            children: [
                {
                    type: 2,
                    content: 'hello world'
                }
            ]
        }
    ],
    loc: {},
    ...
}
```
