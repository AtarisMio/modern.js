"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4280],{44993:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var r=a(52983);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),d=n,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?r.createElement(y,l(l({ref:t},c),{},{components:a})):r.createElement(y,l({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=a(18249),n=(a(52983),a(44993));const o={title:"lazy",sidebar_position:2},l=void 0,i={unversionedId:"apis/app/runtime/utility/loadable/lazy",id:"apis/app/runtime/utility/loadable/lazy",title:"lazy",description:"\u7528\u4e8e\u521b\u5efa\u652f\u6301 Suspense \u7684 loadable \u7ec4\u4ef6\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/utility/loadable/lazy.md",sourceDirName:"apis/app/runtime/utility/loadable",slug:"/apis/app/runtime/utility/loadable/lazy",permalink:"/v2/docs/apis/app/runtime/utility/loadable/lazy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"lazy",sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"loadable",permalink:"/v2/docs/apis/app/runtime/utility/loadable/loadable_"},next:{title:"LoadableComponent",permalink:"/v2/docs/apis/app/runtime/utility/loadable/loadable-component"}},p={},s=[{value:"API",id:"api",level:2},{value:"lazy",id:"lazy",level:3},{value:"lazy.lib",id:"lazylib",level:3}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u7528\u4e8e\u521b\u5efa\u652f\u6301 ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactsuspense"},"Suspense")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"loadable \u7ec4\u4ef6"),"\u3002"),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { lazy } from '@modern-js/runtime/loadable';\n"))),(0,n.kt)("h2",{id:"api"},"API"),(0,n.kt)("h3",{id:"lazy"},"lazy"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { lazy } from '@modern-js/runtime/loadable';\nconst OtherComponent = lazy(() => import('./OtherComponent'));\n")),(0,n.kt)("h3",{id:"lazylib"},"lazy.lib"),(0,n.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u652f\u6301 ",(0,n.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/react-api.html#reactsuspense"},"Suspense")," \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"loadable \u5e93"),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import { lazy } from '@modern-js/runtime/loadable';\nconst Moment = lazy.lib(() => import('moment'))\n")))}u.isMDXComponent=!0}}]);