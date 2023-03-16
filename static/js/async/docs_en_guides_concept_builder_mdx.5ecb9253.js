(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_concept_builder_mdx"],{59002:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return l},toc:function(){return d},title:function(){return o},default:function(){return a}});var i=r("12151"),s=r("21447");let l={sidebar_position:2},d=[{id:"build-architecture",text:"Build Architecture",depth:2},{id:"builder-documentation",text:"Builder Documentation",depth:2},{id:"builder-config",text:"Builder Config",depth:2},{id:"building-features",text:"Building Features",depth:2}],o="Builder";function t(e){let n=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span"},(0,s.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"builder",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder",children:"#"}),"Builder"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsxs)(n.strong,{children:["Modern.js uses ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder",target:"_blank",rel:"nofollow",children:"Modern.js Builder"})," to build your Web App."]})}),"\n",(0,i.jsx)(n.p,{children:"Modern.js Builder is one of the core components of Modern.js. It is A build engine for web development. and can be used independently of Modern.js. Modern.js Builder supports multiple bundlers such as webpack and Rspack, and it uses webpack by default."}),"\n",(0,i.jsxs)(n.h2,{id:"build-architecture",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-architecture",children:"#"}),"Build Architecture"]}),"\n",(0,i.jsx)(n.p,{children:"From the perspective of building, Modern.js is divided into three layers, from top to bottom:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Upper-layer framework: Modern.js."}),"\n",(0,i.jsx)(n.li,{children:"Universal build engine: Modern.js Builder."}),"\n",(0,i.jsx)(n.li,{children:"Low-level bundlers: webpack and rspack."}),"\n"]}),"\n",(0,i.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png",style:{maxWidth:"540px"}}),"\n",(0,i.jsxs)(n.h2,{id:"builder-documentation",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-documentation",children:"#"}),"Builder Documentation"]}),"\n",(0,i.jsxs)(n.p,{children:["Since Modern.js Builder is a module that can be used independently, we provide a separate document for it, the site address is: ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder",target:"_blank",rel:"nofollow",children:"modernjs.dev/builder"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"In this document, you can learn about the detailed introduction of Modern.js Builder, and you can also find a complete usage guide for each building features. When you encounter building issues, it is recommended that you first read the Modern.js Builder documentation to solve them."}),"\n",(0,i.jsxs)(n.h2,{id:"builder-config",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#builder-config",children:"#"}),"Builder Config"]}),"\n",(0,i.jsx)(n.p,{children:"The config of Modern.js is inherited from Modern.js Builder, so you can use all build configs provided by Modern.js Builder in Modern.js."}),"\n",(0,i.jsxs)(n.p,{children:["Take the ",(0,i.jsx)(n.code,{children:"html.title"})," config of Modern.js Builder as an example, you can directly use this config in the ",(0,i.jsx)(n.code,{children:"modern.config.ts"})," file, and it will be automatically passed to Modern.js Builder."]}),"\n",(0,i.jsxs)(n.div,{className:"language-ts",children:[(0,i.jsx)(n.div,{className:"modern-code-title",children:"modern.config.js"}),(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(n.code,{children:[(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  html"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    title"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'example'"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(n.span,{className:"line",children:[(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(n.span,{className:"line",children:(0,i.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,i.jsx)(n.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(n.p,{children:["For details of building configs, please refer to ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/basic/builder-config.html",target:"_blank",rel:"nofollow",children:"「Modern.js Builder - Builder Config」"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"building-features",children:[(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#building-features",children:"#"}),"Building Features"]}),"\n",(0,i.jsx)(n.p,{children:"Modern.js Builder provides a wealth of building features, including dozens of features such as JavaScript compilation, CSS compilation, static resource processing, hot module replacement, code compression, and TS type checking."}),"\n",(0,i.jsxs)(n.p,{children:["We recommend you to read ",(0,i.jsx)(n.a,{href:"https://modernjs.dev/builder/en/guide/features.html",target:"_blank",rel:"nofollow",children:"「Modern.js Builder - All Features」"})," to learn all the building features provided by Modern.js Builder."]})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(t,e)})):t(e)}}}]);