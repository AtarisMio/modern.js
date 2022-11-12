"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7001],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>g});var a=n(52983);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=l,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:l,o[1]=p;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>p,toc:()=>c});var a=n(18249),l=(n(52983),n(44993));const r={sidebar_position:2},o="\u6dfb\u52a0\u4e00\u4e2a changeset",p={unversionedId:"guides/topic-detail/changesets/add",id:"guides/topic-detail/changesets/add",title:"\u6dfb\u52a0\u4e00\u4e2a changeset",description:"\u5f53\u6211\u4eec\u5f00\u53d1\u5b8c\u6210\u4e00\u4e2a\u529f\u80fd\u65f6\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a changeset \u7528\u4e8e\u58f0\u660e\u5f53\u524d\u529f\u80fd\uff0c\u7528\u4e8e\u540e\u7eed\u7248\u672c\u53d1\u5e03\u3002",source:"@site/docs/guides/topic-detail/changesets/add.md",sourceDirName:"guides/topic-detail/changesets",slug:"/guides/topic-detail/changesets/add",permalink:"/docs/guides/topic-detail/changesets/add",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"guidesSidebar",previous:{title:"\u8ba4\u8bc6 Changesets",permalink:"/docs/guides/topic-detail/changesets/introduce"},next:{title:"\u53d1\u5e03\u6b63\u5f0f\u7248\u672c",permalink:"/docs/guides/topic-detail/changesets/release"}},i={},c=[{value:"\u4fe1\u606f",id:"\u4fe1\u606f",level:2},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:2},{value:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",id:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848",level:3},{value:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4",level:4},{value:"\u9009\u62e9\u672c\u6b21\u53d8\u66f4\u9700\u8981\u5347\u7ea7\u7684\u7248\u672c\u53f7\u7c7b\u578b\uff0c\u70b9\u51fb\u56de\u8f66\uff1a",id:"\u9009\u62e9\u672c\u6b21\u53d8\u66f4\u9700\u8981\u5347\u7ea7\u7684\u7248\u672c\u53f7\u7c7b\u578b\u70b9\u51fb\u56de\u8f66",level:4},{value:"\u586b\u5165 Changelog \u4fe1\u606f\uff0c\u5e76\u70b9\u51fb\u4e24\u6b21\u56de\u8f66\uff1a",id:"\u586b\u5165-changelog-\u4fe1\u606f\u5e76\u70b9\u51fb\u4e24\u6b21\u56de\u8f66",level:4},{value:"Monorepo \u5de5\u7a0b\u65b9\u6848",id:"monorepo-\u5de5\u7a0b\u65b9\u6848",level:3},{value:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a",id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4-1",level:4},{value:"\u9009\u62e9\u672c\u6b21\u9700\u8981\u5347\u7ea7\u7684\u5305\u5217\u8868\uff1a",id:"\u9009\u62e9\u672c\u6b21\u9700\u8981\u5347\u7ea7\u7684\u5305\u5217\u8868",level:4},{value:"\u5206\u522b\u9009\u62e9\u4e0d\u540c\u7248\u672c\u7c7b\u578b\u5bf9\u5e94\u7684\u5305\uff0cchangeset \u4f1a\u8be2\u95ee <code>major</code> \u548c <code>minor</code> \u7c7b\u578b\uff0c\u5982\u679c\u5b58\u5728\u5305\u672a\u9009\u62e9\u8fd9\u4e24\u79cd\u7c7b\u578b\uff0c\u5c06\u4f1a\u9ed8\u8ba4\u4f7f\u7528 <code>patch</code> \u7c7b\u578b\uff1a",id:"\u5206\u522b\u9009\u62e9\u4e0d\u540c\u7248\u672c\u7c7b\u578b\u5bf9\u5e94\u7684\u5305changeset-\u4f1a\u8be2\u95ee-major-\u548c-minor-\u7c7b\u578b\u5982\u679c\u5b58\u5728\u5305\u672a\u9009\u62e9\u8fd9\u4e24\u79cd\u7c7b\u578b\u5c06\u4f1a\u9ed8\u8ba4\u4f7f\u7528-patch-\u7c7b\u578b",level:4},{value:"\u586b\u5165 Changelog \u4fe1\u606f\uff0c\u5e76\u70b9\u51fb\u4e24\u6b21\u56de\u8f66\uff1a",id:"\u586b\u5165-changelog-\u4fe1\u606f\u5e76\u70b9\u51fb\u4e24\u6b21\u56de\u8f66-1",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6dfb\u52a0\u4e00\u4e2a-changeset"},"\u6dfb\u52a0\u4e00\u4e2a changeset"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u5f00\u53d1\u5b8c\u6210\u4e00\u4e2a\u529f\u80fd\u65f6\uff0c\u9700\u8981\u6dfb\u52a0\u4e00\u4e2a changeset \u7528\u4e8e\u58f0\u660e\u5f53\u524d\u529f\u80fd\uff0c\u7528\u4e8e\u540e\u7eed\u7248\u672c\u53d1\u5e03\u3002"),(0,l.kt)("h2",{id:"\u4fe1\u606f"},"\u4fe1\u606f"),(0,l.kt)("p",null,"\u4e00\u4e2a changeset \u5305\u542b\u7684\u5185\u5bb9\u5305\u62ec\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u6b21\u53d8\u66f4\u6d89\u53ca\u54ea\u4e9b\u5305\u7684\u53d8\u66f4\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u6b21\u53d8\u66f4\u9700\u8981\u5347\u7ea7\u7684\u7248\u672c\u53f7\u7c7b\u578b\uff0c\u7c7b\u578b\u7b26\u5408 ",(0,l.kt)("a",{parentName:"p",href:"https://semver.org/"},"semver")," \u89c4\u8303\u3002")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u672c\u6b21\u53d8\u66f4\u7684 Changelog \u4fe1\u606f\u3002"))),(0,l.kt)("h2",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u4ee5\u4e0b\u793a\u4f8b\u547d\u4ee4\u90fd\u4ee5 pnpm \u4f5c\u4e3a\u5305\u7ba1\u7406\u5de5\u5177\u8fdb\u884c\uff0c\u5982\u679c\u9700\u8981\u4f7f\u7528\u5176\u4ed6\u5305\u7ba1\u7406\u5de5\u5177\uff0c\u8bf7\u6309\u9700\u6c42\u8fdb\u884c\u66ff\u6362\u3002")),(0,l.kt)("h3",{id:"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"},"\u6a21\u5757\u5de5\u7a0b\u65b9\u6848"),(0,l.kt)("h4",{id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4"},"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run change\n")),(0,l.kt)("h4",{id:"\u9009\u62e9\u672c\u6b21\u53d8\u66f4\u9700\u8981\u5347\u7ea7\u7684\u7248\u672c\u53f7\u7c7b\u578b\u70b9\u51fb\u56de\u8f66"},"\u9009\u62e9\u672c\u6b21\u53d8\u66f4\u9700\u8981\u5347\u7ea7\u7684\u7248\u672c\u53f7\u7c7b\u578b\uff0c\u70b9\u51fb\u56de\u8f66\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-version.png",alt:"\u9009\u62e9\u7248\u672c\u7c7b\u578b"})),(0,l.kt)("h4",{id:"\u586b\u5165-changelog-\u4fe1\u606f\u5e76\u70b9\u51fb\u4e24\u6b21\u56de\u8f66"},"\u586b\u5165 Changelog \u4fe1\u606f\uff0c\u5e76\u70b9\u51fb\u4e24\u6b21\u56de\u8f66\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog.png",alt:"\u5199\u5165\u53d8\u66f4\u4fe1\u606f"})),(0,l.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u540e\uff0c\u5c06\u5728\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".changeset")," \u76ee\u5f55\u521b\u5efa\u5bf9\u5e94\u7684 changeset \u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"---\n'module-changeset': patch\n---\n\nfeat: test module solution changeset\n\n")),(0,l.kt)("p",null,"\u8be5\u6587\u4ef6\u4e2d\u5305\u542b\u4e86 changeset \u7684\u6240\u6709\u4fe1\u606f\u3002"),(0,l.kt)("h3",{id:"monorepo-\u5de5\u7a0b\u65b9\u6848"},"Monorepo \u5de5\u7a0b\u65b9\u6848"),(0,l.kt)("p",null,"\u6211\u4eec\u5047\u8bbe monorepo \u4e2d\u5b58\u5728\u4e09\u4e2a\u6a21\u5757\u5305\uff0c\u5206\u522b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"module-1"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"module-2"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"module-3"),"\u3002"),(0,l.kt)("h4",{id:"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4-1"},"\u5728\u6839\u76ee\u5f55\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run change\n")),(0,l.kt)("h4",{id:"\u9009\u62e9\u672c\u6b21\u9700\u8981\u5347\u7ea7\u7684\u5305\u5217\u8868"},"\u9009\u62e9\u672c\u6b21\u9700\u8981\u5347\u7ea7\u7684\u5305\u5217\u8868\uff1a"),(0,l.kt)("p",null,"Changesets \u4f1a\u6839\u636e\u5f53\u524d\u4ee3\u7801\u53d8\u66f4(",(0,l.kt)("inlineCode",{parentName:"p"},"git diff Head...baseBranch"),")\uff0c\u5c06 Monorepo \u4e2d\u7684 package \u5206\u4e3a\u4e24\u7c7b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"changed packages")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"unchanged packages"),"\uff0c\u65b9\u4fbf\u7528\u6237\u8fdb\u884c\u9009\u62e9\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528\u7a7a\u683c\u952e\u9009\u62e9\u5bf9\u5e94\u7684\u5305\u6216\u8005\u5206\u7c7b\u5373\u53ef\uff0c\u9009\u62e9\u5b8c\u6210\u540e\u70b9\u51fb\u56de\u8f66\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-select-packages.png",alt:"\u9009\u62e9\u5347\u7ea7\u5305"})),(0,l.kt)("h4",{id:"\u5206\u522b\u9009\u62e9\u4e0d\u540c\u7248\u672c\u7c7b\u578b\u5bf9\u5e94\u7684\u5305changeset-\u4f1a\u8be2\u95ee-major-\u548c-minor-\u7c7b\u578b\u5982\u679c\u5b58\u5728\u5305\u672a\u9009\u62e9\u8fd9\u4e24\u79cd\u7c7b\u578b\u5c06\u4f1a\u9ed8\u8ba4\u4f7f\u7528-patch-\u7c7b\u578b"},"\u5206\u522b\u9009\u62e9\u4e0d\u540c\u7248\u672c\u7c7b\u578b\u5bf9\u5e94\u7684\u5305\uff0cchangeset \u4f1a\u8be2\u95ee ",(0,l.kt)("inlineCode",{parentName:"h4"},"major")," \u548c ",(0,l.kt)("inlineCode",{parentName:"h4"},"minor")," \u7c7b\u578b\uff0c\u5982\u679c\u5b58\u5728\u5305\u672a\u9009\u62e9\u8fd9\u4e24\u79cd\u7c7b\u578b\uff0c\u5c06\u4f1a\u9ed8\u8ba4\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"h4"},"patch")," \u7c7b\u578b\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-auto-select-patch.png",alt:"\u9009\u62e9\u5347\u7ea7\u5305\u7248\u672c\u7c7b\u578b"})),(0,l.kt)("h4",{id:"\u586b\u5165-changelog-\u4fe1\u606f\u5e76\u70b9\u51fb\u4e24\u6b21\u56de\u8f66-1"},"\u586b\u5165 Changelog \u4fe1\u606f\uff0c\u5e76\u70b9\u51fb\u4e24\u6b21\u56de\u8f66\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/changeset-input-changelog-monorepo.png",alt:"\u5199\u5165\u53d8\u66f4\u4fe1\u606f"})),(0,l.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u540e\uff0c\u5c06\u5728\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".changeset")," \u76ee\u5f55\u521b\u5efa\u5bf9\u5e94\u7684 changeset \u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"---\n'module-2': minor\n'module-3': patch\n---\n\nfeat: test-changeset\n")),(0,l.kt)("p",null,"\u8be5\u6587\u4ef6\u4e2d\u5305\u542b\u4e86 changeset \u7684\u6240\u6709\u4fe1\u606f\uff0c\u4e0d\u540c\u7684\u5305\u4e5f\u4f1a\u6839\u636e\u9009\u62e9\u7684\u7248\u672c\u7c7b\u578b\u8fdb\u884c\u6807\u8bb0\u3002"),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("p",null,"change \u547d\u4ee4\u652f\u6301\u4ee5\u4e0b\u53c2\u6570\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--empty")," \u6dfb\u52a0\u4e00\u4e2a\u7a7a\u7684 changeset\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm run change -- --empty\n")),(0,l.kt)("p",null,"\u6267\u884c\u5b8c\u6210\u540e\uff0c\u5c06\u5728\u9879\u76ee\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},".changeset")," \u76ee\u5f55\u521b\u5efa\u7a7a\u7684 changeset \u6587\u4ef6\uff0c\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"---\n---\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--open")," \u4f7f\u7528\u8be5\u53c2\u6570\u65f6\uff0c\u5728\u586b\u5199 Changelog \u6b65\u9aa4\u4f1a\u6253\u5f00\u7cfb\u7edf\u9ed8\u8ba4\u7f16\u8f91\u5668\u8fdb\u884c\u586b\u5199\u3002")),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u662f\u6240\u6709\u7684\u53d8\u66f4\u90fd\u9700\u8981 changeset")),(0,l.kt)("p",null,"\u5982\u679c\u5f53\u524d\u53d8\u66f4\u662f\u4fee\u6539\u4ed3\u5e93\u7684\u4e00\u4e9b\u57fa\u7840\u8bbe\u65bd\uff0c\u6bd4\u5982 CI\u3001\u6d4b\u8bd5\u7b49\uff0c\u5c31\u4e0d\u9700\u8981\u6dfb\u52a0 changeset \u6216\u8005\u53ef\u4ee5\u6dfb\u52a0\u4e00\u4e2a\u7a7a\u7684 changeset\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u4e00\u4e2a pull reuqest \u53ef\u4ee5\u63d0\u4ea4\u591a\u4e2a changeset")),(0,l.kt)("p",null,"\u5f53\u4e00\u4e2a pull request \u5b58\u5728\u591a\u4e2a\u529f\u80fd\u5f00\u53d1\u6216\u8005\u95ee\u9898\u4fee\u590d\u65f6\uff0c\u53ef\u4ee5\u591a\u6b21\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"pnpm run change")," \u6dfb\u52a0\u591a\u4e2a changeset \u6587\u4ef6\uff0c\u6bcf\u4e2a\u6587\u4ef6\u9009\u62e9\u5bf9\u5e94\u529f\u80fd\u7684\u5305\u548c\u6dfb\u52a0\u53d8\u66f4\u4fe1\u606f\u5373\u53ef\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa changeset \u65f6\uff0c\u9700\u8981\u9009\u62e9\u8be5\u529f\u80fd\u76f8\u5173\u7684\u6240\u6709\u5305")),(0,l.kt)("p",null,"\u5728 Monorepo \u4e2d\u521b\u5efa changeset \u65f6\uff0c\u9700\u8981\u9009\u4e2d\u548c\u8be5\u529f\u80fd\u76f8\u5173\u7684\u6240\u6709\u53d8\u66f4\u5305\uff0c\u907f\u514d\u51fa\u73b0\u53d1\u7248\u65f6\u90e8\u5206\u5305\u672a\u53d1\u5e03\u7684\u60c5\u51b5\u3002"))}u.isMDXComponent=!0}}]);