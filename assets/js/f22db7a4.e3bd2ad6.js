"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9106],{57522:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>u});var r=n(18249),a=(n(29901),n(57522));const i={sidebar_label:"mediaPath"},o="output.mediaPath",p={unversionedId:"apis/app/config/output/media-path",id:"apis/app/config/output/media-path",title:"output.mediaPath",description:"* \u7c7b\u578b\uff1a string",source:"@site/docs/apis/app/config/output/media-path.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/media-path",permalink:"/docs/apis/app/config/output/media-path",tags:[],version:"current",frontMatter:{sidebar_label:"mediaPath"},sidebar:"apisAppSidebar",previous:{title:"jsPath",permalink:"/docs/apis/app/config/output/js-path"},next:{title:"metaByEntries",permalink:"/docs/apis/app/config/output/meta-by-entries"}},l={},u=[],s={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"outputmediapath"},"output.mediaPath"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"static/media"))),(0,a.kt)("p",null,"\u8bbe\u7f6e\u8d44\u6e90\u6587\u4ef6\uff08(\u56fe\u7247\u3001\u5b57\u4f53\u3001\u5a92\u4f53\u8d44\u6e90\u7b49\uff09\u5728\u8f93\u51fa\u76ee\u5f55\u4e2d\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn build")," \u4e4b\u540e\uff0c \u56fe\u7247\u8d44\u6e90\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 static\n\u2502\xa0\xa0 \u2514\u2500\u2500 media\n\u2502\xa0\xa0     \u2514\u2500\u2500 logo.b07f4339.png\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"output.mediaPath")," \u4e4b\u540e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    mediaPath: './media-assets',\n  },\n});\n")),(0,a.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\uff0c\u5bf9\u5e94\u56fe\u7247\u8d44\u6e90\u5728 dist \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 media-assets\n\u2502\xa0\xa0 \u251c\u2500\u2500 exclude.934823cb.less\n\u2502\xa0\xa0 \u2514\u2500\u2500 logo.b07f4339.png\n")))}c.isMDXComponent=!0}}]);