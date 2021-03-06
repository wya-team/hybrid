(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "../../docs/assists/error.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n异常信息捕获\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 直接返回异常信息\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\nwya.onError((msg) => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.on('_error_', (msg) => {\n\n})\n// 或者\nwindow.addEventListener('_error_', () => {\n\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_error_', '@String')\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n";

/***/ }),

/***/ "../../docs/assists/log.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\nNative日志信息捕获\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 直接返回信息\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\nwya.onLog((msg) => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nWYAJSBridge.on('_log_', (msg) => {\n\n})\n// 或者\nwindow.addEventListener('_log_', () => {\n\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_log_', '@String')\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n";

/***/ }),

/***/ "../../docs/assists/ready.md":
/***/ (function(module, exports) {

module.exports = "#### 1. 说明\n\n初始化后执行\n\n#### 2. Client传递参数给Native\n\n```javascript\n// 不需要传递\n```\n#### 3. Native 传递参数给 Client\n\n```javascript\n// 返回常量\n```\n\n#### 4. Client端示例代码\n\n```javascript\nimport wya from '@wya/js-sdk';\n\nwya.ready(() => {\n\n});\n```\n\n#### 5. 不引入sdk示例代码\n\n```javascript\nwindow.addEventListener('_ready_', (e) => {\n\t// 这个只被允许执行一次\n})\n```\n\n#### 6. Native端示例代码\n\n```javascript\nWYAJSBridge.emit('_ready_', '@Object');\n```\n\n#### 7. 可用性\n\niOS系统，Android系统\n\n---------\n\n";

/***/ }),

/***/ "./src/pages/components/assists/detail/modules/root.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/assists/ready.md
var ready = __webpack_require__("../../docs/assists/ready.md");
var ready_default = /*#__PURE__*/__webpack_require__.n(ready);

// CONCATENATED MODULE: ./src/pages/components/assists/detail/modules/ready.js

/* harmony default export */ var modules_ready = ({
  to: '/assists/ready',
  title: 'ready',
  label: '初始化后执行',
  markdown: ready_default.a
});
// EXTERNAL MODULE: ../sdk/dist/wya.umd.js
var wya_umd = __webpack_require__("../sdk/dist/wya.umd.js");
var wya_umd_default = /*#__PURE__*/__webpack_require__.n(wya_umd);

// EXTERNAL MODULE: ./src/pages/components/_common/toast/toast.js + 5 modules
var toast = __webpack_require__("./src/pages/components/_common/toast/toast.js");

// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/assists/error.md
var error = __webpack_require__("../../docs/assists/error.md");
var error_default = /*#__PURE__*/__webpack_require__.n(error);

// CONCATENATED MODULE: ./src/pages/components/assists/detail/modules/error.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }





var error_invoke = function invoke() {
  wya_umd_default.a.once('error', function (res) {
    res = _typeof(res) === 'object' ? JSON.stringify(res) : res || '无数据';
    toast["a" /* default */].info(res, 0);
  }); // 强制执行

  wya_umd_default.a.invoke('debugger', {
    event: 'error'
  }).then(function (res) {
    toast["a" /* default */].info('执行成功', 0);
  }).catch(function () {
    var res = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    toast["a" /* default */].info("\u6267\u884C\u5931\u8D25\uFF1A".concat(res.msg), 0);
  });
};

/* harmony default export */ var modules_error = ({
  to: '/assists/error',
  title: 'onError',
  label: '异常捕获',
  invoke: error_invoke,
  markdown: error_default.a
});
// EXTERNAL MODULE: /Users/deot/Desktop/wya/github/hybrid-sdk/docs/assists/log.md
var log = __webpack_require__("../../docs/assists/log.md");
var log_default = /*#__PURE__*/__webpack_require__.n(log);

// CONCATENATED MODULE: ./src/pages/components/assists/detail/modules/log.js




var log_invoke = function invoke() {// ...
};

/* harmony default export */ var modules_log = ({
  to: '/assists/log',
  title: 'log',
  label: 'Native日志捕获',
  invoke: log_invoke,
  markdown: log_default.a
});
// CONCATENATED MODULE: ./src/pages/components/assists/detail/modules/root.js
/* concated harmony reexport ready */__webpack_require__.d(__webpack_exports__, "ready", function() { return modules_ready; });
/* concated harmony reexport error */__webpack_require__.d(__webpack_exports__, "error", function() { return modules_error; });
/* concated harmony reexport log */__webpack_require__.d(__webpack_exports__, "log", function() { return modules_log; });







/***/ }),

/***/ "./src/pages/containers/assists/modules/assists-detail.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/containers/assists/modules/assists-detail.vue?vue&type=template&id=0b28c6f4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('set-title',{attrs:{"title":_vm.id}},[_c('contents',{attrs:{"id":_vm.id}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/containers/assists/modules/assists-detail.vue?vue&type=template&id=0b28c6f4&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/components/assists/detail/contents.vue?vue&type=template&id=3fe1dedd&scoped=true&
var contentsvue_type_template_id_3fe1dedd_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"md",rawName:"v-md"}],staticClass:"g-md-reset g-pd-lr-10 g-bg-white g-pd-tb-10",domProps:{"innerHTML":_vm._s(_vm.markdown)}})}
var contentsvue_type_template_id_3fe1dedd_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/components/assists/detail/contents.vue?vue&type=template&id=3fe1dedd&scoped=true&

// EXTERNAL MODULE: ../sdk/dist/wya.umd.js
var wya_umd = __webpack_require__("../sdk/dist/wya.umd.js");

// EXTERNAL MODULE: ./src/pages/extends/directives/hljs.js
var hljs = __webpack_require__("./src/pages/extends/directives/hljs.js");

// EXTERNAL MODULE: ./src/pages/extends/directives/md.js
var md = __webpack_require__("./src/pages/extends/directives/md.js");

// EXTERNAL MODULE: ./src/pages/components/assists/detail/modules/root.js + 3 modules
var root = __webpack_require__("./src/pages/components/assists/detail/modules/root.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/components/assists/detail/contents.vue?vue&type=script&lang=js&
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//




/* harmony default export */ var contentsvue_type_script_lang_js_ = ({
  name: 'consts-contents',
  directives: {
    hljs: hljs["a" /* hljs */],
    md: md["a" /* md */]
  },
  props: {
    id: String
  },
  data: function data() {
    return _objectSpread({}, root[this.id]);
  },
  computed: {},
  created: function created() {},
  mounted: function mounted() {},
  methods: {
    handleClick: function handleClick() {}
  }
});
// CONCATENATED MODULE: ./src/pages/components/assists/detail/contents.vue?vue&type=script&lang=js&
 /* harmony default export */ var detail_contentsvue_type_script_lang_js_ = (contentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

// CONCATENATED MODULE: ./src/pages/components/assists/detail/contents.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  detail_contentsvue_type_script_lang_js_,
  contentsvue_type_template_id_3fe1dedd_scoped_true_render,
  contentsvue_type_template_id_3fe1dedd_scoped_true_staticRenderFns,
  false,
  null,
  "3fe1dedd",
  null
  
)

component.options.__file = "contents.vue"
/* harmony default export */ var contents = (component.exports);
// EXTERNAL MODULE: ./src/pages/extends/filters/capitalize.js
var capitalize = __webpack_require__("./src/pages/extends/filters/capitalize.js");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/containers/assists/modules/assists-detail.vue?vue&type=script&lang=js&
//
//
//
//
//
//


/* harmony default export */ var assists_detailvue_type_script_lang_js_ = ({
  name: 'assists-detail',
  components: {
    Contents: contents
  },
  filters: {
    capitalize: capitalize["a" /* capitalize */]
  },
  data: function data() {
    var id = this.$route.params.id;
    return {
      id: id
    };
  },
  created: function created() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/pages/containers/assists/modules/assists-detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var modules_assists_detailvue_type_script_lang_js_ = (assists_detailvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/pages/containers/assists/modules/assists-detail.vue





/* normalize component */

var assists_detail_component = Object(componentNormalizer["a" /* default */])(
  modules_assists_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "0b28c6f4",
  null
  
)

assists_detail_component.options.__file = "assists-detail.vue"
/* harmony default export */ var assists_detail = __webpack_exports__["default"] = (assists_detail_component.exports);

/***/ }),

/***/ "./src/pages/extends/directives/hljs.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hljs; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/extends/directives/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var hljs =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(el) {
    var opts,
        vm,
        html,
        _ref2,
        _,
        _ref3,
        js,
        blocks,
        _opts$value,
        value,
        pre,
        betterScroller,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            vm = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            _context.prev = 2;
            html = vm.data.domProps.innerHTML;
            el.style.display = 'none';
            _context.next = 7;
            return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.t.bind(null, "./node_modules/highlight.js/lib/index.js", 7));

          case 7:
            _ref2 = _context.sent;
            _ = _ref2.default;
            _context.next = 11;
            return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, "./node_modules/js-beautify/js/lib/beautify.js", 7));

          case 11:
            _ref3 = _context.sent;
            js = _ref3.default;
            blocks = el.querySelectorAll('pre code'); // 直接传递代码 

            if (blocks.length === 0) {
              _opts$value = opts.value, value = _opts$value === void 0 ? 'js' : _opts$value;

              if (value === 'js' || value === 'json') {
                // 格式化代码
                html = js.js_beautify(html, {
                  indent_size: 4
                });
              }

              pre = document.createElement('pre');
              pre.innerHTML = "<code class=\"".concat(value, "\">").concat(html, "</code>"); // 初始化；

              el.innerHTML = '';
              el.appendChild(pre);
              blocks = el.querySelectorAll('pre code');
            }

            el.style.display = 'block'; // [...blocks] NodeList转数组，低版本没有forEach方法

            _toConsumableArray(blocks).forEach(function (block) {
              _.highlightBlock(block);
            });

            betterScroller = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* findBSInstance */ "a"])(vm.context);
            betterScroller && betterScroller.refresh();
            _context.next = 24;
            break;

          case 21:
            _context.prev = 21;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

          case 24:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 21]]);
  }));

  return function hljs(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/pages/extends/directives/md.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/pages/extends/directives/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var md =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(el) {
    var opts,
        vm,
        html,
        _ref2,
        marked,
        _ref3,
        hljs,
        _ref4,
        js,
        newHtml,
        blocks,
        betterScroller,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            vm = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            _context.prev = 2;
            html = vm.data.domProps.innerHTML;
            el.innerHTML = '';
            _context.next = 7;
            return __webpack_require__.e(/* import() */ 16).then(__webpack_require__.t.bind(null, "./node_modules/marked/lib/marked.js", 7));

          case 7:
            _ref2 = _context.sent;
            marked = _ref2.default;
            _context.next = 11;
            return __webpack_require__.e(/* import() */ 2).then(__webpack_require__.t.bind(null, "./node_modules/highlight.js/lib/index.js", 7));

          case 11:
            _ref3 = _context.sent;
            hljs = _ref3.default;
            _context.next = 15;
            return __webpack_require__.e(/* import() */ 4).then(__webpack_require__.t.bind(null, "./node_modules/js-beautify/js/lib/beautify.js", 7));

          case 15:
            _ref4 = _context.sent;
            js = _ref4.default;
            newHtml = marked(html, {
              // renderer: new marked.Renderer(),
              gfm: true,
              tables: true,
              breaks: false,
              sanitize: false,
              smartLists: true,
              smartypants: false,
              pedantic: false,
              highlight: function highlight(code, lang, callback) {
                if (['javascript', 'js', 'json'].includes(lang)) {
                  code = js.js_beautify(code);
                }

                return hljs.highlight(lang || 'js', code).value;
              }
            });
            el.innerHTML = newHtml; // 高亮

            blocks = el.querySelectorAll('pre code');
            blocks.forEach(function (block) {
              hljs.highlightBlock(block);
            });
            betterScroller = Object(_utils__WEBPACK_IMPORTED_MODULE_0__[/* findBSInstance */ "a"])(vm.context);
            betterScroller && betterScroller.refresh();
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

          case 28:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 25]]);
  }));

  return function md(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/pages/extends/directives/utils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findBSInstance; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var findBSInstance = function findBSInstance(context) {
  if (_typeof(context) !== 'object') {
    return null;
  }

  var instance = context.betterScroller;

  if (instance !== undefined) {
    return instance;
  }

  return findBSInstance(context.$parent);
};

/***/ }),

/***/ "./src/pages/extends/filters/capitalize.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return capitalize; });
var capitalize = function capitalize(value) {
  var content = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  if (!value) return '';
  value = value.toString();
  return content + value.charAt(0).toUpperCase() + value.slice(1);
};

/***/ })

}]);