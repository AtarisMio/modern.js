"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[354],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(18249),r=(n(52983),n(44993));const o={title:"\u4ee3\u7801\u5206\u5272",sidebar_position:6},l=void 0,i={unversionedId:"guides/advanced-features/code-split",id:"guides/advanced-features/code-split",title:"\u4ee3\u7801\u5206\u5272",description:"\u4ee3\u7801\u5206\u5272\u662f\u4f18\u5316\u524d\u7aef\u8d44\u6e90\u52a0\u8f7d\u7684\u4e00\u79cd\u5e38\u7528\u624b\u6bb5\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd Modern.js \u652f\u6301\u7684\u4e09\u79cd\u4ee3\u7801\u5206\u5272\u65b9\u5f0f\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/guides/advanced-features/code-split.md",sourceDirName:"guides/advanced-features",slug:"/guides/advanced-features/code-split",permalink:"/v2/docs/guides/advanced-features/code-split",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"\u4ee3\u7801\u5206\u5272",sidebar_position:6},sidebar:"guidesSidebar",previous:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",permalink:"/v2/docs/guides/advanced-features/compatibility"},next:{title:"\u81ea\u5b9a\u4e49\u5165\u53e3",permalink:"/v2/docs/guides/advanced-features/custom-app"}},p={},c=[{value:"import",id:"import",level:2},{value:"loadable",id:"loadable",level:2},{value:"React.lazy",id:"reactlazy",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4ee3\u7801\u5206\u5272\u662f\u4f18\u5316\u524d\u7aef\u8d44\u6e90\u52a0\u8f7d\u7684\u4e00\u79cd\u5e38\u7528\u624b\u6bb5\uff0c\u672c\u6587\u5c06\u4ecb\u7ecd Modern.js \u652f\u6301\u7684\u4e09\u79cd\u4ee3\u7801\u5206\u5272\u65b9\u5f0f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"import")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"React.lazy")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"loadable"))),(0,r.kt)("h2",{id:"import"},"import"),(0,r.kt)("p",null,"\u4f7f\u7528\u52a8\u6001 ",(0,r.kt)("inlineCode",{parentName:"p"},"import()")," \u8bed\u6cd5\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"import")," \u63a5\u6536\u7684 JS \u6a21\u5757\u5c06\u4f5c\u4e3a\u4e00\u4e2a\u65b0\u7684\u6253\u5305\u5165\u53e3\u88ab\u6253\u5305\u5230\u5355\u72ec\u7684 JS \u6587\u4ef6\u4e2d\u3002\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import("./math").then(math => {\n  console.log(math.add(16, 26));\n});\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"./math")," \u8def\u5f84\u5bf9\u5e94\u7684 JS \u6a21\u5757\u4f1a\u88ab\u6253\u5305\u5230\u5355\u72ec\u7684 JS \u6587\u4ef6\u4e2d\u3002"),(0,r.kt)("h2",{id:"loadable"},"loadable"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"loadable")," API\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import loadable from '@modern-js/runtime/loadable'\n\nconst OtherComponent = loadable(() => import('./OtherComponent'));\n\nfunction MyComponent() {\n  return <OtherComponent />\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"loadable")," \u66f4\u591a\u7528\u6cd5\u8bf7\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/utility/loadable"},"loadable API"),"\u3002"),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"loadable")," \u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301 SSR\u3002")),(0,r.kt)("h2",{id:"reactlazy"},"React.lazy"),(0,r.kt)("p",null,"React \u5b98\u65b9\u63d0\u4f9b\u7684\u7ec4\u4ef6\u4ee3\u7801\u5206\u5272\u7684\u65b9\u5f0f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7f3a\u70b9\u662f\u4e0d\u652f\u6301 SSR"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import React, { Suspense } from 'react';\n\nconst OtherComponent = React.lazy(() => import('./OtherComponent'));\nconst AnotherComponent = React.lazy(() => import('./AnotherComponent'));\n\nfunction MyComponent() {\n  return (\n    <div>\n      <Suspense fallback={<div>Loading...</div>}>\n        <section>\n          <OtherComponent />\n          <AnotherComponent />\n        </section>\n      </Suspense>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"React.lazy")," \u66f4\u591a\u7528\u6cd5\u8bf7\u89c1 ",(0,r.kt)("a",{parentName:"p",href:"https://zh-hans.reactjs.org/docs/code-splitting.html#reactlazy"},"React lazy"),"\u3002"))}s.isMDXComponent=!0}}]);