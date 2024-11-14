# 手写Promise



```js

class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'

  status = undefined
  result = undefined
  error = undefined

  fulfilledCallbackList = []
  rejectedCallbackList = []

  constructor(executor) {
    try {
      this.status = MyPromise.PENDING
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }

  resolve = (result) => {
    if(this.status !== MyPromise.PENDING) return

    this.status = MyPromise.FULFILLED
    this.result = result

    while(this.fulfilledCallbackList.length) this.fulfilledCallbackList.shift()()

  }

  reject = (error) => {
    if(this.status !== MyPromise.PENDING) return

    this.status = MyPromise.REJECTED
    this.error = error

    while(this.rejectedCallbackList.length) this.rejectedCallbackList.shift()()
  }

  then = (onFulfilled, onRejected) => {

    // 处理未传onFulfilled, onRejected的情况，让传递的value能继续往下走
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : error => { throw error }

    const promise = new MyPromise((resolve, reject) => {
      
      
      if(this.status === MyPromise.FULFILLED) {
        setTimeout(() => {  // 这里的异步，是为了能拿到promise变量。
          try {
            const value = onFulfilled(this.result)
            resolvePromise(promise, value, resolve, reject) // 传递promise是为了内部函数检查错误
          } catch (err) {
            reject(err)
          }
        }, 0)
      } else if (this.status === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            const value = onRejected(this.error)
            resolvePromise(promise, value, resolve, reject)
          } catch (err) {
            reject(err)
          }
        }, 0)
      } else if (this.status === MyPromise.PENDING) {
        this.fulfilledCallbackList.push(() => {
          setTimeout(() => {
            try {
              const value = onFulfilled(this.result)
              resolvePromise(promise, value, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
        this.rejectedCallbackList.push(() => {
          setTimeout(() => {
            try {
              const value = onRejected(this.error)
              resolvePromise(promise, value, resolve, reject)
            } catch (err) {
              reject(err)
            }
          }, 0)
        })
      }
    })

    return promise
  }

  static resolve(result) {
    if(result instanceof MyPromise) {
      return result
    } else {
      return new MyPromise((resolve) => resolve(result) )
    }
  }

  static all(array) {
    return new MyPromise((resolve, reject) => {
      
      function addData(key, value) {
        result[key] = value
        count++
        if(count == array.length) resolve(result)
      }
      
      const result = []
      let count = 0

      array.forEach((item, index) => {
        if(item instanceof MyPromise) {
          item.then(
            value => addData(index, value),
            err => reject(err)
          )
        } else {
          addData(index, item)
        }
      })

    })
  }

  finally(callback) {
    return this.then(
      (value) => {
        return MyPromise.resolve(callback()).then(() => value)
      },
      (error) => {
        throw MyPromise.resolve(callback()).then(() => { throw error })
      }
    )
  }

  catch(failCallback) {
    return this.then(
      null,
      failCallback
    )
  }
}

function resolvePromise(promise, x, resolve, reject) {
  if(promise === x) {
    return reject(new TypeError('循环调用！Chaining cycle detected for promise #<Promise>'))
  }
  if(x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}
```

