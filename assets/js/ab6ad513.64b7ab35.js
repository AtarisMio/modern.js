"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[30174],{54852:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(49231);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=l(r),f=i,m=g["".concat(s,".").concat(f)]||g[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},10329:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(86215),i=(r(49231),r(54852));const o={sidebar_position:1},a="isInGitRepo",p={unversionedId:"apis/generator/plugin/git/isInGitRepo",id:"apis/generator/plugin/git/isInGitRepo",title:"isInGitRepo",description:"\u5224\u65ad\u5f53\u524d\u9879\u76ee\u662f\u5426\u4e3a\u4e00\u4e2a Git \u4ed3\u5e93\u3002",source:"@site/docs/apis/generator/plugin/git/isInGitRepo.md",sourceDirName:"apis/generator/plugin/git",slug:"/apis/generator/plugin/git/isInGitRepo",permalink:"/docs/apis/generator/plugin/git/isInGitRepo",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisGeneratorSidebar",previous:{title:"install",permalink:"/docs/apis/generator/plugin/npm/install"},next:{title:"initGitRepo",permalink:"/docs/apis/generator/plugin/git/initGitRepo"}},s={},l=[],c={toc:l};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"isingitrepo"},"isInGitRepo"),(0,i.kt)("p",null,"\u5224\u65ad\u5f53\u524d\u9879\u76ee\u662f\u5426\u4e3a\u4e00\u4e2a Git \u4ed3\u5e93\u3002"),(0,i.kt)("p",null,"\u5176\u7c7b\u578b\u5b9a\u4e49\u4e3a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export type AfterForgedAPI = {\n  isInGitRepo: () => Promise<boolean>;\n  ...\n};\n")))}u.isMDXComponent=!0}}]);