"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[9891],{57522:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(29901);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),s=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||r;return n?o.createElement(k,i(i({ref:t},u),{},{components:n})):o.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},99854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=n(18249),a=(n(29901),n(57522));const r={sidebar_position:1,title:"\u5feb\u901f\u4e0a\u624b"},i=void 0,l={unversionedId:"guides/features/model/quick-start",id:"guides/features/model/quick-start",title:"\u5feb\u901f\u4e0a\u624b",description:"Reduck \u662f Modern.js \u56e2\u961f\u5f00\u53d1\u7684\u9075\u5faa MVC \u6a21\u5f0f\u7684\u72b6\u6001\u7ba1\u7406\u5e93\uff0c\u5e95\u5c42\u72b6\u6001\u5b58\u50a8\u57fa\u4e8e Redux \u5b9e\u73b0\uff0c\u540c\u65f6\u63d0\u4f9b\u66f4\u9ad8\u5c42\u7ea7\u7684\u62bd\u8c61\uff0c\u5e76\u5b8c\u5168\u517c\u5bb9 Redux \u751f\u6001\u3002",source:"@site/docs/guides/features/model/quick-start.md",sourceDirName:"guides/features/model",slug:"/guides/features/model/quick-start",permalink:"/docs/guides/features/model/quick-start",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u5feb\u901f\u4e0a\u624b"},sidebar:"guidesSidebar",previous:{title:"\u5b9a\u4e49 head \u4fe1\u606f",permalink:"/docs/guides/features/runtime/head"},next:{title:"\u521b\u5efa Model",permalink:"/docs/guides/features/model/define-model"}},d={},s=[{value:"\u6838\u5fc3\u6982\u5ff5",id:"\u6838\u5fc3\u6982\u5ff5",level:2},{value:"\u57fa\u672c\u7528\u6cd5",id:"\u57fa\u672c\u7528\u6cd5",level:2}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/reduck"},"Reduck")," \u662f Modern.js \u56e2\u961f\u5f00\u53d1\u7684\u9075\u5faa MVC \u6a21\u5f0f\u7684\u72b6\u6001\u7ba1\u7406\u5e93\uff0c\u5e95\u5c42\u72b6\u6001\u5b58\u50a8\u57fa\u4e8e ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/"},"Redux")," \u5b9e\u73b0\uff0c\u540c\u65f6\u63d0\u4f9b\u66f4\u9ad8\u5c42\u7ea7\u7684\u62bd\u8c61\uff0c\u5e76\u5b8c\u5168\u517c\u5bb9 Redux \u751f\u6001\u3002"),(0,a.kt)("p",null,"Reduck \u7684\u76ee\u6807\u662f\u4ee5 MVC \u6a21\u5f0f\u7ec4\u7ec7 React \u5e94\u7528\u5f00\u53d1\u7ed3\u6784\uff0c\u5c06\u4e1a\u52a1\u903b\u8f91\u7ef4\u62a4\u5728 Model \u5c42\uff0c\u4e1a\u52a1\u903b\u8f91\u4e0e UI \u89e3\u8026\uff0c\u8ba9\u5f00\u53d1\u4e1a\u52a1\u903b\u8f91\u66f4\u96c6\u4e2d\u3001\u66f4\u7b80\u5355\uff0c\u540c\u65f6\u901a\u8fc7\u66f4\u9ad8\u5c42\u7ea7\u7684\u62bd\u8c61\uff0c\u51cf\u5c11\u91cd\u590d\u5de5\u4f5c\uff08\u6837\u677f\u4ee3\u7801\uff09\u3002"),(0,a.kt)("p",null,"Reduck \u5728 MVC \u6a21\u5f0f\u4e2d\uff0c\u626e\u6f14 M(Model) \u7684\u89d2\u8272\uff0cReact UI Component \u5bf9\u5e94 V(View)\uff0c\u4ece Reduck \u4e2d\u83b7\u53d6 Model \u5e76\u4fee\u6539 Model \u7684 React Container Component \u5bf9\u5e94 C(View Controller/Container)\u3002"),(0,a.kt)("p",null,"Modern.js \u7684\u72b6\u6001\u7ba1\u7406\u89e3\u51b3\u65b9\u6848\uff0c\u662f\u901a\u8fc7\u5185\u7f6e Reduck \u5b9e\u73b0\u7684\u3002\u5728 Modern.js \u4e2d\u4f7f\u7528 Reduck\uff0c\u4e0d\u4ec5\u514d\u53bb\u4e86\u624b\u52a8\u96c6\u6210\u7684\u73af\u8282\uff0c\u800c\u4e14\u6240\u6709 Reduck API \u90fd\u53ef\u4ee5\u4ece Modern.js \u7684 Runtime \u5305\u4e2d\u76f4\u63a5\u5bfc\u5165\u4f7f\u7528\uff0c\u5177\u6709\u66f4\u597d\u7684\u4e00\u81f4\u6027\u4f53\u9a8c\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ol",{parentName:"div"},(0,a.kt)("li",{parentName:"ol"},"Modern.js \u4e2d\u4f7f\u7528 Reduck API\uff0c\u9700\u8981\u8bbe\u7f6e ",(0,a.kt)("a",{parentName:"li",href:"/docs/apis/app/config/runtime/state"},"runtime.state")," \u4ee5\u5f00\u542f\u72b6\u6001\u7ba1\u7406\u529f\u80fd\uff08\u9ed8\u8ba4\u521b\u5efa\u7684\u9879\u76ee\u5df2\u5f00\u542f\uff09\u3002"),(0,a.kt)("li",{parentName:"ol"},"Reduck \u4e5f\u53ef\u4ee5\u8131\u79bb Modern.js \u4f5c\u4e3a\u72b6\u6001\u7ba1\u7406\u5e93",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/model/use-out-of-modernjs"},"\u5355\u72ec\u4f7f\u7528"),"\u3002")))),(0,a.kt)("h2",{id:"\u6838\u5fc3\u6982\u5ff5"},"\u6838\u5fc3\u6982\u5ff5"),(0,a.kt)("p",null,"Reduck \u4e2d\u7684\u6838\u5fc3\u6982\u5ff5\u53ea\u6709 4 \u4e2a\uff1a Model\u3001State\u3001Actions\u3001Effects\u3002"),(0,a.kt)("p",null,"Model: \u5bf9\u72ec\u7acb\u6a21\u5757\u7684\u903b\u8f91\u548c\u6240\u9700\u72b6\u6001\u7684\u5c01\u88c5\uff0c\u7531 State\u3001Actions\u3001Effects \u7ec4\u6210\u3002"),(0,a.kt)("p",null,"State: Model \u4e2d\u4fdd\u5b58\u7684\u72b6\u6001\u3002"),(0,a.kt)("p",null,"Actions: \u7528\u4e8e\u4fee\u6539 State \u7684\u7eaf\u51fd\u6570\uff0c\u51fd\u6570\u5fc5\u987b\u662f",(0,a.kt)("strong",{parentName:"p"},"\u540c\u6b65"),"\u7684\u3002"),(0,a.kt)("p",null,"Effects: \u7528\u4e8e\u4fee\u6539 State \u7684\u5e26\u6709\u526f\u4f5c\u7528\u7684\u51fd\u6570\uff0c\u51fd\u6570\u53ef\u4ee5\u662f",(0,a.kt)("strong",{parentName:"p"},"\u5f02\u6b65"),"\u7684\u3002Effects \u4e2d\u53ef\u4ee5\u8c03\u7528\u81ea\u8eab\u6216\u5176\u4ed6 Model \u7684 Actions \u548c Effects\u3002"),(0,a.kt)("p",null,"Reduck \u6570\u636e\u6d41\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/reduck-concept.svg",alt:"Reduck \u6570\u636e\u6d41"})),(0,a.kt)("h2",{id:"\u57fa\u672c\u7528\u6cd5"},"\u57fa\u672c\u7528\u6cd5"),(0,a.kt)("p",null,"\u4e0b\u6765\u6211\u4eec\u4ee5\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,a.kt)("strong",{parentName:"p"},"\u8ba1\u6570\u5668")," \u5e94\u7528\u4e3a\u4f8b\uff0c\u6f14\u793a Reduck \u7684\u57fa\u672c\u7528\u6cd5\u3002"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u540d\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"count")," \u7684 Model\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { model } from '@modern-js/runtime/model';\n\nconst countModel = model('count').define({\n  state: {\n    value: 1,\n  },\n});\n\nexport default countModel;\n")),(0,a.kt)("p",null,"\u6211\u4eec\u4f7f\u7528 API ",(0,a.kt)("inlineCode",{parentName:"p"},"model")," \u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"p"},"countModel"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"countModel")," \u5f53\u524d\u53ea\u5305\u542b\u5b58\u50a8\u8ba1\u6570\u5668\u503c\u7684\u72b6\u6001\uff0c\u5373\u4ee3\u7801\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"value"),"\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a action\uff0c\u7528\u4e8e\u8ba1\u7b97\u5668\u81ea\u589e\u52a0 1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { model } from '@modern-js/runtime/model';\n\nconst countModel = model('count').define({\n  state: {\n    value: 1,\n  },\n  actions: {\n    add(state) {\n      state.value += 1;\n    },\n  },\n});\n\nexport default countModel;\n")),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," action \u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539 state \u7684\u503c\uff0c\u8fdb\u884c\u52a0 1 \u64cd\u4f5c\uff0c\u800c\u4e0d\u9700\u8981\u628a state \u4f5c\u4e3a\u4e0d\u53ef\u53d8\u5bf9\u8c61\u8fdb\u884c\u64cd\u4f5c\uff0c\u8fd9\u662f\u56e0\u4e3a Reduck \u96c6\u6210\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u4fee\u6539\u539f state \u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u6f14\u793a\u5982\u4f55\u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528 Model\u3002"),(0,a.kt)("p",null,"\u65b0\u5efa\u4e00\u4e2a\u7ec4\u4ef6 Counter\uff0c\u5728\u7ec4\u4ef6\u5185\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"useModel")," API \u4f7f\u7528 countModel\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { useModel } from '@modern-js/runtime/model';\nimport countModel from './models/count';\n\nfunction Counter() {\n  const [state, actions] = useModel(countModel);\n\n  return (\n    <div>\n      <div>counter: {state.value}</div>\n      <button onClick={() => actions.add()}>add</button>\n    </div>\n  );\n}\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useModel")," \u83b7\u53d6 ",(0,a.kt)("inlineCode",{parentName:"p"},"countModel")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"actions"),"\uff0c\u7ec4\u4ef6\u5c55\u793a\u5f53\u524d\u8ba1\u7b97\u5668\u7684\u503c\uff0c\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"add")," \u6309\u94ae\uff0c\u8ba1\u6570\u5668\u81ea\u589e 1\u3002"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7531\u4e8e\u4f7f\u7528\u7684\u6848\u4f8b\u6bd4\u8f83\u7b80\u5355\uff0c\u8fd9\u91cc\u5e76\u6ca1\u6709\u4e25\u683c\u6309\u7167 MVC \u6a21\u5f0f\u8fdb\u884c\u5206\u5c42\uff0c\u7ec4\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," \u540c\u65f6\u8d77\u5230\u4e86 V \u548c C \u4e24\u5c42\u7684\u4f5c\u7528\u3002"))),(0,a.kt)("p",null,"\u6700\u7ec8\u6f14\u793a\u6548\u679c\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/eueh7vhojuh/modern/simple-count-model.gif",alt:"countModel"})),(0,a.kt)("p",null,"\u8fd9\u6837\uff0c\u6211\u4eec\u5c31\u5b8c\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u8ba1\u6570\u5668\u5e94\u7528\u3002\u672c\u8282\u5b8c\u6574\u7684\u793a\u4f8b\u4ee3\u7801\u53ef\u4ee5\u5728",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/modern-js-examples/tree/main/series/tutorials/runtime-api/model/counter-model"},"\u8fd9\u91cc"),"\u67e5\u770b\u3002"))}p.isMDXComponent=!0}}]);