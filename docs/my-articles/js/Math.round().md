##  Math.round()  四舍五入取整 支持正负数

```js
let res = Math.round(1.2)
console.log(res) // 1

let res = Math.round(1.5)
console.log(res) // 2

let res = Math.round(-2.2)
console.log(res) // -2

let res = Math.round(-2.5)
console.log(res) // -2  注意：这里不是输出-3

let res = Math.round(-2.6)
console.log(res) // -3
```

##  Math.ceil()  向上取整 支持正负数

```js
let res = Math.ceil(1.2)
console.log(res) // 2

let res = Math.ceil(1.6)
console.log(res) // 2

let res = Math.ceil(-2.2)
console.log(res) // -2  注意：这里因为是负数，所以向上取整是输出-2

let res = Math.ceil(-2.6)
console.log(res) // -2
```

##  Math.floor()  向下取整 支持正负数

```js
let res = Math.floor(1.2)
console.log(res) // 1

let res = Math.floor(1.6)
console.log(res) // 1

let res = Math.floor(-2.2)
console.log(res) // -3  注意：这里因为是负数，所以向下取整是输出-3

let res = Math.floor(-2.6)
console.log(res) // -3

```