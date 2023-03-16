(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_optimization_optimize-bundle_md"],{26606:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return c},title:function(){return a},default:function(){return t}});var l=n("12151"),r=n("21447");let i=void 0,c=[{id:"减少重复依赖",text:"减少重复依赖",depth:2},{id:"使用更轻量的库",text:"使用更轻量的库",depth:2},{id:"提升-browserslist-范围",text:"提升 Browserslist 范围",depth:2},{id:"按需引入-polyfill",text:"按需引入 polyfill",depth:2},{id:"使用图片压缩",text:"使用图片压缩",depth:2},{id:"代码拆包",text:"代码拆包",depth:2}],a="产物体积优化";function o(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",ul:"ul",li:"li",code:"code",div:"div",button:"button",pre:"pre",span:"span",img:"img"},(0,r.useMDXComponents)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"产物体积优化",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#产物体积优化",children:"#"}),"产物体积优化"]}),"\n",(0,l.jsx)(e.p,{children:"产物体积的优化在生产环境中是非常重要的，因为它直接影响到了线上的用户体验。在这篇文档中，我们将介绍在 Builder 中一些常见的产物体积优化方式。"}),"\n",(0,l.jsxs)(e.h2,{id:"减少重复依赖",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#减少重复依赖",children:"#"}),"减少重复依赖"]}),"\n",(0,l.jsx)(e.p,{children:"在业务项目中，会存在某些第三方依赖被安装了多个版本的现象。重复依赖会导致包体积变大、构建速度变慢。"}),"\n",(0,l.jsx)(e.p,{children:"我们可以通过社区中的一些工具来检测或消除重复依赖。"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["如果你在使用 ",(0,l.jsx)(e.code,{children:"pnpm >= 7.26.0"}),"，可以使用 pnpm 自带的 ",(0,l.jsx)(e.a,{href:"https://pnpm.io/cli/dedupe",target:"_blank",rel:"noopener noreferrer",children:"pnpm dedupe"})," 命令来升级和消除其中的重复依赖。"]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm dedupe"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["如果你在使用 ",(0,l.jsx)(e.code,{children:"pnpm < 7.26.0"})," 版本，可以使用 ",(0,l.jsx)(e.a,{href:"https://github.com/ocavue/pnpm-deduplicate",target:"_blank",rel:"noopener noreferrer",children:"pnpm-deduplicate"})," 来分析出所有的重复依赖，并通过升级依赖或声明 ",(0,l.jsx)(e.a,{href:"https://pnpm.io/package_json#pnpmoverrides",target:"_blank",rel:"noopener noreferrer",children:"pnpm overrides"})," 进行版本合并。"]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npx pnpm-deduplicate --list"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["如果你在使用 ",(0,l.jsx)(e.code,{children:"yarn"}),"，可以使用 ",(0,l.jsx)(e.a,{href:"https://github.com/scinos/yarn-deduplicate",target:"_blank",rel:"noopener noreferrer",children:"yarn-deduplicate"})," 来自动合并重复依赖："]}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npx yarn-deduplicate "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"&&"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" yarn"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h2,{id:"使用更轻量的库",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用更轻量的库",children:"#"}),"使用更轻量的库"]}),"\n",(0,l.jsxs)(e.p,{children:["建议将项目中体积较大的三方库替换为更轻量的库，比如将 ",(0,l.jsx)(e.a,{href:"https://momentjs.com/",target:"_blank",rel:"noopener noreferrer",children:"moment"})," 替换为 ",(0,l.jsx)(e.a,{href:"https://day.js.org/",target:"_blank",rel:"noopener noreferrer",children:"day.js"}),"。"]}),"\n",(0,l.jsxs)(e.p,{children:["如果你需要找出项目中体积较大的三方库，可以在执行构建时添加 ",(0,l.jsx)(e.a,{href:"/builder/api/config-performance.html#performancebundleanalyze",children:"BUNDLE_ANALYZE=true"})," 环境变量："]}),"\n",(0,l.jsxs)(e.div,{className:"language-bash",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"BUNDLE_ANALYZE=true pnpm build"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"添加该参数后，Builder 会生成一个分析构建产物体积的 HTML 文件，手动在浏览器中打开该文件，可以看到打包产物的瓦片图。区块的面积越大，说明该模块的体积越大。"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png",alt:""})}),"\n",(0,l.jsxs)(e.h2,{id:"提升-browserslist-范围",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#提升-browserslist-范围",children:"#"}),"提升 Browserslist 范围"]}),"\n",(0,l.jsx)(e.p,{children:"Builder 会根据项目的 Browserslist 配置范围进行代码编译，并注入相应的 Polyfill。如果项目不需要兼容旧版浏览器，可以根据实际情况来提升 Browserslist 范围，从而减少在语法和 Polyfill 上的编译开销。"}),"\n",(0,l.jsx)(e.p,{children:"Builder 默认的 Browserslist 配置为："}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'> 0.01%'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not dead'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'not op_mini all'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"比如只兼容 Chrome 61 以上的浏览器，可以改成："}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Chrome >= 61'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"];"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n请阅读 ",(0,l.jsx)(e.a,{href:"/builder/guide/advanced/browserslist.html",children:"设置浏览器范围"}),"章节来了解更多关于 Browserslist 的用法。"]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"按需引入-polyfill",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#按需引入-polyfill",children:"#"}),"按需引入 polyfill"]}),"\n",(0,l.jsxs)(e.p,{children:["在明确第三方依赖不需要额外 polyfill 的情况下，你可以将 ",(0,l.jsx)(e.a,{href:"/builder/api/config-output.html#outputpolyfill",children:"output.polyfill"})," 设置为 ",(0,l.jsx)(e.code,{children:"usage"}),"。"]}),"\n",(0,l.jsxs)(e.p,{children:["在 ",(0,l.jsx)(e.code,{children:"usage"})," 模式下，Builder 会分析源代码中使用的语法，按需注入所需的 polyfill 代码，从而减少 polyfill 的代码量。"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    polyfill"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'usage'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\n请阅读 ",(0,l.jsx)(e.a,{href:"/builder/guide/advanced/browser-compatibility.html",children:"浏览器兼容性"}),"章节来了解更多关于 polyfill 的用法。"]})})]}),"\n",(0,l.jsxs)(e.h2,{id:"使用图片压缩",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用图片压缩",children:"#"}),"使用图片压缩"]}),"\n",(0,l.jsx)(e.p,{children:"在一般的前端项目中，图片资源的体积往往是项目产物体积的大头，因此如果能尽可能精简图片的体积，那么将会对项目的打包产物体积起到明显的优化效果。你可以在 Builder 中注册插件来启用图片压缩功能:"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginImageCompress } "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-image-compress'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 往 builder 实例上添加插件"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addPlugins"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]);"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["详见 ",(0,l.jsx)(e.a,{href:"/builder/plugins/plugin-image-compress.html",children:"Image Compress 插件"}),"。"]}),"\n",(0,l.jsxs)(e.h2,{id:"代码拆包",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#代码拆包",children:"#"}),"代码拆包"]}),"\n",(0,l.jsx)(e.p,{children:"良好的拆包策略对于提升应用的加载性能是十分重要的，可以充分利用浏览器的缓存机制，减少请求数量，加快页面加载速度。"}),"\n",(0,l.jsxs)(e.p,{children:["在 Builder 中内置了",(0,l.jsx)(e.a,{href:"/builder/guide/optimization/split-chunk.html",children:"多种拆包策略"}),"，可以满足大部分应用的需求，你也可以根据自己的业务场景，自定义拆包配置，比如下面的配置:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  performance"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    chunkSplit"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      strategy"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'split-by-experience'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      forceSplitting"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 比如将 react-query 包拆分为一个 Chunk"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        react_query"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/node_modules\\/react-query/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(o,s)})):o(s)}}}]);