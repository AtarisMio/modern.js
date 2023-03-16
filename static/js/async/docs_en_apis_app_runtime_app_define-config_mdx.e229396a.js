(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_runtime_app_define-config_mdx"],{70211:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},toc:function(){return l},title:function(){return c},default:function(){return t}});var i=s("12151"),r=s("21447");let o={title:"defineConfig"},l=[{id:"usage",text:"Usage",depth:2},{id:"function-signature",text:"Function Signature",depth:2},{id:"input",text:"Input",depth:3},{id:"example",text:"Example",depth:2}],c="defineConfig";function a(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",strong:"strong",h3:"h3",ul:"ul",li:"li",ol:"ol"},(0,r.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"defineconfig",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defineconfig",children:"#"}),"defineConfig"]}),"\n",(0,i.jsx)(n.p,{children:"For dynamically configuring applications runtime features."}),"\n",(0,i.jsxs)(n.h2,{id:"usage",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#usage",children:"#"}),"Usage"]}),"\n",(0,i.jsxs)(n.div,{className:"language-ts",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { defineConfig } "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Runtime configurations can usually be configured under the ",(0,i.jsx)(n.code,{children:"runtime"})," of the ",(0,i.jsx)(n.code,{children:"modern.config.js"}),", such as the ",(0,i.jsx)(n.a,{href:"/en/configure/app/runtime/router.html",children:"router"})," configuration."]}),"\n",(0,i.jsxs)(n.p,{children:["The configuration in ",(0,i.jsx)(n.code,{children:"modern.config.js"})," is determined at build time，If some configuration parameters are obtained at runtime, or if the configuration parameters are from a module (such as a component), then need use ",(0,i.jsx)(n.code,{children:"defineConfig"})," API configuration on runtime."]}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(n.div,{className:"modern-directive-content",children:(0,i.jsxs)(n.p,{children:["\n",(0,i.jsx)(n.code,{children:"@modern-js/app-tools"})," has the same name API, Used to provide ",(0,i.jsx)(n.strong,{children:"TS type for configuration"}),", please distinguish them."]})})]}),"\n",(0,i.jsxs)(n.h2,{id:"function-signature",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"}),"Function Signature"]}),"\n",(0,i.jsxs)(n.div,{className:"language-ts",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(Component"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" config)"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"any"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.h3,{id:"input",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"}),"Input"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Component: App root Component."}),"\n",(0,i.jsx)(n.li,{children:"config: runtime config."}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,i.jsxs)(n.div,{className:"language-tsx",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" () {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(n.span,{className:"line"}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(App"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  router"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    supportHtml5History"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"false"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"defineConfig"})," can configuring ",(0,i.jsx)(n.a,{href:"/en/configure/app/runtime/state.html",children:"runtime.state"}),"、",(0,i.jsx)(n.a,{href:"/en/configure/app/runtime/router.html",children:"runtime.router"})," etc."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"defineConfig"})," before configuring a property, such as ",(0,i.jsx)(n.code,{children:"router"}),", you need to make sure that the ",(0,i.jsx)(n.code,{children:"modern.config.js"})," has been configured to enable this feature."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"defineConfig"})," incoming configuration will be merged with the configuration in ",(0,i.jsx)(n.code,{children:"modern.config.js"}),". Taking ",(0,i.jsx)(n.code,{children:"router"})," as an example, the final application configuration is as follows:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.div,{className:"language-json",children:[(0,i.jsx)(n.div,{className:""}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// 来自 `modern.config.js`"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  ...runtime.router"})}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// 来自 `defineConfig`"})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  ...config.router"})}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);