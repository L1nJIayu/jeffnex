# 手写Promise.all()

```js


const promiseAll = (array) => {

  const result = []

  return new Promise((resolve, reject) => {
    try {
      if(!array.length) resolve(result)

      let count = 0
      
      function putResult(key, value) {
        result[key] = value
        count++
        
        if(count == array.length) resolve(result)
      }
    
      array.forEach((item, index) => {
        Promise.resolve(item).then(
          res => putResult(index, res),
          err => reject(err)
        )
      })
    } catch (err) {
      return reject(err)
    }
  })


}


/* ======== 测试代码 ======== */
function p1 () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('p1')
    }, 1500)
  })
}
function p2 () {
  return new Promise((resolve) => {
    resolve('p2')
  })
}

promiseAll().then(
  resList => {
    console.log('resList', resList)
  },
  err => {
    console.log('error！！！: ', err)
  }
)
```

