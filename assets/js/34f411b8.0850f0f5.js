"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[7120],{57522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(18249),o=(n(29901),n(57522));const a={title:"packages/",sidebar_position:4},i=void 0,p={unversionedId:"apis/monorepo/hooks/packages",id:"apis/monorepo/hooks/packages",title:"packages/",description:"Monorepo \u5de5\u7a0b\u65b9\u6848\u516c\u5171\u6a21\u5757\u7c7b\u578b\u9879\u76ee\u76ee\u5f55\u3002",source:"@site/docs/apis/monorepo/hooks/packages.md",sourceDirName:"apis/monorepo/hooks",slug:"/apis/monorepo/hooks/packages",permalink:"/docs/apis/monorepo/hooks/packages",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"packages/",sidebar_position:4},sidebar:"apisMonorepoSidebar",previous:{title:"features/",permalink:"/docs/apis/monorepo/hooks/features"},next:{title:"pnpm-workspace.yaml",permalink:"/docs/apis/monorepo/hooks/pnpm-workspace"}},s={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Monorepo \u5de5\u7a0b\u65b9\u6848\u516c\u5171\u6a21\u5757\u7c7b\u578b\u9879\u76ee\u76ee\u5f55\u3002"),(0,o.kt)("p",null,"Modern.js Monorepo \u5de5\u7a0b\u65b9\u6848\u7ea6\u5b9a\u5c06\u516c\u5171\u6a21\u5757\u7c7b\u578b\u5b50\u9879\u76ee\u653e\u7f6e\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"packages")," \u76ee\u5f55\u4e0b\u8fdb\u884c\u7edf\u4e00\u7ba1\u7406\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"packages")," \u76ee\u5f55\u4e0b\u6bcf\u4e00\u4e2a\u6587\u4ef6\u5939\u90fd\u662f\u4e00\u4e2a\u5b8c\u6574\u7684\u6a21\u5757\u9879\u76ee\u3002"),(0,o.kt)("p",null,"\u516c\u5171\u6a21\u5757\u9879\u76ee\u7528\u6237\u4e00\u4e9b\u516c\u5171\u7684\u7ec4\u4ef6\u548c\u5de5\u5177\u7684\u7f16\u5199\uff0c\u8fd9\u4e9b\u516c\u5171\u5305\u53ef\u81ea\u884c\u8fdb\u884c\u7f16\u8bd1\u548c\u53d1\u5e03\uff0c\u4e5f\u53ef\u5728\u5e94\u7528\u7c7b\u578b\u9879\u76ee\u4e2d\u5f15\u7528\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u53ef\u76f4\u63a5\u5728\u9879\u76ee\u4e0b\u6267\u884c new \u547d\u4ee4\u521b\u5efa\u6a21\u5757\u7c7b\u578b\u5b50\u9879\u76ee\u3002"))))}m.isMDXComponent=!0}}]);