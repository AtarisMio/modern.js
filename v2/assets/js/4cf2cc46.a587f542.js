"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5621],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var i=2;i<l;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6015:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(52983),r=n(14517);const l="tabItem_cygK";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},75890:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(18249),r=n(52983),l=n(14517),s=n(27250),o=n(62209),p=n(61748),i=n(34333);const c="tabList_N6AO",u="tabItem_Wt3n";function m(e){var t;const{lazy:n,block:s,defaultValue:m,values:d,groupId:f,className:b}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===m?m:m??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:w}=(0,p.U)(),[N,T]=(0,r.useState)(g),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,i.o5)();if(null!=f){const e=h[f];null!=e&&e!==N&&v.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=j.indexOf(t),a=v[n].value;a!==N&&(O(t),T(a),null!=f&&w(f,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=j.indexOf(e.currentTarget)+1;n=j[t]??j[0];break}case"ArrowLeft":{const t=j.indexOf(e.currentTarget)-1;n=j[t]??j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},v.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>j.push(e),onKeyDown:E,onClick:x},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,s.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},93835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(18249),r=(n(52983),n(44993)),l=n(75890),s=n(6015);const o={title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5"},p=void 0,i={unversionedId:"tutorials/first-app/c04-es6-plus-and-ts/4.2-use-typescript",id:"tutorials/first-app/c04-es6-plus-and-ts/4.2-use-typescript",title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5",description:"Modern.js \u540c\u6837\u5bf9 TypeScript \u63d0\u4f9b\u4e86\u4e00\u7b49\u516c\u6c11\u3001\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c04-es6-plus-and-ts/4.2-use-typescript.md",sourceDirName:"tutorials/first-app/c04-es6-plus-and-ts",slug:"/tutorials/first-app/c04-es6-plus-and-ts/4.2-use-typescript",permalink:"/v2/docs/tutorials/first-app/c04-es6-plus-and-ts/4.2-use-typescript",draft:!1,tags:[],version:"current",frontMatter:{title:"\u4f7f\u7528 TypeScript \u8bed\u6cd5"},sidebar:"tutorialsSidebar",previous:{title:"\u4f7f\u7528 ES6+ \u8bed\u6cd5",permalink:"/v2/docs/tutorials/first-app/c04-es6-plus-and-ts/4.1-use-es6-plus"},next:{title:"\u5ba2\u6237\u7aef\u517c\u5bb9\u6027",permalink:"/v2/docs/tutorials/first-app/c04-es6-plus-and-ts/4.3-compatibility"}},c={},u=[],m={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Modern.js \u540c\u6837\u5bf9 TypeScript \u63d0\u4f9b\u4e86\u4e00\u7b49\u516c\u6c11\u3001\u5f00\u7bb1\u5373\u7528\u7684\u652f\u6301\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u5c0f\u8282\uff0c\u6211\u4eec\u5c06\u5f53\u524d\u4e3a ES6+ \u8bed\u6cd5\u7684 Demo \u4fee\u6539\u4e3a TypeScript \u8bed\u6cd5\u3002"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv src/App.jsx src/App.tsx\n\npnpm add typescript @types/react @types/react-dom @types/node -D\n\ntouch tsconfig.json\n"))),(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mv src/App.jsx src/App.tsx\n\npnpm add typescript @types/react @types/react-dom @types/node -D\n\nni tsconfig.json\n")))),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u63a5\u4e0b\u6765\u6240\u6709\u7ae0\u8282\u7684\u9879\u76ee\uff0c\u90fd\u4f1a\u4f7f\u7528 TS \u6765\u8fdb\u884c\u5f00\u53d1\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \u5185\u5bb9\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "extends": "@modern-js/tsconfig/base",\n  "compilerOptions": {\n    "declaration": false,\n    "jsx": "preserve",\n    "baseUrl": "./",\n    "paths": {\n      "@/*": ["./src/*"]\n    }\n  },\n  "include": ["src", "shared", "config"]\n}\n')),(0,r.kt)("p",null,"\u6253\u5f00 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),"\uff0c\u628a\u4ee3\u7801\u6539\u6210\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import React from 'react';\n\nconst getAvatar = (users: Array<{ name: string; email: string }>) =>\n  users.map(user => ({\n    ...user,\n    avatar: `https://avatars.dicebear.com/v2/identicon/${user.name}.svg`,\n  }));\n\nconst mockData = getAvatar([\n  { name: 'Thomas', email: 'w.kccip@bllmfbgv.dm' },\n  { name: 'Chow', email: 'f.lfqljnlk@ywoefljhc.af' },\n  { name: 'Bradley', email: 'd.wfovsqyo@gpkcjwjgb.fr' },\n  { name: 'Davis', email: '\"t.kqkoj@utlkwnpwk.nu' },\n]);\n\nfunction App() {\n  return (\n    <ul>\n      {mockData.map(({ name, avatar, email }) => (\n        <li key={name}>\n          <img src={avatar} width={60} height={60} /> ---\n          <span>{name}</span> ---\n          <span>{email}</span>\n        </li>\n      ))}\n    </ul>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u8ddf ES6+ \u7684\u4ee3\u7801\u76f8\u6bd4\u6709\u4ee5\u4e0b\u4e0d\u540c\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7531\u4e8e TS \u8fd8\u4e0d\u652f\u6301 ",(0,r.kt)("a",{parentName:"li",href:"https://babeljs.io/docs/en/babel-plugin-proposal-pipeline-operator"},"Pipeline Operator")," \u8bed\u6cd5\uff0c\u9700\u8981\u628a mockData \u7684\u751f\u6210\u8fc7\u7a0b\u6539\u6210\u666e\u901a\u7684\u51fd\u6570\u8c03\u7528\u8bed\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9700\u8981\u58f0\u660e ",(0,r.kt)("inlineCode",{parentName:"li"},"getAvatar")," \u53c2\u6570\u7684\u7c7b\u578b\u3002")),(0,r.kt)("p",null,"\u5728 VS Code \u91cc\uff0c\u628a\u9f20\u6807\u60ac\u505c\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"mockData")," \u4e0a\uff0c\u53ef\u4ee5\u770b\u5230\u5b83\u7684\u7c7b\u578b\u5df2\u7ecf\u88ab\u81ea\u52a8\u63a8\u5bfc\u51fa\u6765\u3002\u5982\u679c\u628a ",(0,r.kt)("inlineCode",{parentName:"p"},"key={name}")," \u6539\u6210 ",(0,r.kt)("inlineCode",{parentName:"p"},"key={name * 2}"),"\uff0c\u53ef\u4ee5\u770b\u5230 TS \u7684\u62a5\u9519\u3002"),(0,r.kt)("p",null,"\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"pnpm run dev"),"\uff0c\u53ef\u4ee5\u770b\u5230\u4e00\u6837\u7684\u8fd0\u884c\u7ed3\u679c\u3002"),(0,r.kt)("admonition",{title:"\u6ce8",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u7b80\u5355\u3001\u5f00\u7bb1\u5373\u7528\u7684\u65b9\u5f0f\uff0c\u662f\u5728\u521b\u5efa\u9879\u76ee\u7684\u65f6\u5019\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u53d1\u8bed\u8a00"),"\u9009\u62e9 TS\uff0c\u4f1a\u81ea\u52a8\u751f\u6210\u4e0a\u8ff0\u6837\u677f\u4ee3\u7801\uff0c\u6e90\u4ee3\u7801\u6587\u4ef6\u4e5f\u4f1a\u81ea\u52a8\u9ed8\u8ba4\u91c7\u7528 .ts \u548c .tsx\u3002")),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u672c\u5c0f\u8282\u7684\u4ee3\u7801\u53ef\u4ee5\u5728",(0,r.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/tutorials/c04/hello-modern-2"},"\u8fd9\u91cc\u67e5\u770b"),"\u3002")))}d.isMDXComponent=!0}}]);