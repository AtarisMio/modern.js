(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_zh_apis_monorepo_commands_new_mdx"],{62583:function(e,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});!function(e,n){for(var s in n)Object.defineProperty(e,s,{enumerable:!0,get:n[s]})}(n,{frontmatter:function(){return o},title:function(){return a},toc:function(){return d},default:function(){return t}});var c=s("12151"),r=s("21447"),o={sidebar_position:1},a="new",d=[];function i(e){var n=Object.assign({h1:"h1",a:"a",div:"div",button:"button",pre:"pre",code:"code",p:"p"},(0,r.useMDXComponents)(),e.components);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.h1,{id:"new",children:["new",(0,c.jsx)(n.a,{className:"header-anchor","aria-hidden":"true",href:"#new",children:"#"})]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"Usage: modern new [options]\n\nMonorepo 创建子项目\n\nOptions:\n  -d, --debug            开启 Debug 模式，打印调试日志信息 (default: false)\n  -c, --config <config>  生成器运行默认配置(JSON 字符串)\n  --dist-tag <tag>       生成器使用特殊的 npm Tag 版本\n  --registry             生成器运行过程中定制 npm Registry\n  -h, --help             display help for command\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"modern new"})," 命令在 monorepo 中可以用来添加应用工程和可复用的模块："]}),"\n",(0,c.jsx)(n.div,{className:"language-",children:(0,c.jsxs)(n.div,{className:"modern-code-content",children:[(0,c.jsx)(n.button,{className:"copy"}),(0,c.jsx)(n.pre,{className:"code",children:(0,c.jsx)(n.code,{className:"language-bash",children:"$ modern new\n? 请选择你想创建的工程类型 (Use arrow keys)\n❯ Web 应用\n  Web 应用（测试）\n  Npm 模块\n  Npm 模块（内部）\n"})})]})}),"\n",(0,c.jsxs)(n.p,{children:["应用工程默认会添加到 ",(0,c.jsx)(n.code,{children:"apps"})," 目录， 测试应用会添加到 ",(0,c.jsx)(n.code,{children:"examples"})," 目录，公共模块默认会添加到 ",(0,c.jsx)(n.code,{children:"packages"})," 目录， 内部模块默认会添加到 ",(0,c.jsx)(n.code,{children:"features"})," 目录。"]}),"\n",(0,c.jsx)(n.p,{children:"内部模块在 monorepo 的应用里面使用时，可以无需构建直接使用源码。"}),"\n",(0,c.jsxs)(n.div,{className:"modern-directive caution",children:[(0,c.jsx)(n.div,{className:"modern-directive-title",children:"注意"}),(0,c.jsxs)(n.div,{className:"modern-directive-content",children:[(0,c.jsx)(n.code,{children:"--config"})," 参数对应参数值需要使用 JSON 字符串。","\n",(0,c.jsxs)(n.p,{children:["pnpm 暂不支持使用 JSON 字符串作为参数值，可使用 ",(0,c.jsx)(n.code,{children:"npm new"})," 开启相关功能。【",(0,c.jsx)(n.a,{href:"https://github.com/pnpm/pnpm/issues/3876",target:"_blank",rel:"noopener noreferrer",children:"相关 Issue"}),"】"]}),"\n"]})]})]})}var t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.useMDXComponents)(),e.components).wrapper;return n?(0,c.jsx)(n,Object.assign({},e,{children:(0,c.jsx)(i,e)})):i(e)}}}]);