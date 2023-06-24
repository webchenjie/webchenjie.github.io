(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{687:function(t,e,r){"use strict";r.r(e);var a=r(11),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h2",{attrs:{id:"简介"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),r("p",[t._v("所谓的编译器就是 Vue 中的 comiler，它会把 template 转换为 render")]),t._v(" "),r("p",[t._v("主要是三大步骤：")]),t._v(" "),r("ul",[r("li",[t._v("解析（parse）template 模板，生成 AST")]),t._v(" "),r("li",[t._v("转化（transform）AST，得到 JS AST")]),t._v(" "),r("li",[t._v("生成（generate）render 函数")])]),t._v(" "),r("h3",{attrs:{id:"什么是-dsl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-dsl"}},[t._v("#")]),t._v(" 什么是 DSL？")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("领域特定语言（DSL）指的仅为某个适用的领域而设计的，并提供解决方案，在 Vue 中可以简单理解为就是把 template 模板编译成 render 函数的过程就是 compiler 编译器")])]),t._v(" "),r("li",[r("p",[t._v("正常的编译过程可以理解为把 A 语言转换为 B 语言，即源代码转换为目标代码，流程主要是以下步骤")]),t._v(" "),r("ul",[r("li",[t._v("源代码 ==> 词法分析 ==> 语法分析 ==> 语义分析 ==> 中间代码生成 ==> 中间代码优化 ==> 目标代码生成 ==> 目标代码优化 ==> 目标代码")])])]),t._v(" "),r("li",[r("p",[t._v("在 Vue 中，把 template 转换为 render 会比较简单些，主要是以下步骤")]),t._v(" "),r("ul",[r("li",[t._v("源代码（template） ==> 错误分析 ==> parse（生成 AST） ==> transform（生成 js AST） ==> 目标代码（render）")])])])]),t._v(" "),r("h3",{attrs:{id:"什么是-ast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-ast"}},[t._v("#")]),t._v(" 什么是 AST？")]),t._v(" "),r("ul",[r("li",[t._v("抽象语法树（AST）指的是源代码语法结构的一种抽象表示")])]),t._v(" "),r("h3",{attrs:{id:"什么是-js-ast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#什么是-js-ast"}},[t._v("#")]),t._v(" 什么是 JS AST？")]),t._v(" "),r("ul",[r("li",[t._v("在生成了 AST 后，通过 transform 会生成 JS AST")]),t._v(" "),r("li",[t._v("JS AST 和 AST 的主要区别是新增了 codegenNode 节点，即代码生成节点")])])])}),[],!1,null,null,null);e.default=s.exports}}]);