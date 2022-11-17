"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[134,3543],{44993:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=d(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?o.createElement(f,r(r({ref:t},p),{},{components:n})):o.createElement(f,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var d=2;d<l;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23745:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(18249),a=(n(52983),n(44993)),l=n(71983);const r={sidebar_position:1,title:"model"},i=void 0,s={unversionedId:"apis/app/runtime/model/model_",id:"apis/app/runtime/model/model_",title:"model",description:"Reduck \u539f\u59cb\u7c7b\u578b\u8f83\u4e3a\u590d\u6742\uff0c\u4ee5\u4e0b\u6d89\u53ca\u7c7b\u578b\u5b9a\u4e49\u7684\u5730\u65b9\uff0c\u5c55\u793a\u7684\u662f\u7b80\u5316\u540e\u7684\u7c7b\u578b\u4fe1\u606f\u3002\u539f\u59cb\u7c7b\u578b\u89c1 model\u3002",source:"@site/../../packages/toolkit/main-doc/zh/apis/app/runtime/model/model_.md",sourceDirName:"apis/app/runtime/model",slug:"/apis/app/runtime/model/model_",permalink:"/v2/docs/apis/app/runtime/model/model_",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"model"},sidebar:"apisAppSidebar",previous:{title:"afterLambdaRegisted",permalink:"/v2/docs/apis/app/runtime/bff-server/after-lambda-registed"},next:{title:"useModel",permalink:"/v2/docs/apis/app/runtime/model/use-model"}},d={},p=[{value:"model",id:"model",level:2},{value:"define",id:"define",level:2},{value:"\u5bf9\u8c61\u7c7b\u578b",id:"\u5bf9\u8c61\u7c7b\u578b",level:3},{value:"\u51fd\u6570\u7c7b\u578b",id:"\u51fd\u6570\u7c7b\u578b",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"ModelDesc.state",id:"modeldescstate",level:4},{value:"ModelDesc.actions",id:"modeldescactions",level:4},{value:"ModelDesc.computed",id:"modeldesccomputed",level:4},{value:"ModelDesc.effects",id:"modeldesceffects",level:4}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(l.default,{mdxType:"ReduckTip"}),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Reduck \u539f\u59cb\u7c7b\u578b\u8f83\u4e3a\u590d\u6742\uff0c\u4ee5\u4e0b\u6d89\u53ca\u7c7b\u578b\u5b9a\u4e49\u7684\u5730\u65b9\uff0c\u5c55\u793a\u7684\u662f\u7b80\u5316\u540e\u7684\u7c7b\u578b\u4fe1\u606f\u3002\u539f\u59cb\u7c7b\u578b\u89c1 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/modern-js-dev/reduck/blob/main/packages/store/src/model/model.ts"},(0,a.kt)("strong",{parentName:"a"},"model")),"\u3002")),(0,a.kt)("h2",{id:"model"},"model"),(0,a.kt)("p",null,"\u7528\u4e8e\u521b\u5efa\u7ba1\u7406\u5e94\u7528\u72b6\u6001\u7684 Model\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function model(name: string): { define: function }")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u521b\u5efa\u7684 Model \u7684\u552f\u4e00\u6807\u8bc6\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"model('foo');\n")),(0,a.kt)("h2",{id:"define"},"define"),(0,a.kt)("p",null,"\u7528\u4e8e\u5b9a\u4e49 Model \u7684\u8be6\u7ec6\u7ed3\u6784\uff0c\u652f\u6301\u4f20\u5165\u4e00\u4e2a\u5bf9\u8c61\u7c7b\u578b\u6216\u51fd\u6570\u7c7b\u578b\u7684\u53c2\u6570\u3002"),(0,a.kt)("h3",{id:"\u5bf9\u8c61\u7c7b\u578b"},"\u5bf9\u8c61\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function define(modelDesc: ModelDesc): Model;")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"modelDesc: ",(0,a.kt)("inlineCode",{parentName:"li"},"ModelDesc"),"\uff0c\u662f\u5bf9 Model \u7ed3\u6784\u7684\u5b9a\u4e49\uff0c\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"computed"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"actions"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"effects")," \u7b49\u5c5e\u6027\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"const fooModel = model('foo').define({\n  state: 'foo',\n  computed: {\n    cFoo: state => `c${state}`,\n  },\n  actions: {\n    setState: (state, value) => {\n      return value;\n    },\n  },\n  effects: {\n    loadState: async () => {\n      // \u4ece\u670d\u52a1\u7aef\u83b7\u53d6 state\n    },\n  },\n});\n")),(0,a.kt)("h3",{id:"\u51fd\u6570\u7c7b\u578b"},"\u51fd\u6570\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"function define((context: Context, utils: Utils) => ModelDesc): Model;")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"context: Context\uff0cReduck \u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u53ef\u4ee5\u83b7\u53d6\u5e95\u5c42\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u5bf9\u8c61\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u9664\u652f\u6301 Redux Store \u7684\u6240\u6709 ",(0,a.kt)("a",{parentName:"li",href:"https://redux.js.org/api/store"},"API")," \u4ee5\u5916\uff0c\u8fd8\u6302\u8f7d\u4e86\u7528\u4e8e\u6d88\u8d39 Model \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"use")," \u7684\u65b9\u6cd5\uff0c\u548c\u7528\u4e8e\u5378\u8f7d Model \u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"unmount")," \u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"utils: Utils\uff0c\u5b9a\u4e49 Model \u65f6\uff0c\u5e38\u7528\u7684\u5de5\u5177\u51fd\u6570\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"use"),"\u3001",(0,a.kt)("inlineCode",{parentName:"li"},"onMount"),"\u3002",(0,a.kt)("inlineCode",{parentName:"li"},"use")," \u4f5c\u7528\u540c ",(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u5bf9\u8c61\u4e0a\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"use"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"onMount")," \u662f Model \u6302\u8f7d\u540e\u7684\u94a9\u5b50\u51fd\u6570\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface Utils {\n  use: UseModel;\n  onMount: OnMountHook;\n}\n\ninterface Context {\n  store: ReduxStore & {\n    use: UseModel;\n    unmount: (model: Model) => void;\n  };\n}\n")),(0,a.kt)("p",null,"\u5982\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"use"),"\uff0c\u53ef\u4ee5\u83b7\u53d6 Model \u81ea\u8eab\u53ca\u5176\u5b83 Model \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"actions"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"const fooModel = model('foo').define(() => {\n  return {\n    state: 'foo',\n    actions: {\n      setState: (state, value) => {\n        return value;\n      },\n    },\n  };\n});\n\nconst barModel = model('bar').define((_, { use }) => {\n  return {\n    state: 'bar',\n    effects: {\n      syncFoo() {\n        const [state, actions] = use(fooModel);\n        actions.setState(state);\n      },\n    },\n  };\n});\n")),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h4",{id:"modeldescstate"},"ModelDesc.state"),(0,a.kt)("p",null,"\u5b9a\u4e49 Model \u7684\u72b6\u6001\u3002\u6280\u672f\u4e0a\uff0c\u652f\u6301\u4efb\u610f\u7c7b\u578b\u7684 ",(0,a.kt)("strong",{parentName:"p"},"state"),"\uff0c\u4f46\u662f\u5b9e\u8df5\u4e2d\u5efa\u8bae\u4f7f\u7528\u53ef\u8fdb\u884c JSON \u5e8f\u5217\u5316\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  state: any;\n}\n")),(0,a.kt)("h4",{id:"modeldescactions"},"ModelDesc.actions"),(0,a.kt)("p",null,"\u5b9a\u4e49 Model \u7684 Actions\u3002Actions \u7684\u51fd\u6570\u7c7b\u578b\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  actions: {\n    [actionKey: string]: (state: State, payload: any) => State | void;\n  };\n}\n")),(0,a.kt)("p",null,"Reduck \u5185\u90e8\u96c6\u6210\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/immerjs/immer"},"immer"),"\uff0c\u53ef\u4ee5\u76f4\u63a5\u539f\u59cb\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\uff0c\u5f53 Action \u6ca1\u6709\u663e\u5f0f\u8fd4\u56de\u503c\u65f6\uff0cReduck \u5185\u90e8\u4f1a\u8fd4\u56de\u4fee\u6539\u8fc7\u7684\u65b0\u7684 State \u5bf9\u8c61\u3002"),(0,a.kt)("h4",{id:"modeldesccomputed"},"ModelDesc.computed"),(0,a.kt)("p",null,"\u5b9a\u4e49 Model \u7684\u884d\u751f\u72b6\u6001\u3002\u884d\u751f\u72b6\u6001\u7684\u5b9a\u4e49\u652f\u6301\u4e24\u79cd\u7c7b\u578b\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ea\u4f9d\u8d56 Model \u81ea\u8eab\u7684\u72b6\u6001")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  computed: {\n    [computedKey: string]: (state: State) => any;\n  };\n}\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f9d\u8d56\u5176\u4ed6 Model \u7684\u72b6\u6001")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  computed: {\n    [computedKey: string]: [\n      ...models: Model[],\n      (state: State, ...args: ModelState[]) => any,\n    ];\n  };\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"const fooModel = model('foo').define({\n  state: 'foo',\n});\n\nconst barModel = model('bar').define({\n  state: 'bar',\n  computed: {\n    combineFoo: [fooModel, (state, fooState) => state + fooState],\n  },\n});\n")),(0,a.kt)("h4",{id:"modeldesceffects"},"ModelDesc.effects"),(0,a.kt)("p",null,"\u5b9a\u4e49 Model \u7684 Effects\u3002Effects \u4e2d\u5b9a\u4e49\u7684\u51fd\u6570\u7c7b\u578b\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface ModelDesc {\n  effects: {\n    [effectKey: string]: (...args: any[]) => any;\n  };\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="\u793a\u4f8b"',title:'"\u793a\u4f8b"'},"const fooModel = model('foo').define((context, { use }) => ({\n  state: 'foo',\n  effects: {\n    persist() {\n      const [state] = use(fooModel);\n      localStorage.setItem('state', state);\n    },\n  },\n}));\n")),(0,a.kt)("admonition",{title:"\u66f4\u591a\u53c2\u8003",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"/docs/guides/topic-detail/model/define-model"},"\u521b\u5efa Model"))))}m.isMDXComponent=!0},71983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=n(18249),a=(n(52983),n(44993));const l={},r=void 0,i={unversionedId:"components/reduck-tip",id:"components/reduck-tip",title:"reduck-tip",description:"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a@modern-js/runtime/model\u3002",source:"@site/../../packages/toolkit/main-doc/zh/components/reduck-tip.md",sourceDirName:"components",slug:"/components/reduck-tip",permalink:"/v2/docs/components/reduck-tip",draft:!1,tags:[],version:"current",frontMatter:{}},s={},d=[],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u672c\u8282\u6240\u6709 API \u7684\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/runtime/model"),"\u3002"),(0,a.kt)("p",{parentName:"admonition"},"\u5982\u679c\u662f\u5728 Modern.js \u4ee5\u5916\u5355\u72ec\u96c6\u6210 Reduck\uff0c\u5bfc\u51fa\u5305\u540d\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js-reduck/react"),"\u3002")))}c.isMDXComponent=!0}}]);