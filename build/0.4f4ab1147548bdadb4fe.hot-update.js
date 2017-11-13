exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(\"./src/server.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(\"http\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(\"mongoose\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);\n\n\n\n\n__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.connect('mongodb://MarceloPedroRedes:marcelopedro1@ds255715.mlab.com:55715/efeito-mateus', { useMongoClient: true });\n__WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Promise = global.Promise;\n\nvar server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_0__server__[\"default\"]);\n\nvar currentApp = __WEBPACK_IMPORTED_MODULE_0__server__[\"default\"];\n\nserver.listen(3000 || 3000);\n\nif (true) {\n  console.log('✅  Server-side HMR Enabled!');\n\n  module.hot.accept(\"./src/server.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(\"./src/server.js\"); (function () {\n    console.log('🔁  HMR Reloading `./server`...');\n    server.removeListener('request', currentApp);\n    var newApp = __webpack_require__(\"./src/server.js\").default;\n    server.on('request', newApp);\n    currentApp = newApp;\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/ZGYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJy4vc2VydmVyJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL01hcmNlbG9QZWRyb1JlZGVzOm1hcmNlbG9wZWRybzFAZHMyNTU3MTUubWxhYi5jb206NTU3MTUvZWZlaXRvLW1hdGV1cycsIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XG5tb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbnZhciBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApO1xuXG52YXIgY3VycmVudEFwcCA9IGFwcDtcblxuc2VydmVyLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDApO1xuXG5pZiAobW9kdWxlLmhvdCkge1xuICBjb25zb2xlLmxvZygn4pyFICBTZXJ2ZXItc2lkZSBITVIgRW5hYmxlZCEnKTtcblxuICBtb2R1bGUuaG90LmFjY2VwdCgnLi9zZXJ2ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc29sZS5sb2coJ/CflIEgIEhNUiBSZWxvYWRpbmcgYC4vc2VydmVyYC4uLicpO1xuICAgIHNlcnZlci5yZW1vdmVMaXN0ZW5lcigncmVxdWVzdCcsIGN1cnJlbnRBcHApO1xuICAgIHZhciBuZXdBcHAgPSByZXF1aXJlKCcuL3NlcnZlcicpLmRlZmF1bHQ7XG4gICAgc2VydmVyLm9uKCdyZXF1ZXN0JywgbmV3QXBwKTtcbiAgICBjdXJyZW50QXBwID0gbmV3QXBwO1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "mongoose":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

};