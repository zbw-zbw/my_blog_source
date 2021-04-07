## 1. 如何隐藏滚动条

```css
// chrome 和Safari
*::-webkit-scrollbar { width: 0 !important }
// IE 10+
* { -ms-overflow-style: none; }
// Firefox
* { overflow: -moz-scrollbars-none; }
```

## 2. 修改滚动条样式

```css
*::-webkit-scrollbar {
  /*定义纵向滚动条宽度*/
  width: 12px!important;
  /*定义横向滚动条高度*/
  height: 12px!important; 
}
*::-webkit-scrollbar-thumb {
  /*滚动条内部滑块*/
  border-radius: 16px;
  background-color:#c1c1c1;
  transition: background-color 0.3s;
  &:hover {
    /*鼠标悬停滚动条内部滑块*/
    background: #bbb;
  }
 }
*::-webkit-scrollbar-track {
  /*滚动条内部轨道*/
  background: #f1f1f1;
}
```

## 3. 修改input框placeholder的颜色

```css
input::input-placeholder{
	color:red;
}
```

## 4. 按钮不可点击的样式

```css
cursor: not-allowed
```

## 5. CSS鼠标指针事件：阻止任何JS事件

```css
.disabled { pointer-events: none; }
```

## 6. 文字超出强制n行 超出部分用省略号代替

```css
div {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: n; // 行数
  -webkit-box-orient: vertical;
}
```

## 7. 修改字体间距

```css
letter-spacing: 8px
```

## 8. 谷歌浏览器控制台提示/deep/将要被移除

```css
<style scoped lang="less">
// 采用的less的转义和变量插值
@deep: ~'>>>';
.select {
     @{deep} .ivu-card-body {
        width: 100%;
      }
    }
</style>
```

## 9. animate动画停在某个关键帧

```css
animation-fill-mode: forwards;
```

## 10. 盒子阴影

```css
box-shadow: 0 2px 2px rgba(10,16,20,.24),0 0 2px rgba(10,16,20,.12);
transition: box-shadow .5s;
```

## 11.使图片覆盖它的整个容器

```css
img {
  object-fit: cover;
}
```

## 12. 表格中td的内容自动换行

```css
<table style="word-break:break-all; word-wrap:break-all;">
```

## 13. 浏览器打印功能 图片失效

```css
body {
    -webkit-print-color-adjust: exact;
}
```

## 14. 背景图像完美适配视口

```css
body {
  background-image: url('xxx');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}
```

## 15. 如何使用多个背景图片

```css
body {
  background-image: url('xxx'), url('xxx');
  background-position: center, top;
  background-repeat: repeat, no-repeat;
  background-size: contain, cover;
}
```

## 16. 如何给背景图叠加渐变

```css
body {
  background-image: 
    linear-gradient(
      4deg, 
      rgba(38,8,31,0.75) 30%, 
      rgba(213,49,127,0.3) 45%, 
      rgba(232,120,12,0.3) 100%),
      url("xxx");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center
}
```

## 17. 如何将背景图设为文本颜色

```css
<body>
	<h1>hello!!!</h1>
</body>

body {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  min-height: 100vh;
  font-size: 120px;
}

h1 {
   background-image: url("xxx");
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}
```

## 18. 如何获取和设置盒子的宽高

```js
//第一种
dom.style.width/height //只能获取内联样式的元素宽高
//第二种
dom.currentStyle.width/height //只有IE浏览器支持
//第三种
dom.getComputedStyle(Dom).width/height //只有浏览器渲染后才能获取 兼容好
//第四种
dom.getBoundingClientRect().width/height //计算一个元素的绝对位置（相对于视窗左上角） 能拿到元素的left、right、width、height
```

## 19. 如何让图片垂直居中

```css
img {
  vertical-align: middle;
  margin-top: -xpx;
}
```

## 20. 消除图片自带的间距

```css
img {
  display: block;
}

// 或者 父盒子

div {
  font-size: 0;
}
```