(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_topic-detail_generator_config_app_mdx"],{80950:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return d},title:function(){return c},toc:function(){return h},default:function(){return a}});var r=i("12151"),s=i("23169"),d={sidebar_position:2},c="Web 应用",h=[{text:"项目创建",depth:2,id:"项目创建"},{text:"New 命令",depth:2,id:"new-命令"},{text:"actionType",depth:3,id:"actiontype"},{text:"element",depth:3,id:"element"},{text:"name",depth:4,id:"name"},{text:"function",depth:3,id:"function"},{text:"BFF 相关参数",depth:4,id:"bff-相关参数"}];function l(e){var n=Object.assign({h1:"h1",a:"a",h2:"h2",p:"p",code:"code",h3:"h3",ul:"ul",li:"li",div:"div",h4:"h4",h5:"h5"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"web-应用",children:["Web 应用",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#web-应用",children:"#"})]}),"\n",(0,r.jsxs)(n.h2,{id:"项目创建",children:["项目创建",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#项目创建",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["创建项目时配置，",(0,r.jsx)(n.code,{children:"@modern-js/create"})," 使用 ",(0,r.jsx)(n.code,{children:"--config"})," 参数时使用的配置，也是在生成器插件中修改和添加 input 时使用的配置。"]}),"\n",(0,r.jsxs)(n.p,{children:["应用项目创建参数都为",(0,r.jsx)(n.a,{href:"/guides/topic-detail/generator/config/common",children:"通用配置"}),"。"]}),"\n",(0,r.jsxs)(n.h2,{id:"new-命令",children:["New 命令",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#new-命令",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["应用项目中 new 命令配置， 可以在执行 new 命令时通过 ",(0,r.jsx)(n.code,{children:"--config"})," 参数配置，也可在生成器插件中创建元素和启用功能时使用。"]}),"\n",(0,r.jsxs)(n.h3,{id:"actiontype",children:["actionType",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#actiontype",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"New 命令的操作类型(actionType)，类型支持两种："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"element 创建工程元素"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"function 启用功能"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive info",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"INFO"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"在生成器插件中使用启用功能和创建元素时不需要该参数，生成器插件中自动添加该参数。"}),"\n"]})]}),"\n",(0,r.jsxs)(n.h3,{id:"element",children:["element",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#element",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"元素名称(element)，支持两个选项："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"创建应用入口(entry)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"新建自定义 Web Serve 源码目录(server)"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"入口还需要配置具体的配合使用，介绍如下："}),"\n",(0,r.jsxs)(n.h4,{id:"name",children:["name",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#name",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"入口名称(name), 字符串类型。"}),"\n",(0,r.jsxs)(n.h3,{id:"function",children:["function",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"可选功能名称(function)，支持如下选项:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Tailwind CSS(tailwindcss)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"BFF(bff)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"SSG(ssg)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"微前端(micro_frontend)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"单元测试(test)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Storybook(mwa_storybook)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"启用「基于 UA 的 Polyfill」功能(polyfill)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"启用「全局代理」(proxy)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"bff"})," 和还需要配置具体的配合使用，介绍如下："]}),"\n",(0,r.jsxs)(n.h4,{id:"bff-相关参数",children:["BFF 相关参数",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bff-相关参数",children:"#"})]}),"\n",(0,r.jsxs)(n.h5,{id:"bfftype",children:["bffType",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#bfftype",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"BFF 类型(bffType)，支持两个选项："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"函数模式(function)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"框架模式(framework)"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.h5,{id:"framework",children:["framework",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#framework",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"BFF 运行时框架(framework)，支持两个选项："}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Express(express)"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Koa(koa)"}),"\n"]}),"\n"]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,s.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);