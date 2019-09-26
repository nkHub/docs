<!--
 * @version: 1.0.0
 * @Date: 2019-09-26 10:59:36
 * @LastEditTime: 2019-09-26 11:32:38
 -->
# DOM相关

###### 相关概念

    1、冒泡：嵌套结构，当触发底层事件引发向上传递触发相同事件直至window
       冒泡取消:①属性：e.cancelBubble;②方法：e.stopPropagation();
    2、节点获取
        a)父节点 e.parentNode
        b)兄弟节点 e.nextElementSibling || e.nextSibling 
        //nextSibling适用于IE678，nextElementSibling适用于其他
        c)子节点 e.children
    3.节点操作
        a)创建元素 createElement
        b)插入元素 appendChild（标签）/insertBefore（标签，位置）
        c)复制节点 cloneNode（boolean） false只复制结构 true全复制
        d)删除元素 removeChild
    4、元素属性
        a)获取 e.getAttribute(属性)
        b)设置 e.setAttribute(属性，属性值)
        c)删除 e.removeAttribute(属性)
    5.数据集element.dataset.dataName
    6.类名操作
        a)添加 e.classList.add(类名)
        b)反转 e.classList.toggle(类名)若包含类名则删除，否则添加
        c)检测 e.classList.contains(类名)检测是否包含此类名
    7、临时节点document.createDocumentFragment(优化)
    8、节点内容获取
        a)innerHTML 内部标签加内容和空格全部获取
        b)innerText 只获取内容
        c)textContent 获取内容加空格
        d)outerHTML 内容、内部标签和本身标签
    9、获取css样式 window.getComputedStyle(obj,伪类)

    
    