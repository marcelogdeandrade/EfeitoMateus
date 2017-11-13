exports.id = 0;
exports.modules = {

/***/ "./src/controller/addRating.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return addRating; });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__ = __webpack_require__(\"./src/schemas/VideoSchema.js\");\n\n\nvar addRating = function addRating(url, rating, isIndependent) {\n  var video = new __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__[\"a\" /* default */]({ url: url, rating: rating, isIndependent: isIndependent });\n  video.save(function (err) {\n    if (err) {\n      return err;\n    } else {\n      return 0;\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci9hZGRSYXRpbmcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9hZGRSYXRpbmcuanM/MTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlkZW8gZnJvbSAnLi4vc2NoZW1hcy9WaWRlb1NjaGVtYSc7XG5cbmV4cG9ydCB2YXIgYWRkUmF0aW5nID0gZnVuY3Rpb24gYWRkUmF0aW5nKHVybCwgcmF0aW5nLCBpc0luZGVwZW5kZW50KSB7XG4gIHZhciB2aWRlbyA9IG5ldyBWaWRlbyh7IHVybDogdXJsLCByYXRpbmc6IHJhdGluZywgaXNJbmRlcGVuZGVudDogaXNJbmRlcGVuZGVudCB9KTtcbiAgdmlkZW8uc2F2ZShmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIGVycjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9KTtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29udHJvbGxlci9hZGRSYXRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbnRyb2xsZXIvYWRkUmF0aW5nLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controller/addRating.js\n");

/***/ })

};