# [CSS](https://www.css88.com/book/css/)

页面中由于元素的大小、宽高、布局隐藏等发生变化会引起页面的回流和重绘；
元素的外观风格如颜色等发生变化将引起重绘。减少或避免发生回流，尽量单次修改（css或js），减少DOM访问，脱离文档流;

##### 1. 图片调整属性：

```
  object-fit: cover | contain | fill | none | scale-down;
  object-position: center | percentage | px;
```

##### 2. 屏蔽鼠标事件：

```
  pointer-events：none;
```

##### 3. placeholder样式：

```
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
　　color: red;
  }
```

##### 4. 多行文本省略：

```
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; //行数
  overflow: hidden;
```

##### 5. iOS滑动优化(内部定位失效)：

```
  -webkit-overflow-scrolling : touch;
```

##### 6. 清除iOS长按灰色蒙版：

```
  -webkit-tap-highlight-color: rgba(0,0,0,0);
```

##### 7. 滚动条样式自定义：

```
  //清除滚动条
  selector::-webkit-scroll-bar{
    display: none;
    color: transparent;
  }
```

##### 8. flex宽度失效：

```
  子栏目添加flex:0 0 auto;属性
```

##### 9. css Hack：

```
  空
```