# Jquery

##### 1. 自定义插件配置(插件名称：plugin)

```javascript
    'use strict';
    // jQuery插件
    (function ($) {
        $.fn.extend({
            "plugin": function (options) {
                var opts = $.extend({}, defaluts, options); //合并配置
                return plugin.init(this,opts);
                //这里的this是指$(selector)
            }
        });

        //插件对象
        var plugin = {
            //自定义属性
            test: '',
            // 初始化插件对象
            init:function(box,opts){
                ...
                return plugin;
            },
            //销毁插件对象
            destory:function(){
                ...
            },
            ...
        }

        //默认参数
        var defaluts = {
            debug: false,
        };

    })(jQuery);
```