"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2131],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=u(r),s=o,f=g["".concat(l,".").concat(s)]||g[s]||d[s]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function s(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},7261:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var n=r(18249),o=(r(52983),r(44993));const i={sidebar_position:2},a="AfterForged",p={unversionedId:"guides/topic-detail/generator/plugin/api/hook/afterForged",id:"guides/topic-detail/generator/plugin/api/hook/afterForged",title:"AfterForged",description:"afterForged \u51fd\u6570\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5176\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u5b89\u88c5\u4f9d\u8d56\u3001Git \u7b49\u64cd\u4f5c\uff0c\u4e13\u4e1a\u4e9b\u64cd\u4f5c\u5c06\u4f1a\u5728 onForged \u51fd\u6570\u6267\u884c\u5b8c\u6210\u540e\u8fdb\u884c\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/generator/plugin/api/hook/afterForged.md",sourceDirName:"guides/topic-detail/generator/plugin/api/hook",slug:"/guides/topic-detail/generator/plugin/api/hook/afterForged",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/hook/afterForged",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"OnForged",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/hook/onForged"},next:{title:"\u4ecb\u7ecd",permalink:"/v2/en/docs/guides/topic-detail/generator/plugin/api/file/introduce"}},l={},u=[{value:"func",id:"func",level:2},{value:"api",id:"api",level:3},{value:"inputData",id:"inputdata",level:3}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"afterforged"},"AfterForged"),(0,o.kt)("p",null,"afterForged \u51fd\u6570\u4e3a\u751f\u6210\u5668\u63d2\u4ef6\u751f\u547d\u5468\u671f\u51fd\u6570\uff0c\u5176\u901a\u5e38\u7528\u4e8e\u5b9a\u4e49\u5b89\u88c5\u4f9d\u8d56\u3001Git \u7b49\u64cd\u4f5c\uff0c\u4e13\u4e1a\u4e9b\u64cd\u4f5c\u5c06\u4f1a\u5728 onForged \u51fd\u6570\u6267\u884c\u5b8c\u6210\u540e\u8fdb\u884c\u3002"),(0,o.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u76f4\u63a5\u5728 context \u4e0a\u83b7\u53d6\u3002"),(0,o.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export type PluginAfterForgedFunc = (\n  api: AfterForgedAPI,\n  inputData: Record<string, unknown>,\n) => Promise<void>;\n\nexport interface IPluginContext {\n  afterForged: (func: PluginAfterForgedFunc) => void;\n  ...\n}\n")),(0,o.kt)("h2",{id:"func"},"func"),(0,o.kt)("p",null,"afterForged \u53c2\u6570\u662f\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u51fd\u6570\u53c2\u6570\u4e3a api \u548c inputData\u3002"),(0,o.kt)("h3",{id:"api"},"api"),(0,o.kt)("p",null,"\u5728 afterForged \u751f\u547d\u5468\u671f\u4e2d\u652f\u6301\u7684\u51fd\u6570\u5217\u8868\uff0c\u5177\u4f53\u53ef\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/git/isInGitRepo"},"Git API")," \u548c ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/generator/plugin/api/npm/install"},"NPM API"),"\u3002"),(0,o.kt)("h3",{id:"inputdata"},"inputData"),(0,o.kt)("p",null,"\u5f53\u524d\u7528\u6237\u8f93\u5165\uff0c\u53ef\u7528\u4e8e\u83b7\u53d6\u7528\u6237\u5f53\u524d\u7684\u8f93\u5165\u4fe1\u606f\u53ca\u914d\u7f6e\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);