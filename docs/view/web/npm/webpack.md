# webpack

#### 1. 样式消失问题

```
    .test{
        //正常编译
        display: -webkit-box;
        //跳过开头
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        //跳过结束、正常编译
        text-overflow: ellipsis;
        overflow: hidden;
    }
```