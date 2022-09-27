"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1532],{57522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(29901);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60579:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(18249),o=(n(29901),n(57522));const a={sidebar_label:"jsPath"},i="output.jsPath",s={unversionedId:"apis/module/config/output/js-path",id:"apis/module/config/output/js-path",title:"output.jsPath",description:"* \u7c7b\u578b\uff1a string",source:"@site/docs/apis/module/config/output/js-path.md",sourceDirName:"apis/module/config/output",slug:"/apis/module/config/output/js-path",permalink:"/docs/apis/module/config/output/js-path",tags:[],version:"current",frontMatter:{sidebar_label:"jsPath"},sidebar:"apisModuleSidebar",previous:{title:"importStyle",permalink:"/docs/apis/module/config/output/import-style"},next:{title:"packageFields",permalink:"/docs/apis/module/config/output/package-fields"}},p={},l=[],u={toc:l};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"outputjspath"},"output.jsPath"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,o.kt)("inlineCode",{parentName:"li"},"js"))),(0,o.kt)("p",null,"\u8bbe\u7f6e js \u6587\u4ef6\u5728\u8f93\u51fa\u76ee\u5f55\u4e2d\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," \u4e4b\u540e\uff0c js \u4ea7\u7269\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 js\n    \u251c\u2500\u2500 modern\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.js.map\n    \u251c\u2500\u2500 node\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.js.map\n    \u2514\u2500\u2500 treeshaking\n        \u251c\u2500\u2500 index.js\n        \u251c\u2500\u2500 index.d.ts\n        \u2514\u2500\u2500 index.js.map\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u8bbe\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"output.jsPath")," \u4e4b\u540e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/module-tools';\n\nexport default defineConfig({\n  output: {\n    jsPath: './js-assets',\n  },\n});\n")),(0,o.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"build"),"\uff0c\u5bf9\u5e94 js \u4ea7\u7269\u5728 dist \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u2514\u2500\u2500 js\n    \u251c\u2500\u2500 modern\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.js.map\n    \u251c\u2500\u2500 node\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.js\n    \u2502\xa0\xa0 \u251c\u2500\u2500 index.d.ts\n    \u2502\xa0\xa0 \u2514\u2500\u2500 index.js.map\n    \u2514\u2500\u2500 treeshaking\n        \u251c\u2500\u2500 index.js\n        \u251c\u2500\u2500 index.d.ts\n        \u2514\u2500\u2500 index.js.map\n")))}d.isMDXComponent=!0}}]);