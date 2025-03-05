(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{576:function(s,t,a){"use strict";a.r(t);var n=a(2),r=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" npm install pm2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("g\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("常用命令")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    pm2 start app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启动")]),s._v("\n    pm2 list "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看启动列表")]),s._v("\n    pm2 restart AppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 重启, AppName和id是pm2 list中表格展示的名称和id")]),s._v("\n    pm2 stop AppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 停止, AppName和id是pm2 list中表格展示的名称和id")]),s._v("\n    pm2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("delete")]),s._v(" AppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 删除, AppName和id是pm2 list中表格展示的名称和id")]),s._v("\n    pm2 info AppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看基本信息, AppName和id是pm2 list中表格展示的名称和id")]),s._v("\n    pm2 log AppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看日志, 会自动把console记录到文件中去, AppName和id是pm2 list中表格展示的名称和id")]),s._v("\n    pm2 monit AppName"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("id "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 查看内存、cpu、console 日志等信息, AppName和id是pm2 list中表格展示的名称和id")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" node app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js和nodemon app"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("js启动"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 如果进程崩溃就无法访问\n   pm2自带进程守护"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" 如果遇到进程崩溃会自动重启\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("常用配置")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// json文件")]),s._v("\n    pm2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json文件\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"apps"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"name"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pm2-config-name'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// pm2 list中表格展示的名称")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"script"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"app.js"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启动的文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"watch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 进程守护")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"instances"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'auto'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 启用多进程，电脑几核就是几核，也可以配置数字，比如4")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"ignore_watch"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"node_modules"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 忽略监听的文件")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"error_file"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs/err.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 错误日志存放的地方")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"out_file"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"logs/out.log"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// console日志存放的地方")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token string-property property"}},[s._v('"log_date_format"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"YYYY-MM-DD HH:mm:ss"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 每条日志记录都会加入时间")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    在"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json文件的script中使用 pm2 start pm2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("config"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("json\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);