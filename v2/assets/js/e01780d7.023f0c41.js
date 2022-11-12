"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2928],{44993:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(52983);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(18249),o=(n(52983),n(44993));const i={title:"CSS-In-JS API",sidebar_position:2},a=void 0,p={unversionedId:"apis/app/runtime/utility/css-in-js",id:"apis/app/runtime/utility/css-in-js",title:"CSS-In-JS API",description:"\u901a\u8fc7 Style Component \u5728\u9875\u9762\u4e0a\u4f7f\u7528 CSS\u3002",source:"@site/docs/apis/app/runtime/utility/css-in-js.md",sourceDirName:"apis/app/runtime/utility",slug:"/apis/app/runtime/utility/css-in-js",permalink:"/docs/apis/app/runtime/utility/css-in-js",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"CSS-In-JS API",sidebar_position:2},sidebar:"apisAppSidebar",previous:{title:"hook",permalink:"/docs/apis/app/runtime/web-server/hook"},next:{title:"loadable",permalink:"/docs/apis/app/runtime/utility/loadable/loadable_"}},s={},l=[{value:"API",id:"api",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"\u8865\u5145\u4fe1\u606f",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u901a\u8fc7 Style Component \u5728\u9875\u9762\u4e0a\u4f7f\u7528 CSS\u3002"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import styled from '@modern-js/runtime/styled';\n"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"styled")," \u5177\u4f53API\uff0c\u8bf7\u770b\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component api"),"\u3002"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("p",null,"\u8bf7\u770b ",(0,o.kt)("a",{parentName:"p",href:"https://styled-components.com/docs/api"},"styled-component API"),"\u3002"),(0,o.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import styled from \'@modern-js/runtime/styled\';\n\nconst Button = styled.button`\n  background: palevioletred;\n  border-radius: 3px;\n  border: none;\n  color: white;\n`\n\nconst TomatoButton = styled(Button)`\n  background: tomato;\n`\n\nrender(\n  <>\n    <Button>I\'m purple.</Button>\n    <br />\n    <TomatoButton>I\'m red.</TomatoButton>\n  </>\n)\n`\n\nrender(\n  <div>\n    <Button\n      href="https://github.com/styled-components/styled-components"\n      target="_blank"\n      rel="noopener"\n      primary\n    >\n      GitHub\n    </Button>\n\n    <Button as={Link} href="/docs">\n      Documentation\n    </Button>\n  </div>\n)\n')))}u.isMDXComponent=!0}}]);