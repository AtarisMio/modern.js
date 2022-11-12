"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6418],{44993:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(52983);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,g=d["".concat(p,".").concat(f)]||d[f]||s[f]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48939:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(18249),a=(r(52983),r(44993));const i={sidebar_position:7},o="updateTextRawFile",l={unversionedId:"apis/generator/plugin/file/updateTextRawFile",id:"apis/generator/plugin/file/updateTextRawFile",title:"updateTextRawFile",description:"\u66f4\u65b0\u6587\u672c\u5217\u8868\u6587\u4ef6\u5185\u5bb9\u3002",source:"@site/docs/apis/generator/plugin/file/updateTextRawFile.md",sourceDirName:"apis/generator/plugin/file",slug:"/apis/generator/plugin/file/updateTextRawFile",permalink:"/docs/apis/generator/plugin/file/updateTextRawFile",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"apisGeneratorSidebar",previous:{title:"updateJSONFile",permalink:"/docs/apis/generator/plugin/file/updateJSONFile"},next:{title:"updateModernConfig",permalink:"/docs/apis/generator/plugin/file/updateModernConfig"}},p={},u=[{value:"fileName",id:"filename",level:2},{value:"update",id:"update",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"updatetextrawfile"},"updateTextRawFile"),(0,a.kt)("p",null,"\u66f4\u65b0\u6587\u672c\u5217\u8868\u6587\u4ef6\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u9002\u7528\u4e0e\u6587\u672c\u5217\u8868\u6587\u4ef6\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u8be5\u65b9\u6cd5\u53ef\u5728 onForged \u751f\u547d\u5468\u671f\u7684 api \u53c2\u6570\u4e0a\u83b7\u53d6\u3002"),(0,a.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export type ForgedAPI = {\nupdateTextRawFile: (\n    fileName: string,\n    update: (content: string[]) => string[],\n  ) => Promise<void>;\n  ...\n};\n")),(0,a.kt)("h2",{id:"filename"},"fileName"),(0,a.kt)("p",null,"\u6587\u672c\u5217\u8868\u6587\u4ef6\u7684\u6587\u4ef6\u540d\u6216\u8005\u6587\u4ef6\u8def\u5f84\u3002"),(0,a.kt)("h2",{id:"update"},"update"),(0,a.kt)("p",null,"\u66f4\u65b0\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u8be5\u51fd\u6570\u53c2\u6570\u4e3a\u5f53\u524d\u6587\u4ef6\u5185\u5bb9\uff0c\u5185\u5bb9\u5c06\u4ee5 '\\n' \u5206\u5272\uff0c\u4ee5\u6570\u7ec4\u7684\u5f62\u5f0f\u4f20\u5165\u51fd\u6570\uff0c\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e5f\u662f\u6570\u7ec4\uff0c\u5185\u90e8\u5c06\u81ea\u52a8\u4ee5 '\\n' \u5408\u5e76\uff0c\u5199\u5165\u6e90\u6587\u4ef6\u3002"))}s.isMDXComponent=!0}}]);