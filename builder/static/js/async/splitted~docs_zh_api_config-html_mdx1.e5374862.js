(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["splitted~docs_zh_api_config-html_mdx1"],{2580:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return l},default:function(){return o}});var r=n("12151");let i=void 0,l=[{id:"示例",text:"示例",depth:3}];function c(s){let e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"类型："})," ",(0,r.jsx)(e.code,{children:"Record<string, string>"})]}),"\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.strong,{children:"默认值："})," ",(0,r.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"用于在多页面的场景下，为不同的页面设置不同的 favicon。"}),"\n",(0,r.jsxs)(e.p,{children:["整体用法与 ",(0,r.jsx)(e.code,{children:"favicon"})," 一致，并且可以使用「入口名称」作为 key ，对各个页面进行单独设置。"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"faviconByEntries"})," 的优先级高于 ",(0,r.jsx)(e.code,{children:"favicon"}),"，因此会覆盖 ",(0,r.jsx)(e.code,{children:"favicon"})," 中设置的值。"]}),"\n",(0,r.jsxs)(e.h3,{id:"示例",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#示例",children:"#"}),"示例"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  html"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    favicon"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/assets/default.png'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    faviconByEntries"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      foo"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'./src/assets/foo.png'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"重新编译后，可以看到:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["页面 ",(0,r.jsx)(e.code,{children:"foo"})," 的 favicon 为 ",(0,r.jsx)(e.code,{children:"./src/assets/foo.png"}),"。"]}),"\n",(0,r.jsxs)(e.li,{children:["其他页面的 favicon 为 ",(0,r.jsx)(e.code,{children:"./src/assets/default.png"}),"。"]}),"\n"]})]})}var o=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);