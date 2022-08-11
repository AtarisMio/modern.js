"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[43299],{54852:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>u});var i=t(49231);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=i.createContext({}),p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,k=c["".concat(d,".").concat(u)]||c[u]||s[u]||l;return t?i.createElement(k,r(r({ref:n},m),{},{components:t})):i.createElement(k,r({ref:n},m))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var p=2;p<l;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},69576:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=t(86215),a=(t(49231),t(54852));const l={sidebar_position:1},r="winService",o={unversionedId:"apis/app/runtime/electron/main-process/win-service",id:"apis/app/runtime/electron/main-process/win-service",title:"winService",description:"* \u7a97\u53e3\u7ba1\u7406\u670d\u52a1\u3002",source:"@site/docs/apis/app/runtime/electron/main-process/win-service.md",sourceDirName:"apis/app/runtime/electron/main-process",slug:"/apis/app/runtime/electron/main-process/win-service",permalink:"/docs/apis/app/runtime/electron/main-process/win-service",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apisAppSidebar",previous:{title:"Runtime",permalink:"/docs/apis/app/runtime/electron/main-process/runtime"},next:{title:"updateService",permalink:"/docs/apis/app/runtime/electron/main-process/update-service"}},d={},p=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"callBrowserWindow",id:"callbrowserwindow",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"broadCast",id:"broadcast",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"getWindowById",id:"getwindowbyid",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-2",level:4},{value:"getWindows",id:"getwindows",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-3",level:4},{value:"sendTo",id:"sendto",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-4",level:4},{value:"createWindow",id:"createwindow",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-5",level:4},{value:"getWindowConfig",id:"getwindowconfig",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-5",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-6",level:4},{value:"closeWindowById",id:"closewindowbyid",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-6",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-7",level:4},{value:"closeWindowByName",id:"closewindowbyname",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-7",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-8",level:4},{value:"getWindowByName",id:"getwindowbyname",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-8",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-9",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],m={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"winservice"},"winService"),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"\u7a97\u53e3\u7ba1\u7406\u670d\u52a1\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fdb\u7a0b\uff1a",(0,a.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/basic#%E4%B8%BB%E8%BF%9B%E7%A8%8B"},"\u4e3b\u8fdb\u7a0b"),"\u3002")),(0,a.kt)("pre",{parentName:"div"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { winService } from '@modern-js/runtime/electron-main';\n")))),(0,a.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,a.kt)("h3",{id:"callbrowserwindow"},"callBrowserWindow"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.callBrowserWindow(receiver, funcName[, ...args])")),(0,a.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"receiver\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"number | string"),"\uff0c\u63a5\u6536\u7a97\u53e3 ID \u6216\u8005\u7a97\u53e3\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"funcName\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u8bbf\u95ee\u7684\u670d\u52a1\u7684\u51fd\u6570\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[args]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"any[]"),"\uff0c\u8bbf\u95ee\u670d\u52a1\u51fd\u6570\u7684\u53c2\u6570\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Promise<any>"),"\uff0c\u670d\u52a1\u8bbf\u95ee\u7ed3\u679c\u3002")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"receiver")," \u4e3a\u7a97\u53e3\u540d\uff0c\u5e76\u4e14\u540c\u540d\u7a97\u53e3\u6253\u5f00\u591a\u4e2a\uff0c\u6b64\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"callBrowserWindow")," \u7684\u8fd4\u56de\u503c\u4e3a\u6570\u7ec4\uff0c\u6bcf\u4e00\u9879\u8868\u793a\u6bcf\u4e00\u4e2a\u7a97\u53e3\u7684\u6267\u884c\u7ed3\u679c\u3002"))),(0,a.kt)("h3",{id:"broadcast"},"broadCast"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.broadcast(channel[,...args])")),(0,a.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"channel\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u5e7f\u64ad\u9891\u9053\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[args]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"any[]"),"\uff0c\u5e7f\u64ad\u53c2\u6570\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,a.kt)("p",null,"\u7ed9\u6240\u6709\u7a97\u53e3\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"channel")," \u9891\u9053\u4e0a\u53d1\u9001\u6d88\u606f\u3002"),(0,a.kt)("h3",{id:"getwindowbyid"},"getWindowById"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.getWindowById(windowId)")),(0,a.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"windowId\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u7a97\u53e3 ID\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object | undefined"),"\uff0c\u8fd4\u56de\u7a97\u53e3\u5bf9\u8c61\u3002")),(0,a.kt)("p",null,"\u6839\u636e\u7a97\u53e3 ID \u83b7\u53d6\u7a97\u53e3\u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"getwindows"},"getWindows"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.getWindows()")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object[]"),"\uff0c\u8fd4\u56de\u7a97\u53e3\u5bf9\u8c61\u6570\u7ec4\u3002")),(0,a.kt)("p",null,"\u83b7\u53d6\u6240\u6709\u7a97\u53e3\u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"sendto"},"sendTo"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.sendTo(receiver,channel[,...args])")),(0,a.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"receiver\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"number | string"),"\uff0c\u63a5\u6536\u7a97\u53e3 ID \u6216\u8005\u7a97\u53e3\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"channel\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u901a\u4fe1\u9891\u9053\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[args]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"any[]"),"\uff0c\u8bbf\u95ee\u670d\u52a1\u51fd\u6570\u7684\u53c2\u6570\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,a.kt)("p",null,"\u6839\u636e\u7a97\u53e3\u540d\u5b57\u6216\u8005\u7a97\u53e3 ID \u53d1\u9001\u6d88\u606f\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"channel")," \u9891\u9053\u3002"),(0,a.kt)("h3",{id:"createwindow"},"createWindow"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.createWindow(openConfig)")),(0,a.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"openConfig\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u7a97\u53e3\u914d\u7f6e\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"name\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9700\u8981\u6253\u5f00\u7684\u7a97\u53e3\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[options]","\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://www.electronjs.org/zh/docs/latest/api/browser-window#new-browserwindowoptions"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowserWindowConstructorOptions")),"\uff0c\u7a97\u53e3\u7684\u76f8\u5173\u914d\u7f6e\u3002"),(0,a.kt)("li",{parentName:"ul"},"[loadUrl]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u52a0\u8f7d\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ul"},"[addBeforeCloseListener]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),"\uff0c\u540c",(0,a.kt)("a",{parentName:"li",href:"/docs/apis/app/runtime/electron/main-process/window-config"},(0,a.kt)("inlineCode",{parentName:"a"},"windowConfig#addBeforeCloseListener")),"\uff0c\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"[hideWhenClose]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),"\uff0c\u5173\u95ed\u7a97\u53e3\u65f6\uff0c\u662f\u5426\u4ee5\u9690\u85cf\u4ee3\u66ff\u5173\u95ed\uff0c\u9ed8\u8ba4\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u3002")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u8fd4\u56de\u7a97\u53e3\u5bf9\u8c61\u3002")),(0,a.kt)("p",null,"\u6253\u5f00\u7a97\u53e3\u3002"),(0,a.kt)("h3",{id:"getwindowconfig"},"getWindowConfig"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.getWindowConfig(name)")),(0,a.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u7a97\u53e3\u540d\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object | undefined"),"\uff0c\u7a97\u53e3\u914d\u7f6e\u3002")),(0,a.kt)("p",null,"\u901a\u8fc7\u7a97\u53e3\u540d\u83b7\u5f97\u7a97\u53e3\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"closewindowbyid"},"closeWindowById"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.closeWindowById(id[,options])")),(0,a.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u7a97\u53e3 ID\u3002"),(0,a.kt)("li",{parentName:"ul"},"[options]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u5173\u95ed\u6a21\u5f0f\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"[closeMode]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"'close' | 'confirmOrClose'"),"\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"closeMode=close")," \u65f6\uff0c\u4f1a\u76f4\u63a5\u5173\u95ed\uff0c\u5ffd\u7565\u56de\u8c03\u3002\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"closeMode=confirmOrClose"),"\uff0c\u5982\u679c\u6709\u786e\u8ba4\u56de\u8c03\uff0c\u4f1a\u6267\u884c\u786e\u8ba4\u56de\u8c03\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"confirmOrClose"),"\u3002")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,a.kt)("p",null,"\u6839\u636e\u7a97\u53e3 ID \u5173\u95ed\u7a97\u53e3\u3002"),(0,a.kt)("h3",{id:"closewindowbyname"},"closeWindowByName"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.closeWindowByName(name[,options])")),(0,a.kt)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u7a97\u53e3\u540d\u3002"),(0,a.kt)("li",{parentName:"ul"},"[options]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u5173\u95ed\u6a21\u5f0f\u3002",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"[closeMode]","\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"'close' | 'confirmOrClose'"),"\uff0c\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"closeMode=close")," \u65f6\uff0c\u4f1a\u76f4\u63a5\u5173\u95ed\uff0c\u5ffd\u7565\u56de\u8c03\u3002\u5f53 ",(0,a.kt)("inlineCode",{parentName:"li"},"closeMode=confirmOrClose"),"\uff0c\u5982\u679c\u6709\u786e\u8ba4\u56de\u8c03\uff0c\u4f1a\u6267\u884c\u786e\u8ba4\u56de\u8c03\uff0c\u9ed8\u8ba4\u4e3a\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"confirmOrClose"),"\u3002")))),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,a.kt)("p",null,"\u6839\u636e\u7a97\u53e3\u540d\u5173\u95ed\u7a97\u53e3\u3002"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u5173\u4e8e closeMode\uff0c\u540c\u4e0a\u65b9 ",(0,a.kt)("inlineCode",{parentName:"p"},"closeWindowById"),"\u3002"))),(0,a.kt)("h3",{id:"getwindowbyname"},"getWindowByName"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"winService.getWindowByName(name)")),(0,a.kt)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"name\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u7a97\u53e3\u540d\u3002")),(0,a.kt)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object[]"),"\uff0c\u7a97\u53e3\u5bf9\u8c61\u6570\u7ec4\u3002")),(0,a.kt)("p",null,"\u6839\u636e\u7a97\u53e3\u540d\u83b7\u5f97\u5176\u5bf9\u5e94\u914d\u7f6e\u3002"),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// in main process\nimport { winService } from '@modern-js/electron-runtime';\n...\n\n// \u5411\u7a97\u53e3 main \u53d1\u9001\u6d88\u606f `{data: \"hello\"}` \u5230 `msgChannel` \u9891\u9053\u3002\nwinService.call('main', 'msgChannel', {data: \"hello\"});\n\n// \u5411\u6240\u6709\u7a97\u53e3\u53d1\u9001\u6d88\u606f `{data: \"hello\"}` \u5230 `msgChannel` \u9891\u9053\u3002\nwinService.broadCast('msgChannel', {data: \"hello\"});\n")),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u4f60\u53ef\u4ee5\u76f4\u63a5\u5f15\u7528\u5404\u79cd\u670d\u52a1\uff0c\u6bd4\u5982\uff1awinService\uff0c\u4f46\u4f7f\u7528\u5fc5\u987b\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"await runtime.init()")," \u4e4b\u540e\uff0c\u8fd9\u4f1a\u521d\u59cb\u5316\u6240\u6709\u670d\u52a1\u3002"))))}s.isMDXComponent=!0}}]);