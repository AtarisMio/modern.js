"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8704],{44993:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(52983);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>p,metadata:()=>c,toc:()=>u});var n=r(18249),o=(r(52983),r(44993));const i={toc:[{value:"Object Type",id:"object-type",level:3},{value:"Function Type",id:"function-type",level:3}]};function a(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,o.kt)("li",{parentName:"ul"},"Default")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  flexbox: 'no-2009',\n  // Depends on the browserslist config in the project\n  // and the `output.overrideBrowserslist` (higher priority) config\n  overrideBrowserslist: browserslist,\n}\n")),(0,o.kt)("p",null,"You can modify the config of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/postcss/autoprefixer"},"autoprefixer")," by ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.autoprefixer"),"."),(0,o.kt)("h3",{id:"object-type"},"Object Type"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.autoprefixer")," is configured as ",(0,o.kt)("inlineCode",{parentName:"p"},"Object")," type, it is merged with the default config through Object.assign. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    autoprefixer: {\n      flexbox: 'no-2009',\n    },\n  },\n};\n")),(0,o.kt)("h3",{id:"function-type"},"Function Type"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"tools.autoprefixer")," is a Function, the default config is passed as the first parameter and can be directly modified or returned as the final result. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    autoprefixer(config) {\n      // modify flexbox config\n      config.flexbox = 'no-2009';\n    },\n  },\n};\n")))}a.isMDXComponent=!0;const p={title:"tools.autoprefixer",sidebar_label:"autoprefixer"},l=void 0,c={unversionedId:"configure/app/tools/autoprefixer",id:"configure/app/tools/autoprefixer",title:"tools.autoprefixer",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to tools.autoprefixer\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/tools/autoprefixer.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/autoprefixer",permalink:"/v2/en/docs/configure/app/tools/autoprefixer",draft:!1,tags:[],version:"current",frontMatter:{title:"tools.autoprefixer",sidebar_label:"autoprefixer"},sidebar:"configsAppSidebar",previous:{title:"plugins",permalink:"/v2/en/docs/configure/app/plugins"},next:{title:"babel",permalink:"/v2/en/docs/configure/app/tools/babel"}},s={},u=[],f={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-autoprefixer"},"tools.autoprefixer"),"\u3002")),(0,o.kt)(a,{mdxType:"Main"}))}d.isMDXComponent=!0}}]);