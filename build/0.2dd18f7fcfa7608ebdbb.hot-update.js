exports.id = 0;
exports.modules = {

/***/ "./src/modules/Controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return getDogs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return addSpecie; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(\"babel-runtime/regenerator\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(\"babel-runtime/helpers/asyncToGenerator\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apisauce__ = __webpack_require__(\"apisauce\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_apisauce__);\n\n\n\nvar _this = this;\n\n\n\nvar api = Object(__WEBPACK_IMPORTED_MODULE_2_apisauce__[\"create\"])({\n  baseURL: 'http://localhost:3002',\n  headers: { 'Accept': 'application/vnd.github.v3+json' }\n});\n\nvar getDogs = function () {\n  var _ref = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {\n    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt('return', api.get('/species').then(function (response) {\n              return response;\n            }));\n\n          case 1:\n          case 'end':\n            return _context.stop();\n        }\n      }\n    }, _callee, _this);\n  }));\n\n  return function getDogs() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar addSpecie = function () {\n  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(name) {\n    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            console.log('addSpecie');\n            return _context2.abrupt('return', api.post('/species', { name: name }).then(function (response) {\n              return response;\n            }));\n\n          case 2:\n          case 'end':\n            return _context2.stop();\n        }\n      }\n    }, _callee2, _this);\n  }));\n\n  return function addSpecie(_x) {\n    return _ref2.apply(this, arguments);\n  };\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Db250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29udHJvbGxlci5qcz84YmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfcmVnZW5lcmF0b3JSdW50aW1lIGZyb20gJ2JhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3InO1xuaW1wb3J0IF9hc3luY1RvR2VuZXJhdG9yIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yJztcblxudmFyIF90aGlzID0gdGhpcztcblxuaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnYXBpc2F1Y2UnO1xuXG52YXIgYXBpID0gY3JlYXRlKHtcbiAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMicsXG4gIGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzK2pzb24nIH1cbn0pO1xuXG5leHBvcnQgdmFyIGdldERvZ3MgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfcmVmID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZSgpIHtcbiAgICByZXR1cm4gX3JlZ2VuZXJhdG9yUnVudGltZS53cmFwKGZ1bmN0aW9uIF9jYWxsZWUkKF9jb250ZXh0KSB7XG4gICAgICB3aGlsZSAoMSkge1xuICAgICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdCgncmV0dXJuJywgYXBpLmdldCgnL3NwZWNpZXMnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBfY2FsbGVlLCBfdGhpcyk7XG4gIH0pKTtcblxuICByZXR1cm4gZnVuY3Rpb24gZ2V0RG9ncygpIHtcbiAgICByZXR1cm4gX3JlZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufSgpO1xuXG5leHBvcnQgdmFyIGFkZFNwZWNpZSA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF9yZWYyID0gX2FzeW5jVG9HZW5lcmF0b3IoIC8qI19fUFVSRV9fKi9fcmVnZW5lcmF0b3JSdW50aW1lLm1hcmsoZnVuY3Rpb24gX2NhbGxlZTIobmFtZSkge1xuICAgIHJldHVybiBfcmVnZW5lcmF0b3JSdW50aW1lLndyYXAoZnVuY3Rpb24gX2NhbGxlZTIkKF9jb250ZXh0Mikge1xuICAgICAgd2hpbGUgKDEpIHtcbiAgICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZFNwZWNpZScpO1xuICAgICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoJ3JldHVybicsIGFwaS5wb3N0KCcvc3BlY2llcycsIHsgbmFtZTogbmFtZSB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgX2NhbGxlZTIsIF90aGlzKTtcbiAgfSkpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBhZGRTcGVjaWUoX3gpIHtcbiAgICByZXR1cm4gX3JlZjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbn0oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21vZHVsZXMvQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Controller.js\n");

/***/ })

};