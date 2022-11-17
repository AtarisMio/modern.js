"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3331],{44993:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(52983);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=p(t),f=a,d=b["".concat(l,".").concat(f)]||b[f]||u[f]||o;return t?n.createElement(d,i(i({ref:r},c),{},{components:t})):n.createElement(d,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=b;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},58979:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=t(18249),a=(t(52983),t(44993));const o={sidebar_label:"baseUrl",sidebar_position:3},i="server.baseUrl",s={unversionedId:"configure/app/server/base-url",id:"configure/app/server/base-url",title:"server.baseUrl",description:"* \u7c7b\u578b\uff1a string | string[]",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/server/base-url.md",sourceDirName:"configure/app/server",slug:"/configure/app/server/base-url",permalink:"/v2/en/docs/configure/app/server/base-url",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"baseUrl",sidebar_position:3},sidebar:"configsAppSidebar",previous:{title:"ssrByEntries",permalink:"/v2/en/docs/configure/app/server/ssr-by-entries"},next:{title:"publicRoutes",permalink:"/v2/en/docs/configure/app/server/public-routes"}},l={},p=[],c={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serverbaseurl"},"server.baseUrl"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"string | string[]")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"\u7edf\u4e00\u8bbe\u7f6e\u670d\u52a1\u7aef\u8def\u7531\u524d\u7f00\uff08\u5e38\u7528\u4e8e\u5171\u4eab\u57df\u540d\u7684\u60c5\u51b5\uff0c\u533a\u5206\u6d41\u91cf)\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  server: {\n    // \u6240\u6709\u751f\u6210\u7684\u8def\u7531\u524d\u9762\u90fd\u4f1a\u81ea\u52a8\u52a0\u4e0a\u524d\u7f00 `/base`\n    // \u751f\u6210\u7684\u670d\u52a1\u7aef\u8def\u7531\u6587\u4ef6\u8def\u5f84\uff1adist/route.json\n    baseUrl: '/base'\n\n    // \u591a baseUrl\n    baseUrl: ['/base-new', '/base-old']\n  }\n})\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u8def\u7531\u8bbf\u95ee\u4f1a\u52a0\u4e0a\u5bf9\u5e94\u524d\u7f00:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"App running at:\n\n  > Local:    http://localhost:8080/base/\n  > Network:  http://192.168.0.1:8080/base/\n")))}u.isMDXComponent=!0}}]);