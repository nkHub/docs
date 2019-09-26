<!--
 * @version: 1.0.0
 * @Date: 2019-08-08 20:07:18
 * @LastEditTime: 2019-09-26 20:29:24
 -->
# [CSS](https://www.css88.com/book/css/)

页面中由于元素的大小、宽高、布局隐藏等发生变化会引起页面的回流和重绘；
元素的外观风格如颜色等发生变化将引起重绘。减少或避免发生回流，尽量单次修改（css或js），减少DOM访问，脱离文档流;

##### 1. 常用css：

样式重置[reset.css](https://meyerweb.com/eric/tools/css/reset/)

```
  // 样式重置
  input,button{
      -webkit-tap-highlight-color: transparent; // 清除iOS长按灰色蒙版
  }

  // input::-webkit-input-placeholder,
  // textarea::-webkit-input-placeholder {
　//　  color: #000;
  // }

  //flex布局
  .flex-spb{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  .flex-center{
      display: flex;
      justify-content: center;
      align-items: center;
  }

  // 图片样式
  .image-cover{
      object-fit: cover; // cover | contain | fill | none | scale-down
      object-position: center;  // center | percentage | px;
  }
  .image-contain{
      object-fit: contain;
      object-position: center;
  }

  //无法选中与复制
  .no-select{
      user-select: none;
  }

  // 屏蔽事件
  .no-event{
      pointer-events：none;
  }

  // 清除滚动条
  .no-scrollbar::-webkit-scroll-bar{
      display: none;
      color: transparent;
  }

  //文本溢出
  .text-ellipsis{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
  }

  .text-ellipsis-2{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2; //行数
      overflow: hidden;
  }

  // iOS滑动优化(内部定位失效)
  .scrolling{
      -webkit-overflow-scrolling : touch;
  }
  
  
```

##### 2. css Hack：

hack       | IE6| IE7| IE8| IE9| IE10| 现代
---        |:--:|:--:|:--:|:--:|:--:|:--:
\*         | √  | √  |    |    |     |
\+         |    | √  |    |    |     |
\-         | √  |    |    |    |     |
!important |    | √  | √  | √  | √   | √
\\9        | √  | √  | √  | √  | √   | 
\\0        |    |    | √  | √  | √   | 
\\9\\0     |    |    |    | √  | √   | 


##### 3.条件注释

```
  lte：就是Less than or equal to的简写，也就是小于或等于的意思。
  lt ：就是Less than的简写，也就是小于的意思。
  gte：就是Greater than or equal to的简写，也就是大于或等于的意思。
  gt ：就是Greater than的简写，也就是大于的意思。
  ! ：就是不等于的意思，跟javascript里的不等于判断符相同。
  具体用法：<!--[if+logical dialog+browser version]><![endif]-->
  条件注释只能用于IE5以上。
```

##### 4.其他概念

    1、CSS继承：子元素只会继承父元素的非结构型样式。
    2、CSS层叠性：比较权重 + 就近原则。
    3、标准文档流：
        a) 文档加载时，自上而下，从左到右。
        b) 空白折叠、高矮不齐，底边对齐、自动换行
    4、块级元素：占用一整行，可调宽高，默认父元素宽度。行内元素：紧挨其他元素，不可调整，默认内容宽度
    5、元素浮动后特性：
        a)脱离标准文档流
        b)双浮动元素紧贴，宽度不足总宽则自动下排
        c)文本将围绕浮动元素
        d)未设置宽高，默认由内部元素决定
    6、margin在标准文档流（即非浮动、定位元素）中，会存在margin塌陷的问题即上下元素的margin会以较大者优先。
    7、选项卡图标的引入<link rel=”shortcut icon” href=” ”>
    8、浏览器前缀
        a)谷歌、Safari		webkit	  -webkit-
        b)火狐			    gecko	   -moz-
        c)IE				 trident	 -ms-
        d)Opera			  presto	  -o-	(新版为webkit内核)
    9、图片自适应优化因屏幕大小改变图片源（使用picture标签+source标签→media属性辅助）
    10、媒体查询三种方式
        a)<link href=”CSS文件” media=”media-quary-list”>
        b)@import url(CSS文件) mediaType
        c)CSS中 @media：(media-quary-list){ CSS属性}
    11、当多个同级元素设置为display: inline-block;时相邻之间会有3px的间距
    12、网页界面的样式因浏览器版本而不同，推荐优雅降级
    13、bootstrap断点
        a)超小屏幕 小于768px 手机
        b)小屏幕 768px ~ 992px 平板
        c)中屏幕 992px ~ 1200px
        d)大屏幕 大于1200px
    14、IE6 部分兼容
        a)不支持小于12px的盒子，解决方法如下：
            i.将字体大小设置小于盒子大小
            ii.添加专用属性（hack） 例如： _background
            iii.触发haslayout机制使用_zoom:1
        b)双倍margin bug：多元素浮动，携带同方向的margin，会存在队首元素双倍margin的现象，解决方法：
            1）是两者方向相反
            2）给队首元素添加专有属性hack，一半的margin。例如：_margin-left: 50px;
            3）IE中出现浮动后与浏览器之间有3px的间隙。