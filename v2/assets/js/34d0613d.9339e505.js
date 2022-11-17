"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8199],{44993:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,f=m["".concat(p,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(18249),o=(r(52983),r(44993));const a={sidebar_position:4},i="createSubProject",l={unversionedId:"apis/generator/plugin/new/createSubProject",id:"apis/generator/plugin/new/createSubProject",title:"createSubProject",description:"\u521b\u5efa\u5b50\u9879\u76ee\uff0c\u53ea\u652f\u6301 Monorepo \u5de5\u7a0b\u65b9\u6848\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/generator/plugin/new/createSubProject.md",sourceDirName:"apis/generator/plugin/new",slug:"/apis/generator/plugin/new/createSubProject",permalink:"/v2/docs/apis/generator/plugin/new/createSubProject",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"apisGeneratorSidebar",previous:{title:"enableFunc",permalink:"/v2/docs/apis/generator/plugin/new/enableFunc"},next:{title:"install",permalink:"/v2/docs/apis/generator/plugin/npm/install"}},p={},c=[{value:"solution",id:"solution",level:2},{value:"params",id:"params",level:2}],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"createsubproject"},"createSubProject"),(0,o.kt)("p",null,"\u521b\u5efa\u5b50\u9879\u76ee\uff0c\u53ea\u652f\u6301 Monorepo \u5de5\u7a0b\u65b9\u6848\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export enum SubSolution {\n  MWA = 'mwa',\n  MWATest = 'mwa_test',\n  Module = 'module',\n  InnerModule = 'inner_module',\n}\nexport type ForgedAPI = {\n  createSubProject: (\n    solution: SubSolution,\n    params: Record<string, unknown>,\n  ) => Promise<void>;\n  ...\n};\n")),(0,o.kt)("h2",{id:"solution"},"solution"),(0,o.kt)("p",null,"\u5b50\u9879\u76ee\u5de5\u7a0b\u65b9\u6848\u540d\u79f0\u3002"),(0,o.kt)("h2",{id:"params"},"params"),(0,o.kt)("p",null,"\u521b\u5efa\u5b50\u9879\u76ee\u7684\u5176\u4ed6\u53c2\u6570\uff0c\u8be6\u7ec6\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"/docs/configure/generator/monorepo#%E5%88%9B%E5%BB%BA%E5%AD%90%E9%A1%B9%E7%9B%AE"},"Monorepo \u521b\u5efa\u5b50\u9879\u76ee"),"\u3002"))}s.isMDXComponent=!0}}]);