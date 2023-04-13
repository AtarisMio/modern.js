(self.webpackChunk_modern_js_main_doc=self.webpackChunk_modern_js_main_doc||[]).push([["docs_zh_guides_get-started_quick-start_mdx~docs_zh_tutorials_first-app_c01-start_mdx"],{72211:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("12151"),c=s("23169");function d(e){var n=Object.assign({p:"p",a:"a",strong:"strong",div:"div",button:"button",pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["在开始使用前，你需要安装 ",(0,r.jsx)(n.a,{href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer",children:"Node.js"}),"，并保证 Node.js 版本不低于 14.17.6，",(0,r.jsx)(n.strong,{children:"我们推荐使用 Node.js 16 的 LTS 版本"}),"。"]}),"\n",(0,r.jsx)(n.p,{children:"你可以通过以下命令检查当前使用的 Node.js 版本："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"node -v\n# v16.19.1\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["如果你当前的环境中尚未安装 Node.js，或是安装的版本低于 14.17.6，可以通过 ",(0,r.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",target:"_blank",rel:"noopener noreferrer",children:"nvm"})," 或 ",(0,r.jsx)(n.a,{href:"https://github.com/Schniz/fnm",target:"_blank",rel:"noopener noreferrer",children:"fnm"})," 安装需要的版本。"]}),"\n",(0,r.jsx)(n.p,{children:"下面是通过 nvm 安装 Node.js 16 LTS 版本的例子："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"# 安装 Node.js 16 的长期支持版本\nnvm install 16 --lts\n\n# 将刚安装的 Node.js 16 设置为默认版本\nnvm alias default 16\n\n# 切换到刚安装的 Node.js 16\nnvm use 16\n"})})]})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive tip",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"nvm 和 fnm"}),(0,r.jsx)(n.div,{className:"modern-directive-content",children:(0,r.jsx)(n.p,{children:"nvm 和 fnm 都是 Node.js 版本管理工具。相对来说，nvm 较为成熟和稳定，而 fnm 是使用 Rust 实现的，比 nvm 提供了更好的性能。"})})]}),"\n",(0,r.jsxs)(n.p,{children:["此外，在安装 nvm 或 fnm 后，然后只要仓库根目录下有内容为 ",(0,r.jsx)(n.code,{children:"lts/gallium"})," 的 ",(0,r.jsx)(n.code,{children:".nvmrc"})," 文件，进入这个仓库时就会自动安装或切换到正确的 Node.js 版本。"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},81456:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("12151"),c=s("23169");function d(e){var n=Object.assign({p:"p",code:"code",div:"div",button:"button",pre:"pre"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["在项目中执行 ",(0,r.jsx)(n.code,{children:"pnpm run dev"})," 即可启动项目："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"$ pnpm run dev\n\n> modern dev\n\ninfo    Starting dev server...\ninfo    App running at:\n\n  > Local:    http://localhost:8080/\n  > Network:  http://192.168.0.1:8080/\n\n Client ✔ done in 76.10ms\n"})})]})}),"\n",(0,r.jsxs)(n.p,{children:["在浏览器中打开 ",(0,r.jsx)(n.code,{children:"http://localhost:8000/"}),"，可以看到页面内容。"]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},36633:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return t}});var r=s("12151"),c=s("23169");function d(e){var n=Object.assign({p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Modern.js 生成器会提供一个可交互的问答界面，根据结果初始化项目，按照默认的选择进行初始化："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"? 请选择你想创建的工程类型：Web 应用\n? 请选择开发语言：TS\n? 请选择包管理工具：pnpm\n"})})]})}),"\n",(0,r.jsx)(n.p,{children:"在生成项目后，Modern.js 会自动安装依赖、创建 git 仓库。"}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"[INFO] 依赖自动安装成功\n[INFO] git 仓库初始化成功\n[INFO] 创建成功！\n可在新项目的目录下运行以下命令：\npnpm run dev          # 按开发环境的要求，运行和调试项目\npnpm run build        # 按生产环境的要求，构建项目\npnpm run serve        # 按生产环境的要求，运行项目\npnpm run lint         # 检查和修复所有代码\npnpm run new          # 继续创建更多项目要素，比如应用入口\n"})})]})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsx)(n.p,{children:"Modern.js 生成器除了在项目初始化时工作外，也能在后续研发中生成项目各种粒度的模块，并非一用即抛开。"}),"\n"]})]}),"\n",(0,r.jsx)(n.p,{children:"现在，项目结构如下："}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{children:".\n├── node_modules\n├── src\n│   ├── modern-app-env.d.ts\n│   └── routes\n│       ├── index.css\n│       ├── layout.tsx\n│       └── page.tsx\n├── modern.config.ts\n├── package.json\n├── pnpm-lock.yaml\n├── README.md\n└── tsconfig.json\n"})})]})})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(d,e)})):d(e)}},65082:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"default",{enumerable:!0,get:function(){return a}});var r=s("12151"),c=s("23169"),d=s.ir(s("72211"));function t(e){var n=Object.assign({h3:"h3",a:"a",p:"p",div:"div",button:"button",pre:"pre",code:"code"},(0,c.useMDXComponents)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.h3,{id:"node-js",children:["Node.js",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#node-js",children:"#"})]}),"\n","\n",(0,r.jsx)(d.default,{}),"\n",(0,r.jsxs)(n.h3,{id:"pnpm",children:["pnpm",(0,r.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#pnpm",children:"#"})]}),"\n",(0,r.jsxs)(n.p,{children:["推荐使用 ",(0,r.jsx)(n.a,{href:"https://pnpm.io/installation",target:"_blank",rel:"noopener noreferrer",children:"pnpm"})," 来管理依赖："]}),"\n",(0,r.jsx)(n.div,{className:"language-",children:(0,r.jsxs)(n.div,{className:"modern-code-content",children:[(0,r.jsx)(n.button,{className:"copy"}),(0,r.jsx)(n.pre,{className:"code",children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install -g pnpm@7\n"})})]})}),"\n",(0,r.jsxs)(n.div,{className:"modern-directive note",children:[(0,r.jsx)(n.div,{className:"modern-directive-title",children:"NOTE"}),(0,r.jsxs)(n.div,{className:"modern-directive-content",children:[(0,r.jsxs)(n.p,{children:["Modern.js 同样支持使用 ",(0,r.jsx)(n.code,{children:"yarn"}),"、",(0,r.jsx)(n.code,{children:"npm"})," 进行依赖管理。"]}),"\n"]})]})]})}var a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,c.useMDXComponents)(),e.components).wrapper;return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(t,e)})):t(e)}}}]);