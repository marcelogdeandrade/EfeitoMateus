exports.id = 0;
exports.modules = {

/***/ "./src/modules/getVideoRating.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getVideoRating; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__ = __webpack_require__(\"./src/schemas/VideoSchema.js\");\n\n\nvar getVideoRating = function getVideoRating(url) {\n  console.log('teste');\n  __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__[\"a\" /* default */].find({ url: url }, function (err, docs) {\n    console.log(docs);\n    console.log(err);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9nZXRWaWRlb1JhdGluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9tb2R1bGVzL2dldFZpZGVvUmF0aW5nLmpzPzA4NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvIGZyb20gJy4uL3NjaGVtYXMvVmlkZW9TY2hlbWEnO1xuXG5leHBvcnQgdmFyIGdldFZpZGVvUmF0aW5nID0gZnVuY3Rpb24gZ2V0VmlkZW9SYXRpbmcodXJsKSB7XG4gIGNvbnNvbGUubG9nKCd0ZXN0ZScpO1xuICBWaWRlby5maW5kKHsgdXJsOiB1cmwgfSwgZnVuY3Rpb24gKGVyciwgZG9jcykge1xuICAgIGNvbnNvbGUubG9nKGRvY3MpO1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL2dldFZpZGVvUmF0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tb2R1bGVzL2dldFZpZGVvUmF0aW5nLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/getVideoRating.js\n");

/***/ })

};