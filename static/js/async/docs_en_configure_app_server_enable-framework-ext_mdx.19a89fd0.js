(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_server_enable-framework-ext_mdx"],{73447:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var r in s)Object.defineProperty(e,r,{enumerable:!0,get:s[r]})}(s,{frontmatter:function(){return o},toc:function(){return i},title:function(){return c},default:function(){return t}});var n=r("12151"),l=r("21447");let o={sidebar_label:"enableFrameworkExt"},i=[{id:"example",text:"Example",depth:2}],c="server.enableFrameworkExt";function a(e){let s=Object.assign({h1:"h1",a:"a",ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span",h2:"h2"},(0,l.useMDXComponents)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.h1,{id:"serverenableframeworkext",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#serverenableframeworkext",children:"#"}),"server.enableFrameworkExt"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"boolean"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["By default, with ",(0,n.jsx)(s.a,{href:"/en/guides/advanced-features/web-server.html",children:"Custom Web Server"})," enabled, Middleware uses the syntax of the Modern.js itself."]}),"\n",(0,n.jsxs)(s.p,{children:["Enable ",(0,n.jsx)(s.code,{children:"server.enableFrameworkExt"})," to use the syntax of framework extensions."]}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  server"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    enableFrameworkExt"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h2,{id:"example",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,n.jsx)(s.p,{children:"Default usage:"}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"server/index.ts"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Middleware } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/server'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"middleware"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Middleware"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" (ctx"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" next) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"ctx"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"request"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:".url);"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"next"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(s.p,{children:"When enabled, Middleware types will be exported from other namespaces and can the syntax of framework extensions:"}),"\n",(0,n.jsxs)(s.div,{className:"language-ts",children:[(0,n.jsx)(s.div,{className:"modern-code-title",children:"server/index.ts"}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { SomeType } "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/{namespace}'"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(s.span,{className:"line"}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"middleware"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"SomeType"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"..."}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"args) "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(args["}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"].url);"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"next"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive note",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"NOTE"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsx)(s.p,{children:"\nThe above code is pseudo-code, and the specific usage needs to refer to the corresponding framework extension."})})]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}}}]);