"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4842],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>f,frontMatter:()=>l,metadata:()=>u,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const a={toc:[]};function i(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"type DisableSourceMap =\n  | boolean\n  | {\n      js?: boolean;\n      css?: boolean;\n    };\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const defaultDisableSourceMap = {\n  js: false,\n  css: process.env.NODE_ENV === 'production',\n};\n")),(0,o.kt)("p",null,"Whether to disable Source Map generation."),(0,o.kt)("admonition",{title:"What is a Source Map",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Source Map is an information file that saves the source code mapping relationship. It records each location of the compiled code and the corresponding pre-compilation location. With Source Map, you can directly view the source code when debugging the compiled code.")),(0,o.kt)("p",null,"By default, Builder's Source Map generation rules are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In development build, SourceMap of JS files and CSS files will be generated, which is convenient for debugging."),(0,o.kt)("li",{parentName:"ul"},"In production build, the Source Map of JS files will be generated for debugging and troubleshooting online problems; the Source Map of CSS files will not be generated.")),(0,o.kt)("p",null,"If the project does not need Source Map, you can turned off it to speed up the compile speed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableSourceMap: true,\n  },\n};\n")),(0,o.kt)("p",null,"If you want to enable Source Map in development and disable it in the production, you can set to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableSourceMap: process.env.NODE_ENV === 'production',\n  },\n};\n")),(0,o.kt)("p",null,"If you need to individually control the Source Map of JS files or CSS files, you can refer to the following settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  output: {\n    disableSourceMap: {\n      js: false,\n      css: true,\n    },\n  },\n};\n")))}i.isMDXComponent=!0;const l={title:"output.disableSourceMap",sidebar_label:"disableSourceMap"},p=void 0,u={unversionedId:"configure/app/output/disable-source-map",id:"configure/app/output/disable-source-map",title:"output.disableSourceMap",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to output.disableSourceMap\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/output/disable-source-map.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/disable-source-map",permalink:"/v2/en/docs/configure/app/output/disable-source-map",draft:!1,tags:[],version:"current",frontMatter:{title:"output.disableSourceMap",sidebar_label:"disableSourceMap"},sidebar:"configsAppSidebar",previous:{title:"disableNodePolyfill",permalink:"/v2/en/docs/configure/app/output/disable-node-polyfill"},next:{title:"disableTsChecker",permalink:"/v2/en/docs/configure/app/output/disable-ts-checker"}},c={},s=[],d={toc:s};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-output.html#output-disablesourcemap"},"output.disableSourceMap"),"\u3002")),(0,o.kt)(i,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);