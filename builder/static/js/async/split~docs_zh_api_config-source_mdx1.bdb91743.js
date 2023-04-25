(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_zh_api_config-source_mdx1"],{76241:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return l},title:function(){return d},toc:function(){return i},default:function(){return o}});var c=s("12151"),r=s("23169"),l={},d="",i=[{text:"添加单个脚本",depth:4,id:"添加单个脚本"},{text:"添加全局样式",depth:4,id:"添加全局样式"},{text:"添加多个脚本",depth:4,id:"添加多个脚本"}];function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"string | string[]"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"undefined"})]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"在每个页面的入口文件前添加一段代码，这段代码会早于页面的代码执行，因此可以用于执行一些全局的代码逻辑，比如注入 polyfill、设置全局样式等。"}),"\n",(0,c.jsxs)(n.h4,{id:"添加单个脚本",children:["添加单个脚本",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加单个脚本",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["首先创建一个 ",(0,c.jsx)(n.code,{children:"src/polyfill.ts"})," 文件："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"console.log('I am a polyfill');\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["然后将 ",(0,c.jsx)(n.code,{children:"src/polyfill.ts"})," 配置到 ",(0,c.jsx)(n.code,{children:"source.preEntry"})," 上："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/polyfill.ts',\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["重新运行编译并访问任意页面，可以看到 ",(0,c.jsx)(n.code,{children:"src/polyfill.ts"})," 中的代码已经执行，并在 console 中输出了对应的内容。"]}),"\n",(0,c.jsxs)(n.h4,{id:"添加全局样式",children:["添加全局样式",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加全局样式",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你也可以通过 ",(0,c.jsx)(n.code,{children:"source.preEntry"})," 来配置全局样式，这段 CSS 代码会早于页面代码加载，比如引入一个 ",(0,c.jsx)(n.code,{children:"normalize.css"})," 文件："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: './src/normalize.css',\n  },\n};\n"})})]})}),"\n",(0,c.jsxs)(n.h4,{id:"添加多个脚本",children:["添加多个脚本",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#添加多个脚本",children:"#"})]}),"\n",(0,c.jsxs)(n.p,{children:["你可以将 ",(0,c.jsx)(n.code,{children:"preEntry"})," 设置为数组来添加多个脚本，它们会按数组顺序执行："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"export default {\n  source: {\n    preEntry: ['./src/polyfill-a.ts', './src/polyfill-b.ts'],\n  },\n};\n"})})]})})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(a,e)})):a(e)}}}]);