exports.id = 0;
exports.modules = {

/***/ "./src/controller/addRating.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__ = __webpack_require__(\"./src/schemas/VideoSchema.js\");\n\n\nvar addRating = function addRating(url, rating) {\n  var video = new __WEBPACK_IMPORTED_MODULE_0__schemas_VideoSchema__[\"a\" /* default */]({ url: url, rating: rating });\n  video.save(function (err) {\n    if (err) {\n      return err;\n    } else {\n      return 0;\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udHJvbGxlci9hZGRSYXRpbmcuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci9hZGRSYXRpbmcuanM/MTMzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVmlkZW8gZnJvbSAnLi4vc2NoZW1hcy9WaWRlb1NjaGVtYSc7XG5cbnZhciBhZGRSYXRpbmcgPSBmdW5jdGlvbiBhZGRSYXRpbmcodXJsLCByYXRpbmcpIHtcbiAgdmFyIHZpZGVvID0gbmV3IFZpZGVvKHsgdXJsOiB1cmwsIHJhdGluZzogcmF0aW5nIH0pO1xuICB2aWRlby5zYXZlKGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoZXJyKSB7XG4gICAgICByZXR1cm4gZXJyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gIH0pO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb250cm9sbGVyL2FkZFJhdGluZy5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29udHJvbGxlci9hZGRSYXRpbmcuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/controller/addRating.js\n");

/***/ }),

/***/ "./src/model/connectiondb.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var mongoose = __webpack_require__(\"mongoose\");\n// mongoose.connect('mongodb://MarceloPedroRedes:marcelopedro1@ds255715.mlab.com:55715/efeito-mateus');\nmongoose.connect('mongodb://localhost/efeito-mateus', { useMongoClient: true });\nmongoose.Promise = global.Promise;\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (mongoose);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwvY29ubmVjdGlvbmRiLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVsL2Nvbm5lY3Rpb25kYi5qcz80ZDNlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBtb25nb29zZSA9IHJlcXVpcmUoJ21vbmdvb3NlJyk7XG4vLyBtb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vTWFyY2Vsb1BlZHJvUmVkZXM6bWFyY2Vsb3BlZHJvMUBkczI1NTcxNS5tbGFiLmNvbTo1NTcxNS9lZmVpdG8tbWF0ZXVzJyk7XG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vbG9jYWxob3N0L2VmZWl0by1tYXRldXMnLCB7IHVzZU1vbmdvQ2xpZW50OiB0cnVlIH0pO1xubW9uZ29vc2UuUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2RlbC9jb25uZWN0aW9uZGIuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL21vZGVsL2Nvbm5lY3Rpb25kYi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/model/connectiondb.js\n");

/***/ }),

/***/ "./src/schemas/VideoSchema.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_connectiondb__ = __webpack_require__(\"./src/model/connectiondb.js\");\n\n\n\nvar videoSchema = new __WEBPACK_IMPORTED_MODULE_0__model_connectiondb__[\"a\" /* default */].Schema({\n  url: String,\n  rating: Number\n});\n\nvar Video = __WEBPACK_IMPORTED_MODULE_0__model_connectiondb__[\"a\" /* default */].model('Video', videoSchema);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Video);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zY2hlbWFzL1ZpZGVvU2NoZW1hLmpzPzNlNDciXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbW9uZ29vc2UgZnJvbSAnLi4vbW9kZWwvY29ubmVjdGlvbmRiJztcblxudmFyIHZpZGVvU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIHVybDogU3RyaW5nLFxuICByYXRpbmc6IE51bWJlclxufSk7XG5cbnZhciBWaWRlbyA9IG1vbmdvb3NlLm1vZGVsKCdWaWRlbycsIHZpZGVvU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvc2NoZW1hcy9WaWRlb1NjaGVtYS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/schemas/VideoSchema.js\n");

/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(\"react-router-dom\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(\"./src/App.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(\"react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(\"express\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(\"path\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(\"body-parser\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server__ = __webpack_require__(\"react-dom/server\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controller_addRating__ = __webpack_require__(\"./src/controller/addRating.js\");\nvar _jsxFileName = '/home/marcelo/Documents/Insper/6_Semestre/RedesSociais/EfeitoMateus/WebApp/src/server.js';\n\n\n\n\n\n\n\n\n\n\nvar assets = __webpack_require__(\"./build/assets.json\");\n\nvar server = __WEBPACK_IMPORTED_MODULE_3_express___default()();\n\nserver.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.urlencoded({ extended: true }));\nserver.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.json());\nserver.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_3_express___default.a.static(\"/home/marcelo/Documents/Insper/6_Semestre/RedesSociais/EfeitoMateus/WebApp/public\")).get('/', function (req, res) {\n  var context = {};\n  var markup = Object(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__[\"renderToString\"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(\n    __WEBPACK_IMPORTED_MODULE_0_react_router_dom__[\"StaticRouter\"],\n    { context: context, location: req.url, __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23\n      }\n    },\n    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__App__[\"a\" /* default */], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24\n      }\n    })\n  ));\n\n  if (context.url) {\n    res.redirect(context.url);\n  } else {\n    res.status(200).send('<!doctype html>\\n    <html lang=\"\">\\n    <head>\\n        <meta httpEquiv=\"X-UA-Compatible\" content=\"IE=edge\" />\\n        <meta charSet=\\'utf-8\\' />\\n        <title>Million Song</title>\\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n        ' + (assets.client.css ? '<link rel=\"stylesheet\" href=\"' + assets.client.css + '\">' : '') + '\\n        <script src=\"' + assets.client.js + '\" defer></script>\\n    </head>\\n    <body>\\n        <div id=\"root\">' + markup + '</div>\\n    </body>\\n</html>');\n  }\n}).post('/addrating', function (req, res) {\n  url = req.body.url;\n  rating = req.body.rating;\n\n  res.send(200);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5qcz82MWE4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWUgPSAnL2hvbWUvbWFyY2Vsby9Eb2N1bWVudHMvSW5zcGVyLzZfU2VtZXN0cmUvUmVkZXNTb2NpYWlzL0VmZWl0b01hdGV1cy9XZWJBcHAvc3JjL3NlcnZlci5qcyc7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCBhZGRSYXRpbmcgZnJvbSAnLi9jb250cm9sbGVyL2FkZFJhdGluZyc7XG5cbnZhciBhc3NldHMgPSByZXF1aXJlKHByb2Nlc3MuZW52LlJBWlpMRV9BU1NFVFNfTUFOSUZFU1QpO1xuXG52YXIgc2VydmVyID0gZXhwcmVzcygpO1xuXG5zZXJ2ZXIudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbnNlcnZlci51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuc2VydmVyLmRpc2FibGUoJ3gtcG93ZXJlZC1ieScpLnVzZShleHByZXNzLnN0YXRpYyhwcm9jZXNzLmVudi5SQVpaTEVfUFVCTElDX0RJUikpLmdldCgnLycsIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICB2YXIgY29udGV4dCA9IHt9O1xuICB2YXIgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICBTdGF0aWNSb3V0ZXIsXG4gICAgeyBjb250ZXh0OiBjb250ZXh0LCBsb2NhdGlvbjogcmVxLnVybCwgX19zb3VyY2U6IHtcbiAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgbGluZU51bWJlcjogMjNcbiAgICAgIH1cbiAgICB9LFxuICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQXBwLCB7XG4gICAgICBfX3NvdXJjZToge1xuICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICBsaW5lTnVtYmVyOiAyNFxuICAgICAgfVxuICAgIH0pXG4gICkpO1xuXG4gIGlmIChjb250ZXh0LnVybCkge1xuICAgIHJlcy5yZWRpcmVjdChjb250ZXh0LnVybCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoJzwhZG9jdHlwZSBodG1sPlxcbiAgICA8aHRtbCBsYW5nPVwiXCI+XFxuICAgIDxoZWFkPlxcbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxcbiAgICAgICAgPG1ldGEgY2hhclNldD1cXCd1dGYtOFxcJyAvPlxcbiAgICAgICAgPHRpdGxlPk1pbGxpb24gU29uZzwvdGl0bGU+XFxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj5cXG4gICAgICAgICcgKyAoYXNzZXRzLmNsaWVudC5jc3MgPyAnPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCInICsgYXNzZXRzLmNsaWVudC5jc3MgKyAnXCI+JyA6ICcnKSArICdcXG4gICAgICAgIDxzY3JpcHQgc3JjPVwiJyArIGFzc2V0cy5jbGllbnQuanMgKyAnXCIgZGVmZXI+PC9zY3JpcHQ+XFxuICAgIDwvaGVhZD5cXG4gICAgPGJvZHk+XFxuICAgICAgICA8ZGl2IGlkPVwicm9vdFwiPicgKyBtYXJrdXAgKyAnPC9kaXY+XFxuICAgIDwvYm9keT5cXG48L2h0bWw+Jyk7XG4gIH1cbn0pLnBvc3QoJy9hZGRyYXRpbmcnLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgdXJsID0gcmVxLmJvZHkudXJsO1xuICByYXRpbmcgPSByZXEuYm9keS5yYXRpbmc7XG5cbiAgcmVzLnNlbmQoMjAwKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2VydmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zZXJ2ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/server.js\n");

/***/ }),

/***/ "mongoose":
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ })

};