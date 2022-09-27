"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4570],{57522:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(29901);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(p,".").concat(u)]||m[u]||l[u]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(18249),o=(r(29901),r(57522));const a={sidebar_position:5,title:"\u6df7\u5408\u6280\u672f\u6808"},i=void 0,s={unversionedId:"guides/features/micro-frontend/mixed-stack",id:"guides/features/micro-frontend/mixed-stack",title:"\u6df7\u5408\u6280\u672f\u6808",description:"Modern.js \u5fae\u524d\u7aef\u65b9\u6848\u662f\u57fa\u4e8e Garfish \u5c01\u88c5\u7684\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b\u66f4\u5f00\u7bb1\u5373\u7528\u7684\u4f7f\u7528\u65b9\u5f0f\u3002",source:"@site/docs/guides/features/micro-frontend/mixed-stack.md",sourceDirName:"guides/features/micro-frontend",slug:"/guides/features/micro-frontend/mixed-stack",permalink:"/docs/guides/features/micro-frontend/mixed-stack",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"\u6df7\u5408\u6280\u672f\u6808"},sidebar:"guidesSidebar",previous:{title:"\u52a0\u8f7d\u5b50\u5e94\u7528",permalink:"/docs/guides/features/micro-frontend/route-mode"},next:{title:"Electron \u7b80\u4ecb",permalink:"/docs/guides/features/electron/basic"}},p={},c=[{value:"\u5b50\u5e94\u7528\u662f Modern.js",id:"\u5b50\u5e94\u7528\u662f-modernjs",level:2},{value:"\u4e3b\u5e94\u7528\u662f Modern.js",id:"\u4e3b\u5e94\u7528\u662f-modernjs",level:2}],d={toc:c};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Modern.js \u5fae\u524d\u7aef\u65b9\u6848\u662f\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"https://garfish.top/"},"Garfish")," \u5c01\u88c5\u7684\uff0c\u63d0\u4f9b\u4e86\u4e00\u4e9b\u66f4\u5f00\u7bb1\u5373\u7528\u7684\u4f7f\u7528\u65b9\u5f0f\u3002"),(0,o.kt)("p",null,"\u5f53\u4f60\u7684\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\u4e0d\u5168\u662f Modern.js \u5e94\u7528\u7684\u65f6\u5019\uff0c\u53ef\u4ee5\u53c2\u8003\u8fd9\u7247\u6587\u6863\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b50\u5e94\u7528\u662f ",(0,o.kt)("strong",{parentName:"li"},"Modern.js"),"\uff0c\u4e3b\u5e94\u7528\u4f7f\u7528\u7684\u539f\u751f Garfish \u5fae\u524d\u7aef\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u4e3b\u5e94\u7528\u662f ",(0,o.kt)("strong",{parentName:"li"},"Modern.js"),"\uff0c\u5b50\u5e94\u7528\u6709\u7684\u662f\u5176\u5b83\u6280\u672f\u6808\u3002")),(0,o.kt)("h2",{id:"\u5b50\u5e94\u7528\u662f-modernjs"},"\u5b50\u5e94\u7528\u662f Modern.js"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Modern.js")," \u5b50\u5e94\u7528\u7f16\u8bd1\u540e\u4f1a\u751f\u6210\u6807\u51c6\u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://garfish.top/quick-start#%E5%AD%90%E5%BA%94%E7%94%A8"},"Garfish \u5b50\u5e94\u7528\u5bfc\u51fa"),"\u3002\n\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u63a5\u5165\u6807\u51c6\u7684\u5fae\u524d\u7aef\u4e3b\u5e94\u7528\u3002"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5b50\u5e94\u7528\u662f ",(0,o.kt)("strong",{parentName:"p"},"Modern.js"),"\uff0c\u4e3b\u5e94\u7528\u4f7f\u7528\u7684\u539f\u751f Garfish \u5fae\u524d\u7aef\u65f6\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5b50\u5e94\u7528\u8c03\u8bd5\u6a21\u5f0f")," \u4e0d\u53ef\u7528\u3002"))),(0,o.kt)("h2",{id:"\u4e3b\u5e94\u7528\u662f-modernjs"},"\u4e3b\u5e94\u7528\u662f Modern.js"),(0,o.kt)("p",null,"\u4e3b\u5e94\u7528\u662f ",(0,o.kt)("strong",{parentName:"p"},"Modern.js"),"\uff0c\u5b50\u5e94\u7528\u7528\u7684\u5176\u5b83\u6280\u672f\u6808\u3002\u5b50\u5e94\u7528\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"https://garfish.top/quick-start#%E5%AD%90%E5%BA%94%E7%94%A8"},"Garfish \u5b50\u5e94\u7528\u6807\u51c6")," \u5f00\u53d1\u5373\u53ef\u3002"))}l.isMDXComponent=!0}}]);