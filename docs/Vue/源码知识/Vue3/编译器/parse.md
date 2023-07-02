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
-   其中会根据是否是标签或文本等类型进行不同的解析
-   解析完成一部分会把模板的游标进行更新，即模板字符串的下标，表示当前解析到哪个位置
-   最终生成 AST 对象
