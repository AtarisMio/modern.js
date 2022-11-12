"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2821],{44993:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(52983);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=c(r),m=p,d=f["".concat(i,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(d,s(s({ref:t},l),{},{components:r})):n.createElement(d,s({ref:t},l))}));function m(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,s=new Array(o);s[0]=f;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:p,s[1]=a;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1714:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var n=r(18249),p=(r(52983),r(44993));const o={title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",sidebar_position:1},s=void 0,a={unversionedId:"apis/app/hooks/src/app",id:"apis/app/hooks/src/app",title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",description:"\u5e94\u7528\u9879\u76ee\u65e0\u8def\u7531\u6216\u8005\u4efb\u610f\u8def\u7531\u7684\u5165\u53e3\u6807\u8bc6\u3002",source:"@site/docs/apis/app/hooks/src/app.md",sourceDirName:"apis/app/hooks/src",slug:"/apis/app/hooks/src/app",permalink:"/docs/apis/app/hooks/src/app",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"src/App.[tj]sx, src/[entry]/App.[tj]sx",sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"src/index.[tj]s, src/[entry]/index.[tj]s",permalink:"/docs/apis/app/hooks/src/"},next:{title:"src/pages/, src/[entry]/pages/",permalink:"/docs/apis/app/hooks/src/pages"}},i={},c=[],l={toc:c};function u(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5e94\u7528\u9879\u76ee\u65e0\u8def\u7531\u6216\u8005\u4efb\u610f\u8def\u7531\u7684\u5165\u53e3\u6807\u8bc6\u3002"),(0,p.kt)("p",null,"\u5f00\u53d1\u5355\u9875\u9762\u5e94\u7528\u7684\u573a\u666f\uff0c\u63a8\u8350 ",(0,p.kt)("inlineCode",{parentName:"p"},"src")," \u6587\u4ef6\u5939\u4e0b\u653e\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"App.[tj]sx")," \u5bfc\u51fa\u5e94\u7528\u6839\u7ec4\u4ef6\u5373\u53ef\uff0cModern.js \u4f1a\u81ea\u52a8\u751f\u6210\u771f\u6b63\u7684\u6784\u5efa\u6253\u5305\u7684\u5165\u53e3\u6587\u4ef6, \u5185\u5bb9\u5927\u81f4\u5982\u4e0b:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-js"},"import React from 'react';\nimport { createApp, bootstrap } from '@modern-js/runtime';\nimport App from '@_modern_js_src/App';\nimport { state } from '@modern-js/runtime/plugins';\nimport { immer, effects, autoActions, devtools } from '@modern-js/runtime/model';\n\nconst createStatePlugins = (config) => {\n  const plugins = [];\n  plugins.push(immer(config['immer']));\n  plugins.push(effects(config['effects']));\n  plugins.push(autoActions(config['autoActions']));\n  plugins.push(devtools(config['devtools']));\n  return plugins;\n}\nlet AppWrapper = null;\nfunction render() {\n  AppWrapper = createApp({\n    plugins: [\n     state({...{plugins: createStatePlugins(true)}, ...App?.config?.state}),\n    ]\n  })(App)\n  if (IS_BROWSER) {\n    bootstrap(AppWrapper, MOUNT_ID);\n  }\n  return AppWrapper\n}\nAppWrapper = render();\nexport default AppWrapper;;\n")),(0,p.kt)("p",null,"\u5f00\u53d1\u591a\u9875\u9762\u5e94\u7528\u7684\u573a\u666f\u7c7b\u4f3c\uff0c\u5728\u5165\u53e3\u76ee\u5f55\u4e0b\u63a8\u8350\u76f4\u63a5\u653e\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},"App.[jt]sx"),", \u81ea\u52a8\u751f\u6210\u7684\u6784\u5efa\u6253\u5305\u5165\u53e3\u6587\u4ef6\u548c\u5355\u9875\u9762\u5e94\u7528\u7c7b\u4f3c\u3002"))}u.isMDXComponent=!0}}]);