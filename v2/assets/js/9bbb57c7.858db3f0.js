"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1592],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,l(l({ref:n},c),{},{components:t})):r.createElement(f,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},78616:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(18249),a=(t(52983),t(44993));const i={title:"\u73af\u5883\u53d8\u91cf",sidebar_position:7},l=void 0,o={unversionedId:"guides/basic-features/env-vars",id:"guides/basic-features/env-vars",title:"\u73af\u5883\u53d8\u91cf",description:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",source:"@site/docs/guides/basic-features/env-vars.md",sourceDirName:"guides/basic-features",slug:"/guides/basic-features/env-vars",permalink:"/docs/guides/basic-features/env-vars",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"\u73af\u5883\u53d8\u91cf",sidebar_position:7},sidebar:"guidesSidebar",previous:{title:"\u6570\u636e\u6a21\u62df",permalink:"/docs/guides/basic-features/mock"},next:{title:"\u522b\u540d",permalink:"/docs/guides/basic-features/alias"}},s={},p=[{value:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf",level:2},{value:"\u4f7f\u7528\u5168\u5c40\u53d8\u91cf",id:"\u4f7f\u7528\u5168\u5c40\u53d8\u91cf",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"},"\u4f7f\u7528\u73af\u5883\u53d8\u91cf"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5728\u524d\u7aef\u4ee3\u7801\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u73af\u5883\u53d8\u91cf\uff0c\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (process.env.NODE_ENV === 'development') {\n  // do something\n}\n")),(0,a.kt)("p",null,"\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u547d\u4ee4\u4e4b\u540e\u53ef\u4ee5\u770b\u5230\u6784\u5efa\u4ea7\u7269\u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n  // do something\n}\n")),(0,a.kt)("p",null,"\u540c\u6837\u5728\u81ea\u5b9a\u4e49\u7684 HTML \u6a21\u677f\u4e2d\uff0c\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u73af\u5883\u53d8\u91cf\u3002\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"config/html/head.html"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<meta name="test" content="<process.env.NODE_ENV>">\n')),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u5728\u4ee3\u7801\u4e2d\u4f7f\u7528\u9664 ",(0,a.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," \u4ee5\u5916\u7684\u73af\u5883\u53d8\u91cf\uff0c\u53ef\u4ee5\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/source/env-vars"},(0,a.kt)("inlineCode",{parentName:"a"},"source.envVars"))," \u914d\u7f6e\u6307\u5b9a, \u5982\u4e0b:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    envVars: ['VERSION']\n  }\n})\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VERSION")," \u73af\u5883\u53d8\u91cf\u9700\u8981\u5728\u7f16\u8bd1\u4e4b\u524d\u8bbe\u7f6e\u597d, \u53ef\u4ee5\u5728\u6267\u884c\u547d\u4ee4\u65f6\u6dfb\u52a0:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"// linux, macOS\n$ VERSION=1.0.0 npm run dev\n\n// windows\n$ set VERSION=1.0.0&&npm run dev\n")),(0,a.kt)("p",null,"Modern.js \u4e5f\u652f\u6301\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u5b9a\u4e49\u73af\u5883\u53d8\u91cf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title=".env"',title:'".env"'},"VERSION=1.0.0\n")),(0,a.kt)("p",null,"\u66f4\u591a\u6587\u4ef6\u683c\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".env"),"\uff1a\u9ed8\u8ba4\u52a0\u8f7d\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},".env.development"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".env.test"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},".env.production"),"\uff1a\u9488\u5bf9\u5177\u4f53\u73af\u5883\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff0c\u4f1a\u8986\u76d6 ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," \u4e2d\u7684\u8bbe\u7f6e\u3002")),(0,a.kt)("h2",{id:"\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"},"\u4f7f\u7528\u5168\u5c40\u53d8\u91cf"),(0,a.kt)("p",null,"Modern.js \u652f\u6301\u5728\u7f16\u8bd1\u65f6\u8bbe\u7f6e\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u5168\u5c40\u53d8\u91cf:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  source: {\n    globalVars: {\n      VERSION: '1.0.0'\n    }\n  }\n})\n")),(0,a.kt)("p",null,"\u5728\u4ee3\u7801\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},"/* TS \u5e94\u7528\u4e2d\uff0c\u9700\u8981\u58f0\u660e\u8be5\u53d8\u91cf */\ndeclare const VERSION: string;\n\nconst a = VERSION;\n")))}u.isMDXComponent=!0}}]);