"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[1917,2899],{57522:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var a=t(29901);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),d=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),c=d(t),u=i,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return t?a.createElement(k,o(o({ref:n},m),{},{components:t})):a.createElement(k,o({ref:n},m))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=c;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},94714:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>m});var a=t(18249),i=(t(29901),t(57522)),l=t(51229);const o={sidebar_position:5},r=void 0,p={unversionedId:"apis/app/commands/build",id:"apis/app/commands/build",title:"build",description:"modern build \u547d\u4ee4\u9ed8\u8ba4\u4f1a\u5728 /dist \u76ee\u5f55\u4e0b\u6784\u5efa\u51fa\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269\u3002",source:"@site/docs/apis/app/commands/build.md",sourceDirName:"apis/app/commands",slug:"/apis/app/commands/build",permalink:"/docs/apis/app/commands/build",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"apisAppSidebar",previous:{title:"lint",permalink:"/docs/apis/app/commands/lint"},next:{title:"start",permalink:"/docs/apis/app/commands/start"}},d={},m=[{value:"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef",id:"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef",level:2},{value:"\u547d\u4ee4\u884c\u53c2\u6570",id:"\u547d\u4ee4\u884c\u53c2\u6570",level:2},{value:"Electron \u5e94\u7528",id:"electron-\u5e94\u7528",level:2},{value:"build electron-web",id:"build-electron-web",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"build electron-main",id:"build-electron-main",level:3},{value:"\u793a\u4f8b - \u666e\u901a\u6784\u5efa",id:"\u793a\u4f8b---\u666e\u901a\u6784\u5efa",level:4},{value:"\u793a\u4f8b - \u6307\u5b9a\u4e3b\u8fdb\u7a0b\u76ee\u5f55",id:"\u793a\u4f8b---\u6307\u5b9a\u4e3b\u8fdb\u7a0b\u76ee\u5f55",level:4},{value:"\u793a\u4f8b - \u6307\u5b9a\u5176\u4ed6\u7f16\u8bd1\u76ee\u5f55",id:"\u793a\u4f8b---\u6307\u5b9a\u5176\u4ed6\u7f16\u8bd1\u76ee\u5f55",level:4},{value:"\u793a\u4f8b - \u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6",id:"\u793a\u4f8b---\u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6",level:4},{value:"build electron-app",id:"build-electron-app",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"build electron",id:"build-electron",level:3},{value:"\u793a\u4f8b -\u3010DEBUG \u6a21\u5f0f\u3011\u6784\u5efa",id:"\u793a\u4f8b--debug-\u6a21\u5f0f\u6784\u5efa",level:4},{value:"\u793a\u4f8b-\u6307\u5b9a\u4e3b\u8fdb\u7a0b\u76ee\u5f55",id:"\u793a\u4f8b-\u6307\u5b9a\u4e3b\u8fdb\u7a0b\u76ee\u5f55",level:4},{value:"\u793a\u4f8b - \u542f\u7528 Node \u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b",id:"\u793a\u4f8b---\u542f\u7528-node-\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b",level:4},{value:"\u793a\u4f8b-\u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6",id:"\u793a\u4f8b-\u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6",level:4}],s={toc:m};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern build [options]\n\nbuild application\n\nOptions:\n  -c --config <config>  \u6307\u5b9a\u914d\u7f6e\u6587\u4ef6\u8def\u5f84\uff0c\u53ef\u4ee5\u4e3a\u76f8\u5bf9\u8def\u5f84\u6216\u7edd\u5bf9\u8def\u5f84\n  -h, --help  \u663e\u793a\u547d\u4ee4\u5e2e\u52a9\n  --analyze   \u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\uff0c\u67e5\u770b\u5404\u4e2a\u6a21\u5757\u6253\u5305\u540e\u7684\u5927\u5c0f\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"modern build")," \u547d\u4ee4\u9ed8\u8ba4\u4f1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"/dist")," \u76ee\u5f55\u4e0b\u6784\u5efa\u51fa\u53ef\u7528\u4e8e\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u4fee\u6539\u914d\u7f6e ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/config/output/path"},(0,i.kt)("inlineCode",{parentName:"a"},"output.path"))," \u6307\u5b9a\u4ea7\u7269\u7684\u8f93\u51fa\u76ee\u5f55\u3002"),(0,i.kt)("h2",{id:"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef"},"\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef"),(0,i.kt)("p",null,"\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npx modern build --analyze")," \u547d\u4ee4\uff0c\u53ef\u4ee5\u5728\u6253\u5305\u751f\u4ea7\u73af\u5883\u4ee3\u7801\u7684\u540c\u65f6\uff0c\u4ea7\u51fa\u4e00\u4e2a\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\u7684 HTML \u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Bundle Analyzer saved report to /example/dist/report.html\nFile sizes after production build:\n\n  122.35 KB  dist/static/js/885.1d4fbe5a.js\n  2.3 KB     dist/static/js/main.4b8e8d64.js\n  761 B      dist/static/js/runtime-main.edb7cf35.js\n  645 B      dist/static/css/main.0dd3ecc1.css\n")),(0,i.kt)("p",null,"\u624b\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u4e0a\u8ff0 HTML \u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u6253\u5305\u4ea7\u7269\u7684\u74e6\u7247\u56fe\uff0c\u5e76\u8fdb\u884c\u5305\u4f53\u79ef\u5206\u6790\u548c\u4f18\u5316\uff1a"),(0,i.kt)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8be5\u529f\u80fd\u57fa\u4e8e ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/webpack-contrib/webpack-bundle-analyzer"},"webpack-bundle-analyzer")," \u5b9e\u73b0\u3002")),(0,i.kt)("h2",{id:"\u547d\u4ee4\u884c\u53c2\u6570"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,i.kt)(l.default,{mdxType:"CommandTip"}),(0,i.kt)("h2",{id:"electron-\u5e94\u7528"},"Electron \u5e94\u7528"),(0,i.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u57fa\u4e8e Electron \u7684\u684c\u9762\u5e94\u7528\u5f00\u53d1\u6a21\u5f0f\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u5728\u9879\u76ee\u521b\u5efa\u65f6\u9009\u62e9:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"? \u662f\u5426\u9700\u8981\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u5e94\u7528 Electron\n")),(0,i.kt)("p",null,"\u4e5f\u53ef\u5728\u9879\u76ee\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"new")," \u547d\u4ee4\u542f\u7528\u300cElectron\u300d\u6a21\u5f0f\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx modern new\n? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528\u300cElectron\u300d\u6a21\u5f0f\n")),(0,i.kt)("h3",{id:"build-electron-web"},"build electron-web"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern build electron-web [options]\n\nbuild electron renderer with node environment\n\nOptions:\n  -h, --help  display help for command\n")),(0,i.kt)("p",null,"\u7a97\u53e3\u4e2d\u5f00\u542f Node \u65f6\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:render": "modern build electron-web",\n  }\n}\n')),(0,i.kt)("p",null,"\u5728 Electron \u4e2d\uff0c\u9879\u76ee\u4e0b\u6267\u884c\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"build:render")," \u547d\u4ee4\uff0c\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b\uff08\u7a97\u53e3\u4e2d\u542f\u7528 Node\uff09\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5173\u4e8e\u7a97\u53e3\u4e2d\u3010",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/develop#%E7%AA%97%E5%8F%A3%E4%B8%AD%E5%BC%80%E5%90%AF-node"},"\u5f00\u542f Node"),"\u3011\u3002"))),(0,i.kt)("h3",{id:"build-electron-main"},"build electron-main"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern build electron-main [options]\n\nbuild electron main process\n\nOptions:\n  -d, --development       build with NODE_ENV=development\n  -m, --main <main>       specify the entrance folder path of main process, such as: electron/\n  -i, --ignore <ignore>   ignore folder or file\n  -e, --extra <extra...>  specify extra folders to compile\n  -en, --enableNode       enable use node in electron render\n  -h, --help              display help for command\n")),(0,i.kt)("p",null,"\u6784\u5efa\u4e3b\u8fdb\u7a0b\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b---\u666e\u901a\u6784\u5efa"},"\u793a\u4f8b - \u666e\u901a\u6784\u5efa"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:main": "modern build electron-main",\n  }\n}\n')),(0,i.kt)("p",null,"\u5728 Electron \u4e2d\uff0c\u9879\u76ee\u4e0b\u6267\u884c\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"build:main")," \u547d\u4ee4\uff0c\u6784\u5efa\u4e3b\u8fdb\u7a0b\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b---\u6307\u5b9a\u4e3b\u8fdb\u7a0b\u76ee\u5f55"},"\u793a\u4f8b - \u6307\u5b9a\u4e3b\u8fdb\u7a0b\u76ee\u5f55"),(0,i.kt)("p",null,"\u6253\u5305\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"--main")," \u6307\u5b9a\u6211\u4eec\u7684\u4e3b\u8fdb\u7a0b\u76ee\u5f55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:main": "modern build electron-main --main ./electron",\n  }\n}\n')),(0,i.kt)("h4",{id:"\u793a\u4f8b---\u6307\u5b9a\u5176\u4ed6\u7f16\u8bd1\u76ee\u5f55"},"\u793a\u4f8b - \u6307\u5b9a\u5176\u4ed6\u7f16\u8bd1\u76ee\u5f55"),(0,i.kt)("p",null,"\u6253\u5305\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5728\u4e3b\u8fdb\u7a0b\u91cc\u5f15\u7528\u4e86\u5176\u4ed6\u76ee\u5f55\uff0c\u5219\u53ef\u4ee5\u5982\u4e0b\u8fdb\u884c\u6784\u5efa\uff1a"),(0,i.kt)("p",null,"\u6bd4\u5982\uff1a \u4e3b\u8fdb\u7a0b\u4f7f\u7528\u4e86 shared \u76ee\u5f55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'\n{\n  "scripts": {\n    "build:main": "modern build electron-main --extra ./shared",\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7531\u4e8e\u4e3b\u8fdb\u7a0b\u76ee\u524d\u91c7\u7528\u7684\u662f babel \u6784\u5efa\uff0c\u7ef4\u6301\u4e3b\u8fdb\u7a0b\u76ee\u5f55\u7ed3\u6784\u3002\u56e0\u6b64\uff0c\u5728\u6784\u5efa\u8d77\u4ed6\u76ee\u5f55\u7684\u65f6\u5019\uff0c\u9700\u8981\u901a\u8fc7 --extra \u8fdb\u884c\u989d\u5916\u7684\u6307\u5b9a\u3002"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u793a\u4f8b\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/guides/features/electron/extra/compile-extra"},"\u4e3b\u8fdb\u7a0b\u6784\u5efa"))),(0,i.kt)("h4",{id:"\u793a\u4f8b---\u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6"},"\u793a\u4f8b - \u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a \u201c--ignore\u201d \u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:main": "modern build electron-main --ignore electron/xx.ts,electron/xxx.ts",\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'"--ignore" \u4e5f\u53ef\u4ee5\u586b\u5199\u6587\u4ef6\u5939\uff0c\u591a\u4e2a\u53ef\u4ee5\u9017\u53f7\u9694\u5f00\u3002'))),(0,i.kt)("h3",{id:"build-electron-app"},"build electron-app"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern build electron-app [options]\n\nbuild electron app\n\nOptions:\n  -h, --help  display help for command\n")),(0,i.kt)("p",null,"\u6253\u5305\u5e94\u7528\u3002"),(0,i.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:app": "modern build electron-app",\n  }\n}\n')),(0,i.kt)("p",null,"\u5728\u6784\u5efa\u5b8c\u6210\u4e3b\u8fdb\u7a0b\u3001\u6e32\u67d3\u8fdb\u7a0b\u4e4b\u540e\uff0c\u6267\u884c\u6b64\u547d\u4ee4\uff0c\u6253\u5305\u6210\u53ef\u6267\u884c\u6587\u4ef6\u4e0e\u5b89\u88c5\u7a0b\u5e8f\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5176\u4e2d\uff0c\u53ef\u5728\u6267\u884c\u6253\u5305\u65f6\u4f20\u5165\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"li"},"PLATFORM")," \u6307\u5b9a\u6784\u5efa\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLATFORM")," \u53ef\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"mac"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"win32"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"win64"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"linux"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"linuxArm64")," \u5176\u4e2d\u4e00\u4e2a\u3002")))),(0,i.kt)("h3",{id:"build-electron"},"build electron"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'Usage: modern build electron [options]\n\nbuild electron all: render process\u3001main process and electron app\n\nOptions:\n  -d, --development       build with NODE_ENV=development\n  -m, --main <main>       specify the entrance folder path of main process, such as: electron/\n  -i, --ignore <ignore>   ignore folder or file\n  -e, --extra <extra...>  specify extra folders to compile\n  -en, --enableNode       enable use node in electron render\n  -h, --help              display help for command\n\n\u4e00\u884c\u547d\u4ee4\u6784\u5efa\uff1a\u6e32\u67d3\u8fdb\u7a0b\u3001\u4e3b\u8fdb\u7a0b\u3001\u5e94\u7528\u3002\n\n```json\n{\n  "scripts": {\n    "build:all": "modern build electron",\n  }\n}\n')),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\uff0c\u4f1a\u987a\u5e8f\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b\u3001\u4e3b\u8fdb\u7a0b\uff0c\u6253\u5305\u5e94\u7528\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5176\u4e2d\uff0c\u53ef\u5728\u6267\u884c\u6253\u5305\u65f6\u4f20\u5165\u73af\u5883\u53d8\u91cf ",(0,i.kt)("inlineCode",{parentName:"li"},"PLATFORM")," \u6307\u5b9a\u6784\u5efa\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PLATFORM")," \u53ef\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"mac"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"win32"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"win64"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"linux"),"\u3001",(0,i.kt)("inlineCode",{parentName:"li"},"linuxArm64")," \u5176\u4e2d\u4e00\u4e2a\u3002")))),(0,i.kt)("h4",{id:"\u793a\u4f8b--debug-\u6a21\u5f0f\u6784\u5efa"},"\u793a\u4f8b -\u3010DEBUG \u6a21\u5f0f\u3011\u6784\u5efa"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u671f\u671b\u6253\u4e00\u4e9b DEBUG \u5305\uff0c\u5176\u4e2d\u7684 js \u6ca1\u6709\u88ab\u6df7\u6dc6\u538b\u7f29\uff0c\u6211\u4eec\u53ef\u4ee5\u8fd9\u6837\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:all": "modern build electron --development",\n  }\n}\n')),(0,i.kt)("h4",{id:"\u793a\u4f8b-\u6307\u5b9a\u4e3b\u8fdb\u7a0b\u76ee\u5f55"},"\u793a\u4f8b-\u6307\u5b9a\u4e3b\u8fdb\u7a0b\u76ee\u5f55"),(0,i.kt)("p",null,"\u6253\u5305\u7684\u65f6\u5019\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u6307\u5b9a\u6211\u4eec\u7684\u4e3b\u8fdb\u7a0b\u76ee\u5f55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:all": "modern build electron --main ./electron",\n  }\n}\n')),(0,i.kt)("h4",{id:"\u793a\u4f8b---\u542f\u7528-node-\u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b"},"\u793a\u4f8b - \u542f\u7528 Node \u6784\u5efa\u6e32\u67d3\u8fdb\u7a0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:all": "modern build electron --enableNode",\n  }\n}\n')),(0,i.kt)("h4",{id:"\u793a\u4f8b-\u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6"},"\u793a\u4f8b-\u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6"),(0,i.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a \u201c--ignore\u201d \u5ffd\u7565\u4e0d\u9700\u8981\u7f16\u8bd1\u7684\u6587\u4ef6\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "build:all": "modern build electron --ignore electron/xx.ts,electron/xxx.ts",\n  }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'"--ignore" \u4e5f\u53ef\u4ee5\u586b\u5199\u6587\u4ef6\u5939\uff0c\u591a\u4e2a\u53ef\u4ee5\u9017\u53f7\u9694\u5f00\u3002'))))}c.isMDXComponent=!0},51229:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=t(18249),i=(t(29901),t(57522));const l={},o=void 0,r={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b package.json \u914d\u7f6e\u4e2d\uff1a",source:"@site/docs/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/docs/components/command-tip",tags:[],version:"current",frontMatter:{}},p={},d=[],m={toc:d};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Yarn \u548c pnpm \u8c03\u7528\u547d\u4ee4\u65f6\u63a5\u6536\u53c2\u6570\u7684\u65b9\u5f0f\u4e0d\u540c\uff0c\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,i.kt)("p",{parentName:"div"},"\u5f53\u9700\u8981\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528 Yarn \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn command --option"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,i.kt)("p",{parentName:"div"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,i.kt)("p",{parentName:"div"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,i.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,i.kt)("p",{parentName:"div"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,i.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,i.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002"))))}s.isMDXComponent=!0}}]);