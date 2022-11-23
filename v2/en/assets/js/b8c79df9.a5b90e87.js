"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[751],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(52983);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,v=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(v,s(s({ref:t},c),{},{components:n})):a.createElement(v,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6015:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(52983),r=n(14517);const l="tabItem_cygK";function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:n},t)}},75890:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(18249),r=n(52983),l=n(14517),s=n(27250),o=n(62209),i=n(61748),p=n(34333);const c="tabList_N6AO",u="tabItem_Wt3n";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:v,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,o.l)(g,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==h&&!g.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:j}=(0,i.U)(),[w,N]=(0,r.useState)(h),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,p.o5)();if(null!=v){const e=y[v];null!=e&&e!==w&&g.some((t=>t.value===e))&&N(e)}const T=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==w&&(x(t),N(a),null!=v&&j(v,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},g.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},s,{className:(0,l.Z)("tabs__item",u,null==s?void 0:s.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},87408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(18249),r=(n(52983),n(44993)),l=n(75890),s=n(6015);const o={title:"\u521b\u5efa\u6700\u7b80\u5355\u7684\u5e94\u7528\u5de5\u7a0b"},i=void 0,p={unversionedId:"tutorials/first-app/c01-getting-started/1.2-minimal-mwa",id:"tutorials/first-app/c01-getting-started/1.2-minimal-mwa",title:"\u521b\u5efa\u6700\u7b80\u5355\u7684\u5e94\u7528\u5de5\u7a0b",description:"\u5f00\u59cb\u521b\u5efa",source:"@site/../../packages/toolkit/main-doc/zh/tutorials/first-app/c01-getting-started/1.2-minimal-mwa.md",sourceDirName:"tutorials/first-app/c01-getting-started",slug:"/tutorials/first-app/c01-getting-started/1.2-minimal-mwa",permalink:"/v2/en/docs/tutorials/first-app/c01-getting-started/1.2-minimal-mwa",draft:!1,tags:[],version:"current",frontMatter:{title:"\u521b\u5efa\u6700\u7b80\u5355\u7684\u5e94\u7528\u5de5\u7a0b"},sidebar:"tutorialsSidebar",previous:{title:"\u73af\u5883\u51c6\u5907",permalink:"/v2/en/docs/tutorials/first-app/c01-getting-started/1.1-prerequisites"},next:{title:"\u8c03\u8bd5\u9879\u76ee",permalink:"/v2/en/docs/tutorials/first-app/c01-getting-started/1.3-dev-command"}},c={},u=[{value:"\u5f00\u59cb\u521b\u5efa",id:"\u5f00\u59cb\u521b\u5efa",level:2},{value:"1. \u521b\u5efa\u9879\u76ee\u6839\u76ee\u5f55\u548c\u6e90\u4ee3\u7801\u76ee\u5f55",id:"1-\u521b\u5efa\u9879\u76ee\u6839\u76ee\u5f55\u548c\u6e90\u4ee3\u7801\u76ee\u5f55",level:3},{value:"2. \u5728 src \u76ee\u5f55\u4e0b\uff0c\u521b\u5efa App.jsx",id:"2-\u5728-src-\u76ee\u5f55\u4e0b\u521b\u5efa-appjsx",level:3},{value:"3. \u6dfb\u52a0\u6846\u67b6\u4f9d\u8d56",id:"3-\u6dfb\u52a0\u6846\u67b6\u4f9d\u8d56",level:3},{value:"4. \u6dfb\u52a0\u6846\u67b6\u547d\u4ee4",id:"4-\u6dfb\u52a0\u6846\u67b6\u547d\u4ee4",level:3},{value:"\u521b\u5efa\u5b8c\u6210",id:"\u521b\u5efa\u5b8c\u6210",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:2}],d={toc:u};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5f00\u59cb\u521b\u5efa"},"\u5f00\u59cb\u521b\u5efa"),(0,r.kt)("h3",{id:"1-\u521b\u5efa\u9879\u76ee\u6839\u76ee\u5f55\u548c\u6e90\u4ee3\u7801\u76ee\u5f55"},"1. \u521b\u5efa\u9879\u76ee\u6839\u76ee\u5f55\u548c\u6e90\u4ee3\u7801\u76ee\u5f55"),(0,r.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"hello-modern")," \u7684\u9879\u76ee\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p hello-modern/src\ncd hello-modern\n")),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\u90fd\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u6267\u884c\u547d\u4ee4\u3002"),(0,r.kt)("h3",{id:"2-\u5728-src-\u76ee\u5f55\u4e0b\u521b\u5efa-appjsx"},"2. \u5728 src \u76ee\u5f55\u4e0b\uff0c\u521b\u5efa App.jsx"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch src/App.jsx\n"))),(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ni src/App.jsx\n")))),(0,r.kt)("p",null,"\u5728 App.jsx \u91cc\u9ed8\u8ba4\u5bfc\u51fa\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u4f5c\u4e3a\u5e94\u7528\u7684\u6839\u7ec4\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/App.jsx"',title:'"src/App.jsx"'},"export default function App() {\n  return <div>Hello World!</div>;\n}\n")),(0,r.kt)("h3",{id:"3-\u6dfb\u52a0\u6846\u67b6\u4f9d\u8d56"},"3. \u6dfb\u52a0\u6846\u67b6\u4f9d\u8d56"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),"\uff1a"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"macOS",label:"macOS",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"touch package.json\n"))),(0,r.kt)(s.Z,{value:"Windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ni package.json\n")))),(0,r.kt)("p",null,"\u590d\u5236\u4ee5\u4e0b\u5185\u5bb9\u5230\u6587\u4ef6\u91cc\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "hello-modern",\n  "scripts": {},\n  "dependencies": {\n    "react": "^17",\n    "react-dom": "^17",\n    "@modern-js/runtime": "^1.0.0"\n  },\n  "devDependencies": {\n    "@modern-js/app-tools": "^1.0.0"\n  }\n}\n')),(0,r.kt)("h3",{id:"4-\u6dfb\u52a0\u6846\u67b6\u547d\u4ee4"},"4. \u6dfb\u52a0\u6846\u67b6\u547d\u4ee4"),(0,r.kt)("p",null,"\u6dfb\u52a0\u672c\u7ae0\u8282\u8981\u7528\u7684 3 \u4e2a\u547d\u4ee4\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," \u7684 npm scripts \u91cc\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"scripts": {\n  "new": "modern new",\n  "dev": "modern dev",\n  "build": "modern build",\n  "start": "modern start"\n},\n')),(0,r.kt)("h2",{id:"\u521b\u5efa\u5b8c\u6210"},"\u521b\u5efa\u5b8c\u6210"),(0,r.kt)("p",null,"\u4e00\u4e2a\u57fa\u4e8e Modern.js \u6846\u67b6\u7684\u5e94\u7528\u5de5\u7a0b\uff0c\u5230\u8fd9\u91cc\u5c31\u5df2\u7ecf\u521b\u5efa\u5b8c\u6210\u4e86\u3002"),(0,r.kt)("p",null,"\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md"},".\n\u251c\u2500\u2500 src/\n\u2502   \u2514\u2500\u2500 App.jsx\n\u2514\u2500\u2500 package.json\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u7531\u4e8e Modern.js \u6846\u67b6\u7684",(0,r.kt)("strong",{parentName:"p"},"\u9ed8\u8ba4\u96f6\u914d\u7f6e\u3001\u7ea6\u5b9a\u4f18\u4e8e\u914d\u7f6e\u3001\u5f00\u7bb1\u5373\u7528\u3001\u907f\u514d\u6837\u677f\u6587\u4ef6\u3001Universal App")," \u7b49\u8bbe\u8ba1\uff0c\u5373\u4f7f\u4e0d\u501f\u52a9\u4efb\u4f55\u811a\u624b\u67b6\u3001\u751f\u6210\u5668\u3001\u9879\u76ee\u6a21\u677f\u7b49\u5de5\u5177\uff0c\u7eaf\u624b\u52a8\u642d\u5efa\u4e00\u4e2a\u9879\u76ee\uff0c\u6574\u4e2a\u8fc7\u7a0b\u4e5f\u662f\u6781\u5176\u7b80\u5355\u7684\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\n")))}m.isMDXComponent=!0}}]);