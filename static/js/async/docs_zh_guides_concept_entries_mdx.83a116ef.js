(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_guides_concept_entries_mdx"],{11578:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return c},title:function(){return i},toc:function(){return a},default:function(){return o}});var r=s("12151"),d=s("21447"),c={sidebar_position:1},i="入口（Entry）",a=[{text:"什么是入口（Entry）",depth:2,id:"什么是入口（entry）"},{text:"单入口与多入口",depth:2,id:"单入口与多入口"},{text:"入口类型",depth:2,id:"入口类型"},{text:"框架模式入口",depth:3,id:"框架模式入口"},{text:"约定式路由",depth:4,id:"约定式路由"},{text:"自定义路由",depth:4,id:"自定义路由"},{text:"自定义 App",depth:4,id:"自定义-app"},{text:"构建模式入口",depth:3,id:"构建模式入口"},{text:"自定义入口",depth:2,id:"自定义入口"},{text:"禁用默认入口扫描",depth:3,id:"禁用默认入口扫描"}];function t(e){var n=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",strong:"strong",div:"div",button:"button",pre:"pre",code:"code",ol:"ol",li:"li",h3:"h3",h4:"h4"},(0,d.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h1,{id:"入口（entry）",children:["入口（Entry）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#入口（entry）",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"通过本章节，你可以了解到 Modern.js 中的入口约定，以及如何自定义入口。"}),"\n",(0,r.jsxs)(n.h2,{id:"什么是入口（entry）",children:["什么是入口（Entry）",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#什么是入口（entry）",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"入口指的是一个页面的起始模块。"})}),"\n",(0,r.jsx)(n.p,{children:"在 Modern.js 项目中，每一个入口对应一个独立的页面，也对应一条服务端路由。默认情况下，Modern.js 会基于目录约定来自动确定页面的入口，同时也支持通过配置项来自定义入口。"}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 提供的很多配置项都是以入口为维度进行划分的，比如页面标题、HTML 模板、页面 Meta 信息、是否开启 SSR/SSG、服务端路由规则等。"}),"\n",(0,r.jsxs)(n.h2,{id:"单入口与多入口",children:["单入口与多入口",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#单入口与多入口",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 初始化的项目是单入口的（SPA），项目结构如下："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:".\n├── src\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── package.json\n├── modern.config.ts\n└── tsconfig.json\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["在 Modern.js 项目中，你可以很方便的将单入口切换成多入口，直接在项目下执行 ",(0,r.jsx)(n.code,{children:"pnpm run new"}),"，通过生成器创建入口即可："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"? 请选择你想要的操作：创建工程元素\n? 创建工程元素：新建「应用入口」\n? 请填写入口名称：new-entry\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["执行后，Modern.js 会自动生成一个新的入口目录，此时可以看到 ",(0,r.jsx)(n.code,{children:"src/"})," 目录变成如下结构："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:".\n├── myapp    # 原入口\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n└── new-entry # 新入口\n    └── routes\n        ├── index.css\n        ├── layout.tsx\n        └── page.tsx\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["原本的代码被移动到了和 ",(0,r.jsx)(n.code,{children:"package.json"})," 中 ",(0,r.jsx)(n.code,{children:"name"})," 同名的目录下，并创建了新的目录。"]}),"\n",(0,r.jsxs)(n.p,{children:["执行 ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," 后，可以看到新增了一条名为 ",(0,r.jsx)(n.code,{children:"/new-entry"})," 的路由，并且被迁移的代码路由并未发生变化。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["Modern.js 会将与 package.json 文件中 ",(0,r.jsx)(n.code,{children:"name"})," 字段同名的入口作为主入口，主入口的路由为 ",(0,r.jsx)(n.code,{children:"/"}),"，其他入口的路由为 ",(0,r.jsx)(n.code,{children:"/{entryName}"}),"。","\n",(0,r.jsxs)(n.p,{children:["比如，package.json 中的 ",(0,r.jsx)(n.code,{children:"name"})," 为 ",(0,r.jsx)(n.code,{children:"myapp"})," 时，",(0,r.jsx)(n.code,{children:"src/myapp"})," 会作为项目的主入口。"]}),"\n"]})]}),"\n",(0,r.jsxs)(n.h2,{id:"入口类型",children:["入口类型",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#入口类型",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["不同的入口类型具有不同的编译和运行时行为。在 Modern.js 创建项目时，开发者可以手动选择创建",(0,r.jsx)(n.strong,{children:"框架模式"}),"或是",(0,r.jsx)(n.strong,{children:"构建模式"}),"的项目。完成创建后，可以看到不同模式的项目样板文件是不同的。"]}),"\n",(0,r.jsxs)(n.p,{children:["默认情况下，Modern.js 启动项目前会对 ",(0,r.jsx)(n.code,{children:"src/"})," 下的文件进行扫描，识别入口，并生成对应的服务端路由。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["可以通过 ",(0,r.jsx)(n.a,{href:"/configure/app/source/entries-dir",children:"source.entriesDir"})," 更改入口目录为其他目录。","\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["并非 ",(0,r.jsx)(n.code,{children:"src/"})," 下所有的一级目录都会成为项目入口, 入口所在目录必须满足以下四个条件之一："]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["具有 ",(0,r.jsx)(n.code,{children:"routes/"})," 目录"]}),"\n",(0,r.jsxs)(n.li,{children:["具有 ",(0,r.jsx)(n.code,{children:"App.[jt]sx?"})," 文件"]}),"\n",(0,r.jsxs)(n.li,{children:["具有 ",(0,r.jsx)(n.code,{children:"index.[jt]sx?"})," 文件"]}),"\n",(0,r.jsxs)(n.li,{children:["具有 ",(0,r.jsx)(n.code,{children:"pages/"})," 目录（兼容 Modern.js 1.0）"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["当 ",(0,r.jsx)(n.code,{children:"src/"})," 目录满足入口特征时，Modern.js 会认为当前项目为单入口应用。"]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["在单入口应用中，默认的入口名为 ",(0,r.jsx)(n.code,{children:"main"}),"。","\n"]})]}),"\n",(0,r.jsxs)(n.p,{children:["当项目不是单入口应用时，Modern.js 会进一步查看 ",(0,r.jsx)(n.code,{children:"src/"})," 下的一级目录。"]}),"\n",(0,r.jsxs)(n.h3,{id:"框架模式入口",children:["框架模式入口",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#框架模式入口",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["框架模式指需要使用 Modern.js 框架能力，例如 Router、SSR、一体化调用等。这类入口约定下，开发者定义的入口并不是真正的 Webpack 编译入口。Modern.js 在启动时会生成一个封装过的入口，可以在 ",(0,r.jsx)(n.code,{children:"node_modules/.modern/{entryName}/index.js"})," 找到真正的入口。"]}),"\n",(0,r.jsxs)(n.h4,{id:"约定式路由",children:["约定式路由",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#约定式路由",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果入口中存在 ",(0,r.jsx)(n.code,{children:"routes/"})," 目录，Modern.js 会在启动时扫描 ",(0,r.jsx)(n.code,{children:"routes/"})," 下的文件，基于文件约定，自动生成客户端路由（react-router）。"]}),"\n",(0,r.jsxs)(n.p,{children:["详细内容可以参考",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes",children:"路由"}),"。"]}),"\n",(0,r.jsxs)(n.h4,{id:"自定义路由",children:["自定义路由",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义路由",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果入口中存在 ",(0,r.jsx)(n.code,{children:"App.[jt]sx?"})," 文件，开发者可以在这个文件中自由的设置客户端路由，或者不设置客户端路由。"]}),"\n",(0,r.jsxs)(n.p,{children:["详细内容可以参考",(0,r.jsx)(n.a,{href:"/guides/basic-features/routes",children:"路由"}),"。"]}),"\n",(0,r.jsxs)(n.h4,{id:"自定义-app",children:["自定义 App",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义-app",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["如果入口中存在 ",(0,r.jsx)(n.code,{children:"index.[jt]sx"})," 文件，并且当文件默认导出函数时，Modern.js 还是会根据 runtime 的设置情况生成 createApp 包裹后的代码。在渲染过程中，将 createApp 包裹后的组件作为参数传递给 index 文件导出的函数，这样开发者可以自定义将组件挂载到 DOM 节点上，或在挂载前添加自定义行为。例如："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-tsx",children:"import ReactDOM from 'react-dom/client';\nimport { bootstrap } from '@modern-js/runtime';\n\nexport default (App: React.ComponentType) => {\n  // do something before bootstrap...\n  bootstrap(App, 'root', undefined, ReactDOM);\n};\n"})})]})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive warning",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"WARNING"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["由于 bootstrap 函数需要兼容 React17 和 React18 的用法，调用 bootstrap 函数时需要手动传入 ReactDOM 参数。","\n"]})]}),"\n",(0,r.jsx)(n.p,{children:"Modern.js 生成的文件内容如下："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",children:"import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport customBootstrap from '@_edenx_src/index.tsx';\nimport App from '@_edenx_src/App';\nimport { router, state } from '@edenx/runtime/plugins';\n\nconst IS_BROWSER = typeof window !== 'undefined' && window.name !== 'nodejs';\nconst MOUNT_ID = 'root';\n\nlet AppWrapper = null;\n\nfunction render() {\n  AppWrapper = createApp({\n    // runtime 的插件参数...\n  })(App);\n  if (IS_BROWSER) {\n    customBootstrap(AppWrapper);\n  }\n  return AppWrapper;\n}\n\nAppWrapper = render();\n\nexport default AppWrapper;\n"})})]})}),"\n",(0,r.jsxs)(n.h3,{id:"构建模式入口",children:["构建模式入口",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#构建模式入口",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"构建模式是指不使用任何 Modern.js 运行时的能力，完全由开发者自己定义项目 Webpack 的入口。"}),"\n",(0,r.jsxs)(n.p,{children:["如果入口中存在 ",(0,r.jsx)(n.code,{children:"index.[jt]sx"})," ，并且没有默认导出函数时，这时候该文件就是真正的 Webpack 入口文件。这里和 ",(0,r.jsx)(n.a,{href:"https://github.com/facebook/create-react-app",target:"_blank",rel:"noopener noreferrer",children:"Create React App"})," 类似，需要自己将组件挂载到 DOM 节点、添加热更新代码等。例如:"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"src/index.jsx"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-js",meta:"title=src/index.jsx",children:"import React from 'react';\nimport ReactDOM from 'react-dom';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n"})})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js ",(0,r.jsx)(n.strong,{children:"不推荐"}),"使用这种方式，这种方式丧失了框架的一些能力，如 ",(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.code,{children:"modern.config.js"})," 文件中的 ",(0,r.jsx)(n.code,{children:"runtime"})," 配置将不会再生效"]}),"。但是在项目从其他框架迁移到 Modern.js，例如 CRA，或是自己手动搭建的 webpack 时，这种方式会非常有用。"]}),"\n",(0,r.jsxs)(n.h2,{id:"自定义入口",children:["自定义入口",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#自定义入口",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"大部分存量项目并不是按照 Modern.js 的目录结构来搭建的。如果要改成 Modern.js 约定的目录结构，会存在一定的迁移成本。"}),"\n",(0,r.jsxs)(n.p,{children:["在这种情况下，除了使用文件约定生成入口外，你可以在 ",(0,r.jsx)(n.code,{children:"modern.config.[jt]s"})," 中手动配置入口。"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    entries: {\n      // 指定一个名称为 entry_customize 的新入口\n      entry_customize: './src/home/test/index.ts',\n    },\n    // 禁用默认入口扫描\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"禁用默认入口扫描",children:["禁用默认入口扫描",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#禁用默认入口扫描",children:"#"})]}),"\n",(0,r.jsx)(n.p,{children:"当使用自定义入口时，项目的部分结构可能恰巧命中了 Modern.js 的目录约定，但实际上这部分目录并不是真实的入口。"}),"\n",(0,r.jsxs)(n.p,{children:["Modern.js 提供了 ",(0,r.jsx)(n.code,{children:"disableDefaultEntries"})," 配置，来禁用默认的入口扫描规则。当你需要自定义入口时，一般需要将 ",(0,r.jsx)(n.code,{children:"disableDefaultEntries"})," 与 ",(0,r.jsx)(n.code,{children:"entries"})," 结合使用。这样，一些存量项目可以在不修改目录结构的情况下，快速地进行迁移。"]}),"\n",(0,r.jsxs)(n.div,{className:"language-",children:[(0,r.jsx)(n.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-ts",meta:'title="modern.config.ts"',children:"export default defineConfig({\n  source: {\n    disableDefaultEntries: true,\n  },\n});\n"})})]})]}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:["详细用法请查看 ",(0,r.jsx)(n.a,{href:"/configure/app/source/entries",children:"source.entries"})," 和 ",(0,r.jsx)(n.a,{href:"/configure/app/source/disable-default-entries",children:"source.disableDefaultEntries"}),"。","\n"]})]})]})}var o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,d.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);