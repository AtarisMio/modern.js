(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{239:function(t,a,e){"use strict";e.r(a);var s=e(4),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"performance-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-config"}},[t._v("#")]),t._v(" Performance Config")]),t._v(" "),a("p",[t._v("This section describes some performance related configurations in Modern.js Builder.")]),t._v(" "),a("h2",{attrs:{id:"performance-bundleanalyze"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-bundleanalyze"}},[t._v("#")]),t._v(" performance.bundleAnalyze")]),t._v(" "),a("ul",[a("li",[t._v("Type: "),a("code",[t._v("Object")]),t._v(" | "),a("code",[t._v("undefined")])])]),t._v(" "),a("p",[t._v("You have two ways to enable "),a("code",[t._v("webpack-bundle-analyzer")]),t._v(" to analyze webpack output:")]),t._v(" "),a("ul",[a("li",[t._v("Add environment variable "),a("code",[t._v("BUNDLE_ANALYZE=true")]),t._v(".")]),t._v(" "),a("li",[t._v("Add "),a("code",[t._v("tools.bundleAnalyze")]),t._v(" config.")])]),t._v(" "),a("p",[t._v("By default, "),a("code",[t._v("webpack-bundle-analyzer")]),t._v(" is not enabled. When enabled, its configuration is as follows:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("analyzerMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'static'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("openAnalyzer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `target` is the compilation target, such as `web`, `node`, etc.")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("reportFilename")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("report-")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v(".html")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("You can override the default config through "),a("code",[t._v("tools.bundleAnalyze")]),t._v(", for example:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("tools")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("bundleAnalyze")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("analyzerMode")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("openAnalyzer")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"performance-chunksplit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-chunksplit"}},[t._v("#")]),t._v(" performance.chunkSplit")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"performance-removeconsole"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-removeconsole"}},[t._v("#")]),t._v(" performance.removeConsole")]),t._v(" "),a("p",[t._v("TODO")]),t._v(" "),a("h2",{attrs:{id:"performance-removemomentlocale"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-removemomentlocale"}},[t._v("#")]),t._v(" performance.removeMomentLocale")]),t._v(" "),a("p",[t._v("TODO")])])}),[],!1,null,null,null);a.default=r.exports}}]);