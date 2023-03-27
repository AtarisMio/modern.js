(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guide_optimization_split-chunk_md"],{77761:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return o},title:function(){return c},default:function(){return t}});var i=n("12151"),l=n("21447");let r=void 0,o=[{id:"splitting-strategies",text:"Splitting Strategies",depth:2},{id:"split-by-experience",text:"split-by-experience",depth:3},{id:"behavior",text:"Behavior",depth:4},{id:"config",text:"Config",depth:4},{id:"split-by-module",text:"split-by-module",depth:3},{id:"behavior-1",text:"Behavior",depth:4},{id:"config-1",text:"Config",depth:4},{id:"all-in-one",text:"all-in-one",depth:3},{id:"behavior-2",text:"Behavior",depth:4},{id:"config-2",text:"Config",depth:4},{id:"single-vendor",text:"single-vendor",depth:3},{id:"behavior-3",text:"Behavior",depth:4},{id:"config-3",text:"Config",depth:4},{id:"split-by-size",text:"split-by-size",depth:3},{id:"behavior-4",text:"Behavior",depth:4},{id:"config-4",text:"Config",depth:4},{id:"custom-splitting-strategy",text:"Custom Splitting Strategy",depth:2},{id:"custom-group",text:"Custom Group",depth:3},{id:"custom-webpack-splitchunks-config",text:"Custom Webpack splitChunks Config",depth:3}],c="Chunk Splitting Practice";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",blockquote:"blockquote",ul:"ul",li:"li",code:"code",h3:"h3",h4:"h4",div:"div",button:"button",pre:"pre",span:"span"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"chunk-splitting-practice",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#chunk-splitting-practice",children:"#"}),"Chunk Splitting Practice"]}),"\n",(0,i.jsx)(s.p,{children:"A great chunk splitting strategy is very important to improve the loading performance of the application. It can make full use of the browser's caching mechanism to reduce the number of requests and improve the loading speed of the application."}),"\n",(0,i.jsx)(s.p,{children:"A variety of chunk splitting strategies are built into Builder, which can meet the needs of most applications. You can also customize the chunk splitting config according to your own business scenarios."}),"\n",(0,i.jsxs)(s.h2,{id:"splitting-strategies",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#splitting-strategies",children:"#"}),"Splitting Strategies"]}),"\n",(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.p,{children:["The chunk splitting config of Builder is in ",(0,i.jsx)(s.a,{href:"/builder/en/api/config-performance.html#performancechunksplit",children:"performance.chunkSplit"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Builder supports the following chunk splitting strategies:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"split-by-experience"}),": an empirical splitting strategy, automatically splits some commonly used npm packages into chunks of moderate size."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"split-by-module"}),": split by NPM package granularity, each NPM package corresponds to a chunk."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"split-by-size"}),": automatically split according to module size."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"all-in-one"}),": bundle all codes into one chunk."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"single-vendor"}),": bundle all NPM packages into a single chunk."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"custom"}),": custom chunk splitting strategy."]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"split-by-experience",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-experience",children:"#"}),"split-by-experience"]}),"\n",(0,i.jsxs)(s.h4,{id:"behavior",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior",children:"#"}),"Behavior"]}),"\n",(0,i.jsxs)(s.p,{children:["Builder adopts the ",(0,i.jsx)(s.code,{children:"split-by-experience"})," strategy by default, which is a strategy we have developed from experience. Specifically, when the following npm packages are referenced in your project, they will automatically be split into separate chunks:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"lib-polyfill.js"}),": includes ",(0,i.jsx)(s.code,{children:"core-js"}),", ",(0,i.jsx)(s.code,{children:"@babel/runtime"}),", ",(0,i.jsx)(s.code,{children:"@swc/helpers"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"lib-react.js"}),": includes ",(0,i.jsx)(s.code,{children:"react"}),", ",(0,i.jsx)(s.code,{children:"react-dom"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"lib-router.js"}),": includes ",(0,i.jsx)(s.code,{children:"react-router"}),", ",(0,i.jsx)(s.code,{children:"react-router-dom"}),", ",(0,i.jsx)(s.code,{children:"history"}),", ",(0,i.jsx)(s.code,{children:"@remix-run/router"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"lib-lodash.js"}),": includes ",(0,i.jsx)(s.code,{children:"lodash"}),", ",(0,i.jsx)(s.code,{children:"lodash-es"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"lib-antd.js"}),": includes ",(0,i.jsx)(s.code,{children:"antd"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"lib-arco.js"}),": includes ",(0,i.jsx)(s.code,{children:"@arco-design/web-react"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"lib-semi.js"}),": includes ",(0,i.jsx)(s.code,{children:"@douyinfe/semi-ui"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"This strategy groups commonly used packages and then splits them into separate chunks. Generally, the number of chunks is not large, which is suitable for most applications and is also our recommended strategy."}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsx)(s.p,{children:"\nIf the above npm packages are not installed or used in the project, the corresponding chunk will not be generated."})})]}),"\n",(0,i.jsxs)(s.h4,{id:"config",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"}),"Config"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'split-by-experience'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"split-by-module",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-module",children:"#"}),"split-by-module"]}),"\n",(0,i.jsxs)(s.h4,{id:"behavior-1",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-1",children:"#"}),"Behavior"]}),"\n",(0,i.jsx)(s.p,{children:"Split each NPM package into a Chunk."}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive warning",children:[(0,i.jsx)(s.div,{className:"modern-directive-title",children:"WARNING"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsx)(s.p,{children:"\nThis strategy will split the node_modules in the most granular way, and at the same time, under HTTP/2, multiplexing will speed up the loading time of resources.However, in non-HTTP/2 environments, it needs to be used with caution because of HTTP head-of-line blocking problem."})})]}),"\n",(0,i.jsxs)(s.h4,{id:"config-1",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#config-1",children:"#"}),"Config"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'split-by-module'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"all-in-one",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#all-in-one",children:"#"}),"all-in-one"]}),"\n",(0,i.jsxs)(s.h4,{id:"behavior-2",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-2",children:"#"}),"Behavior"]}),"\n",(0,i.jsx)(s.p,{children:"This strategy puts business code and third-party dependencies in the same Chunk."}),"\n",(0,i.jsxs)(s.h4,{id:"config-2",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#config-2",children:"#"}),"Config"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'all-in-one'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"single-vendor",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#single-vendor",children:"#"}),"single-vendor"]}),"\n",(0,i.jsxs)(s.h4,{id:"behavior-3",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-3",children:"#"}),"Behavior"]}),"\n",(0,i.jsx)(s.p,{children:"This strategy puts third-party dependencies in one Chunk, and business code in another Chunk."}),"\n",(0,i.jsxs)(s.h4,{id:"config-3",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#config-3",children:"#"}),"Config"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'single-vendor'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h3,{id:"split-by-size",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#split-by-size",children:"#"}),"split-by-size"]}),"\n",(0,i.jsxs)(s.h4,{id:"behavior-4",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#behavior-4",children:"#"}),"Behavior"]}),"\n",(0,i.jsxs)(s.p,{children:["Under this strategy, after setting ",(0,i.jsx)(s.code,{children:"minSize"}),", ",(0,i.jsx)(s.code,{children:"maxSize"})," to a fixed value, Builder will automatically split them without extra config."]}),"\n",(0,i.jsxs)(s.h4,{id:"config-4",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#config-4",children:"#"}),"Config"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'split-by-size'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      minSize"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"30000"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      maxSize"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"50000"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.h2,{id:"custom-splitting-strategy",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-splitting-strategy",children:"#"}),"Custom Splitting Strategy"]}),"\n",(0,i.jsx)(s.p,{children:"In addition to using the built-in strategies, you can also customize the splitting strategy to meet more customization needs. Custom strategy is divided into two parts:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Custom group"}),"\n",(0,i.jsxs)(s.li,{children:["Custom webpack ",(0,i.jsx)(s.code,{children:"splitChunks"})," config"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"It is worth noting that these two custom capabilities can be used together with the built-in strategy, that is, you can use the built-in strategy to split commonly used packages, and then use the custom function to split other packages."}),"\n",(0,i.jsxs)(s.h3,{id:"custom-group",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-group",children:"#"}),"Custom Group"]}),"\n",(0,i.jsx)(s.p,{children:"Builder supports custom group, which is more flexible than the built-in strategies, and simpler than writing webpack config. For example:"}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'split-by-experience'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      forceSplitting"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-comment)"},children:"// Split lodash into a Chunk"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        lodash"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/node_modules\\/lodash/"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:" /node_modules\\/lodash-es/"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Through ",(0,i.jsx)(s.code,{children:"forceSplitting"})," config, you can easily split some packages into a Chunk."]}),"\n",(0,i.jsxs)(s.h3,{id:"custom-webpack-splitchunks-config",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#custom-webpack-splitchunks-config",children:"#"}),"Custom Webpack ",(0,i.jsx)(s.code,{children:"splitChunks"})," Config"]}),"\n",(0,i.jsxs)(s.p,{children:["In addition to using custom grouping, you can also customize the native webpack config through ",(0,i.jsx)(s.code,{children:"override"}),", such as:"]}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'split-by-experience'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      override"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        chunks"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'all'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        minSize"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"30000"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["The config in ",(0,i.jsx)(s.code,{children:"override"})," will be merged with the webpack config. For specific config details, please refer to ",(0,i.jsx)(s.a,{href:"https://webpack.js.org/plugins/split-chunks-plugin/#splitchunkschunks",target:"_blank",rel:"noopener noreferrer",children:"webpack official documentation"}),"."]})]})}var t=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(a,e)})):a(e)}}}]);