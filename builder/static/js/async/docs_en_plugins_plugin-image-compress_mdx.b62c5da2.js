(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([["docs_en_plugins_plugin-image-compress_mdx"],{72736:function(e,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});!function(e,s){for(var n in s)Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}(s,{frontmatter:function(){return a},title:function(){return c},toc:function(){return o},default:function(){return d}});var r=n("12151"),i=n("23169"),a={},c="Image Compress Plugin",o=[{text:"Quick Start",depth:2,id:"quick-start"},{text:"Install",depth:3,id:"install"},{text:"Register",depth:3,id:"register"},{text:"Config",depth:2,id:"config"}];function l(e){var s=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",div:"div",h3:"h3",button:"button",pre:"pre",code:"code"},(0,i.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.h1,{id:"image-compress-plugin",children:["Image Compress Plugin",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#image-compress-plugin",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"With the image compression plugin, image resources used in the project can be compressed to reduce the size of the product without affecting the visual appearance of the image."}),"\n",(0,r.jsxs)(s.h2,{id:"quick-start",children:["Quick Start",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#quick-start",children:"#"})]}),"\n",(0,r.jsxs)(s.div,{className:"modern-directive tip",children:[(0,r.jsx)(s.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(s.div,{className:"modern-directive-content",children:(0,r.jsx)(s.p,{children:"When using Rspack as the bundler, the Image Compress plugin is not currently supported."})})]}),"\n",(0,r.jsxs)(s.h3,{id:"install",children:["Install",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#install",children:"#"})]}),"\n",(0,r.jsx)(s.p,{children:"You can install the plugin with the following command:"}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-bash",children:"# npm\nnpm install @modern-js/builder-plugin-image-compress -D\n\n# yarn\nyarn add @modern-js/builder-plugin-image-compress -D\n\n# pnpm\npnpm add @modern-js/builder-plugin-image-compress -D\n"})})]})}),"\n",(0,r.jsxs)(s.h3,{id:"register",children:["Register",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#register",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["In upper-level frameworks such as Modern.js, you can register image compress plugins through the ",(0,r.jsx)(s.code,{children:"builderPlugins"})," config:"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-ts",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\nexport default {\n  builderPlugins: [builderPluginImageCompress()],\n};\n"})})]})}),"\n",(0,r.jsxs)(s.p,{children:["If you are using the Builder's Node API, you can register image compress plugins through the ",(0,r.jsx)(s.code,{children:"addPlugins"})," method:"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"import { builderPluginImageCompress } from '@modern-js/builder-plugin-image-compress';\n\n// add the plugin to the builder instance\nbuilder.addPlugins([builderPluginImageCompress()]);\n"})})]})}),"\n",(0,r.jsxs)(s.h2,{id:"config",children:["Config",(0,r.jsx)(s.a,{className:"header-anchor","aria-hidden":"true",href:"#config",children:"#"})]}),"\n",(0,r.jsxs)(s.p,{children:["The plugin accepts an array of compressor configuration items, each of which can be either a string or an object. The string can be the name of a built-in compressor and its default configuration enabled.\nOr use the object format configuration and specify the compressor in the ",(0,r.jsx)(s.code,{children:"use"})," field. The remaining fields of the object will be used as compressor configuration items."]}),"\n",(0,r.jsxs)(s.p,{children:["By default, the plugin will enable ",(0,r.jsx)(s.code,{children:"jpeg"}),", ",(0,r.jsx)(s.code,{children:"png"}),", ",(0,r.jsx)(s.code,{children:"ico"})," image compressors, which are equivalent to the following two examples:"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'png', 'ico']);\n"})})]})}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress([{ use: 'jpeg' }, { use: 'png' }, { use: 'ico' }]);\n"})})]})}),"\n",(0,r.jsx)(s.p,{children:"The default configuration can be overridden by specifying a configuration item.\nFor example, to allow the jpeg compressor to recognize new extension name and to set the quality of the png compressor."}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress([\n  { use: 'jpeg', test: /\\.(jpg|jpeg|jpe)$/ },\n  { use: 'png', minQuality: 50 },\n  'ico',\n]);\n"})})]})}),"\n",(0,r.jsxs)(s.p,{children:["The default ",(0,r.jsx)(s.code,{children:"png"})," compressor is lossy.\nIf you want to replace it with a lossless compressor, you can use the following configuration."]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'pngLossless', 'ico']);\n"})})]})}),"\n",(0,r.jsx)(s.p,{children:"The list of configuration items will eventually be converted to the corresponding bundler loader configuration, so compressors follow the same bottom-to-top matching rule."}),"\n",(0,r.jsxs)(s.p,{children:["For example, the ",(0,r.jsx)(s.code,{children:"png"})," compressor will take precedence over the ",(0,r.jsx)(s.code,{children:"pngLossless"})," compressor for the following configuration:"]}),"\n",(0,r.jsx)(s.div,{className:"language-",children:(0,r.jsxs)(s.div,{className:"modern-code-content",children:[(0,r.jsx)(s.button,{className:"copy"}),(0,r.jsx)(s.pre,{className:"code",children:(0,r.jsx)(s.code,{className:"language-js",children:"builderPluginImageCompress(['jpeg', 'pngLossless', 'ico', 'png']);\n"})})]})}),"\n",(0,r.jsxs)(s.p,{children:["For more information on compressors, please visit ",(0,r.jsx)(s.a,{href:"https://image.napi.rs/docs",target:"_blank",rel:"noopener noreferrer",children:"@napi-rs/image"}),"."]})]})}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,i.useMDXComponents)(),e.components).wrapper;return s?(0,r.jsx)(s,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);