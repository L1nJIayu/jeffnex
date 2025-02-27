# Flex有哪些常用的属性

设置了flex的元素，其子元素称为一个个项目。

在父元素有主轴和交叉轴，默认主轴是水平的、交叉轴是垂直的。

属性`flex-direction`就是设置主轴和交叉轴的方向的，然后`flex-wrap`是设置当项目放不下的时候，是否要换行；这俩属性有一个简写属性是`flex-flow`；接着就是`justify-content`设置主轴的项目排列，`align-items`设置交叉轴的项目排列，最后是`align-content`设置多根交叉轴时的排列情况。

对于`justify-content`有五个属性值可以设置，`flex-start`表示靠前，`flex-end`表示靠后，`center`表示居中，`space-between`表示两端项目靠边，然后所有项目的间距，按剩余空间来均分；`space-around`就是所有子项目的间距，按剩余空间来均分，所以项目之间的距离，刚好会是两端的两倍间距。

对于`align-items`，也有五个属性可以设置，默认是`stretch`，拉伸占满空间，同样会有`flex-start`,`flex-end`,`center`可以设置，效果根`justify-content`是一样的，最后是`baseline`，是以项目内第一行文字为基线来对齐的。

对于`align-content`，就有六个属性值了，首先有五个跟`justify-content`一样，效果也相同，还有一个是`stretch`就是拉伸占满剩余空间。



接着就是项目的属性。

`order`是表示顺序，数值越大，越靠后。

`flex-grow`表示放大比例，默认是0，表示不放大。

`flex-shrink`表示缩小比例，默认是1，表示空间不够时会等比例缩小。

`flex-basis`表示在分配剩余空间之前，占据的主轴空间，默认是auto，表示项目本来的大小。

`flex`是前三个属性的简写，提供了`flex:auto`和`flex:none`的特殊值，分别是`flex:1 1 auto`和`flex:0 0 auto`；另外也可以设置成数值，比如`flex:1`，表示`flex-grow:1`，`flex-shrink:1`

,`flex-basis:0%`，分配剩余空间时，从0开始分配。

最后还有一个`align-self`，用来定义项目特殊的交叉轴的对齐方式。默认是`auto`表示继承父元素的属性值，其他属性值与`align-items`是一样的。



> 这内容讲下来起码能讲超过5分钟了...常用的我觉得就讲`justify-content`,`align-items`,`flex`,`align-self`吧。。