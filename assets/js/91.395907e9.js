(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{687:function(t,e,a){"use strict";a.r(e);var r=a(11),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),a("p",[t._v("创建 ReactiveEffect 实例，然后根据 option 判断是否执行 run 函数")]),t._v(" "),a("h2",{attrs:{id:"过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[t._v("#")]),t._v(" 过程")]),t._v(" "),a("ul",[a("li",[t._v("先会判断是 ref 或 reactive 类型，因为取值方式不同，如果是 reactive，option 中的 deep 默认是 true")]),t._v(" "),a("li",[t._v("中间会生成调度器，这个调度器会生成一个 promise 的任务队列，每一项就是 job，这个 job 本质上就是 watch 上的回调函数")]),t._v(" "),a("li",[t._v("其中 Vue 通过 callWithAsyncErrorHandling 这个函数来捕获了可能会出现的异常去统一处理")]),t._v(" "),a("li",[t._v("依赖收集是 watch 内部自己主动循环传入的依赖（即第一个参数）进行触发的，和其他的 getter 行为不一样")])]),t._v(" "),a("h2",{attrs:{id:"调度器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调度器"}},[t._v("#")]),t._v(" 调度器")]),t._v(" "),a("ul",[a("li",[t._v("在 computed 和 watch 中都有涉及到调度器的概念")]),t._v(" "),a("li",[t._v("调度器主要作用分为两个\n"),a("ul",[a("li",[t._v("控制执行顺序，主要是 effect 中判断了有调度器则优先执行")]),t._v(" "),a("li",[t._v("控制执行规则，主要是通过 promise 创建了异步队列进行控制")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);