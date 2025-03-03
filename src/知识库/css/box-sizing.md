# box-sizing

`box-sizing`规定了应该如何计算元素的总宽高。总宽高的计算所涉及的范围主要有`border边框`、`padding内边距`以及`content内容`。根据不同的属性值设置，会包含不同的范围。

## 主要有以下两种属性值：

1. ### content-box

   - `默认值`

   - 元素的总宽为：`width`
   - 元素的总高为：`height`

2. ### border-box

   - 元素的总宽为：`width` + `padding` + `border`

   - 元素的总高为：`width` + `padding` + `border`



## 示例

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .content-box {
      box-sizing: content-box;
      background-color: brown;

      width: 200px;
      height: 200px;
      padding: 20px;
      border: 10px solid #000;
    }
    .border-box {
      box-sizing: border-box;
      background-color: cadetblue;
      
      width: 200px;
      height: 200px;
      padding: 20px;
      border: 10px solid #000;
    }
  </style>
</head>
<body>

  <div class="content-box">content-box</div>
  <div class="border-box">border-box</div>
  
</body>
</html>
```



![image-20250303182900510](markdown_assets/image-20250303182900510.png)

![image-20250303182917613](markdown_assets/image-20250303182917613.png)
