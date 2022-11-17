"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4869],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var o=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?o.createElement(m,s(s({ref:t},p),{},{components:n})):o.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var o=n(18249),r=(n(52983),n(44993));const a={toc:[{value:"Object Type",id:"object-type",level:3},{value:"Function Type",id:"function-type",level:3},{value:"Utility Function",id:"utility-function",level:3},{value:"addExcludes",id:"addexcludes",level:4}]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,r.kt)("li",{parentName:"ul"},"Default")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"{\n  sourceMap: false;\n}\n")),(0,r.kt)("p",null,"You can modify the config of ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/sass-loader"},"sass-loader")," via ",(0,r.kt)("inlineCode",{parentName:"p"},"tools.sass"),"."),(0,r.kt)("h3",{id:"object-type"},"Object Type"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"tools.sass")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," type, it is merged with the default config via Object.assign. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    sass: {\n      sourceMap: true,\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"function-type"},"Function Type"),(0,r.kt)("p",null,"When ",(0,r.kt)("inlineCode",{parentName:"p"},"tools.sass")," is a Function, the default config is passed as the first parameter, which can be directly modified or returned as the final result. The second parameter provides some utility functions that can be called directly. For Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    sass(config) {\n      // Modify sourceMap config\n      config.additionalData = async (content, loaderContext) => {\n        // ...\n      };\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"utility-function"},"Utility Function"),(0,r.kt)("h4",{id:"addexcludes"},"addExcludes"),(0,r.kt)("p",null,"Used to specify which files ",(0,r.kt)("inlineCode",{parentName:"p"},"sass-loader")," does not compile, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  tools: {\n    sass(config, { addExcludes }) {\n      addExcludes(/node_modules/);\n    },\n  },\n};\n")))}s.isMDXComponent=!0;const i={title:"tools.sass",sidebar_label:"sass",sidebar_position:1},l=void 0,c={unversionedId:"configure/app/tools/sass",id:"configure/app/tools/sass",title:"tools.sass",description:"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to tools.sass\u3002",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/configure/app/tools/sass.md",sourceDirName:"configure/app/tools",slug:"/configure/app/tools/sass",permalink:"/v2/en/docs/configure/app/tools/sass",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"tools.sass",sidebar_label:"sass",sidebar_position:1},sidebar:"configsAppSidebar",previous:{title:"pug",permalink:"/v2/en/docs/configure/app/tools/pug"},next:{title:"styleLoader",permalink:"/v2/en/docs/configure/app/tools/style-loader"}},p={},u=[],d={toc:u};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"BUILDER",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This configuration is Modern.js Builder configuration, there may be links that cannot be redirected. for details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-tools.html#tools-sass"},"tools.sass"),"\u3002")),(0,r.kt)(s,{mdxType:"Main"}))}f.isMDXComponent=!0}}]);