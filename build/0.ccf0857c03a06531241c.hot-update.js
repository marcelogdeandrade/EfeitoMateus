exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(\"./src/server.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(\"http\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schemas_VideoSchema__ = __webpack_require__(\"./src/schemas/VideoSchema.js\");\n\n\n\nvar server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_0__server__[\"default\"]);\n\n\n\nvar currentApp = __WEBPACK_IMPORTED_MODULE_0__server__[\"default\"];\n\nserver.listen(3000 || 3000);\n\nif (true) {\n  console.log('✅  Server-side HMR Enabled!');\n\n  module.hot.accept(\"./src/server.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(\"./src/server.js\"); (function () {\n    console.log('🔁  HMR Reloading `./server`...');\n    server.removeListener('request', currentApp);\n    var newApp = __webpack_require__(\"./src/server.js\").default;\n    server.on('request', newApp);\n    currentApp = newApp;\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/ZGYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJy4vc2VydmVyJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuXG52YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuaW1wb3J0IFZpZGVvIGZyb20gJy4vc2NoZW1hcy9WaWRlb1NjaGVtYSc7XG5cbnZhciBjdXJyZW50QXBwID0gYXBwO1xuXG5zZXJ2ZXIubGlzdGVuKHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCk7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGNvbnNvbGUubG9nKCfinIUgIFNlcnZlci1zaWRlIEhNUiBFbmFibGVkIScpO1xuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3NlcnZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygn8J+UgSAgSE1SIFJlbG9hZGluZyBgLi9zZXJ2ZXJgLi4uJyk7XG4gICAgc2VydmVyLnJlbW92ZUxpc3RlbmVyKCdyZXF1ZXN0JywgY3VycmVudEFwcCk7XG4gICAgdmFyIG5ld0FwcCA9IHJlcXVpcmUoJy4vc2VydmVyJykuZGVmYXVsdDtcbiAgICBzZXJ2ZXIub24oJ3JlcXVlc3QnLCBuZXdBcHApO1xuICAgIGN1cnJlbnRBcHAgPSBuZXdBcHA7XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/schemas/VideoSchema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_connectiondb__ = __webpack_require__(\"./src/model/connectiondb.js\");\n\n\n\nvar videoSchema = new __WEBPACK_IMPORTED_MODULE_0__model_connectiondb__[\"a\" /* default */].Schema({\n  url: String,\n  rating: Number\n});\n\nvar Video = __WEBPACK_IMPORTED_MODULE_0__model_connectiondb__[\"a\" /* default */].model('Video', videoSchema);\n\n/* unused harmony default export */ var _unused_webpack_default_export = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1ZpZGVvU2NoZW1hLmpzPzNlNDciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnLi4vbW9kZWwvY29ubmVjdGlvbmRiJztcblxudmFyIHZpZGVvU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVybDogU3RyaW5nLFxuICByYXRpbmc6IE51bWJlclxufSk7XG5cbnZhciBWaWRlbyA9IG1vbmdvb3NlLm1vZGVsKCdWaWRlbycsIHZpZGVvU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/schemas/VideoSchema.js\n");

/***/ })

};