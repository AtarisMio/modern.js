"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9380],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var l=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||u[m]||r;return n?l.createElement(k,o(o({ref:t},d),{},{components:n})):l.createElement(k,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},77855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var l=n(18249),a=(n(52983),n(44993));const r={title:"\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6",sidebar_position:9},o=void 0,i={unversionedId:"guides/topic-detail/compile-speed",id:"guides/topic-detail/compile-speed",title:"\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6",description:"Modern.js \u9ed8\u8ba4\u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684\u7f16\u8bd1\u6027\u80fd\u4f18\u5316\u7b56\u7565\uff0c\u4f46\u662f\u968f\u7740\u4e1a\u52a1\u573a\u666f\u53d8\u590d\u6742\u3001\u4ed3\u5e93\u7684\u4ee3\u7801\u91cf\u589e\u5927\uff0c\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b\u7f16\u8bd1\u6027\u80fd\u7684\u95ee\u9898\u3002",source:"@site/../../packages/toolkit/main-doc/zh/guides/topic-detail/compile-speed.md",sourceDirName:"guides/topic-detail",slug:"/guides/topic-detail/compile-speed",permalink:"/v2/docs/guides/topic-detail/compile-speed",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6",sidebar_position:9},sidebar:"guidesSidebar",previous:{title:"\u5982\u4f55\u5f00\u53d1\u751f\u6210\u5668\u63d2\u4ef6",permalink:"/v2/docs/guides/topic-detail/generator-plugin/develop"},next:{title:"\u7f16\u8bd1\u6784\u5efa\u95ee\u9898",permalink:"/v2/docs/guides/troubleshooting/compile"}},p={},s=[{value:"\u901a\u7528\u4f18\u5316\u7b56\u7565",id:"\u901a\u7528\u4f18\u5316\u7b56\u7565",level:2},{value:"\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56",id:"\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56",level:3},{value:"\u66ff\u6362\u4f53\u79ef\u8f83\u5927\u7684\u4f9d\u8d56",id:"\u66ff\u6362\u4f53\u79ef\u8f83\u5927\u7684\u4f9d\u8d56",level:3},{value:"\u907f\u514d\u4f7f\u7528 ts-loader",id:"\u907f\u514d\u4f7f\u7528-ts-loader",level:3},{value:"\u63d0\u5347 Browserslist \u8303\u56f4",id:"\u63d0\u5347-browserslist-\u8303\u56f4",level:3},{value:"\u6309\u9700\u5f15\u5165 Polyfill",id:"\u6309\u9700\u5f15\u5165-polyfill",level:3},{value:"dev \u4f18\u5316\u7b56\u7565",id:"dev-\u4f18\u5316\u7b56\u7565",level:2},{value:"\u8c03\u6574\u5f00\u53d1\u73af\u5883 SourceMap \u683c\u5f0f",id:"\u8c03\u6574\u5f00\u53d1\u73af\u5883-sourcemap-\u683c\u5f0f",level:3},{value:"\u8c03\u6574\u5f00\u53d1\u73af\u5883\u7684 Browserslist \u8303\u56f4",id:"\u8c03\u6574\u5f00\u53d1\u73af\u5883\u7684-browserslist-\u8303\u56f4",level:3},{value:"build \u4f18\u5316\u7b56\u7565",id:"build-\u4f18\u5316\u7b56\u7565",level:2},{value:"\u7981\u7528\u751f\u4ea7\u73af\u5883 SourceMap",id:"\u7981\u7528\u751f\u4ea7\u73af\u5883-sourcemap",level:3},{value:"\u4f7f\u7528 esbuild \u538b\u7f29",id:"\u4f7f\u7528-esbuild-\u538b\u7f29",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Modern.js \u9ed8\u8ba4\u5185\u7f6e\u4e86\u4e00\u7cfb\u5217\u7684\u7f16\u8bd1\u6027\u80fd\u4f18\u5316\u7b56\u7565\uff0c\u4f46\u662f\u968f\u7740\u4e1a\u52a1\u573a\u666f\u53d8\u590d\u6742\u3001\u4ed3\u5e93\u7684\u4ee3\u7801\u91cf\u589e\u5927\uff0c\u5728\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u53ef\u80fd\u4f1a\u9047\u5230\u4e00\u4e9b\u7f16\u8bd1\u6027\u80fd\u7684\u95ee\u9898\u3002"),(0,a.kt)("p",null,"\u672c\u6587\u6863\u63d0\u4f9b\u4e86\u4e00\u4e9b\u53ef\u9009\u7684\u63d0\u901f\u7b56\u7565\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8005\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u573a\u666f\u9009\u53d6\u5176\u4e2d\u7684\u90e8\u5206\u7b56\u7565"),"\uff0c\u4ece\u800c\u8fdb\u4e00\u6b65\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6\u3002"),(0,a.kt)("h2",{id:"\u901a\u7528\u4f18\u5316\u7b56\u7565"},"\u901a\u7528\u4f18\u5316\u7b56\u7565"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u901a\u7528\u7684\u4f18\u5316\u7b56\u7565\uff0c\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern dev")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"modern build")," \u5747\u6709\u63d0\u901f\u6548\u679c\uff0c\u5176\u4e2d\u90e8\u5206\u7b56\u7565\u5bf9\u5305\u4f53\u79ef\u4e5f\u6709\u4f18\u5316\u3002"),(0,a.kt)("h3",{id:"\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56"},"\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56"),(0,a.kt)("p",null,"\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u4f1a\u5b58\u5728\u67d0\u4e9b\u7b2c\u4e09\u65b9\u4f9d\u8d56\u88ab\u5b89\u88c5\u4e86\u591a\u4e2a\u7248\u672c\u7684\u73b0\u8c61\u3002\u91cd\u590d\u4f9d\u8d56\u4f1a\u5bfc\u81f4\u5305\u4f53\u79ef\u53d8\u5927\u3001\u7f16\u8bd1\u901f\u5ea6\u53d8\u6162\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u793e\u533a\u4e2d\u7684\u4e00\u4e9b\u5de5\u5177\u6765\u81ea\u52a8\u6d88\u9664\u91cd\u590d\u4f9d\u8d56\uff0c\u6bd4\u5982 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/scinos/yarn-deduplicate"},"yarn-deduplicate"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx yarn-deduplicate && yarn\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u5728\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm"),"\uff0c\u53ef\u4ee5\u8003\u8651\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u751f\u6210 lock \u6587\u4ef6"),"\u6765\u51cf\u5c11\u91cd\u590d\u4f9d\u8d56\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ./node_modules pnpm-lock.yaml && pnpm install\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5220\u9664 lock \u6587\u4ef6\u4f1a\u4f7f\u9879\u76ee\u4e2d\u7684\u4f9d\u8d56\u7248\u672c\u81ea\u52a8\u5347\u7ea7\u5230\u6307\u5b9a\u8303\u56f4\u4e0b\u7684\u6700\u65b0\u7248\uff0c\u8bf7\u8fdb\u884c\u5145\u5206\u7684\u6d4b\u8bd5\u3002")),(0,a.kt)("h3",{id:"\u66ff\u6362\u4f53\u79ef\u8f83\u5927\u7684\u4f9d\u8d56"},"\u66ff\u6362\u4f53\u79ef\u8f83\u5927\u7684\u4f9d\u8d56"),(0,a.kt)("p",null,"\u5efa\u8bae\u5c06\u9879\u76ee\u4e2d\u4f53\u79ef\u8f83\u5927\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u66ff\u6362\u4e3a\u66f4\u8f7b\u91cf\u7684\u5e93\uff0c\u6bd4\u5982\u5c06 ",(0,a.kt)("a",{parentName:"p",href:"https://momentjs.com/"},"moment")," \u66ff\u6362\u4e3a ",(0,a.kt)("a",{parentName:"p",href:"https://day.js.org/"},"day.js"),"\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u4e0d\u6e05\u695a\u9879\u76ee\u4e2d\u54ea\u4e9b\u4e09\u65b9\u4f9d\u8d56\u7684\u4f53\u79ef\u8f83\u5927\uff0c\u53ef\u4ee5\u5728\u6267\u884c\u6784\u5efa\u65f6\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"--analyze")," \u53c2\u6570\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx modern build --analyze\n")),(0,a.kt)("p",null,"\u8be5\u53c2\u6570\u4f1a\u751f\u6210\u4e00\u4e2a\u5206\u6790\u6784\u5efa\u4ea7\u7269\u4f53\u79ef\u7684 HTML \u6587\u4ef6\uff0c\u624b\u52a8\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00\u8be5\u6587\u4ef6\uff0c\u53ef\u4ee5\u770b\u5230\u6253\u5305\u4ea7\u7269\u7684\u74e6\u7247\u56fe\u3002\u533a\u5757\u7684\u9762\u79ef\u8d8a\u5927\uff0c\u8bf4\u660e\u8be5\u6a21\u5757\u7684\u4f53\u79ef\u8d8a\u5927\u3002"),(0,a.kt)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/mwa-build-analyze-8784f762c1ab0cb20935829d5f912c4c.png"}),(0,a.kt)("h3",{id:"\u907f\u514d\u4f7f\u7528-ts-loader"},"\u907f\u514d\u4f7f\u7528 ts-loader"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u4f7f\u7528 Babel \u7f16\u8bd1 TS \u6587\u4ef6\uff0c\u5f00\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"output.enableTsLoader")," \u9009\u9879\u540e\uff0c\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u7f16\u8bd1 TS \u6587\u4ef6\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"ts-loader")," \u9700\u8981\u8fdb\u884c\u989d\u5916\u7684\u8bed\u6cd5\u89e3\u6790\u548c\u7c7b\u578b\u68c0\u67e5\uff0c\u56e0\u6b64\u4f1a\u5bfc\u81f4\u9879\u76ee\u7f16\u8bd1\u901f\u5ea6\u53d8\u6162\uff0c\u8bf7\u907f\u514d\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  output: {\n    // \u79fb\u9664\u8fd9\u9879\u914d\u7f6e\n    enableTsLoader: true,\n  },\n});\n")),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/ts-loader"},"tools.tsLoader \u6587\u6863"),"\u3002"),(0,a.kt)("h3",{id:"\u63d0\u5347-browserslist-\u8303\u56f4"},"\u63d0\u5347 Browserslist \u8303\u56f4"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u51cf\u5c11 Polyfill \u7684\u4ee3\u7801\u91cf\u53ef\u4ee5\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6\u3002"),"Modern.js \u4f1a\u6839\u636e\u9879\u76ee\u7684 Browserslist \u914d\u7f6e\u8303\u56f4\u8fdb\u884c\u4ee3\u7801\u7f16\u8bd1\uff0c\u5e76\u6ce8\u5165\u76f8\u5e94\u7684 Polyfill\u3002\u5982\u679c\u9879\u76ee\u5bf9\u517c\u5bb9\u6027\u7684\u8981\u6c42\u8f83\u4f4e\uff0c\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\uff0c\u63d0\u5347 Browserslist \u8303\u56f4\uff0c\u4ece\u800c\u51cf\u5c11 Polyfill \u7684\u4ee3\u7801\u91cf\u3002"),(0,a.kt)("p",null,"\u9ed8\u8ba4\u7684 Browserslist \u914d\u7f6e\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"['> 0.01%', 'not dead', 'not op_mini all'];\n")),(0,a.kt)("p",null,"\u6bd4\u5982\u53ea\u517c\u5bb9 Chrome 53 \u4ee5\u4e0a\u7684\u6d4f\u89c8\u5668\uff0c\u53ef\u4ee5\u6539\u6210\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"['Chrome >= 53'];\n")),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/compatibility#browserslist-%E9%85%8D%E7%BD%AE"},"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027 - Browserslist \u914d\u7f6e"),"\u3002"),(0,a.kt)("h3",{id:"\u6309\u9700\u5f15\u5165-polyfill"},"\u6309\u9700\u5f15\u5165 Polyfill"),(0,a.kt)("p",null,"\u660e\u786e\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4e0d\u9700\u8981 Polyfill \u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"output.polyfill")," \u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"usage"),"\uff0c\u6839\u636e\u4ee3\u7801\u4e2d\u4f7f\u7528\u5230\u7684\u8bed\u6cd5\uff0c\u6309\u9700\u6ce8\u5165\u6240\u9700\u7684 Polyfill \u4ee3\u7801\uff0c\u4ece\u800c\u51cf\u5c11 Polyfill \u7684\u4ee3\u7801\u91cf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  output: {\n    polyfill: 'usage',\n  },\n});\n")),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/compatibility#polyfill-%E6%A8%A1%E5%BC%8F"},"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027 - Polyfill \u6a21\u5f0f"),"\u3002"),(0,a.kt)("h2",{id:"dev-\u4f18\u5316\u7b56\u7565"},"dev \u4f18\u5316\u7b56\u7565"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u9488\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern dev")," \u8fdb\u884c\u63d0\u901f\u7684\u7b56\u7565\u3002"),(0,a.kt)("h3",{id:"\u8c03\u6574\u5f00\u53d1\u73af\u5883-sourcemap-\u683c\u5f0f"},"\u8c03\u6574\u5f00\u53d1\u73af\u5883 SourceMap \u683c\u5f0f"),(0,a.kt)("p",null,"\u4e3a\u4e86\u63d0\u4f9b\u826f\u597d\u7684\u8c03\u8bd5\u4f53\u9a8c\uff0cModern.js \u5728\u5f00\u53d1\u73af\u5883\u4e0b\u9ed8\u8ba4\u4f7f\u7528 webpack \u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"cheap-module-source-map")," \u683c\u5f0f SourceMap\u3002"),(0,a.kt)("p",null,"\u7531\u4e8e\u751f\u6210\u9ad8\u8d28\u91cf\u7684 SourceMap \u9700\u8981\u989d\u5916\u7684\u6027\u80fd\u5f00\u9500\uff0c\u901a\u8fc7\u8c03\u6574\u5f00\u53d1\u73af\u5883\u7684 SourceMap \u683c\u5f0f\uff0c\u53ef\u4ee5\u63d0\u5347 dev \u7f16\u8bd1\u901f\u5ea6\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u7981\u7528 SourceMap\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    webpackChain(chain, { env }) {\n      if (env === 'development') {\n        chain.devtool(false);\n      }\n    },\n  },\n});\n")),(0,a.kt)("p",null,"\u6216\u662f\u628a\u5f00\u53d1\u73af\u5883\u7684 SourceMap \u683c\u5f0f\u8bbe\u7f6e\u4e3a\u5f00\u9500\u6700\u5c0f\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"eval")," \u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  tools: {\n    webpackChain(chain, { env }) {\n      if (env === 'development') {\n        chain.devtool('eval');\n      }\n    },\n  },\n});\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u4e0d\u540c SourceMap \u683c\u5f0f\u4e4b\u95f4\u7684\u8be6\u7ec6\u5dee\u5f02\uff0c\u8bf7\u67e5\u770b ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/devtool/"},"webpack - devtool"),"\u3002")),(0,a.kt)("h3",{id:"\u8c03\u6574\u5f00\u53d1\u73af\u5883\u7684-browserslist-\u8303\u56f4"},"\u8c03\u6574\u5f00\u53d1\u73af\u5883\u7684 Browserslist \u8303\u56f4"),(0,a.kt)("p",null,"\u8fd9\u9879\u4f18\u5316\u7684\u539f\u7406\u4e0e\u300c\u63d0\u5347 Browserslist \u8303\u56f4\u300d\u7c7b\u4f3c\uff0c\u533a\u522b\u5728\u4e8e\uff0c\u6211\u4eec\u53ef\u4ee5\u4e3a\u5f00\u53d1\u73af\u5883\u548c\u751f\u4ea7\u73af\u5883\u8bbe\u7f6e\u4e0d\u540c\u7684 browserslist\uff0c\u4f7f\u5f00\u53d1\u73af\u5883\u4e0b\u4e0d\u9700\u8981\u5f15\u5165\u989d\u5916\u7684 Polyfill \u7f16\u8bd1\u903b\u8f91\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff0c\u5728\u5f00\u53d1\u73af\u5883\u4e0b\u53ea\u517c\u5bb9\u6700\u65b0\u7684\u6d4f\u89c8\u5668\uff0c\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u517c\u5bb9\u5b9e\u9645\u9700\u8981\u7684\u6d4f\u89c8\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "browserslist": {\n    "production": [">0.2%", "not dead", "not op_mini all"],\n    "development": [\n      "last 1 chrome version",\n      "last 1 firefox version",\n      "last 1 safari version"\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff0c\u8fd9\u9879\u4f18\u5316\u7b56\u7565\u4f1a\u5bfc\u81f4 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u6784\u5efa\u7684\u4ea7\u7269\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," \u6784\u5efa\u7684\u4ea7\u7269\u5b58\u5728\u4e00\u5b9a\u5dee\u5f02\u3002"),(0,a.kt)("h2",{id:"build-\u4f18\u5316\u7b56\u7565"},"build \u4f18\u5316\u7b56\u7565"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u662f\u9488\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"modern build")," \u8fdb\u884c\u63d0\u901f\u7684\u7b56\u7565\u3002"),(0,a.kt)("h3",{id:"\u7981\u7528\u751f\u4ea7\u73af\u5883-sourcemap"},"\u7981\u7528\u751f\u4ea7\u73af\u5883 SourceMap"),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u5728\u751f\u4ea7\u73af\u5883\u4e0b\u4e0d\u9700\u8981 SourceMap\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"disableSourceMap")," \u914d\u7f6e\u9879\u5173\u95ed\uff0c\u4ece\u800c\u63d0\u5347 build \u6784\u5efa\u7684\u901f\u5ea6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  output: {\n    disableSourceMap: true,\n  },\n});\n")),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/output/disable-source-map"},"output.disableSourceMap"),"\u3002"),(0,a.kt)("h3",{id:"\u4f7f\u7528-esbuild-\u538b\u7f29"},"\u4f7f\u7528 esbuild \u538b\u7f29"),(0,a.kt)("p",null,"Modern.js \u57fa\u4e8e esbuild \u63d0\u4f9b\u4e86\u4ee3\u7801\u7f16\u8bd1\u548c\u538b\u7f29\u7684\u80fd\u529b\uff0c\u5728\u5927\u578b\u5de5\u7a0b\u4e2d\u5f00\u542f\u540e\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u5927\u5e45\u5ea6\u51cf\u5c11\u4ee3\u7801\u538b\u7f29\u6240\u9700\u7684\u65f6\u95f4\uff0c\u540c\u65f6\u6709\u6548\u907f\u514d OOM (heap out of memory) \u95ee\u9898"),"\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 esbuild \u538b\u7f29\u867d\u7136\u5e26\u6765\u4e86\u6784\u5efa\u6548\u7387\u4e0a\u7684\u63d0\u5347\uff0c\u4f46 esbuild \u7684\u538b\u7f29\u6bd4\u4f8b\u662f\u4f4e\u4e8e terser \u7684\uff0c\u56e0\u6b64",(0,a.kt)("strong",{parentName:"p"},"\u6784\u5efa\u4ea7\u7269\u7684\u4f53\u79ef\u4f1a\u589e\u5927"),"\uff0c\u8bf7\u6839\u636e\u4e1a\u52a1\u60c5\u51b5\u914c\u60c5\u4f7f\u7528\uff08\u6bd4\u8f83\u9002\u5408\u4e2d\u540e\u53f0\u573a\u666f\uff09\u3002"),(0,a.kt)("p",null,"\u8be6\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/tools/esbuild"},"tools.esbuild"),"\u3002"))}u.isMDXComponent=!0}}]);