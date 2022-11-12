"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3899],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(52983);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},88815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(18249),a=(n(52983),n(44993));const i={sidebar_label:"assetPrefix",sidebar_position:3},p="dev.assetPrefix",o={unversionedId:"configure/app/dev/asset-prefix",id:"configure/app/dev/asset-prefix",title:"dev.assetPrefix",description:"- \u7c7b\u578b\uff1a boolean | string",source:"@site/docs/configure/app/dev/asset-prefix.md",sourceDirName:"configure/app/dev",slug:"/configure/app/dev/asset-prefix",permalink:"/docs/configure/app/dev/asset-prefix",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"assetPrefix",sidebar_position:3},sidebar:"configsAppSidebar",previous:{title:"withMasterApp",permalink:"/docs/configure/app/dev/with-master-app"},next:{title:"https",permalink:"/docs/configure/app/dev/https"}},s={},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",level:2},{value:"boolean \u7c7b\u578b",id:"boolean-\u7c7b\u578b",level:3},{value:"string \u7c7b\u578b",id:"string-\u7c7b\u578b",level:3},{value:"\u5fae\u524d\u7aef\u573a\u666f",id:"\u5fae\u524d\u7aef\u573a\u666f",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"devassetprefix"},"dev.assetPrefix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u578b\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean | string")),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u503c\uff1a ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))),(0,a.kt)("p",null,"\u8bbe\u7f6e\u5f00\u53d1\u73af\u5883\u4e0b\u7684\u9759\u6001\u8d44\u6e90 URL \u524d\u7f00\uff0c\u5bf9\u5e94 webpack \u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://webpack.js.org/guides/public-path/"},"output.publicPath")," \u914d\u7f6e\u3002"),(0,a.kt)("p",null,"\u5728\u751f\u4ea7\u73af\u5883\u4e0b\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/configure/app/dev/asset-prefix"},"output.assetPrefix")," \u914d\u7f6e\u9879\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("h3",{id:"boolean-\u7c7b\u578b"},"boolean \u7c7b\u578b"),(0,a.kt)("p",null,"\u5f53\u503c\u7684\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," \u65f6\uff0c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u4f1a\u81ea\u52a8\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"//ip:port/")," \u4f5c\u4e3a\u8bbf\u95ee\u524d\u7f00\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="modern.config.js"',title:'"modern.config.js"'},"export default defineConfig({\n  dev: {\n    assetPrefix: true,\n  },\n});\n")),(0,a.kt)("p",null,"\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script defer src="//${ip}:8080/static/js/main.js"><\/script>\n')),(0,a.kt)("p",null,"\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," \u6216\u4e0d\u8bbe\u7f6e\uff0c\u5219\u9ed8\u8ba4\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," \u4f5c\u4e3a\u8bbf\u95ee\u524d\u7f00\u3002"),(0,a.kt)("h3",{id:"string-\u7c7b\u578b"},"string \u7c7b\u578b"),(0,a.kt)("p",null,"\u5f53\u503c\u7684\u7c7b\u578b\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," \u65f6\uff0c\u4f1a\u4f5c\u4e3a\u524d\u7f00\uff0c\u81ea\u52a8\u62fc\u63a5\u5230\u9759\u6001\u8d44\u6e90\u8bbf\u95ee\u8def\u5f84\u4e0a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"export default defineConfig({\n  dev: {\n    assetPrefix: 'http://example.com/assets/',\n  },\n};\n")),(0,a.kt)("p",null,"\u5bf9\u5e94 JS \u6587\u4ef6\u5728\u6d4f\u89c8\u5668\u4e2d\u52a0\u8f7d\u7684\u5730\u5740\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'<script defer src="http://example.com/assets/static/js/main.js"><\/script>\n')),(0,a.kt)("h2",{id:"\u5fae\u524d\u7aef\u573a\u666f"},"\u5fae\u524d\u7aef\u573a\u666f"),(0,a.kt)("p",null,"\u5f53\u9879\u76ee\u4e2d\u542f\u7528\u4e86\u5fae\u524d\u7aef\u529f\u80fd ",(0,a.kt)("inlineCode",{parentName:"p"},"@modern-js/plugin-garfish")," \u65f6\uff0cGarfish \u4f1a\u81ea\u52a8\u8bbe\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"dev.assetPrefix")," \u7684\u503c\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"//localhost:${port}/"),"\uff0c\u4ee5\u4fdd\u8bc1\u5fae\u524d\u7aef\u573a\u666f\u4e0b\u7684\u529f\u80fd\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\uff0c\u56e0\u6b64 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev.assetPrefix")," \u5c06\u65e0\u6cd5\u88ab\u4fee\u6539\u3002"))}u.isMDXComponent=!0}}]);