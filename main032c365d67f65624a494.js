/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://windowsXP/./src/pages/index.css?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ \"./src/pages/index.css\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar time = document.querySelector('.footer__options_date');\nvar volume = document.querySelector('.footer__options_volume');\nvar volumeInput = document.querySelector('.volume-wrapper');\nvar muteInput = document.querySelector('#muted');\nvar muteIcon = document.querySelector('.footer__options_volume');\nvar contextMenu = document.querySelector('.context_menu');\nfunction updateTime() {\n  var cur_time = new Date();\n  var cur_hour = cur_time.getHours().toString().padStart(2, '0');\n  var cur_minutes = cur_time.getMinutes().toString().padStart(2, '0');\n  time.innerText = \"\".concat(cur_hour, \":\").concat(cur_minutes);\n}\nupdateTime();\nsetInterval(updateTime, 60000);\ntime.addEventListener('click', function () {});\nvolume.addEventListener('click', function () {\n  volumeInput.classList.add('volume-wrapper-animated');\n  setTimeout(function () {\n    volumeInput.classList.add('volume-wrapper-active');\n  });\n  document.addEventListener('click', function quitHandler(evt) {\n    if (!evt.target.classList.contains('volume-wrapper') && evt.target !== muteIcon) {\n      volumeInput.classList.remove('volume-wrapper-active');\n      document.removeEventListener('click', quitHandler);\n    }\n  });\n});\nmuteInput.addEventListener('change', function () {\n  muteIcon.classList.toggle('footer__options_volume-muted');\n});\ndocument.addEventListener('contextmenu', function (evt) {\n  evt.preventDefault();\n  var _window = window,\n    innerHeight = _window.innerHeight,\n    innerWidth = _window.innerWidth;\n  var offsetHeight = contextMenu.offsetHeight,\n    offsetWidth = contextMenu.offsetWidth;\n  var x = offsetWidth + evt.offsetX + 20 > innerWidth ? evt.offsetX - offsetWidth : evt.offsetX;\n  var y = offsetHeight + evt.offsetY + 20 > innerHeight ? evt.offsetY - offsetHeight : evt.offsetY;\n  contextMenu.style.transform = \"translateX(\".concat(x, \"px) translateY(\").concat(y, \"px)\");\n  contextMenu.classList.add('context_menu-animated');\n  setTimeout(function () {\n    contextMenu.classList.add('context_menu-active');\n  });\n  document.addEventListener('click', function handlerQuit(evt) {\n    if (!evt.target.classList.contains('context_menu-item') && !evt.target.classList.contains('context_menu')) {\n      contextMenu.classList.remove('context_menu-active');\n      document.removeEventListener('click', handlerQuit);\n    }\n  });\n});\nvar DragAndDrop = /*#__PURE__*/function () {\n  function DragAndDrop() {\n    _classCallCheck(this, DragAndDrop);\n    _defineProperty(this, \"selectors\", {\n      icon: '[data-icon]'\n    });\n    _defineProperty(this, \"draggingClass\", 'isDragging');\n    _defineProperty(this, \"initialState\", {\n      offsetX: null,\n      offsetY: null,\n      isDragging: false,\n      currentIcon: null\n    });\n    this.state = _objectSpread({}, this.initialState);\n    this.bindEvents();\n  }\n  return _createClass(DragAndDrop, [{\n    key: \"mouseDownHandler\",\n    value: function mouseDownHandler(evt) {\n      var target = evt.target,\n        x = evt.x,\n        y = evt.y;\n      var iconElement = target.closest(this.selectors.icon);\n      if (!iconElement) return;\n      iconElement.classList.add(this.draggingClass);\n      var _target$getBoundingCl = target.getBoundingClientRect(),\n        left = _target$getBoundingCl.left,\n        top = _target$getBoundingCl.top;\n      this.state = {\n        offsetX: x - left,\n        offsetY: y - top,\n        isDragging: true,\n        currentIcon: iconElement\n      };\n    }\n  }, {\n    key: \"mouseMoveHandler\",\n    value: function mouseMoveHandler(evt) {\n      if (!this.state.isDragging) {\n        return;\n      }\n      var x = evt.pageX - this.state.offsetX;\n      var y = evt.pageY - this.state.offsetY;\n      this.state.currentIcon.style.left = \"\".concat(x, \"px\");\n      this.state.currentIcon.style.top = \"\".concat(y, \"px\");\n    }\n  }, {\n    key: \"mouseUpHandler\",\n    value: function mouseUpHandler() {\n      if (!this.state.isDragging) {\n        return;\n      }\n      this.state.currentIcon.classList.remove(this.draggingClass);\n      this.state = _objectSpread({}, this.initialState);\n    }\n  }, {\n    key: \"bindEvents\",\n    value: function bindEvents() {\n      var _this = this;\n      document.addEventListener('pointerdown', function (evt) {\n        return _this.mouseDownHandler(evt);\n      });\n      document.addEventListener('pointermove', function (evt) {\n        return _this.mouseMoveHandler(evt);\n      });\n      document.addEventListener('pointerup', function () {\n        return _this.mouseUpHandler();\n      });\n    }\n  }]);\n}();\nnew DragAndDrop();\n\n//# sourceURL=webpack://windowsXP/./src/scripts/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;