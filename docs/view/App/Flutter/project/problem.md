# 遇到的问题

    1. 原生的BottomNavigationBar不支持懒加载。
    2. 手动切换主题时TabBar的active下划线消失。
    3. TabBarView中使用Swiper循环时会冲突。
    4. 使用json_serializable，若存在复杂数据(重复字段名称)可能产生类冲突。
       偶尔会报double不是int的子类，统一替换num类型即可。