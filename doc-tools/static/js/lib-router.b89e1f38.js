(self.webpackChunk_modern_js_doc_tools_doc=self.webpackChunk_modern_js_doc_tools_doc||[]).push([["lib-router"],{39794:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{AbortedDeferredError:function(){return K},Action:function(){return o},UNSAFE_getPathContributingMatches:function(){return N},createBrowserHistory:function(){return P},createPath:function(){return C},invariant:function(){return S},joinPaths:function(){return T},matchPath:function(){return k},matchRoutes:function(){return x},normalizePathname:function(){return W},parsePath:function(){return E},resolvePath:function(){return U},resolveTo:function(){return F},stripBasename:function(){return L},warning:function(){return O}});var n,a,o,i,u=r("36743"),c=r("7136"),s=r("93473"),l=r("57809"),h=r("85109"),f=r("56148"),d=r("57962"),v=r("81962"),p=r("46410"),m=r("41310"),g=r("51704"),y=r("19522");function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r("33397"),(n=o||(o={})).Pop="POP",n.Push="PUSH",n.Replace="REPLACE";var w="popstate";function P(e){return void 0===e&&(e={}),function(e,t,r,n){var a=function(){return(f.state||{idx:null}).idx},i=function(){d=o.Pop;var e=a(),t=null==e?null:e-p;p=e,v&&v({action:d,location:m.location,delta:t})},u=function(e){var t="null"!==s.location.origin?s.location.origin:s.location.href,r="string"==typeof e?e:C(e);return S(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)};void 0===n&&(n={});var c=n.window,s=void 0===c?document.defaultView:c,l=n.v5Compat,h=void 0!==l&&l,f=s.history,d=o.Pop,v=null,p=a();null==p&&(p=0,f.replaceState(b({},f.state,{idx:p}),""));var m={get action(){return d},get location(){return e(s,f)},listen:function(e){if(v)throw Error("A history only accepts one active listener");return s.addEventListener(w,i),v=e,function(){s.removeEventListener(w,i),v=null}},createHref:function(e){return t(s,e)},createURL:u,encodeLocation:function(e){var t=u(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){d=o.Push;var n=R(m.location,e,t);r&&r(n,e);var i=_(n,p=a()+1),u=m.createHref(n);try{f.pushState(i,"",u)}catch(e){s.location.assign(u)}h&&v&&v({action:d,location:m.location,delta:1})},replace:function(e,t){d=o.Replace;var n=R(m.location,e,t);r&&r(n,e);var i=_(n,p=a()),u=m.createHref(n);f.replaceState(i,"",u),h&&v&&v({action:d,location:m.location,delta:0})},go:function(e){return f.go(e)}};return m}(function(e,t){var r=e.location;return R("",{pathname:r.pathname,search:r.search,hash:r.hash},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:C(t)},null,e)}function S(e,t){if(!1===e||null==e)throw Error(t)}function _(e,t){return{usr:e.state,key:e.key,idx:t}}function R(e,t,r,n){return void 0===r&&(r=null),b({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?E(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function C(e){var t=e.pathname,r=void 0===t?"/":t,n=e.search,a=void 0===n?"":n,o=e.hash,i=void 0===o?"":o;return a&&"?"!==a&&(r+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(r+="#"===i.charAt(0)?i:"#"+i),r}function E(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function x(e,t,r){void 0===r&&(r="/");var n=L(("string"==typeof t?E(t):t).pathname||"/",r);if(null==n)return null;var a=function e(t,r,n,a){void 0===r&&(r=[]),void 0===n&&(n=[]),void 0===a&&(a="");var o=function(t,o,i){var u={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};u.relativePath.startsWith("/")&&(S(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a)+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),u.relativePath=u.relativePath.slice(a.length));var c=T([a,u.relativePath]),s=n.concat(u);t.children&&t.children.length>0&&(S(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+c+'".'),e(t.children,r,s,c)),(null!=t.path||t.index)&&r.push({path:c,score:function(e,t){var r=e.split("/"),n=r.length;return r.some(j)&&(n+=-2),t&&(n+=2),r.filter(function(e){return!j(e)}).reduce(function(e,t){return e+(A.test(t)?3:""===t?1:10)},n)}(c,t.index),routesMeta:s})};return t.forEach(function(e,t){var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?")){var n=!0,a=!1,i=void 0;try{for(var u,c=(function e(t){var r=t.split("/");if(0===r.length)return[];var n=v._(r),a=n[0],o=n.slice(1),i=a.endsWith("?"),u=a.replace(/\?$/,"");if(0===o.length)return i?[u,""]:[u];var c=e(o.join("/")),s=[];return s.push.apply(s,p._(c.map(function(e){return""===e?u:[u,e].join("/")}))),i&&s.push.apply(s,p._(c)),s.map(function(e){return t.startsWith("/")&&""===e?"/":e})})(e.path)[Symbol.iterator]();!(n=(u=c.next()).done);n=!0){var s=u.value;o(e,t,s)}}catch(e){a=!0,i=e}finally{try{!n&&null!=c.return&&c.return()}finally{if(a)throw i}}}else o(e,t)}),r}(e);(function(e){e.sort(function(e,t){return e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(function(e,r){return e===t[r]})?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(function(e){return e.childrenIndex}),t.routesMeta.map(function(e){return e.childrenIndex}))})})(a);for(var o=null,i=0;null==o&&i<a.length;++i)o=function(e,t){for(var r=e.routesMeta,n={},a="/",o=[],i=0;i<r.length;++i){var u=r[i],c=i===r.length-1,s="/"===a?t:t.slice(a.length)||"/",l=k({path:u.relativePath,caseSensitive:u.caseSensitive,end:c},s);if(!l)return null;Object.assign(n,l.params);var h=u.route;o.push({params:n,pathname:T([a,l.pathname]),pathnameBase:W(T([a,l.pathnameBase])),route:h}),"/"!==l.pathnameBase&&(a=T([a,l.pathnameBase]))}return o}(a[i],function(e){try{return decodeURI(e)}catch(t){return O(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t)+")."),e}}(n));return o}(a=i||(i={})).data="data",a.deferred="deferred",a.redirect="redirect",a.error="error";var A=/^:\w+$/,j=function(e){return"*"===e};function k(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});var r=d._(function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),O("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');var n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,function(e,t){return n.push(t),"/([^\\/]+)"});return e.endsWith("*")?(n.push("*"),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),2),n=r[0],a=r[1],o=t.match(n);if(!o)return null;var i=o[0],u=i.replace(/(.)\/+$/,"$1"),c=o.slice(1);return{params:a.reduce(function(e,t,r){if("*"===t){var n=c[r]||"";u=i.slice(0,i.length-n.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(r){return O(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e)+'" is a malformed URL segment. This is probably'+(" due to a bad percent encoding ("+r)+")."),e}}(c[r]||"",t),e},{}),pathname:i,pathnameBase:u,pattern:e}}function L(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;var r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function O(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function U(e,t){void 0===t&&(t="/");var r="string"==typeof e?E(e):e,n=r.pathname,a=r.search,o=r.hash;return{pathname:n?n.startsWith("/")?n:function(e,t){var r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(function(e){".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"}(n,t):t,search:M(void 0===a?"":a),hash:$(void 0===o?"":o)}}function D(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n))+"].  Please separate it out to the "+("`to."+r)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function N(e){return e.filter(function(e,t){return 0===t||e.route.path&&e.route.path.length>0})}function F(e,t,r,n){void 0===n&&(n=!1),"string"==typeof e?a=E(e):(S(!(a=b({},e)).pathname||!a.pathname.includes("?"),D("?","pathname","search",a)),S(!a.pathname||!a.pathname.includes("#"),D("#","pathname","hash",a)),S(!a.search||!a.search.includes("#"),D("#","search","hash",a)));var a,o,i=""===e||""===a.pathname,u=i?"/":a.pathname;if(n||null==u)o=r;else{var c=t.length-1;if(u.startsWith("..")){for(var s=u.split("/");".."===s[0];)s.shift(),c-=1;a.pathname=s.join("/")}o=c>=0?t[c]:"/"}var l=U(a,o),h=u&&"/"!==u&&u.endsWith("/"),f=(i||"."===u)&&r.endsWith("/");return!l.pathname.endsWith("/")&&(h||f)&&(l.pathname+="/"),l}var T=function(e){return e.join("/").replace(/\/\/+/g,"/")},W=function(e){return e.replace(/\/+$/,"").replace(/^\/*/,"/")},M=function(e){return e&&"?"!==e?e.startsWith("?")?e:"?"+e:""},$=function(e){return e&&"#"!==e?e.startsWith("#")?e:"#"+e:""},K=function(e){h._(r,e);var t=g._(r);function r(){return c._(this,r),t.apply(this,arguments)}return r}(m._(Error));s._(function e(t,r){var n,a=this;c._(this,e),this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],S(t&&"object"==typeof t&&!Array.isArray(t),"defer() only accepts plain objects"),this.abortPromise=new Promise(function(e,t){return n=t}),this.controller=new AbortController;var o=function(){return n(new K("Deferred data aborted"))};this.unlistenAbortSignal=function(){return a.controller.signal.removeEventListener("abort",o)},this.controller.signal.addEventListener("abort",o),this.data=Object.entries(t).reduce(function(e,t){var r=d._(t,2),n=r[0],o=r[1];return Object.assign(e,l._({},n,a.trackPromise(n,o)))},{}),this.done&&this.unlistenAbortSignal(),this.init=r},[{key:"trackPromise",value:function(e,t){var r=this;if(!f._(t,Promise))return t;this.deferredKeys.push(e),this.pendingKeysSet.add(e);var n=Promise.race([t,this.abortPromise]).then(function(t){return r.onSettle(n,e,null,t)},function(t){return r.onSettle(n,e,t)});return n.catch(function(){}),Object.defineProperty(n,"_tracked",{get:function(){return!0}}),n}},{key:"onSettle",value:function(e,t,r,n){return this.controller.signal.aborted&&f._(r,K)?(this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:function(){return r}}),Promise.reject(r)):(this.pendingKeysSet.delete(t),this.done&&this.unlistenAbortSignal(),r)?(Object.defineProperty(e,"_error",{get:function(){return r}}),this.emit(!1,t),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:function(){return n}}),this.emit(!1,t),n)}},{key:"emit",value:function(e,t){this.subscribers.forEach(function(r){return r(e,t)})}},{key:"subscribe",value:function(e){var t=this;return this.subscribers.add(e),function(){return t.subscribers.delete(e)}}},{key:"cancel",value:function(){var e=this;this.controller.abort(),this.pendingKeysSet.forEach(function(t,r){return e.pendingKeysSet.delete(r)}),this.emit(!0)}},{key:"resolveData",value:function(e){var t=this;return u._(function(){var r,n;return y._(this,function(a){switch(a.label){case 0:if(r=!1,t.done)return[3,2];return n=function(){return t.cancel()},e.addEventListener("abort",n),[4,new Promise(function(r){t.subscribe(function(a){e.removeEventListener("abort",n),(a||t.done)&&r(a)})})];case 1:r=a.sent(),a.label=2;case 2:return[2,r]}})})()}},{key:"done",get:function(){return 0===this.pendingKeysSet.size}},{key:"unwrappedData",get:function(){return S(null!==this.data&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce(function(e,t){var r=d._(t,2),n=r[0],a=r[1];return Object.assign(e,l._({},n,function(e){var t;if(t=e,!f._(t,Promise)||!0!==t._tracked)return e;if(e._error)throw e._error;return e._data}(a)))},{})}},{key:"pendingKeys",get:function(){return Array.from(this.pendingKeysSet)}}]);["get"].concat(p._(["post","put","patch","delete"])),"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement,Symbol("deferred")},58675:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{matchRoutes:function(){return l.matchRoutes},useLocation:function(){return l.useLocation},useNavigate:function(){return l.useNavigate},BrowserRouter:function(){return b}});var n,a,o,i,u=r("56148"),c=r("57962"),s=r.ir(r("93989")),l=r("27731"),h=r("39794");function f(){return(f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&(a[r]=e[r]);return a}var v="application/x-www-form-urlencoded";function p(e){return null!=e&&"string"==typeof e.tagName}var m=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],g=["aria-current","caseSensitive","className","end","style","to","children"],y=["reloadDocument","replace","method","action","onSubmit","fetcherKey","routeId","relative","preventScrollReset"];function b(e){var t=e.basename,r=e.children,n=e.window,a=s.useRef();null==a.current&&(a.current=(0,h.createBrowserHistory)({window:n,v5Compat:!0}));var o=a.current,i=c._(s.useState({action:o.action,location:o.location}),2),u=i[0],f=i[1];return s.useLayoutEffect(function(){return o.listen(f)},[o]),s.createElement(l.Router,{basename:t,children:r,location:u.location,navigationType:u.action,navigator:o})}var w="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,P=s.forwardRef(function(e,t){var r,n=e.onClick,a=e.relative,o=e.reloadDocument,i=e.replace,u=e.state,c=e.target,h=e.to,v=e.preventScrollReset,p=d(e,m),g=!1;if(w&&"string"==typeof h&&/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(h)){r=h;var y=new URL(window.location.href),b=new URL(h.startsWith("//")?y.protocol+h:h);b.origin===y.origin?h=b.pathname+b.search+b.hash:g=!0}var P=(0,l.useHref)(h,{relative:a}),S=function(e,t){var r=void 0===t?{}:t,n=r.target,a=r.replace,o=r.state,i=r.preventScrollReset,u=r.relative,c=(0,l.useNavigate)(),h=(0,l.useLocation)(),f=(0,l.useResolvedPath)(e,{relative:u});return s.useCallback(function(t){if(r=t,s=n,0===r.button&&(!s||"_self"===s)&&!((d=r).metaKey||d.altKey||d.ctrlKey||d.shiftKey)){t.preventDefault();var r,s,d,v=void 0!==a?a:(0,l.createPath)(h)===(0,l.createPath)(f);c(e,{replace:v,state:o,preventScrollReset:i,relative:u})}},[h,c,f,a,o,n,e,i,u])}(h,{replace:i,state:u,target:c,preventScrollReset:v,relative:a});return s.createElement("a",f({},p,{href:r||P,onClick:g||o?n:function(e){n&&n(e),!e.defaultPrevented&&S(e)},ref:t,target:c}))});s.forwardRef(function(e,t){var r,n=e["aria-current"],a=e.caseSensitive,o=e.className,i=void 0===o?"":o,u=e.end,c=void 0!==u&&u,h=e.style,v=e.to,p=e.children,m=d(e,g),y=(0,l.useResolvedPath)(v,{relative:m.relative}),b=(0,l.useLocation)(),w=s.useContext(l.UNSAFE_DataRouterStateContext),S=s.useContext(l.UNSAFE_NavigationContext).navigator,_=S.encodeLocation?S.encodeLocation(y).pathname:y.pathname,R=b.pathname,C=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;!(void 0!==a&&a)&&(R=R.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase());var E=R===_||!c&&R.startsWith(_)&&"/"===R.charAt(_.length),x=null!=C&&(C===_||!c&&C.startsWith(_)&&"/"===C.charAt(_.length));r="function"==typeof i?i({isActive:E,isPending:x}):[i,E?"active":null,x?"pending":null].filter(Boolean).join(" ");var A="function"==typeof h?h({isActive:E,isPending:x}):h;return s.createElement(P,f({},m,{"aria-current":E?void 0===n?"page":n:void 0,className:r,ref:t,style:A,to:v}),"function"==typeof p?p({isActive:E,isPending:x}):p)}),s.forwardRef(function(e,t){return s.createElement(S,f({},e,{ref:t}))});var S=s.forwardRef(function(e,t){var r=e.reloadDocument,n=e.replace,a=e.method,i=void 0===a?"get":a,m=e.action,g=e.onSubmit,b=e.fetcherKey,w=e.routeId,P=e.relative,S=e.preventScrollReset,R=d(e,y),C=function(e,t){var r,n,a=(r=o.UseSubmitImpl,(n=s.useContext(l.UNSAFE_DataRouterContext))||(0,h.invariant)(!1),n).router,i=_();return s.useCallback(function(r,n){if(void 0===n&&(n={}),"undefined"==typeof document)throw Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");var o=function(e,t,r){if(p(l=e)&&"form"===l.tagName.toLowerCase()){var n=r.submissionTrigger;d=r.method||e.getAttribute("method")||"get",m=r.action||e.getAttribute("action")||t,g=r.encType||e.getAttribute("enctype")||v,y=new FormData(e),n&&n.name&&y.append(n.name,n.value)}else{if(p(h=e)&&"button"===h.tagName.toLowerCase()||p(f=e)&&"input"===f.tagName.toLowerCase()&&("submit"===e.type||"image"===e.type)){var a=e.form;if(null==a)throw Error('Cannot submit a <button> or <input type="submit"> without a <form>');d=r.method||e.getAttribute("formmethod")||a.getAttribute("method")||"get",m=r.action||e.getAttribute("formaction")||a.getAttribute("action")||t,g=r.encType||e.getAttribute("formenctype")||a.getAttribute("enctype")||v,y=new FormData(a),e.name&&y.append(e.name,e.value)}else if(p(e))throw Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');else if(d=r.method||"get",m=r.action||t,g=r.encType||v,u._(e,FormData))y=e;else if(y=new FormData,u._(e,URLSearchParams)){var o=!0,i=!1,s=void 0;try{for(var l,h,f,d,m,g,y,b,w=e[Symbol.iterator]();!(o=(b=w.next()).done);o=!0){var P=c._(b.value,2),S=P[0],_=P[1];y.append(S,_)}}catch(e){i=!0,s=e}finally{try{!o&&null!=w.return&&w.return()}finally{if(i)throw s}}}else if(null!=e){var R=!0,C=!1,E=void 0;try{for(var x,A=Object.keys(e)[Symbol.iterator]();!(R=(x=A.next()).done);R=!0){var j=x.value;y.append(j,e[j])}}catch(e){C=!0,E=e}finally{try{!R&&null!=A.return&&A.return()}finally{if(C)throw E}}}}var k=window.location,L=k.protocol,O=k.host;return{url:new URL(m,L+"//"+O),method:d.toLowerCase(),encType:g,formData:y}}(r,i,n),s=o.method,l=o.encType,f=o.formData,d=o.url,m=d.pathname+d.search,g={replace:n.replace,preventScrollReset:n.preventScrollReset,formData:f,formMethod:s,formEncType:l};e?(null!=t||(0,h.invariant)(!1),a.fetch(e,t,m,g)):a.navigate(m,g)},[i,a,e,t])}(b,w),E="get"===i.toLowerCase()?"get":"post",x=_(m,{relative:P});return s.createElement("form",f({ref:t,method:E,action:x,onSubmit:r?g:function(e){if(g&&g(e),!e.defaultPrevented){e.preventDefault();var t=e.nativeEvent.submitter,r=(null==t?void 0:t.getAttribute("formmethod"))||i;C(t||e.currentTarget,{method:r,replace:n,relative:P,preventScrollReset:S})}}},R))});(n=o||(o={})).UseScrollRestoration="useScrollRestoration",n.UseSubmitImpl="useSubmitImpl",n.UseFetcher="useFetcher",(a=i||(i={})).UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration";function _(e,t){var r=(void 0===t?{}:t).relative,n=s.useContext(l.UNSAFE_NavigationContext).basename,a=s.useContext(l.UNSAFE_RouteContext);a||(0,h.invariant)(!1);var o=c._(a.matches.slice(-1),1)[0],i=f({},(0,l.useResolvedPath)(e||".",{relative:r})),u=(0,l.useLocation)();if(null==e&&(i.search=u.search,i.hash=u.hash,o.route.index)){var d=new URLSearchParams(i.search);d.delete("index"),i.search=d.toString()?"?"+d.toString():""}return(!e||"."===e)&&o.route.index&&(i.search=i.search?i.search.replace(/^\?/,"?index&"):"?index"),"/"!==n&&(i.pathname="/"===i.pathname?n:(0,h.joinPaths)([n,i.pathname])),(0,l.createPath)(i)}},27731:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{createPath:function(){return p.createPath},matchRoutes:function(){return p.matchRoutes},Router:function(){return T},UNSAFE_DataRouterContext:function(){return C},UNSAFE_DataRouterStateContext:function(){return E},UNSAFE_NavigationContext:function(){return A},UNSAFE_RouteContext:function(){return k},useHref:function(){return O},useInRouterContext:function(){return U},useLocation:function(){return D},useNavigate:function(){return N},useResolvedPath:function(){return F}});var n,a,o,i,u,c,s=r("7136"),l=r("93473"),h=r("85109"),f=r("56148"),d=r("57962"),v=r("51704"),p=r("39794"),m=r.ir(r("93989")),g="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},y=m.useState,b=m.useEffect,w=m.useLayoutEffect,P=m.useDebugValue;function S(e){var t=e.getSnapshot,r=e.value;try{var n=t();return!g(r,n)}catch(e){return!0}}var _=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),R=_?function(e,t,r){var n=t(),a=d._(y({inst:{value:n,getSnapshot:t}}),2),o=a[0].inst,i=a[1];return w(function(){o.value=n,o.getSnapshot=t,S(o)&&i({inst:o})},[e,n,t]),b(function(){return S(o)&&i({inst:o}),e(function(){S(o)&&i({inst:o})})},[e]),P(n),n}:function(e,t,r){return t()};"useSyncExternalStore"in m&&m.useSyncExternalStore;var C=m.createContext(null),E=m.createContext(null),x=m.createContext(null),A=m.createContext(null),j=m.createContext(null),k=m.createContext({outlet:null,matches:[]}),L=m.createContext(null);function O(e,t){var r=(void 0===t?{}:t).relative;U()||(0,p.invariant)(!1);var n=m.useContext(A),a=n.basename,o=n.navigator,i=F(e,{relative:r}),u=i.hash,c=i.pathname,s=i.search,l=c;return"/"!==a&&(l="/"===c?a:(0,p.joinPaths)([a,c])),o.createHref({pathname:l,search:s,hash:u})}function U(){return null!=m.useContext(j)}function D(){return U()||(0,p.invariant)(!1),m.useContext(j).location}function N(){U()||(0,p.invariant)(!1);var e=m.useContext(A),t=e.basename,r=e.navigator,n=m.useContext(k).matches,a=D().pathname,o=JSON.stringify((0,p.UNSAFE_getPathContributingMatches)(n).map(function(e){return e.pathnameBase})),i=m.useRef(!1);return m.useEffect(function(){i.current=!0}),m.useCallback(function(e,n){if(void 0===n&&(n={}),i.current){if("number"==typeof e){r.go(e);return}var u=(0,p.resolveTo)(e,JSON.parse(o),a,"path"===n.relative);"/"!==t&&(u.pathname="/"===u.pathname?t:(0,p.joinPaths)([t,u.pathname])),(n.replace?r.replace:r.push)(u,n.state,n)}},[t,r,o,a])}function F(e,t){var r=(void 0===t?{}:t).relative,n=m.useContext(k).matches,a=D().pathname,o=JSON.stringify((0,p.UNSAFE_getPathContributingMatches)(n).map(function(e){return e.pathnameBase}));return m.useMemo(function(){return(0,p.resolveTo)(e,JSON.parse(o),a,"path"===r)},[e,o,a,r])}function T(e){var t=e.basename,r=e.children,n=e.location,a=e.navigationType,o=void 0===a?p.Action.Pop:a,i=e.navigator,u=e.static,c=void 0!==u&&u;U()&&(0,p.invariant)(!1);var s=(void 0===t?"/":t).replace(/^\/*/,"/"),l=m.useMemo(function(){return{basename:s,navigator:i,static:c}},[s,i,c]);"string"==typeof n&&(n=(0,p.parsePath)(n));var h=n.pathname,f=void 0===h?"/":h,d=n.search,v=void 0===d?"":d,g=n.hash,y=void 0===g?"":g,b=n.state,w=void 0===b?null:b,P=n.key,S=void 0===P?"default":P,_=m.useMemo(function(){var e=(0,p.stripBasename)(f,s);return null==e?null:{pathname:e,search:v,hash:y,state:w,key:S}},[s,f,v,y,w,S]);return null==_?null:m.createElement(A.Provider,{value:l},m.createElement(j.Provider,{children:void 0===r?null:r,value:{location:_,navigationType:o}}))}m.createContext(null),!function(e){h._(r,e);var t=v._(r);function r(e){var n;return s._(this,r),(n=t.call(this,e)).state={location:e.location,error:e.error},n}l._(r,[{key:"componentDidCatch",value:function(e,t){console.error("React Router caught the following error during render",e,t)}},{key:"render",value:function(){return this.state.error?m.createElement(k.Provider,{value:this.props.routeContext},m.createElement(L.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}},{key:"getDerivedStateFromProps",value:function(e,t){return t.location!==e.location?{error:e.error,location:e.location}:{error:e.error||t.error,location:t.location}}}])}(m.Component),(n=i||(i={})).UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",(a=u||(u={})).UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",(o=c||(c={}))[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error";var W=new Promise(function(){});!function(e){h._(r,e);var t=v._(r);function r(e){var n;return s._(this,r),(n=t.call(this,e)).state={error:null},n}l._(r,[{key:"componentDidCatch",value:function(e,t){console.error("<Await> caught the following error during render",e,t)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.errorElement,n=e.resolve,a=null,o=c.pending;if(f._(n,Promise)){if(this.state.error){o=c.error;var i=this.state.error;Object.defineProperty(a=Promise.reject().catch(function(){}),"_tracked",{get:function(){return!0}}),Object.defineProperty(a,"_error",{get:function(){return i}})}else n._tracked?o=void 0!==(a=n)._error?c.error:void 0!==a._data?c.success:c.pending:(o=c.pending,Object.defineProperty(n,"_tracked",{get:function(){return!0}}),a=n.then(function(e){return Object.defineProperty(n,"_data",{get:function(){return e}})},function(e){return Object.defineProperty(n,"_error",{get:function(){return e}})}))}else o=c.success,Object.defineProperty(a=Promise.resolve(),"_tracked",{get:function(){return!0}}),Object.defineProperty(a,"_data",{get:function(){return n}});if(o===c.error&&f._(a._error,p.AbortedDeferredError))throw W;if(o===c.error&&!r)throw a._error;if(o===c.error)return m.createElement(x.Provider,{value:a,children:r});if(o===c.success)return m.createElement(x.Provider,{value:a,children:t});throw a}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}])}(m.Component)}}]);