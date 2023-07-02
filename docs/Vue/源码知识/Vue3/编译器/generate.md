---
title: Vue-源码知识-Vue3-编译器-generate
date: 2023-07-02
tags:
    - Vue
categories:
    - 技术
---

## 简介

生成（generate）render 函数

## 函数生成方案

-   函数本质上就是一段字符串
-   字符串的拼接方式
-   字符串拼接的格式处理
    -   换行使用 '\n'
    -   缩进使用空格

## 过程

-   解析 JS AST 生成函数字符串
-   最后通过 new Function 转化为 render 函数
