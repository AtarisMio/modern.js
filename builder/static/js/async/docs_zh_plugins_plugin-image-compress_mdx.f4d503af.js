(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_plugins_plugin-image-compress_mdx"],{18475:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return l},title:function(){return o},default:function(){return a}});var r=n("12151");let i=void 0,l=[{id:"快速开始",text:"快速开始",depth:2},{id:"安装插件",text:"安装插件",depth:3},{id:"注册插件",text:"注册插件",depth:3},{id:"配置项",text:"配置项",depth:2}],o="Image Compress 插件";function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",button:"button",pre:"pre",code:"code",span:"span"},s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"image-compress-插件",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#image-compress-插件",children:"#"}),"Image Compress 插件"]}),"\n",(0,r.jsx)(e.p,{children:"Image Compress 插件会将项目中用到的图片资源进行压缩处理，进而在图片视觉观感不受影响的同时减小产物体积。"}),"\n",(0,r.jsxs)(e.h2,{id:"快速开始",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#快速开始",children:"#"}),"快速开始"]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsx)(e.p,{children:"\n在使用 Rspack 作为打包工具时，Image Compress 插件暂不支持使用。"})})]}),"\n",(0,r.jsxs)(e.h3,{id:"安装插件",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#安装插件",children:"#"}),"安装插件"]}),"\n",(0,r.jsx)(e.p,{children:"你可以通过如下的命令安装插件:"}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# npm"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"npm install @modern-js/builder-plugin-image-compress -D"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# yarn"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"yarn add @modern-js/builder-plugin-image-compress -D"})}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"# pnpm"})}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"pnpm add @modern-js/builder-plugin-image-compress -D"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h3,{id:"注册插件",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#注册插件",children:"#"}),"注册插件"]}),"\n",(0,r.jsxs)(e.p,{children:["在 ","Modern.js"," / EdenX 等上层框架中，你可以通过 ",(0,r.jsx)(e.code,{children:"builderPlugins"})," 配置项来注册 Image Compress 插件："]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginImageCompress } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-image-compress'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  builderPlugins"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["当你直接调用 Builder 的 Node API 时，可以通过 ",(0,r.jsx)(e.code,{children:"addPlugins"})," 方法来注册 Image Compress 插件："]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { builderPluginImageCompress } "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/builder-plugin-image-compress'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-comment)"},children:"// 往 builder 实例上添加插件"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"builder"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".addPlugins"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"()]);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.h2,{id:"配置项",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#配置项",children:"#"}),"配置项"]}),"\n",(0,r.jsxs)(e.p,{children:["插件接受一系列压缩器配置项组成的数组，数组的每一项既可以是字符串也可以是对象。字符串代表使用对应名称的压缩器并启用其默认配置，\n或是使用对象格式配置并在 ",(0,r.jsx)(e.code,{children:"use"})," 字段指定压缩器，对象的剩余字段将作为压缩器的配置项。"]}),"\n",(0,r.jsxs)(e.p,{children:["插件默认会开启 ",(0,r.jsx)(e.code,{children:"jpeg"}),", ",(0,r.jsx)(e.code,{children:"png"}),", ",(0,r.jsx)(e.code,{children:"ico"})," 三种图片压缩器，即等同于如下两种写法的配置："]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'jpeg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'png'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ico'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"([{ use"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'jpeg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { use"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'png'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { use"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ico'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }]);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"通过指定配置项可以覆盖默认配置，例如让 jpeg 压缩器识别新的拓展名并设置 png 压缩器的质量："}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { use"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'jpeg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" test"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:" /\\.(jpg"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"jpeg"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"|"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"jpe)"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"$"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  { use"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'png'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" minQuality"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"50"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ico'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["默认的 ",(0,r.jsx)(e.code,{children:"png"})," 压缩器为有损压缩，如果需要将其替换为无损压缩器，你可以使用如下配置："]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'jpeg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pngLossless'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ico'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["配置项列表最终会转换成对应的 bundler loader 配置，因此压缩器也遵循从下到上依次匹配的规则。\n例如对于如下配置，",(0,r.jsx)(e.code,{children:"png"})," 压缩器会优先于 ",(0,r.jsx)(e.code,{children:"pngLossless"})," 压缩器生效："]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"builderPluginImageCompress"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'jpeg'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'pngLossless'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'ico'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'png'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["压缩器的具体配置项请参考 ",(0,r.jsx)(e.a,{href:"https://image.napi.rs/docs",target:"_blank",rel:"nofollow",children:"@napi-rs/image"}),"。"]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=s.components||{};return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);