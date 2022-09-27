"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[2995,5702],{57522:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>f});var n=o(29901);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(o),f=r,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return o?n.createElement(m,l(l({ref:t},c),{},{components:o})):n.createElement(m,l({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},74044:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(18249),r=(o(29901),o(57522));const a={title:"tools.lodash",sidebar_label:"lodash"},l=void 0,s={unversionedId:"apis/app/config/tools/lodash",id:"apis/app/config/tools/lodash",title:"tools.lodash",description:"* \u7c7b\u578b\uff1a Object | Function",source:"@site/docs/apis/app/config/tools/lodash.md",sourceDirName:"apis/app/config/tools",slug:"/apis/app/config/tools/lodash",permalink:"/docs/apis/app/config/tools/lodash",tags:[],version:"current",frontMatter:{title:"tools.lodash",sidebar_label:"lodash"},sidebar:"apisAppSidebar",previous:{title:"less",permalink:"/docs/apis/app/config/tools/less"},next:{title:"minifyCss",permalink:"/docs/apis/app/config/tools/minify-css"}},i={},p=[],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"Object | Function")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"{ id: [ 'lodash', 'ramda' ] }"))),(0,r.kt)("p",null,"\u5bf9\u5e94 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lodash/babel-plugin-lodash"},"babel-plugin-lodash")," \u7684\u914d\u7f6e\uff0c\n\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")," \u7c7b\u578b\u65f6\uff0c\u4e0e\u9ed8\u8ba4\u914d\u7f6e\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Object.assign")," \u5408\u5e76:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    lodash: {}\n  }\n});\n")),(0,r.kt)("p",null,"\u503c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Function")," \u7c7b\u578b\u65f6\uff0c\u9ed8\u8ba4\u914d\u7f6e\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u914d\u7f6e\u5bf9\u8c61\uff0c\u4e5f\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\u4f5c\u4e3a\u6700\u7ec8\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    lodash: opts => {},\n  },\n});\n")))}d.isMDXComponent=!0},68057:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=o(18249),r=(o(29901),o(57522)),a=o(74044);const l={title:"tools.lodash",sidebar_label:"lodash"},s=void 0,i={unversionedId:"apis/module/config/tools/lodash",id:"apis/module/config/tools/lodash",title:"tools.lodash",description:"",source:"@site/docs/apis/module/config/tools/lodash.md",sourceDirName:"apis/module/config/tools",slug:"/apis/module/config/tools/lodash",permalink:"/docs/apis/module/config/tools/lodash",tags:[],version:"current",frontMatter:{title:"tools.lodash",sidebar_label:"lodash"},sidebar:"apisModuleSidebar",previous:{title:"less",permalink:"/docs/apis/module/config/tools/less"},next:{title:"postcss",permalink:"/docs/apis/module/config/tools/postcss"}},p={},c=[],d={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.default,{mdxType:"Info"}))}u.isMDXComponent=!0}}]);