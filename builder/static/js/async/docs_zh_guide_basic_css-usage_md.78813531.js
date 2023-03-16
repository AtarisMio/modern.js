(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guide_basic_css-usage_md"],{74244:function(s,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var r in e)Object.defineProperty(s,r,{enumerable:!0,get:e[r]})}(e,{frontmatter:function(){return o},toc:function(){return i},title:function(){return c},default:function(){return t}});var n=r("12151"),l=r("21447");let o=void 0,i=[{id:"使用-lesssass-和-stylus",text:"使用 Less、Sass 和 Stylus",depth:2},{id:"使用-postcss",text:"使用 PostCSS",depth:2},{id:"内置-postcss-插件",text:"内置 PostCSS 插件",depth:3},{id:"使用-css-modules",text:"使用 CSS Modules",depth:2},{id:"css-压缩",text:"CSS 压缩",depth:2},{id:"内联-css-文件",text:"内联 CSS 文件",depth:2},{id:"引用-node_modules-里的样式",text:"引用 node_modules 里的样式",depth:2}],c="引用样式资源";function a(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",button:"button",pre:"pre",code:"code",span:"span",h3:"h3",ul:"ul",li:"li"},(0,l.useMDXComponents)(),s.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(e.h1,{id:"引用样式资源",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#引用样式资源",children:"#"}),"引用样式资源"]}),"\n",(0,n.jsx)(e.p,{children:"Builder 内置多种常用的样式资源处理方式，包括 Less / Sass 预处理器、PostCSS、CSS Modules、CSS 内联和 CSS 压缩。"}),"\n",(0,n.jsx)(e.p,{children:"除此之外，Builder 也提供了多个配置项来自定义样式资源的处理规则。"}),"\n",(0,n.jsxs)(e.h2,{id:"使用-lesssass-和-stylus",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-lesssass-和-stylus",children:"#"}),"使用 Less、Sass 和 Stylus"]}),"\n",(0,n.jsx)(e.p,{children:"Builder 内置了社区流行的 CSS 预处理器，包括 Less 和 Sass。"}),"\n",(0,n.jsxs)(e.p,{children:["默认情况下，你不需要对 Less 和 Sass 进行任何配置。如果你有自定义 loader 配置的需求，可以通过配置 ",(0,n.jsx)(e.a,{href:"/builder/api/config-tools.html#toolsless",children:"tools.less"}),"、",(0,n.jsx)(e.a,{href:"/builder/api/config-tools.html#toolssass",children:"tools.sass"})," 来进行设置。"]}),"\n",(0,n.jsxs)(e.p,{children:["你也可以在 Builder 中使用 Stylus，只需要安装 Builder 提供的 Stylus 插件即可，使用方式请参考 ",(0,n.jsx)(e.a,{href:"/builder/plugins/plugin-stylus.html",children:"Stylus 插件"}),"。"]}),"\n",(0,n.jsxs)(e.h2,{id:"使用-postcss",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-postcss",children:"#"}),"使用 PostCSS"]}),"\n",(0,n.jsxs)(e.p,{children:["Builder 内置了 ",(0,n.jsx)(e.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," 来转换 CSS 代码。你可以通过 ",(0,n.jsx)(e.a,{href:"/builder/api/config-tools.html#toolspostcss",children:"tools.postcss"})," 来配置 postcss-loader。"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"postcss"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" opts "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"viewportPlugin"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"require"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'postcss-px-to-viewport'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")({"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        viewportWidth"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"375"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      });"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"opts"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"postcssOptions"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"plugins"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".push"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(viewportPlugin);"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h3,{id:"内置-postcss-插件",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#内置-postcss-插件",children:"#"}),"内置 PostCSS 插件"]}),"\n",(0,n.jsx)(e.p,{children:"Builder 内置了一些 PostCSS 插件，会对 CSS 进行以下转换："}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://github.com/postcss/autoprefixer",target:"_blank",rel:"noopener noreferrer",children:"autoprefixer"}),"：在默认情况下，我们开启了 autoprefixer 来自动补齐 CSS 的浏览器前缀。如果你需要配置目标浏览器，可使用 ",(0,n.jsx)(e.a,{href:"/builder/api/config-output.html#outputoverridebrowserslist",children:"output.overrideBrowserslist"})," 进行配置。"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-nested",target:"_blank",rel:"noopener noreferrer",children:"postcss-nesting"}),"：提供 ",(0,n.jsx)(e.a,{href:"https://drafts.csswg.org/css-nesting-1/",target:"_blank",rel:"noopener noreferrer",children:"CSS Nesting"})," 支持，可以在 CSS 中使用嵌套写法，如："]}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-css",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".my-table"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  & "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"td"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"text-align"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"center"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    &."}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"c"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"text-transform"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"uppercase"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-flexbugs-fixes",target:"_blank",rel:"noopener noreferrer",children:"postcss-flexbugs-fixes"}),"：用于修复已知的 ",(0,n.jsx)(e.a,{href:"https://github.com/philipwalton/flexbugs",target:"_blank",rel:"noopener noreferrer",children:"Flex Bugs"}),"。"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-initial",target:"_blank",rel:"noopener noreferrer",children:"postcss-initial"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,n.jsxs)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/initial_value",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(e.code,{children:"initial"})," 属性值"]})," 的兼容。"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-page-break",target:"_blank",rel:"noopener noreferrer",children:"postcss-page-break"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,n.jsxs)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/break-after",target:"_blank",rel:"noopener noreferrer",children:[(0,n.jsx)(e.code,{children:"break-"})," 属性"]})," 的兼容。"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-font-variant",target:"_blank",rel:"noopener noreferrer",children:"postcss-font-variant"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,n.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(e.code,{children:"font-variant"})})," 的兼容。"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-media-minmax",target:"_blank",rel:"noopener noreferrer",children:"postcss-media-minmax"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,n.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#syntax_improvements_in_level_4",target:"_blank",rel:"noopener noreferrer",children:"Media Query Ranges"})," 的兼容。"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.a,{href:"https://www.npmjs.com/package/postcss-custom-properties",target:"_blank",rel:"noopener noreferrer",children:"postcss-custom-properties"}),"：仅在需要兼容低版本浏览器时启用，提供对 ",(0,n.jsx)(e.a,{href:"https://www.w3.org/TR/css-variables-1/",target:"_blank",rel:"noopener noreferrer",children:"Custom Properties"})," 的兼容，你可以在 CSS 中定义和使用自定义变量，如："]}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-css",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:":root"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  --main-bg-color"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"pink"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"background-color"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"var"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"(--main-bg-color)"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.h2,{id:"使用-css-modules",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#使用-css-modules",children:"#"}),"使用 CSS Modules"]}),"\n",(0,n.jsxs)(e.p,{children:["请阅读 ",(0,n.jsx)(e.a,{href:"/builder/guide/basic/css-modules.html",children:"使用 CSS Modules"})," 章节来了解 CSS Modules 的完整用法。"]}),"\n",(0,n.jsxs)(e.h2,{id:"css-压缩",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-压缩",children:"#"}),"CSS 压缩"]}),"\n",(0,n.jsx)(e.p,{children:"通常情况下，在生产环境我们会将 CSS、JS 等静态资源进行压缩，以达到更好的传输效率。"}),"\n",(0,n.jsxs)(e.p,{children:["Builder 通过 ",(0,n.jsx)(e.a,{href:"https://github.com/webpack-contrib/css-minimizer-webpack-plugin",target:"_blank",rel:"noopener noreferrer",children:"css-minimizer-webpack-plugin"})," 在生产环境构建时自动压缩 CSS 代码（底层使用的压缩工具为 ",(0,n.jsx)(e.a,{href:"https://cssnano.co/",target:"_blank",rel:"noopener noreferrer",children:"cssnano"}),"）。"]}),"\n",(0,n.jsxs)(e.p,{children:["你可以通过 ",(0,n.jsx)(e.a,{href:"/builder/api/config-tools.html#toolsminifycss",children:"tools.minifyCss"})," 配置项来修改 ",(0,n.jsx)(e.code,{children:"css-minimizer-webpack-plugin"}),"的配置。"]}),"\n",(0,n.jsxs)(e.div,{className:"modern-directive tip",children:[(0,n.jsx)(e.p,{className:"modern-directive-title",children:"关于 cssnano"}),(0,n.jsx)(e.div,{className:"modern-directive-content",children:(0,n.jsx)(e.p,{children:"\ncssnano 是一个用于优化和压缩 CSS 文件的工具。它通过删除未使用的规则、合并相同的规则、移除注释和空白符以及转换长度单位等方式来减小 CSS 文件的体积，从而提升网站的加载速度。"})})]}),"\n",(0,n.jsxs)(e.h2,{id:"内联-css-文件",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#内联-css-文件",children:"#"}),"内联 CSS 文件"]}),"\n",(0,n.jsxs)(e.p,{children:["默认情况下，Builder 会把 CSS 提取为独立的 ",(0,n.jsx)(e.code,{children:".css"})," 文件，并输出到构建产物目录。"]}),"\n",(0,n.jsxs)(e.p,{children:["如果你希望将样式内联到 JS 文件中，可以将 ",(0,n.jsx)(e.a,{href:"/builder/api/config-output.html#outputdisablecssextract",children:"output.disableCssExtract"})," 设置为 ",(0,n.jsx)(e.code,{children:"true"})," 来禁用 CSS 提取逻辑。当浏览器请求到 JS 文件后，JS 将动态地向 HTML 插入 ",(0,n.jsx)(e.code,{children:"<style>"})," 标签，以此加载 CSS 样式。"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:""}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  output"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    disableCssExtract"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsx)(e.p,{children:"这将会增大你的 JS Bundle 体积，因此通常情况下，不太建议禁用 CSS 提取逻辑。"}),"\n",(0,n.jsxs)(e.h2,{id:"引用-node_modules-里的样式",children:[(0,n.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#引用-node_modules-里的样式",children:"#"}),"引用 node_modules 里的样式"]}),"\n",(0,n.jsx)(e.p,{children:"你可以直接引用 node_modules 里的样式文件。"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"在组件中引用："}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-ts",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"src/App.tsx"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 引用 Arco Design 样式："})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@arco-design/web-react/dist/css/arco.css'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"在样式文件中引用："}),"\n"]}),"\n",(0,n.jsxs)(e.div,{className:"language-css",children:[(0,n.jsx)(e.div,{className:"modern-code-title",children:"src/App.css"}),(0,n.jsxs)(e.div,{className:"modern-code-content",children:[(0,n.jsx)(e.button,{className:"copy"}),(0,n.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,n.jsxs)(e.code,{children:[(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* 引用 normalize.css */"})}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* https://github.com/necolas/normalize.css */"})}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"@import"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'normalize.css'"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,n.jsx)(e.span,{className:"line"}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"body"}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(e.span,{className:"line",children:[(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"/* */"})]}),"\n",(0,n.jsx)(e.span,{className:"line",children:(0,n.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,n.jsx)(e.span,{className:"line"})]})})]})]})]})}var t=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,l.useMDXComponents)(),s.components);return e?(0,n.jsx)(e,Object.assign({},s,{children:(0,n.jsx)(a,s)})):a(s)}}}]);