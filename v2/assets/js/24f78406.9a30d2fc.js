"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[231],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return t?r.createElement(d,s(s({ref:n},c),{},{components:t})):r.createElement(d,s({ref:n},c))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=f;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7774:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var r=t(18249),o=(t(52983),t(44993));const i={toc:[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4}]};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"string")),(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,o.kt)("p",null,"\u7528\u4e8e\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/resolve/#resolveextensions"},"resolve.extensions")," \u6dfb\u52a0\u7edf\u4e00\u7684\u524d\u7f00\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u591a\u4e2a\u6587\u4ef6\u62e5\u6709\u76f8\u540c\u7684\u540d\u79f0\uff0c\u4f46\u5177\u6709\u4e0d\u540c\u7684\u6587\u4ef6\u540e\u7f00\uff0cBuilder \u4f1a\u6839\u636e extensions \u6570\u7ec4\u7684\u987a\u5e8f\u8fdb\u884c\u8bc6\u522b\uff0c\u89e3\u6790\u6570\u7ec4\u4e2d\u7b2c\u4e00\u4e2a\u88ab\u8bc6\u522b\u7684\u6587\u4ef6\uff0c\u5e76\u8df3\u8fc7\u5176\u4f59\u6587\u4ef6\u3002"),(0,o.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u4e0b\u9762\u662f\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},".web")," \u524d\u7f00\u7684\u4f8b\u5b50\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export default {\n  source: {\n    resolveExtensionPrefix: '.web',\n  },\n};\n")),(0,o.kt)("p",null,"\u914d\u7f6e\u5b8c\u6210\u540e\uff0cextensions \u6570\u7ec4\u4f1a\u53d1\u751f\u4ee5\u4e0b\u53d8\u5316\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u914d\u7f6e\u524d\nconst extensions = ['.js', '.ts', ...];\n\n// \u914d\u7f6e\u540e\nconst extensions = ['.web.js', '.js', '.web.ts' , '.ts', ...];\n")),(0,o.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"import './foo'")," \u65f6\uff0c\u4f1a\u4f18\u5148\u8bc6\u522b ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.web.js")," \u6587\u4ef6\uff0c\u518d\u8bc6\u522b ",(0,o.kt)("inlineCode",{parentName:"p"},"foo.js")," \u6587\u4ef6\u3002"))}s.isMDXComponent=!0;const a={title:"source.resolveExtensionPrefix",sidebar_label:"resolveExtensionPrefix"},l=void 0,p={unversionedId:"configure/app/source/resolve-extension-prefix",id:"configure/app/source/resolve-extension-prefix",title:"source.resolveExtensionPrefix",description:"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 source.resolveExtensionPrefix\u3002",source:"@site/../../packages/toolkit/main-doc/zh/configure/app/source/resolve-extension-prefix.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/resolve-extension-prefix",permalink:"/v2/docs/configure/app/source/resolve-extension-prefix",draft:!1,tags:[],version:"current",frontMatter:{title:"source.resolveExtensionPrefix",sidebar_label:"resolveExtensionPrefix"},sidebar:"configsAppSidebar",previous:{title:"preEntry",permalink:"/v2/docs/configure/app/source/pre-entry"},next:{title:"resolveMainFields",permalink:"/v2/docs/configure/app/source/resolve-main-fields"}},c={},u=[],f={toc:u};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"BUILDER",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4e3a Modern.js Builder \u914d\u7f6e\uff0c\u53ef\u80fd\u5b58\u5728\u65e0\u6cd5\u8df3\u8f6c\u7684\u94fe\u63a5\u3002\u8be6\u7ec6\u4fe1\u606f\u53ef\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://modernjs.dev/builder/zh/api/config-source.html#source-resolveextensionprefix"},"source.resolveExtensionPrefix"),"\u3002")),(0,o.kt)(s,{mdxType:"Main"}))}m.isMDXComponent=!0}}]);