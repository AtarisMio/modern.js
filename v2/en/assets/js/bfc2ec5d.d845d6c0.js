"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6042,3543],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},64098:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(18249),r=(n(52983),n(44993)),i=n(57119);const o={sidebar_position:7,title:"handleEffect"},l=void 0,s={unversionedId:"apis/app/runtime/model/handle-effect",id:"apis/app/runtime/model/handle-effect",title:"handleEffect",description:"An asynchronous function type Effect usually has three states that need to be processed: in request, request successful, and request failed. The way to handle these states is to write the Action functions (pending, fulfilled, rejected).",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/model/handle-effect.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/handle-effect",permalink:"/v2/en/docs/apis/app/runtime/model/handle-effect",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"handleEffect"},sidebar:"apisAppSidebar",previous:{title:"Auto actions",permalink:"/v2/en/docs/apis/app/runtime/model/auto-actions"},next:{title:"Provider",permalink:"/v2/en/docs/apis/app/runtime/model/Provider"}},p={},u=[{value:"Function Signature",id:"function-signature",level:2},{value:"Input",id:"input",level:3},{value:"Return Type",id:"return-type",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.default,{mdxType:"ReduckTip"}),(0,r.kt)("p",null,"An asynchronous function type Effect usually has three states that need to be processed: in request, request successful, and request failed. The way to handle these states is to write the Action functions (pending, fulfilled, rejected)."),(0,r.kt)("p",null,"With the help of the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleEffect")," API, we can generate default Action functions to handle different results at each stage of an asynchronous request. The structure of the State returned by the Action generated by ",(0,r.kt)("inlineCode",{parentName:"p"},"handleEffect")," is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  result: any; // result of fulfilled state\n  pending: boolean; // request is pending\n  error: string; // request error message\n}\n")),(0,r.kt)("h2",{id:"function-signature"},"Function Signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EffectActions {\n  pending: Action;\n  fulfilled: Action;\n  rejected: Action;\n}\n\ninterface Config {\n  ns?: string;\n  result?: string | false;\n  error?: string | false;\n  pending?: string | false;\n  combineMode?: 'merge' | 'replace';\n  omitResultNamespace?: boolean;\n}\n\nfunction handleEffect(config: Config): EffectActions;\n")),(0,r.kt)("h3",{id:"input"},"Input"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ns"),": the default returned State structure is flat, By setting this parameter, the returned State can be mounted under the field named by the ",(0,r.kt)("inlineCode",{parentName:"li"},"ns"),". For example, if ",(0,r.kt)("inlineCode",{parentName:"li"},"ns")," is set to ",(0,r.kt)("inlineCode",{parentName:"li"},'"data"'),", the returned structure is:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  data: {\n    pending: boolean;\n    result: any;\n    error: string;\n  }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"result"),': the default value is "result". This parameter corresponds to the field name that stores the fulfilled state results. For example, set ',(0,r.kt)("inlineCode",{parentName:"li"},"result")," to ",(0,r.kt)("inlineCode",{parentName:"li"},'"items"'),", the returned State structure is:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  items: any; // \u9ed8\u8ba4\u7684 result -> items\n  pending: boolean;\n  error: string;\n}\n")),(0,r.kt)("p",null,"if ",(0,r.kt)("inlineCode",{parentName:"p"},"result")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\uff0cthen returned State has no ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface State {\n  pending: boolean;\n  error: string;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"pending"),": the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"pending"'),". Change the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"pending")," field in the returned State. Usage is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"error"),":  the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"error"'),". Change the name of the ",(0,r.kt)("inlineCode",{parentName:"p"},"error")," field in the returned State. Usage is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"result"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"combineMode"),": the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},'"merge"'),"\u3002get fulfilled state results. There are two ways to deal with it (The data types that can be automatically processed here are also limited to simple object or array types):"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"merge"'),": the previous data is merged with the current data. the data is an array type, operation is similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"[].concat(lastData, currentData)"),". the data is an object\uff0coperation is similar to ",(0,r.kt)("inlineCode",{parentName:"li"},"{...lastData, ...curData}"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'"replace"'),": the current data directly replaces the previous data."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"omitResultNamespace"),": the default value is ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),'. When the result is an object type, you want to mount the result directly on the State of the Model, rather than on "result", you can set it to true. For example:'))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// the result: {user: 'xx', email: 'xx'}\uff0c\n// config handleEffect({ omitResultNamespace: true })\n// get State like follows:\n{\n  user: 'xx',\n  email: 'xx',\n  pending: false,\n  error: null,\n}\n")),(0,r.kt)("h3",{id:"return-type"},"Return Type"),(0,r.kt)("p",null,"Objects are processed by actions in pending, fulfilled, and rejected states."),(0,r.kt)("admonition",{title:"More",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/manage-effects"},"Manage Effect"),".")))}c.isMDXComponent=!0},57119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(18249),r=(n(52983),n(44993));const i={},o=void 0,l={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/../../packages/toolkit/main-doc/zh/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v2/en/docs/components/reduck-tip",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002")))}d.isMDXComponent=!0}}]);