---
title: Python入门 数值操作及math库
date: 2020/3/2 18:15:58 
tags: Python
---
<h3 id="pytype">一、 Python基础</h3>
<h4 id="tab_suitable"> 正确使用缩进</h4>

缩进，即制表符（键盘上Tab键）用来决定代码之间的逻辑关系，所以在使用选择结构和循环结构，或者是编写函数的时候，务必注意缩进的使用，若使用不恰当，会造成程序<font color=#ff0000>报错</font>,如：

```python
while True:
print("Hello world")
```
<!--more-->
执行后，在PyCharm中则会显示：
>  <font color=red> print("Hello world")</font>
> <font color=red>^</font>
> <font color=red>IndentationError: expected an indented block</font>
(想要了解更多常见错误，请戳：[Python常见报错](https://yzyyz.top/2020/03/01/Python%E5%B8%B8%E8%A7%81%E6%8A%A5%E9%94%99/))
正确的写法为：
```python
while True:
	print("Hello world")
```
执行后，在PyCharm中则会显示：
>Hello world
>Hello world
>Hello world
>Hello world
>Hello world
>.....

----------


<h4 id="Punctuation"> 正确使用符号</h4>
众所周知，编程中实用的符号都为英文符号，初入的萌新大多都会出现：

> <font color=red>SyntaxError: invalid character in identifier </font>


这正是因为符号使用错误，由下表可见，中英文符号的差距存在差别，编程时值得注意。  
<table id="tfhover" class="tftable" border="1">
<tr style="text-align:center;"><td><strong>英文符号</strong></td><td><strong>中文符号</strong></td></tr>
<tr style="text-align:center;"><td>;</td><td >；</td></tr>
<tr style="text-align:center;"><td>:</td><td>：</td></tr>
<tr style="text-align:center;"><td>""</td><td>“” </td></tr>
</table>

----------


<h4 id="explan"> 注释的用法</h4>


- 注释单行内容：

  使用 <font color=red># </font>注释

- 注释多行内容：
 使用 <font color=red>' ' '</font>或者<font color=red>" " " </font>注释

```python
while True:              #开始循环
	print("Hello world") #打印文本
'''
我是注释示例
运行代码将忽视我
'''
"""
我也是注释示例
运行代码将忽视我
"""
```

----------

  
<h3 id="IdentifierAndName">二、标识符及命名规则</h3>
<h4 id="Identifier">标识符</h4>
Python中对标识符构成的要求：以数字或者下划线（_）开头，后跟字母、数字、下划线。
<table id="Name" class="Name" border="1">
<tr style="text-align:center;"><td><strong>合法名称示例</strong></td><td><strong>非法名称示例</strong></td></tr>
<tr style="text-align:center;"><td>x</td><td >2x</td></tr>
<tr style="text-align:center;"><td>num_1</td><td>a-b</td></tr>
<tr style="text-align:center;"><td>python666</td><td>Py 666</td></tr>
</table>
同时，标识符区分大小写，命名时最好选择能见文知义的名称。
推荐使用<a href="https://baike.baidu.com/item/%E9%A9%BC%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%86%99/3976226?fr=aladdin" title="百度百科：驼峰式大小写">驼峰式命名</a>，如欲写一个意为my love的标识符，则写MyLove、My_Love。

不要使用单、双下划线开头，Python中会有冲突（尽量避免使用）
不要使用关键字作为标识符，如 False，True

----------

<h3 id="bianlFuz">三、变量与赋值</h3>

<h4 id="BianL">变量</h4>

Python不需要申明数据类型，它能自动识别赋值的类型可用函数type(变量名)判断数据类型。
```python
m=2
type(m)
```
执行该代码就会输出以下内容，说明赋给m的值2是整型（int）

<figure class="highlight python"><table><tbody><tr><td class="gutter"><pre><span class="line">1</span><br></pre></td><td class="code"><pre><span class="line"><span class="string">&lt;class 'int'&gt;</span></span><br></pre></td></tr></tbody></table></figure>
 
<table id="fz" class="fz" border="1">
<tr style="text-align:center;"><td><strong>值</strong></td><td><strong>类型</strong></td></tr>
<tr style="text-align:center;"><td>2</td><td >int-整型</td></tr>
<tr style="text-align:center;"><td>2.6</td><td>float-浮点型</td></tr>
<tr style="text-align:center;"><td>园长</td><td>str-字符串</td></tr>
<tr style="text-align:center;"><td>2=3j</td><td>complex-复数</td></tr>
<tr style="text-align:center;"><td>True</td><td>bool-布尔值</td></tr>
<tr style="text-align:center;"><td>[1,2,3,4]</td><td>list-列表</td></tr>
</table>


<h4 id="FuZ">赋值</h4>


- 变量=表达式

```python
x = 100

```

- 链式赋值

```python
x = y = z = 100

```

- 解包赋值

```python
a , b = 100, 50
```

<br/>
<hr/>
<br/>

<h3 id="InputAndPrint">四、数据的输入与输出</h3>

- 输入 **input()**
- 输出 **print()**
<br/>

<hr/>
<h3 id="ShuZ">五、数值</h3>

<h4 id="YuanS">内置数值操作</h4>

- 内置操作符

<table id="inmath" class="inmath" border="1">
<tr style="text-align:center;"><td><strong>描述</strong></td><td><strong>操作符</strong></td></tr>
<tr style="text-align:center;"><td>加减乘除</td><td >+-*/</td></tr>
<tr style="text-align:center;"><td>整除</td><td>//</td></tr>
<tr style="text-align:center;"><td>取余</td><td>%</td></tr>
<tr style="text-align:center;"><td>乘方</td><td>**</td></tr>
</table>

- 内置运算函数


<table id="inmath_1" class="inmath_1" border="1">
<tr style="text-align:center;"><td><strong>描述</strong></td><td><strong>函数</strong></td></tr>
<tr style="text-align:center;"><td>x的绝对值</td><td >abs(x)</td></tr>
<tr style="text-align:center;"><td>输出(x//y,x%y)</td><td>divmod(x)</td></tr>
<tr style="text-align:center;"><td>输出(x**y)%z,z可选</td><td>pow(x,y,[z])</td></tr>
<tr style="text-align:center;"><td>对x四舍五入，保留ndigits位小数</td><td>round(x,[ndigits])</td></tr>
<tr style="text-align:center;"><td>返回x1,x2,···xn中的最大值</td><td>max(x1,x2,···xn)</td></tr>
<tr style="text-align:center;"><td>返回x1,x2,···xn中的最小值</td><td>min(x1,x2,···xn)</td></tr>
</table>
<br/>
<hr/>
<h4 id="mathin">math库</h4> 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
使用时需要调用math库

```python
import math

```
<br/>
<h5 id="mathc">math库中的数学常数</h5>



<table id="mathn" class="mathn" border="1">
<tr style="text-align:center;"><td><strong>数学形式</strong></td><td><strong>常数</strong></td></tr>
<tr style="text-align:center;"><td>π</td><td >pi</td></tr>
<tr style="text-align:center;"><td>e</td><td>e</td></tr>
<tr style="text-align:center;"><td>∞</td><td>inf</td></tr>
<tr style="text-align:center;"><td>-∞</td><td>-inf</td></tr>
<tr style="text-align:center;"><td>非浮点数标记</td><td>nan</td></tr>

</table>

<h5 id="mathh">math库中数值函数</h5>

<table id="math_1" class="math_1" border="1">
<tr style="text-align:center;"><td><strong>数学形式/描述</strong></td><td><strong>函数</strong></td></tr>
<tr style="text-align:center;"><td>|x|</td><td>fabs(x)</td></tr>
<tr style="text-align:center;"><td>x%y</td><td>fmod(x,y)</td></tr>
<tr style="text-align:center;"><td>浮点数精确求和</td><td>fsum([x,y,....])</td></tr>
<tr style="text-align:center;"><td> 返回x,y的最大公约数(x,y为整数)</td><td>gcd(x,y)</td></tr>
<tr style="text-align:center;"><td>返回x整数部分</td><td>trunc(x)</td></tr>
<tr style="text-align:center;"><td>返回x小数和整数部分</td><td>modf(x)</td></tr>
<tr style="text-align:center;"><td>向上取整返回不小于x的最小整数</td><td>ceil(x)</td></tr>
<tr style="text-align:center;"><td>向下取整返回不大于x的最大整数</td><td>floor(x)</td></tr>
<tr style="text-align:center;"><td>x！</td><td>factorial(x)</td></tr>

</table>
<br/>
示例：
```python
import math
x = -520.1314
y = 520.1314
z = 1314.520
a = 15
b = 5
print("x的绝对值为",math.fabs(x))
print("x除以y取余为",math.fmod(x,y))
print("xyz的和为",math.fsum([x,y,z]))
print("a,b的最大0.公约数为",math.gcd(a,b))
print("x的整数部分为",math.trunc(x))
print("x的小数部分和整数部分分别为",math.modf(x))
print("不小于兄的最小整数为",math.ceil(x))
print("不大于x的最大整数位",math.floor(x))
print("b的阶乘为",math.factorial(b))
```
输出为

> x的绝对值为 520.1314
x除以y取余为 -0.0
xyz的和为 1314.52
a,b的最大0.公约数为 5
x的整数部分为 -520
x的小数部分和整数部分分别为 (-0.13139999999998508, -520.0)
不小于兄的最小整数为 -520
不大于x的最大整数位 -521
b的阶乘为 120
<br/>

<h5 id="mathmhs">math库中的幂对数函数、三角函数</h5>
<table id="math_1" class="math_1" border="1">
<tr style="text-align:center;"><td><strong>数学形式/描述</strong></td><td><strong>函数</strong></td></tr>
<tr style="text-align:center;"><td>x^y</td><td>pow(x,y)</td></tr>
<tr style="text-align:center;"><td>e^x</td><td>exp(x)</td></tr>
<tr style="text-align:center;"><td>√x</td><td>sqrt(x)</td></tr>
<tr style="text-align:center;"><td>logʙᴀsᴇX</td><td>log(X,[BASE])</td></tr>
<tr style="text-align:center;"><td>log₂x</td><td>log2(x)</td></tr>
<tr style="text-align:center;"><td>lgx</td><td>log10(x)</td></tr>
<tr style="text-align:center;"><td>弧度化角度</td><td>degrees(x)</td></tr>
<tr style="text-align:center;"><td>角度化弧度</td><td>radians(x)</td></tr>
<tr style="text-align:center;"><td>√(x²+y²)即(x,y)点到(0,0)点的距离</td><td>hypot(x,y)</td></tr>
<tr style="text-align:center;"><td>sin x（cos,tan同）</td><td>sin(x )</td></tr>
<tr style="text-align:center;"><td>arcsin x（arccos,arctan同）</td><td>asin(x )</td></tr>
</table>

> 最后编辑与
2020/3/2 22:11:59 

