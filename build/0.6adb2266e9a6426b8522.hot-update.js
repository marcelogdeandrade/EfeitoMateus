exports.id = 0;
exports.modules = {

/***/ "./src/modules/Controller.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getDogs; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce__ = __webpack_require__(\"apisauce\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_apisauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_apisauce__);\n\n\nvar getDogs = function getDogs() {\n  // define the api\n  var result;\n  var api = Object(__WEBPACK_IMPORTED_MODULE_0_apisauce__[\"create\"])({\n    baseURL: 'http://localhost:3002'\n  });\n\n  // start making calls\n  api.get('/get_dogs').then(function (response) {\n    return result = response;\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9Db250cm9sbGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZXMvQ29udHJvbGxlci5qcz84YmI1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZSB9IGZyb20gJ2FwaXNhdWNlJztcblxuZXhwb3J0IHZhciBnZXREb2dzID0gZnVuY3Rpb24gZ2V0RG9ncygpIHtcbiAgLy8gZGVmaW5lIHRoZSBhcGlcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIGFwaSA9IGNyZWF0ZSh7XG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMidcbiAgfSk7XG5cbiAgLy8gc3RhcnQgbWFraW5nIGNhbGxzXG4gIGFwaS5nZXQoJy9nZXRfZG9ncycpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgcmV0dXJuIHJlc3VsdCA9IHJlc3BvbnNlO1xuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbW9kdWxlcy9Db250cm9sbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tb2R1bGVzL0NvbnRyb2xsZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/modules/Controller.js\n");

/***/ })

};