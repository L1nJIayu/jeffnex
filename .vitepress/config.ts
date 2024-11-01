import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/interviewQuestion/",
  title: "题目合集",
  description: "此站点用于收集各路面试题，方便复习和巩固知识点，不会有系统完整的知识点，仅是为了快速回顾",
  srcDir: './src',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'CSS', link: '/css' },
      { text: 'JS', link: '/js' },
      { text: 'Vue', link: '/vue' },
      { text: '浏览器和网络', link: '/浏览器和网络' },
      { text: '数据结构和算法', link: '/数据结构和算法' },
      // { text: '网络', link: '/network' },
    ],

    sidebar: {
      '/css/': [
        {
          text: 'CSS',
          items: [
            { text: 'CSS3的transform属性有哪些用法', link: '/css/CSS3的transform属性有哪些用法.md' },
            { text: 'Flex有哪些常用的属性', link: '/css/Flex有哪些常用的属性.md' },
            { text: 'flex为1的时候代表什么意思', link: '/css/flex为1的时候代表什么意思.md' },
            { text: 'CSS3的transform属性有哪些用法', link: '/css/CSS3的transform属性有哪些用法.md' },
            { text: '如果使用transform如何实现垂直居中？', link: '/css/如果使用transform如何实现垂直居中.md' },
            { text: '伪元素和伪类是否熟悉？他们有什么区别？用法都是什么？', link: '/css/伪元素和伪类是否熟悉？他们有什么区别？用法都是什么？.md' },
            // { text: '层叠上下文', link: '/css/层叠上下文.md' },
            // { text: '垂直居中的方案', link: '/css/垂直居中的方案.md' },
            // { text: 'FLex布局', link: '/css/FLex布局.md' },
            // { text: 'Grid布局', link: '/css/Grid布局.md' }
          ]
        }
      ],
      '/js/': [
        {
          text: 'JS',
          items: [
            { text: '谈一下异步调用的发展历程', link: '/js/谈一下异步调用的发展历程.md' },
            { text: '详细说一下Promise的用法', link: '/js/详细说一下Promise的用法.md' }
          ]
        }
      ],
      '/vue/': [
        {
          text: 'Vue',
          items: [
            { text: 'hook和普通的函数有什么区别', link: '/vue/hook和普通的函数有什么区别.md' },
          ]
        },
        {
          text: '额外的记录',
          items: [
            { text: 'watch传入的源reactive和ref的区别', link: '/vue/额外的记录/watch传入的源reactive和ref的区别.md' },
          ]
        }
      ],
      '/浏览器和网络/': [
        {
          text: '浏览器',
          items: [
            { text: '我改变一个可见元素的宽高，会发生reflow还是repaint？使用translateX呢？', link: '/浏览器和网络/我改变一个可见元素的宽高，会发生reflow还是repaint？使用translateX呢？.md' },
            { text: '讲一下浏览器渲染里的reflow和repaint', link: '/浏览器和网络/讲一下浏览器渲染里的reflow和repaint.md' },
          ]
        },
        {
          text: '网络',
          items: [
            { text: '在浏览器搜索栏中输入一个url会发生什么', link: '/浏览器和网络/在浏览器搜索栏中输入一个url会发生什么.md' },
            { text: '讲下TCP三次握手的过程？稍微详细些', link: '/浏览器和网络/讲下TCP三次握手的过程？稍微详细些.md' },
            { text: '什么是跨域问题？如何解决？', link: '/浏览器和网络/什么是跨域问题？如何解决？.md' },
          ]
        }
      ],
      '/数据结构和算法/': [
        {
          text: '算法',
          items: [
            { text: '实现一个sum函数', link: '/数据结构和算法/实现一个sum函数.md'}
          ]
        },
        {
          text: '数据结构',
          items: [
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/L1nJiayu' }
    ]
  }
})
