"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9294],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},23397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const i={sidebar_position:6},l="updateJSONFile",o={unversionedId:"apis/generator/plugin/file/updateJSONFile",id:"apis/generator/plugin/file/updateJSONFile",title:"updateJSONFile",description:"\u66f4\u65b0 JSON \u6587\u4ef6\u5b57\u6bb5\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/generator/plugin/file/updateJSONFile.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/updateJSONFile",permalink:"/v2/docs/apis/generator/plugin/file/updateJSONFile",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"apisGeneratorSidebar",previous:{title:"addManyFile",permalink:"/v2/docs/apis/generator/plugin/file/addManyFile"},next:{title:"updateTextRawFile",permalink:"/v2/docs/apis/generator/plugin/file/updateTextRawFile"}},p={},u=[{value:"fileName",id:"filename",level:2},{value:"updateInfo",id:"updateinfo",level:2}],c={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"updatejsonfile"},"updateJSONFile"),(0,a.kt)("p",null,"\u66f4\u65b0 JSON \u6587\u4ef6\u5b57\u6bb5\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u9002\u7528\u4e8e JSON \u6587\u4ef6\u7c7b\u578b\uff0c\u53ef\u6279\u91cf\u66f4\u65b0 JSON \u6587\u4ef6\u4e2d\u5b57\u6bb5\u503c\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\n  updateJSONFile: (\n    fileName: string,\n    updateInfo: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n")),(0,a.kt)("h2",{id:"filename"},"fileName"),(0,a.kt)("p",null,"JSON \u6587\u4ef6\u7684\u6587\u4ef6\u540d\u6216\u8005\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h2",{id:"updateinfo"},"updateInfo"),(0,a.kt)("p",null,"\u5b57\u6bb5\u66f4\u65b0\u4fe1\u606f\u3002\n\u8be5\u4fe1\u606f\u4f7f\u7528 Record \u5f62\u5f0f\u8868\u793a\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\u9700\u8981\u66f4\u65b0 name \u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'api.updateJSONFile(file, {\n    name: "\u65b0\u540d\u79f0"\n})\n')),(0,a.kt)("p",null,"\u9700\u66f4\u65b0\u5d4c\u5957\u5b57\u6bb5\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'api.updateJSONFile(file, {\n  "dependencies.name": "\u65b0\u540d\u79f0"\n})\n')),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"\u66f4\u65b0\u5d4c\u5957\u5b57\u6bb5\u65f6\u6ce8\u610f\u5b57\u6bb5\u540d\uff0c\u5982\u679c\u4e0d\u662f\u5168\u91cf\u66f4\u65b0\uff0c\u9700\u5c06\u5d4c\u5957\u7684 key \u4e5f\u5199\u5165\u5b57\u6bb5\u540d\u4e2d\u3002")))}s.isMDXComponent=!0}}]);