<!--
 * @version: 1.0.0
 * @Date: 2019-06-21 17:07:09
 * @LastEditTime: 2019-09-27 00:25:50
 -->
# [配置文档](https://docsify.js.org/#/zh-cn/quickstart)

<!-- !>  **{{msg}}** 。 -->
<vuep template="#example"></vuep>

  <script v-pre type="text/x-template" id="example">
  <template>
    <div>{{msg}}</div>
  </template>

  <script>
    module.exports = {
      data() {
        return {
          msg: '使用命令docsify serve docs初始化该文档'
        }
      }
    }
  </script>
</script>

#### markdown部分测试

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

<!-- tabs:start -->
#### ** demo1 **
内容1
#### ** demo2 **
内容2
#### ** demo3 **
内容3
<!-- tabs:end -->

<!-- <script>
  new Vue({
    el: '#main',
    data: { msg: '使用命令docsify serve docs初始化该文档' }
  })
</script> -->

##### 代码高亮支持
 
1c, abnf, accesslog, actionscript, ada, apache, applescript, arduino, armasm, asciidoc, aspectj, autohotkey, autoit, avrasm, awk, axapta, bash, basic, bnf, brainfuck, cal, capnproto, ceylon, clean, clojure, clojure-repl, cmake, coffeescript, coq, cos, cpp, crmsh, crystal, cs, csp, css, d, dart, delphi, diff, django, dns, dockerfile, dos, dsconfig, dts, dust, ebnf, elixir, elm, erb, erlang, erlang-repl, excel, fix, flix, fortran, fsharp, gams, gauss, gcode, gherkin, glsl, go, golo, gradle, groovy, haml, handlebars, haskell, haxe, hsp, htmlbars, http, hy, inform7, ini, irpf90, java, javascript, json, julia, kotlin, lasso, ldif, leaf, less, lisp, livecodeserver, livescript, llvm, lsl, lua, makefile, markdown, mathematica, matlab, maxima, mel, mercury, mipsasm, mizar, mojolicious, monkey, moonscript, n1ql, nginx, nimrod, nix, nsis, objectivec, ocaml, openscad, oxygene, parser3, perl, pf, php, pony, powershell, processing, profile, prolog, protobuf, puppet, purebasic, python, q, qml, r, rib, roboconf, rsl, ruby, ruleslanguage, rust, scala, scheme, scilab, scss, smali, smalltalk, sml, sqf, sql, stan, stata, step21, stylus, subunit, swift, taggerscript, tap, tcl, tex, thrift, tp, twig, typescript, vala, vbnet, vbscript, vbscript-html, verilog, vhdl, vim, x86asm, xl, xml, xquery, yaml, zephir