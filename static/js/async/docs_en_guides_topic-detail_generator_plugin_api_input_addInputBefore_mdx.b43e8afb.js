(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_en_guides_topic-detail_generator_plugin_api_input_addInputBefore_mdx"],{18260:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var t in n)Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}(n,{frontmatter:function(){return r},title:function(){return a},toc:function(){return s},default:function(){return c}});var i=t("12151"),d=t("23169"),r={sidebar_position:2},a="addInputBefore",s=[{text:"key",depth:2,id:"key"},{text:"input",depth:2,id:"input"},{text:"Example",depth:2,id:"example"}];function o(e){var n=Object.assign({h1:"h1",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code",h2:"h2",ol:"ol",li:"li"},(0,d.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.h1,{id:"addinputbefore",children:["addInputBefore",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#addinputbefore",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Add input question before default input."}),"\n",(0,i.jsx)(n.p,{children:"The method is available directly on the context."}),"\n",(0,i.jsx)(n.p,{children:"Its type is defined as:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"export interface IPluginContext {\n  addInputBefore: (key: string, input: Schema) => void;\n  ...\n}\n"})})]})}),"\n",(0,i.jsxs)(n.h2,{id:"key",children:["key",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#key",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Modern.js the problem keyword of the configuration of the engineering solution, the specific configuration viewable ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/config/common",children:"Generator Configuration"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"input",children:["input",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"})]}),"\n",(0,i.jsxs)(n.p,{children:["Questions that need to be added, specific type definition viewable ",(0,i.jsx)(n.a,{href:"/guides/topic-detail/generator/plugin/api/input/type",children:"Customize input related type definition"}),"."]}),"\n",(0,i.jsxs)(n.h2,{id:"example",children:["Example",(0,i.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"})]}),"\n",(0,i.jsx)(n.p,{children:"Add input before package manager:"}),"\n",(0,i.jsx)(n.div,{className:"language-",children:(0,i.jsxs)(n.div,{className:"modern-code-content",children:[(0,i.jsx)(n.button,{className:"copy"}),(0,i.jsx)(n.pre,{className:"code",children:(0,i.jsx)(n.code,{className:"language-ts",children:"context.addInputBefore('packageManager', {\n  type: 'object',\n  properties: {\n    language: {\n      type: 'string',\n      title: 'Develop Langauge',\n      enum: [\n        { label: 'TS', value: 'ts' },\n        { label: 'ES6+', value: 'js' },\n      ],\n    },\n  },\n});\n"})})]})}),"\n",(0,i.jsxs)(n.div,{className:"modern-directive info",children:[(0,i.jsx)(n.div,{className:"modern-directive-title",children:"Notes"}),(0,i.jsxs)(n.div,{className:"modern-directive-content",children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The key of the added question cannot be duplicated with the key of the question of the item type itself provided by the Modern.js."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["The priority of adding the problem ",(0,i.jsx)(n.code,{children:"addInputAfter"})," is higher than ",(0,i.jsx)(n.code,{children:"addInputBefore"}),". When adding After problem to one ",(0,i.jsx)(n.code,{children:"key"})," and Before problem to the next key at the same time, After problem will be before Before."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["When multiple questions need to be added before or after the same ",(0,i.jsx)(n.code,{children:"key"}),", the method can be called multiple times, and the order of questions will be permutated in the order in which they are called."]}),"\n"]}),"\n"]}),"\n"]})]})]})}var c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,i.jsx)(n,Object.assign({},e,{children:(0,i.jsx)(o,e)})):o(e)}}}]);