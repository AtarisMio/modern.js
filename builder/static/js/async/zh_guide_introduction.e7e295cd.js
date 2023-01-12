"use strict";(self.webpackChunk_modern_js_builder_doc=self.webpackChunk_modern_js_builder_doc||[]).push([[4764,5521,7629],{77641:function(e,r,s){s.r(r),s.d(r,{content:function(){return a},frontmatter:function(){return i},title:function(){return c},toc:function(){return t}});var n=s(39980),l=s(25688),d=s(77226);const i=void 0,t=[{id:"rust-\u5316",text:"Rust \u5316",depth:2},{id:"\u5b9a\u4f4d",text:"\u5b9a\u4f4d",depth:2},{id:"\u7279\u6027",text:"\u7279\u6027",depth:2},{id:"\u652f\u6301\u591a\u79cd\u6253\u5305\u5de5\u5177",text:"\u652f\u6301\u591a\u79cd\u6253\u5305\u5de5\u5177",depth:3},{id:"\u6df1\u5ea6\u4f18\u5316\u6784\u5efa\u4ea7\u7269",text:"\u6df1\u5ea6\u4f18\u5316\u6784\u5efa\u4ea7\u7269",depth:3},{id:"\u6613\u4e8e\u6269\u5c55\u7684\u63d2\u4ef6\u7cfb\u7edf",text:"\u6613\u4e8e\u6269\u5c55\u7684\u63d2\u4ef6\u7cfb\u7edf",depth:3},{id:"npm-\u5305",text:"npm \u5305",depth:2},{id:"\u4e0b\u4e00\u6b65",text:"\u4e0b\u4e00\u6b65",depth:2}],c="\u4ecb\u7ecd",a='"# \u4ecb\u7ecd\\n\\nModern.js Builder \u662f**\u4e00\u4e2a\u9762\u5411 Web \u5f00\u53d1\u573a\u666f\u7684\u6784\u5efa\u5f15\u64ce**\u3002\\n\\n\u968f\u7740\u524d\u7aef\u751f\u6001\u7684\u53d1\u5c55\uff0c\u793e\u533a\u4e2d\u51fa\u73b0\u4e86\u591a\u6837\u5316\u7684\u7f16\u8bd1\u5de5\u5177\u548c\u63d2\u4ef6\u3002\u5bf9\u4e8e\u5927\u90e8\u5206\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u6784\u5efa\u4e00\u4e2a Web \u5e94\u7528\u6240\u9700\u7684\u914d\u7f6e\u548c\u4f9d\u8d56\u5df2\u53d8\u5f97\u5341\u5206\u590d\u6742\u3002\u5728\u8ffd\u6c42\u6700\u4f73\u5b9e\u8df5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5f00\u53d1\u8005\u9700\u8981\u4ed8\u51fa\u7684\u6210\u672c\u4e5f\u5728\u4e0d\u65ad\u4e0a\u5347\u3002\\n\\n\u4e3a\u4e86\u51cf\u5c11\u6784\u5efa\u7684\u590d\u6742\u6027\uff0c\u964d\u4f4e\u4e0a\u624b\u95e8\u69db\uff0c\u6211\u4eec\u57fa\u4e8e Modern.js \u5728 Web \u5e94\u7528\u6784\u5efa\u65b9\u9762\u7684\u5b9e\u8df5\u7ecf\u9a8c\uff0c\u62bd\u8c61\u5176\u4e2d\u7684\u6784\u5efa\u80fd\u529b\uff0c\u6253\u9020\u51fa Modern.js Builder \u8fd9\u4e2a\u5f00\u6e90\u5de5\u5177\u3002\\n\\n## Rust \u5316\\n\\n\u8fd1\u5e74\u6765\uff0c\u524d\u7aef\u5de5\u5177\u94fe\u7684\u53d1\u5c55\u8d8b\u52bf\u662f\u4f7f\u7528 Rust \u7b49\u7f16\u7a0b\u8bed\u8a00\u91cd\u65b0\u5b9e\u73b0 \u2014\u2014 \u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u8868\u73b0\u3002\u793e\u533a\u4e2d\u51fa\u73b0 [SWC](https://swc.rs/)\u3001[esbuild](https://github.com/evanw/esbuild)\u3001[Turbopack](https://turbo.build/pack) \u7b49\u9ad8\u6027\u80fd\u5de5\u5177\uff0c\u5e76\u4e14\u5e94\u7528\u9886\u57df\u5728\u9010\u6b65\u6269\u5bbd\u3002\u4f46\u8fd9\u4e9b Rust \u5de5\u5177\u4e0e JavaScript \u5de5\u5177\u4e4b\u95f4\u5b58\u5728\u8f83\u591a\u5dee\u5f02\uff0c\u5305\u62ec\u529f\u80fd\u4e0d\u5b8c\u6574\u3001\u914d\u7f6e\u4e0d\u4e00\u81f4\u7b49\uff0c\u5bfc\u81f4\u4f7f\u7528\u8005\u9700\u8981\u627f\u62c5\u4e00\u5b9a\u7684\u8fc1\u79fb\u6210\u672c\u3002\\n\\n<img src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/rust-tools-11175.png\\" />\\n\\n\u524d\u7aef\u5de5\u5177\u94fe Rust \u5316\u7684\u8fdb\u7a0b\u8fd8\u4f1a\u6301\u7eed\u8f83\u957f\u4e00\u6bb5\u65f6\u95f4\uff0c**Modern.js Builder \u671f\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u8fc7\u6e21\u5230 Rust \u5de5\u5177**\u3002\u4e0d\u7ba1\u662f JavaScript \u5de5\u5177\uff0c\u8fd8\u662f Rust \u5de5\u5177\uff0c\u751a\u81f3\u662f webpack \u7b49\u5e95\u5c42 bundler\uff0c\u5728 Modern.js Builder \u4e2d\u90fd\u662f\u53ef\u66ff\u6362\u7684\u96f6\u90e8\u4ef6\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5f00\u542f\u914d\u7f6e\u6216\u542f\u7528\u63d2\u4ef6\u7684\u65b9\u5f0f\uff0c\u5bf9\u8fd9\u4e9b\u96f6\u90e8\u4ef6\u8fdb\u884c\u6e10\u8fdb\u5f0f\u66ff\u6362\uff0cModern.js Builder \u4f1a\u62b9\u5e73\u5176\u4e2d\u7684\u4e3b\u8981\u5dee\u5f02\uff0c\u5e2e\u52a9\u4f7f\u7528\u8005\u8fdb\u884c\u4f4e\u6210\u672c\u8fc1\u79fb\u3002\\n\\n## \u5b9a\u4f4d\\n\\nModern.js Builder (\u7b80\u79f0 Builder) \u7684\u5b9a\u4f4d\u662f**\u670d\u52a1\u4e8e\u4e0a\u5c42\u6846\u67b6\u7684\u6784\u5efa\u5f15\u64ce**\uff0c\u5b83\u4e13\u6ce8\u4e8e\u89e3\u51b3 Web \u5e94\u7528\u6784\u5efa\u9762\u4e34\u7684\u5404\u7c7b\u95ee\u9898\uff0c\u671f\u671b\u80fd\u4e3a\u524d\u7aef\u6846\u67b6\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u6784\u5efa\u80fd\u529b\u3002\\n\\n<img\\n  src=\\"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png\\"\\n  style={{ maxWidth: \'80%\', marginLeft: \'10%\' }}\\n/>\\n\\n\u5982\u679c\u4f60\u6b63\u5728\u5f00\u53d1\u4e00\u4e2a\u524d\u7aef\u6846\u67b6\uff0c\u6216\u662f\u5f00\u53d1\u4e00\u4e2a\u524d\u7aef\u5e94\u7528\u7684\u811a\u624b\u67b6\uff0c\u90a3\u4e48 Builder \u53ef\u4ee5\u4e3a\u4f60\u5b8c\u6210\u524d\u7aef\u6846\u67b6\u4e2d\u5927\u90e8\u5206\u4e0e\u6784\u5efa\u6709\u5173\u7684\u903b\u8f91\uff0c\u8ba9\u4f60\u80fd\u591f\u805a\u7126\u4e8e\u5b9e\u73b0\u6846\u67b6\u7684\u5176\u4ed6\u529f\u80fd\u3002\\n\\n\u5982\u679c\u4f60\u662f\u4e00\u540d\u4e1a\u52a1\u5f00\u53d1\u8005\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u9700\u8981\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\u624b\u52a8\u63a5\u5165 Builder\uff0c\u6211\u4eec\u63a8\u8350\u4f60\u76f4\u63a5\u4f7f\u7528\u4e00\u4e9b\u57fa\u4e8e Builder \u7684\u4e0a\u5c42\u6846\u67b6\u3002\\n\\n\u76ee\u524d\u5df2\u7ecf\u63a5\u5165 Builder \u7684\u524d\u7aef\u6846\u67b6\u6709\uff1a\\n\\n- \u5f00\u6e90\u7684 [Modern.js 2.0](https://github.com/modern-js-dev/modern.js) \u6846\u67b6\u3002\\n- \u5b57\u8282\u8df3\u52a8\u5185\u90e8\u7684 EdenX\u3001PIA \u7b49\u6846\u67b6\u3002\\n\\n## \u7279\u6027\\n\\n### \u652f\u6301\u591a\u79cd\u6253\u5305\u5de5\u5177\\n\\n\u5728\u67b6\u6784\u4e0a\uff0c**Builder \u652f\u6301\u591a\u79cd\u6253\u5305\u5de5\u5177**\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u9700\u6c42\u6765\u4f7f\u7528\u4e0d\u540c\u7684\u6253\u5305\u5de5\u5177\u3002\\n\\n\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBuilder \u4f7f\u7528 webpack 5 \u4f5c\u4e3a\u6253\u5305\u5de5\u5177\uff0c\u5c3d\u7ba1 webpack \u7684\u7f16\u8bd1\u901f\u5ea6\u4e0d\u662f\u5f88\u7406\u60f3\uff0c\u4f46\u5b83\u4f9d\u7136\u662f\u793e\u533a\u4e2d\u529f\u80fd\u6700\u5b8c\u6574\u3001\u751f\u6001\u6700\u4e30\u5bcc\u7684\u6253\u5305\u5de5\u5177\u3002Builder \u5728 webpack \u7684\u57fa\u7840\u4e0a\uff0c\u96c6\u6210\u4e86 [babel](https://github.com/babel/babel)\u3001[postcss](https://github.com/postcss/postcss)\u3001[terser](https://github.com/terser/terser) \u7b49\u5de5\u5177\u8fdb\u884c\u4ee3\u7801\u8f6c\u4e49\u548c\u538b\u7f29\u3002Builder \u4e5f\u652f\u6301\u66ff\u6362\u90e8\u5206\u7f16\u8bd1\u80fd\u529b\u4e3a\u539f\u751f\u5de5\u5177\u6765\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6\uff0c\u6bd4\u5982\u5c06 babel/terser \u66ff\u6362\u4e3a [swc](https://github.com/swc-project/swc) \u6216 [esbuild](https://github.com/evanw/esbuild)\u3002\\n\\n\u9664\u4e86 webpack \u6253\u5305\uff0cBuilder \u4e5f\u6b63\u5728\u5bf9\u63a5**\u5b57\u8282\u8df3\u52a8 Web Infra \u56e2\u961f\u81ea\u7814\u7684 Rust Bundler \u2014\u2014 rspack**\uff0c\u4ee5\u63d0\u4f9b\u66f4\u5feb\u7684\u7f16\u8bd1\u901f\u5ea6\u3002\\n\\n\u76ee\u524d\uff0cBuilder \u57fa\u4e8e webpack \u7684\u6784\u5efa\u5df2\u7ecf\u6210\u719f\u53ef\u7528\uff0c\u57fa\u4e8e rspack \u7684\u6784\u5efa\u4ecd\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\u3002\\n\\n:::tip \u5173\u4e8e Turbopack\\n\u5c3d\u7ba1 Builder \u5df2\u7ecf\u5728\u5bf9\u63a5 rspack\uff0c\u5bf9\u4e8e webpack \u7684\u7ee7\u4efb\u8005 \u2014\u2014 [Turbopack](https://turbo.build/pack)\uff0c\u6211\u4eec\u4e5f\u4f1a\u6301\u7eed\u5173\u6ce8\u5b83\u540e\u7eed\u7684\u53d1\u5c55\u60c5\u51b5\u3002\\n\\n\u76ee\u524d Turbopack \u4ec5\u652f\u6301\u5728 Next.js \u4e2d\u4f7f\u7528\uff0c\u5f53 Turbopack \u652f\u6301\u72ec\u7acb\u4f7f\u7528\uff0c\u5e76\u4e14\u5b8c\u6210\u5ea6\u548c\u793e\u533a\u751f\u6001\u8fbe\u5230\u4e00\u5b9a\u6c34\u5e73\u65f6\uff0c\u6211\u4eec\u4f1a\u8003\u8651\u8fdb\u884c\u63a5\u5165\u3002\\n:::\\n\\n### \u6df1\u5ea6\u4f18\u5316\u6784\u5efa\u4ea7\u7269\\n\\nBuilder **\u5145\u5206\u5229\u7528 webpack \u751f\u6001\u5185\u7684\u5404\u79cd\u4f18\u5316\u624b\u6bb5**\uff0c\u4fdd\u8bc1\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269\u6027\u80fd\u5f97\u5230\u6df1\u5ea6\u4f18\u5316\uff0c\u5e76\u5728\u7a33\u5b9a\u6027\u4e0a\u63d0\u4f9b\u4fdd\u969c\u3002\\n\\n\u4ee5\u62c6\u5305\u573a\u666f\u4e3a\u4f8b\uff0cwebpack \u539f\u751f\u7684 splitChunks \u914d\u7f6e\u8f83\u4e3a\u590d\u6742\uff0cBuilder \u5c06\u5176\u5c01\u88c5\u4e3a\u5f00\u7bb1\u5373\u7528\u7684 [performance.chunkSplit](/api/config-performance.html#performance-chunksplit) \u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u5c06\u5e38\u89c1\u7684\u4e09\u65b9\u5e93\u62c6\u5206\u4e3a\u4f53\u79ef\u9002\u4e2d\u7684 chunk\uff0c\u4f7f\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u8fbe\u5230\u6700\u4f18\u72b6\u6001\u3002\\n\\n### \u6613\u4e8e\u6269\u5c55\u7684\u63d2\u4ef6\u7cfb\u7edf\\n\\nBuilder \u63d0\u4f9b\u4e30\u5bcc\u7684\u914d\u7f6e\u9879\u548c\u53ef\u63d2\u62d4\u7684\u63d2\u4ef6\u7cfb\u7edf\uff0c\u652f\u6301\u5bf9\u5404\u9879\u80fd\u529b\u8fdb\u884c\u6269\u5c55\u548c\u5b9a\u5236\u3002\\n\\n\u5bf9\u4e8e Builder \u6765\u8bf4\uff0c\u6240\u6709\u7684\u6784\u5efa\u80fd\u529b\u90fd\u662f\u901a\u8fc7\u63d2\u4ef6\u6765\u5b9e\u73b0\u7684\uff1a\\n\\n- \u5927\u90e8\u5206\u63d2\u4ef6\u8f83\u4e3a\u8f7b\u91cf\uff0c\u88ab\u5185\u7f6e\u5728 Builder \u5185\u90e8\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879\u6765\u63a7\u5236\u542f\u7528\u3002\\n- \u5c11\u90e8\u5206\u63d2\u4ef6\u8f83\u4e3a\u590d\u6742\uff0c\u88ab\u5916\u7f6e\u4e3a\u72ec\u7acb npm \u5305\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6309\u9700\u8fdb\u884c\u5b89\u88c5\u548c\u4f7f\u7528\u3002\\n\\nBuilder \u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u56e0\u6b64\u6846\u67b6\u5f00\u53d1\u8005\u53ef\u4ee5\u5f00\u53d1\u81ea\u5b9a\u4e49\u7684\u63d2\u4ef6\uff0c\u5b9e\u73b0\u5b9a\u5236\u5316\u7684\u6784\u5efa\u9700\u6c42\u3002\\n\\n## npm \u5305\\n\\nBuilder \u5df2\u53d1\u5e03\u7684 npm \u5305\u6709\uff1a\\n\\n| \u5305\u540d                                                                                                               | \u7248\u672c                                                                                         | \u63cf\u8ff0                   |\\n| ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------- | ---------------------- |\\n| [@modern-js/builder](https://www.npmjs.com/package/@modern-js/builder)                                             | ![](https://img.shields.io/npm/v/@modern-js/builder?style=flat-square)                       | Builder \u6838\u5fc3\u5305         |\\n| [@modern-js/builder-webpack-provider](https://www.npmjs.com/package/@modern-js/builder-webpack-provider)           | ![](https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square)      | \u63d0\u4f9b webpack \u6784\u5efa\u80fd\u529b  |\\n| [@modern-js/builder-rspack-provider](https://www.npmjs.com/package/@modern-js/builder-rspack-provider)             | ![](https://img.shields.io/npm/v/@modern-js/builder-rspack-provider?style=flat-square)       | \u63d0\u4f9b rspack \u6784\u5efa\u80fd\u529b   |\\n| [@modern-js/builder-plugin-swc](https://www.npmjs.com/package/@modern-js/builder-plugin-swc)                       | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-swc?style=flat-square)            | SWC \u63d2\u4ef6               |\\n| [@modern-js/builder-plugin-stylus](https://www.npmjs.com/package/@modern-js/builder-plugin-stylus)                 | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-stylus?style=flat-square)         | Stylus \u63d2\u4ef6            |\\n| [@modern-js/builder-plugin-esbuild](https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild)               | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square)        | Esbuild \u63d2\u4ef6           |\\n| [@modern-js/builder-plugin-node-polyfill](https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill)   | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square)  | Node Polyfill \u63d2\u4ef6     |\\n| [@modern-js/builder-plugin-image-compress](https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress) | ![](https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress?style=flat-square) | Image Compress \u63d2\u4ef6    |\\n| [@modern-js/builder-shared](https://www.npmjs.com/package/@modern-js/builder-shared)                               | ![](https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square)                | Builder \u5185\u90e8\u7684\u516c\u5171\u6a21\u5757 |\\n| [@modern-js/builder-doc](https://www.npmjs.com/package/@modern-js/builder-doc)                                     | ![](https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square)                   | \u63d0\u4f9b\u53ef\u590d\u7528\u7684\u6587\u6863\u7247\u6bb5   |\\n\\n\u4f60\u53ef\u4ee5\u5728 modern.js \u4ed3\u5e93\u7684 [packages/builder](https://github.com/modern-js-dev/modern.js/tree/main/packages/builder/) \u76ee\u5f55\u4e0b\u67e5\u770b\u8fd9\u4e9b\u5305\u7684\u6e90\u4ee3\u7801\u3002\\n\\n## \u4e0b\u4e00\u6b65\\n\\n\u4f60\u53ef\u80fd\u60f3\u8981\uff1a\\n\\nimport NextSteps from \'@components/NextSteps\';\\nimport Step from \'@components/Step\';\\n\\n<NextSteps>\\n  <Step\\n    href=\\"/guide/quick-start.html\\"\\n    title=\\"\u5feb\u901f\u4e0a\u624b\\"\\n    description=\\"\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 Builder\\"\\n  />\\n  <Step\\n    href=\\"/guide/features.html\\"\\n    title=\\"\u529f\u80fd\u5bfc\u822a\\"\\n    description=\\"\u4e86\u89e3 Builder \u63d0\u4f9b\u7684\u6240\u6709\u529f\u80fd\\"\\n  />\\n  <Step href=\\"/api/index.html\\" title=\\"\u67e5\u9605 API\\" description=\\"\u67e5\u770b\u8be6\u7ec6\u7684 API \u6587\u6863\\" />\\n</NextSteps>\\n"';function h(e){const r=Object.assign({h1:"h1",a:"a",p:"p",strong:"strong",h2:"h2",ul:"ul",li:"li",h3:"h3",div:"div",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",img:"img"},e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.h1,{id:"\u4ecb\u7ecd",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4ecb\u7ecd",children:"#"}),"\u4ecb\u7ecd"]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js Builder \u662f",(0,n.jsx)(r.strong,{children:"\u4e00\u4e2a\u9762\u5411 Web \u5f00\u53d1\u573a\u666f\u7684\u6784\u5efa\u5f15\u64ce"}),"\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"\u968f\u7740\u524d\u7aef\u751f\u6001\u7684\u53d1\u5c55\uff0c\u793e\u533a\u4e2d\u51fa\u73b0\u4e86\u591a\u6837\u5316\u7684\u7f16\u8bd1\u5de5\u5177\u548c\u63d2\u4ef6\u3002\u5bf9\u4e8e\u5927\u90e8\u5206\u5f00\u53d1\u8005\u6765\u8bf4\uff0c\u6784\u5efa\u4e00\u4e2a Web \u5e94\u7528\u6240\u9700\u7684\u914d\u7f6e\u548c\u4f9d\u8d56\u5df2\u53d8\u5f97\u5341\u5206\u590d\u6742\u3002\u5728\u8ffd\u6c42\u6700\u4f73\u5b9e\u8df5\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5f00\u53d1\u8005\u9700\u8981\u4ed8\u51fa\u7684\u6210\u672c\u4e5f\u5728\u4e0d\u65ad\u4e0a\u5347\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u4e3a\u4e86\u51cf\u5c11\u6784\u5efa\u7684\u590d\u6742\u6027\uff0c\u964d\u4f4e\u4e0a\u624b\u95e8\u69db\uff0c\u6211\u4eec\u57fa\u4e8e Modern.js \u5728 Web \u5e94\u7528\u6784\u5efa\u65b9\u9762\u7684\u5b9e\u8df5\u7ecf\u9a8c\uff0c\u62bd\u8c61\u5176\u4e2d\u7684\u6784\u5efa\u80fd\u529b\uff0c\u6253\u9020\u51fa Modern.js Builder \u8fd9\u4e2a\u5f00\u6e90\u5de5\u5177\u3002"}),"\n",(0,n.jsxs)(r.h2,{id:"rust-\u5316",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#rust-\u5316",children:"#"}),"Rust \u5316"]}),"\n",(0,n.jsxs)(r.p,{children:["\u8fd1\u5e74\u6765\uff0c\u524d\u7aef\u5de5\u5177\u94fe\u7684\u53d1\u5c55\u8d8b\u52bf\u662f\u4f7f\u7528 Rust \u7b49\u7f16\u7a0b\u8bed\u8a00\u91cd\u65b0\u5b9e\u73b0 \u2014\u2014 \u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u8868\u73b0\u3002\u793e\u533a\u4e2d\u51fa\u73b0 ",(0,n.jsx)(r.a,{href:"https://swc.rs/",target:"_blank",rel:"nofollow",children:"SWC"}),"\u3001",(0,n.jsx)(r.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"nofollow",children:"esbuild"}),"\u3001",(0,n.jsx)(r.a,{href:"https://turbo.build/pack",target:"_blank",rel:"nofollow",children:"Turbopack"})," \u7b49\u9ad8\u6027\u80fd\u5de5\u5177\uff0c\u5e76\u4e14\u5e94\u7528\u9886\u57df\u5728\u9010\u6b65\u6269\u5bbd\u3002\u4f46\u8fd9\u4e9b Rust \u5de5\u5177\u4e0e JavaScript \u5de5\u5177\u4e4b\u95f4\u5b58\u5728\u8f83\u591a\u5dee\u5f02\uff0c\u5305\u62ec\u529f\u80fd\u4e0d\u5b8c\u6574\u3001\u914d\u7f6e\u4e0d\u4e00\u81f4\u7b49\uff0c\u5bfc\u81f4\u4f7f\u7528\u8005\u9700\u8981\u627f\u62c5\u4e00\u5b9a\u7684\u8fc1\u79fb\u6210\u672c\u3002"]}),"\n",(0,n.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/rust-tools-11175.png"}),"\n",(0,n.jsxs)(r.p,{children:["\u524d\u7aef\u5de5\u5177\u94fe Rust \u5316\u7684\u8fdb\u7a0b\u8fd8\u4f1a\u6301\u7eed\u8f83\u957f\u4e00\u6bb5\u65f6\u95f4\uff0c",(0,n.jsx)(r.strong,{children:"Modern.js Builder \u671f\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u66f4\u597d\u5730\u8fc7\u6e21\u5230 Rust \u5de5\u5177"}),"\u3002\u4e0d\u7ba1\u662f JavaScript \u5de5\u5177\uff0c\u8fd8\u662f Rust \u5de5\u5177\uff0c\u751a\u81f3\u662f webpack \u7b49\u5e95\u5c42 bundler\uff0c\u5728 Modern.js Builder \u4e2d\u90fd\u662f\u53ef\u66ff\u6362\u7684\u96f6\u90e8\u4ef6\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5f00\u542f\u914d\u7f6e\u6216\u542f\u7528\u63d2\u4ef6\u7684\u65b9\u5f0f\uff0c\u5bf9\u8fd9\u4e9b\u96f6\u90e8\u4ef6\u8fdb\u884c\u6e10\u8fdb\u5f0f\u66ff\u6362\uff0cModern.js Builder \u4f1a\u62b9\u5e73\u5176\u4e2d\u7684\u4e3b\u8981\u5dee\u5f02\uff0c\u5e2e\u52a9\u4f7f\u7528\u8005\u8fdb\u884c\u4f4e\u6210\u672c\u8fc1\u79fb\u3002"]}),"\n",(0,n.jsxs)(r.h2,{id:"\u5b9a\u4f4d",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u5b9a\u4f4d",children:"#"}),"\u5b9a\u4f4d"]}),"\n",(0,n.jsxs)(r.p,{children:["Modern.js Builder (\u7b80\u79f0 Builder) \u7684\u5b9a\u4f4d\u662f",(0,n.jsx)(r.strong,{children:"\u670d\u52a1\u4e8e\u4e0a\u5c42\u6846\u67b6\u7684\u6784\u5efa\u5f15\u64ce"}),"\uff0c\u5b83\u4e13\u6ce8\u4e8e\u89e3\u51b3 Web \u5e94\u7528\u6784\u5efa\u9762\u4e34\u7684\u5404\u7c7b\u95ee\u9898\uff0c\u671f\u671b\u80fd\u4e3a\u524d\u7aef\u6846\u67b6\u63d0\u4f9b\u5f00\u7bb1\u5373\u7528\u7684\u6784\u5efa\u80fd\u529b\u3002"]}),"\n",(0,n.jsx)("img",{src:"https://lf3-static.bytednsdoc.com/obj/eden-cn/zq-uylkvT/ljhwZthlaukjlkulzlp/builder-layers-1117.png",style:{maxWidth:"80%",marginLeft:"10%"}}),"\n",(0,n.jsx)(r.p,{children:"\u5982\u679c\u4f60\u6b63\u5728\u5f00\u53d1\u4e00\u4e2a\u524d\u7aef\u6846\u67b6\uff0c\u6216\u662f\u5f00\u53d1\u4e00\u4e2a\u524d\u7aef\u5e94\u7528\u7684\u811a\u624b\u67b6\uff0c\u90a3\u4e48 Builder \u53ef\u4ee5\u4e3a\u4f60\u5b8c\u6210\u524d\u7aef\u6846\u67b6\u4e2d\u5927\u90e8\u5206\u4e0e\u6784\u5efa\u6709\u5173\u7684\u903b\u8f91\uff0c\u8ba9\u4f60\u80fd\u591f\u805a\u7126\u4e8e\u5b9e\u73b0\u6846\u67b6\u7684\u5176\u4ed6\u529f\u80fd\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u5982\u679c\u4f60\u662f\u4e00\u540d\u4e1a\u52a1\u5f00\u53d1\u8005\uff0c\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\uff0c\u4f60\u4e0d\u9700\u8981\u5728\u4e1a\u52a1\u9879\u76ee\u4e2d\u624b\u52a8\u63a5\u5165 Builder\uff0c\u6211\u4eec\u63a8\u8350\u4f60\u76f4\u63a5\u4f7f\u7528\u4e00\u4e9b\u57fa\u4e8e Builder \u7684\u4e0a\u5c42\u6846\u67b6\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u76ee\u524d\u5df2\u7ecf\u63a5\u5165 Builder \u7684\u524d\u7aef\u6846\u67b6\u6709\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u5f00\u6e90\u7684 ",(0,n.jsx)(r.a,{href:"https://github.com/modern-js-dev/modern.js",target:"_blank",rel:"nofollow",children:"Modern.js 2.0"})," \u6846\u67b6\u3002"]}),"\n",(0,n.jsx)(r.li,{children:"\u5b57\u8282\u8df3\u52a8\u5185\u90e8\u7684 EdenX\u3001PIA \u7b49\u6846\u67b6\u3002"}),"\n"]}),"\n",(0,n.jsxs)(r.h2,{id:"\u7279\u6027",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u7279\u6027",children:"#"}),"\u7279\u6027"]}),"\n",(0,n.jsxs)(r.h3,{id:"\u652f\u6301\u591a\u79cd\u6253\u5305\u5de5\u5177",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u652f\u6301\u591a\u79cd\u6253\u5305\u5de5\u5177",children:"#"}),"\u652f\u6301\u591a\u79cd\u6253\u5305\u5de5\u5177"]}),"\n",(0,n.jsxs)(r.p,{children:["\u5728\u67b6\u6784\u4e0a\uff0c",(0,n.jsx)(r.strong,{children:"Builder \u652f\u6301\u591a\u79cd\u6253\u5305\u5de5\u5177"}),"\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u9700\u6c42\u6765\u4f7f\u7528\u4e0d\u540c\u7684\u6253\u5305\u5de5\u5177\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cBuilder \u4f7f\u7528 webpack 5 \u4f5c\u4e3a\u6253\u5305\u5de5\u5177\uff0c\u5c3d\u7ba1 webpack \u7684\u7f16\u8bd1\u901f\u5ea6\u4e0d\u662f\u5f88\u7406\u60f3\uff0c\u4f46\u5b83\u4f9d\u7136\u662f\u793e\u533a\u4e2d\u529f\u80fd\u6700\u5b8c\u6574\u3001\u751f\u6001\u6700\u4e30\u5bcc\u7684\u6253\u5305\u5de5\u5177\u3002Builder \u5728 webpack \u7684\u57fa\u7840\u4e0a\uff0c\u96c6\u6210\u4e86 ",(0,n.jsx)(r.a,{href:"https://github.com/babel/babel",target:"_blank",rel:"nofollow",children:"babel"}),"\u3001",(0,n.jsx)(r.a,{href:"https://github.com/postcss/postcss",target:"_blank",rel:"nofollow",children:"postcss"}),"\u3001",(0,n.jsx)(r.a,{href:"https://github.com/terser/terser",target:"_blank",rel:"nofollow",children:"terser"})," \u7b49\u5de5\u5177\u8fdb\u884c\u4ee3\u7801\u8f6c\u4e49\u548c\u538b\u7f29\u3002Builder \u4e5f\u652f\u6301\u66ff\u6362\u90e8\u5206\u7f16\u8bd1\u80fd\u529b\u4e3a\u539f\u751f\u5de5\u5177\u6765\u63d0\u5347\u7f16\u8bd1\u901f\u5ea6\uff0c\u6bd4\u5982\u5c06 babel/terser \u66ff\u6362\u4e3a ",(0,n.jsx)(r.a,{href:"https://github.com/swc-project/swc",target:"_blank",rel:"nofollow",children:"swc"})," \u6216 ",(0,n.jsx)(r.a,{href:"https://github.com/evanw/esbuild",target:"_blank",rel:"nofollow",children:"esbuild"}),"\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u9664\u4e86 webpack \u6253\u5305\uff0cBuilder \u4e5f\u6b63\u5728\u5bf9\u63a5",(0,n.jsx)(r.strong,{children:"\u5b57\u8282\u8df3\u52a8 Web Infra \u56e2\u961f\u81ea\u7814\u7684 Rust Bundler \u2014\u2014 rspack"}),"\uff0c\u4ee5\u63d0\u4f9b\u66f4\u5feb\u7684\u7f16\u8bd1\u901f\u5ea6\u3002"]}),"\n",(0,n.jsx)(r.p,{children:"\u76ee\u524d\uff0cBuilder \u57fa\u4e8e webpack \u7684\u6784\u5efa\u5df2\u7ecf\u6210\u719f\u53ef\u7528\uff0c\u57fa\u4e8e rspack \u7684\u6784\u5efa\u4ecd\u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u656c\u8bf7\u671f\u5f85\u3002"}),"\n",(0,n.jsxs)(r.div,{className:"modern-directive tip",children:[(0,n.jsx)(r.p,{className:"modern-directive-title",children:"\u5173\u4e8e Turbopack"}),(0,n.jsxs)(r.div,{className:"modern-directive-content",children:[(0,n.jsxs)(r.p,{children:["\n\u5c3d\u7ba1 Builder \u5df2\u7ecf\u5728\u5bf9\u63a5 rspack\uff0c\u5bf9\u4e8e webpack \u7684\u7ee7\u4efb\u8005 \u2014\u2014 ",(0,n.jsx)(r.a,{href:"https://turbo.build/pack",target:"_blank",rel:"nofollow",children:"Turbopack"}),"\uff0c\u6211\u4eec\u4e5f\u4f1a\u6301\u7eed\u5173\u6ce8\u5b83\u540e\u7eed\u7684\u53d1\u5c55\u60c5\u51b5\u3002"]}),(0,n.jsx)(r.p,{children:"\u76ee\u524d Turbopack \u4ec5\u652f\u6301\u5728 Next.js \u4e2d\u4f7f\u7528\uff0c\u5f53 Turbopack \u652f\u6301\u72ec\u7acb\u4f7f\u7528\uff0c\u5e76\u4e14\u5b8c\u6210\u5ea6\u548c\u793e\u533a\u751f\u6001\u8fbe\u5230\u4e00\u5b9a\u6c34\u5e73\u65f6\uff0c\u6211\u4eec\u4f1a\u8003\u8651\u8fdb\u884c\u63a5\u5165\u3002"})]})]}),"\n",(0,n.jsxs)(r.h3,{id:"\u6df1\u5ea6\u4f18\u5316\u6784\u5efa\u4ea7\u7269",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6df1\u5ea6\u4f18\u5316\u6784\u5efa\u4ea7\u7269",children:"#"}),"\u6df1\u5ea6\u4f18\u5316\u6784\u5efa\u4ea7\u7269"]}),"\n",(0,n.jsxs)(r.p,{children:["Builder ",(0,n.jsx)(r.strong,{children:"\u5145\u5206\u5229\u7528 webpack \u751f\u6001\u5185\u7684\u5404\u79cd\u4f18\u5316\u624b\u6bb5"}),"\uff0c\u4fdd\u8bc1\u751f\u4ea7\u73af\u5883\u7684\u4ea7\u7269\u6027\u80fd\u5f97\u5230\u6df1\u5ea6\u4f18\u5316\uff0c\u5e76\u5728\u7a33\u5b9a\u6027\u4e0a\u63d0\u4f9b\u4fdd\u969c\u3002"]}),"\n",(0,n.jsxs)(r.p,{children:["\u4ee5\u62c6\u5305\u573a\u666f\u4e3a\u4f8b\uff0cwebpack \u539f\u751f\u7684 splitChunks \u914d\u7f6e\u8f83\u4e3a\u590d\u6742\uff0cBuilder \u5c06\u5176\u5c01\u88c5\u4e3a\u5f00\u7bb1\u5373\u7528\u7684 ",(0,n.jsx)(r.a,{href:"/builder/api/config-performance.html#performance-chunksplit",children:"performance.chunkSplit"})," \u914d\u7f6e\u9879\uff0c\u9ed8\u8ba4\u5c06\u5e38\u89c1\u7684\u4e09\u65b9\u5e93\u62c6\u5206\u4e3a\u4f53\u79ef\u9002\u4e2d\u7684 chunk\uff0c\u4f7f\u9875\u9762\u52a0\u8f7d\u901f\u5ea6\u8fbe\u5230\u6700\u4f18\u72b6\u6001\u3002"]}),"\n",(0,n.jsxs)(r.h3,{id:"\u6613\u4e8e\u6269\u5c55\u7684\u63d2\u4ef6\u7cfb\u7edf",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u6613\u4e8e\u6269\u5c55\u7684\u63d2\u4ef6\u7cfb\u7edf",children:"#"}),"\u6613\u4e8e\u6269\u5c55\u7684\u63d2\u4ef6\u7cfb\u7edf"]}),"\n",(0,n.jsx)(r.p,{children:"Builder \u63d0\u4f9b\u4e30\u5bcc\u7684\u914d\u7f6e\u9879\u548c\u53ef\u63d2\u62d4\u7684\u63d2\u4ef6\u7cfb\u7edf\uff0c\u652f\u6301\u5bf9\u5404\u9879\u80fd\u529b\u8fdb\u884c\u6269\u5c55\u548c\u5b9a\u5236\u3002"}),"\n",(0,n.jsx)(r.p,{children:"\u5bf9\u4e8e Builder \u6765\u8bf4\uff0c\u6240\u6709\u7684\u6784\u5efa\u80fd\u529b\u90fd\u662f\u901a\u8fc7\u63d2\u4ef6\u6765\u5b9e\u73b0\u7684\uff1a"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"\u5927\u90e8\u5206\u63d2\u4ef6\u8f83\u4e3a\u8f7b\u91cf\uff0c\u88ab\u5185\u7f6e\u5728 Builder \u5185\u90e8\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u901a\u8fc7\u914d\u7f6e\u9879\u6765\u63a7\u5236\u542f\u7528\u3002"}),"\n",(0,n.jsx)(r.li,{children:"\u5c11\u90e8\u5206\u63d2\u4ef6\u8f83\u4e3a\u590d\u6742\uff0c\u88ab\u5916\u7f6e\u4e3a\u72ec\u7acb npm \u5305\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u6309\u9700\u8fdb\u884c\u5b89\u88c5\u548c\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Builder \u4e5f\u652f\u6301\u81ea\u5b9a\u4e49\u63d2\u4ef6\uff0c\u56e0\u6b64\u6846\u67b6\u5f00\u53d1\u8005\u53ef\u4ee5\u5f00\u53d1\u81ea\u5b9a\u4e49\u7684\u63d2\u4ef6\uff0c\u5b9e\u73b0\u5b9a\u5236\u5316\u7684\u6784\u5efa\u9700\u6c42\u3002"}),"\n",(0,n.jsxs)(r.h2,{id:"npm-\u5305",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#npm-\u5305",children:"#"}),"npm \u5305"]}),"\n",(0,n.jsx)(r.p,{children:"Builder \u5df2\u53d1\u5e03\u7684 npm \u5305\u6709\uff1a"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u5305\u540d"}),(0,n.jsx)(r.th,{children:"\u7248\u672c"}),(0,n.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder",target:"_blank",rel:"nofollow",children:"@modern-js/builder"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Builder \u6838\u5fc3\u5305"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-webpack-provider",target:"_blank",rel:"nofollow",children:"@modern-js/builder-webpack-provider"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-webpack-provider?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"\u63d0\u4f9b webpack \u6784\u5efa\u80fd\u529b"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-rspack-provider",target:"_blank",rel:"nofollow",children:"@modern-js/builder-rspack-provider"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-rspack-provider?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"\u63d0\u4f9b rspack \u6784\u5efa\u80fd\u529b"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-swc",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-swc"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-swc?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"SWC \u63d2\u4ef6"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-stylus",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-stylus"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-stylus?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Stylus \u63d2\u4ef6"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-esbuild",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-esbuild"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-esbuild?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Esbuild \u63d2\u4ef6"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-node-polyfill",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-node-polyfill"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-node-polyfill?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Node Polyfill \u63d2\u4ef6"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-plugin-image-compress",target:"_blank",rel:"nofollow",children:"@modern-js/builder-plugin-image-compress"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-plugin-image-compress?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Image Compress \u63d2\u4ef6"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-shared",target:"_blank",rel:"nofollow",children:"@modern-js/builder-shared"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-shared?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"Builder \u5185\u90e8\u7684\u516c\u5171\u6a21\u5757"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.a,{href:"https://www.npmjs.com/package/@modern-js/builder-doc",target:"_blank",rel:"nofollow",children:"@modern-js/builder-doc"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.img,{src:"https://img.shields.io/npm/v/@modern-js/builder-doc?style=flat-square",alt:""})}),(0,n.jsx)(r.td,{children:"\u63d0\u4f9b\u53ef\u590d\u7528\u7684\u6587\u6863\u7247\u6bb5"})]})]})]}),"\n",(0,n.jsxs)(r.p,{children:["\u4f60\u53ef\u4ee5\u5728 modern.js \u4ed3\u5e93\u7684 ",(0,n.jsx)(r.a,{href:"https://github.com/modern-js-dev/modern.js/tree/main/packages/builder/",target:"_blank",rel:"nofollow",children:"packages/builder"})," \u76ee\u5f55\u4e0b\u67e5\u770b\u8fd9\u4e9b\u5305\u7684\u6e90\u4ee3\u7801\u3002"]}),"\n",(0,n.jsxs)(r.h2,{id:"\u4e0b\u4e00\u6b65",children:[(0,n.jsx)(r.a,{className:"header-anchor","aria-hidden":"true",href:"#\u4e0b\u4e00\u6b65",children:"#"}),"\u4e0b\u4e00\u6b65"]}),"\n",(0,n.jsx)(r.p,{children:"\u4f60\u53ef\u80fd\u60f3\u8981\uff1a"}),"\n","\n",(0,n.jsxs)(l.default,{children:[(0,n.jsx)(d.default,{href:"/guide/quick-start.html",title:"\u5feb\u901f\u4e0a\u624b",description:"\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 Builder"}),(0,n.jsx)(d.default,{href:"/guide/features.html",title:"\u529f\u80fd\u5bfc\u822a",description:"\u4e86\u89e3 Builder \u63d0\u4f9b\u7684\u6240\u6709\u529f\u80fd"}),(0,n.jsx)(d.default,{href:"/api/index.html",title:"\u67e5\u9605 API",description:"\u67e5\u770b\u8be6\u7ec6\u7684 API \u6587\u6863"})]})]})}r.default=function(e={}){const{wrapper:r}=e.components||{};return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(h,e)})):h(e)}},25688:function(e,r,s){s.r(r),s.d(r,{default:function(){return d}});var n="PBxYA",l=s(39980);var d=e=>(0,l.jsx)("div",{className:n,children:e.children})},77226:function(e,r,s){s.r(r),s.d(r,{default:function(){return t}});var n="PftjC",l="uFJgO",d="zpB65",i=s(39980);var t=e=>(0,i.jsxs)("a",{className:n,href:e.href,children:[(0,i.jsx)("p",{className:l,children:e.title}),(0,i.jsx)("p",{className:d,children:e.description})]})}}]);