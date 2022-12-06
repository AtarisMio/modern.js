(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{308:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"异常类问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常类问题"}},[t._v("#")]),t._v(" 异常类问题")]),t._v(" "),s("h2",{attrs:{id:"webpack-编译出现-compilation-argument-报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-编译出现-compilation-argument-报错"}},[t._v("#")]),t._v(" webpack 编译出现 'compilation' argument 报错？")]),t._v(" "),s("p",[t._v("如果编译时出现以下报错，通常是由于项目中安装了错误的 webpack 版本，或者安装了多个 webpack 版本引起：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("TypeError: The "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'compilation'")]),t._v(" argument must be an instance of Compilation\n")])])]),s("p",[t._v("webpack 版本问题有以下几种情况：")]),t._v(" "),s("ol",[s("li",[t._v("项目的 package.json 中直接声明了 webpack 依赖，并且与 Builder 依赖的 webpack 版本范围不同，无法匹配到同一个版本。")]),t._v(" "),s("li",[t._v("项目里安装的多个 npm 包都依赖了 webpack，并且它们依赖的 webpack 版本范围不同，无法匹配到同一个版本。")]),t._v(" "),s("li",[t._v("由于包管理器的 lock 机制，导致 lock 文件中产生了多个 webpack 版本。")])]),t._v(" "),s("p",[t._v("如果是第一种情况，建议从项目的 package.json 中移除 webpack 依赖。因为 Builder 默认封装了 webpack 相关能力，并且会在 "),s("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-webpack"}},[t._v("tools.webpack")]),t._v(" 配置项中传入 webpack 对象。因此在大多数情况下，不建议在项目中额外安装 webpack 依赖。")],1),t._v(" "),s("p",[t._v("如果是第二种情况，建议看看能否升级某个 npm 包，使其依赖的 webpack 版本范围与 Builder 保持一致。也可以通过包管理器的能力来手动统一版本，比如使用 "),s("a",{attrs:{href:"https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/",target:"_blank",rel:"noopener noreferrer"}},[t._v("yarn resolutions"),s("OutboundLink")],1),t._v(" 或 "),s("a",{attrs:{href:"https://pnpm.io/package_json#pnpmoverrides",target:"_blank",rel:"noopener noreferrer"}},[t._v("pnpm overrides"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("如果是第三种情况，可以使用第二种情况中提到的两种方法，也可以尝试删除 lock 文件后重新安装来解决。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("删除 lock 文件会使项目中的依赖版本自动升级到指定范围下的最新版，请进行充分的测试。")])]),t._v(" "),s("h2",{attrs:{id:"编译产物中存在未编译的-es6-代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译产物中存在未编译的-es6-代码"}},[t._v("#")]),t._v(" 编译产物中存在未编译的 ES6+ 代码？")]),t._v(" "),s("p",[t._v("默认情况下，Builder 不会通过 "),s("code",[t._v("babel-loader")]),t._v(" 或 "),s("code",[t._v("ts-loader")]),t._v(" 来编译 "),s("code",[t._v("node_modules")]),t._v(" 下的文件。如果项目引入的 npm 包中含有 ES6+ 语法，会被打包进产物中。")]),t._v(" "),s("p",[t._v("遇到这种情况时，可以通过 "),s("RouterLink",{attrs:{to:"/zh/api/config-source.html#source-include"}},[t._v("source.include")]),t._v(" 配置项来指定需要额外进行编译的目录或模块。")],1),t._v(" "),s("h2",{attrs:{id:"在-monorepo-中引用其他模块-代码没有被正确编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-monorepo-中引用其他模块-代码没有被正确编译"}},[t._v("#")]),t._v(" 在 Monorepo 中引用其他模块，代码没有被正确编译？")]),t._v(" "),s("p",[t._v("出于编译性能的考虑，默认情况下，Builder 不会通过 "),s("code",[t._v("babel-loader")]),t._v(" 或 "),s("code",[t._v("ts-loader")]),t._v(" 来编译 "),s("code",[t._v("node_modules")]),t._v(" 下的文件，也不会编译当前工程目录外部的文件。")]),t._v(" "),s("p",[t._v("通过 "),s("code",[t._v("source.include")]),t._v(" 配置项，可以指定需要额外进行编译的目录或模块。")]),t._v(" "),s("p",[t._v("详见 "),s("RouterLink",{attrs:{to:"/zh/api/config-source.html#source-include"}},[t._v("source.include 用法介绍")]),t._v("。")],1),t._v(" "),s("h2",{attrs:{id:"编译时报错-you-may-need-additional-loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译时报错-you-may-need-additional-loader"}},[t._v("#")]),t._v(" 编译时报错 "),s("code",[t._v("You may need additional loader")]),t._v("？")]),t._v(" "),s("p",[t._v("如果编译过程中遇到了以下报错提示，表示存在个别文件无法被正确编译。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Module parse failed: Unexpected token\nFile was processed with these loaders:\n * some-loader/index.js\n\nYou may need an additional loader to handle the result of these loaders.\n")])])]),s("p",[t._v("解决方法：")]),t._v(" "),s("ul",[s("li",[t._v("如果是引用了当前工程外部的 "),s("code",[t._v(".ts")]),t._v(" 文件，或者是 node_modules 下的 "),s("code",[t._v(".ts")]),t._v(" 文件，请添加 "),s("RouterLink",{attrs:{to:"/zh/api/config-source.html#source-include"}},[t._v("source.include")]),t._v(" 配置项，指定需要额外进行编译的文件。")],1),t._v(" "),s("li",[t._v("如果是引用了 Builder 不支持的文件格式，请自行配置对应的 webpack loader 进行编译。")])]),t._v(" "),s("h2",{attrs:{id:"打开页面后报错-提示-exports-is-not-defined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开页面后报错-提示-exports-is-not-defined"}},[t._v("#")]),t._v(" 打开页面后报错，提示 exports is not defined？")]),t._v(" "),s("p",[t._v("如果编译正常，但是打开页面后出现 "),s("code",[t._v("exports is not defined")]),t._v(" 报错，通常是因为在项目中使用 babel 编译了一个 CommonJS 模块，导致 babel 出现异常。")]),t._v(" "),s("p",[t._v("在正常情况下，Builder 是不会使用 babel 来编译 CommonJS 模块的。如果项目中使用了 "),s("a",{attrs:{href:""}},[t._v("source.include")]),t._v(" 配置项，或使用了 "),s("RouterLink",{attrs:{to:"/zh/api/config-tools.html#tools-babel"}},[t._v("tools.babel")]),t._v(" 的 "),s("code",[t._v("addIncludes")]),t._v(" 方法，则可能会把一些 CommonJS 模块加入到 babel 编译中。")],1),t._v(" "),s("p",[t._v("该问题有两种解决方法：")]),t._v(" "),s("ol",[s("li",[t._v("避免将 CommonJS 模块加入到 babel 编译中。")]),t._v(" "),s("li",[t._v("将 babel 的 "),s("code",[t._v("sourceType")]),t._v(" 配置项设置为 "),s("code",[t._v("unambiguous")]),t._v("，示例如下：")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tools")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("babel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("config")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sourceType "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'unambiguous'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("将 "),s("code",[t._v("sourceType")]),t._v(" 设置为 "),s("code",[t._v("unambiguous")]),t._v(" 可能会产生一些其他影响，请参考 "),s("a",{attrs:{href:"https://babeljs.io/docs/en/options#sourcetype",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel 官方文档"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"编译时报错-error-es-modules-may-not-assign-module-exports-or-exports-use-esm-export-syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译时报错-error-es-modules-may-not-assign-module-exports-or-exports-use-esm-export-syntax"}},[t._v("#")]),t._v(' 编译时报错 "Error: ES Modules may not assign module.exports or exports.*, Use ESM export syntax"？')]),t._v(" "),s("p",[t._v("如果编译时出现以下报错，通常也是因为在项目中使用 babel 编译了一个 CommonJS 模块，解决方法与上述的 "),s("code",[t._v("exports is not defined")]),t._v(" 问题一致。")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Error: ES Modules may not assign module.exports or exports.*, Use ESM "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" syntax, instead: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("581")]),t._v("\n")])])]),s("p",[t._v("更多信息请参考 issue："),s("a",{attrs:{href:"https://github.com/babel/babel/issues/12731",target:"_blank",rel:"noopener noreferrer"}},[t._v("babel#12731"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"编译进度条卡死-但终端无-error-日志"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译进度条卡死-但终端无-error-日志"}},[t._v("#")]),t._v(" 编译进度条卡死，但终端无 Error 日志？")]),t._v(" "),s("p",[t._v("当编译进度条卡死，但终端无 Error 日志时，通常是因为编译过程中出现了异常。在某些情况下，当 Error 被 webpack 或其他模块捕获后，错误日志不会被正确输出。最为常见的场景是 Babel 配置出现异常，抛出 Error 后被 webpack 捕获，而 webpack 在个别情况下吞掉了 Error。")]),t._v(" "),s("p",[s("strong",[t._v("解决方法：")])]),t._v(" "),s("p",[t._v("如果你修改 Babel 配置后出现此问题，建议检查是否有以下错误用法：")]),t._v(" "),s("ol",[s("li",[t._v("配置了一个不存在的 plugin 或 preset，可能是名称拼写错误，或是未正确安装。")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误示例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("babel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" addPlugins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 该插件名称错误，或者未安装")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-plugin-not-exists'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("是否配置了多个 babel-plugin-import，但是没有在数组的第三项声明每一个 babel-plugin-import 的名称。")])]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误示例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("babel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" addPlugins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-plugin-import'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" libraryName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" libraryDirectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-plugin-import'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" libraryName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd-mobile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" libraryDirectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确示例")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("babel")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" addPlugins "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addPlugins")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-plugin-import'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" libraryName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" libraryDirectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'babel-plugin-import'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" libraryName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd-mobile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" libraryDirectory"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'antd-mobile'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"热更新后-react-组件的-state-丢失"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#热更新后-react-组件的-state-丢失"}},[t._v("#")]),t._v(" 热更新后 React 组件的 state 丢失？")]),t._v(" "),s("p",[t._v("Builder 使用 React 官方的 "),s("a",{attrs:{href:"https://github.com/pmmmwh/react-refresh-webpack-plugin",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fast Refresh"),s("OutboundLink")],1),t._v(" 能力来进行组件热更新。")]),t._v(" "),s("p",[t._v("在使用 Fast Refresh 时，要求组件不能为匿名函数，否则热更新后无法保留 React 组件的 state。")]),t._v(" "),s("p",[t._v("以下写法都是不正确的：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误写法 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 错误写法 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("正确的写法为：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法 1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MyComponent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 正确写法 2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("MyComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Hello World"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("div"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" MyComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"webpack-编译缓存未生效-应该如何排查"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-编译缓存未生效-应该如何排查"}},[t._v("#")]),t._v(" webpack 编译缓存未生效，应该如何排查？")]),t._v(" "),s("p",[t._v("Builder 默认开启了 webpack 的持久化缓存。")]),t._v(" "),s("p",[t._v("首次编译完成后，会自动生成缓存文件，并输出到 "),s("code",[t._v("./node_modules/.cache/webpack")]),t._v(" 目录下。执行第二次编译时，会命中缓存，并大幅度提高编译速度。")]),t._v(" "),s("p",[t._v("当 "),s("code",[t._v("package.json")]),t._v(" 等配置文件被修改时，缓存会自动失效。")]),t._v(" "),s("p",[t._v("如果项目中 webpack 编译缓存一直未生效，可以添加以下配置进行排查：")]),t._v(" "),s("div",{staticClass:"language-ts extra-class"},[s("pre",{pre:!0,attrs:{class:"language-ts"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  tools"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("webpack")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("infrastructureLogging "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("config"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("infrastructureLogging"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        debug"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("添加以上配置后，webpack 会输出日志用于 debug，请参考 "),s("code",[t._v("PackFileCacheStrategy")]),t._v(" 相关的日志来了解缓存失效的原因。")]),t._v(" "),s("h2",{attrs:{id:"打包后发现-tree-shaking-没有生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包后发现-tree-shaking-没有生效"}},[t._v("#")]),t._v(" 打包后发现 Tree Shaking 没有生效？")]),t._v(" "),s("p",[t._v("Builder 在生产构建时会默认开启 webpack 的 Tree Shaking 功能，Tree Shaking 是否能够生效，取决于业务代码能否满足 webpack 的 Tree Shaking 条件。")]),t._v(" "),s("p",[t._v("如果你遇到了 Tree Shaking 不生效的问题，可以检查下相关 npm 包的 "),s("code",[t._v("sideEffects")]),t._v(" 配置是否正确，如果不了解 "),s("code",[t._v("sideEffects")]),t._v(" 是什么，可以阅读以下两篇文档：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://webpack.docschina.org/guides/tree-shaking/",target:"_blank",rel:"noopener noreferrer"}},[t._v("webpack 官方文档 - Tree Shaking"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://bytedance.feishu.cn/docs/doccn8E1ldDct5uv1EEDQs8Ycwe",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tree Shaking 问题排查指南"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"打包时出现-javascript-heap-out-of-memory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打包时出现-javascript-heap-out-of-memory"}},[t._v("#")]),t._v(" 打包时出现 JavaScript heap out of memory?")]),t._v(" "),s("p",[t._v("该报错表示打包过程中出现了内存溢出问题，大多数情况下是由于打包的内容较多，超出了 Node.js 默认的内存上限。")]),t._v(" "),s("p",[t._v("如果出现 OOM 问题，最简单的方法是通过增加内存上限来解决，Node.js 提供了 "),s("code",[t._v("--max-old-space-size")]),t._v(" 选项来对此进行设置。你可以在 CLI 命令前添加 "),s("a",{attrs:{href:"https://nodejs.org/api/cli.html#node_optionsoptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("NODE_OPTIONS"),s("OutboundLink")],1),t._v(" 来设置此参数：")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NODE_OPTIONS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("--max_old_space_size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("16384")]),t._v(" modern build\n")])])]),s("p",[t._v("参数的值代表内存上限大小（MB)，一般情况下设置为 "),s("code",[t._v("16384")]),t._v("（16GB）即可。")]),t._v(" "),s("p",[t._v("Node.js 官方文档中有对以下参数更详细的解释：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org/api/cli.html#node_optionsoptions",target:"_blank",rel:"noopener noreferrer"}},[t._v("NODE_OPTIONS"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://nodejs.org/api/cli.html#--max-old-space-sizesize-in-megabytes",target:"_blank",rel:"noopener noreferrer"}},[t._v("--max-old-space-size"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("除了增加内存上限，通过开启一些编译策略来提升效率也是一个解决方案。")]),t._v(" "),s("h2",{attrs:{id:"less-文件中的除法不生效"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#less-文件中的除法不生效"}},[t._v("#")]),t._v(" Less 文件中的除法不生效？")]),t._v(" "),s("p",[t._v("Less v4 版本与 v3 版本相比，除法的写法有一些区别：")]),t._v(" "),s("div",{staticClass:"language-less extra-class"},[s("pre",{pre:!0,attrs:{class:"language-less"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Less v3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".math")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1px")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px ."),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1px")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1px")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Less v4")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".math")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2px / 2")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px ."),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1px")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("2px "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1px")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Builder 内置的 Less 版本为 v4，低版本的写法不会生效，请注意区分。")]),t._v(" "),s("p",[t._v("Less 中除法的写法也可以通过配置项来修改，详见 "),s("a",{attrs:{href:"https://lesscss.org/usage/#less-options-math",target:"_blank",rel:"noopener noreferrer"}},[t._v("Less - Math"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"修改配置后-报错-typeerror-cannot-delete-property-xxx-of-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置后-报错-typeerror-cannot-delete-property-xxx-of-object"}},[t._v("#")]),t._v(" 修改配置后，报错 ‘TypeError: Cannot delete property 'xxx' of #<Object>’")]),t._v(" "),s("p",[t._v("该报错表示在编译过程中对一个只读配置项进行了删除操作。通常情况下，我们不希望编译过程中的任何操作会直接对传入的配置进行修改，但难以限制底层插件（如 postcss-loader 等）的行为，如果出现该报错，请联系 builder 开发人员，我们需要对该配置进行单独处理。")]),t._v(" "),s("p",[t._v("同类型报错还有：")]),t._v(" "),s("ul",[s("li",[t._v("'TypeError: Cannot add property xxx, object is not extensible'")]),t._v(" "),s("li",[t._v("'TypeError: Cannot assign to read only property 'xxx' of object '#<Object>'")])])])}),[],!1,null,null,null);s.default=e.exports}}]);