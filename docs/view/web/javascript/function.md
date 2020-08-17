# 常用函数

##### 1. 类型判断:

```javascript
    /**
    *   @description       类型判断
    *   @params { Any }    o 数据
    *   @params { String } t 类型
    **/
    function assert(o, t){
      return t.split("|").map(i => `[object ${i}]`).indexOf(Object.prototype.toString.call(o)) != -1;
    }
```

##### 2. 转换查询字符串:

```javascript
    /**
    *   @description       查询字符串转换
    *   @params { Any }    o 数据对象
    **/
    function queryStringify(data){
        let query = "";
        for (let key in data) {
            if (assert(data[key], 'Array|Object')) {
                for(let i in data[key]){
                    let obj = {};
                    obj[key+'['+ i +']'] = data[key][i];
                    query += queryStringify(obj) + '&'; //递归
                }
            } else {
                query += `${key}=${data[key]}&`;
            }
        }
        return query.slice(0, query.length - 1);
    }
```

##### 3. 查询字符串解析:

```javascript
    /**
    *   @description       查询字符串转换
    *   @params { String }    s 查询字符串
    *   @params { String }    mark 字符串拆解间隔符
    **/
    function queryParse(s, mark = '&'){
        let d = {}, a = s.split(mark);
        a.forEach(item => {
            let ia = item.split('='),
                key = ia[0].split('[').map(i => i.replace(/\]/g,'')),
                tmp = d;
            key.forEach((k,i) => {
                if(i < key.length - 1){
                    let defaultVal = !isNaN(parseInt(key[i+1]))?[]:{};
                    if(!tmp[k])tmp[k] = defaultVal;
                    tmp = tmp[k];
                }else{
                    tmp[k] = isNaN(parseFloat(ia[1]))?ia[1]:parseFloat(ia[1]);
                }
            });
        });
        return d;
    }
```
