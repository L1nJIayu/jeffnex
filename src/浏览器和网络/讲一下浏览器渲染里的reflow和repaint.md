# 讲一下浏览器渲染里的reflow和repaint

reflow是在元素发生布局变化时触发的，主要是在元素的宽高，和位置发生变化时会引发。

repaint是元素的视觉效果发生变化时触发的，主要在颜色、边框、文本、阴影等。

reflow比repaint更加消耗性能，出现reflow时，是一定会引发repaint的；而出现repaint，则不一定会引发reflow。



针对这俩的情况，在开发时，可以做一些优化调整：

比如对DOM的添加和删除，涉及大量DOM节点变动时，可以使用`DocumentFragment`来批量操作，而不是一个个来操作。

尽量避免频繁读取元素的布局相关的信息比如`offsetWidth`或者`getComputedStyle`,因为为了获取到最新的值，会强制reflow；如果一定要用到，就缓存布局属性的值等。



