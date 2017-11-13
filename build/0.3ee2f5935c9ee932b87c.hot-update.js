exports.id = 0;
exports.modules = {

/***/ "./src/modules/Controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getDogs; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce__ = __webpack_require__(\"apisauce\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apisauce__);\n\n\nvar getDogs = function getDogs() {\n  // define the api\n  var result;\n  var api = Object(__WEBPACK_IMPORTED_MODULE_0_apisauce__[\"create\"])({\n    baseURL: 'http://localhost:3002'\n  });\n\n  // start making calls\n  return api.get('/get_dogs').then(function (response) {\n    return response;\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Db250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29udHJvbGxlci5qcz84YmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2FwaXNhdWNlJztcblxuZXhwb3J0IHZhciBnZXREb2dzID0gZnVuY3Rpb24gZ2V0RG9ncygpIHtcbiAgLy8gZGVmaW5lIHRoZSBhcGlcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIGFwaSA9IGNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMidcbiAgfSk7XG5cbiAgLy8gc3RhcnQgbWFraW5nIGNhbGxzXG4gIHJldHVybiBhcGkuZ2V0KCcvZ2V0X2RvZ3MnKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL21vZHVsZXMvQ29udHJvbGxlci5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbW9kdWxlcy9Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/Controller.js\n");

/***/ })

};