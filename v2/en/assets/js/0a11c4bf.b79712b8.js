"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3792],{44993:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var r=t(52983);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(t),d=i,g=c["".concat(a,".").concat(d)]||c[d]||m[d]||l;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,o=new Array(l);o[0]=c;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8572:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(18249),i=(t(52983),t(44993));const l={sidebar_position:2},o="\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",p={unversionedId:"guides/topic-detail/framework-plugin/implement",id:"guides/topic-detail/framework-plugin/implement",title:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6",description:"Modern.js \u652f\u6301\u901a\u8fc7\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u4e2a\u6027\u5316\u529f\u80fd\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/framework-plugin/implement.md",sourceDirName:"guides/topic-detail/framework-plugin",slug:"/guides/topic-detail/framework-plugin/implement",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/implement",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u63d2\u4ef6\u53ef\u4ee5\u505a\u4ec0\u4e48",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/abstract"},next:{title:"\u63d2\u4ef6\u4e4b\u95f4\u7684\u5173\u7cfb",permalink:"/v2/en/docs/guides/topic-detail/framework-plugin/relationship"}},a={},u=[{value:"\u5b9e\u73b0\u63d2\u4ef6",id:"\u5b9e\u73b0\u63d2\u4ef6",level:2},{value:"\u63d2\u4ef6\u7c7b\u578b",id:"\u63d2\u4ef6\u7c7b\u578b",level:3},{value:"\u63d2\u4ef6\u914d\u7f6e\u9879",id:"\u63d2\u4ef6\u914d\u7f6e\u9879",level:3},{value:"\u63d2\u4ef6 API",id:"\u63d2\u4ef6-api",level:3},{value:"\u5f02\u6b65 setup",id:"\u5f02\u6b65-setup",level:3},{value:"\u6dfb\u52a0\u63d2\u4ef6",id:"\u6dfb\u52a0\u63d2\u4ef6",level:2},{value:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6",id:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6",level:3},{value:"\u5728 npm \u4e0a\u53d1\u5e03\u63d2\u4ef6",id:"\u5728-npm-\u4e0a\u53d1\u5e03\u63d2\u4ef6",level:3}],s={toc:u};function m(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6"},"\u5982\u4f55\u7f16\u5199\u63d2\u4ef6"),(0,i.kt)("p",null,"Modern.js \u652f\u6301\u901a\u8fc7\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u4e2a\u6027\u5316\u529f\u80fd\u3002"),(0,i.kt)("h2",{id:"\u5b9e\u73b0\u63d2\u4ef6"},"\u5b9e\u73b0\u63d2\u4ef6"),(0,i.kt)("p",null,"Modern.js \u63d2\u4ef6\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5bf9\u8c61\u5305\u542b\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": \u63d2\u4ef6\u7684\u540d\u79f0\uff0c\u552f\u4e00\u6807\u8bc6\u7b26\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setup"),": \u63d2\u4ef6\u521d\u59cb\u5316\u51fd\u6570\uff0c\u53ea\u4f1a\u6267\u884c\u4e00\u6b21\u3002setup \u51fd\u6570\u53ef\u4ee5\u8fd4\u56de\u4e00\u4e2a Hooks \u5bf9\u8c61\uff0cModern.js \u4f1a\u5728\u7279\u5b9a\u7684\u65f6\u673a\u6267\u884c\u8fd9\u4e9b Hooks\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const MyPlugin = {\n  name: 'my-plugin',\n\n  setup() {\n    // \u6267\u884c\u4e00\u4e9b\u521d\u59cb\u5316\u903b\u8f91\n    const foo = '1';\n\n    // \u8fd4\u56de\u4e00\u4e2a Hooks \u5bf9\u8c61\n    return {\n      afterBuild: () => {\n        // \u5728\u6784\u5efa\u5b8c\u6210\u540e\u6267\u884c\u903b\u8f91\n      },\n    };\n  },\n};\n")),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u7c7b\u578b"},"\u63d2\u4ef6\u7c7b\u578b"),(0,i.kt)("p",null,"\u4f7f\u7528 TypeScript \u65f6\uff0c\u53ef\u4ee5\u5f15\u5165\u5185\u7f6e\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"CliPlugin")," \u7c7b\u578b\uff0c\u4e3a\u63d2\u4ef6\u63d0\u4f9b\u6b63\u786e\u7684\u7c7b\u578b\u63a8\u5bfc\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\nconst MyPlugin: CliPlugin = {\n  name: 'my-plugin',\n\n  setup() {\n    const foo = '1';\n\n    return {\n      afterBuild: () => {\n        // \u5728\u6784\u5efa\u5b8c\u6210\u540e\u6267\u884c\u903b\u8f91\n      },\n    };\n  },\n};\n")),(0,i.kt)("admonition",{title:"\u6ce8",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u63d2\u4ef6\u53ef\u4ee5\u6ce8\u518c\u4e30\u5bcc\u7684 Hooks\uff0c\u4e0d\u540c\u7684 Hook \u62e5\u6709\u4e0d\u540c\u7684\u6a21\u578b\u548c\u8fd0\u884c\u89c4\u5219\uff0c\u8be6\u89c1 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/plugin/hook"},"Hook \u6a21\u578b"),"\u3002")),(0,i.kt)("h3",{id:"\u63d2\u4ef6\u914d\u7f6e\u9879"},"\u63d2\u4ef6\u914d\u7f6e\u9879"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u5efa\u8bae\u5c06\u63d2\u4ef6\u5199\u6210\u51fd\u6570\u7684\u5f62\u5f0f"),"\uff0c\u4f7f\u63d2\u4ef6\u80fd\u901a\u8fc7\u51fd\u6570\u5165\u53c2\u6765\u63a5\u6536\u914d\u7f6e\u9879\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\ntype MyPluginOptions = {\n  foo: string;\n};\n\nconst MyPlugin = (options: MyPluginOptions): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    console.log(options.foo);\n  },\n});\n")),(0,i.kt)("h3",{id:"\u63d2\u4ef6-api"},"\u63d2\u4ef6 API"),(0,i.kt)("p",null,"\u63d2\u4ef6\u7684 setup \u51fd\u6570\u4f1a\u63a5\u6536\u4e00\u4e2a api \u5165\u53c2\uff0c\u4f60\u53ef\u4ee5\u8c03\u7528 api \u4e0a\u63d0\u4f9b\u7684\u4e00\u4e9b\u65b9\u6cd5\u6765\u83b7\u53d6\u5230\u914d\u7f6e\u3001\u5e94\u7528\u4e0a\u4e0b\u6587\u7b49\u4fe1\u606f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup(api) {\n    // \u83b7\u53d6\u5e94\u7528\u539f\u59cb\u914d\u7f6e\n    const config = api.useConfigContext();\n    // \u83b7\u53d6\u5e94\u7528\u8fd0\u884c\u4e0a\u4e0b\u6587\n    const appContext = api.useAppContext();\n    // \u83b7\u53d6\u89e3\u6790\u4e4b\u540e\u7684\u6700\u7ec8\u914d\u7f6e\n    const resolvedConfig = api.useResolvedConfigContext();\n  },\n});\n")),(0,i.kt)("p",null,"\u63d2\u4ef6 API \u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"/docs/apis/app/runtime/plugin/plugin-api"},"Plugin API"),"\u3002"),(0,i.kt)("h3",{id:"\u5f02\u6b65-setup"},"\u5f02\u6b65 setup"),(0,i.kt)("p",null,"CLI \u63d2\u4ef6\u7684 setup \u53ef\u4ee5\u662f\u4e00\u4e2a\u5f02\u6b65\u51fd\u6570\uff0c\u5728\u521d\u59cb\u5316\u8fc7\u7a0b\u4e2d\u6267\u884c\u5f02\u6b65\u903b\u8f91\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  async setup(api) {\n    await doSomething();\n  },\n});\n")),(0,i.kt)("h2",{id:"\u6dfb\u52a0\u63d2\u4ef6"},"\u6dfb\u52a0\u63d2\u4ef6"),(0,i.kt)("p",null,"\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b\uff1a",(0,i.kt)("a",{parentName:"p",href:"/docs/configure/app/plugins"},"plugins (\u6846\u67b6\u63d2\u4ef6)"),"\u3002\u4e0b\u9762\u4f1a\u4ecb\u7ecd Modern.js \u4e2d\u63a8\u8350\u7684\u63d2\u4ef6\u5b9e\u73b0\u65b9\u6cd5\u3002"),(0,i.kt)("h3",{id:"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6"},"\u5f00\u53d1\u672c\u5730\u63d2\u4ef6"),(0,i.kt)("p",null,"\u672c\u5730\u63d2\u4ef6\u63a8\u8350\u5199\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"config/plugin")," \u76ee\u5f55\u4e0b\uff0c\u5e76\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"export default")," \u5bfc\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=config/plugin/MyPlugin.ts",title:"config/plugin/MyPlugin.ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    // \u63d2\u4ef6\u521d\u59cb\u5316\n  },\n});\n")),(0,i.kt)("p",null,"\u7136\u540e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u6ce8\u518c\u5bf9\u5e94\u7684\u63d2\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\nimport MyPlugin from './config/plugin/MyPlugin';\n\nexport default defineConfig({\n  plugins: [MyPlugin()],\n});\n")),(0,i.kt)("h3",{id:"\u5728-npm-\u4e0a\u53d1\u5e03\u63d2\u4ef6"},"\u5728 npm \u4e0a\u53d1\u5e03\u63d2\u4ef6"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u5c06 Modern.js \u63d2\u4ef6\u53d1\u5e03\u5230 npm\uff0c\u63a8\u8350\u4f7f\u7528 Modern.js \u4e2d\u7684\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u6765\u7ba1\u7406\u548c\u6784\u5efa\uff0c\u5982\u679c\u9700\u8981\u5c06\u5b83\u548c\u4f7f\u7528\u9879\u76ee\u7ba1\u7406\u5728\u4e00\u8d77\uff0c\u5219\u63a8\u8350\u4f7f\u7528 Modern.js \u4e2d\u7684 Monorepo \u5de5\u7a0b\u65b9\u6848\u7ba1\u7406\u3002\u8fd9\u91cc\u5c31\u7b80\u5355\u5730\u4f7f\u7528\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u8fdb\u884c\u6f14\u793a\u3002"),(0,i.kt)("p",null,"\u9996\u5148\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u6a21\u5757\u5de5\u7a0b\u65b9\u6848\u9879\u76ee\uff0c\u8c03\u6574 npm \u5305\u540d\u79f0\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-plugin"\n  ...\n}\n')),(0,i.kt)("p",null,"\u7136\u540e\u65b0\u5efa\u5bf9\u5e94\u7684\u63d2\u4ef6\u6587\u4ef6\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title=src/index.ts",title:"src/index.ts"},"import type { CliPlugin } from '@modern-js/core';\n\nexport default (): CliPlugin => ({\n  name: 'my-plugin',\n\n  setup() {\n    // \u63d2\u4ef6\u521d\u59cb\u5316\n  },\n});\n")),(0,i.kt)("p",null,"\u53d1\u5e03\u4e4b\u540e\uff0c\u5b89\u88c5\u5230\u9700\u8981\u4f7f\u7528\u7684\u9879\u76ee ",(0,i.kt)("inlineCode",{parentName:"p"},"pnpm add my-plugin"),"\uff0c\u8fd9\u91cc\u4ee5\u4e00\u4e2a\u5e94\u7528\u9879\u76ee\u4e3a\u4f8b\uff0c\u7136\u540e\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"modern.config.ts")," \u4e2d\u6dfb\u52a0\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="modern.config.ts"',title:'"modern.config.ts"'},"import { defineConfig } from '@modern-js/app-tools';\nimport MyPlugin from 'my-plugin';\n\nexport default defineConfig({\n  plugins: [MyPlugin()],\n});\n")),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u53d1\u73b0\u76ee\u524d Modern.js \u5b58\u5728\u65e0\u6cd5\u6ee1\u8db3\u7684\u573a\u666f\uff0c\u6b22\u8fce\u901a\u8fc7",(0,i.kt)("strong",{parentName:"p"},"\u7f16\u5199\u81ea\u5b9a\u4e49\u63d2\u4ef6\u7684\u65b9\u5f0f"),"\u6765\u4e00\u8d77\u5efa\u8bbe Modern.js \u751f\u6001\u3002"))}m.isMDXComponent=!0}}]);