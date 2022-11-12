"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(52983);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77845:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(18249),i=(t(52983),t(44993));const a={title:"source.entries",sidebar_label:"entries",sidebar_position:6},o=void 0,l={unversionedId:"configure/app/source/entries",id:"configure/app/source/entries",title:"source.entries",description:"* \u7c7b\u578b\uff1a Object = { [ entryName string | Object }",source:"@site/docs/configure/app/source/entries.md",sourceDirName:"configure/app/source",slug:"/configure/app/source/entries",permalink:"/docs/configure/app/source/entries",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"source.entries",sidebar_label:"entries",sidebar_position:6},sidebar:"configsAppSidebar",previous:{title:"include",permalink:"/docs/configure/app/source/include"},next:{title:"disableDefaultEntries",permalink:"/docs/configure/app/source/disable-default-entries"}},s={},p=[],c={toc:p};function u(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,i.kt)("inlineCode",{parentName:"li"},"Object = { [ entryName: string ]: string | Object }")),(0,i.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a \u6839\u636e\u5f53\u524d\u9879\u76ee\u76ee\u5f55\u7ed3\u6784\u52a8\u6001\u7ed3\u7b97\u51fa\u7684\u9ed8\u8ba4\u5165\u53e3\u5bf9\u8c61\u3002")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u5927\u90e8\u5206\u573a\u666f\uff0cModern.js \u6839\u636e\u76ee\u5f55\u7ed3\u6784\u81ea\u52a8\u751f\u6210\u7684\u5165\u53e3\u80fd\u6ee1\u8db3\u5927\u90e8\u5206\u4e1a\u52a1\u9700\u6c42\u3002"),(0,i.kt)("p",null,"\u5982\u9700\u81ea\u5b9a\u4e49\u6784\u5efa\u5165\u53e3\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u9009\u9879\u6307\u5b9a\u3002\u4f8b\u5982\uff0c\u5f53\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," \u65f6\uff0c\u6307\u5411\u5165\u53e3\u7684\u6587\u4ef6\u8def\u5f84:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    entries: {\n      // \u6307\u5b9a\u4e00\u4e2a\u540d\u79f0\u4e3a entry_customize \u7684\u65b0\u5165\u53e3\n      entry_customize: './src/home/test/index.js',\n    },\n  },\n});\n")),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u7684\u5165\u53e3\uff0c\u53ea\u9700\u8981\u5bfc\u51fa ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," \u7ec4\u4ef6\uff0cModern.js \u4f1a\u751f\u6210\u771f\u6b63\u7684\u5165\u53e3\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u9700\u8981\u5173\u95ed\u8fd9\u4e00\u884c\u4e3a\u65f6\uff0c\u53ef\u4ee5\u5c06\u503c\u8bbe\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Object"),"\uff0c\u5c5e\u6027 ",(0,i.kt)("inlineCode",{parentName:"p"},"disableMount")," \u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"\u3002"),(0,i.kt)("p",null,"\u5f53\u503c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"Object")," \u65f6\uff0c\u53ef\u914d\u7f6e\u5982\u4e0b\u5c5e\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entry"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5165\u53e3\u6587\u4ef6\u8def\u5f84\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"disableMount"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean = false"),"\uff0c\u5173\u95ed Modern.js \u751f\u6210\u5165\u53e3\u4ee3\u7801\u7684\u884c\u4e3a\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"enableFileSystemRoutes"),"\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"boolean = false"),"\uff0c\u662f\u5426 ",(0,i.kt)("a",{parentName:"li",href:"/docs/apis/app/hooks/src/pages"},"\u4f7f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  source: {\n    entries: {\n      entry_customize: {\n        // \u5165\u53e3\u6587\u4ef6\u8def\u5f84\n        entry: './src/home/test/App.jsx',\n      },\n      // \u542f\u7528\u7ea6\u5b9a\u5f0f\u8def\u7531\n      entry_spa: {\n        // \u7ea6\u5b9a\u5f0f\u8def\u7531\u7684\u5165\u53e3\u8def\u5f84\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u76ee\u5f55\n        entry: './src/about',\n        enableFileSystemRoutes: true,\n      },\n    },\n  },\n};\n")))}u.isMDXComponent=!0}}]);