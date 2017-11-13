exports.id = 0;
exports.modules = {

/***/ "./src/modules/Controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getDogs; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(\"babel-runtime/regenerator\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(\"babel-runtime/helpers/asyncToGenerator\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apisauce__ = __webpack_require__(\"apisauce\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apisauce__);\n\n\n\nvar _this = this;\n\n\n\nvar getDogs = function () {\n  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {\n    var api;\n    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // define the api\n            api = Object(__WEBPACK_IMPORTED_MODULE_2_apisauce__[\"create\"])({\n              baseURL: 'http://localhost:3002'\n            });\n\n            // start making calls\n\n            api.get('/get_dogs').then(function (response) {\n              return console.log(response);\n            });\n\n          case 2:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, _this);\n  }));\n\n  return function getDogs() {\n    return _ref.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Db250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29udHJvbGxlci5qcz84YmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3InO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcblxudmFyIF90aGlzID0gdGhpcztcblxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnYXBpc2F1Y2UnO1xuXG5leHBvcnQgdmFyIGdldERvZ3MgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICB2YXIgYXBpO1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZSQoX2NvbnRleHQpIHtcbiAgICAgIHdoaWxlICgxKSB7XG4gICAgICAgIHN3aXRjaCAoX2NvbnRleHQucHJldiA9IF9jb250ZXh0Lm5leHQpIHtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAvLyBkZWZpbmUgdGhlIGFwaVxuICAgICAgICAgICAgYXBpID0gY3JlYXRlKHtcbiAgICAgICAgICAgICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMidcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBzdGFydCBtYWtpbmcgY2FsbHNcblxuICAgICAgICAgICAgYXBpLmdldCgnL2dldF9kb2dzJykudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICByZXR1cm4gX2NvbnRleHQuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZSwgX3RoaXMpO1xuICB9KSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIGdldERvZ3MoKSB7XG4gICAgcmV0dXJuIF9yZWYuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21vZHVsZXMvQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/Controller.js\n");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ })

};