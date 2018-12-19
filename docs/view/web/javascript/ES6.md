# ES6


##### 1. let

无var的变量提升（声明前使用为undefined），并且作用范围为块作用域内。

##### 2. const

常量定义(引用类型，数据地址不变)

##### 3. 解析复构：

对应位置赋值

```
  { a } = { a : 1 }
  console.log(a); // a = 1
```

##### 4. 模板字符串：

```
  `字符串/HTML + ${ 变量名 }`
```

##### 5. 箭头函数：

函数体内this指向函数名外部对象

```
  var 函数名 = (参数 = 默认值) => { 函数体 } ;
```

##### 6. 对象：

```
  obj::fnName;  //对象::函数 绑定上下文，类似于 fn().bind(this)
  obj.keys();   //获取对象键数组
  obj.values(); //获取对象值数组
  Object.assign({},obj); //对象合并并返回新的对象（多用于对象深复制）
```

###### Class：

不存在变量提升，super继承父级constructor方法(如无需修改则可不使用constructor方法)。

##### 7. 数组:

Array.from可将类似格式转换为数组。

```
  {
    0: {
      a:1
    },
    length: 1
  }
```

##### 8. 拓展运算符：

拓展运算符( ... name) 主要用于函数调用,将一个数组，变为参数序列,将name数组元素依次添加到外面

```
  function test(...name){
    console.log(name); //参数列表数组
  }

  var n = [...array]; //数组拷贝
```

##### 9. Promise：

```
  new Promise((resolve,reject){
    resolve(); //异步操作成功
    reject();  //异步操作失败
  });
```

##### 10. Set：

Set不含重复的数据结构，包含add,del,has,clear方法;
```
  [...new Set(array)] 数组去重
```

##### 11. Map：

Map与传统“键-值”相对的“值-值”，数据结构;


##### 12. async:

函数: 函数体内可使用 await调用Promise函数回调，实现异步函数同步写法。

```
  async function(){
    let res = await ajax();
  }
```

##### 13. generator:

generator类似于async, await换位yield。

```
  function* name(){
    yield response;
  }
  Name().then();
```

##### 14. 模块:

'编译时加载/静态加载'不同于commonJS的'运行时加载'。

```
  import * as name from 'fs'; //导入所有数据
  import { name } from 'fs'; //导入所有数据

  export default name; //导出
```

