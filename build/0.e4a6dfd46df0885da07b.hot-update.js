exports.id = 0;
exports.modules = {

/***/ "./src/modules/Controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getDogs; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(\"babel-runtime/core-js/promise\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apisauce__ = __webpack_require__(\"apisauce\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apisauce__);\n\n\n\nvar getDogs = function getDogs() {\n  // define the api\n  var api = Object(__WEBPACK_IMPORTED_MODULE_1_apisauce__[\"create\"])({\n    baseURL: 'http://localhost:3002'\n  });\n\n  // start making calls\n  return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {\n    // (A)\n    resolve(api.get('/get_dogs').then(function (response) {\n      return response;\n    }));\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Db250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29udHJvbGxlci5qcz84YmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfUHJvbWlzZSBmcm9tICdiYWJlbC1ydW50aW1lL2NvcmUtanMvcHJvbWlzZSc7XG5pbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdhcGlzYXVjZSc7XG5cbmV4cG9ydCB2YXIgZ2V0RG9ncyA9IGZ1bmN0aW9uIGdldERvZ3MoKSB7XG4gIC8vIGRlZmluZSB0aGUgYXBpXG4gIHZhciBhcGkgPSBjcmVhdGUoe1xuICAgIGJhc2VVUkw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDInXG4gIH0pO1xuXG4gIC8vIHN0YXJ0IG1ha2luZyBjYWxsc1xuICByZXR1cm4gbmV3IF9Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyAoQSlcbiAgICByZXNvbHZlKGFwaS5nZXQoJy9nZXRfZG9ncycpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSkpO1xuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Controller.js\n");

/***/ }),

/***/ "babel-runtime/core-js/promise":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/promise");

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
false,

/***/ "babel-runtime/regenerator":
false

};