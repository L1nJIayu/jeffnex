# FLex布局

- flex容器中有两条轴，主轴和交叉轴；主轴默认的方向是水平，交叉轴默认的方式是垂直的；主轴的方向可以通过`flex-direction`来定义，也可以定义反向，即`row-reverse`、`column-reverse`。

- 设置flex后，子元素的`float`、`clear`、`vertical-align`将失效。

- 用的比较多的就是`justify-content`和`align-items`。

  `justify-content`：

  - flex-start：主轴起点开始
  - flex-end：主轴终点开始
  - center：居中
  - space-between：两端靠边，项目之间的距离相等。
  - space-around：所有子项目左右距离都相等，这个会让项目之间的距离是项目与边框之间的距离的两倍。

  `align-items`：

  - flex-start：交叉轴起点开始
  - flex-end：交叉轴终点开始
  - center：居中
  - stretch：项目如果没有设置高度，则直接占满容器高度
  - baseline：根据每个项目的第一行文件进行对其

- `align-content`：针对多行的，这个是要`flex-wrap`设置为`wrap`，且有多条轴的情况下会生效，属性值与`justify-content`一样，但多一个`stretch`。

- `flex-flow`：是`flex-direction`和`flex-wrap`和简写。

- 对于子项目，有`flex-grow`和`flex-shrink`，用来定义对剩余空间的处理的。`flex-grow`默认是0，即有剩余空间也不放大，如果为1，就会占满剩余空间，多个子项目为1，就均分剩余空间；如果其中一个是2，它就会分到比其他项目两倍的剩余空间。`flex-shrink`默认是1，即空间不足时直接缩小，如果改成0，就不再缩小。

- `flex-basis`：定义项目的固定空间，默认是auto，即项目原本的大小。

- 有一个属性是`flex`,是上述三个属性的简写方式，它有快捷属性值，可以是`auto`和`none`，`auto`相当于设置`flex-grow`为1，`none`相当于设置`flex-shrink`为0。

- 还有就是`align-self`，可以设置项目自己在交叉轴方向的位置，属性值与`align-items`一样。

- 最后一个是`order`，设置项目顺序的，数值越小越靠前。

