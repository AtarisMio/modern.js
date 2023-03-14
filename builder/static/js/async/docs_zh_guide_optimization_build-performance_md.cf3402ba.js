(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_optimization_build-performance_md"],{1307:function(s,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var l in e)Object.defineProperty(s,l,{enumerable:!0,get:e[l]})}(e,{frontmatter:function(){return r},toc:function(){return i},title:function(){return o},default:function(){return a}});var n=l("12151");let r=void 0,i=[{id:"通用优化策略",text:"通用优化策略",depth:2},{id:"升级-nodejs-版本",text:"升级 Node.js 版本",depth:3},{id:"使用-swc-或-esbuild-编译",text:"使用 SWC 或 esbuild 编译",depth:3},{id:"避免使用-ts-loader",text:"避免使用 ts-loader",depth:3},{id:"开发环境优化策略",text:"开发环境优化策略",depth:2},{id:"开启延迟编译",text:"开启延迟编译",depth:3},{id:"调整-source-map-格式",text:"调整 Source Map 格式",depth:3},{id:"调整-browserslist-范围",text:"调整 Browserslist 范围",depth:3},{id:"生产环境优化策略",text:"生产环境优化策略",depth:2},{id:"禁用-source-map",text:"禁用 Source Map",depth:3}],o="提升构建性能";function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",div:"div",h2:"h2",h3:"h3",button:"button",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",blockquote:"blockquote"},s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"提升构建性能",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#提升构建性能",children:"#"}),"提升构建性能"]}),"\n",(0,n.jsx)(e.p,{children:"Modern.js Builder 默认对构建性能进行了充分优化，但是随着业务场景变复杂、项目代码量变大，你可能会遇到一些构建性能的问题。"}),"\n",(0,n.jsxs)(e.p,{children:["本文档提供了一些可选的提速策略，",(0,n.jsx)(e.strong,{children:"开发者可以根据实际场景选取其中的部分策略"}),"，从而进一步提升构建速度。"]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive tip",children:[(0,n.jsx)(e.p,{className:"modern-directive-title",children:"\uD83D\uDCE2 注意"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsxs)(e.p,{children:["\n在",(0,n.jsx)(e.a,{href:"/builder/guide/optimization/optimize-bundle.html",children:"优化产物体积"}),"一文中介绍的策略也可以用于提升构建性能，这里不再重复介绍。"]})})]}),"\n",(0,n.jsxs)(e.h2,{id:"通用优化策略",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#通用优化策略",children:"#"}),"通用优化策略"]}),"\n",(0,n.jsx)(e.p,{children:"以下是一些通用的优化策略，对开发环境和生产环境均有提速效果，其中部分策略对包体积也有优化。"}),"\n",(0,n.jsxs)(e.h3,{id:"升级-nodejs-版本",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#升级-nodejs-版本",children:"#"}),"升级 Node.js 版本"]}),"\n",(0,n.jsxs)(e.p,{children:["通常来说，将 Node.js 更新到最新的 ",(0,n.jsx)(e.a,{href:"https://github.com/nodejs/release#release-schedule",target:"_blank",rel:"nofollow",children:"LTS 版本"}),"，有助于提升构建性能。"]}),"\n",(0,n.jsx)(e.p,{children:"尤其是对于 Apple M1/M2 芯片的机型，推荐使用 Node 16 或 Node 18 进行构建。"}),"\n",(0,n.jsxs)(e.p,{children:["Node 16 默认提供了 Apple Silicon binaries，因此在 M1/M2 机型上性能会比 Node 14 有大幅度提升。根据我们的测试，",(0,n.jsx)(e.strong,{children:"从 Node 14 切换到 Node 16 后，编译速度可以提升 100% 以上"}),"。"]}),"\n",(0,n.jsx)(e.p,{children:"你可以通过以下步骤来切换到 Node 16："}),"\n",(0,n.jsxs)(e.div,{className:"language-bash",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 安装 Node.js v16"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm install 16"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 切换到 Node 16"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm use 16"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 将 Node 16 设置为默认版本"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"nvm default 16"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# 查看 Node 版本"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"node -v"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"使用-swc-或-esbuild-编译",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-swc-或-esbuild-编译",children:"#"}),"使用 SWC 或 esbuild 编译"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://swc.rs/",target:"_blank",rel:"nofollow",children:"SWC"})," (Speedy Web Compiler) 是基于 ",(0,n.jsx)(e.code,{children:"Rust"})," 语言编写的高性能 JavaScript 和 TypeScript 转译和压缩工具。在 Polyfill 和语法降级方面可以和 Babel 提供一致的能力，并且性能比 Babel 高出一个数量级。"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://esbuild.github.io/",target:"_blank",rel:"nofollow",children:"esbuild"})," 是一款基于 Golang 开发的前端构建工具，具有打包、编译和压缩 JavaScript 代码的功能，相比传统的打包编译工具，esbuild 在性能上有显著提升。"]}),"\n",(0,n.jsx)(e.p,{children:"Builder 提供了 SWC 插件和 esbuild 插件，让你能使用 SWC 或 esbuild 代替 babel-loader、ts-loader 和 terser 等库进行代码编译和压缩。详见："}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/builder/plugins/plugin-swc.html",children:"SWC 插件文档"})}),"\n",(0,n.jsx)(e.li,{children:(0,n.jsx)(e.a,{href:"/builder/plugins/plugin-esbuild.html",children:"esbuild 插件文档"})}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive tip",children:[(0,n.jsx)(e.p,{className:"modern-directive-title",children:"SWC vs esbuild"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsx)(e.p,{children:"\nSWC 编译产物的兼容性较好，支持注入 core-js 等 Polyfill，并且功能更加完备，因此推荐优先使用 SWC 插件。"})})]}),"\n",(0,n.jsxs)(e.h3,{id:"避免使用-ts-loader",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#避免使用-ts-loader",children:"#"}),"避免使用 ts-loader"]}),"\n",(0,n.jsxs)(e.p,{children:["默认情况下，Builder 使用 Babel 编译 TS 文件，开启 ",(0,n.jsx)(e.a,{href:"/builder/api/config-tools.html#toolstsloader",children:"tools.tsLoader"})," 选项后，会使用 ",(0,n.jsx)(e.code,{children:"ts-loader"})," 编译 TS 文件。"]}),"\n",(0,n.jsxs)(e.p,{children:["由于 ",(0,n.jsx)(e.code,{children:"ts-loader"})," 需要进行额外的语法解析和类型检查，因此会导致项目构建速度变慢，请避免使用。"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 移除这项配置"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    tsLoader"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {}"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["详见 ",(0,n.jsx)(e.a,{href:"/builder/api/config-tools.html#toolstsloader",children:"tools.tsLoader 文档"}),"。"]}),"\n",(0,n.jsxs)(e.h2,{id:"开发环境优化策略",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#开发环境优化策略",children:"#"}),"开发环境优化策略"]}),"\n",(0,n.jsx)(e.p,{children:"以下是针对开发环境进行提速的策略。"}),"\n",(0,n.jsxs)(e.h3,{id:"开启延迟编译",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#开启延迟编译",children:"#"}),"开启延迟编译"]}),"\n",(0,n.jsx)(e.p,{children:"你可以开启延迟编译（即按需编译）功能，来提升编译启动速度。"}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  experiments"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    lazyCompilation"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      imports"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      entries"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["这是一项实验性功能，在某些场景下可能无法正确工作，请查看 ",(0,n.jsx)(e.a,{href:"/builder/api/config-experiments.html#experiments-lazycompilation",children:"experiments.lazyCompilation"})," 来了解具体用法。"]}),"\n",(0,n.jsxs)(e.h3,{id:"调整-source-map-格式",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#调整-source-map-格式",children:"#"}),"调整 Source Map 格式"]}),"\n",(0,n.jsxs)(e.p,{children:["为了提供良好的调试体验，Builder 在开发环境下默认使用 ",(0,n.jsx)(e.code,{children:"cheap-module-source-map"})," 格式 Source Map，这是一种高质量的 Source Map 格式，会带来一定的性能开销。"]}),"\n",(0,n.jsx)(e.p,{children:"你可以通过调整开发环境的 Source Map 格式来提升构建速度。"}),"\n",(0,n.jsx)(e.p,{children:"比如禁用 Source Map："}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"webpackChain"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(chain"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { env }) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (env "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'development'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"chain"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".devtool"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["或是把开发环境的 Source Map 格式设置为开销最小的 ",(0,n.jsx)(e.code,{children:"eval"})," 格式："]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"webpackChain"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(chain"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { env }) {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"if"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (env "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"==="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'development'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:") {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"chain"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".devtool"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'eval'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsxs)(e.p,{children:["关于不同 Source Map 格式之间的详细差异，请查看 ",(0,n.jsx)(e.a,{href:"https://webpack.js.org/configuration/devtool/",target:"_blank",rel:"nofollow",children:"webpack - devtool"}),"。"]}),"\n"]}),"\n",(0,n.jsxs)(e.h3,{id:"调整-browserslist-范围",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#调整-browserslist-范围",children:"#"}),"调整 Browserslist 范围"]}),"\n",(0,n.jsxs)(e.p,{children:["这项优化的原理与",(0,n.jsx)(e.a,{href:"/builder/guide/optimization/optimize-bundle.html#adjust-browserslist",children:"「提升 Browserslist 范围」"}),"类似，区别在于，我们可以为开发环境和生产环境设置不同的 browserslist，从而减少开发环境下的编译开销。"]}),"\n",(0,n.jsxs)(e.p,{children:["比如，你可以在 ",(0,n.jsx)(e.code,{children:"package.json"})," 中添加以下配置，表示在开发环境下只兼容最新的浏览器，在生产环境下兼容实际需要的浏览器："]}),"\n",(0,n.jsxs)(e.div,{className:"language-json",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"browserslist"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"production"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'">0.2%"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"not dead"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"not op_mini all"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"development"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"last 1 chrome version"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"last 1 firefox version"'}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"last 1 safari version"'})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    ]"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"注意，这项优化策略会导致开发环境与生产环境的构建产物存在一定差异。"}),"\n",(0,n.jsxs)(e.h2,{id:"生产环境优化策略",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#生产环境优化策略",children:"#"}),"生产环境优化策略"]}),"\n",(0,n.jsx)(e.p,{children:"以下是针对生产环境进行提速的策略。"}),"\n",(0,n.jsxs)(e.h3,{id:"禁用-source-map",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用-source-map",children:"#"}),"禁用 Source Map"]}),"\n",(0,n.jsxs)(e.p,{children:["如果项目在生产环境下不需要 Source Map，可以通过 ",(0,n.jsx)(e.code,{children:"disableSourceMap"})," 配置项关闭，从而提升 build 构建的速度。"]}),"\n",(0,n.jsxs)(e.div,{className:"language-js",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    disableSourceMap"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.p,{children:["详见 ",(0,n.jsx)(e.a,{href:"/builder/api/config-output.html#outputdisablesourcemap",children:"output.disableSourceMap"}),"。"]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(c,s)})):c(s)}}}]);