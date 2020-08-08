---
title: linux
date: 2020-07-12
---

```js
// linux常用命令
1. ssh root@192.168.100.20 // 登录系统
2. ls // 查看当前文件夹下的文件和文件夹
3. ls -a // 查看当前文件夹下的文件和文件夹,包括以.开头的文件和隐藏文件
4. ll // 和2一样,显示不同,一个平铺,一个列表,功能一样
5. clear // 清屏
6. mkdir a // 创建一个a的文件夹
7. rm -rf a // 删除a文件夹,-r是递归删除,-f是强制删除
8. cd dist // 切换到dist目录中去
9. mv index.html index1.html // 把index.html改名变成index1.html
10. mv a.js ../a.js // 把a.js移动到上一级
11. cp a.js a1.js // 把a.js拷贝成a1.js
12. rm a.js // 删除a.js文件,不用加-rf参数
13. touch a.js // 创建a.js文件
14. vi/vim a.js // 进入a.js编辑,输入i进行编辑,按esc退出编辑,按w保存,按:q退出编辑器,按:q!强制退出
15. cat a.js // 查看a.js的内容,直接打印在控制台上
16. head a.js // 查看a.js的内容(前几行)
17. tail a.js // 查看a.js的内容(后几行)
18. grep "babel" package.json // 在package.json中查找babel关键字
```
