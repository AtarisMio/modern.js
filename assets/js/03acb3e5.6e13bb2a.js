"use strict";(self.webpackChunk_modern_js_website=self.webpackChunk_modern_js_website||[]).push([[4683],{57522:(e,i,t)=>{t.d(i,{Zo:()=>p,kt:()=>u});var n=t(29901);function l(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function a(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?a(Object(t),!0).forEach((function(i){l(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function v(e,i){if(null==e)return{};var t,n,l=function(e,i){if(null==e)return{};var t,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||(l[t]=e[t]);return l}(e,i);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=n.createContext({}),o=function(e){var i=n.useContext(d),t=i;return e&&(t="function"==typeof e?e(i):r(r({},i),e)),t},p=function(e){var i=o(e.components);return n.createElement(d.Provider,{value:i},e.children)},s={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},w=n.forwardRef((function(e,i){var t=e.components,l=e.mdxType,a=e.originalType,d=e.parentName,p=v(e,["components","mdxType","originalType","parentName"]),w=o(t),u=l,m=w["".concat(d,".").concat(u)]||w[u]||s[u]||a;return t?n.createElement(m,r(r({ref:i},p),{},{components:t})):n.createElement(m,r({ref:i},p))}));function u(e,i){var t=arguments,l=i&&i.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=w;var v={};for(var d in i)hasOwnProperty.call(i,d)&&(v[d]=i[d]);v.originalType=e,v.mdxType="string"==typeof e?e:l,r[1]=v;for(var o=2;o<a;o++)r[o]=t[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}w.displayName="MDXCreateElement"},5908:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>s,frontMatter:()=>a,metadata:()=>v,toc:()=>o});var n=t(18249),l=(t(29901),t(57522));const a={sidebar_position:5},r="webviewService",v={unversionedId:"apis/app/runtime/electron/render-process/webview-service",id:"apis/app/runtime/electron/render-process/webview-service",title:"webviewService",description:"* webview \u7ba1\u7406\u670d\u52a1\u3002",source:"@site/docs/apis/app/runtime/electron/render-process/webview-service.md",sourceDirName:"apis/app/runtime/electron/render-process",slug:"/apis/app/runtime/electron/render-process/webview-service",permalink:"/docs/apis/app/runtime/electron/render-process/webview-service",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"apisAppSidebar",previous:{title:"winService",permalink:"/docs/apis/app/runtime/electron/render-process/win-service"},next:{title:"updateService",permalink:"/docs/apis/app/runtime/electron/render-process/update-service"}},d={},o=[{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"addWebview",id:"addwebview",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:4},{value:"setTimeoutDelay",id:"settimeoutdelay",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:4},{value:"callWebview",id:"callwebview",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-2",level:4},{value:"dispose",id:"dispose",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-3",level:4},{value:"getWebviewById",id:"getwebviewbyid",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-4",level:4},{value:"registerServices",id:"registerservices",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-5",level:4},{value:"removeWebviewIpcServer",id:"removewebviewipcserver",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-5",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-6",level:4},{value:"getWebviewIds",id:"getwebviewids",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-7",level:4},{value:"onMessage",id:"onmessage",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-6",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-8",level:4},{value:"sendToWebview",id:"sendtowebview",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-7",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-9",level:4},{value:"broadCast",id:"broadcast",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-8",level:4},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-10",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3}],p={toc:o};function s(e){let{components:i,...t}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,t,{components:i,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"webviewservice"},"webviewService"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"webview \u7ba1\u7406\u670d\u52a1\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8fdb\u7a0b\uff1a",(0,l.kt)("a",{parentName:"li",href:"/docs/guides/features/electron/basic#%E6%B8%B2%E6%9F%93%E8%BF%9B%E7%A8%8B"},"\u6e32\u67d3\u8fdb\u7a0b"),"\u3002")),(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { webviewService } from '@modern-js/runtime/electron-render';\n")))),(0,l.kt)("h2",{id:"\u5b9e\u4f8b\u65b9\u6cd5"},"\u5b9e\u4f8b\u65b9\u6cd5"),(0,l.kt)("h3",{id:"addwebview"},"addWebview"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.addWebview(webviewId[,withIpcServer])")),(0,l.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webviewId\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"[withIpcServer]","\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),"\uff0c\u662f\u5426\u521b\u5efa\u4e0e\u6b64 webview \u7684\u901a\u4fe1\u670d\u52a1\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"true"),"\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"objct | undefined"),"\uff0c\u5982\u679c\u5efa\u7acb\u901a\u4fe1\u670d\u52a1\uff0c\u5219\u8fd4\u56de\u901a\u4fe1\u670d\u52a1\u5bf9\u8c61\u3002")),(0,l.kt)("p",null,"\u901a\u8fc7 webviewService \u8fdb\u884c webview \u7ba1\u7406\u548c\u901a\u4fe1\u65f6\uff0c\u9700\u5148\u5c06 webview \u52a0\u5165\u8fdb\u6765\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u8865\u5145\u4fe1\u606f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u4e00\u822c\uff0c\u6211\u4eec\u4f1a\u5728 webview dom-ready \u7684\u65f6\u5019\u6267\u884c\u6b64\u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ul"},"withIpcServer \u9ed8\u8ba4\u4e3a true\uff0c\u6211\u4eec\u4f1a\u4e3a\u6bcf\u4e00\u4e2a webview \u542f\u52a8\u4e00\u4e2a ipcService \u7528\u4e8e\u7a97\u53e3\u548c webview \u76f4\u63a5\u7684\u53cc\u5411\u901a\u4fe1\u3002")))),(0,l.kt)("h3",{id:"settimeoutdelay"},"setTimeoutDelay"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.setTimeoutDelay(timeout)")),(0,l.kt)("h4",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"timeout\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"number"),"\uff0c\u8d85\u65f6\u65f6\u95f4\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,l.kt)("p",null,"webview \u8fd8\u672a\u4e0e\u7236\u7a97\u53e3\u5efa\u7acb\u8fde\u63a5\u4e4b\u524d\uff0c\u4f1a\u7f13\u5b58 webview \u7684\u6d88\u606f\uff0c\u4f1a\u5728 webview \u8fde\u63a5\u540e\uff0c\u5c06\u6d88\u606f\u53d1\u9001\u7ed9 webview\u3002\n\u6b64\u65b9\u6cd5\u5219\u662f\u8bbe\u7f6e\u7f13\u5b58\u7b49\u5f85\u65f6\u95f4\uff0c\u8d85\u8fc7\u65f6\u95f4\uff0c\u5219\u6d88\u606f\u4f5c\u5e9f\u3002"),(0,l.kt)("h3",{id:"callwebview"},"callWebview"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.callWebview(webviewId,funcName[,...args])")),(0,l.kt)("h4",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webviewId\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"funcName\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u6267\u884c\u7236\u7a97\u53e3\u670d\u52a1\u51fd\u6570\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"[args]","\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"any[]"),"\uff0c\u6267\u884c\u7236\u7a97\u53e3\u670d\u52a1\u51fd\u6570\u53c2\u6570\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Promise<any>"),"\uff0c\u6267\u884c\u7ed3\u679c\u3002")),(0,l.kt)("p",null,"\u8ba9 ID \u4e3a webviewId \u7684 webview \u6267\u884c\u51fd\u6570 ",(0,l.kt)("inlineCode",{parentName:"p"},"funcName"),"\uff0c\u5e76\u8fd4\u56de\u6267\u884c\u7ed3\u679c\u3002"),(0,l.kt)("h3",{id:"dispose"},"dispose"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.dispose()")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,l.kt)("p",null,"\u5173\u95ed\u901a\u4fe1\u8fde\u63a5\uff0c\u5173\u95ed\u901a\u4fe1\u670d\u52a1\u7aef\u3002"),(0,l.kt)("h3",{id:"getwebviewbyid"},"getWebviewById"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.getWebviewById(webviewId)")),(0,l.kt)("h4",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webviewId\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Electron.WebviewTag | null"),"\u3002")),(0,l.kt)("p",null,"\u6839\u636e webviewId \u83b7\u5f97 webview \u5143\u7d20\u3002"),(0,l.kt)("h3",{id:"registerservices"},"registerServices"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.registerServices(services)")),(0,l.kt)("h4",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"services\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"{ [key: string]: unknown }"),"\uff0c\u9700\u8981\u6ce8\u518c\u7684\u670d\u52a1\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-5"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,l.kt)("p",null,"\u6ce8\u518c\u670d\u52a1\uff0c\u7ed9 webview \u8c03\u7528\u3002\u6bd4\u5982\uff1awebviewBridge.callBrowserWindow('xxx', 'xx')\u3002"),(0,l.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u8b66\u544a")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u6b64\u65b9\u6cd5\u4ec5\u53ef\u8c03\u7528\u4e00\u6b21"))),(0,l.kt)("h3",{id:"removewebviewipcserver"},"removeWebviewIpcServer"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.removeWebviewIpcServer(webviewId)")),(0,l.kt)("h4",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webviewId\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-6"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,l.kt)("p",null,"\u53d6\u6d88\u67d0\u4e2a webview \u7684\u901a\u4fe1\u670d\u52a1\u3002"),(0,l.kt)("h3",{id:"getwebviewids"},"getWebviewIds"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.getWebviewIds()")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-7"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"number[]"),"\uff0c\u8fd4\u56de\u6240\u6709 webview \u7684 ID\u3002")),(0,l.kt)("p",null,"\u83b7\u53d6\u6240\u6709 webview \u7684 ",(0,l.kt)("strong",{parentName:"p"},"webcontentsId"),"\u3002"),(0,l.kt)("h3",{id:"onmessage"},"onMessage"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.onMessage(webviewId, channel)")),(0,l.kt)("h4",{id:"\u53c2\u6570-6"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webviewId\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u88ab\u76d1\u542c\u6d88\u606f\u7684 webview \u7684 ID\u3002"),(0,l.kt)("li",{parentName:"ul"},"channel\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9891\u9053\u540d\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-8"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"object"),"\uff0c\u8fd4\u56de\u4ec5\u76d1\u542c channel \u9891\u9053\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u3002")),(0,l.kt)("p",null,"\u8fd4\u56de\u4ec5\u76d1\u542c webview id \u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"webviewId"),"\uff0c \u4e8b\u4ef6\u9891\u9053\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," \u7684\u76d1\u542c\u5668\u3002"),(0,l.kt)("h3",{id:"sendtowebview"},"sendToWebview"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.sendToWebview(webviewId, channel[,data])")),(0,l.kt)("h4",{id:"\u53c2\u6570-7"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"webviewId\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\u3002"),(0,l.kt)("li",{parentName:"ul"},"channel\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9891\u9053\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"[data]","\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"any"),"\uff0c\u6d88\u606f\u53c2\u6570\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-9"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,l.kt)("p",null,"\u6839\u636e webviewId \uff08\u7528\u6237\u5b9a\u4e49\u7684 ID\uff09 \u5728 channel \u7684\u9891\u9053\u7ed9 webview \u53d1\u6d88\u606f\u3002"),(0,l.kt)("h3",{id:"broadcast"},"broadCast"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"webviewService.broadCast(channel[,data])")),(0,l.kt)("h4",{id:"\u53c2\u6570-8"},"\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"channel\uff1a ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),"\uff0c\u9891\u9053\u540d\u3002"),(0,l.kt)("li",{parentName:"ul"},"[data]","\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"any"),"\uff0c\u6d88\u606f\u53c2\u6570\u3002")),(0,l.kt)("h4",{id:"\u8fd4\u56de\u503c-10"},"\u8fd4\u56de\u503c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"void"),"\u3002")),(0,l.kt)("p",null,"\u7ed9\u6b64\u7a97\u53e3\u6240\u6709 webview \u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"channel")," \u4e0a\u5e7f\u64ad\u6d88\u606f\u3002"),(0,l.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,"\u5728\u6e32\u67d3\u8fdb\u7a0b\u4e2d\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"\nimport bridge from '@modern-js/runtime/electron-bridge';\n\nconst { webviewService } = bridge;\n\n...\n\nuseEffect(() => {\n  // \u6dfb\u52a0\u5bf9 webviewid1 \u7684\u7ba1\u7406\uff0c\u5e76\u6ce8\u518c\u901a\u4fe1\u670d\u52a1\n  webviewService.addWebview('webviewid1', true);\n\n  webviewService.registerServices({\n    test: () => {\n      console.log('\u8fd9\u662f\u6ce8\u518c\u7684\u4e00\u4e2a test \u670d\u52a1\uff0c\u7528\u4e8e webviewBridge.callBrowserWindow('test') \u6267\u884c\uff0c\u5e76\u8fd4\u56de\u6267\u884c\u7ed3\u679c!');\n    }\n  })\n\n  // \u7ed9 webviewid1 \u5728 msg-to-webview \u9891\u9053\u53d1\u9001\u6d88\u606f\uff1a{a: 1}\n  webviewService.sendToWebview('webviewid1', 'msg-to-webview', {a: 1};\n\n  // \u76d1\u542c\u6765\u81ea webviewid1 \u7684\u6d88\u606f\n  const onWebview1Msg = webviewService.onMessage('webviewid1', 'msg-from-webview');\n  const onWebview1MsgListener = onWebview1Msg((msg) => console.log('\u8fd9\u662f\u6765\u81ea webview id \u4e3a webviewid1\uff0c\u9891\u9053\u4e3a\uff1amsg-from-webview \u7684\u6d88\u606f:', msg));\n  return () => {\n    // \u7ec4\u4ef6\u5378\u8f7d\uff0c\u53d6\u6d88\u76d1\u542c\n    onWebview1MsgListener.dispose();\n  }\n}, [])\n")))}s.isMDXComponent=!0}}]);