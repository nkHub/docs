# [配置文档](https://docsify.js.org/#/zh-cn/quickstart)

!>  **{{msg}}** 。

?> 普通提示

[忽略编译链接](/_page/config/config.md ':ignore')

[设置链接的 target 属性](/_page/config/config.md ':target=_blank')

表头|表头|表头
---|:--:|---:
内容|内容|内容
内容|内容|内容

```
  代码...
  代码...
  代码...
```

- [ ] foo
- bar
- [x] baz
- [] bam <~ not working
  - [ ] bim
  - [ ] lim


<script>
  new Vue({
    el: '#main',
    data: { msg: '使用命令docsify serve初始化该文档' }
  })
</script>


<!-- <vuep template="#example"></vuep>

<script v-pre type="text/x-template" id="example">
  <template>
    <div>{{ msg }}</div>
  </template>

  <script>
    module.exports = {

        data: function () {
            return {
                name: 'Vue',
                msg: '使用命令docsify serve初始化该文档'
            }
        }
    }
  </script>
</script> -->