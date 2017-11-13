exports.id = 0;
exports.modules = {

/***/ "./src/controller/getVideoRating.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return getVideoRating; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__ = __webpack_require__(\"./src/schemas/VideoSchema.js\");\n\n\nvar getVideoRating = function getVideoRating(url) {\n  __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__[\"a\" /* default */].find({ url: url }, function (err, docs) {\n    console.log(url);\n    return docs;\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci9nZXRWaWRlb1JhdGluZy5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb250cm9sbGVyL2dldFZpZGVvUmF0aW5nLmpzPzk5MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZpZGVvIGZyb20gJy4uL3NjaGVtYXMvVmlkZW9TY2hlbWEnO1xuXG5leHBvcnQgdmFyIGdldFZpZGVvUmF0aW5nID0gZnVuY3Rpb24gZ2V0VmlkZW9SYXRpbmcodXJsKSB7XG4gIFZpZGVvLmZpbmQoeyB1cmw6IHVybCB9LCBmdW5jdGlvbiAoZXJyLCBkb2NzKSB7XG4gICAgY29uc29sZS5sb2codXJsKTtcbiAgICByZXR1cm4gZG9jcztcbiAgfSk7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbnRyb2xsZXIvZ2V0VmlkZW9SYXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbnRyb2xsZXIvZ2V0VmlkZW9SYXRpbmcuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controller/getVideoRating.js\n");

/***/ })

};