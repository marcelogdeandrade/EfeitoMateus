exports.id = 0;
exports.modules = {

/***/ "./src/components/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(\"babel-runtime/core-js/object/get-prototype-of\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(\"babel-runtime/helpers/classCallCheck\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(\"babel-runtime/helpers/createClass\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(\"babel-runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(\"babel-runtime/helpers/inherits\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(\"react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__ = __webpack_require__(\"semantic-ui-react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_player__ = __webpack_require__(\"react-player\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_player__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__VideoPlayer__ = __webpack_require__(\"./src/components/VideoPlayer.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_randomize_array__ = __webpack_require__(\"./src/modules/randomize_array.js\");\n\n\n\n\n\nvar _jsxFileName = '/home/marcelo/Documents/Insper/6_Semestre/RedesSociais/EfeitoMateus/WebApp/src/components/Home.js';\n\n\n\n\n\n\nvar Home = function (_Component) {\n  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);\n\n  function Home(props) {\n    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);\n\n    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).call(this));\n\n    _this.state = {\n      urls: ['https://www.youtube.com/embed/hnMQIR69w8k', 'https://www.youtube.com/embed/G4XkoysO_Pk', 'https://www.youtube.com/embed/qn6hbW6yHRo', 'https://www.youtube.com/embed/qmc-tq1vnDA', 'https://www.youtube.com/embed/Bx_huC8dpHg', 'https://www.youtube.com/embed/XiDxwgH_nKo', 'https://www.youtube.com/embed/Cv5_Y6ZCHrM', 'https://www.youtube.com/embed/NwP5RJgase4', 'https://www.youtube.com/embed/02cY9arv6k8', 'https://www.youtube.com/embed/t0xP_LiTGvg']\n    };\n    return _this;\n  }\n\n  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{\n    key: 'render',\n    value: function render() {\n      array = Object(__WEBPACK_IMPORTED_MODULE_9__modules_randomize_array__[\"a\" /* shuffle */])(this.state.urls);\n      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n        'div',\n        {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 28\n          }\n        },\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n          { clearing: true, __source: {\n              fileName: _jsxFileName,\n              lineNumber: 29\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Header\"], { as: 'h2', floated: 'right', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 30\n            }\n          }),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Header\"],\n            { as: 'h1', floated: 'left', __source: {\n                fileName: _jsxFileName,\n                lineNumber: 32\n              }\n            },\n            'Efeito Mateus'\n          )\n        ),\n        array.map(function (url, index) {\n          return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__VideoPlayer__[\"a\" /* default */], {\n            key: index,\n            url: url,\n            id: index,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 37\n            }\n          });\n        })\n      );\n    }\n  }]);\n\n  return Home;\n}(__WEBPACK_IMPORTED_MODULE_5_react__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS5qcz82YTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICcvaG9tZS9tYXJjZWxvL0RvY3VtZW50cy9JbnNwZXIvNl9TZW1lc3RyZS9SZWRlc1NvY2lhaXMvRWZlaXRvTWF0ZXVzL1dlYkFwcC9zcmMvY29tcG9uZW50cy9Ib21lLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkLCBJbWFnZSwgU2VnbWVudCwgSGVhZGVyLCBJY29uLCBDb250YWluZXIsIFJhdGluZyB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInO1xuaW1wb3J0IFZpZGVvUGxheWVyIGZyb20gJy4vVmlkZW9QbGF5ZXInO1xuaW1wb3J0IHsgc2h1ZmZsZSB9IGZyb20gJy4uL21vZHVsZXMvcmFuZG9taXplX2FycmF5JztcblxudmFyIEhvbWUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoSG9tZSwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gSG9tZShwcm9wcykge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb21lKTtcblxuICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChIb21lLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKEhvbWUpKS5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLnN0YXRlID0ge1xuICAgICAgdXJsczogWydodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9obk1RSVI2OXc4aycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9HNFhrb3lzT19QaycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9xbjZoYlc2eUhSbycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9xbWMtdHExdm5EQScsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9CeF9odUM4ZHBIZycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9YaUR4d2dIX25LbycsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9DdjVfWTZaQ0hyTScsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9Od1A1UkpnYXNlNCcsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8wMmNZOWFydjZrOCcsICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC90MHhQX0xpVEd2ZyddXG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG9tZSwgW3tcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICBhcnJheSA9IHNodWZmbGUodGhpcy5zdGF0ZS51cmxzKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMjhcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgU2VnbWVudCxcbiAgICAgICAgICB7IGNsZWFyaW5nOiB0cnVlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAyOVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkZXIsIHsgYXM6ICdoMicsIGZsb2F0ZWQ6ICdyaWdodCcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEhlYWRlcixcbiAgICAgICAgICAgIHsgYXM6ICdoMScsIGZsb2F0ZWQ6ICdsZWZ0JywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDMyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnRWZlaXRvIE1hdGV1cydcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIGFycmF5Lm1hcChmdW5jdGlvbiAodXJsLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFZpZGVvUGxheWVyLCB7XG4gICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzN1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gSG9tZTtcbn0oQ29tcG9uZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL0hvbWUuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvSG9tZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Home.js\n");

/***/ }),

/***/ "./src/modules/randomize_array.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (immutable) */ __webpack_exports__[\"a\"] = shuffle;\nfunction shuffle(arra1) {\n  var ctr = arra1.length,\n      temp,\n      index;\n\n  // While there are elements in the array\n  while (ctr > 0) {\n    // Pick a random index\n    index = Math.floor(Math.random() * ctr);\n    // Decrease ctr by 1\n    ctr--;\n    // And swap the last element with it\n    temp = arra1[ctr];\n    arra1[ctr] = arra1[index];\n    arra1[index] = temp;\n  }\n  return arra1;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9yYW5kb21pemVfYXJyYXkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kdWxlcy9yYW5kb21pemVfYXJyYXkuanM/Nzg0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gc2h1ZmZsZShhcnJhMSkge1xuICB2YXIgY3RyID0gYXJyYTEubGVuZ3RoLFxuICAgICAgdGVtcCxcbiAgICAgIGluZGV4O1xuXG4gIC8vIFdoaWxlIHRoZXJlIGFyZSBlbGVtZW50cyBpbiB0aGUgYXJyYXlcbiAgd2hpbGUgKGN0ciA+IDApIHtcbiAgICAvLyBQaWNrIGEgcmFuZG9tIGluZGV4XG4gICAgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdHIpO1xuICAgIC8vIERlY3JlYXNlIGN0ciBieSAxXG4gICAgY3RyLS07XG4gICAgLy8gQW5kIHN3YXAgdGhlIGxhc3QgZWxlbWVudCB3aXRoIGl0XG4gICAgdGVtcCA9IGFycmExW2N0cl07XG4gICAgYXJyYTFbY3RyXSA9IGFycmExW2luZGV4XTtcbiAgICBhcnJhMVtpbmRleF0gPSB0ZW1wO1xuICB9XG4gIHJldHVybiBhcnJhMTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tb2R1bGVzL3JhbmRvbWl6ZV9hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbW9kdWxlcy9yYW5kb21pemVfYXJyYXkuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/randomize_array.js\n");

/***/ })

};