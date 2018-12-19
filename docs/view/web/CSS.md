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
  input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
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

##### 5. IOS滑动优化(内部定位失效)：

```
  -webkit-overflow-scrolling : touch;
```

##### 6. 清除IOS长按灰色蒙版：

```
  -webkit-tap-highlight-color: rgba(0,0,0,0);
```

##### 7. 滚动条样式自定义：

```
  <!-- 滚动条整体部分 -->
  ::-webkit-scrollbar
  <!-- 滚动条里面的小方块，能向上向下移动（或往左往右移动，取决于是垂直滚动条还是水平滚动条） -->
  ::-webkit-scrollbar-thumb
  <!-- 滚动条的轨道（里面装有Thumb） -->
  ::-webkit-scrollbar-track
  <!-- 滚动条的轨道的两端按钮，允许通过点击微调小方块的位置。 -->
  ::-webkit-scrollbar-button
  <!-- 内层轨道，滚动条中间部分（除去） -->
  ::-webkit-scrollbar-track-piece
  <!-- 边角，即两个滚动条的交汇处 -->
  ::-webkit-scrollbar-corner
  <!-- 两个滚动条的交汇处上用于通过拖动调整元素大小的小控件 -->
  ::-webkit-resizer
```