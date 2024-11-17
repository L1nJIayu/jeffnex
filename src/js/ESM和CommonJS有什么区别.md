# ESM和CommonJS有什么区别

​	`ESM`是ES6在语言层面上引入的，标准的模块化方案，`CJS`是在原生支持出现之前，为了解决NodeJS环境的模块化方案。

1. 从写法上，`ESM`是通过import和export关键字来导入和暴露模块；`CJS`是通过require来引入，exports或者module.exports来暴露模块。
2. `ESM`支持静态分析，可以在编译阶段就加载模块；而`CJS`是运行时才加载模块；
3. `ESM`引入的属性，可以保证实时性；而`CJS`引入的是模块的一份拷贝内容；



"ESM 是 JavaScript 的标准模块系统，支持静态分析和异步加载，更适合现代前端开发；CJS 是 Node.js 默认的模块系统，依赖动态加载，更适合服务器端开发。"