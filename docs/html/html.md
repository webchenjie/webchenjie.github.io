---
title: html
date: 2020-07-12
---

``` js
1. html是超文本标记语言
2. 声明: <!DOCTYPE HTMl>标准盒子模型
3. 编码: <meta http-equiv="content-Type" content="text/html;charset=utf-8" />
4. 标题: <h1 /> ~ <h6 />
5. 段落: <p />
6. 换行: <br />
7. 水平线: <hr />
8. 保留文本格式: <pre>内容</pre>
9. html标签属性: <标签名 属性名1="属性值" 属性名2="属性值" />
10. 文字斜体: <i></i>或者<em></em>
11. 加粗: <b></b>或者<strong></strong>
12. 下标: <sub></sub>
13. 上标: <sup></sup>
14. 特殊符号: &lt; === '<'  &gt; === '>'  &reg; === '已注册'  &copy; === '版权'  &trade; === '商标'  &nbsp; === 空格
15. 无序列表: <ul><li></li></ul>,ul的type值: disc圆点(默认)、square正方形、circle空心圆
16. 有序列表: <ol><li></li></ol>,ol的type值: 1(默认)、a、A、i、I
17. 定义列表: <dl><dt>定义列表项(可多个)</dt><dd>列表项描述(可多个)</dd></dt>
18. 开发中ul和ol的编号去掉,使用图片代替
19. 图像标签: <img src="url" alt="图像显示不出来时显示的文字" height="数值或百分比" width="数值或百分比" />
20. 超链接标签: <a href="url" name="链接命名(锚名)" title="链接提示文字" target="_self(本窗口打开)/_blank(打开新窗口)">内容</a>
21. 当超链接的href的值为空时点击会刷新页面
22. 锚链接#锚名,定位锚可以没内容,锚链接不同页面时用页面名称#锚名
23. 邮件链接: <a href="mailto: 邮件地址">内容</a>
24. 文件下载: <a href="下载文件的地址">内容</a>,下载文件要压缩,直接写下载文件名会打开文件
25. src为替换元素使用,href为外部链接使用
26. 表格
    <table>
      <caption>表格标题</caption>
      <thead>
        <tr><th>表头</th></tr>
      </thead>
      <tbody>
        <tr><td>主体</td></tr>
      </tbody>
      <tfoot>
        <tr><td>脚注</td></tr>
      </tfoot>
    </table>
    <thead/><tbody/><tfoot/>用于划分结构
    <th/>用来定义表头标题(加粗居中)
    <caption/>表格标题
27. <table>属性:
    width:  px、%
    align: left、center、right // 相对于周围元素的对齐方式
    border: 1px // 表格边框宽度
    bgcolor: 表格背景颜色
    cellpadding: 单元格边沿与其内容之间的空白，px、%
    cellspacing: 单元格之间的空白,px、%
    frame: 外边框属性,void(不显示)、above(上)、below(下)、hsides(上下)、vsides(左右)、lhs(左)、rhs(右)、box/border(全部)
    rules: 内边框属性,none(没有线条)、groups(位于行组和列组之间的线条)、rows(位于行之间的线条)、cols(位于列之间的线条)、all(位于行和列之间的线条)
28. <tr>属性:
    align: left center right justify char // 水平对齐
    valign: top middle bottom baseline // 垂直对齐
    bgcolor: 背景颜色
29. <th>、<td>属性:
    align: left center right justify char // 水平对齐
    valign: top middle bottom baseline // 垂直对齐
    bgcolor: 背景颜色
    width: 宽
    height: 高
30. <thead>、<tbody>、<tfoot>属性:
    align: left center right justify char // 水平对齐
    valign: top middle bottom baseline // 垂直对齐
31. 跨行跨列:
    <td colspan="2" /> //所在行少一列
    <td rowspan="2" /> //跨的行少一列
32. 嵌入表格时要是完整表格结构,放在<td>标签中,用表格布局时不设置border,少使用嵌套,少使用跨行跨列

----------------------------------------------------------------------------------------------
```