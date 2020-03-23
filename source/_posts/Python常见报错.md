---
title: Python常见报错
date: 2020-03-01 20:02:19
tags: Python
---
**Python常见报错索引**

> 2020/3/1 21:00:14 

持续更新中...
电脑用户请在右侧本文目录进行索引
手机用户请在右上方点开目录(三点三横)按钮进行索引
<font color="#ffbe76">
推荐大家编程时使用PyCharm，检查错误非常方便
</font>

<font color="red">
<h4 id="TabSpaces">
inconsistent use of tabs and spaces in indentation
</h4></font>

> - 问题原因：空格（spaces）和缩进（tab）混用。
> - 解决方法：检查代码适当删除。

----------
<br/>

<!--more-->

<font color="red">
<h4 id="Tab">
expected an indented block
</h4></font>

> - 问题原因：缩进错误
> - 解决方法：在箭头指示处改正缩进

----------
<br/>

<font color="red">
<h4 id="InvalidS">
invalid syntax
</h4></font>


>  - 问题原因：语法错误
>- 括号不完全（括号不成对）
>- 缺少冒号
>- 使用了中文符号 
>
>  - 解决方法：
>- 使用IDLE的用户，看<span style="background:#ff7979;">红色标记</span>处，检查代码并修改；
>- 使用PyCharm的用户输出框箭头<font color=red>^</font>处，检查代码并修改。

----------
<br/>

<font color="red">
<h4 id="EOL">
EOL while scanning string literal
</h4></font>

> - 问题原因：引号未成对出现
 > - 解决方法：
>  - 使用IDLE的用户，查代码并修改；
>  - 使用PyCharm的用户输出框箭头<font color=red>^</font>处，检查代码并修改。

----------
<br/>

<font color="red">
<h4 id="EOF">
unexpected EOF while parsing
</h4></font>

> 问题原因：我仅在print缺引号时出现此报错
> 解决方法：那就检查代码看print的引号吧

----------
<br/>

<font color=red>
<h4 id="character">
 invalid character in identifier
</h4>
</font>

> 问题原因：使用了中文符号
> 解决方法：在报错出找到用错的符号并改正

-----
<br/>



<font color=red>
<h4 id="Unsupported" >
unsupported operand type(s) for ....
</h4>
</font>
请看下图：

![](https://static.oneplus.cn/data/attachment/forum/202003/01/212958vqfh13i3zeo89ggq.jpg)

这是我的好友[小余](https://user.qzone.qq.com/2313631959?source=aiostar "访问小余的Qzone")遇到的问题，由图可见代码中：
```python
x = input("请输入一个三位数")
a = x//100
......
```
>报错是：
><font color=red>unsupported operand type(s) for // 'str' and 'int'</font>
>即不支持字符串（str）和整型（int）取余（//）的操作
>那么我们调用[Python内置函数eval](https://www.runoob.com/python/python-func-eval.html "Python内置函数eval")即可。
（赋值类型参见这篇文章：[Python入门](https://yzyyz.top/2020/02/28/Python%E5%85%A5%E9%97%A8/ "python入门")）
```python
x = eval(input("请输入一个三位数"))
a = x//100
......
```



> 待更，最后编辑与2020/3/1 22:01:39 
