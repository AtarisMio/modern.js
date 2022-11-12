"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1393],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(18249),o=(n(52983),n(44993));const l={title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027"},a=void 0,p={unversionedId:"tutorials/first-app/c04-es6-plus-and-ts/4.3-compatibility",id:"tutorials/first-app/c04-es6-plus-and-ts/4.3-compatibility",title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",description:"\u524d\u4e24\u4e2a\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 ES6+ \u4e0e TypeScript \u8bed\u6cd5\u6765\u7f16\u5199\u5e94\u7528\u3002",source:"@site/docs/tutorials/first-app/c04-es6-plus-and-ts/4.3-compatibility.md",sourceDirName:"tutorials/first-app/c04-es6-plus-and-ts",slug:"/tutorials/first-app/c04-es6-plus-and-ts/4.3-compatibility",permalink:"/docs/tutorials/first-app/c04-es6-plus-and-ts/4.3-compatibility",draft:!1,tags:[],version:"current",frontMatter:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027"},sidebar:"tutorialsSidebar",previous:{title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5",permalink:"/docs/tutorials/first-app/c04-es6-plus-and-ts/4.2-use-typescript"},next:{title:"\u4f7f\u7528\u4e3b\u6d41\u7ec4\u4ef6\u5e93",permalink:"/docs/tutorials/first-app/c05-component/5.1-use-ui-library"}},i={},s=[],c={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u524d\u4e24\u4e2a\u5c0f\u8282\u6211\u4eec\u5b66\u4e60\u4e86\u5982\u4f55\u4f7f\u7528 ES6+ \u4e0e TypeScript \u8bed\u6cd5\u6765\u7f16\u5199\u5e94\u7528\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\uff0c\u6211\u4eec\u6765\u5b66\u4e60\u5982\u4f55\u5728 Modern.js \u4e2d\u89e3\u51b3\u5ba2\u6237\u7aef\u517c\u5bb9\u6027\u7684\u95ee\u9898\u3002"),(0,o.kt)("p",null,"\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5f80\u5f80\u4f1a\u56e0\u4e3a\u9700\u8981\u517c\u5bb9\u8001\u7248\u672c\u6d4f\u89c8\u5668\uff0c\u800c\u65e0\u6cd5\u5229\u7528\u73b0\u4ee3\u6d4f\u89c8\u5668\u7684\u6700\u65b0\u7279\u6027\u4e0e\u6700\u4f73\u5b9e\u8df5\u3002"),(0,o.kt)("p",null,"Modern.js \u63d0\u4f9b\u4e86\u5f00\u7bb1\u5373\u7528\u7684\u89e3\u51b3\u5ba2\u6237\u7aef\u517c\u5bb9\u6027\u7684\u80fd\u529b\uff0c\u652f\u6301\u81ea\u52a8 Polyfill\u3001Browserslist \u914d\u7f6e\u3001\u5dee\u5f02\u5316\u5206\u53d1\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u9996\u5148\u4f7f\u7528\u5fae\u751f\u6210\u5668\u5f00\u542f\u8be5\u529f\u80fd\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c\uff1a\u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd\uff1a\u542f\u7528\u300c\u57fa\u4e8e UA \u7684 Polyfill\u300d\u529f\u80fd\n")),(0,o.kt)("p",null,"\u63a5\u7740\u6211\u4eec\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.config.js"),"\uff0c\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  output: {\n    polyfill: 'ua',\n  },\n});\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u5c06\u4f1a\u5f00\u542f\u300c \u81ea\u52a8 Polyfill \u300d\uff0cModern.js \u4f1a\u6839\u636e\u6d4f\u89c8\u5668\u5bf9\u89c4\u8303\u7684\u652f\u6301\u7a0b\u5ea6\uff0c\u8fd4\u56de\u4e0d\u540c\u5185\u5bb9\u7684 polyfill\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u518d\u62c5\u5fc3\u4f4e\u7248\u672c\u6d4f\u89c8\u5668\u5bf9\u65b0\u7248\u672c\u6d4f\u89c8\u5668\u7684\u62d6\u7d2f\u3002"),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u6d4f\u89c8\u5668\u4e2d\u8bf7\u6c42\u4e86\u5f53\u524d\u670d\u52a1\u4e0a ",(0,o.kt)("inlineCode",{parentName:"p"},"/__polyfill__")," \u8fd9\u4e00\u8d44\u6e90\uff0c\u4f46\u662f\u5f53\u524d\u8bf7\u6c42\u5230\u7684\u8d44\u6e90\u662f\u7a7a\u7684\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/result1.png",alt:"result"})),(0,o.kt)("p",null,"\u6211\u4eec\u5207\u6362\u5230 Chrome Mobile \u6a21\u5f0f\uff0c\u9009\u62e9\u8bbe\u5907\u4e3a iPhone 5/SE\uff0c\u91cd\u65b0\u5237\u65b0\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230\u8bf7\u6c42\u5230\u4e86\u6709\u5185\u5bb9\u7684\u8d44\u6e90\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/result2.png",alt:"result"})),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9047\u5230\u65e0\u6cd5\u8bc6\u522b\u7684\u6d4f\u89c8\u5668\uff0cModern.js \u5c06\u4f1a\u8fd4\u56de\u5168\u91cf\u7684 polyfill\u3002")),(0,o.kt)("p",null,"\u63a5\u4e0b\u91cc\u6211\u4eec\u7ee7\u7eed\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"modern.config.js"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  output: {\n    enableModernMode: true,\n    polyfill: 'ua',\n  },\n});\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u5c06\u4f1a\u5f00\u542f\u300c \u5dee\u5f02\u5316\u5206\u53d1 \u300d\uff0c\u5728\u539f\u751f\u652f\u6301\u6a21\u5757\u529f\u80fd\u7684\u6d4f\u89c8\u5668\u4e2d\uff0cModern.js \u4f18\u5148\u4f7f\u7528\u5e26\u6709 ESM \u6a21\u5757\u8bed\u6cd5\u9759\u6001\u8d44\u6e90\u7684 HTML\uff0c\u6d4f\u89c8\u5668\u80fd\u591f\u6700\u4f18\u5316\u7684\u52a0\u8f7d\u6a21\u5757\uff0c\u5e26\u6765\u66f4\u597d\u7684\u9875\u9762\u6027\u80fd\u3002"),(0,o.kt)("p",null,"\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm run build && pnpm run start"),"\uff0c\u6253\u5f00\u9875\u9762\uff0c\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u52a0\u8f7d\u4e86\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"-es6")," \u540e\u7f00\u7684\u8d44\u6e90\u6587\u4ef6\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/aphqeh7uhohpquloj/modern-js/docs/result3.png",alt:"result"})),(0,o.kt)("admonition",{title:"\u6ce8",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/advanced-features/compatibility"},(0,o.kt)("strong",{parentName:"a"},"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027")),"\u3002")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c04/hello-modern-3"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}u.isMDXComponent=!0}}]);