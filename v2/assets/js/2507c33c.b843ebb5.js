"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5227],{44993:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},53457:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(18249),o=(n(52983),n(44993));const i={sidebar_position:3,title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1"},a=void 0,p={unversionedId:"guides/topic-detail/micro-frontend/communicate",id:"guides/topic-detail/micro-frontend/communicate",title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1",description:"props \u901a\u4fe1",source:"@site/docs/guides/topic-detail/micro-frontend/communicate.md",sourceDirName:"guides/topic-detail/micro-frontend",slug:"/guides/topic-detail/micro-frontend/communicate",permalink:"/docs/guides/topic-detail/micro-frontend/communicate",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u4e3b\u5b50\u5e94\u7528\u901a\u4fe1"},sidebar:"guidesSidebar",previous:{title:"\u5b50\u5e94\u7528\u8c03\u8bd5",permalink:"/docs/guides/topic-detail/micro-frontend/debugging"},next:{title:"\u52a0\u8f7d\u5b50\u5e94\u7528",permalink:"/docs/guides/topic-detail/micro-frontend/route-mode"}},c={},l=[{value:"props \u901a\u4fe1",id:"props-\u901a\u4fe1",level:2},{value:"\u4f7f\u7528 Model \u901a\u4fe1",id:"\u4f7f\u7528-model-\u901a\u4fe1",level:2}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"props-\u901a\u4fe1"},"props \u901a\u4fe1"),(0,o.kt)("p",null,"Modern.js \u4e2d\uff0c\u4f1a\u5c06\u5b50\u5e94\u7528\u5305\u88f9\u6210\u4e00\u4e2a React \u7ec4\u4ef6\uff0c\u76f4\u63a5\u901a\u8fc7\u7ed9 React \u7ec4\u4ef6\u4f20\u9012 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u5373\u53ef\u5b9e\u73b0\u4e3b\u5e94\u7528\u548c\u5b50\u5e94\u7528\u901a\u4fe1\u7684\u76ee\u7684\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u4e3b\u5e94\u7528\uff1aApp.tsx",title:"\u4e3b\u5e94\u7528\uff1aApp.tsx"},"function App() {\n  const { Dashboard } = useModuleApps();\n  const [count, setCount] = useState(0);\n\n  return <div>\n    <Dashboard count={count} />\n    <button onClick={() => setCount(count + 1)}>add</button>\n  </div>;\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"title=\u5b50\u5e94\u7528\uff1aApp.tsx",title:"\u5b50\u5e94\u7528\uff1aApp.tsx"},"function App(props) {\n  console.log(props);\n\n  return ...\n}\n")),(0,o.kt)("p",null,"\u5b50\u5e94\u7528\u5c06\u4f1a\u6253\u5370 ",(0,o.kt)("inlineCode",{parentName:"p"},"{count: 0}"),"\u3002"),(0,o.kt)("p",null,"\u5f53\u4e3b\u5e94\u7528\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"add")," \u6309\u94ae\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"count")," \u72b6\u6001\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u5b50\u5e94\u7528\u4e5f\u4f1a\u54cd\u5e94\u5230\u6700\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u6570\u636e\uff0c\u5e76\u91cd\u65b0\u6e32\u67d3\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-model-\u901a\u4fe1"},"\u4f7f\u7528 Model \u901a\u4fe1"),(0,o.kt)("admonition",{title:"\u63d0\u793a",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u8fd1\u671f\u4e0a\u7ebf\uff0c\u656c\u8bf7\u671f\u5f85\u3002")))}u.isMDXComponent=!0}}]);