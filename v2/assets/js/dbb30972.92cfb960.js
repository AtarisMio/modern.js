"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1316],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const o={sidebar_label:"enableTsLoader"},l="output.enableTsLoader",p={unversionedId:"configure/app/output/enable-ts-loader",id:"configure/app/output/enable-ts-loader",title:"output.enableTsLoader",description:"- \u7c7b\u578b\uff1a boolean",source:"@site/docs/configure/app/output/enable-ts-loader.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/enable-ts-loader",permalink:"/docs/configure/app/output/enable-ts-loader",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"enableTsLoader"},sidebar:"configsAppSidebar",previous:{title:"enableModernMode",permalink:"/docs/configure/app/output/enable-modern-mode"},next:{title:"faviconByEntries",permalink:"/docs/configure/app/output/favicon-by-entries"}},i={},u=[{value:"\u8be6\u7ec6\u4ecb\u7ecd",id:"\u8be6\u7ec6\u4ecb\u7ecd",level:2},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"outputenabletsloader"},"output.enableTsLoader"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"))),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u4f7f\u7528 Babel \u7f16\u8bd1 TS \u6587\u4ef6\uff0c\u5f00\u542f\u8be5\u9009\u9879\u540e\uff0c\u4f1a\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-loader"},"ts-loader")," \u7f16\u8bd1 TS \u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    enableTsLoader: true,\n  },\n});\n")),(0,a.kt)("h2",{id:"\u8be6\u7ec6\u4ecb\u7ecd"},"\u8be6\u7ec6\u4ecb\u7ecd"),(0,a.kt)("p",null,"Modern.js \u57fa\u4e8e Babel \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript"},"@babel/plugin-transform-typescript")," \u63d2\u4ef6\u5bf9 TS \u6587\u4ef6\u8fdb\u884c\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u8be5\u63d2\u4ef6\u7684\u884c\u4e3a\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u6709\u5c11\u8bb8\u4e0d\u540c\uff0c\u6bd4\u5982\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u63d0\u4f9b TypeScript \u7c7b\u578b\u68c0\u67e5\uff08Modern.js \u4e2d\u9ed8\u8ba4\u96c6\u6210\u4e86 ",(0,a.kt)("inlineCode",{parentName:"li"},"fork-ts-checker-webpack-plugin")," \u63d2\u4ef6\uff0c\u63d0\u4f9b\u5b8c\u5584\u7684\u7c7b\u578b\u68c0\u67e5\uff0c\u56e0\u6b64\u8fd9\u4e2a\u5dee\u5f02\u53ef\u4ee5\u5ffd\u7565\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u652f\u6301 TypeScript \u7279\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"export =")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"import = require()")," \u8bed\u6cd5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// \u4ee5\u4e0b\u5199\u6cd5\u65e0\u6cd5\u901a\u8fc7 Babel \u7f16\u8bd1\nconst foo = '1';\nexport = foo;\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"@babel/plugin-transform-typescript")," \u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u4e4b\u95f4\u7684\u8be6\u7ec6\u5dee\u5f02\uff0c\u53ef\u4ee5\u9605\u8bfb ",(0,a.kt)("a",{parentName:"p",href:"https://babeljs.io/docs/en/babel-plugin-transform-typescript#caveats"},"Caveats"),"\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u9879\u76ee\u4e2d\u9047\u5230\u4e86 Babel \u7f16\u8bd1 TS \u6587\u4ef6\u7684\u95ee\u9898\uff0c\u5efa\u8bae\u4f18\u5148\u8003\u8651\u4fee\u6539\u76f8\u5173\u8bed\u6cd5\uff0c\u4f7f\u4e4b\u80fd\u901a\u8fc7\u7f16\u8bd1\u3002"),(0,a.kt)("p",null,"\u5728\u65e0\u6cd5\u4fee\u6539\u8bed\u6cd5\u7684\u524d\u63d0\u4e0b\uff0c\u53ef\u4ee5\u8003\u8651\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"output.enableTsLoader")," \u9009\u9879\uff0c\u5f15\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u7f16\u8bd1\u3002\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u8bed\u6cd5\u89e3\u6790\u548c\u7c7b\u578b\u68c0\u67e5\uff0c\u56e0\u6b64\u4f1a",(0,a.kt)("strong",{parentName:"p"},"\u5bfc\u81f4\u9879\u76ee\u7f16\u8bd1\u901f\u5ea6\u53d8\u6162"),"\uff0c\u8bf7\u6743\u8861\u4f7f\u7528\u3002"))}c.isMDXComponent=!0}}]);