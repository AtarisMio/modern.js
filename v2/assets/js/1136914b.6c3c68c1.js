"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5832],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},14385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var r=n(18249),a=(n(52983),n(44993));const o={toc:[{value:"Object \u7c7b\u578b",id:"object-\u7c7b\u578b",level:4},{value:"Function \u7c7b\u578b",id:"function-\u7c7b\u578b",level:4}]};function i(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"Record<string, string | string[]> | Function")),(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"\u8bbe\u7f6e\u6587\u4ef6\u5f15\u7528\u7684\u522b\u540d\uff0c\u5bf9\u5e94 webpack \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/resolve/#resolvealias"},"resolve.alias")," \u914d\u7f6e\u3002"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5bf9\u4e8e TypeScript \u9879\u76ee\uff0c\u53ea\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u4e2d\u914d\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#paths"},"compilerOptions.paths")," \u5373\u53ef\uff0cBuilder \u4f1a\u81ea\u52a8\u8bc6\u522b ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u91cc\u7684\u522b\u540d\uff0c\u56e0\u6b64\u4e0d\u9700\u8981\u989d\u5916\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"alias")," \u5b57\u6bb5\u3002")),(0,a.kt)("h4",{id:"object-\u7c7b\u578b"},"Object \u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alias")," \u7684\u503c\u53ef\u4ee5\u5b9a\u4e49\u4e3a Object \u7c7b\u578b\uff0c\u5176\u4e2d\u7684\u76f8\u5bf9\u8def\u5f84\u4f1a\u81ea\u52a8\u88ab Builder \u8f6c\u6362\u4e3a\u7edd\u5bf9\u8def\u5f84\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  source: {\n    alias: {\n      '@common': './src/common',\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u5b8c\u6210\u540e\uff0c\u5982\u679c\u5728\u4ee3\u7801\u4e2d\u5f15\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@common/Foo.tsx"),", \u5219\u4f1a\u6620\u5c04\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"<root>/src/common/Foo.tsx")," \u8def\u5f84\u4e0a\u3002"),(0,a.kt)("h4",{id:"function-\u7c7b\u578b"},"Function \u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"alias")," \u7684\u503c\u5b9a\u4e49\u4e3a\u51fd\u6570\u65f6\uff0c\u53ef\u4ee5\u63a5\u53d7\u9884\u8bbe\u7684 alias \u5bf9\u8c61\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  source: {\n    alias: alias => {\n      alias['@common'] = './src/common';\n    },\n  },\n};\n")),(0,a.kt)("p",null,"\u4e5f\u53ef\u4ee5\u5728\u51fd\u6570\u4e2d\u8fd4\u56de\u4e00\u4e2a\u65b0\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u7ed3\u679c\uff0c\u65b0\u5bf9\u8c61\u4f1a\u8986\u76d6\u9884\u8bbe\u7684 alias \u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  source: {\n    alias: alias => {\n      return {\n        '@common': './src/common',\n      };\n    },\n  },\n};\n")))}i.isMDXComponent=!0;const l={title:"source.alias",sidebar_label:"alias"},p=void 0,c={unversionedId:"configure/app/source/alias",id:"configure/app/source/alias",title:"source.alias",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 source.alias\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/source/alias.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/alias",permalink:"/v2/docs/configure/app/source/alias",draft:!1,tags:[],version:"current",frontMatter:{title:"source.alias",sidebar_label:"alias"},sidebar:"configsAppSidebar",previous:{title:"\u914d\u7f6e\u4f7f\u7528",permalink:"/v2/docs/configure/app/usage"},next:{title:"compileJsDataURI",permalink:"/v2/docs/configure/app/source/compile-js-data-uri"}},s={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"BUILDER",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/api/config-source.html#source-alias"},"source.alias"),"\u3002")),(0,a.kt)(i,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);