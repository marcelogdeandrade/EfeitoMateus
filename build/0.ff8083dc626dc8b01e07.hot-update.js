exports.id = 0;
exports.modules = {

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(\"./src/server.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http__ = __webpack_require__(\"http\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_http__);\n\n\nvar mongoose = __webpack_require__(\"mongoose\");\nmongoose.connect('mongodb://MarceloPedroRedes:marcelopedro1@ds255715.mlab.com:55715/efeito-mateus', { useMongoClient: true });\nmongoose.Promise = global.Promise;\n\nvar server = __WEBPACK_IMPORTED_MODULE_1_http___default.a.createServer(__WEBPACK_IMPORTED_MODULE_0__server__[\"default\"]);\n\nvar currentApp = __WEBPACK_IMPORTED_MODULE_0__server__[\"default\"];\n\nserver.listen(3000 || 3000);\n\nvar mongoose = __webpack_require__(\"mongoose\");\n\nif (true) {\n  console.log('✅  Server-side HMR Enabled!');\n\n  module.hot.accept(\"./src/server.js\", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__(\"./src/server.js\"); (function () {\n    console.log('🔁  HMR Reloading `./server`...');\n    server.removeListener('request', currentApp);\n    var newApp = __webpack_require__(\"./src/server.js\").default;\n    server.on('request', newApp);\n    currentApp = newApp;\n  })(__WEBPACK_OUTDATED_DEPENDENCIES__); });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/ZGYzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXBwIGZyb20gJy4vc2VydmVyJztcbmltcG9ydCBodHRwIGZyb20gJ2h0dHAnO1xudmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcbm1vbmdvb3NlLmNvbm5lY3QoJ21vbmdvZGI6Ly9NYXJjZWxvUGVkcm9SZWRlczptYXJjZWxvcGVkcm8xQGRzMjU1NzE1Lm1sYWIuY29tOjU1NzE1L2VmZWl0by1tYXRldXMnLCB7IHVzZU1vbmdvQ2xpZW50OiB0cnVlIH0pO1xubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG52YXIgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxudmFyIGN1cnJlbnRBcHAgPSBhcHA7XG5cbnNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwKTtcblxudmFyIG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKTtcblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgY29uc29sZS5sb2coJ+KchSAgU2VydmVyLXNpZGUgSE1SIEVuYWJsZWQhJyk7XG5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoJy4vc2VydmVyJywgZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUubG9nKCfwn5SBICBITVIgUmVsb2FkaW5nIGAuL3NlcnZlcmAuLi4nKTtcbiAgICBzZXJ2ZXIucmVtb3ZlTGlzdGVuZXIoJ3JlcXVlc3QnLCBjdXJyZW50QXBwKTtcbiAgICB2YXIgbmV3QXBwID0gcmVxdWlyZSgnLi9zZXJ2ZXInKS5kZWZhdWx0O1xuICAgIHNlcnZlci5vbigncmVxdWVzdCcsIG5ld0FwcCk7XG4gICAgY3VycmVudEFwcCA9IG5ld0FwcDtcbiAgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

};