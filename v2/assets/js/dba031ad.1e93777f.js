"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8027],{44993:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(i,".").concat(m)]||d[m]||c[m]||p;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<p;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78979:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var a=n(18249),r=(n(52983),n(44993));const p={sidebar_label:"ssg"},o="output.ssg",l={unversionedId:"configure/app/output/ssg",id:"configure/app/output/ssg",title:"output.ssg",description:"* \u7c7b\u578b\uff1a boolean | object | function",source:"@site/docs/configure/app/output/ssg.md",sourceDirName:"configure/app/output",slug:"/configure/app/output/ssg",permalink:"/docs/configure/app/output/ssg",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"ssg"},sidebar:"configsAppSidebar",previous:{title:"polyfill",permalink:"/docs/configure/app/output/polyfill"},next:{title:"templateParametersByEntries",permalink:"/docs/configure/app/output/template-parameters-by-entires"}},i={},s=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5355\u5165\u53e3",id:"\u5355\u5165\u53e3",level:3},{value:"\u591a\u5165\u53e3",id:"\u591a\u5165\u53e3",level:3},{value:"\u914d\u7f6e\u8def\u7531",id:"\u914d\u7f6e\u8def\u7531",level:3},{value:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a",id:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a",level:3},{value:"\u6dfb\u52a0\u52a8\u6001\u8def\u7531\u53c2\u6570",id:"\u6dfb\u52a0\u52a8\u6001\u8def\u7531\u53c2\u6570",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"outputssg"},"output.ssg"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"boolean")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"object")," | ",(0,r.kt)("inlineCode",{parentName:"li"},"function")),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,r.kt)("p",null,"\u5f00\u542f",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\u6216",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531")," SSG \u529f\u80fd\u7684\u914d\u7f6e\u3002"),(0,r.kt)("admonition",{title:"\u5ba2\u6237\u7aef\u8def\u7531",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u76f8\u5173\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/first-app/c08-client-side-routing/8.1-code-based-routing"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\u6216",(0,r.kt)("a",{parentName:"p",href:"/docs/tutorials/first-app/c08-client-side-routing/8.2-file-based-routing"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u3002")),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("h3",{id:"\u5355\u5165\u53e3"},"\u5355\u5165\u53e3"),(0,r.kt)("p",null,"\u5f53\u8be5\u914d\u7f6e\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," \u65f6\uff0c\u5c06\u4f1a\u9ed8\u8ba4\u5f00\u542f\u6240\u6709\u5165\u53e3\u7684 SSG \u529f\u80fd\u3002"),(0,r.kt)("p",null,"\u5bf9",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\u800c\u8a00\uff0c\u5c06\u4f1a\u6e32\u67d3\u5165\u53e3\u8def\u7531\u3002\u5bf9",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u800c\u8a00\uff0c\u5c06\u4f1a\u6e32\u67d3\u5165\u53e3\u4e2d\u6bcf\u4e00\u6761\u5ba2\u6237\u7aef\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/")," \u76ee\u5f55\u4e0b\u6709\u4ee5\u4e0b\u6ee1\u8db3",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u7684\u6587\u4ef6\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 pages/\n\u2502\xa0\xa0 \u251c\u2500\u2500 user/\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 info.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 home.tsx\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.tsx\n\u251c\u2500\u2500 .eslintrc.json\n")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.js.config")," \u4e2d\u505a\u4ee5\u4e0b\u8bbe\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    ssg: true,\n  },\n};\n")),(0,r.kt)("p",null,"\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build")," \u6784\u5efa\u5e94\u7528\u540e\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"dist/")," \u76ee\u5f55\u5c06\u4f1a\u751f\u6210\u4e09\u5f20 HTML \u5206\u522b\u5bf9\u5e94\u4e09\u6761\u8def\u7531\uff08\u4e0d\u5f00\u542f SSG \u65f6\u53ea\u6709\u4e00\u5f20 HTML \u5bf9\u5e94\u4e3b\u5165\u53e3\uff09\uff0c\u5e76\u4e14\u53ef\u4ee5\u770b\u5230\u6240\u6709 HTML \u90fd\u5df2\u7ecf\u662f\u6e32\u67d3\u4e4b\u540e\u7684\u3002"),(0,r.kt)("p",null,"\u800c\u4f8b\u5982\u4e0b\u9762\u7684",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="App.tsx"',title:'"App.tsx"'},'import { Switch, Route } from \'@modern-js/runtime/router\';\n\nexport default () => (\n  <Switch>\n    <Route path="/" exact={true}>\n      <div>Home</div>\n    </Route>\n    <Route path="/foo" exact={true}>\n      <div>Foo</div>\n    </Route>\n  </Switch>\n);\n')),(0,r.kt)("p",null,"\u540c\u6837\u4f7f\u7528\u4e0a\u9762\u7684\u914d\u7f6e\uff0c\u5728\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm build")," \u540e\uff0c\u53ea\u6709\u5165\u53e3\u8def\u7531 ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," \u4f1a\u751f\u6210\u6e32\u67d3\u540e\u7684 HTML\u3002"),(0,r.kt)("h3",{id:"\u591a\u5165\u53e3"},"\u591a\u5165\u53e3"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"output.ssg")," \u4e5f\u53ef\u4ee5\u6309\u7167\u5165\u53e3\u914d\u7f6e\uff0c\u914d\u7f6e\u751f\u6548\u7684\u89c4\u5219\u540c\u6837\u7531\u5165\u53e3\u8def\u7531\u65b9\u5f0f\u51b3\u5b9a\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 src/\n\u2502\xa0\xa0 \u251c\u2500\u2500 contacts/\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 App.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 landing-page/\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 pages/\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 [user].tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 docs.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index.tsx\n")),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u6240\u6709\u7ea6\u5b9a\u5f0f\u8def\u7531\u7684\u5165\u53e3\uff0c\u5728\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"output.ssg")," \u914d\u7f6e\u540e\u90fd\u4f1a\u5728\u6784\u5efa\u9636\u6bb5\u6e32\u67d3\uff0c\u53ef\u4ee5\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," \u6765\u53d6\u6d88\u6307\u5b9a\u5165\u53e3\u7684\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u4f8b\u5982\u53d6\u6d88\u4e0a\u8ff0 landing-page \u5165\u53e3\u5728\u6784\u5efa\u65f6\u7684\u6e32\u67d3\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    ssg: {\n      contacts: true,\n      'landing-page': false,\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"\u914d\u7f6e\u8def\u7531"},"\u914d\u7f6e\u8def\u7531"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u5185\u5bb9\u4e2d\u63d0\u5230\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u81ea\u63a7\u5f0f\u8def\u7531"),"\u9ed8\u8ba4\u53ea\u4f1a\u5f00\u542f\u5165\u53e3\u8def\u7531\u7684 SSG \u914d\u7f6e\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"output.ssg")," \u4e2d\u8bbe\u7f6e\u5177\u4f53\u7684\u8def\u7531\uff0c\u544a\u77e5 Modern.js \u5f00\u542f\u8fd9\u4e9b\u5ba2\u6237\u7aef\u8def\u7531\u7684 SSG \u529f\u80fd\u3002\u4f8b\u5982\u4e0a\u8ff0 ",(0,r.kt)("inlineCode",{parentName:"p"},"contacts/App.tsx")," \u7684\u6587\u4ef6\u5185\u5bb9\u4e3a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="contacts/App.tsx"',title:'"contacts/App.tsx"'},'import { Switch, Route } from \'@modern-js/runtime/router\';\n\nexport default () => (\n  <Switch>\n    <Route path="/" exact={true}>\n      <div>Home</div>\n    </Route>\n    <Route path="/foo" exact={true}>\n      <div>Foo</div>\n    </Route>\n  </Switch>\n);\n')),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"modern.config.js")," \u4e2d\u8fd9\u6837\u8bbe\u7f6e\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"/foo")," \u8def\u7531\u4e5f\u4f1a\u5f00\u542f SSG \u529f\u80fd\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    ssg: {\n      contacts: {\n        routes: ['/', '/foo'],\n      },\n    },\n  },\n};\n")),(0,r.kt)("p",null,"Modern.js \u5c06\u4f1a\u81ea\u52a8\u6839\u636e\u5165\u53e3\u62fc\u63a5\u5b8c\u6574\u7684 URL \u5e76\u4ea4\u7ed9 SSG \u63d2\u4ef6\u5b8c\u6210\u6e32\u67d3\u3002"),(0,r.kt)("p",null,"\u4e5f\u53ef\u4ee5\u4e3a\u5177\u4f53\u5165\u53e3\u6216\u8def\u7531\u914d\u7f6e\u8bf7\u6c42\u5934\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    ssg: {\n      contacts: {\n        headers: {},\n        routes: [\n          '/',\n          {\n            url: '/foo',\n            headers: {},\n          },\n        ],\n      },\n    },\n  },\n};\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8def\u7531\u4e2d\u8bbe\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"headers")," \u4f1a\u8986\u76d6\u5165\u53e3\u4e2d\u8bbe\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"headers"),"\u3002")),(0,r.kt)("h3",{id:"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"},"\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u4e5f\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u7684\u65b9\u5f0f\u6765\u5f00\u542f\u6307\u5b9a\u8def\u7531\u7684 SSG\u3002"),(0,r.kt)("p",null,"\u4f46\u56e0\u4e3a\u9ed8\u8ba4\u884c\u4e3a\u7684\u4e0d\u540c\uff0c\u8fd9\u91cc\u4e3a",(0,r.kt)("strong",{parentName:"p"},"\u7ea6\u5b9a\u5f0f\u8def\u7531"),"\u63d0\u4f9b\u4e86\u53e6\u4e00\u4e2a\u5b57\u6bb5\uff0c\u7528\u6765\u963b\u6b62\u9ed8\u8ba4\u7684 SSG \u884c\u4e3a\u3002"),(0,r.kt)("p",null,"\u4f8b\u5982\u4ee5\u4e0b\u76ee\u5f55\u7ed3\u6784\uff0c\u9664\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs4")," \u5916\u7684\u6240\u6709 landing-page \u5165\u53e3\u4e2d\u7684\u8def\u7531\u90fd\u5f00\u542f SSG\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},".\n\u251c\u2500\u2500 src/\n\u2502\xa0\xa0 \u251c\u2500\u2500 contacts/\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 App.tsx\n\u2502\xa0\xa0 \u251c\u2500\u2500 landing-page/\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 pages/\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 [user].tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 docs.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 docs1.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 docs2.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 docs3.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u251c\u2500\u2500 docs4.tsx\n\u2502\xa0\xa0 \u2502\xa0\xa0     \u2514\u2500\u2500 index.tsx\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u8fd9\u6837\u8bbe\u7f6e\uff0c\u7981\u7528\u67d0\u4e00\u6761\u5ba2\u6237\u7aef\u8def\u7531\u7684\u9ed8\u8ba4\u884c\u4e3a\uff1a"),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u8be5\u914d\u7f6e\u4ec5\u5728\u6e32\u67d3\u52a8\u6001\u8def\u5f84\u7684\u7ea6\u5b9a\u5f0f\u8def\u7531\u65f6\u4f7f\u7528\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    'landing-page': {\n      preventDefault: ['/docs4'],\n    },\n  },\n};\n")),(0,r.kt)("h3",{id:"\u6dfb\u52a0\u52a8\u6001\u8def\u7531\u53c2\u6570"},"\u6dfb\u52a0\u52a8\u6001\u8def\u7531\u53c2\u6570"),(0,r.kt)("p",null,"\u90e8\u5206\u8def\u7531\u53ef\u80fd\u662f\u52a8\u6001\u7684\uff0c\u4f8b\u5982\u81ea\u63a7\u5f0f\u8def\u7531\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"/user/:id")," \u6216\u662f\u7ea6\u5b9a\u5f0f\u8def\u7531\u4e2d ",(0,r.kt)("inlineCode",{parentName:"p"},"user/[id].ts")," \u6587\u4ef6\u751f\u6210\u7684\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"output.ssg")," \u4e2d\u914d\u7f6e\u5177\u4f53\u7684\u53c2\u6570\uff0c\u6e32\u67d3\u6307\u5b9a\u53c2\u6570\u7684\u8def\u7531\uff0c\u4f8b\u5982\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  output: {\n    ssg: {\n      'landing-page': {\n        routes: [\n          {\n            url: '/user/:id',\n            params: [\n              {\n                id: 'modernjs',\n              },\n            ],\n          },\n        ],\n      },\n    },\n  },\n};\n")))}c.isMDXComponent=!0}}]);