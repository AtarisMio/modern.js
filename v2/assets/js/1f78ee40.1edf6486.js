"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9580],{44993:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var p=t(52983);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);n&&(p=p.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,p)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,p,r=function(e,n){if(null==e)return{};var t,p,r={},o=Object.keys(e);for(p=0;p<o.length;p++)t=o[p],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(p=0;p<o.length;p++)t=o[p],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=p.createContext({}),s=function(e){var n=p.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return p.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return p.createElement(p.Fragment,{},n)}},u=p.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?p.createElement(k,a(a({ref:n},c),{},{components:t})):p.createElement(k,a({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=t[s];return p.createElement.apply(null,a)}return p.createElement.apply(null,t)}u.displayName="MDXCreateElement"},66021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var p=t(18249),r=(t(52983),t(44993));const o={sidebar_position:3},a="\u5b50\u9879\u76ee\u8054\u8c03",i={unversionedId:"guides/topic-detail/monorepo/sub-project-interface",id:"guides/topic-detail/monorepo/sub-project-interface",title:"\u5b50\u9879\u76ee\u8054\u8c03",description:"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Monorepo \u4e0b\u8fdb\u884c\u5b50\u9879\u76ee\u4e4b\u95f4\u7684\u8054\u8c03\u4f7f\u7528\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/monorepo/sub-project-interface.md",sourceDirName:"guides/topic-detail/monorepo",slug:"/guides/topic-detail/monorepo/sub-project-interface",permalink:"/v2/docs/guides/topic-detail/monorepo/sub-project-interface",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u521b\u5efa\u5b50\u9879\u76ee",permalink:"/v2/docs/guides/topic-detail/monorepo/create-sub-project"},next:{title:"\u53ef\u590d\u7528\u6a21\u5757\u7684\u53d1\u5e03",permalink:"/v2/docs/guides/topic-detail/monorepo/publish"}},l={},s=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"\u5728\u4f7f\u7528 pnpm \u7684 Monorepo \u4e2d\u8fdb\u884c\u9879\u76ee\u8054\u8c03",id:"\u5728\u4f7f\u7528-pnpm-\u7684-monorepo-\u4e2d\u8fdb\u884c\u9879\u76ee\u8054\u8c03",level:2},{value:"\u5728\u4f7f\u7528 Yarn \u7684 Monorepo \u4e2d\u8fdb\u884c\u9879\u76ee\u8054\u8c03",id:"\u5728\u4f7f\u7528-yarn-\u7684-monorepo-\u4e2d\u8fdb\u884c\u9879\u76ee\u8054\u8c03",level:2}],c={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,p.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u5b50\u9879\u76ee\u8054\u8c03"},"\u5b50\u9879\u76ee\u8054\u8c03"),(0,r.kt)("p",null,"\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Monorepo \u4e0b\u8fdb\u884c\u5b50\u9879\u76ee\u4e4b\u95f4\u7684\u8054\u8c03\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,r.kt)("p",null,"\u6309\u7167 ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/monorepo/create-sub-project"},"\u300c\u521b\u5efa\u5b50\u9879\u76ee\u300d")," \u7ae0\u8282\u7684\u4ecb\u7ecd\uff08\u5982\u679c\u8fd8\u6ca1\u6709\u770b\u8fc7\uff0c\u53ef\u4ee5\u5148\u4e86\u89e3\u4e00\u4e0b\uff09\uff0c\u6211\u4eec\u9996\u5148\u521b\u5efa\u4ee5\u4e0b\u4e09\u4e2a\u5b50\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u300c\u5e94\u7528\u300d\u5b50\u9879\u76ee"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u300c\u6a21\u5757\uff08\u5185\u90e8\uff09\u300d\u5b50\u9879\u76ee"),(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u300c\u6a21\u5757\u300d\u5b50\u9879\u76ee")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run new"),"\uff0c\u5e76\u6309\u7167\u5982\u4e0b\u8fdb\u884c\u9009\u62e9\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u300c\u5e94\u7528\u300d\u5b50\u9879\u76ee\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u5e94\u7528\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u540d\u79f0 app\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u76ee\u5f55\u540d\u79f0 app\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n? \u662f\u5426\u9700\u8981\u652f\u6301\u4ee5\u4e0b\u7c7b\u578b\u5e94\u7528 \u4e0d\u9700\u8981\n? \u662f\u5426\u9700\u8981\u8c03\u6574\u9ed8\u8ba4\u914d\u7f6e? \u5426\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u300c\u6a21\u5757\uff08\u5185\u90e8\uff09\u300d\u5b50\u9879\u76ee\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u6a21\u5757\uff08\u5185\u90e8\uff09\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u540d\u79f0 internal-lib\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u76ee\u5f55\u540d\u79f0 internal-lib\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u300c\u6a21\u5757\u300d\u5b50\u9879\u76ee\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u521b\u5efa\u7684\u5de5\u7a0b\u7c7b\u578b \u6a21\u5757\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u540d\u79f0 components\n? \u8bf7\u586b\u5199\u5b50\u9879\u76ee\u76ee\u5f55\u540d\u79f0 components\n? \u8bf7\u9009\u62e9\u5f00\u53d1\u8bed\u8a00 TS\n")),(0,r.kt)("p",null,"\u521b\u5efa\u6210\u529f\u540e\uff0c\u4f1a\u5f97\u5230\u4ee5\u4e0b\u9879\u76ee\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./apps/app")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./packages/components")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"./features/internal-lib"))),(0,r.kt)("p",null,"\u7136\u540e\u4fee\u6539\u4e00\u4e0b\u9ed8\u8ba4\u7684\u4ee3\u7801\u548c\u65b0\u589e\u6587\u4ef6\uff1a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u91cd\u547d\u540d ",(0,r.kt)("inlineCode",{parentName:"strong"},"./pakcages/components/src/index.tsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import './index.css';\n\nexport default function ({ text }: { text: string }) {\n  return (\n    <div>\n      This is UI Components Log: <p className=\"log\">{text}</p>\n    </div>\n  );\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"strong"},"./pakcages/components/src/index.css"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},".log {\n  color: gray;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"strong"},"./features/internal-lib/src/index.ts"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export default function (text: string) {\n  return text.toUpperCase();\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"strong"},"./apps/app/src/App.tsx"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { Switch, Route } from '@modern-js/runtime/router';\nimport formatString from 'internal-lib';\nimport Comp from 'components';\n\nimport './App.css';\n\nconst App = () => (\n  <Switch>\n    <Route exact={true} path=\"/\">\n      <div className=\"container-box\">\n        <Comp text={formatString('hello world')} />\n        {/* \u7701\u7565... */}\n      </div>\n    </Route>\n    <Route path=\"*\">\n      <div>404</div>\n    </Route>\n  </Switch>\n);\n\nexport default App;\n")),(0,r.kt)("p",null,"\u5230\u6b64\u4e3a\u6b62\u6211\u4eec\u521b\u5efa\u4e86\u4e00\u4e2a\u53ef\u4ee5\u88ab\u53d1\u5e03\u5230\u5916\u90e8\u7684\u7ec4\u4ef6\u9879\u76ee\u3001\u4e00\u4e2a\u8f6c\u6362\u5b57\u7b26\u4e32\u7684\u5185\u90e8\u6a21\u5757\u9879\u76ee\u4ee5\u53ca\u4e00\u4e2a\u4f7f\u7528\u7ec4\u4ef6\u548c\u5185\u90e8\u6a21\u5757\u7684\u5e94\u7528\u9879\u76ee\uff0c\u5982\u679c\u76f4\u63a5\u8fd0\u884c\u5e94\u7528\u9879\u76ee\u8fd8\u6682\u65f6\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528\u3002\u63a5\u4e0b\u6765\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u8ba9\u5b83\u4eec\u80fd\u591f\u4e92\u76f8\u8054\u8c03\u4f7f\u7528\uff0c\u6210\u529f\u7684\u4f7f\u5e94\u7528\u5b50\u9879\u76ee ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app")," \u6b63\u5e38\u8fd0\u884c\u3002"),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u542f\u52a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app")," \u9879\u76ee\u4e4b\u524d\u9700\u8981\u5148\u6784\u5efa\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run build"),"\uff09 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/component"),"\u3002")),(0,r.kt)("p",null,"\u7531\u4e8eModern.js \u652f\u6301 pnpm \u4e0e Yarn \u7684 Monorepo \u5de5\u7a0b\uff0c\u63a5\u4e0b\u6765\u4f1a\u4ece\u8fd9\u4e24\u4e2a\u65b9\u9762\u5206\u522b\u4ecb\u7ecd\u3002"),(0,r.kt)("h2",{id:"\u5728\u4f7f\u7528-pnpm-\u7684-monorepo-\u4e2d\u8fdb\u884c\u9879\u76ee\u8054\u8c03"},"\u5728\u4f7f\u7528 pnpm \u7684 Monorepo \u4e2d\u8fdb\u884c\u9879\u76ee\u8054\u8c03"),(0,r.kt)("p",null,"\u5728 pnpm \u7684 Monorepo \u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u901a\u8fc7\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app")," \u5b50\u9879\u76ee\u4e0b\u5206\u522b\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm add components\n")),(0,r.kt)("p",null,"\u4ee5\u53ca"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pnpm add internal-lib -D\n")),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\u8fd9\u91cc\u5c06 internal-lib \u4f5c\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app")," \u9879\u76ee\u7684\u5f00\u53d1\u4f9d\u8d56\uff0c\u56e0\u4e3a\u5728\u6784\u5efa\u73af\u5883\u4f1a\u88ab\u6253\u5305\u5230\u6784\u5efa\u4ea7\u7269\u4e2d\u3002")),(0,r.kt)("p",null,"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/components")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"features/internal-lib")," \u5b50\u9879\u76ee\u52a0\u5165\u5230\u5e94\u7528\u7684\u4f9d\u8d56\u5217\u8868\u5f53\u4e2d\u3002"),(0,r.kt)("p",null,"\u6267\u884c\u6210\u529f\u540e\uff0c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app/package.json")," \u4f1a\u53d1\u751f\u5982\u4e0b\u53d8\u5316\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n++  "components": "workspace:^0.1.0"\n  },\n  "devDependencies": {\n++  "internal-lib": "workspace:^0.1.0"\n  },\n}\n')),(0,r.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"workspace:^0.1.0")," \u662f\u4e00\u79cd PNPM \u63d0\u4f9b\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://pnpm.io/workspaces#workspace-protocol-workspace"},"Workspace \u534f\u8bae"),"\u3002")),(0,r.kt)("p",null,"\u5f53\u4f9d\u8d56\u5b89\u88c5\u6210\u529f\u4e4b\u540e\uff0c\u6211\u4eec\u8fd8\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/components")," \u8fdb\u884c\u6784\u5efa\uff0c\u56e0\u4e3a\u9700\u8981\u4f7f\u7528\u5176\u6784\u5efa\u4ea7\u7269\u3002"),(0,r.kt)("p",null,"\u5230\u6b64\u4e3a\u6b62\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"app/apps")," \u5e94\u7528\u5b50\u9879\u76ee\u53ef\u4ee5\u6b63\u5e38\u7684\u8fd0\u884c\u4e86\u3002\u5728\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"features/internal-lib")," \u7684\u6e90\u7801\uff0c\u6216\u8005\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/components")," \u7684\u6e90\u7801\u5e76\u6784\u5efa\u4e4b\u540e\u90fd\u4f1a\u89e6\u53d1\u5e94\u7528\u5b50\u9879\u76ee\u7684\u70ed\u66f4\u65b0\u3002"),(0,r.kt)("h2",{id:"\u5728\u4f7f\u7528-yarn-\u7684-monorepo-\u4e2d\u8fdb\u884c\u9879\u76ee\u8054\u8c03"},"\u5728\u4f7f\u7528 Yarn \u7684 Monorepo \u4e2d\u8fdb\u884c\u9879\u76ee\u8054\u8c03"),(0,r.kt)("p",null,"\u5728 Yarn \u7684 Monorepo \u9879\u76ee\u4e2d\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app")," \u5e94\u7528\u9879\u76ee\u4e2d\u76f4\u63a5\u4f7f\u7528\u7ec4\u4ef6\u9879\u76ee\u548c\u5185\u90e8\u6a21\u5757\u9879\u76ee\u3002"),(0,r.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u4e4b\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u5728\u5e94\u7528\u4e2d\u4f7f\u7528\u4f7f\u7528\u7ec4\u4ef6\u9879\u76ee\u548c\u5185\u90e8\u6a21\u5757\u9879\u76ee\uff0c\u662f\u56e0\u4e3a Yarn \u5c06\u8fd9\u4e9b\u5b50\u9879\u76ee\u6a21\u5757\u63d0\u5347\u5230\u4e86\u9876\u5c42\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules"),"\u5185\u3002")),(0,r.kt)("p",null,"\u4f46\u662f\u7531\u4e8e\u7ec4\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"components")," \u662f\u975e\u5185\u90e8\u6a21\u5757\uff0c\u56e0\u6b64\u5efa\u8bae\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"apps/app/package.json")," \u4e2d\u8fdb\u884c\u4f9d\u8d56\u58f0\u660e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n++  "components": "0.1.0"\n  },\n}\n')))}m.isMDXComponent=!0}}]);