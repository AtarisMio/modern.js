(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_config_output_cssModuleLocalIdentName_md"],{41929:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return a},title:function(){return d},toc:function(){return c},default:function(){return r}});var l=s("12151"),t=s("21447");let a={},d="",c=[{text:"Default Value",depth:3,id:"default-value"},{text:"Template String",depth:3,id:"template-string"},{text:"Example",depth:3,id:"example"}];function i(e){let n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",div:"div",button:"button",pre:"pre",p:"p",h3:"h3",a:"a"},(0,t.useMDXComponents)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Type:"})," ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.strong,{children:"Default:"})}),"\n"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"// isProd indicates that the production build\nconst localIdentName = isProd\n  ? '[hash:base64:5]'\n  : '[path][name]__[local]--[hash:base64:5]';\n"})})]})}),"\n",(0,l.jsx)(n.p,{children:"Sets the format of the className generated by CSS Modules after compilation."}),"\n",(0,l.jsxs)(n.h3,{id:"default-value",children:["Default Value",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#default-value",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"cssModuleLocalIdentName"})," has different default values in development and production."]}),"\n",(0,l.jsx)(n.p,{children:"In a production, Builder will generate shorter class names to reduce the bundle size."}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"import styles from './index.module.scss';\n\n// In development, the value is `.src-index-module__header--xxxxx`\n// In production, the value is `.xxxxx`\nconsole.log(styles.header);\n"})})]})}),"\n",(0,l.jsxs)(n.h3,{id:"template-string",children:["Template String",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#template-string",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["You can use the following template strings in ",(0,l.jsx)(n.code,{children:"cssModuleLocalIdentName"}),":"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[name]"})," - the basename of the asset."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[local]"})," - original class."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[hash]"})," - the hash of the string."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[folder]"})," - the folder relative path."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[path]"})," - the relative path."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[file]"})," - filename and path."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[ext]"})," - extension with leading dot."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"[hash:<hashDigest>:<hashDigestLength>]"}),": hash with hash settings."]}),"\n"]}),"\n",(0,l.jsxs)(n.div,{className:"modern-directive tip",children:[(0,l.jsx)(n.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsxs)(n.div,{className:"modern-directive-content",children:["When using Rspack as the bundler, currently does not support custom ",(0,l.jsx)(n.code,{children:"<hashDigest>"}),".\n"]})]}),"\n",(0,l.jsxs)(n.h3,{id:"example",children:["Example",(0,l.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,l.jsxs)(n.p,{children:["Set ",(0,l.jsx)(n.code,{children:"cssModuleLocalIdentName"})," to other value:"]}),"\n",(0,l.jsx)(n.div,{className:"language-",children:(0,l.jsxs)(n.div,{className:"modern-code-content",children:[(0,l.jsx)(n.button,{className:"copy"}),(0,l.jsx)(n.pre,{className:"code",children:(0,l.jsx)(n.code,{className:"language-ts",children:"export default {\n  output: {\n    cssModuleLocalIdentName: '[hash:base64:4]',\n  },\n};\n"})})]})})]})}var r=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.useMDXComponents)(),e.components);return n?(0,l.jsx)(n,Object.assign({},e,{children:(0,l.jsx)(i,e)})):i(e)}}}]);