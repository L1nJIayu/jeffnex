# 如果使用transform如何实现垂直居中

讲思路：父元素设置相对定位relative,子元素设置绝对定位absolute。子元素设置left和top均为50%，同时设置transform的translate，在x轴和y轴方向均为-50%即可。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    .container {
      position: relative;
      width: 300px;
      height: 300px;
      border: 1px solid #000;
    }
    .box {
      background-color: red;
      width: 100px;
      height: 100px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box"></div>
  </div>
</body>
</html>
```

![image-20241028223901882](markdown_assets/image-20241028223901882.png)
