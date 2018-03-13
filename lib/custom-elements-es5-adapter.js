/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bower_components/webcomponentsjs/custom-elements-es5-adapter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bower_components/webcomponentsjs/custom-elements-es5-adapter.js":
/*!*************************************************************************!*\
  !*** ./bower_components/webcomponentsjs/custom-elements-es5-adapter.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n(function () {\n  'use strict';\n\n  (function () {\n    'use strict';\n    if (!window.customElements) return;var a = window.HTMLElement,\n        b = window.customElements.define,\n        c = window.customElements.get,\n        d = new Map(),\n        e = new Map();var f = !1,\n        g = !1;window.HTMLElement = function () {\n      if (!f) {\n        var _a = d.get(this.constructor),\n            _b = c.call(window.customElements, _a);g = !0;var _e = new _b();return _e;\n      }f = !1;\n    }, window.HTMLElement.prototype = a.prototype;Object.defineProperty(window, 'customElements', { value: window.customElements, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'define', { value: function value(c, h) {\n        var i = h.prototype,\n            j = function (_a2) {\n          _inherits(j, _a2);\n\n          function j() {\n            var _this;\n\n            _classCallCheck(this, j);\n\n            (_this = _possibleConstructorReturn(this, (j.__proto__ || Object.getPrototypeOf(j)).call(this)), _this), Object.setPrototypeOf(_this, i), g || (f = !0, h.call(_this)), g = !1;return _this;\n          }\n\n          return j;\n        }(a),\n            k = j.prototype;j.observedAttributes = h.observedAttributes, k.connectedCallback = i.connectedCallback, k.disconnectedCallback = i.disconnectedCallback, k.attributeChangedCallback = i.attributeChangedCallback, k.adoptedCallback = i.adoptedCallback, d.set(h, c), e.set(c, h), b.call(window.customElements, c, j);\n      }, configurable: !0, writable: !0 }), Object.defineProperty(window.customElements, 'get', { value: function value(a) {\n        return e.get(a);\n      }, configurable: !0, writable: !0 });\n  })();\n\n  /**\n  @license\n  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.\n  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\n  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\n  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\n  Code distributed by Google as part of the polymer project is also\n  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n  */\n})();\n\n//# sourceURL=webpack:///./bower_components/webcomponentsjs/custom-elements-es5-adapter.js?");

/***/ })

/******/ });