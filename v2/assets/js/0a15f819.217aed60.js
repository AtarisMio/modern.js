"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9250],{44993:(e,n,r)=>{r.d(n,{Zo:()=>d,kt:()=>u});var t=r(52983);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(r),u=o,f=m["".concat(s,".").concat(u)]||m[u]||l[u]||a;return r?t.createElement(f,p(p({ref:n},d),{},{components:r})):t.createElement(f,p({ref:n},d))}));function u(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59111:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var t=r(18249),o=(r(52983),r(44993));const a={sidebar_position:11},p=void 0,i={unversionedId:"apis/monorepo/commands/upgrade",id:"apis/monorepo/commands/upgrade",title:"upgrade",description:"modern upgrade \u547d\u4ee4\uff0c\u7528\u4e8e\u5347\u7ea7\u9879\u76ee Modern.js \u76f8\u5173\u4f9d\u8d56\u81f3\u6700\u65b0\u7248\u672c\u3002",source:"@site/docs/apis/monorepo/commands/upgrade.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/upgrade",permalink:"/docs/apis/monorepo/commands/upgrade",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"apisMonorepoSidebar",previous:{title:"gen-release-note",permalink:"/docs/apis/monorepo/commands/gen-release-note"}},s={},c=[],d={toc:c};function l(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Usage: modern upgrade [options]\n\n\u5347\u7ea7 Modern.js \u5230\u6700\u65b0\u7248\u672c\n\nOptions:\n  --registry <registry>  \u5b9a\u5236 npm registry (default: "")\n  -d,--debug             \u5f00\u542f Debug \u6a21\u5f0f\uff0c\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f (default: false)\n  --cwd <cwd>            \u9879\u76ee\u8def\u5f84 (default: "")\n  -h, --help             display help for command\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"modern upgrade")," \u547d\u4ee4\uff0c\u7528\u4e8e\u5347\u7ea7\u9879\u76ee Modern.js \u76f8\u5173\u4f9d\u8d56\u81f3\u6700\u65b0\u7248\u672c\u3002"),(0,o.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4 ",(0,o.kt)("inlineCode",{parentName:"p"},"npx modern upgrade"),"\uff0c\u4f1a\u9ed8\u8ba4\u5c06\u5f53\u524d\u6267\u884c\u547d\u4ee4\u9879\u76ee\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684 Modern.js \u76f8\u5173\u4f9d\u8d56\u66f4\u65b0\u81f3\u6700\u65b0\u7248\u672c\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u547d\u4ee4\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/monorepo-tools")," \u7248\u672c >= 1.17.0 \u63d0\u4f9b\uff0c\u4e4b\u524d\u7248\u672c\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"npx @modern-js/upgrade")," \u8fdb\u884c\u5347\u7ea7\u3002")))}l.isMDXComponent=!0}}]);