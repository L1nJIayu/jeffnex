# 我改变一个可见元素的宽高，会发生reflow还是repaint？使用translateX呢？

​	改变宽高的话，应该说是都会触发，由于会引起页面的整体布局，是会发生reflow，然后宽高的变化，也会引起视觉的改变，会触发repaint；



而对于使用translateX，浏览器只会再GPU上重新绘制元素的视觉效果，不会重新计算页面的布局。因此，不会导致reflow，只会引发repaint。

