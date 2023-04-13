(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["split~docs_en_api_config-html_mdx12"],{92492:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return i},title:function(){return r},toc:function(){return t},default:function(){return l}});var d=s("12151"),c=s("23169"),i={},r="",t=[{text:"defer",depth:3,id:"defer"},{text:"blocking",depth:3,id:"blocking"},{text:"module",depth:3,id:"module"}];function a(e){var n=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Type:"})," ",(0,d.jsx)(n.code,{children:"'defer' | 'blocking' | 'module'"})]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Default:"})," ",(0,d.jsx)(n.code,{children:"'defer'"})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Used to set how ",(0,d.jsx)(n.code,{children:"<script>"})," tags are loaded."]}),"\n",(0,d.jsxs)(n.h3,{id:"defer",children:["defer",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#defer",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["By default, the ",(0,d.jsx)(n.code,{children:"<script>"})," tag generated by Builder will automatically set the ",(0,d.jsx)(n.code,{children:"defer"})," attribute to avoid blocking the parsing and rendering of the page."]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-html",children:'<head>\n  <script defer src="/static/js/main.js"></script>\n</head>\n<body></body>\n'})})]})}),"\n",(0,d.jsxs)(n.div,{className:"modern-directive tip",children:[(0,d.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,d.jsx)(n.div,{className:"modern-directive-content",children:(0,d.jsxs)(n.p,{children:["When the browser encounters a ",(0,d.jsx)(n.code,{children:"<script>"})," tag with the defer attribute, it will download the script file asynchronously without blocking the parsing and rendering of the page. After the page is parsed and rendered, the browser executes the ",(0,d.jsx)(n.code,{children:"<script>"})," tags in the order they appear in the document.\n"]})})]}),"\n",(0,d.jsxs)(n.h3,{id:"blocking",children:["blocking",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#blocking",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["Setting ",(0,d.jsx)(n.code,{children:"scriptLoading"})," to ",(0,d.jsx)(n.code,{children:"blocking"})," will remove the ",(0,d.jsx)(n.code,{children:"defer"})," attribute, and the script is executed synchronously, which means it will block the browser's parsing and rendering process until the script file is downloaded and executed."]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    inject: 'body',\n    scriptLoading: 'blocking',\n  },\n};\n"})})]})}),"\n",(0,d.jsxs)(n.p,{children:["When you need to set ",(0,d.jsx)(n.code,{children:"blocking"}),", it is recommended to set ",(0,d.jsx)(n.code,{children:"html.inject"})," to ",(0,d.jsx)(n.code,{children:"'body'"})," to avoid page rendering being blocked."]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-html",children:'<head></head>\n<body>\n  <script src="/static/js/main.js"></script>\n</body>\n'})})]})}),"\n",(0,d.jsxs)(n.h3,{id:"module",children:["module",(0,d.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#module",children:"#"})]}),"\n",(0,d.jsxs)(n.p,{children:["When ",(0,d.jsx)(n.code,{children:"scriptLoading"})," is set to ",(0,d.jsx)(n.code,{children:"module"}),", the script can support ESModule syntax, and the browser will automatically delay the execution of these scripts by default, which is similar to ",(0,d.jsx)(n.code,{children:"defer"}),"."]}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-js",children:"export default {\n  html: {\n    scriptLoading: 'module',\n  },\n};\n"})})]})}),"\n",(0,d.jsx)(n.div,{className:"language-",children:(0,d.jsxs)(n.div,{className:"modern-code-content",children:[(0,d.jsx)(n.button,{className:"copy"}),(0,d.jsx)(n.pre,{className:"code",children:(0,d.jsx)(n.code,{className:"language-html",children:'<head>\n  <script type="module" src="/static/js/main.js"></script>\n</head>\n<body></body>\n'})})]})})]})}var l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,d.jsx)(n,Object.assign({},e,{children:(0,d.jsx)(a,e)})):a(e)}}}]);