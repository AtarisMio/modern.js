(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_config_source_exclude_md"],{54466:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return t},title:function(){return o},toc:function(){return l},default:function(){return a}});var c=r("12151"),s=r("21447");let t={},o="",l=[];function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",a:"a",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"类型："})," ",(0,c.jsx)(n.code,{children:"Array<string | RegExp>"})]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.strong,{children:"默认值："})," ",(0,c.jsx)(n.code,{children:"[]"})]}),"\n"]}),"\n",(0,c.jsxs)(n.p,{children:["指定不需要编译的 JavaScript/TypeScript 文件。用法与 webpack 中的 ",(0,c.jsx)(n.a,{href:"https://webpack.js.org/configuration/module/#ruleexclude",target:"_blank",rel:"noopener noreferrer",children:"Rule.exclude"})," 一致，支持传入字符串或正则表达式来匹配模块的路径。"]}),"\n",(0,c.jsx)(n.p,{children:"比如:"}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-js",children:"import path from 'path';\n\nexport default {\n  source: {\n    exclude: [path.resolve(__dirname, 'src/module-a'), /src\\/module-b/],\n  },\n};\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);