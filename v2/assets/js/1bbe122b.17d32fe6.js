"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4885,1010],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var a=t(52983);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),s=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},l=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,i=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),l=s(t),u=o,k=l["".concat(i,".").concat(u)]||l[u]||d[u]||p;return t?a.createElement(k,r(r({ref:n},c),{},{components:t})):a.createElement(k,r({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,r=new Array(p);r[0]=l;var m={};for(var i in n)hasOwnProperty.call(n,i)&&(m[i]=n[i]);m.originalType=e,m.mdxType="string"==typeof e?e:o,r[1]=m;for(var s=2;s<p;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},21886:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>m,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(18249),o=(t(52983),t(44993)),p=t(39005);const r={sidebar_position:1},m=void 0,i={unversionedId:"apis/monorepo/commands/new",id:"apis/monorepo/commands/new",title:"new",description:"modern new \u547d\u4ee4\u5728 monorepo \u4e2d\u53ef\u4ee5\u7528\u6765\u6dfb\u52a0\u5e94\u7528\u5de5\u7a0b\u548c\u53ef\u590d\u7528\u7684\u6a21\u5757\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/apis/monorepo/commands/new.md",sourceDirName:"apis/monorepo/commands",slug:"/apis/monorepo/commands/new",permalink:"/v2/docs/apis/monorepo/commands/new",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisMonorepoSidebar",previous:{title:"\u547d\u4ee4",permalink:"/v2/docs/apis/monorepo/commands/"},next:{title:"change",permalink:"/v2/docs/apis/monorepo/commands/change"}},s={},c=[],d={toc:c};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Usage: modern new [options]\n\nMonorepo \u521b\u5efa\u5b50\u9879\u76ee\n\nOptions:\n  -d, --debug            \u5f00\u542f Debug \u6a21\u5f0f\uff0c\u6253\u5370\u8c03\u8bd5\u65e5\u5fd7\u4fe1\u606f (default: false)\n  -c, --config <config>  \u751f\u6210\u5668\u8fd0\u884c\u9ed8\u8ba4\u914d\u7f6e(JSON \u5b57\u7b26\u4e32)\n  --dist-tag <tag>       \u751f\u6210\u5668\u4f7f\u7528\u7279\u6b8a\u7684 npm Tag \u7248\u672c\n  --registry             \u751f\u6210\u5668\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u5b9a\u5236 npm Registry\n  -h, --help             display help for command\n")),(0,o.kt)(p.default,{mdxType:"CommandTip"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"modern new")," \u547d\u4ee4\u5728 monorepo \u4e2d\u53ef\u4ee5\u7528\u6765\u6dfb\u52a0\u5e94\u7528\u5de5\u7a0b\u548c\u53ef\u590d\u7528\u7684\u6a21\u5757\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ modern new\n? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b (Use arrow keys)\n\u276f \u5e94\u7528\n  \u5e94\u7528\uff08\u6d4b\u8bd5\uff09\n  \u6a21\u5757\n  \u6a21\u5757\uff08\u5185\u90e8\uff09\n")),(0,o.kt)("p",null,"\u5e94\u7528\u5de5\u7a0b\u9ed8\u8ba4\u4f1a\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"apps")," \u76ee\u5f55\uff0c \u6d4b\u8bd5\u5e94\u7528\u4f1a\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"examples")," \u76ee\u5f55\uff0c\u516c\u5171\u6a21\u5757\u9ed8\u8ba4\u4f1a\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"packages")," \u76ee\u5f55\uff0c \u5185\u90e8\u6a21\u5757\u9ed8\u8ba4\u4f1a\u6dfb\u52a0\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"features")," \u76ee\u5f55\u3002"),(0,o.kt)("p",null,"\u5185\u90e8\u6a21\u5757\u5728 monorepo \u7684\u5e94\u7528\u91cc\u9762\u4f7f\u7528\u65f6\uff0c\u53ef\u4ee5\u65e0\u9700\u6784\u5efa\u76f4\u63a5\u4f7f\u7528\u6e90\u7801\u3002"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"--config")," \u53c2\u6570\u5bf9\u5e94\u53c2\u6570\u503c\u9700\u8981\u4f7f\u7528 JSON \u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",{parentName:"admonition"},"pnpm \u6682\u4e0d\u652f\u6301\u4f7f\u7528 JSON \u5b57\u7b26\u4e32\u4f5c\u4e3a\u53c2\u6570\u503c\uff0c\u53ef\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm new")," \u5f00\u542f\u76f8\u5173\u529f\u80fd\u3002\u3010",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pnpm/pnpm/issues/3876"},"\u76f8\u5173 Issue"),"\u3011")))}l.isMDXComponent=!0},39005:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>m,toc:()=>s});var a=t(18249),o=(t(52983),t(44993));const p={},r=void 0,m={unversionedId:"components/command-tip",id:"components/command-tip",title:"command-tip",description:"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a",source:"@site/../../packages/toolkit/main-doc/zh/components/command-tip.md",sourceDirName:"components",slug:"/components/command-tip",permalink:"/v2/docs/components/command-tip",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[],c={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"pnpm v6 \u548c pnpm v7 \u7248\u672c\u5728\u6267\u884c\u547d\u4ee4\u65f6\u4f7f\u7528\u59ff\u52bf\u4e0d\u5b8c\u5168\u4e00\u81f4\uff0c\u9700\u8981\u6ce8\u610f\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"pnpm v7\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4f7f\u7528 pnpm \u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u7684\u547d\u4ee4\u65f6\uff0c\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u524d\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\u4f7f\u7528 pnpm ",(0,o.kt)("inlineCode",{parentName:"p"},"--filter")," \u53c2\u6570\u6267\u884c prepare \u547d\u4ee4\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'pnpm run --filter "./packages/**" prepare\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u4f20\u9012\u53c2\u6570\u81f3\u547d\u4ee4\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u5230\u547d\u4ee4\u540e\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u4f8b\u5982\uff0c\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"\u6267\u884c command \u547d\u4ee4\u65f6\u643a\u5e26\u53c2\u6570\u65b9\u5f0f\u4e3a\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run command --options\n")),(0,o.kt)("p",{parentName:"admonition"},"pnpm v6:"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u5982\u4e0b ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u914d\u7f6e\u4e2d\uff1a"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "command": "modern command"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"\u5f53\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command --option"),"\uff1a"),(0,o.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 pnpm \u65f6\uff0c\u9700\u8981\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command -- --option"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u8fd9\u662f\u56e0\u4e3a pnpm \u5bf9\u4e8e\u547d\u4ee4\u53c2\u6570\u7684\u5904\u7406\u4e0e Yarn \u5e76\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u4e0e npm \u7c7b\u4f3c\uff1a\u5728\u4e0d\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f pnpm \u7684\u53c2\u6570\uff1b\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"--")," \u5b57\u7b26\u4e32\u7684\u65f6\u5019\uff0c\u4f20\u9012\u7684\u662f\u6267\u884c\u811a\u672c\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u8ff0\u4f8b\u5b50\u91cc\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u4f20\u9012\u7ed9\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern command"),"\u3002\u5982\u679c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run command --option"),"\uff0c\u5219\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"--option")," \u5c06\u4f20\u9012\u7ed9 pnpm\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u603b\u7ed3\u6765\u8bf4\uff1a"),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v7 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u53c2\u6570\u7ed9 pnpm\uff0c\u9700\u8981\u5c06\u53c2\u6570\u653e\u7f6e\u5230\u547d\u4ee4\u524d")),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u5728\u4f7f\u7528 pnpm v6 \u65f6\uff0c\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u7ed9 pnpm\uff0c\u4e0d\u9700\u8981\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--"),"\uff1b\u5982\u679c\u4f20\u9012\u7684\u53c2\u6570\u662f\u7ed9\u811a\u672c\u4f7f\u7528\uff0c\u9700\u8981\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"strong"},"--")," \u5b57\u7b26\u4e32"),"\u3002")))}d.isMDXComponent=!0}}]);