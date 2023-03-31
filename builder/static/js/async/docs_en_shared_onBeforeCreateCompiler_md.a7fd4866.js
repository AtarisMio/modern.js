(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_shared_onBeforeCreateCompiler_md"],{62558:function(e,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var r in n)Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}(n,{frontmatter:function(){return c},title:function(){return s},toc:function(){return i},default:function(){return a}});var t=r("12151"),o=r("21447");let c={},s="",i=[];function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,o.useMDXComponents)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Called before creating the compiler instance, when you execute ",(0,t.jsx)(n.code,{children:"builder.startDevServer"}),", ",(0,t.jsx)(n.code,{children:"builder.build"})," or ",(0,t.jsx)(n.code,{children:"builder.createCompiler"}),", this hook will be called. You can get the final config object of the bundler through the ",(0,t.jsx)(n.code,{children:"bundlerConfigs"})," parameter."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,t.jsx)(n.div,{className:"language-",children:(0,t.jsxs)(n.div,{className:"modern-code-content",children:[(0,t.jsx)(n.button,{className:"copy"}),(0,t.jsx)(n.pre,{className:"code",children:(0,t.jsx)(n.code,{className:"language-ts",children:"function OnBeforeCreateCompiler(\n  callback: (params: {\n    bundlerConfigs: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.useMDXComponents)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(l,e)})):l(e)}}}]);