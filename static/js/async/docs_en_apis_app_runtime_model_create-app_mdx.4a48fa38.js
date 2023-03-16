(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_runtime_model_create-app_mdx"],{13225:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return i},toc:function(){return t},title:function(){return c},default:function(){return d}});var r=n("12151"),o=n("21447"),l=n.ir(n("25462"));let i={sidebar_position:11,title:"createApp"},t=[{id:"function-signature",text:"Function Signature",depth:2},{id:"input",text:"Input",depth:3},{id:"return-value",text:"Return Value",depth:3},{id:"example",text:"Example",depth:2}],c="createApp";function a(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"createapp",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#createapp",children:"#"}),"createApp"]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(s.p,{children:["Reduck will call ",(0,r.jsx)(s.code,{children:"createApp"})," to create a global application by default. If the entire application only needs one Store, then there is no need to call ",(0,r.jsx)(s.code,{children:"createApp"})," manually.Only need to use ",(0,r.jsx)(s.code,{children:"createApp"})," when you need to create a Store locally in the app."]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive caution",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"CAUTION"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsxs)(s.p,{children:["\nNote that the exported ",(0,r.jsx)(s.code,{children:"createApp"})," in ",(0,r.jsx)(s.code,{children:"@modern-js/runtime/model"})," is used to manage state, while the exported ",(0,r.jsx)(s.code,{children:"createApp"})," in ",(0,r.jsx)(s.code,{children:"@modern-js/runtime"})," is used to create the entire application. The two are differently."]})})]}),"\n",(0,r.jsxs)(s.h2,{id:"function-signature",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#function-signature",children:"#"}),"Function Signature"]}),"\n",(0,r.jsxs)(s.div,{className:"language-ts",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"interface"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AppConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"extends"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"StoreConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  devTools"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"DevToolsOptions"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  autoActions"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"?:"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"boolean"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createApp"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(config"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"AppConfig"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"object"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(s.h3,{id:"input",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#input",children:"#"}),"Input"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"config"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"StoreConfig"}),": the same as ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/create-store.html",children:(0,r.jsx)(s.code,{children:"createStore"})})," params."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"devTools"}),": the default value is ",(0,r.jsx)(s.code,{children:"true"}),". when it is an object type，configuring ",(0,r.jsx)(s.a,{href:"https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md",target:"_blank",rel:"nofollow",children:"Options"})," of Redux DevTools."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"autoActions"}),": the default value is ",(0,r.jsx)(s.code,{children:"true"}),".if ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/auto-actions.html",children:"auto generate Actions"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.h3,{id:"return-value",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#return-value",children:"#"}),"Return Value"]}),"\n",(0,r.jsx)(s.p,{children:"Reduck App, consists of the following properties:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Provider"}),": inject shared Store into locally component tree, same as ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/Provider.html",children:(0,r.jsx)(s.code,{children:"Provider"})}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"useModel"}),": get the Model mounted by the app's local Store, same as ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-model.html",children:(0,r.jsx)(s.code,{children:"useModel"})}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"useStaticModel"}),": get the Model mounted by the app's local Store. same as ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-static-model.html",children:(0,r.jsx)(s.code,{children:"useStaticModel"})}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"useLocalModel"}),": get the Model mounted by the app's local Store. same as ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-local-model.html",children:(0,r.jsx)(s.code,{children:"useLocalModel"})}),"."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"useStore"}),": get the Store used locally by the app. same as ",(0,r.jsx)(s.a,{href:"/en/apis/app/runtime/model/use-store.html",children:(0,r.jsx)(s.code,{children:"useStore"})}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.h2,{id:"example",children:[(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,r.jsxs)(s.p,{children:["use ",(0,r.jsx)(s.code,{children:"createApp"}),", local states can be created to isolate the states between different Reduck applications."]}),"\n",(0,r.jsxs)(s.div,{className:"language-tsx",children:[(0,r.jsx)(s.div,{className:""}),(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(s.code,{children:[(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Provider: "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"LocalFooProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" useModel: "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"useLocalFooModel"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createApp"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" { Provider: "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"LocalBarProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" useModel: "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"useLocalBarModel"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" } "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"createApp"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Foo"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"fooState"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useLocalFooModel"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(fooModel);"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"barState"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"useLocalBarModel"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"(fooModel);"})]}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Foo: {fooState}</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">Bar: {barState}</"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"Container"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"() {"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"LocalFooProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"LocalBarProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"        <"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"Foo"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"      </"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"LocalBarProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(s.span,{className:"line",children:[(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    </"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-token-constant)"},children:"LocalFooProvider"}),(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  );"})}),"\n",(0,r.jsx)(s.span,{className:"line",children:(0,r.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,r.jsx)(s.span,{className:"line"})]})})]})]})]})}var d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}},25462:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),Object.defineProperty(s,"default",{enumerable:!0,get:function(){return i}});var r=n("12151"),o=n("21447");function l(e){let s=Object.assign({div:"div",p:"p",code:"code"},(0,o.useMDXComponents)(),e.components);return(0,r.jsxs)(s.div,{className:"modern-directive info",children:[(0,r.jsx)(s.p,{className:"modern-directive-title",children:"information"}),(0,r.jsxs)(s.div,{className:"modern-directive-content",children:[(0,r.jsxs)(s.p,{children:["\nBy default, the export package name for all APIs in this section is: ",(0,r.jsx)(s.code,{children:"@modern-js/runtime/model"}),"."]}),(0,r.jsxs)(s.p,{children:["If Reduck is integrated separately from Modern.js, the export package name is: ",(0,r.jsx)(s.code,{children:"@modern-js-reduck/react"}),"."]})]})]})}var i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,o.useMDXComponents)(),e.components);return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);