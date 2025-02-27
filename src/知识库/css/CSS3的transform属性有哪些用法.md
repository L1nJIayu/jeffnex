# CSS3的transform属性有哪些用法

`translate`是在水平和垂直方向进行移动；

`rotate`是旋转；

`scale`是缩放；

`skew`是倾斜角度；

`matrix`是简写，用的较少；

```css
transform: matrix(a, b, c, d, e, f);
```

这 6 个值代表以下内容：

- **a** 和 **d**：控制元素的缩放（scale）。`a` 是 x 轴缩放，`d` 是 y 轴缩放。
- **b** 和 **c**：控制元素的倾斜（skew）。`b` 是 x 轴的倾斜，`c` 是 y 轴的倾斜。
- **e** 和 **f**：控制元素的平移（translation）。`e` 是水平平移，`f` 是垂直平移。



还有`perspective`设置透视程度，主要跟3d相关属性进行配合。



> 感觉后面几个真的用的好少...除了前面三个基本的，后面简单提一下就行了感觉。
