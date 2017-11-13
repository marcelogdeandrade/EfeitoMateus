exports.id = 0;
exports.modules = {

/***/ "./src/controller/getVideoRating.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getVideoRating; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__ = __webpack_require__(\"./src/schemas/VideoSchema.js\");\n\n\nvar getVideoRating = function getVideoRating(url) {\n  var query = __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__[\"a\" /* default */].findOne({ url: url });\n\n  // execute the query at a later time\n  return query.exec(function (err, video) {\n    if (err) return handleError(err);\n    console.log(video); // Space Ghost is a talk show host.\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci9nZXRWaWRlb1JhdGluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2dldFZpZGVvUmF0aW5nLmpzPzk5MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvIGZyb20gJy4uL3NjaGVtYXMvVmlkZW9TY2hlbWEnO1xuXG5leHBvcnQgdmFyIGdldFZpZGVvUmF0aW5nID0gZnVuY3Rpb24gZ2V0VmlkZW9SYXRpbmcodXJsKSB7XG4gIHZhciBxdWVyeSA9IFZpZGVvLmZpbmRPbmUoeyB1cmw6IHVybCB9KTtcblxuICAvLyBleGVjdXRlIHRoZSBxdWVyeSBhdCBhIGxhdGVyIHRpbWVcbiAgcmV0dXJuIHF1ZXJ5LmV4ZWMoZnVuY3Rpb24gKGVyciwgdmlkZW8pIHtcbiAgICBpZiAoZXJyKSByZXR1cm4gaGFuZGxlRXJyb3IoZXJyKTtcbiAgICBjb25zb2xlLmxvZyh2aWRlbyk7IC8vIFNwYWNlIEdob3N0IGlzIGEgdGFsayBzaG93IGhvc3QuXG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250cm9sbGVyL2dldFZpZGVvUmF0aW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9jb250cm9sbGVyL2dldFZpZGVvUmF0aW5nLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/controller/getVideoRating.js\n");

/***/ })

};