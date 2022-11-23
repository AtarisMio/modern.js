"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9615],{44993:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},97270:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(18249),o=(r(52983),r(44993));const a={title:"features/",sidebar_position:3},i=void 0,p={unversionedId:"apis/monorepo/hooks/features",id:"apis/monorepo/hooks/features",title:"features/",description:"Monorepo \u5de5\u7a0b\u65b9\u6848\u5185\u90e8\u6a21\u5757\u7c7b\u578b\u9879\u76ee\u76ee\u5f55\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/monorepo/hooks/features.md",sourceDirName:"apis/monorepo/hooks",slug:"/apis/monorepo/hooks/features",permalink:"/v2/en/docs/apis/monorepo/hooks/features",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"features/",sidebar_position:3},sidebar:"apisMonorepoSidebar",previous:{title:"examples/*",permalink:"/v2/en/docs/apis/monorepo/hooks/examples"},next:{title:"packages/",permalink:"/v2/en/docs/apis/monorepo/hooks/packages"}},s={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Monorepo \u5de5\u7a0b\u65b9\u6848\u5185\u90e8\u6a21\u5757\u7c7b\u578b\u9879\u76ee\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"Modern.js Monorepo \u5de5\u7a0b\u65b9\u6848\u7ea6\u5b9a\u5c06\u5185\u90e8\u6a21\u5757\u7c7b\u578b\u5b50\u9879\u76ee\u653e\u7f6e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"features")," \u76ee\u5f55\u4e0b\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"features")," \u76ee\u5f55\u4e0b\u6bcf\u4e00\u4e2a\u6587\u4ef6\u5939\u90fd\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u6a21\u5757\u9879\u76ee\u3002"),(0,o.kt)("p",null,"\u5185\u90e8\u6a21\u5757\u9879\u76ee\u7528\u4e8e\u4e00\u4e9b\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u516c\u5171\u7684\u7ec4\u4ef6\u548c\u5de5\u5177\u7684\u7f16\u5199\uff0c\u8fd9\u7c7b\u578b\u7684\u9879\u76ee\u4e0d\u5305\u542b\u7f16\u8bd1\u3001\u53d1\u5e03\u547d\u4ee4\uff0c\u5728\u5e94\u7528\u7c7b\u578b\u9879\u76ee\u4e2d\u5f15\u7528\u65f6\uff0c\u5e94\u7528\u7c7b\u578b\u9879\u76ee\u4f1a\u9ed8\u8ba4\u5bf9\u5176\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u53ef\u76f4\u63a5\u5728\u9879\u76ee\u4e0b\u6267\u884c new \u547d\u4ee4\u5185\u90e8\u6a21\u5757\u7c7b\u578b\u5b50\u9879\u76ee\u3002")))}u.isMDXComponent=!0}}]);