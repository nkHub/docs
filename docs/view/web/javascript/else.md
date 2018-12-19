# JavaScript 其他

##### 1. [原生ajax请求](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API)：

```
  var config = {
    Method: 'post' | 'get',
    Header: {},
    Body: data
  };
  fetch(url,config).then(res=>res.toJson()).then(function(res){
    Console.log(res);
  },function(error){
    Console.log(error);
  });
```


##### 2. input标签获取焦点居中：

```
  input.scrollIntoView(); <!-- (不好使) -->
```

##### 3. 中文输入法事件：

```
  compositionstart
  compositionend (输入法完成事件)
  compositionupdate
```

##### 4. Selection对象：

页面焦点相关

```
  window.getSelecton();   // 获取selection对象
  selection.modify        // 修改焦点位置
  selection.getRangeAt(0) // 获取range对象
  range.insertNode(node)  // 焦点位置插入节点
```