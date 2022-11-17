"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[433,3543],{44993:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=o,k=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},97811:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(18249),o=(n(52983),n(44993)),a=n(71983);const i={sidebar_position:11,title:"createApp"},p=void 0,l={unversionedId:"apis/app/runtime/model/create-app",id:"apis/app/runtime/model/create-app",title:"createApp",description:"\u4e00\u4e2a Reduck \u5e94\u7528\u5bf9\u5e94\u5171\u4eab\u4e00\u4e2a Store \u7684\u5e94\u7528\u3002Reduck \u5185\u90e8\u9ed8\u8ba4\u4f1a\u4f7f\u7528 createApp \u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u5e94\u7528\uff0c\u5982\u679c\u6574\u4e2a\u5e94\u7528\u53ea\u9700\u8981\u5171\u4eab\u4e00\u4e2a Store\uff0c\u90a3\u4e48\u662f\u4e0d\u9700\u8981\u4f7f\u7528 createApp \u7684\u3002\u53ea\u6709\u5f53\u9700\u8981\u5728\u5e94\u7528\u5c40\u90e8\u521b\u5efa\u5171\u4eab Store \u65f6\uff0c\u624d\u9700\u8981\u4f7f\u7528 createApp \u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/model/create-app.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/create-app",permalink:"/v2/docs/apis/app/runtime/model/create-app",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"createApp"},sidebar:"apisAppSidebar",previous:{title:"createStore",permalink:"/v2/docs/apis/app/runtime/model/create-store"},next:{title:"router",permalink:"/v2/docs/apis/app/runtime/container/router"}},c={},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],u={toc:d};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.default,{mdxType:"ReduckTip"}),(0,o.kt)("p",null,"\u4e00\u4e2a Reduck \u5e94\u7528\u5bf9\u5e94\u5171\u4eab\u4e00\u4e2a Store \u7684\u5e94\u7528\u3002Reduck \u5185\u90e8\u9ed8\u8ba4\u4f1a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," \u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u5e94\u7528\uff0c\u5982\u679c\u6574\u4e2a\u5e94\u7528\u53ea\u9700\u8981\u5171\u4eab\u4e00\u4e2a Store\uff0c\u90a3\u4e48\u662f\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," \u7684\u3002\u53ea\u6709\u5f53\u9700\u8981\u5728\u5e94\u7528\u5c40\u90e8\u521b\u5efa\u5171\u4eab Store \u65f6\uff0c\u624d\u9700\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," \u3002"),(0,o.kt)("admonition",{title:"\u6ce8\u610f",type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"\u6ce8\u610f ",(0,o.kt)("inlineCode",{parentName:"li"},"@modern-js/runtime/model")," \u4e2d\u5bfc\u51fa\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"createApp")," \u7528\u4e8e\u7ba1\u7406\u72b6\u6001\uff0c\u800c ",(0,o.kt)("inlineCode",{parentName:"li"},"@modern-js/runtime")," \u5bfc\u51fa\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"createApp")," \u7528\u4e8e\u7ba1\u7406\u6574\u4e2a\u5e94\u7528\u7684\u8fd0\u884c\u65f6\u73af\u5883\uff0c\u4e24\u8005\u529f\u80fd\u4e0d\u540c\u3002"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface AppConfig extends StoreConfig {\n  devTools?: boolean | DevToolsOptions;\n  autoActions?: boolean;\n}\n\nfunction createApp(config: AppConfig): object;\n")),(0,o.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"config\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"Record<string, any>"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"StoreConfig\uff1a\u540c ",(0,o.kt)("a",{parentName:"li",href:"/v2/docs/apis/app/runtime/model/create-store"},(0,o.kt)("inlineCode",{parentName:"a"},"createStore"))," \u7684\u53c2\u6570\u3002"),(0,o.kt)("li",{parentName:"ul"},"devTools\uff1a\u9ed8\u8ba4\u503c\u4e3atrue\u3002\u662f\u5426\u5f00\u542f Redux DevTools\uff0c\u5f53\u4e3a\u5bf9\u8c61\u7c7b\u578b\u65f6\uff0c\u652f\u6301\u914d\u7f6e Redux DevTools \u7684 ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Arguments.md"},"Options"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"autoActins\uff1a\u9ed8\u8ba4\u503c\u4e3atrue\u3002\u662f\u5426",(0,o.kt)("a",{parentName:"li",href:"/v2/docs/apis/app/runtime/model/auto-actions"},"\u81ea\u52a8\u751f\u6210 Actions"),"\u3002")))),(0,o.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,o.kt)("p",null,"Reduck App\uff0c\u6709\u4ee5\u4e0b\u5c5e\u6027\u7ec4\u6210\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provider\uff1a\u4e3a\u5e94\u7528\u5c40\u90e8\u7684\u7ec4\u4ef6\u6811\u6ce8\u5165\u5171\u4eab Store \u7684\u7ec4\u4ef6\u3002\u7528\u6cd5\u540c ",(0,o.kt)("a",{parentName:"li",href:"/v2/docs/apis/app/runtime/model/Provider"},(0,o.kt)("inlineCode",{parentName:"a"},"Provider")),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"useModel\uff1a\u83b7\u53d6\u5e94\u7528\u5c40\u90e8 Store \u6302\u8f7d\u7684 Model \u5bf9\u8c61\u3002\u7528\u6cd5\u540c ",(0,o.kt)("a",{parentName:"li",href:"/v2/docs/apis/app/runtime/model/use-model"},(0,o.kt)("inlineCode",{parentName:"a"},"useModel")),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"useStaticModel\uff1a\u83b7\u53d6\u5e94\u7528\u5c40\u90e8 Store \u6302\u8f7d\u7684 Model \u5bf9\u8c61\u3002\u7528\u6cd5\u540c ",(0,o.kt)("a",{parentName:"li",href:"/v2/docs/apis/app/runtime/model/use-static-model"},(0,o.kt)("inlineCode",{parentName:"a"},"useStaticModel")),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"useLocalModel\uff1a\u83b7\u53d6\u5e94\u7528\u5c40\u90e8 Store \u6302\u8f7d\u7684 Model \u5bf9\u8c61\u3002\u7528\u6cd5\u540c ",(0,o.kt)("a",{parentName:"li",href:"/v2/docs/apis/app/runtime/model/use-local-model"},(0,o.kt)("inlineCode",{parentName:"a"},"useLocalModel")),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"useStore\uff1a\u83b7\u53d6\u5e94\u7528\u5c40\u90e8\u4f7f\u7528\u7684 Store \u5bf9\u8c61\u3002\u7528\u6cd5\u540c ",(0,o.kt)("a",{parentName:"li",href:"/v2/docs/apis/app/runtime/model/use-store"},(0,o.kt)("inlineCode",{parentName:"a"},"useStore")),"\u3002")),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("p",null,"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"createApp")," \u53ef\u4ee5\u521b\u5efa\u5c40\u90e8\u72b6\u6001\uff0c\u5c06\u4e0d\u540c Reduck \u5e94\u7528\u95f4\u7684\u72b6\u6001\u9694\u79bb\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const { Provider: LocalFooProvider, useModel: useLocalFooModel } = createApp();\nconst { Provider: LocalBarProvider, useModel: useLocalBarModel } = createApp();\n\nfunction Foo() {\n  const [fooState] = useLocalFooModel(fooModel);\n  const [barState] = useLocalBarModel(fooModel);\n\n  return (\n    <div>\n      <div>Foo: {fooState}</div>\n      <div>Bar: {barState}</div>\n    </div>\n  );\n}\n\nfunction Container() {\n  return (\n    <LocalFooProvider>\n      <LocalBarProvider>\n        <Foo />\n      </LocalBarProvider>\n    </LocalFooProvider>\n  );\n}\n")))}s.isMDXComponent=!0},71983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(18249),o=(n(52983),n(44993));const a={},i=void 0,p={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/../../packages/toolkit/main-doc/zh/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v2/docs/components/reduck-tip",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[],d={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002")))}u.isMDXComponent=!0}}]);