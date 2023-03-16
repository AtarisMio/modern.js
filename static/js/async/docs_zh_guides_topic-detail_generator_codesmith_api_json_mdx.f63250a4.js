(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_topic-detail_generator_codesmith_api_json_mdx"],{54874:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return o},toc:function(){return l},title:function(){return t},default:function(){return a}});var r=n("12151"),i=n("21447");let o={sidebar_position:2},l=[{id:"使用姿势",text:"使用姿势",depth:2},{id:"api",text:"API",depth:2},{id:"get",text:"get",depth:3},{id:"extend",text:"extend",depth:3},{id:"update",text:"update",depth:3}],t="@modern-js/codesmith-api-json";function c(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"modern-jscodesmith-api-json",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#modern-jscodesmith-api-json",children:"#"}),"@modern-js/codesmith-api-json"]}),"\n",(0,r.jsx)(s.p,{children:"微生成器中 JSON API 封装，提供常见的 JSON 文件操作方法。"}),"\n",(0,r.jsxs)(s.h2,{id:"使用姿势",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#使用姿势",children:"#"}),"使用姿势"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { JsonAPI } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/codesmith-api-json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (context"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorContext"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" generator"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"GeneratorCore"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:") "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"jsonAPI"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"new"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"JsonAPI"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(generator);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"jsonAPI"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".update"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"context"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"materials"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"default"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".get"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'package.json'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    query"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    update"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      $set"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'dependencies.@modern-js/plugin-bff'"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`^2.0.0`"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  });"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["创建 JsonAPI 实例，参数为微生成器函数参数的 generator，具体介绍请看",(0,r.jsx)(s.a,{href:"/guides/topic-detail/generator/codesmith/structure.html",children:"微生成器项目组成"}),"。"]}),"\n",(0,r.jsx)(s.li,{children:"调用其实例上 API 即可。"}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"api",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#api",children:"#"}),"API"]}),"\n",(0,r.jsxs)(s.h3,{id:"get",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#get",children:"#"}),"get"]}),"\n",(0,r.jsx)(s.p,{children:"获取 JSON 文件内容。"}),"\n",(0,r.jsx)(s.p,{children:"参数："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["resource: ",(0,r.jsx)(s.code,{children:"FsResource"}),"，文件资源，通过 ",(0,r.jsx)(s.code,{children:"context.materials.default.get(<filename>)"})," 获取。"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"extend",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#extend",children:"#"}),"extend"]}),"\n",(0,r.jsx)(s.p,{children:"合并对象至 JSON 文件。"}),"\n",(0,r.jsx)(s.p,{children:"参数："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["resource: ",(0,r.jsx)(s.code,{children:"FsResource"})," 通过 ",(0,r.jsx)(s.code,{children:"context.materials.default.get(<filename>)"})," 获取。"]}),"\n",(0,r.jsxs)(s.li,{children:["obj: ",(0,r.jsx)(s.code,{children:"Record<string, any>"})," 需合并对象。"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"update",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#update",children:"#"}),"update"]}),"\n",(0,r.jsx)(s.p,{children:"更新对象字段至 JSON 文件。"}),"\n",(0,r.jsx)(s.p,{children:"参数："}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["resource: ",(0,r.jsx)(s.code,{children:"FsResource"})," 通过 ",(0,r.jsx)(s.code,{children:"context.materials.default.get(<filename>)"})," 获取。"]}),"\n",(0,r.jsxs)(s.li,{children:["operation: ",(0,r.jsx)(s.code,{children:"{ query: Record<string, any>; update: Record<string, any> }"})," 更新操作，详细使用姿势查看 ",(0,r.jsx)(s.a,{href:"https://www.npmjs.com/package/declaration-update",target:"_blank",rel:"nofollow",children:"declaration-update"}),"。"]}),"\n"]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,i.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(c,e)})):c(e)}}}]);