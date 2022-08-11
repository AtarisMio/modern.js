"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[33499],{54852:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(49231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,s(s({ref:t},d),{},{components:n})):a.createElement(k,s({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(86215),r=(n(49231),n(54852));const i={sidebar_position:3},s="\u9759\u6001 Web \u670d\u52a1\u5668\u6258\u7ba1\u7f51\u7ad9",o={unversionedId:"guides/features/server-side/deploy/static-hosting",id:"guides/features/server-side/deploy/static-hosting",title:"\u9759\u6001 Web \u670d\u52a1\u5668\u6258\u7ba1\u7f51\u7ad9",description:"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u5728\u670d\u52a1\u5668\u4e2d\u4f7f\u7528 start \u547d\u4ee4\u542f\u52a8\u5df2\u7ecf\u6784\u5efa\u5b8c\u7684 Modern.js \u5e94\u7528\u5373\u53ef\u3002",source:"@site/docs/guides/features/server-side/deploy/static-hosting.md",sourceDirName:"guides/features/server-side/deploy",slug:"/guides/features/server-side/deploy/static-hosting",permalink:"/docs/guides/features/server-side/deploy/static-hosting",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guidesSidebar",previous:{title:"\u817e\u8baf\u4e91 COS",permalink:"/docs/guides/features/server-side/deploy/upload-cdn/cos"},next:{title:"\u5fae\u524d\u7aef\u4ecb\u7ecd",permalink:"/docs/guides/features/micro-frontend/introduction"}},p={},l=[{value:"\u542f\u7528\u529f\u80fd",id:"\u542f\u7528\u529f\u80fd",level:2},{value:"\u4f7f\u7528 CDN \u6258\u7ba1",id:"\u4f7f\u7528-cdn-\u6258\u7ba1",level:2},{value:"\u4f7f\u7528\u5df2\u6709\u7684\u9759\u6001 Web \u670d\u52a1\u5668\u6258\u7ba1",id:"\u4f7f\u7528\u5df2\u6709\u7684\u9759\u6001-web-\u670d\u52a1\u5668\u6258\u7ba1",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9759\u6001-web-\u670d\u52a1\u5668\u6258\u7ba1\u7f51\u7ad9"},"\u9759\u6001 Web \u670d\u52a1\u5668\u6258\u7ba1\u7f51\u7ad9"),(0,r.kt)("p",null,"\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u76f4\u63a5\u5728\u670d\u52a1\u5668\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," \u547d\u4ee4\u542f\u52a8\u5df2\u7ecf\u6784\u5efa\u5b8c\u7684 Modern.js \u5e94\u7528\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u6709\u65f6\uff0c\u5f00\u53d1\u8005\u5e0c\u671b\u4f7f\u7528\u81ea\u5df1\u5df2\u6709\u7684\u670d\u52a1\u5668\uff0c\u6216\u8005\u76f4\u63a5\u4f7f\u7528 CDN \u6765\u6258\u7ba1 Modern.js \u5e94\u7528\u7684\u4ea7\u7269\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6784\u5efa\u4ea7\u7269\u4e0d\u652f\u6301\u76f4\u63a5\u5728\u8fd9\u7c7b\u9759\u6001 Web \u670d\u52a1\u5668\u4e2d\u4f7f\u7528\u3002"),(0,r.kt)("p",null,"Modern.js \u4e3a\u8fd9\u7c7b\u573a\u666f\u63d0\u4f9b\u4e86\u72ec\u7acb\u7684\u63d2\u4ef6\u6765\u652f\u6301\u3002"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528\u9759\u6001 Web \u670d\u52a1\u5668\u4f1a\u5bfc\u81f4\u539f\u6709\u7684 Modern.js \u529f\u80fd\u7684\u635f\u5931\uff0c\u4f8b\u5982 SSR\u3001SSG\uff0c\u81ea\u52a8\u7684 MAP/SPA \u8def\u7531\u7b49\u3002"))),(0,r.kt)("h2",{id:"\u542f\u7528\u529f\u80fd"},"\u542f\u7528\u529f\u80fd"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u76ee\u5f55\u4e2d\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm new")," \u542f\u7528\u90e8\u7f72\u529f\u80fd\uff0c\u5728",(0,r.kt)("strong",{parentName:"p"},"\u662f\u5426\u8c03\u6574 Web \u670d\u52a1\u5668"),"\u4e00\u95ee\u4e2d\u9009\u62e9\u3010\u662f\u3011\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a\u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd\uff1a\u542f\u7528\u300c\u90e8\u7f72\u300d\u529f\u80fd\n? \u9ed8\u8ba4\u4f7f\u7528\u6846\u67b6\u81ea\u5e26\u7684\u4e13\u4e1a Web \u670d\u52a1\u5668\uff0c\u662f\u5426\u8c03\u6574\uff1a\u662f\n? \u8bf7\u9009\u62e9 CDN \u5e73\u53f0\uff1a\u4e0d\u4f7f\u7528 CDN\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u53d1\u73b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u5df2\u7ecf\u65b0\u589e\u4e86\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  + "@modern-js/plugin-static-hosting": "^1"\n}\n')),(0,r.kt)("p",null,"\u542f\u7528\u8be5\u529f\u80fd\u540e\uff0c\u91cd\u65b0\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run build")," \u547d\u4ee4\uff0c\u53ef\u4ee5\u770b\u5230\u4ea7\u7269 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/")," \u76ee\u5f55\u4e0b\uff0cHTML \u6587\u4ef6\u5df2\u7ecf\u88ab\u5e73\u94fa\u5230\u5916\u5c42\uff0c\u540c\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"main.html")," \u4e5f\u88ab\u91cd\u547d\u540d\u4e3a\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.html"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 static/\n\u2502   \u251c\u2500\u2500 css/\n\u2502   \u2502   \u251c\u2500\u2500 main.6a8baa57.css\n\u2502   \u2502   \u2514\u2500\u2500 main.6a8baa57.css.map\n\u2502   \u2514\u2500\u2500 js/\n\u2502       \u251c\u2500\u2500 runtime-main.edcde8c9.js\n\u2502       \u2514\u2500\u2500 runtime-main.edcde8c9.js.map\n\u251c\u2500\u2500 asset-manifest.json\n\u251c\u2500\u2500 home.html\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 route.json\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528-cdn-\u6258\u7ba1"},"\u4f7f\u7528 CDN \u6258\u7ba1"),(0,r.kt)("p",null,"Modern.js \u652f\u6301\u76f4\u63a5\u4f7f\u7528 CDN \u6765\u6258\u7ba1\u4f7f\u7528\u4e0a\u8ff0\u63d2\u4ef6\u540e\u7684\u6784\u5efa\u4ea7\u7269\u3002\u6b64\u65f6\u9700\u8981\u5148",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/features/server-side/deploy/upload-cdn/oss"},"\u5f00\u542f CDN \u4e0a\u4f20"),"\u3002"),(0,r.kt)("p",null,"\u63a5\u7740\u9700\u8981\u914d\u7f6e\u989d\u5916\u7684\u73af\u5883\u53d8\u91cf\uff0c\u5c06\u6574\u4e2a\u4ea7\u7269\u76ee\u5f55\u4e0a\u4f20\u5230 CDN \u4e2d\u3002\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u8bbe\u7f6e\u4ee5\u4e0b\u73af\u5883\u53d8\u91cf\uff0c\u4fee\u6539\u9ed8\u8ba4\u4e0a\u4f20\u7684\u8d44\u6e90\u76ee\u5f55\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title=".env"',title:'".env"'},'CLOUD_STATIC_FILES="."\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cModern.js \u7684 CDN \u63d2\u4ef6\u4f1a\u4e0a\u4f20\u6784\u5efa\u4ea7\u7269\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"static")," \u6587\u4ef6\u5939\u4e0b\u7684\u5185\u5bb9\uff0c\u4fee\u6539\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," \u540e\uff0c\u5c06\u4f1a\u4e0a\u4f20\u6574\u4e2a\u4ea7\u7269\u76ee\u5f55\u3002"))),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run deploy")," \u547d\u4ee4\u540e\uff0c\u7f51\u7ad9\u5c31\u5df2\u7ecf\u88ab\u6258\u7ba1\u5728 CDN \u4e0a\u4e86\u3002"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"output.assetPrefix"),"\uff0cHTML \u4e2d\u7684\u9759\u6001\u8d44\u6e90\u5c06\u901a\u8fc7\u7edd\u5bf9\u8def\u5f84\u8bbf\u95ee\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="/static/js/*.js"><\/script>\n')),(0,r.kt)("p",null,"\u5728 CDN \u6258\u7ba1\u65b9\u5f0f\u4e0b\uff0c\u5982\u679c\u5df2\u7ecf\u4e3a CDN \u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"CLOUD_BUCKET_PATH"),"\uff0c\u6307\u5b9a\u4e86 CDN \u7684\u4e0a\u4f20\u76ee\u5f55\uff0c\u5219\u8fd8\u9700\u8981\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"assetPrefix")," \u4fee\u6539\u4e3a\u76f8\u5bf9\u8def\u5f84\uff0c\u4fdd\u8bc1 HTML \u4e2d\u7684\u9759\u6001\u8d44\u6e90\u6587\u4ef6\u80fd\u591f\u88ab\u6b63\u5e38\u8bbf\u95ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="module.config.js"',title:'"module.config.js"'},"export default defineConfig({\n  output: {\n    assetPrefix: './'\n  }\n}\n")),(0,r.kt)("h2",{id:"\u4f7f\u7528\u5df2\u6709\u7684\u9759\u6001-web-\u670d\u52a1\u5668\u6258\u7ba1"},"\u4f7f\u7528\u5df2\u6709\u7684\u9759\u6001 Web \u670d\u52a1\u5668\u6258\u7ba1"),(0,r.kt)("p",null,"\u6784\u5efa\u4ea7\u7269\u4e5f\u53ef\u4ee5\u76f4\u63a5\u88ab\u5e94\u7528\u5728\u4efb\u610f\u7684\u9759\u6001 Web \u670d\u52a1\u5668\u4e2d\uff0c\u4f8b\u5982",(0,r.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/product/wh"},"\u4e91\u5e73\u53f0\u7684\u9759\u6001\u7f51\u7ad9\u6258\u7ba1"),"\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4f7f\u7528\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u505a\u6f14\u793a\uff0c\u5148\u5728\u5168\u5c40\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"http-server")," \uff0c\u63a5\u7740\u8fdb\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"dist/")," \u76ee\u5f55\uff0c\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"http-server\n")),(0,r.kt)("p",null,"\u63a7\u5236\u53f0\u6253\u5370\u4ee5\u4e0b\u4fe1\u606f\uff0c\u8bf4\u660e http \u670d\u52a1\u5df2\u7ecf\u6b63\u5e38\u542f\u52a8\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Available on:\n  http://127.0.0.1:8080\n")),(0,r.kt)("p",null,"\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://127.0.0.1:8080"),"\uff0c\u53ef\u4ee5\u770b\u5230\u9875\u9762\u5df2\u7ecf\u6b63\u5e38\u6e32\u67d3\u3002"))}c.isMDXComponent=!0}}]);