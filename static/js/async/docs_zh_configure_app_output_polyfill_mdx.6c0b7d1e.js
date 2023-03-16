(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_configure_app_output_polyfill_mdx"],{82297:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var s=r("12151"),l=r("21447");function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",h4:"h4",div:"div"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"类型："})," ",(0,s.jsx)(n.code,{children:"'entry' | 'usage' | 'ua' | 'off'"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"默认值："})," ",(0,s.jsx)(n.code,{children:"'entry'"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["通过 ",(0,s.jsx)(n.code,{children:"output.polyfill"})," 你可以配置 Polyfill 的注入方式。"]}),"\n",(0,s.jsxs)(n.h3,{id:"配置项",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#配置项",children:"#"}),"配置项"]}),"\n",(0,s.jsxs)(n.h4,{id:"entry",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#entry",children:"#"}),"entry"]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"output.polyfill"})," 配置为 ",(0,s.jsx)(n.code,{children:"'entry'"})," 时，会在每个入口文件中注入 Polyfill。"]}),"\n",(0,s.jsxs)(n.p,{children:["等价于 ",(0,s.jsx)(n.code,{children:"@babel/preset-env"})," 的 ",(0,s.jsx)(n.code,{children:"useBuiltIns: 'entry'"})," 配置。"]}),"\n",(0,s.jsxs)(n.h4,{id:"usage",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"usage"]}),"\n",(0,s.jsxs)(n.p,{children:["当 ",(0,s.jsx)(n.code,{children:"output.polyfill"})," 配置为 ",(0,s.jsx)(n.code,{children:"'usage'"})," 时，会在每个文件中根据代码中使用的 API 注入 Polyfill。"]}),"\n",(0,s.jsxs)(n.p,{children:["等价于 ",(0,s.jsx)(n.code,{children:"@babel/preset-env"})," 的 ",(0,s.jsx)(n.code,{children:"useBuiltIns: 'usage'"})," 配置。"]}),"\n",(0,s.jsxs)(n.h4,{id:"ua",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ua",children:"#"}),"ua"]}),"\n",(0,s.jsx)(n.p,{children:"根据当前请求的 UA 信息，动态下发 Polyfill 代码。"}),"\n",(0,s.jsxs)(n.h4,{id:"off",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#off",children:"#"}),"off"]}),"\n",(0,s.jsx)(n.p,{children:"不注入 Polyfill。使用此选项时，需要自行保证代码的兼容性。"}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["\n在使用 Rspack 作为打包工具时，暂不支持 ",(0,s.jsx)(n.code,{children:"usage"}),"配置项。"]})})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(i,e)})):i(e)}},77744:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},toc:function(){return c},title:function(){return d},default:function(){return a}});var s=r("12151"),l=r("21447"),i=r.ir(r("82297"));let t={sidebar_label:"polyfill"},c=[],d="output.polyfill";function o(e){let n=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,l.useMDXComponents)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.h1,{id:"outputpolyfill",children:[(0,s.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#outputpolyfill",children:"#"}),"output.polyfill"]}),"\n",(0,s.jsxs)(n.div,{className:"modern-directive tip",children:[(0,s.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,s.jsx)(n.div,{className:"modern-directive-content",children:(0,s.jsxs)(n.p,{children:["\n该配置由 Modern.js Builder 提供，更多信息可参考 ",(0,s.jsx)(n.a,{href:"https://modernjs.dev/builder/api/config-output.html#outputpolyfill",target:"_blank",rel:"nofollow",children:"output.polyfill"}),"。"]})})]}),"\n","\n",(0,s.jsx)(i.default,{})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,l.useMDXComponents)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(o,e)})):o(e)}}}]);