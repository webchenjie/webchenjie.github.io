---
title: Vue-源码知识-Vue3-编译器-transform
date: 2023-07-02
tags:
    - Vue
categories:
    - 技术
---

## 简介

转化（transform）AST，得到 JS AST

## 转换策略

我们知道从 AST 转化为 JS AST 本质上是一个对象结构的变化，变化的本质是为了后面更方便的解析对象，生成 render 函数

在转化的过程中，我们需要遵循如下策略：

-   深度优先
-   转化函数分离（针对不同的类型使用不同的方法进行转化）
-   上下文对象

## 过程

-   递归解析 AST
-   根据不同类型进行不同的解析
-   合并模板的差值表达式
-   生成 codegenNode
