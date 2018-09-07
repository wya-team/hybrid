(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"../../docs/assists/error.md":function(e,s){e.exports="#### 1. 说明\n\n异常信息捕获\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 直接返回异常信息\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.onError((msg) => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.on('_error_', (msg) => {\n\n})\n// 或者\nwindow.addEventListener('_error_', () => {\n\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_error_', '@String')\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n"},"../../docs/assists/ready.md":function(e,s){e.exports="#### 1. 说明\n\n初始化后执行\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 返回常量\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from 'wya-js-sdk';\n\nwya.ready(() => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nwindow.addEventListener('_ready_', (e) => {\n\t// 这个只被允许执行一次\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_ready_', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n"},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=script&lang=js&":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{to:[String,Object],icon:String,title:String,label:String},computed:{},methods:{handleClick:function(e){this.$router.push(this.to)}}}},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/links.vue?vue&type=script&lang=js&":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o("./src/pages/components/_common/cell/cell.vue")),t=function(e){if(e&&e.__esModule)return e;var s={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(s[o]=e[o]);return s.default=e,s}(o("./src/pages/components/assists/detail/modules/root.js"));s.default={name:"assists",components:{Cell:n.default},data:function(){return{routes:t}},created:function(){},methods:{}}},"./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists.vue?vue&type=script&lang=js&":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o("./src/pages/components/assists/links.vue"));s.default={name:"assists",components:{Links:n.default},data:function(){return{}},created:function(){},methods:{}}},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=2ff3c2f6&lang=scss&scoped=true&":function(e,s,o){(e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,'.c-cell[data-v-2ff3c2f6]{background-color:#fff;box-sizing:border-box;color:inherit;min-height:48px;display:block;overflow:hidden;position:relative;text-decoration:none}.c-cell .__wrapper[data-v-2ff3c2f6]{background-image:linear-gradient(180deg,#d9d9d9,#d9d9d9 50%,transparent 0);background-size:120% 1px;background-repeat:no-repeat;background-position:0 100%;background-origin:content-box;align-items:center;box-sizing:border-box;display:flex;font-size:16px;line-height:1;min-height:inherit;overflow:hidden;padding:0 10px;width:100%}.c-cell .__title[data-v-2ff3c2f6]{padding-left:10px}.c-cell .__icon[data-v-2ff3c2f6]{font-size:22px;color:#26a2ff;display:inline-block;width:30px;vertical-align:middle}.c-cell .__label[data-v-2ff3c2f6]{flex:1 1 0%;text-align:right;padding-right:32px;color:#8e8e93}.c-cell .__arrow-right[data-v-2ff3c2f6]{border:2px solid #c7c7cb;border-bottom-width:0;border-left-width:0;content:" ";top:50%;right:20px;position:absolute;width:10px;height:10px;-webkit-transform:translateY(-50%) rotate(45deg);transform:translateY(-50%) rotate(45deg)}',""])},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/links.vue?vue&type=style&index=0&id=7e4a028f&lang=scss&scoped=true&":function(e,s,o){(e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"",""])},"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists.vue?vue&type=style&index=0&id=3d3f4ee6&lang=scss&scoped=true&":function(e,s,o){(e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"",""])},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=2ff3c2f6&lang=scss&scoped=true&":function(e,s,o){var n=o("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=2ff3c2f6&lang=scss&scoped=true&");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,o("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("5eb19700",n,!0,{})},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/links.vue?vue&type=style&index=0&id=7e4a028f&lang=scss&scoped=true&":function(e,s,o){var n=o("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/links.vue?vue&type=style&index=0&id=7e4a028f&lang=scss&scoped=true&");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,o("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("c62a7e7a",n,!0,{})},"./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists.vue?vue&type=style&index=0&id=3d3f4ee6&lang=scss&scoped=true&":function(e,s,o){var n=o("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists.vue?vue&type=style&index=0&id=3d3f4ee6&lang=scss&scoped=true&");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,o("./node_modules/vue-style-loader/lib/addStylesClient.js").default)("40543eca",n,!0,{})},"./src/pages/components/_common/cell/cell.vue":function(e,s,o){"use strict";o.r(s);var n=o("./src/pages/components/_common/cell/cell.vue?vue&type=template&id=2ff3c2f6&scoped=true&"),t=o("./src/pages/components/_common/cell/cell.vue?vue&type=script&lang=js&");for(var l in t)"default"!==l&&function(e){o.d(s,e,function(){return t[e]})}(l);o("./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=2ff3c2f6&lang=scss&scoped=true&");var d=o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=Object(d.a)(t.default,n.a,n.b,!1,null,"2ff3c2f6",null);a.options.__file="cell.vue",s.default=a.exports},"./src/pages/components/_common/cell/cell.vue?vue&type=script&lang=js&":function(e,s,o){"use strict";o.r(s);var n=o("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=script&lang=js&"),t=o.n(n);for(var l in n)"default"!==l&&function(e){o.d(s,e,function(){return n[e]})}(l);s.default=t.a},"./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=2ff3c2f6&lang=scss&scoped=true&":function(e,s,o){"use strict";var n=o("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/_common/cell/cell.vue?vue&type=style&index=0&id=2ff3c2f6&lang=scss&scoped=true&");o.n(n).a},"./src/pages/components/_common/cell/cell.vue?vue&type=template&id=2ff3c2f6&scoped=true&":function(e,s,o){"use strict";var n=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"c-cell",on:{click:e.handleClick}},[o("div",{staticClass:"__wrapper"},[o("div",[o("span",{staticClass:"__title"},[e._v(e._s(e.title))])]),e._v(" "),o("label",{staticClass:"__label"},[e._v(e._s(e.label))]),e._v(" "),o("i",{staticClass:"__arrow-right"})])])},t=[];o.d(s,"a",function(){return n}),o.d(s,"b",function(){return t})},"./src/pages/components/assists/detail/modules/error.js":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t=a(o("../sdk/src/web.js")),l=a(o("./src/pages/components/_common/toasts/toasts.js")),d=a(o("../../docs/assists/error.md"));function a(e){return e&&e.__esModule?e:{default:e}}s.default={to:"/assists/error",title:"onError",label:"异常捕获",invoke:function(){t.default.once("error",function(e){e="object"===(void 0===e?"undefined":n(e))?JSON.stringify(e):e||"无数据",l.default.info(e,0)}),t.default.invoke("debugger",{event:"error"}).then(function(e){l.default.info("执行成功",0)}).catch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.default.info("执行失败："+e.msg,0)})},markdown:d.default}},"./src/pages/components/assists/detail/modules/ready.js":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(o("../../docs/assists/ready.md"));s.default={to:"/assists/ready",title:"ready",label:"初始化后执行",markdown:n.default}},"./src/pages/components/assists/detail/modules/root.js":function(e,s,o){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.error=s.ready=void 0;var n=l(o("./src/pages/components/assists/detail/modules/ready.js")),t=l(o("./src/pages/components/assists/detail/modules/error.js"));function l(e){return e&&e.__esModule?e:{default:e}}s.ready=n.default,s.error=t.default},"./src/pages/components/assists/links.vue":function(e,s,o){"use strict";o.r(s);var n=o("./src/pages/components/assists/links.vue?vue&type=template&id=7e4a028f&scoped=true&"),t=o("./src/pages/components/assists/links.vue?vue&type=script&lang=js&");for(var l in t)"default"!==l&&function(e){o.d(s,e,function(){return t[e]})}(l);o("./src/pages/components/assists/links.vue?vue&type=style&index=0&id=7e4a028f&lang=scss&scoped=true&");var d=o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=Object(d.a)(t.default,n.a,n.b,!1,null,"7e4a028f",null);a.options.__file="links.vue",s.default=a.exports},"./src/pages/components/assists/links.vue?vue&type=script&lang=js&":function(e,s,o){"use strict";o.r(s);var n=o("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/links.vue?vue&type=script&lang=js&"),t=o.n(n);for(var l in n)"default"!==l&&function(e){o.d(s,e,function(){return n[e]})}(l);s.default=t.a},"./src/pages/components/assists/links.vue?vue&type=style&index=0&id=7e4a028f&lang=scss&scoped=true&":function(e,s,o){"use strict";var n=o("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/components/assists/links.vue?vue&type=style&index=0&id=7e4a028f&lang=scss&scoped=true&");o.n(n).a},"./src/pages/components/assists/links.vue?vue&type=template&id=7e4a028f&scoped=true&":function(e,s,o){"use strict";var n=function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("div",{staticClass:"g-m-t-10"},e._l(e.routes,function(s,n){return o("cell",e._b({key:n},"cell",s,!1))}))},t=[];o.d(s,"a",function(){return n}),o.d(s,"b",function(){return t})},"./src/pages/containers/assists/modules/assists.vue":function(e,s,o){"use strict";o.r(s);var n=o("./src/pages/containers/assists/modules/assists.vue?vue&type=template&id=3d3f4ee6&scoped=true&"),t=o("./src/pages/containers/assists/modules/assists.vue?vue&type=script&lang=js&");for(var l in t)"default"!==l&&function(e){o.d(s,e,function(){return t[e]})}(l);o("./src/pages/containers/assists/modules/assists.vue?vue&type=style&index=0&id=3d3f4ee6&lang=scss&scoped=true&");var d=o("./node_modules/vue-loader/lib/runtime/componentNormalizer.js"),a=Object(d.a)(t.default,n.a,n.b,!1,null,"3d3f4ee6",null);a.options.__file="assists.vue",s.default=a.exports},"./src/pages/containers/assists/modules/assists.vue?vue&type=script&lang=js&":function(e,s,o){"use strict";o.r(s);var n=o("./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists.vue?vue&type=script&lang=js&"),t=o.n(n);for(var l in n)"default"!==l&&function(e){o.d(s,e,function(){return n[e]})}(l);s.default=t.a},"./src/pages/containers/assists/modules/assists.vue?vue&type=style&index=0&id=3d3f4ee6&lang=scss&scoped=true&":function(e,s,o){"use strict";var n=o("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib/index.js?!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/index.js?!./src/pages/containers/assists/modules/assists.vue?vue&type=style&index=0&id=3d3f4ee6&lang=scss&scoped=true&");o.n(n).a},"./src/pages/containers/assists/modules/assists.vue?vue&type=template&id=3d3f4ee6&scoped=true&":function(e,s,o){"use strict";var n=function(){var e=this.$createElement,s=this._self._c||e;return s("set-title",{attrs:{title:"Assists 辅助"}},[s("links")],1)},t=[];o.d(s,"a",function(){return n}),o.d(s,"b",function(){return t})}}]);