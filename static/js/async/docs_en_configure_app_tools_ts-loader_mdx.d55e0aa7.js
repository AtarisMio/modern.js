(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_configure_app_tools_ts-loader_mdx"],{79790:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}});var l=n("12151"),r=n("21447");function o(s){let e=Object.assign({ul:"ul",li:"li",strong:"strong",code:"code",p:"p",h3:"h3",a:"a",div:"div",button:"button",pre:"pre",span:"span",h4:"h4"},(0,r.useMDXComponents)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Type:"})," ",(0,l.jsx)(e.code,{children:"Object | Function | undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Default:"})," ",(0,l.jsx)(e.code,{children:"undefined"})]}),"\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.strong,{children:"Bundler:"})," ",(0,l.jsx)(e.code,{children:"only support webpack"})]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"ts-loader"})," is not enabled by default in the project. When ",(0,l.jsx)(e.code,{children:"tools.tsLoader"})," is not undefined, builder will use ts-loader instead of babel-loader to compile TypeScript code."]}),"\n",(0,l.jsxs)(e.h3,{id:"object-type",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#object-type",children:"#"}),"Object Type"]}),"\n",(0,l.jsx)(e.p,{children:"When this value is an Object, it is merged with the default configuration via Object.assign."}),"\n",(0,l.jsx)(e.p,{children:"The default configuration is as follows:"}),"\n",(0,l.jsxs)(e.div,{className:"language-json",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"compilerOptions"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"target"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"es5"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"module"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"ESNext"'})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"transpileOnly"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:'"allowTsInNodeModules"'}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.p,{children:["You can override the default configuration via the ",(0,l.jsx)(e.code,{children:"tools.tsLoader"})," configuration item:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    tsLoader"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      allowTsInNodeModules"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"function-type",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#function-type",children:"#"}),"Function Type"]}),"\n",(0,l.jsxs)(e.p,{children:["When this value is a Function, the default configuration is passed in as the first parameter, the configuration object can be modified directly, or an object can be returned as the final configuration.The second parameter is the util functions to modify the ",(0,l.jsx)(e.code,{children:"ts-loader"})," configuration. For example:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"tsLoader"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" opts "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"opts"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".allowTsInNodeModules "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h3,{id:"util-functions",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#util-functions",children:"#"}),"Util Functions"]}),"\n",(0,l.jsxs)(e.p,{children:["When the value of ",(0,l.jsx)(e.code,{children:"tools.tsLoader"})," is a Function, the utils functions available for the second parameter are as follows:"]}),"\n",(0,l.jsxs)(e.h4,{id:"addincludes",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addincludes",children:"#"}),"addIncludes"]}),"\n",(0,l.jsxs)(e.p,{children:["Type: ",(0,l.jsx)(e.code,{children:"(includes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n",(0,l.jsxs)(e.p,{children:["By default, only the application code in the src directory will be compiled. Use ",(0,l.jsx)(e.code,{children:"addIncludes"})," to specify ts-loader to compile some files under ",(0,l.jsx)(e.code,{children:"node_modules"}),". For example:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"tsLoader"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (config"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { addIncludes }) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addIncludes"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/node_modules\\/react/"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,l.jsxs)(e.h4,{id:"addexcludes",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#addexcludes",children:"#"}),"addExcludes"]}),"\n",(0,l.jsxs)(e.p,{children:["Type: ",(0,l.jsx)(e.code,{children:"(excludes: string | RegExp | Array<string | RegExp>) => void"})]}),"\n",(0,l.jsxs)(e.p,{children:["Contrary to ",(0,l.jsx)(e.code,{children:"addIncludes"}),", specify ",(0,l.jsx)(e.code,{children:"ts-loader"})," to exclude certain files when compiling."]}),"\n",(0,l.jsxs)(e.p,{children:["For example, without compiling files in the ",(0,l.jsx)(e.code,{children:"src/example"})," directory:"]}),"\n",(0,l.jsxs)(e.div,{className:"language-ts",children:[(0,l.jsx)(e.div,{className:""}),(0,l.jsxs)(e.div,{className:"modern-code-content",children:[(0,l.jsx)(e.button,{className:"copy"}),(0,l.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,l.jsxs)(e.code,{children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"tsLoader"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (config"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { addExcludes }) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"addExcludes"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(["}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"/src\\/example\\//"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]);"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,l.jsx)(e.span,{className:"line"})]})})]})]})]})}var i=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(o,s)})):o(s)}},3798:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return i},toc:function(){return c},title:function(){return a},default:function(){return d}});var l=n("12151"),r=n("21447"),o=n.ir(n("79790"));let i={sidebar_label:"tsLoader"},c=[],a="tools.tsLoader";function t(s){let e=Object.assign({h1:"h1",a:"a",div:"div",p:"p"},(0,r.useMDXComponents)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(e.h1,{id:"toolstsloader",children:[(0,l.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#toolstsloader",children:"#"}),"tools.tsLoader"]}),"\n",(0,l.jsxs)(e.div,{className:"modern-directive tip",children:[(0,l.jsx)(e.p,{className:"modern-directive-title",children:"TIP"}),(0,l.jsx)(e.div,{className:"modern-directive-content",children:(0,l.jsxs)(e.p,{children:["\nThis config is provided by Modern.js Builder, more detail can see ",(0,l.jsx)(e.a,{href:"https://modernjs.dev/builder/en/api/config-tools.html#toolstsloader",target:"_blank",rel:"nofollow",children:"tools.tsLoader"}),"."]})})]}),"\n","\n",(0,l.jsx)(o.default,{})]})}var d=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.useMDXComponents)(),s.components);return e?(0,l.jsx)(e,Object.assign({},s,{children:(0,l.jsx)(t,s)})):t(s)}}}]);