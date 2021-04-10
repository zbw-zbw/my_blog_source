## 一、类型的定义

大多数人认为，像 JavaScript 这样的动态语言是没有类型（type）的。

也有人认为，JavaScript 中的“类型”应该称为“标签”（tag）或者“子类型”（subtype）。

**定义：类型是值的内部特征，它定义了值的行为，目的是为了区分其他值。**

怎么理解？变量是没有类型的，值才具有类型，类型描述了值的行为特征；换句话说，**当某个值发生改变，类型也随之改变（如 a = 1 -->  a = '1'）。**

## 二、内置类型（七种）
JavaScript中有七种内置类型：

- 空值（null）

- 未定义（undefined）

- 数字（number）

- 字符串（string）

- 对象（object）

- 布尔值（boolean）

- 符号（symbol，**ES6中新增**）

##### 除了对象之外，其他统称为‘基本类型’。

## 三、检测值的类型（typeof）

我们可以使用typeof运算符来查看值的类型，注意：它的返回值是**字符串**（string）


```js
typeof undefined // 'undefined'
typeof 11 // 'number'
typeof 'kyrie' // 'string'
typeof { name: 'kyrie' } // 'object'
typeof true // 'boolean'=
typeof null // 'object' 远古bug（二进制问题）
// ES6新增类型
typeof Symbol('11') // 'symbol'
```

你可能注意到少了null类型，而且typeof null 竟然返回的'object'类型，这是个远古bug，存在将近20年，但这个bug应该不会修复了，一修复可能牵扯到的web系统都崩了...

##### 提示：文末有关于这个bug的详细解释。

我们可以使用&&来检测null值的类型

```js
var a = null
if (!a && typeof null === 'object') // true
```

- object的子类型（函数）


```js
typeof function demo() {...} // 'object'
```

**函数实际是object的一个“子类型”**

函数是“可调用的对象”，他也可以拥有属性


```js
function demo(a, b) {...}
demo.length // 2
```

**函数（对象）的length属性是形参的个数**

- object的子类型（数组）

```js
var arr = [1, 2, 3]
typeof arr // 'object'
arr.length // 3
```

**数组也是object的一个“子类型”**

**数组（对象）的length属性是元素的个数**

## 四、undefined和undeclared

变量在定义了（但没有值）时为undefined

```js
var a;
typeof a // 'undefined'
```

那undeclared又是什么？

**undeclared（未声明）**，大多数人认为它和 **undefined（未定义值）** 是同一个东西，但其实不是。

##### 区别：已经在作用域中声明了但还没有赋值的变量，是undefined的；还没有在作用域中声明过的变量，是undeclared的。

```js
var a;
a // undefined
b // b is not defined (undeclaced)
```

这里，浏览器的处理很让人误解， “b is not defined”很容易让人误以为 b 是 undefined（未定义值）的，但其实b是undeclaced（未声明）的，如果浏览器报错为：**“b is not found”** 或者 **“b is not declared”** 或许更准确一点。

更气人的是，typeof对这类处理让人绝望。

```js
var a;
typeof a //'undefined'
typeof b //'undefined'返回 undeclared会好很多
```

对于undeclared或者undefined的变量，typeof的返回值都是'undefined'；但请注意，这里typeof b没有报错（直接访问b会报错），这是typeof一种**特殊安全防范机制**。

## 五、typeof的安全防范机制

可以用来检测**某个全局变量是否存在**
```js
// 报错 debug是未声明（undeclared）的
if (debug) {
  console.log('Debugging is starting!!!')
}

// 安全 typeof的安全防范机制
if (typeof debug !== 'undefined') {
  console.log('Debugging is starting!!!')
}
```

某些时候也可以不用typeof的**安全防范机制**

```js
if (window.debug) {
  console.log('Debugging is starting!!!')
}
```

上面的实现方式只适用于代码运行在**浏览器环境**（拥有window对象），但其他环境不行（如Node.js/服务端...）,因为全局对象并不是window。

## 总结

1. JavaScript中有七种内置类型：null、undefined、boolean、number、string、object、symbol，可以使用typeof运算符来判断某个值的类型。

2. 变量是没有类型的，只有值有类型，类型定义（描述）了值的行为特征。

3. undefined和undeclared不是同一个东西。undefined是值的类型之一，undeclared表示变量还未声明。

4. 直接访问undeclared变量是会报错的（ReferenceError: xxx is not defined），而且typeof对undefined和undeclared变量都返回'undefined'。

5. 可以通过typeof的安全防范机制（阻止报错）来检查undeclared变量

##### 附：关于typeof null === 'object'的解释

在第一版的 JavaScript 中，变量的值被设计保存在一个 32 位的内存单元中。该单元包含一个 1 或 3 位的类型标志，和实际数据的值。类型标志存储在单元的最后。包括以下5种情况：

- **000：object - 数据为对象的引用**
- 1：int - 数据为31位的有符号整型
- 010：double - 数据为一个浮点数的引用
- 100：string - 数据为一个字符串的引用
- 110：boolean - 数据为布尔类型的值

除此之外，还有两种特殊情况：

- undefined 负的 2 的 30 次方（超出当时整型取值范围的一个数）
- **null 空指针(全是0)**

正是因为：**null 的存储单元最后三位和 object 一样是 000**（罪魁祸首）

**所以typeof null === 'object' // true**