"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4795],{57522:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(i,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(18249),a=(n(29901),n(57522));const o={sidebar_label:"cssPath"},s="output.cssPath",p={unversionedId:"apis/app/config/output/css-path",id:"apis/app/config/output/css-path",title:"output.cssPath",description:"* \u7c7b\u578b\uff1a string",source:"@site/docs/apis/app/config/output/css-path.md",sourceDirName:"apis/app/config/output",slug:"/apis/app/config/output/css-path",permalink:"/docs/apis/app/config/output/css-path",tags:[],version:"current",frontMatter:{sidebar_label:"cssPath"},sidebar:"apisAppSidebar",previous:{title:"cssModuleLocalIdentName",permalink:"/docs/apis/app/config/output/css-module-localIdent-name"},next:{title:"dataUriLimit",permalink:"/docs/apis/app/config/output/data-uri-limit"}},i={},c=[],l={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"outputcsspath"},"output.cssPath"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"static/css"))),(0,a.kt)("p",null,"\u8bbe\u7f6e css \u6587\u4ef6\u5728\u8f93\u51fa\u76ee\u5f55\u4e2d\u7684\u76f8\u5bf9\u8def\u5f84\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b, ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," \u4e4b\u540e\uff0c css \u4ea7\u7269\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u4e0b\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"\u251c\u2500\u2500 static\n\u2502\xa0\xa0 \u251c\u2500\u2500 css\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 main.7987216f.chunk.css\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 main.7987216f.chunk.css.map\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"output.cssPath")," \u4e4b\u540e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"import { defineConfig } from '@modern-js/app-tools';\n\nexport default defineConfig({\n  output: {\n    cssPath: './css-assets',\n  },\n});\n")),(0,a.kt)("p",null,"\u91cd\u65b0\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"build"),"\uff0c\u5bf9\u5e94 css \u4ea7\u7269\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," \u4e2d\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 css-assets\n\u2502\xa0\xa0 \u251c\u2500\u2500 main.7987216f.chunk.css\n\u2502\xa0\xa0 \u2514\u2500\u2500 main.7987216f.chunk.css.map\n")))}u.isMDXComponent=!0}}]);