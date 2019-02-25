(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"../../docs/assists/error.md":function(n,e){n.exports="#### 1. 说明\n\n异常信息捕获\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 直接返回异常信息\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.onError((msg) => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.on('_error_', (msg) => {\n\n})\n// 或者\nwindow.addEventListener('_error_', () => {\n\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_error_', '@String')\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n"},"../../docs/assists/ready.md":function(n,e){n.exports="#### 1. 说明\n\n初始化后执行\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 返回常量\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.ready(() => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nwindow.addEventListener('_ready_', (e) => {\n\t// 这个只被允许执行一次\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_ready_', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"./src/pages/components/assists/detail/modules/root.js":function(n,e,t){"use strict";t.r(e);var r=t("../../docs/assists/ready.md"),s={to:"/assists/ready",title:"ready",label:"初始化后执行",markdown:t.n(r).a},i=t("../sdk/dist/wya.umd.js"),o=t.n(i),a=t("./src/pages/components/_common/toasts/toasts.js"),c=t("../../docs/assists/error.md");function u(n){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var d={to:"/assists/error",title:"onError",label:"异常捕获",invoke:function(){o.a.once("error",function(n){n="object"===u(n)?JSON.stringify(n):n||"无数据",a.a.info(n,0)}),o.a.invoke("debugger",{event:"error"}).then(function(n){a.a.info("执行成功",0)}).catch(function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a.a.info("执行失败：".concat(n.msg),0)})},markdown:t.n(c).a};t.d(e,"ready",function(){return s}),t.d(e,"error",function(){return d})},"./src/pages/containers/assists/modules/assists-detail.vue":function(n,e,t){"use strict";t.r(e);t("../sdk/dist/wya.umd.js");var r=t("./src/pages/extends/directives/hljs.js"),s=t("./src/pages/extends/directives/md.js"),i=t("./src/pages/components/assists/detail/modules/root.js");function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var a={name:"consts-contents",directives:{hljs:r.a,md:s.a},props:{id:String},data:function(){return function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.forEach(function(e){o(n,e,t[e])})}return n}({},i[this.id])},computed:{},created:function(){},mounted:function(){},methods:{handleClick:function(){}}},c=t("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),u=Object(c.a)(a,function(){var n=this.$createElement;return(this._self._c||n)("div",{directives:[{name:"md",rawName:"v-md"}],staticClass:"g-md-reset g-pd-lr-10 g-bg-white g-pd-tb-10",domProps:{innerHTML:this._s(this.markdown)}})},[],!1,null,"ee2fb122",null);u.options.__file="contents.vue";var d={name:"assists-detail",components:{Contents:u.exports},filters:{capitalize:t("./src/pages/extends/filters/capitalize.js").a},data:function(){return{id:this.$route.params.id}},created:function(){},methods:{}},l=Object(c.a)(d,function(){var n=this.$createElement,e=this._self._c||n;return e("set-title",{attrs:{title:this.id}},[e("contents",{attrs:{id:this.id}})],1)},[],!1,null,"0b28c6f4",null);l.options.__file="assists-detail.vue";e.default=l.exports},"./src/pages/extends/directives/hljs.js":function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t("./src/pages/extends/directives/utils.js");function s(n,e,t,r,s,i,o){try{var a=n[i](o),c=a.value}catch(n){return void t(n)}a.done?e(c):Promise.resolve(c).then(r,s)}var i=function(){var n,e=(n=regeneratorRuntime.mark(function n(e){var s,i,o,a,c,u,d,l,f,p,m,v,h=arguments;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return s=h.length>1&&void 0!==h[1]?h[1]:{},i=h.length>2&&void 0!==h[2]?h[2]:{},n.prev=2,o=i.data.domProps.innerHTML,e.style.display="none",n.next=7,t.e(2).then(t.t.bind(null,"./node_modules/highlight.js/lib/index.js",7));case 7:return a=n.sent,c=a.default,n.next=11,t.e(4).then(t.t.bind(null,"./node_modules/js-beautify/js/lib/beautify.js",7));case 11:u=n.sent,d=u.default,0===(l=e.querySelectorAll("pre code")).length&&(f=s.value,"js"!==(p=void 0===f?"js":f)&&"json"!==p||(o=d.js_beautify(o,{indent_size:4})),(m=document.createElement("pre")).innerHTML='<code class="'.concat(p,'">').concat(o,"</code>"),e.innerHTML="",e.appendChild(m),l=e.querySelectorAll("pre code")),e.style.display="block",l.forEach(function(n){c.highlightBlock(n)}),(v=Object(r.a)(i.context))&&v.refresh(),n.next=24;break;case 21:n.prev=21,n.t0=n.catch(2),console.log(n.t0);case 24:case"end":return n.stop()}},n,this,[[2,21]])}),function(){var e=this,t=arguments;return new Promise(function(r,i){var o=n.apply(e,t);function a(n){s(o,r,i,a,c,"next",n)}function c(n){s(o,r,i,a,c,"throw",n)}a(void 0)})});return function(n){return e.apply(this,arguments)}}()},"./src/pages/extends/directives/md.js":function(n,e,t){"use strict";t.d(e,"a",function(){return i});var r=t("./src/pages/extends/directives/utils.js");function s(n,e,t,r,s,i,o){try{var a=n[i](o),c=a.value}catch(n){return void t(n)}a.done?e(c):Promise.resolve(c).then(r,s)}var i=function(){var n,e=(n=regeneratorRuntime.mark(function n(e){var s,i,o,a,c,u,d,l,f,p,m=arguments;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return m.length>1&&void 0!==m[1]?m[1]:{},s=m.length>2&&void 0!==m[2]?m[2]:{},n.prev=2,i=s.data.domProps.innerHTML,e.innerHTML="",n.next=7,t.e(16).then(t.t.bind(null,"./node_modules/marked/lib/marked.js",7));case 7:return o=n.sent,a=o.default,n.next=11,t.e(2).then(t.t.bind(null,"./node_modules/highlight.js/lib/index.js",7));case 11:return c=n.sent,u=c.default,n.next=15,t.e(4).then(t.t.bind(null,"./node_modules/js-beautify/js/lib/beautify.js",7));case 15:d=n.sent,l=d.default,f=a(i,{gfm:!0,tables:!0,breaks:!1,sanitize:!1,smartLists:!0,smartypants:!1,pedantic:!1,highlight:function(n,e,t){return["javascript","js","json"].includes(e)&&(n=l.js_beautify(n)),u.highlight(e||"js",n).value}}),e.innerHTML=f,e.querySelectorAll("pre code").forEach(function(n){u.highlightBlock(n)}),(p=Object(r.a)(s.context))&&p.refresh(),n.next=28;break;case 25:n.prev=25,n.t0=n.catch(2),console.log(n.t0);case 28:case"end":return n.stop()}},n,this,[[2,25]])}),function(){var e=this,t=arguments;return new Promise(function(r,i){var o=n.apply(e,t);function a(n){s(o,r,i,a,c,"next",n)}function c(n){s(o,r,i,a,c,"throw",n)}a(void 0)})});return function(n){return e.apply(this,arguments)}}()},"./src/pages/extends/directives/utils.js":function(n,e,t){"use strict";function r(n){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}t.d(e,"a",function(){return s});var s=function n(e){if("object"!==r(e))return null;var t=e.betterScroller;return void 0!==t?t:n(e.$parent)}},"./src/pages/extends/filters/capitalize.js":function(n,e,t){"use strict";t.d(e,"a",function(){return r});var r=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n?e+(n=n.toString()).charAt(0).toUpperCase()+n.slice(1):""}}}]);