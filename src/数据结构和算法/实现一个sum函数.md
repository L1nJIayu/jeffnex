# 实现一个sum函数

实现一个sum函数，参数数量任意，例子： sum( 1,2,3 ) , 输出 6

```js
function sum (..args) {
    return args.reduce((prev, next) => prev + next)
}
```



追问：假如这个函数的计算耗时很大，如何使得第一次运行后再次计算的时间大大减少 ？

可以用map来做缓存

```js
function createCacheSum() {

  const cache = new Map()

  return function sum(...args) {
    const key = args.toString()
    const value = cache.get(key)

    if(value != null) {
      console.log('通过缓存取出的结果:', value)
      return value
    } else {
      const value = args.reduce((prev, next) => prev + next)
      console.log('通过计算得到的结果:', value)
      cache.set(key, value)
      return 
    }
  }

}

const sum = createCacheSum()

sum(1,2)	// 通过计算得到的结果: 3
sum(1,2)	// 通过缓存取出的结果: 3
sum(1,2)	// 通过缓存取出的结果: 3
sum(1,2)	// 通过缓存取出的结果: 3
sum(1,2)	// 通过缓存取出的结果: 3
sum(1,2)	// 通过缓存取出的结果: 3
```

