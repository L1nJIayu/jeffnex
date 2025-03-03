import { defineConfig } from 'vitepress'
import markdownItTaskLists from 'markdown-it-task-lists'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/jeffnex/",
  title: "JeffNex",
  description: "JeffNex - 从代码到认知的持续交付",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      {
        text: '知识库',
        items: [
          { text: 'JS', link: '/知识库/js' },
          { text: 'CSS', link: '/知识库/css' },
          { text: 'Vue', link: '/知识库/vue' },
          { text: 'TS类型体操', link: '/知识库/TS类型体操' },
          { text: '浏览器和网络', link: '/知识库/浏览器和网络' },
          { text: '数据结构和算法', link: '/知识库/数据结构和算法' },
          { text: '其他', link: '/知识库/其他' },
        ]
      },
      { text: '面经', link: '/面经' },
      { text: '问题记录', link: '/问题记录' },
      { text: 'TODO', link: '/TODO.md' },
      { text: '关于我', link: '/me.md' },
    ],

    sidebar: {
      '/知识库/css/': [
        { text: '目录', link: './index.md' },
        {
          text: 'CSS',
          items: [
            { text: 'box-sizing', link: './box-sizing.md' },
            { text: 'CSS3的transform属性有哪些用法', link: './CSS3的transform属性有哪些用法.md' },
            { text: 'Flex有哪些常用的属性', link: './Flex有哪些常用的属性.md' },
            { text: 'flex为1的时候代表什么意思', link: './flex为1的时候代表什么意思.md' },
            { text: '如果使用transform如何实现垂直居中？', link: './如果使用transform如何实现垂直居中.md' },
            { text: '伪元素和伪类是否熟悉？他们有什么区别？用法都是什么？', link: './伪元素和伪类是否熟悉？他们有什么区别？用法都是什么？.md' },
            { text: '只用CSS画一个三角形', link: './只用CSS画一个三角形.md' },
            // { text: '层叠上下文', link: '/css/层叠上下文.md' },
            // { text: '垂直居中的方案', link: '/css/垂直居中的方案.md' },
            // { text: 'FLex布局', link: '/css/FLex布局.md' },
            // { text: 'Grid布局', link: '/css/Grid布局.md' }
          ]
        }
      ],
      '/知识库/js/': [
        { text: '目录', link: './index.md' },
        {
          text: '异步',
          items: [
            { text: '谈一下异步调用的发展历程', link: './谈一下异步调用的发展历程.md' },
            { text: 'Promise的归纳总结', link: './Promise的归纳总结.md' },
            { text: '手写一下Promise', link: './手写一下Promise.md' },
            { text: '手写Promise.all', link: './手写Promise.all.md' },
          ]
        },
        {
          text: '事件循环',
          items: [
            { text: '展开讲一下什么是事件循环', link: './展开讲一下什么是事件循环.md' },
          ]
        },
        {
          text: '模块',
          items: [
            { text: 'ESM和CommonJS有什么区别', link: './ESM和CommonJS有什么区别.md' },
          ]
        }
      ],
      '/知识库/vue/': [
        { text: '目录', link: './index.md' },
        {
          text: 'Vue',
          items: [
            { text: 'hook和普通的函数有什么区别', link: './hook和普通的函数有什么区别.md' },
          ]
        },
        {
          text: '额外的记录',
          items: [
            { text: 'watch传入的源reactive和ref的区别', link: './额外的记录/watch传入的源reactive和ref的区别.md' },
          ]
        }
      ],
      '/知识库/浏览器和网络/': [
        { text: '目录', link: '/浏览器和网络'},
        {
          text: '浏览器',
          items: [
            { text: '我改变一个可见元素的宽高，会发生reflow还是repaint？使用translateX呢？', link: './浏览器/我改变一个可见元素的宽高，会发生reflow还是repaint？使用translateX呢？.md' },
            { text: '讲一下浏览器渲染里的reflow和repaint', link: './浏览器/讲一下浏览器渲染里的reflow和repaint.md' },
          ]
        },
        {
          text: '网络',
          items: [
            { text: '在浏览器搜索栏中输入一个url会发生什么', link: './网络/在浏览器搜索栏中输入一个url会发生什么.md' },
            { text: '讲下TCP三次握手的过程？稍微详细些', link: './网络/讲下TCP三次握手的过程？稍微详细些.md' },
            { text: '讲一下TCP的四次挥手', link: './网络/讲一下TCP的四次挥手.md' },
            { text: '什么是跨域问题？如何解决？', link: './网络/什么是跨域问题，如何解决.md' },
          ]
        }
      ],
      '/知识库/数据结构和算法/': [
        { text: '目录', link: '/数据结构和算法'},
        {
          text: '算法',
          items: [
            { text: '实现一个sum函数', link: './算法/实现一个sum函数.md'}
          ]
        },
        {
          text: '数据结构',
          items: [
          ]
        }
      ],
      '/问题记录': [
        { text: '目录', link: '/问题记录'},
        {
          text: 'Electron',
          items: [
            { text: 'electron-vite 打包makensis.exe报错', link: './Electron/electron-vite打包makensis.exe报错.md' }
          ]
        },
        {
          text: 'TypeScript',
          items: [
            { text: 'Vue组件引入@开头的路径报错', link: './TypeScript/Vue组件引入@开头的路径报错.md' }
          ]
        }
      ],
      '/知识库/TS类型体操': [
        { text: '目录', link: '/TS类型体操'},
        {
          text: '1.模式匹配',
          link: './1.模式匹配.md'
        },
        {
          text: '2.类型的重新构造',
          link: './2.类型的重新构造.md'
        },
        {
          text: '3.递归',
          link: './3.递归.md'
        },
        {
          text: '4.使用数组长度做运算',
          link: './4.使用数组长度做运算.md'
        },
        {
          text: '5.联合类型',
          link: './5.联合类型.md'
        },
        {
          text: '6.特殊特性',
          link: './6.特殊特性.md'
        }
      ],
      '知识库/其他': [
        { text: '目录', link: './index.md'},
        { text: '什么是monorepo', link: './什么是monorepo.md'},
      ],
      '/面经/': [
        { text: '目录', link: '/面经'},
        {
          text: '2024',
          items: [
            { text: '比亚迪_一面_2024_10_24', link: './2024/比亚迪_一面_2024_10_24.md' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/L1nJiayu' }
    ]
  },
  markdown: {
    config: (md) => {
      md.use(markdownItTaskLists)
    }
  }
})
