(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([["docs_en_guides_basic-features_css_mdx"],{18184:function(s,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});!function(s,e){for(var n in e)Object.defineProperty(s,n,{enumerable:!0,get:e[n]})}(e,{frontmatter:function(){return o},toc:function(){return l},title:function(){return t},default:function(){return a}});var r=n("12151"),i=n("21447");let o={sidebar_position:2},l=[{id:"using-less-sass-and-stylus",text:"Using Less, Sass and Stylus",depth:2},{id:"using-postcss",text:"Using PostCSS",depth:2},{id:"using-css-modules",text:"Using CSS Modules",depth:2},{id:"using-css-in-js",text:"Using CSS-in-JS",depth:2},{id:"using-tailwind-css",text:"Using Tailwind CSS",depth:2},{id:"tailwind-css-version",text:"Tailwind CSS version",depth:3},{id:"browser-compatibility",text:"Browser Compatibility",depth:3},{id:"theme-config",text:"Theme config",depth:3}],t="CSS Solutions";function c(s){let e=Object.assign({h1:"h1",a:"a",p:"p",h2:"h2",code:"code",div:"div",button:"button",pre:"pre",span:"span",h3:"h3",ul:"ul",li:"li",blockquote:"blockquote"},(0,i.useMDXComponents)(),s.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.h1,{id:"css-solutions",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#css-solutions",children:"#"}),"CSS Solutions"]}),"\n",(0,r.jsx)(e.p,{children:"Modern.js has built-in multiple CSS solutions, including Less / Sass / Stylus preprocessor, PostCSS, CSS Modules, CSS-in-JS and Tailwind CSS."}),"\n",(0,r.jsxs)(e.h2,{id:"using-less-sass-and-stylus",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-less-sass-and-stylus",children:"#"}),"Using Less, Sass and Stylus"]}),"\n",(0,r.jsx)(e.p,{children:"Modern.js has built-in community popular CSS preprocessors such as Less, Sass."}),"\n",(0,r.jsxs)(e.p,{children:["By default, you don't need to configure anything for Less and Sass. If you need to customize loader config, you can configure ",(0,r.jsx)(e.a,{href:"/en/configure/app/tools/less.html",children:"tools.less"}),", ",(0,r.jsx)(e.a,{href:"/en/configure/app/tools/sass.html",children:"tools.sass"})," to set it up."]}),"\n",(0,r.jsxs)(e.p,{children:["You can also use Stylus in Modern.js, just install the Stylus plugin provided by Modern.js Builder, please refer to ",(0,r.jsx)(e.a,{href:"https://modernjs.dev/builder/en/plugins/plugin-stylus.html",target:"_blank",rel:"noopener noreferrer",children:"Stylus Plugin"})," for usage."]}),"\n",(0,r.jsxs)(e.h2,{id:"using-postcss",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-postcss",children:"#"}),"Using PostCSS"]}),"\n",(0,r.jsxs)(e.p,{children:["Modern.js has built-in ",(0,r.jsx)(e.a,{href:"https://postcss.org/",target:"_blank",rel:"noopener noreferrer",children:"PostCSS"})," to transform the CSS code."]}),"\n",(0,r.jsxs)(e.p,{children:["Please refer to ",(0,r.jsx)(e.a,{href:"https://modernjs.dev/builder/en/guide/basic/css-usage.html#using-postcss",target:"_blank",rel:"noopener noreferrer",children:"Modern.js Builder - Using PostCSS"})," for detailed usage."]}),"\n",(0,r.jsxs)(e.h2,{id:"using-css-modules",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-modules",children:"#"}),"Using CSS Modules"]}),"\n",(0,r.jsxs)(e.p,{children:["Please read the ",(0,r.jsx)(e.a,{href:"https://modernjs.dev/builder/en/guide/basic/css-modules.html",target:"_blank",rel:"noopener noreferrer",children:"Using CSS Modules"})," chapter for a complete usage of CSS Modules."]}),"\n",(0,r.jsxs)(e.h2,{id:"using-css-in-js",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-css-in-js",children:"#"}),"Using CSS-in-JS"]}),"\n",(0,r.jsx)(e.p,{children:"CSS-in-JS is a technology that can write CSS styles in JS files."}),"\n",(0,r.jsxs)(e.p,{children:["Modern.js integrates the CSS-in-JS library ",(0,r.jsx)(e.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," commonly used in the community, which uses the new feature of JavaScript ",(0,r.jsx)(e.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates",target:"_blank",rel:"noopener noreferrer",children:"Tagged template"})," to write CSS styles for components. You can use the ",(0,r.jsx)(e.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components"})," API directly from ",(0,r.jsx)(e.code,{children:"@modern-js/runtime/styled"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["When you need to write a ",(0,r.jsx)(e.code,{children:"div"})," component with an internal font in red, you can do the following implementation:"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" styled "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/styled'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"RedDiv"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"styled"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"  color: red;"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["When you need to dynamically set the component style according to the ",(0,r.jsx)(e.code,{children:"props"})," of the component, for example, when the attribute ",(0,r.jsx)(e.code,{children:"primary"})," of ",(0,r.jsx)(e.code,{children:"props"})," is ",(0,r.jsx)(e.code,{children:"true"}),", the color of the button is white, and otherwise it is red. The implementation code is as follows:"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" styled "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'@modern-js/runtime/styled'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Button"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"styled"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"."}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"button"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"  color: "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"${"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"props "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"props"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:".primary "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'white'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'red'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"}"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"  font-size: 1em;"})}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"`"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["For more usage of styled-components, please refer to [",(0,r.jsx)(e.a,{href:"https://styled-components.com/",target:"_blank",rel:"noopener noreferrer",children:"styled-components official website"})," ]."]}),"\n",(0,r.jsxs)(e.p,{children:["Modern.js uses the Babel plugin ",(0,r.jsx)(e.a,{href:"https://github.com/styled-components/babel-plugin-styled-components",target:"_blank",rel:"noopener noreferrer",children:"babel-plugin-styled-components"})," internally, and the plugin can be configured through ",(0,r.jsx)(e.a,{href:"/en/configure/app/tools/styled-components.html",children:"tools.styledComponents"}),"."]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive tip",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"TIP"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\nIf you need to use ",(0,r.jsx)(e.a,{href:"https://www.npmjs.com/package/styled-jsx",target:"_blank",rel:"noopener noreferrer",children:"styled-jsx"}),", ",(0,r.jsx)(e.a,{href:"https://emotion.sh/",target:"_blank",rel:"noopener noreferrer",children:"Emotion"}),"and other CSS-in-JS libraries, you need to install the dependency of the corresponding library first. For specific usage, please refer to the official website of the corresponding library."]})})]}),"\n",(0,r.jsxs)(e.h2,{id:"using-tailwind-css",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#using-tailwind-css",children:"#"}),"Using Tailwind CSS"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," is a CSS framework and design system based on Utility Class, which can quickly add common styles to components, and support flexible extension of theme styles. To use ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS"})," in the Modern.js, just execute ",(0,r.jsx)(e.code,{children:"pnpm run new"})," in the project root directory and turn it on."]}),"\n",(0,r.jsx)(e.p,{children:"Choose as follows:"}),"\n",(0,r.jsxs)(e.div,{className:"language-bash",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Action: Enable features"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"?"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" Enable features: Enable Tailwind CSS"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["When using, add the following code to the root component of the entry (such as ",(0,r.jsx)(e.code,{children:"src/App.jsx"}),"):"]}),"\n",(0,r.jsxs)(e.div,{className:"language-js",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tailwindcss/base.css'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tailwindcss/components.css'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'tailwindcss/utilities.css'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsx)(e.p,{children:"You can then use the Utility Class provided by Tailwind CSS in each component:"}),"\n",(0,r.jsxs)(e.div,{className:"language-tsx",children:[(0,r.jsx)(e.div,{className:""}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"App"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ("})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"h-12 w-48"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    <"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"className"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"text-xl font-medium text-black"'}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">hello world</"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"p"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"div"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.div,{className:"modern-directive info",children:[(0,r.jsx)(e.div,{className:"modern-directive-title",children:"Additional"}),(0,r.jsx)(e.div,{className:"modern-directive-content",children:(0,r.jsxs)(e.p,{children:["\nAccording to different needs, you can optionally import the CSS files provided by Tailwind CSS. Since the use of ",(0,r.jsx)(e.code,{children:"@taiwind"})," is equivalent to directly importing CSS files, you can refer to the content in the annotate in the ",(0,r.jsxs)(e.a,{href:"https://tailwindcss.com/docs/functions-and-directives#tailwind",target:"_blank",rel:"noopener noreferrer",children:[(0,r.jsx)(e.code,{children:"@tailwind"})," usage"]})," document for the purpose of the CSS files provided by Tailwind CSS."]})})]}),"\n",(0,r.jsxs)(e.h3,{id:"tailwind-css-version",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#tailwind-css-version",children:"#"}),"Tailwind CSS version"]}),"\n",(0,r.jsxs)(e.p,{children:["Modern.js supports both Tailwind CSS v2 and v3. The framework will recognize the version of ",(0,r.jsx)(e.code,{children:"tailwindcss"})," in the project ",(0,r.jsx)(e.code,{children:"package.json"})," and apply the corresponding configuration. By default, we install Tailwind CSS v3 for you."]}),"\n",(0,r.jsx)(e.p,{children:"If your project is still using Tailwind CSS v2, we recommend that you upgrade to v3 to support JIT and other capabilities. For the differences between Tailwind CSS v2 and v3 versions, please refer to the following articles:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://tailwindcss.com/blog/tailwindcss-v3",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3.0"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/upgrade-guide",target:"_blank",rel:"noopener noreferrer",children:"Upgrade Guide"})}),"\n"]}),"\n",(0,r.jsxs)(e.h3,{id:"browser-compatibility",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#browser-compatibility",children:"#"}),"Browser Compatibility"]}),"\n",(0,r.jsx)(e.p,{children:"Both Tailwind CSS v2 and v3 do not support IE 11 browsers. For background, please refer to:"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:[(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v3 - Browser Support"}),"."]}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://v2.tailwindcss.com/docs/browser-support",target:"_blank",rel:"noopener noreferrer",children:"Tailwind CSS v2 - Browser Support"})}),"\n"]}),"\n",(0,r.jsx)(e.p,{children:"If you use Tailwind CSS on IE 11 browser, some styles may not be available, please pay attention."}),"\n",(0,r.jsxs)(e.h3,{id:"theme-config",children:[(0,r.jsx)(e.a,{className:"header-anchor","aria-hidden":"true",href:"#theme-config",children:"#"}),"Theme config"]}),"\n",(0,r.jsxs)(e.p,{children:["When you need to customize the ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," configuration of Tailwind CSS, you can modify it in the configuration ",(0,r.jsx)(e.a,{href:"/en/configure/app/source/design-system.html",children:(0,r.jsx)(e.code,{children:"source.designSystem"})}),", for example, add a color theme ",(0,r.jsx)(e.code,{children:"primary"}),":"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  source"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    designSystem"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      extend"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        colors"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          primary"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'#5c6ac4'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.p,{children:["When you need special configuration for Tailwind CSS other than ",(0,r.jsx)(e.a,{href:"https://tailwindcss.com/docs/theme",target:"_blank",rel:"noopener noreferrer",children:"theme"}),", you can configure it in ",(0,r.jsx)(e.a,{href:"/en/configure/app/tools/tailwindcss.html",children:(0,r.jsx)(e.code,{children:"tools.tailwindcss"})}),", for example setting ",(0,r.jsx)(e.code,{children:"variants"}),":"]}),"\n",(0,r.jsxs)(e.div,{className:"language-ts",children:[(0,r.jsx)(e.div,{className:"modern-code-title",children:"modern.config.ts"}),(0,r.jsxs)(e.div,{className:"modern-code-content",children:[(0,r.jsx)(e.button,{className:"copy"}),(0,r.jsx)(e.pre,{className:"shiki",style:{backgroundColor:"var(--shiki-color-background)"},children:(0,r.jsxs)(e.code,{children:[(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"export"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"default"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"defineConfig"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"({"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  tools"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    tailwindcss"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      variants"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        extend"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"          backgroundColor"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'active'"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"        }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"      }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsxs)(e.span,{className:"line",children:[(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  }"}),(0,r.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,r.jsx)(e.span,{className:"line",children:(0,r.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"});"})}),"\n",(0,r.jsx)(e.span,{className:"line"})]})})]})]}),"\n",(0,r.jsxs)(e.blockquote,{children:["\n",(0,r.jsxs)(e.p,{children:["When configuring Tailwind CSS for a project, the combination of the two configurations ",(0,r.jsx)(e.a,{href:"/en/configure/app/source/design-system.html",children:"source.designSystem"})," and ",(0,r.jsx)(e.a,{href:"/en/configure/app/tools/tailwindcss.html",children:"tools.tailwindcss"})," is equivalent to a separate configuration ",(0,r.jsx)(e.code,{children:"tailwindcss.config.js"})," file. Where ",(0,r.jsx)(e.a,{href:"/en/configure/app/source/design-system.html",children:"source.designSystem"})," is equivalent to the ",(0,r.jsx)(e.a,{href:"https://v2.tailwindcss.com/docs/configuration#theme",target:"_blank",rel:"noopener noreferrer",children:"theme"})," configuration of Tailwind CSS."]}),"\n"]})]})}var a=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,i.useMDXComponents)(),s.components);return e?(0,r.jsx)(e,Object.assign({},s,{children:(0,r.jsx)(c,s)})):c(s)}}}]);