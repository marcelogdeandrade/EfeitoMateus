exports.id = 0;
exports.modules = {

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom__ = __webpack_require__(\"react-router-dom\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_router_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(\"./src/App.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(\"react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express__ = __webpack_require__(\"express\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_express__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path__ = __webpack_require__(\"path\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_path__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(\"body-parser\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server__ = __webpack_require__(\"react-dom/server\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__controller_addRating__ = __webpack_require__(\"./src/controller/addRating.js\");\nvar _jsxFileName = '/home/marcelo/Documents/Insper/6_Semestre/RedesSociais/EfeitoMateus/WebApp/src/server.js';\n\n\n\n\n\n\n\n\n\n\nvar assets = __webpack_require__(\"./build/assets.json\");\n\nvar server = __WEBPACK_IMPORTED_MODULE_3_express___default()();\n\nserver.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.urlencoded({ extended: true }));\nserver.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.json());\nserver.disable('x-powered-by').use(__WEBPACK_IMPORTED_MODULE_3_express___default.a.static(\"/home/marcelo/Documents/Insper/6_Semestre/RedesSociais/EfeitoMateus/WebApp/public\")).get('/', function (req, res) {\n  var context = {};\n  var markup = Object(__WEBPACK_IMPORTED_MODULE_6_react_dom_server__[\"renderToString\"])(__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(\n    __WEBPACK_IMPORTED_MODULE_0_react_router_dom__[\"StaticRouter\"],\n    { context: context, location: req.url, __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23\n      }\n    },\n    __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__App__[\"a\" /* default */], {\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24\n      }\n    })\n  ));\n\n  if (context.url) {\n    res.redirect(context.url);\n  } else {\n    res.status(200).send('<!doctype html>\\n    <html lang=\"\">\\n    <head>\\n        <meta httpEquiv=\"X-UA-Compatible\" content=\"IE=edge\" />\\n        <meta charSet=\\'utf-8\\' />\\n        <title>Million Song</title>\\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\\n        ' + (assets.client.css ? '<link rel=\"stylesheet\" href=\"' + assets.client.css + '\">' : '') + '\\n        <script src=\"' + assets.client.js + '\" defer></script>\\n    </head>\\n    <body>\\n        <div id=\"root\">' + markup + '</div>\\n    </body>\\n</html>');\n  }\n}).post('/addrating', function (req, res) {\n  var url = req.body.url;\n  var rating = req.body.rating;\n  var result = Object(__WEBPACK_IMPORTED_MODULE_7__controller_addRating__[\"a\" /* addRating */])(url, rating);\n  res.send(200);\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (server);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZlci5qcz82MWE4Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfanN4RmlsZU5hbWUgPSAnL2hvbWUvbWFyY2Vsby9Eb2N1bWVudHMvSW5zcGVyLzZfU2VtZXN0cmUvUmVkZXNTb2NpYWlzL0VmZWl0b01hdGV1cy9XZWJBcHAvc3JjL3NlcnZlci5qcyc7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIsIG1hdGNoUGF0aCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInO1xuaW1wb3J0IHsgcmVuZGVyVG9TdHJpbmcgfSBmcm9tICdyZWFjdC1kb20vc2VydmVyJztcbmltcG9ydCB7IGFkZFJhdGluZyB9IGZyb20gJy4vY29udHJvbGxlci9hZGRSYXRpbmcnO1xuXG52YXIgYXNzZXRzID0gcmVxdWlyZShwcm9jZXNzLmVudi5SQVpaTEVfQVNTRVRTX01BTklGRVNUKTtcblxudmFyIHNlcnZlciA9IGV4cHJlc3MoKTtcblxuc2VydmVyLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogdHJ1ZSB9KSk7XG5zZXJ2ZXIudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbnNlcnZlci5kaXNhYmxlKCd4LXBvd2VyZWQtYnknKS51c2UoZXhwcmVzcy5zdGF0aWMocHJvY2Vzcy5lbnYuUkFaWkxFX1BVQkxJQ19ESVIpKS5nZXQoJy8nLCBmdW5jdGlvbiAocmVxLCByZXMpIHtcbiAgdmFyIGNvbnRleHQgPSB7fTtcbiAgdmFyIG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgU3RhdGljUm91dGVyLFxuICAgIHsgY29udGV4dDogY29udGV4dCwgbG9jYXRpb246IHJlcS51cmwsIF9fc291cmNlOiB7XG4gICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgIGxpbmVOdW1iZXI6IDIzXG4gICAgICB9XG4gICAgfSxcbiAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEFwcCwge1xuICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgbGluZU51bWJlcjogMjRcbiAgICAgIH1cbiAgICB9KVxuICApKTtcblxuICBpZiAoY29udGV4dC51cmwpIHtcbiAgICByZXMucmVkaXJlY3QoY29udGV4dC51cmwpO1xuICB9IGVsc2Uge1xuICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKCc8IWRvY3R5cGUgaHRtbD5cXG4gICAgPGh0bWwgbGFuZz1cIlwiPlxcbiAgICA8aGVhZD5cXG4gICAgICAgIDxtZXRhIGh0dHBFcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cXG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9XFwndXRmLThcXCcgLz5cXG4gICAgICAgIDx0aXRsZT5NaWxsaW9uIFNvbmc8L3RpdGxlPlxcbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XFxuICAgICAgICAnICsgKGFzc2V0cy5jbGllbnQuY3NzID8gJzxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJyArIGFzc2V0cy5jbGllbnQuY3NzICsgJ1wiPicgOiAnJykgKyAnXFxuICAgICAgICA8c2NyaXB0IHNyYz1cIicgKyBhc3NldHMuY2xpZW50LmpzICsgJ1wiIGRlZmVyPjwvc2NyaXB0PlxcbiAgICA8L2hlYWQ+XFxuICAgIDxib2R5PlxcbiAgICAgICAgPGRpdiBpZD1cInJvb3RcIj4nICsgbWFya3VwICsgJzwvZGl2PlxcbiAgICA8L2JvZHk+XFxuPC9odG1sPicpO1xuICB9XG59KS5wb3N0KCcvYWRkcmF0aW5nJywgZnVuY3Rpb24gKHJlcSwgcmVzKSB7XG4gIHZhciB1cmwgPSByZXEuYm9keS51cmw7XG4gIHZhciByYXRpbmcgPSByZXEuYm9keS5yYXRpbmc7XG4gIHZhciByZXN1bHQgPSBhZGRSYXRpbmcodXJsLCByYXRpbmcpO1xuICByZXMuc2VuZCgyMDApO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNlcnZlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3NlcnZlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/server.js\n");

/***/ })

};