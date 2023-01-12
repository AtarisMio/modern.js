"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[3978,3722,3062,4639,5506,5001],{48441:function(s,e,n){n.r(e),n.d(e,{content:function(){return x},frontmatter:function(){return d},title:function(){return p},toc:function(){return h}});var l=n(39980),r=n(50715),c=n(70273),o=n(67413),t=n(75574),a=n(42400),i=n(32761);const d={extractApiHeaders:[2]},h=[{id:"devassetprefix",text:"dev.assetPrefix",depth:2},{id:"devhmr",text:"dev.hmr",depth:2},{id:"devhttps",text:"dev.https",depth:2},{id:"devport",text:"dev.port",depth:2},{id:"devprogressbar",text:"dev.progressBar",depth:2},{id:"devstarturl",text:"dev.startUrl",depth:2}],p="Dev Config",x="\"---\\nextractApiHeaders: [2]\\n---\\n\\n# Dev Config\\n\\nThis section describes some dev configurations in Modern.js Builder.\\n\\n## dev.assetPrefix\\n\\nimport AssetPrefix from '@en/config/dev/assetPrefix.md'\\n\\n<AssetPrefix />\\n\\n## dev.hmr\\n\\nimport Hmr from '@en/config/dev/hmr.md';\\n\\n<Hmr />\\n\\n## dev.https\\n\\nimport Https from '@en/config/dev/https.md';\\n\\n<Https />\\n\\n## dev.port\\n\\nimport Port from '@en/config/dev/port.md';\\n\\n<Port />\\n\\n## dev.progressBar\\n\\nimport ProgressBar from '@en/config/dev/progressBar.md';\\n\\n<ProgressBar />\\n\\n## dev.startUrl\\n\\nimport StartUrl from '@en/config/dev/startUrl.md';\\n\\n<StartUrl />\\n\"";function j(s){const e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"dev-config",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-config",children:"#"}),"Dev Config"]}),"\n",(0,l.jsx)(e.p,{children:"This section describes some dev configurations in Modern.js Builder."}),"\n",(0,l.jsxs)(e.h2,{id:"devassetprefix",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devassetprefix",children:"#"}),"dev.assetPrefix"]}),"\n","\n",(0,l.jsx)(r.default,{}),"\n",(0,l.jsxs)(e.h2,{id:"devhmr",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devhmr",children:"#"}),"dev.hmr"]}),"\n","\n",(0,l.jsx)(c.default,{}),"\n",(0,l.jsxs)(e.h2,{id:"devhttps",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devhttps",children:"#"}),"dev.https"]}),"\n","\n",(0,l.jsx)(o.default,{}),"\n",(0,l.jsxs)(e.h2,{id:"devport",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devport",children:"#"}),"dev.port"]}),"\n","\n",(0,l.jsx)(t.default,{}),"\n",(0,l.jsxs)(e.h2,{id:"devprogressbar",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devprogressbar",children:"#"}),"dev.progressBar"]}),"\n","\n",(0,l.jsx)(a.default,{}),"\n",(0,l.jsxs)(e.h2,{id:"devstarturl",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#devstarturl",children:"#"}),"dev.startUrl"]}),"\n","\n",(0,l.jsx)(i.default,{})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(j,s)})):j(s)}},50715:function(s,e,n){n.r(e),n.d(e,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=n(39980);const r=void 0,c=[{id:"boolean-type",text:"Boolean Type",depth:4},{id:"string-type",text:"String type",depth:4}],o='"- Type: `boolean | string`\\n- Default: `\'/\'`\\n\\nSet the URL prefix of static assets in the development environment, similar to the [output.publicPath](https://webpack.js.org/guides/public-path/) config of webpack.\\n\\n`assetPrefix` will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you\'ll receive 404 errors while loading these resources.\\n\\nThis config is only used in the development environment. In the production environment, please use the `output.assetPrefix` to set the URL prefix.\\n\\n#### Boolean Type\\n\\nIf `assetPrefix` is set to `true`, the URL prefix will be `//ip:port/`:\\n\\n```js\\nexport default {\\n  dev: {\\n    assetPrefix: true,\\n  },\\n};\\n```\\n\\nThe script URL will be:\\n\\n```js\\n<script defer src=\\"//${ip}:8080/static/js/main.js\\"><\/script>\\n```\\n\\nIf `assetPrefix` is set to `false` or not set, `/` is used as the default value.\\n\\n#### String type\\n\\nWhen the value of `assetPrefix` is `string` type, the string will be used as the URL prefix:\\n\\n```js\\nexport default {\\n  dev: {\\n    assetPrefix: \'http://example.com/assets/\',\\n  },\\n};\\n```\\n\\nThe script URL will be:\\n\\n```js\\n<script defer src=\\"http://example.com/assets/static/js/main.js\\"><\/script>\\n```\\n"';function t(s){const e=Object.assign({ul:"ul",li:"li",code:"code",p:"p",a:"a",h4:"h4",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Type: ",(0,l.jsx)(e.code,{children:"boolean | string"})]}),"\n",(0,l.jsxs)(e.li,{children:["Default: ",(0,l.jsx)(e.code,{children:"'/'"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["Set the URL prefix of static assets in the development environment, similar to the ",(0,l.jsx)(e.a,{href:"https://webpack.js.org/guides/public-path/",target:"_blank",rel:"nofollow",children:"output.publicPath"})," config of webpack."]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"assetPrefix"})," will affect the URLs of most of the static assets, including JavaScript files, CSS files, images, videos, etc. If an incorrect value is specified, you'll receive 404 errors while loading these resources."]}),"\n",(0,l.jsxs)(e.p,{children:["This config is only used in the development environment. In the production environment, please use the ",(0,l.jsx)(e.code,{children:"output.assetPrefix"})," to set the URL prefix."]}),"\n",(0,l.jsxs)(e.h4,{id:"boolean-type",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#boolean-type",children:"#"}),"Boolean Type"]}),"\n",(0,l.jsxs)(e.p,{children:["If ",(0,l.jsx)(e.code,{children:"assetPrefix"})," is set to ",(0,l.jsx)(e.code,{children:"true"}),", the URL prefix will be ",(0,l.jsx)(e.code,{children:"//ip:port/"}),":"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"assetPrefix"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"The script URL will be:"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"<script"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"defer"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"src"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"//${ip}:8080/static/js/main.js"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"><\/script>"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["If ",(0,l.jsx)(e.code,{children:"assetPrefix"})," is set to ",(0,l.jsx)(e.code,{children:"false"})," or not set, ",(0,l.jsx)(e.code,{children:"/"})," is used as the default value."]}),"\n",(0,l.jsxs)(e.h4,{id:"string-type",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#string-type",children:"#"}),"String type"]}),"\n",(0,l.jsxs)(e.p,{children:["When the value of ",(0,l.jsx)(e.code,{children:"assetPrefix"})," is ",(0,l.jsx)(e.code,{children:"string"})," type, the string will be used as the URL prefix:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"assetPrefix"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"http://example.com/assets/"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsx)(e.p,{children:"The script URL will be:"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"<script"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"defer"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"src"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"http://example.com/assets/static/js/main.js"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:'"'}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"><\/script>"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(t,s)})):t(s)}},70273:function(s,e,n){n.r(e),n.d(e,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=n(39980);const r=void 0,c=[],o='"- Type: `boolean`\\n- Default: `true`\\n\\nWhether to enable Hot Module Replacement.\\n\\nIf `hmr` is set to `false`, the HMR and react-refresh will no longer work.\\n\\n```js\\nexport default {\\n  dev: {\\n    hmr: false,\\n  },\\n};\\n```\\n"';function t(s){const e=Object.assign({ul:"ul",li:"li",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Type: ",(0,l.jsx)(e.code,{children:"boolean"})]}),"\n",(0,l.jsxs)(e.li,{children:["Default: ",(0,l.jsx)(e.code,{children:"true"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Whether to enable Hot Module Replacement."}),"\n",(0,l.jsxs)(e.p,{children:["If ",(0,l.jsx)(e.code,{children:"hmr"})," is set to ",(0,l.jsx)(e.code,{children:"false"}),", the HMR and react-refresh will no longer work."]}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"hmr"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(t,s)})):t(s)}},75574:function(s,e,n){n.r(e),n.d(e,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=n(39980);const r=void 0,c=[{id:"example",text:"Example",depth:4}],o='"- Type: `number`\\n- Default: `8080`\\n\\nSpecify a port number for Dev Server to listen.\\n\\nBy default, Dev Server listens on port `8080` and automatically increments the port number when the port is occupied.\\n\\n#### Example\\n\\nSet the port to `3000`:\\n\\n```ts\\nexport default {\\n  dev: {\\n    port: 3000,\\n  },\\n};\\n```\\n"';function t(s){const e=Object.assign({ul:"ul",li:"li",code:"code",p:"p",h4:"h4",a:"a",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Type: ",(0,l.jsx)(e.code,{children:"number"})]}),"\n",(0,l.jsxs)(e.li,{children:["Default: ",(0,l.jsx)(e.code,{children:"8080"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Specify a port number for Dev Server to listen."}),"\n",(0,l.jsxs)(e.p,{children:["By default, Dev Server listens on port ",(0,l.jsx)(e.code,{children:"8080"})," and automatically increments the port number when the port is occupied."]}),"\n",(0,l.jsxs)(e.h4,{id:"example",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#example",children:"#"}),"Example"]}),"\n",(0,l.jsxs)(e.p,{children:["Set the port to ",(0,l.jsx)(e.code,{children:"3000"}),":"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"port"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#B48EAD"},children:"3000"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(t,s)})):t(s)}},42400:function(s,e,n){n.r(e),n.d(e,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=n(39980);const r=void 0,c=[],o="\"- Type:\\n\\n```ts\\ntype ProgressBar =\\n  | boolean\\n  | {\\n      id?: string;\\n    };\\n```\\n\\n- Default: `true`\\n\\nWhether to display progress bar during compilation.\\n\\n```js\\nexport default {\\n  dev: {\\n    progressBar: false,\\n  },\\n};\\n```\\n\\nIf you need to modify the text displayed on the left side of the progress bar, you can set the `id` option:\\n\\n```ts\\nexport default {\\n  dev: {\\n    progressBar: {\\n      id: 'Some Text',\\n    },\\n  },\\n};\\n```\\n\"";function t(s){const e=Object.assign({ul:"ul",li:"li",div:"div",button:"button",pre:"pre",code:"code",span:"span",p:"p"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Type:"}),"\n"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"type"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"ProgressBar"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"="})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"boolean"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"|"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      id"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"?:"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#8FBCBB"},children:"string"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Default: ",(0,l.jsx)(e.code,{children:"true"})]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"Whether to display progress bar during compilation."}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"progressBar"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["If you need to modify the text displayed on the left side of the progress bar, you can set the ",(0,l.jsx)(e.code,{children:"id"})," option:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"progressBar"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9"},children:"id"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"Some Text"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(t,s)})):t(s)}},32761:function(s,e,n){n.r(e),n.d(e,{content:function(){return o},frontmatter:function(){return r},toc:function(){return c}});var l=n(39980);const r=void 0,c=[],o="\"- Type: `boolean | string | string[] | undefined`\\n- Default: `undefined`\\n\\n`dev.startUrl` is used to set the URL of the page that automatically opens in the browser when Dev Server starts.\\n\\nBy default, no page will be opened.\\n\\nYou can set it to the following values:\\n\\n```js\\nexport default {\\n  dev: {\\n    // Open the project's default preview page\\n    startUrl: true,\\n    // Open the specified page\\n    startUrl: 'http://localhost:8080',\\n    // Open multiple pages\\n    startUrl: ['http://localhost:8080', 'http://localhost:8080/about'],\\n  },\\n};\\n```\\n\"";function t(s){const e=Object.assign({ul:"ul",li:"li",code:"code",p:"p",div:"div",button:"button",pre:"pre",span:"span"},s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["Type: ",(0,l.jsx)(e.code,{children:"boolean | string | string[] | undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:["Default: ",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"dev.startUrl"})," is used to set the URL of the page that automatically opens in the browser when Dev Server starts."]}),"\n",(0,l.jsx)(e.p,{children:"By default, no page will be opened."}),"\n",(0,l.jsx)(e.p,{children:"You can set it to the following values:"}),"\n",(0,l.jsxs)(e.div,{className:"language-js",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"#2e3440ff"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"dev"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"{"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// Open the project's default preview page"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"startUrl"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// Open the specified page"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"startUrl"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"http://localhost:8080"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#616E88"},children:"// Open multiple pages"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"#88C0D0"},children:"startUrl"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:":"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" ["}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"http://localhost:8080"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:" "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#A3BE8C"},children:"http://localhost:8080/about"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"'"}),(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#D8DEE9FF"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"},"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"#ECEFF4"},children:"}"}),(0,l.jsx)(e.span,{style:{color:"#81A1C1"},children:";"})]}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}e.default=function(s={}){const{wrapper:e}=s.components||{};return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(t,s)})):t(s)}}}]);