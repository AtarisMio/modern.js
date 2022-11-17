"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[372],{44993:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(52983);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),f=c(t),m=s,d=f["".concat(p,".").concat(m)]||f[m]||u[m]||i;return t?n.createElement(d,a(a({ref:r},l),{},{components:t})):n.createElement(d,a({ref:r},l))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=f;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},48892:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(18249),s=(t(52983),t(44993));const i={sidebar_label:"ssrByEntries",sidebar_position:2},a="server.ssrByEntries",o={unversionedId:"configure/app/server/ssr-by-entries",id:"configure/app/server/ssr-by-entries",title:"server.ssrByEntries",description:"* \u7c7b\u578b\uff1a Object",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/server/ssr-by-entries.md",sourceDirName:"configure/app/server",slug:"/configure/app/server/ssr-by-entries",permalink:"/v2/docs/configure/app/server/ssr-by-entries",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"ssrByEntries",sidebar_position:2},sidebar:"configsAppSidebar",previous:{title:"ssr",permalink:"/v2/docs/configure/app/server/ssr"},next:{title:"baseUrl",permalink:"/v2/docs/configure/app/server/base-url"}},p={},c=[],l={toc:c};function u(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"serverssrbyentries"},"server.ssrByEntries"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,s.kt)("inlineCode",{parentName:"li"},"Object")),(0,s.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,s.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,s.kt)("p",null,"\u6309\u5165\u53e3\u8bbe\u7f6e ssr \u9009\u9879\uff0c\u9009\u9879\u5185\u7684\u5c5e\u6027\u540c ",(0,s.kt)("a",{parentName:"p",href:"/v2/docs/configure/app/server/ssr"},"ssr"),"\uff0c\u6307\u5b9a\u503c\u4f1a\u548c ssr \u5c5e\u6027\u5185\u5bb9\u505a\u66ff\u6362\u5408\u5e76\u64cd\u4f5c\uff0c\u4f8b\u5982\uff1a"),(0,s.kt)("admonition",{title:"\u6ce8",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u300c \u5165\u53e3\u540d \u300d\u9ed8\u8ba4\u4e3a\u76ee\u5f55\u540d\uff0c\u5c11\u6570\u60c5\u51b5\u4e0b\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"source.entries")," \u81ea\u5b9a\u4e49\u5165\u53e3\u65f6\uff0c\u5165\u53e3\u540d\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"source.entries")," \u5bf9\u8c61\u7684 ",(0,s.kt)("inlineCode",{parentName:"p"},"key"),"\u3002")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  server: {\n    ssr: true,\n    ssrByEntries: {\n      // entry1 \u4e0d\u542f\u7528 ssr\n      'page-a': false,\n    }\n  }\n});\n")),(0,s.kt)("p",null,"\u5982\u4e0a\u914d\u7f6e\uff0c\u9879\u76ee\u6574\u4f53\u542f\u7528\u4e86 ssr, \u4f46\u662f\u9488\u5bf9\u5165\u53e3 ",(0,s.kt)("inlineCode",{parentName:"p"},"page-a")," \u5173\u95ed\u4e86 ssr \u6e32\u67d3\u80fd\u529b\u3002"))}u.isMDXComponent=!0}}]);