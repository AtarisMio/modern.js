(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_apis_app_hooks_api_functions_api_mdx"],{57171:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return r},toc:function(){return t},title:function(){return c},default:function(){return o}});var i=n("12151"),l=n("21447");let r={title:"**/*.[tj]s",sidebar_position:1},t=[{id:"routing-rule",text:"Routing Rule",depth:2},{id:"default-route",text:"Default Route",depth:3},{id:"multi-level-route",text:"Multi Level Route",depth:3},{id:"dynamic-route",text:"Dynamic Route",depth:3},{id:"allow-list",text:"Allow List",depth:3},{id:"define-function",text:"Define Function",depth:2}],c="**/*.[tj]s";function d(e){let s=Object.assign({h1:"h1",a:"a",p:"p",code:"code",div:"div",h2:"h2",h3:"h3",ul:"ul",li:"li",button:"button",pre:"pre",span:"span"},(0,l.useMDXComponents)(),e.components);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.h1,{id:"tjs",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#tjs",children:"#"}),"**/*.[tj]s"]}),"\n",(0,i.jsxs)(s.p,{children:["Declaring API routing in BFF function mode. Except ",(0,i.jsx)(s.a,{href:"/en/apis/app/hooks/api/functions/api.html#allow-list",children:"some files"}),"，files in ",(0,i.jsx)(s.code,{children:"api/"})," are registered as routes."]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive info",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"INFO"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nuse ",(0,i.jsx)(s.code,{children:"api/"})," need execute new command to enable the 「BFF」 feature."]})})]}),"\n",(0,i.jsxs)(s.div,{className:"modern-directive tip",children:[(0,i.jsx)(s.p,{className:"modern-directive-title",children:"TIP"}),(0,i.jsx)(s.div,{className:"modern-directive-content",children:(0,i.jsxs)(s.p,{children:["\nthis file supports the use ",(0,i.jsx)(s.code,{children:"js"})," or ",(0,i.jsx)(s.code,{children:"ts"}),", but the functions must be exported using the ESM syntax."]})})]}),"\n",(0,i.jsxs)(s.h2,{id:"routing-rule",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#routing-rule",children:"#"}),"Routing Rule"]}),"\n",(0,i.jsxs)(s.h3,{id:"default-route",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#default-route",children:"#"}),"Default Route"]}),"\n",(0,i.jsxs)(s.p,{children:["The files named ",(0,i.jsx)(s.code,{children:"index"})," will be upper level routing:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api/index.ts"})," -> ",(0,i.jsx)(s.code,{children:"$BASENAME/"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api/user/index.ts"})," -> ",(0,i.jsx)(s.code,{children:"$BASENAME/user"})]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"multi-level-route",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#multi-level-route",children:"#"}),"Multi Level Route"]}),"\n",(0,i.jsx)(s.p,{children:"The routing system also supports parsing multiple levels of files. and if you create a folder, the files will still be automatically parsed in the same way."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api/hello.ts"})," -> ",(0,i.jsx)(s.code,{children:"$BASENAME/hello"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api/user/list.ts"})," -> ",(0,i.jsx)(s.code,{children:"$BASENAME/user/list"})]}),"\n"]}),"\n",(0,i.jsxs)(s.h3,{id:"dynamic-route",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#dynamic-route",children:"#"}),"Dynamic Route"]}),"\n",(0,i.jsxs)(s.p,{children:["Dynamic named routing parameters can be supported by creating folders or files with ",(0,i.jsx)(s.code,{children:"[xxx]"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api/user/[username]/info.ts"})," -> ",(0,i.jsx)(s.code,{children:"$BASENAME/user/:username/info"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api/user/[username]/delete.ts"})," -> ",(0,i.jsx)(s.code,{children:"$BASENAME/user/:username/delete"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"api/article/[id]/info.ts"})," -> ",(0,i.jsx)(s.code,{children:"$BASENAME/article/:id/info"})]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["the ",(0,i.jsx)(s.code,{children:"$BASENAME"})," can be configured in ",(0,i.jsx)(s.code,{children:"modern.config.js"}),"，the default value is ",(0,i.jsx)(s.code,{children:"/api"}),"."]}),"\n",(0,i.jsxs)(s.h3,{id:"allow-list",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#allow-list",children:"#"}),"Allow List"]}),"\n",(0,i.jsxs)(s.p,{children:["By default, all files in the ",(0,i.jsx)(s.code,{children:"api/"})," will be parsed as BFF function. but we also set a allow list, and these files will not be parsed:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["file name start with ",(0,i.jsx)(s.code,{children:"_"}),", for example: ",(0,i.jsx)(s.code,{children:"_utils.ts"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["files in directory that name start with ",(0,i.jsx)(s.code,{children:"_"}),", for example: ",(0,i.jsx)(s.code,{children:"_utils/index.ts"}),"、",(0,i.jsx)(s.code,{children:"_utils/cp.ts"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["test files, for example: ",(0,i.jsx)(s.code,{children:"foo.test.ts"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["TypeScript define files, for example: ",(0,i.jsx)(s.code,{children:"hello.d.ts"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["files in ",(0,i.jsx)(s.code,{children:"node_module"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(s.h2,{id:"define-function",children:[(0,i.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#define-function",children:"#"}),"Define Function"]}),"\n",(0,i.jsx)(s.p,{children:"In addition to the above routing rules, the function definition and export in the code also have conventions."}),"\n",(0,i.jsx)(s.p,{children:"function need named exports，and the name of the exported function is the HTTP Method:"}),"\n",(0,i.jsxs)(s.div,{className:"language-ts",children:[(0,i.jsx)(s.div,{className:""}),(0,i.jsxs)(s.div,{className:"modern-code-content",children:[(0,i.jsx)(s.button,{className:"copy"}),(0,i.jsx)(s.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,i.jsxs)(s.code,{children:[(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-function)"},children:"get"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"async"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:"return"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    name"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Modern.js'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsxs)(s.span,{className:"line",children:[(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"    desc"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'Modern web Solutions'"}),(0,i.jsx)(s.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"  };"})}),"\n",(0,i.jsx)(s.span,{className:"line",children:(0,i.jsx)(s.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,i.jsx)(s.span,{className:"line"})]})})]})]}),"\n",(0,i.jsxs)(s.p,{children:["Export the function like above will generate a ",(0,i.jsx)(s.code,{children:"POST"})," interface."]}),"\n",(0,i.jsxs)(s.p,{children:["App support 9 Method definitions: ",(0,i.jsx)(s.code,{children:"GET"}),"、",(0,i.jsx)(s.code,{children:"POST"}),"、",(0,i.jsx)(s.code,{children:"PUT"}),"、",(0,i.jsx)(s.code,{children:"DELETE"}),"、",(0,i.jsx)(s.code,{children:"CONNECT"}),"、",(0,i.jsx)(s.code,{children:"TRACE"}),"、",(0,i.jsx)(s.code,{children:"PATCH"}),"、",(0,i.jsx)(s.code,{children:"OPTION"}),"、",(0,i.jsx)(s.code,{children:"HEAD"}),". so App can use these name as function export nane."]}),"\n",(0,i.jsxs)(s.p,{children:["The name is insensitive, whaterver ",(0,i.jsx)(s.code,{children:"get"}),"、",(0,i.jsx)(s.code,{children:"Get"}),"、",(0,i.jsx)(s.code,{children:"GEt"}),"、",(0,i.jsx)(s.code,{children:"GET"}),", can be accurately identified. And default export, ",(0,i.jsx)(s.code,{children:"export default xxx"})," will be ",(0,i.jsx)(s.code,{children:"Get"})," method."]}),"\n",(0,i.jsxs)(s.p,{children:["because ",(0,i.jsx)(s.code,{children:"delete"})," is a keyword in JavaScript, use ",(0,i.jsx)(s.code,{children:"del"})," or ",(0,i.jsx)(s.code,{children:"DELETE"})," instead."]}),"\n",(0,i.jsx)(s.p,{children:"Multiple functions of different Methods can be defined in one file, but if multiple functions of the same Method are defined, only the first can work."}),"\n",(0,i.jsx)(s.p,{children:":::info\nIt should be noted that the defined functions should be asynchronous, which is related to the type when the function is called."})]})}var o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:s}=Object.assign({},(0,l.useMDXComponents)(),e.components);return s?(0,i.jsx)(s,Object.assign({},e,{children:(0,i.jsx)(d,e)})):d(e)}}}]);