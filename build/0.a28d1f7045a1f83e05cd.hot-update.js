exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(\"./src/server.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(\"http\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);\n\n\n\nvar server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_0__server__[\"default\"]);\n\nvar currentApp = __WEBPACK_IMPORTED_MODULE_0__server__[\"default\"];\n\nserver.listen(3000 || 3000);\n\nvar mongoose = __webpack_require__(\"mongoose\");\n\nmongoose.connect('mongodb://MarceloPedroRedes:marcelopedro1@ds255715.mlab.com:55715/efeito-mateus', { useMongoClient: true });\nmongoose.Promise = global.Promise;\n\nif (true) {\n  console.log('✅  Server-side HMR Enabled!');\n\n  module.hot.accept(\"./src/server.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(\"./src/server.js\"); (function () {\n    console.log('🔁  HMR Reloading `./server`...');\n    server.removeListener('request', currentApp);\n    var newApp = __webpack_require__(\"./src/server.js\").default;\n    server.on('request', newApp);\n    currentApp = newApp;\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/ZGYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJy4vc2VydmVyJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xuXG52YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxudmFyIGN1cnJlbnRBcHAgPSBhcHA7XG5cbnNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxudmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL01hcmNlbG9QZWRyb1JlZGVzOm1hcmNlbG9wZWRybzFAZHMyNTU3MTUubWxhYi5jb206NTU3MTUvZWZlaXRvLW1hdGV1cycsIHsgdXNlTW9uZ29DbGllbnQ6IHRydWUgfSk7XG5tb25nb29zZS5Qcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGNvbnNvbGUubG9nKCfinIUgIFNlcnZlci1zaWRlIEhNUiBFbmFibGVkIScpO1xuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KCcuL3NlcnZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zb2xlLmxvZygn8J+UgSAgSE1SIFJlbG9hZGluZyBgLi9zZXJ2ZXJgLi4uJyk7XG4gICAgc2VydmVyLnJlbW92ZUxpc3RlbmVyKCdyZXF1ZXN0JywgY3VycmVudEFwcCk7XG4gICAgdmFyIG5ld0FwcCA9IHJlcXVpcmUoJy4vc2VydmVyJykuZGVmYXVsdDtcbiAgICBzZXJ2ZXIub24oJ3JlcXVlc3QnLCBuZXdBcHApO1xuICAgIGN1cnJlbnRBcHAgPSBuZXdBcHA7XG4gIH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9pbmRleC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "mongoose":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

};