
# Vue2原理学习

本篇笔记学习，参考自尤雨溪课程[`Vue Workshop:Advanced Features from the Ground Up`](https://www.bilibili.com/video/BV1d4411v7UX?spm_id_from=333.788.videopod.episodes&vd_source=6eb095cb0562513bfc69ebc6ae07e057&p=2)

## 笔记目录
1. [1.数据劫持](./1.数据劫持.md)
2. [2.依赖追踪](./2.依赖追踪.md)
3. [3.迷你观察者](./3.迷你观察者.md)
4. [4.渲染函数](./4.渲染函数.md)
5. [5.插件编写](./5.插件编写.md)



## 背景思考

```js
let a = 10
let b = a * 10
```
思考：当a发生变化时，如何让b自动更新？

```js
onStateChange(() => {
  b = a * 10
})
```
`onStateChange`如何实现?
如果可以实现，通过监听状态的变化，来实现视图的更新渲染，则是响应式框架的核心。

```js
onStateChange(() => {
 view = render(state) 
})
```

## 认识：基本原理
```js
let update
const onStateChange = _update => {
  update = _update
}

const setState = newState => {
  state = newState
  update()
}
```
实际上就是将`更新函数`暂时存到外部，当状态发生改变时，调用`更新函数`，实现视图的更新。（更新函数用于处理视图渲染的逻辑，实际上就是渲染函数）。

需要限制用户不能随意去调用更新函数，必须要求，通过调用`特定函数`变更状态，才能调用更新函数。
以上其实是React实现的基本原理。

Vue将这些动作封装了起来，它将你的对象转换成响应性的对象，当状态发生变化，自动调用更新函数。接下来让我们学习一下Vue是如何实现响应性的。
