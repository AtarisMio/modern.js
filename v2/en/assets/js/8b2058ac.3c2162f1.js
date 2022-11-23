"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2505],{44993:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(52983);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},94713:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(18249),a=(t(52983),t(44993));const i={title:"PreRender"},l=void 0,o={unversionedId:"apis/app/runtime/ssr/pre-render",id:"apis/app/runtime/ssr/pre-render",title:"PreRender",description:"A Helmet-like HOC without content implements SPA routing-level caching, manner without additional configuration.",source:"@site/../../packages/toolkit/main-doc/en/docusaurus-plugin-content-docs/current/apis/app/runtime/ssr/pre-render.md",sourceDirName:"apis/app/runtime/ssr",slug:"/apis/app/runtime/ssr/pre-render",permalink:"/v2/en/docs/apis/app/runtime/ssr/pre-render",draft:!1,tags:[],version:"current",frontMatter:{title:"PreRender"},sidebar:"apisAppSidebar",previous:{title:"NoSSR",permalink:"/v2/en/docs/apis/app/runtime/ssr/no-ssr"},next:{title:"hook",permalink:"/v2/en/docs/apis/app/runtime/bff/hook"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Function Signature",id:"function-signature",level:2},{value:"Input",id:"input",level:3},{value:"Example",id:"example",level:2}],p={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A Helmet-like HOC without content implements SPA routing-level caching, manner without additional configuration."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default () => (\n  <>\n    <PreRender interval={5} />\n  </>\n)\n")),(0,a.kt)("h2",{id:"function-signature"},"Function Signature"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"PreRender")," provides a set of configuration for controlling caching rules, expiration times, caching algorithms, and more."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"type Props {\n  interval: number;\n  staleLimit: number;\n  level: number;\n  include: { header?: string[], query?: string[] };\n  matches: { header?: Record<string, any>, query?: Record<string, any> }\n}\n\nfunction PreRender(props: Props): React.Component\n")),(0,a.kt)("h3",{id:"input"},"Input"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interval"),": set the time the cache keep fresh\uff0cseconds. During this time, the cache will be used directly and not invoke asynchronous rendering."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"staleLimit"),": sets the time when the cache is completely expired\uff0cseconds\u3002During this time, The cache can be returned and asynchronous rendering will be invoke, otherwise must wait for the re-rendered result."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"level"),": sets the calculation rule level for the cache identity, usually used with ",(0,a.kt)("inlineCode",{parentName:"li"},"includes")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"matches"),". The default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"0: pathname\n1: pathname + querystring\n2: pathname + headers\n3: pathname + querystring + headers\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"includes"),": sets the content that needs to be included in the cache identifier, used when the ",(0,a.kt)("inlineCode",{parentName:"li"},"level")," is not ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),". The default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"matches"),": sets the rewriting rule for the value of query or header in cache identity, usually used in cache category, supports regular expressions. The default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"null"),".")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { PreRender } from '@modern-js/runtime/ssr';\n\nexport default function App() {\n  return (\n    <>\n      <PreRender interval={10} />\n      <div>Hello Modern</div>\n    </>\n  )\n}\n")),(0,a.kt)("p",null,"The following example shows how to add the parameters in the query and header into the cache identifier calculation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/* calculate cache identifier using channel in query and language in header */\n<PreRender interval={10} level={2} includes={{\n  query: ["channel"],\n  header: ["language"]\n}} />\n')),(0,a.kt)("p",null,"The following example shows how not to let the test channel affect the online cache:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/* rewrite the channel value starting with test_ in the query as "testChannel", otherwise rewrite it as "otherChannel" */\n<PreRender interval={10} level={2} includes={{\n  query: ["channel"],\n  header: ["language"]\n}} matches={{\n  query: {\n    channel: {\n      "testChannel", "^test_",\n      "otherChannel", ".*"\n    }\n  }\n}} />\n')))}c.isMDXComponent=!0}}]);