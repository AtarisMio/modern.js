(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["splitted~docs_en_api_config-output_mdx17"],{15889:function(e,s,l){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var l in s)Object.defineProperty(e,l,{enumerable:!0,get:s[l]})}(s,{frontmatter:function(){return i},toc:function(){return d},default:function(){return c}});var n=l("12151");let i=void 0,d=[{id:"example",text:"Example",depth:3},{id:"detailed",text:"Detailed",depth:3},{id:"disablecssmoduleextension-is-false-default",text:"disableCssModuleExtension is false (default)",depth:4},{id:"disablecssmoduleextension-is-true",text:"disableCssModuleExtension is true",depth:4}];function r(e){let s=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",div:"div",h3:"h3",a:"a",button:"button",pre:"pre",span:"span",h4:"h4"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Type:"})," ",(0,n.jsx)(s.code,{children:"boolean"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Default:"})," ",(0,n.jsx)(s.code,{children:"false"})]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Whether to treat all ",(0,n.jsx)(s.code,{children:".css"})," files in the source directory as CSS Modules."]}),"\n",(0,n.jsxs)(s.p,{children:["By default, only the ",(0,n.jsx)(s.code,{children:"*.module.css"})," files are treated as CSS Modules. After enabling this config, all ",(0,n.jsx)(s.code,{children:"*.css"})," style files in the source directory will be regarded as CSS Modules."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:".sass"}),", ",(0,n.jsx)(s.code,{children:".scss"})," and ",(0,n.jsx)(s.code,{children:".less"})," files are also affected by ",(0,n.jsx)(s.code,{children:"disableCssModuleExtension"}),"."]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive tip",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsxs)(s.p,{children:["\nWe do not recommend enabling this config, because after enabling ",(0,n.jsx)(s.code,{children:"disableCssModuleExtension"}),", CSS Modules files and ordinary CSS files cannot be clearly distinguished, which is not conducive to long-term maintenance."]})})]}),"\n",(0,n.jsxs)(s.h3,{id:"example",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,n.jsxs)(s.div,{className:"language-js",children:[(0,n.jsx)(s.div,{className:""}),(0,n.jsxs)(s.div,{className:"modern-code-content",children:[(0,n.jsx)(s.button,{className:"copy"}),(0,n.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(s.code,{children:[(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    disableCssModuleExtension"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(s.span,{className:"line",children:[(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(s.span,{className:"line",children:(0,n.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(s.h3,{id:"detailed",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#detailed",children:"#"}),"Detailed"]}),"\n",(0,n.jsx)(s.p,{children:"The following is a detailed explanation of the CSS Modules rules:"}),"\n",(0,n.jsxs)(s.h4,{id:"disablecssmoduleextension-is-false-default",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-false-default",children:"#"}),"disableCssModuleExtension is false (default)"]}),"\n",(0,n.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["all ",(0,n.jsx)(s.code,{children:"*.module.css"})," files"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["all ",(0,n.jsx)(s.code,{children:"*.css"})," files (excluding ",(0,n.jsx)(s.code,{children:".module"}),")"]}),"\n",(0,n.jsxs)(s.li,{children:["all ",(0,n.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n"]}),"\n",(0,n.jsxs)(s.h4,{id:"disablecssmoduleextension-is-true",children:[(0,n.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#disablecssmoduleextension-is-true",children:"#"}),"disableCssModuleExtension is true"]}),"\n",(0,n.jsx)(s.p,{children:"The following files are treated as CSS Modules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"*.css"})," and ",(0,n.jsx)(s.code,{children:"*.module.css"})," files in the source directory"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"*.module.css"})," files under node_modules"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"The following files are treated as normal CSS:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["all ",(0,n.jsx)(s.code,{children:"*.global.css"})," files"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"*.css"})," files under node_modules (without ",(0,n.jsx)(s.code,{children:".module"}),")"]}),"\n"]}),"\n",(0,n.jsxs)(s.div,{className:"modern-directive tip",children:[(0,n.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,n.jsx)(s.div,{className:"modern-directive-content",children:(0,n.jsxs)(s.p,{children:["\nFor CSS Modules files inside node_modules, please always use the ",(0,n.jsx)(s.code,{children:"*.module.css"}),"suffix."]})})]})]})}var c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=e.components||{};return s?(0,n.jsx)(s,Object.assign({},e,{children:(0,n.jsx)(r,e)})):r(e)}}}]);