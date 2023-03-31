(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_api_plugin-hooks_mdx"],{52236:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return p},title:function(){return m},toc:function(){return x},default:function(){return j}});var r=i("12151"),s=i("21447"),o=i.ir(i("62558")),t=i.ir(i("45390")),c=i.ir(i("94335")),l=i.ir(i("87332")),a=i.ir(i("50803")),d=i.ir(i("77486")),h=i.ir(i("16179")),u=i.ir(i("35118"));let p={extractApiHeaders:[2]},m="Plugin Hooks",x=[{text:"Overview",depth:2,id:"overview"},{text:"Common Hooks",depth:2,id:"common-hooks"},{text:"modifyBuilderConfig",depth:3,id:"modifybuilderconfig"},{text:"modifyBundlerChain experimental",depth:3,id:"modifybundlerchain-experimental"},{text:"modifyWebpackChain",depth:3,id:"modifywebpackchain"},{text:"modifyWebpackConfig",depth:3,id:"modifywebpackconfig"},{text:"modifyRspackConfig",depth:3,id:"modifyrspackconfig"},{text:"onBeforeCreateCompiler",depth:3,id:"onbeforecreatecompiler"},{text:"onAfterCreateCompiler",depth:3,id:"onaftercreatecompiler"},{text:"Build Hooks",depth:2,id:"build-hooks"},{text:"onBeforeBuild",depth:3,id:"onbeforebuild"},{text:"onAfterBuild",depth:3,id:"onafterbuild"},{text:"Dev Server Hooks",depth:2,id:"dev-server-hooks"},{text:"onBeforeStartDevServer",depth:3,id:"onbeforestartdevserver"},{text:"onAfterStartDevServer",depth:3,id:"onafterstartdevserver"},{text:"onDevCompileDone",depth:3,id:"ondevcompiledone"},{text:"Other Hooks",depth:2,id:"other-hooks"},{text:"onExit",depth:3,id:"onexit"}];function f(e){let n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",ul:"ul",li:"li",code:"code",h3:"h3",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"plugin-hooks",children:["Plugin Hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#plugin-hooks",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"This section describes the lifetime hooks provided by Builder plugin."}),"\n",(0,r.jsxs)(n.h2,{id:"overview",children:["Overview",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#overview",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Common Hooks"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyBuilderConfig"}),": Modify raw config of Builder."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyBundlerChain"})," (experimental): Modify config of webpack or Rspack via the bundler chain api."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyWebpackChain"}),": Modify webpack-chain."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyWebpackConfig"}),": Modify raw config of webpack."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"modifyRspackConfig"}),": Modify raw config of Rspack."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeCreateCompiler"}),": Called before creating compiler instance."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterCreateCompiler"}),": Called after the compiler object is created, but before the build is executed."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Build Hooks"}),"：Called only when the build method is executed to build the production outputs."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeBuild"}),": Called before the production build is executed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterBuild"}),": Called after executing the production build, you can get the build stats."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dev Server Hooks"}),": Called only when the startDevServer method is executed to run the development server."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onBeforeStartDevServer"}),": Called before starting the development server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onAfterStartDevServer"}),": Called after starting the development server."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onDevCompileDone"}),": Called after each development compile."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Other Hooks"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"onExit"}),": Called when the process is going to exit."]}),"\n"]}),"\n",(0,r.jsxs)(n.h2,{id:"common-hooks",children:["Common Hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#common-hooks",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"modifybuilderconfig",children:["modifyBuilderConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifybuilderconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modify the config passed to the Builder, you can directly modify the config object, or return a new object to replace the previous object."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackChainUtils = {\n  mergeBuilderConfig: typeof mergeBuilderConfig;\n};\n\nfunction ModifyBuilderConfig(\n  callback: (\n    config: BuilderConfig,\n    utils: ModifyWebpackChainUtils,\n  ) => PromiseOrNot<BuilderConfig | void>,\n): void;\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyBuilderConfig((config, { mergeBuilderConfig }) => {\n      config.html = config.html || {};\n      config.html.title = 'Hello World!';\n      return mergeBuilderConfig(config, {\n        source: { preEntry: 'foo.js' },\n      });\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"modifybundlerchain-experimental",children:["modifyBundlerChain ",(0,r.jsx)(n.code,{children:"experimental"}),(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifybundlerchain-experimental",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Bundler chain is a subset of webpack chain, which contains part of the webpack chain API that you can use to modify both webpack and Rspack configuration."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"modifyBundlerChain"})," is used to call the bundler chain to modify the webpack / Rspack configuration. You can use this hook when using webpack-provider or rspack-provider."]}),"\n",(0,r.jsxs)(n.p,{children:["This hook only supports modifying the configuration of the non-differentiated parts of webpack and Rspack. For example, modifying the devtool configuration item (webpack and Rspack have the same devtool property value type), or adding an ",(0,r.jsx)(n.a,{href:"https://www.rspack.dev/guide/plugin-compat.html",target:"_blank",rel:"noopener noreferrer",children:"Rspack-compatible"})," webpack plugin."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyBunlderChainUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  HtmlPlugin: typeof import('html-webpack-plugin');\n};\n\nfunction ModifyBundlerChain(\n  callback: (\n    chain: BundlerChain,\n    utils: ModifyBunlderChainUtils,\n  ) => Promise<void> | void,\n): void;\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';\n\nexport default () => ({\n  setup: api => {\n    api.modifyBundlerChain((chain, utils) => {\n      if (utils.env === 'development') {\n        chain.devtool('eval');\n      }\n\n      chain.plugin('bundle-analyze').use(BundleAnalyzerPlugin);\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"modifywebpackchain",children:["modifyWebpackChain",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifywebpackchain",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modify the webpack config through the webpack chain. This method is only called when using webpack-provider."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackChainUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  webpack: typeof import('webpack');\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  getCompiledPath: (name: string) => string;\n  HtmlWebpackPlugin: typeof import('html-webpack-plugin');\n};\n\nfunction ModifyWebpackChain(\n  callback: (\n    chain: WebpackChain,\n    utils: ModifyWebpackChainUtils,\n  ) => Promise<void> | void,\n): void;\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyWebpackChain((chain, utils) => {\n      if (utils.env === 'development') {\n        chain.devtool('eval');\n      }\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"modifywebpackconfig",children:["modifyWebpackConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifywebpackconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"To modify the final webpack config object, you can directly modify the config object, or return a new object to replace the previous object. This method is only called when using webpack-provider."}),"\n",(0,r.jsxs)(n.p,{children:["This method is called later than the ",(0,r.jsx)(n.code,{children:"modifyWebpackChain"})," hook."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyWebpackConfigUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  webpack: typeof import('webpack');\n  isServer: boolean;\n  isWebWorker: boolean;\n  CHAIN_ID: ChainIdentifier;\n  getCompiledPath: (name: string) => string;\n  HtmlWebpackPlugin: typeof import('html-webpack-plugin');\n  addRules: (rules: RuleSetRule | RuleSetRule[]) => void;\n  prependPlugins: (\n    plugins: WebpackPluginInstance | WebpackPluginInstance[],\n  ) => void;\n  appendPlugins: (\n    plugins: WebpackPluginInstance | WebpackPluginInstance[],\n  ) => void;\n  removePlugin: (pluginName: string) => void;\n};\n\nfunction ModifyWebpackConfig(\n  callback: (\n    config: WebpackConfig,\n    utils: ModifyWebpackConfigUtils,\n  ) => Promise<WebpackConfig | void> | WebpackConfig | void,\n): void;\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyWebpackConfig((config, utils) => {\n      if (utils.env === 'development') {\n        config.devtool = 'eval';\n      }\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"modifyrspackconfig",children:["modifyRspackConfig",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#modifyrspackconfig",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"To modify the final Rspack config object, you can directly modify the config object, or return a new object to replace the previous object. This method is only called when using rspack-provider."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"type ModifyRspackConfigUtils = {\n  env: NodeEnv;\n  isProd: boolean;\n  target: BuilderTarget;\n  isServer: boolean;\n  isWebWorker: boolean;\n  getCompiledPath: (name: string) => string;\n};\n\nfunction ModifyRspackConfig(\n  callback: (\n    config: RspackConfig,\n    utils: ModifyRspackConfigUtils,\n  ) => Promise<RspackConfig | void> | RspackConfig | void,\n): void;\n"})})]})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.modifyRspackConfig((config, utils) => {\n      if (utils.env === 'development') {\n        config.devtool = 'eval';\n      }\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforecreatecompiler",children:["onBeforeCreateCompiler",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforecreatecompiler",children:"#"})]}),"\n","\n",(0,r.jsx)(o.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeCreateCompiler(({ bundlerConfigs }) => {\n      console.log('the bundler config is ', bundlerConfigs);\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"onaftercreatecompiler",children:["onAfterCreateCompiler",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onaftercreatecompiler",children:"#"})]}),"\n","\n",(0,r.jsx)(t.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterCreateCompiler(({ compiler }) => {\n      console.log('the compiler is ', compiler);\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h2,{id:"build-hooks",children:["Build Hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#build-hooks",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforebuild",children:["onBeforeBuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforebuild",children:"#"})]}),"\n","\n",(0,r.jsx)(c.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeBuild(({ bundlerConfigs }) => {\n      console.log('the bundler config is ', bundlerConfigs);\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"onafterbuild",children:["onAfterBuild",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafterbuild",children:"#"})]}),"\n","\n",(0,r.jsx)(l.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterBuild(({ stats }) => {\n      console.log(stats?.toJson());\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h2,{id:"dev-server-hooks",children:["Dev Server Hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#dev-server-hooks",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onbeforestartdevserver",children:["onBeforeStartDevServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onbeforestartdevserver",children:"#"})]}),"\n","\n",(0,r.jsx)(a.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onBeforeStartDevServer(() => {\n      console.log('before start!');\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"onafterstartdevserver",children:["onAfterStartDevServer",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onafterstartdevserver",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onAfterStartDevServer(({ port }) => {\n      console.log('this port is: ', port);\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"ondevcompiledone",children:["onDevCompileDone",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#ondevcompiledone",children:"#"})]}),"\n","\n",(0,r.jsx)(h.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onDevCompileDone(({ isFirstCompile }) => {\n      if (isFirstCompile) {\n        console.log('first compile!');\n      } else {\n        console.log('re-compile!');\n      }\n    });\n  },\n});\n"})})]})}),"\n",(0,r.jsxs)(n.h2,{id:"other-hooks",children:["Other Hooks",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#other-hooks",children:"#"})]}),"\n",(0,r.jsxs)(n.h3,{id:"onexit",children:["onExit",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#onexit",children:"#"})]}),"\n","\n",(0,r.jsx)(u.default,{}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Example"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"export default () => ({\n  setup: api => {\n    api.onExit(() => {\n      console.log('exit!');\n    });\n  },\n});\n"})})]})})]})}var j=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(f,e)})):f(e)}},87332:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var r=i("12151"),s=i("21447");let o={},t="",c=[];function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Called after executing the production build, you can get the build result information through the ",(0,r.jsx)(n.code,{children:"stats"})," parameter."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"function OnAfterBuild(\n  callback: (params: { stats?: Stats | MultiStats }) => Promise<void> | void,\n): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},45390:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var r=i("12151"),s=i("21447");let o={},t="",c=[];function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Called after creating a compiler instance, before executing a build, when you execute ",(0,r.jsx)(n.code,{children:"builder.startDevServer"}),", ",(0,r.jsx)(n.code,{children:"builder.build"})," or ",(0,r.jsx)(n.code,{children:"builder.createCompiler"}),", this hook will be called. You can get the compiler instance through the ",(0,r.jsx)(n.code,{children:"compiler"})," parameter."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"function OnAfterCreateCompiler(callback: (params: {\n  compiler: Compiler | MultiCompiler;\n}) => Promise<void> | void;): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},77486:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var r=i("12151"),s=i("21447");let o={},t="",c=[];function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Called after starting the development server, you can get the port number through the ",(0,r.jsx)(n.code,{children:"port"})," parameter."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"function OnAfterStartDevServer(\n  callback: (params: { port: number }) => Promise<void> | void,\n): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},94335:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var r=i("12151"),s=i("21447");let o={},t="",c=[];function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Called before executing the production environment build, you can get the final config object of the bundler through the ",(0,r.jsx)(n.code,{children:"bundlerConfigs"})," parameter."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"function OnBeforeBuild(\n  callback: (params: {\n    bundlerConfigs?: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},62558:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var r=i("12151"),s=i("21447");let o={},t="",c=[];function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Called before creating the compiler instance, when you execute ",(0,r.jsx)(n.code,{children:"builder.startDevServer"}),", ",(0,r.jsx)(n.code,{children:"builder.build"})," or ",(0,r.jsx)(n.code,{children:"builder.createCompiler"}),", this hook will be called. You can get the final config object of the bundler through the ",(0,r.jsx)(n.code,{children:"bundlerConfigs"})," parameter."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"function OnBeforeCreateCompiler(\n  callback: (params: {\n    bundlerConfigs: WebpackConfig[] | RspackConfig[];\n  }) => Promise<void> | void,\n): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},50803:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var r=i("12151"),s=i("21447");let o={},t="",c=[];function l(e){let n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Called before starting the development server."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"function OnBeforeStartDevServer(callback: () => Promise<void> | void): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},16179:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var r=i("12151"),s=i("21447");let o={},t="",c=[];function l(e){let n=Object.assign({p:"p",code:"code",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Called after each development environment build, you can use ",(0,r.jsx)(n.code,{children:"isFirstCompile"})," to determine whether it is the first build."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"function OnDevCompileDone(\n  callback: (params: { isFirstCompile: boolean }) => Promise<void> | void,\n): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},35118:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var i in n)Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}(n,{frontmatter:function(){return o},title:function(){return t},toc:function(){return c},default:function(){return a}});var r=i("12151"),s=i("21447");let o={},t="",c=[];function l(e){let n=Object.assign({p:"p",ul:"ul",li:"li",strong:"strong",div:"div",button:"button",pre:"pre",code:"code"},(0,s.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Called when the process is going to exit, this hook can only execute synchronous code."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.strong,{children:"Type"})}),"\n"]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",children:"function OnExit(callback: () => void): void;\n"})})]})})]})}var a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,s.useMDXComponents)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}}}]);