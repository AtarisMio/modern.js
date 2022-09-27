"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[294],{57522:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(29901);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=o(n),k=s,c=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(c,r(r({ref:t},d),{},{components:n})):a.createElement(c,r({ref:t},d))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=n.length,r=new Array(l);r[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:s,r[1]=i;for(var o=2;o<l;o++)r[o]=n[o];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51451:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=n(18249),s=(n(29901),n(57522));const l={sidebar_position:4},r="\u5f00\u53d1\u6837\u5f0f",i={unversionedId:"guides/features/modules/code-style",id:"guides/features/modules/code-style",title:"\u5f00\u53d1\u6837\u5f0f",description:"Modern.js \u5bf9\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u63d0\u4f9b\u4e86\u5f00\u53d1\u6837\u5f0f\u7684\u652f\u6301\u3002\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\u8fdb\u884c\u6837\u5f0f\u7684\u5f00\u53d1\u3002",source:"@site/docs/guides/features/modules/code-style.md",sourceDirName:"guides/features/modules",slug:"/guides/features/modules/code-style",permalink:"/docs/guides/features/modules/code-style",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"guidesSidebar",previous:{title:"\u5982\u4f55\u6784\u5efa\u6a21\u5757",permalink:"/docs/guides/features/modules/build"},next:{title:"\u4f7f\u7528 Storybook \u8c03\u8bd5",permalink:"/docs/guides/features/modules/storybook"}},p={},o=[{value:"\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f",id:"\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f",level:2},{value:"\u4ec0\u4e48\u662f\u5185\u7f6e\u6837\u5f0f",id:"\u4ec0\u4e48\u662f\u5185\u7f6e\u6837\u5f0f",level:3},{value:"\u4ec0\u4e48\u662f\u72ec\u7acb\u6837\u5f0f",id:"\u4ec0\u4e48\u662f\u72ec\u7acb\u6837\u5f0f",level:3},{value:"\u5f00\u53d1\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u6ce8\u610f\u70b9",id:"\u5f00\u53d1\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u6ce8\u610f\u70b9",level:3},{value:"\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u6784\u5efa\u4ea7\u7269",id:"\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u6784\u5efa\u4ea7\u7269",level:3},{value:"\u5bf9\u4e8e\u5185\u7f6e\u6837\u5f0f\u7684\u6784\u5efa",id:"\u5bf9\u4e8e\u5185\u7f6e\u6837\u5f0f\u7684\u6784\u5efa",level:4},{value:"\u5bf9\u4e8e\u72ec\u7acb\u6837\u5f0f\u7684\u6784\u5efa",id:"\u5bf9\u4e8e\u72ec\u7acb\u6837\u5f0f\u7684\u6784\u5efa",level:4},{value:"\u4f7f\u7528 CSS \u8fdb\u884c\u6837\u5f0f\u5f00\u53d1",id:"\u4f7f\u7528-css-\u8fdb\u884c\u6837\u5f0f\u5f00\u53d1",level:2},{value:"\u4f7f\u7528 Less \u8fdb\u884c\u6837\u5f0f\u5f00\u53d1",id:"\u4f7f\u7528-less-\u8fdb\u884c\u6837\u5f0f\u5f00\u53d1",level:2},{value:"\u4f7f\u7528 SCSS/Sass \u8fdb\u884c\u6837\u5f0f\u5f00\u53d1",id:"\u4f7f\u7528-scsssass-\u8fdb\u884c\u6837\u5f0f\u5f00\u53d1",level:2}],d={toc:o};function m(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"\u5f00\u53d1\u6837\u5f0f"},"\u5f00\u53d1\u6837\u5f0f"),(0,s.kt)("p",null,"Modern.js \u5bf9\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u63d0\u4f9b\u4e86\u5f00\u53d1\u6837\u5f0f\u7684\u652f\u6301\u3002\u672c\u7ae0\u5c06\u8981\u4ecb\u7ecd\u5982\u4f55\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\u8fdb\u884c\u6837\u5f0f\u7684\u5f00\u53d1\u3002"),(0,s.kt)("h2",{id:"\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f"},"\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f"),(0,s.kt)("h3",{id:"\u4ec0\u4e48\u662f\u5185\u7f6e\u6837\u5f0f"},"\u4ec0\u4e48\u662f\u5185\u7f6e\u6837\u5f0f"),(0,s.kt)("p",null,"\u5728 Modern.js \u4e2d\uff0c\u5bf9\u4e8e\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"src")," \u76ee\u5f55\u4e0b\u5b58\u5728\u7684\u6837\u5f0f\u6587\u4ef6\u79f0\u4e3a",(0,s.kt)("strong",{parentName:"p"},"\u5185\u7f6e\u6837\u5f0f"),"\u3002"),(0,s.kt)("p",null,"\u5728 Modern.js \u4e2d\u63a8\u8350\u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u76f4\u63a5\u5728\u7ec4\u4ef6\u7684\u4ee3\u7801\u6587\u4ef6\uff08",(0,s.kt)("inlineCode",{parentName:"p"},".(j|t)sx"),")\uff09\u4e2d\u5bfc\u5165\u5b83\u4eec\u3002\u4f8b\u5982\u5f00\u53d1\u4e00\u4e2a ",(0,s.kt)("inlineCode",{parentName:"p"},"Button")," \u7ec4\u4ef6\uff0c\u5305\u542b\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"./src/button.tsx"),"\uff1a\u5305\u542b\u7ec4\u4ef6\u7684\u903b\u8f91\u5185\u5bb9\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"./src/button.css"),"\uff1a\u5305\u542b\u7ec4\u4ef6\u7684\u5185\u7f6e\u6837\u5f0f\u3002")),(0,s.kt)("p",null,"\u90a3\u4e48\u53ef\u4ee5\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"./src/button.tsx")," \u6587\u4ef6\u589e\u52a0\u5982\u4e0b\u4ee3\u7801\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"Button")," \u7ec4\u4ef6\u589e\u52a0\u6837\u5f0f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import './button.css';\n")),(0,s.kt)("h3",{id:"\u4ec0\u4e48\u662f\u72ec\u7acb\u6837\u5f0f"},"\u4ec0\u4e48\u662f\u72ec\u7acb\u6837\u5f0f"),(0,s.kt)("p",null,"\u5728 Modern.js \u4e2d\uff0c\u5bf9\u4e8e\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"styles")," \u76ee\u5f55\u4e0b\u5b58\u5728\u7684\u6837\u5f0f\u6587\u4ef6\u79f0\u4e3a ",(0,s.kt)("strong",{parentName:"p"},"\u72ec\u7acb\u6837\u5f0f"),"\u3002"),(0,s.kt)("p",null,"\u5728 Modern.js \u4e2d\u72ec\u7acb\u6837\u5f0f\u7684\u4f7f\u7528\u65b9\u5f0f\u6709\u4ee5\u4e0b\u4e24\u79cd\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"\u5728\u7ec4\u4ef6\u9700\u8981\u6309\u9700\u52a0\u8f7d\u7684\u60c5\u51b5\u4e0b\uff0c\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"li"},"babel-plugin-import")," \u5bfc\u5165\u72ec\u7acb\u6837\u5f0f\u7684\u4ea7\u7269\u3002"),(0,s.kt)("li",{parentName:"ul"},"\u5728\u5e94\u7528\u9879\u76ee\u4e2d\u6216\u5176\u4ed6\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\uff0c\u624b\u52a8\u5bfc\u5165\u7ec4\u4ef6\u7684\u72ec\u7acb\u6837\u5f0f\u7684\u4ea7\u7269\u3002")),(0,s.kt)("p",null,"\u4f8b\u5982 ",(0,s.kt)("inlineCode",{parentName:"p"},"Button")," \u7ec4\u4ef6\u5305\u542b\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"./src/button.tsx"),"\uff1a\u5305\u542b\u7ec4\u4ef6\u7684\u903b\u8f91\u5185\u5bb9\u3002"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"./styles/button.css"),"\uff1a\u5305\u542b\u7ec4\u4ef6\u7684\u72ec\u7acb\u6837\u5f0f\u3002")),(0,s.kt)("p",null,"\u5728\u4e00\u4e2a\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"Button")," \u7ec4\u4ef6\u7684\u5e94\u7528\u9879\u76ee\u4e2d\uff0c\u6709\u5982\u4e0b\u4ee3\u7801\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx",title:"App.tsx"},"import Button from 'button';\n")),(0,s.kt)("p",null,"\u90a3\u4e48\u53ef\u4ee5\u589e\u52a0\u4ee5\u4e0b\u4ee3\u7801\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"Button")," \u7ec4\u4ef6\u589e\u52a0\u6837\u5f0f\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=App.tsx {2}",title:"App.tsx","{2}":!0},"import Button from 'button';\nimport 'button/dist/styles/button.css';\n")),(0,s.kt)("p",null,"\u6216\u8005\u4e3a\u5e94\u7528\u9879\u76ee\u7684 Babel \u914d\u7f6e\u589e\u52a0 ",(0,s.kt)("inlineCode",{parentName:"p"},"babel-plugin-import")," \u63d2\u4ef6\uff0c\u5e76\u589e\u52a0\u4ee5\u4e0b\u914d\u7f6e\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},"{\n  libraryName: \"button\",\n  customName: () => {\n    return 'button/dist/styles/button.css';\n  }\n}\n")),(0,s.kt)("h3",{id:"\u5f00\u53d1\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u6ce8\u610f\u70b9"},"\u5f00\u53d1\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u6ce8\u610f\u70b9"),(0,s.kt)("p",null,"\u5728\u5f00\u53d1\u5185\u7f6e\u6837\u5f0f\u548c\u72ec\u7acb\u6837\u5f0f\u7684\u65f6\u5019\uff0c\u6709\u4e9b\u9650\u5236\u9700\u8981\u6ce8\u610f\u3002"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"\u9996\u5148\u72ec\u7acb\u6837\u5f0f\u4e0e\u5185\u7f6e\u6837\u5f0f\u4e0d\u53ef\u4ee5\u76f8\u4e92\u4f7f\u7528\uff0c\u5373\u4e0d\u53ef\u4ee5\u5728\u5185\u7f6e\u6837\u5f0f\u91cc\u5f15\u7528\u72ec\u7acb\u6837\u5f0f\u7684\u4ee3\u7801\uff0c\u4e5f\u4e0d\u53ef\u4ee5\u5728\u72ec\u7acb\u6837\u5f0f\u4e2d\u5f15\u7528\u5185\u7f6e\u6837\u5f0f\u7684\u4ee3\u7801\u3002"),(0,s.kt)("li",{parentName:"ol"},"\u5176\u6b21\u72ec\u7acb\u6837\u5f0f\u6587\u4ef6\u4e0d\u53ef\u4ee5\u5728 ",(0,s.kt)("inlineCode",{parentName:"li"},"src")," \u76ee\u5f55\u4e0b\u7684 JS(X)\u3001TS(X) \u6587\u4ef6\u4e2d\u5f15\u7528\uff0c\u56e0\u4e3a\u9700\u8981\u6837\u5f0f\u4e0e\u903b\u8f91\u5206\u79bb\uff0c\u56e0\u6b64\u4f1a\u9650\u5236\u8fd9\u6837\u7684\u4f7f\u7528\u65b9\u5f0f\u3002")),(0,s.kt)("h3",{id:"\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u6784\u5efa\u4ea7\u7269"},"\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u6784\u5efa\u4ea7\u7269"),(0,s.kt)("p",null,"\u5728\u6837\u5f0f\u7f16\u8bd1\u6784\u5efa\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5185\u7f6e\u6837\u5f0f\u4e0e\u72ec\u7acb\u6837\u5f0f\u7684\u5904\u7406\u65b9\u5f0f\u5e76\u4e0d\u76f8\u540c\u3002"),(0,s.kt)("h4",{id:"\u5bf9\u4e8e\u5185\u7f6e\u6837\u5f0f\u7684\u6784\u5efa"},"\u5bf9\u4e8e\u5185\u7f6e\u6837\u5f0f\u7684\u6784\u5efa"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u4e0d\u4f1a\u5bf9\u5185\u7f6e\u6837\u5f0f\u6587\u4ef6\u8fdb\u884c\u7f16\u8bd1\u5904\u7406\uff08\u5c06\u5904\u7406\u6837\u5f0f\u7684\u5de5\u4f5c\u4ea4\u7ed9\u4f7f\u7528\u7ec4\u4ef6\u7684\u73af\u5883\uff09"),"\uff0c\u5982\u679c\u9700\u8981\u5bf9\u5185\u7f6e\u6837\u5f0f\u8fdb\u884c\u7f16\u8bd1\u5904\u7406\uff0c\u5219\u53ef\u4ee5\u901a\u8fc7 ",(0,s.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u8fdb\u884c\u914d\u7f6e\u3002"),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"\u5177\u4f53\u914d\u7f6e\u65b9\u5f0f\uff0c\u53ef\u4ee5\u9605\u8bfb API ",(0,s.kt)("a",{parentName:"p",href:"/docs/apis/module/config/output/import-style"},"output.importStyle"))),(0,s.kt)("p",null,"\u5185\u7f6e\u6837\u5f0f\u7684\u6784\u5efa\u4ea7\u7269\u7684\u8f93\u51fa\u4f4d\u7f6e\u4f4d\u4e8e ",(0,s.kt)("inlineCode",{parentName:"p"},"dist/js/styles/")," \u76ee\u5f55\u4e0b\uff0c\u8fd9\u4e0e\u72ec\u7acb\u6837\u5f0f\u6784\u5efa\u4ea7\u7269\u7684\u4f4d\u7f6e\u4e0d\u540c\u3002"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"dist/js/styles")," \u8def\u5f84\u4e2d\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"dist"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"js"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"styles")," \u90fd\u53ef\u4ee5\u5206\u522b\u901a\u8fc7 ",(0,s.kt)("a",{parentName:"p",href:"/docs/apis/module/config/output/path"},"output.path"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"/docs/apis/module/config/output/js-path"},"output.jsPath"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"/docs/apis/module/config/output/assets-path"},"output.assetsPath")," \u914d\u7f6e\u8fdb\u884c\u4fee\u6539\u3002"))),(0,s.kt)("p",null,"\u5982\u679c\u5728\u7ec4\u4ef6\u6587\u4ef6",(0,s.kt)("inlineCode",{parentName:"p"},".(t|j)sx")," \u4e2d\u5f15\u7528\u8fd9\u4e9b\u6587\u4ef6\uff0c\u90a3\u4e48\u5728\u6784\u5efa\u6210\u529f\u540e\u4f1a\u4fee\u6539",(0,s.kt)("strong",{parentName:"p"},"\u5bfc\u5165\u5185\u7f6e\u6837\u5f0f\u6587\u4ef6\u7684\u8def\u5f84"),"\uff0c\u5c06\u8def\u5f84\u6307\u5411 ",(0,s.kt)("inlineCode",{parentName:"p"},"dist/js/styles/*"),"\u76ee\u5f55\u4e0b\u5185\u7f6e\u6837\u5f0f\u6587\u4ef6\u7684\u4ea7\u7269\u3002"),(0,s.kt)("p",null,"\u4f8b\u5982\u4e00\u4e2a\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u6709\u4ee5\u4e0b\u6587\u4ef6\uff1a"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"./src/index.ts")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"./src/index.css"))),(0,s.kt)("p",null,"\u5176\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"./src/index.ts")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import './index.css';\n\nexport default function () {\n  return 'hello world';\n}\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"./src/index.css")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-css"},".a {\n  color: red;\n  & .b {\n    color: blue;\n  }\n}\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u53ef\u4ee5\u5728 CSS \u6587\u4ef6\u4e2d\u4f7f\u7528\u5d4c\u5957\u89c4\u5219\uff0c\u662f\u56e0\u4e3a\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u9ed8\u8ba4\u652f\u6301 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/csstools/postcss-nesting"},"postcss-nesting")," \u529f\u80fd\u3002"))),(0,s.kt)("p",null,"\u5728\u6267\u884c\u6784\u5efa\u547d\u4ee4 ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm run build")," \u6784\u5efa\u547d\u4ee4\u540e\uff0c\u4f1a\u770b\u5230 ",(0,s.kt)("inlineCode",{parentName:"p"},"dist")," \u6784\u5efa\u4ea7\u7269\u76ee\u5f55\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 js\n\u2502   \u251c\u2500\u2500 modern\n\u2502   \u2502   \u2514\u2500\u2500 index.js\n\u2502   \u251c\u2500\u2500 node\n\u2502   \u251c\u2500\u2500 styles\n\u2502   \u2502   \u2514\u2500\u2500 index.css\n\u2502   \u2514\u2500\u2500 treeshaking\n\u2514\u2500\u2500 types\n")),(0,s.kt)("p",null,"\u5176\u4e2d ",(0,s.kt)("inlineCode",{parentName:"p"},"dist/js/modern/index.js")," \u7684\u6587\u4ef6\u5185\u5bb9\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"import \"../styles/index.css\";\nexport default function () {\n  return 'hello world';\n}\n")),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u5173\u4e8e\u4e3a\u4f55\u5b58\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"dist/js/modern"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"dist/js/treeshaking"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"dist/js/node")," \u76ee\u5f55\uff0c\u8bf7\u9605\u8bfb ",(0,s.kt)("a",{parentName:"p",href:"/docs/guides/features/modules/build#%E6%9E%84%E5%BB%BA-jsxtsx-%E6%BA%90%E7%A0%81"},"\u6784\u5efa\u53ef\u590d\u7528\u6a21\u5757\u2014\u2014\u6784\u5efa JS(X)\u3001TS(X) \u6e90\u7801")))),(0,s.kt)("h4",{id:"\u5bf9\u4e8e\u72ec\u7acb\u6837\u5f0f\u7684\u6784\u5efa"},"\u5bf9\u4e8e\u72ec\u7acb\u6837\u5f0f\u7684\u6784\u5efa"),(0,s.kt)("p",null,"\u72ec\u7acb\u6837\u5f0f\u5728\u7f16\u8bd1\u6784\u5efa\u8fc7\u7a0b\u4e2d\u4f1a\u5bf9\u6837\u5f0f\u8fdb\u884c\u7f16\u8bd1\u5904\u7406\u3002\u5176\u6784\u5efa\u4ea7\u7269\u7684\u8f93\u51fa\u8def\u5f84\u4e3a ",(0,s.kt)("inlineCode",{parentName:"p"},"dist/styles"),"\u3002"),(0,s.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"\u5728 ",(0,s.kt)("inlineCode",{parentName:"p"},"dist/styles")," \u8def\u5f84\u4e2d\uff0c",(0,s.kt)("inlineCode",{parentName:"p"},"dist"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"styles")," \u90fd\u53ef\u4ee5\u5206\u522b\u901a\u8fc7",(0,s.kt)("a",{parentName:"p",href:"/docs/apis/module/config/output/path"},"output.path"),"\u3001",(0,s.kt)("a",{parentName:"p",href:"/docs/apis/module/config/output/assets-path"},"output.assetsPath")," \u914d\u7f6e\u8fdb\u884c\u4fee\u6539\u3002"))),(0,s.kt)("p",null,"\u4f8b\u5982\u4e3a\u4e0a\u4e00\u8282\u4e2d\u7684\u7ec4\u4ef6\u65b0\u589e ",(0,s.kt)("inlineCode",{parentName:"p"},"styles/index.css")," \u72ec\u7acb\u6837\u5f0f\u6587\u4ef6\uff0c\u90a3\u4e48\u5728\u6267\u884c\u6784\u5efa\u547d\u4ee4 ",(0,s.kt)("inlineCode",{parentName:"p"},"pnpm run build")," \u540e\uff0c\u4f1a\u770b\u5230\u6784\u5efa\u4ea7\u7269\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 js\n\u2502   \u251c\u2500\u2500 modern\n\u2502   \u251c\u2500\u2500 node\n\u2502   \u251c\u2500\u2500 styles\n\u2502   \u2514\u2500\u2500 treeshaking\n\u251c\u2500\u2500 styles\n\u2502   \u2514\u2500\u2500 index.css\n\u2514\u2500\u2500 types\n")),(0,s.kt)("h2",{id:"\u4f7f\u7528-css-\u8fdb\u884c\u6837\u5f0f\u5f00\u53d1"},"\u4f7f\u7528 CSS \u8fdb\u884c\u6837\u5f0f\u5f00\u53d1"),(0,s.kt)("p",null,"\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u9ed8\u8ba4\u652f\u6301\u5bf9 CSS \u4ee3\u7801\u7684\u5f00\u53d1\uff0c\u4f7f\u7528 ",(0,s.kt)("strong",{parentName:"p"},"PostCSS")," \u5bf9 CSS \u4ee3\u7801\u8fdb\u884c\u7f16\u8bd1\u5904\u7406\u3002"),(0,s.kt)("h2",{id:"\u4f7f\u7528-less-\u8fdb\u884c\u6837\u5f0f\u5f00\u53d1"},"\u4f7f\u7528 Less \u8fdb\u884c\u6837\u5f0f\u5f00\u53d1"),(0,s.kt)("p",null,"\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\u5982\u679c\u9700\u8981\u4f7f\u7528 Less \u5f00\u53d1\u6837\u5f0f\uff0c\u5219\u9700\u8981\u901a\u8fc7\u5fae\u751f\u6210\u5668\u5f00\u542f\u5bf9 Less \u7684\u529f\u80fd\u652f\u6301\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"pnpm run new\n")),(0,s.kt)("p",null,"\u7136\u540e\u6309\u7167\u5982\u4e0b\u9009\u62e9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528 Less \u652f\u6301\n")),(0,s.kt)("p",null,"\u6b64\u65f6\u5fae\u751f\u6210\u5668\u5c06\u4e3a\u6211\u4eec\u5b89\u88c5\u76f8\u5e94\u7684\u4f9d\u8d56\uff0c\u5f53\u5b89\u88c5\u6210\u529f\u540e\uff0c\u4fbf\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"*.less")," \u6587\u4ef6\u8fdb\u884c\u6837\u5f0f\u5f00\u53d1\u3002"),(0,s.kt)("h2",{id:"\u4f7f\u7528-scsssass-\u8fdb\u884c\u6837\u5f0f\u5f00\u53d1"},"\u4f7f\u7528 SCSS/Sass \u8fdb\u884c\u6837\u5f0f\u5f00\u53d1"),(0,s.kt)("p",null,"\u5728\u53ef\u590d\u7528\u6a21\u5757\u9879\u76ee\u4e2d\u5982\u679c\u9700\u8981\u4f7f\u7528 SCSS/Sass \u5f00\u53d1\u6837\u5f0f\uff0c\u5219\u9700\u8981\u901a\u8fc7\u5fae\u751f\u6210\u5668\u5f00\u542f\u5bf9 Sass \u7684\u529f\u80fd\u652f\u6301\u3002"),(0,s.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"pnpm run new\n")),(0,s.kt)("p",null,"\u7136\u540e\u6309\u7167\u5982\u4e0b\u9009\u62e9\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"? \u8bf7\u9009\u62e9\u4f60\u60f3\u8981\u7684\u64cd\u4f5c \u542f\u7528\u53ef\u9009\u529f\u80fd\n? \u542f\u7528\u53ef\u9009\u529f\u80fd \u542f\u7528 Sass \u652f\u6301\n")),(0,s.kt)("p",null,"\u6b64\u65f6\u5fae\u751f\u6210\u5668\u5c06\u4e3a\u6211\u4eec\u5b89\u88c5\u76f8\u5e94\u7684\u4f9d\u8d56\uff0c\u5f53\u5b89\u88c5\u6210\u529f\u540e\uff0c\u4fbf\u53ef\u4ee5\u5728\u9879\u76ee\u4e2d\u4f7f\u7528 ",(0,s.kt)("inlineCode",{parentName:"p"},"*.sass"),"\u3001",(0,s.kt)("inlineCode",{parentName:"p"},"*.scss")," \u6587\u4ef6\u8fdb\u884c\u6837\u5f0f\u5f00\u53d1\u3002"))}m.isMDXComponent=!0}}]);