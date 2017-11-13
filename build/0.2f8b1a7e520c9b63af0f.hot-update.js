exports.id = 0;
exports.modules = {

/***/ "./src/components/VideoPlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(\"babel-runtime/core-js/object/get-prototype-of\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(\"babel-runtime/helpers/classCallCheck\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(\"babel-runtime/helpers/createClass\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(\"babel-runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(\"babel-runtime/helpers/inherits\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(\"react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__ = __webpack_require__(\"semantic-ui-react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_player__ = __webpack_require__(\"react-player\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_player__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_requests__ = __webpack_require__(\"./src/modules/requests.js\");\n\n\n\n\n\nvar _jsxFileName = '/home/marcelo/Documents/Insper/6_Semestre/RedesSociais/EfeitoMateus/WebApp/src/components/VideoPlayer.js';\n\n\n\n\n\nvar VideoPlayer = function (_Component) {\n  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(VideoPlayer, _Component);\n\n  function VideoPlayer(props) {\n    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, VideoPlayer);\n\n    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VideoPlayer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(VideoPlayer)).call(this));\n\n    _this.handleRate = function (e, _ref) {\n      var rating = _ref.rating,\n          maxRating = _ref.maxRating;\n      return _this.setState({ rating: rating, maxRating: maxRating });\n    };\n\n    _this.state = {\n      url: props.url,\n      hasSubmitted: false,\n      rating: 3,\n      avg: 0,\n      videoRatings: []\n    };\n    _this.render = _this.render.bind(_this);\n    _this.renderEnd = _this.renderEnd.bind(_this);\n    _this.addRatingMethod = _this.addRatingMethod.bind(_this);\n    return _this;\n  }\n\n  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(VideoPlayer, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.getRating();\n    }\n  }, {\n    key: 'addRatingMethod',\n    value: function addRatingMethod() {\n      var _this2 = this;\n\n      var url = this.state.url;\n      var rating = this.state.rating;\n      Object(__WEBPACK_IMPORTED_MODULE_8__modules_requests__[\"a\" /* addRating */])(url, rating).then(function (result) {\n        _this2.setState({\n          hasSubmitted: true\n        });\n      });\n    }\n  }, {\n    key: 'getAverageRating',\n    value: function getAverageRating(ratings) {\n      ratings = ratings.map(function (rating) {\n        return rating.rating;\n      });\n      var sum = 0;\n      for (var i = 0; i < ratings.length; i++) {\n        sum += parseInt(ratings[i], 10);\n      }\n\n      var avg = sum / ratings.length;\n      return avg.toFixed(2);\n    }\n  }, {\n    key: 'getRating',\n    value: function getRating() {\n      var _this3 = this;\n\n      var url = this.state.url;\n      Object(__WEBPACK_IMPORTED_MODULE_8__modules_requests__[\"b\" /* getVideoRating */])(url).then(function (result) {\n        var avg = _this3.getAverageRating(result.data);\n        _this3.setState({\n          avg: avg\n        });\n      });\n    }\n  }, {\n    key: 'renderEnd',\n    value: function renderEnd() {\n      if (this.state.hasSubmitted) {\n        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n          { textAlign: 'center', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 65\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Icon\"], { name: 'checkmark', size: 'huge', color: 'green', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 66\n            }\n          })\n        );\n      } else {\n        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          'div',\n          {\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 71\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n            { textAlign: 'center', __source: {\n                fileName: _jsxFileName,\n                lineNumber: 72\n              }\n            },\n            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Rating\"], { maxRating: 5, defaultRating: 3, icon: 'star', size: 'massive', onRate: this.handleRate, __source: {\n                fileName: _jsxFileName,\n                lineNumber: 73\n              }\n            })\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n            { textAlign: 'center', __source: {\n                fileName: _jsxFileName,\n                lineNumber: 75\n              }\n            },\n            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Button\"],\n              { primary: true, onClick: this.addRatingMethod, __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 76\n                }\n              },\n              'Enviar'\n            )\n          )\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n        'div',\n        {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 84\n          }\n        },\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n          { textAlign: 'center', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 85\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Header\"],\n            {\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 86\n              }\n            },\n            ' Video ',\n            this.props.id\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_player___default.a, {\n            url: this.props.url,\n            controls: true,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 87\n            }\n          })\n        ),\n        this.renderEnd(),\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Divider\"], {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 93\n          }\n        })\n      );\n    }\n  }]);\n\n  return VideoPlayer;\n}(__WEBPACK_IMPORTED_MODULE_5_react__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (VideoPlayer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWRlb1BsYXllci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzPzJhZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9ob21lL21hcmNlbG8vRG9jdW1lbnRzL0luc3Blci82X1NlbWVzdHJlL1JlZGVzU29jaWFpcy9FZmVpdG9NYXRldXMvV2ViQXBwL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkLCBJbWFnZSwgU2VnbWVudCwgSGVhZGVyLCBJY29uLCBDb250YWluZXIsIFJhdGluZywgRGl2aWRlciwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XG5pbXBvcnQgeyBhZGRSYXRpbmcsIGdldFZpZGVvUmF0aW5nIH0gZnJvbSAnLi4vbW9kdWxlcy9yZXF1ZXN0cyc7XG5cbnZhciBWaWRlb1BsYXllciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhWaWRlb1BsYXllciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVmlkZW9QbGF5ZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlkZW9QbGF5ZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFZpZGVvUGxheWVyLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKFZpZGVvUGxheWVyKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5oYW5kbGVSYXRlID0gZnVuY3Rpb24gKGUsIF9yZWYpIHtcbiAgICAgIHZhciByYXRpbmcgPSBfcmVmLnJhdGluZyxcbiAgICAgICAgICBtYXhSYXRpbmcgPSBfcmVmLm1heFJhdGluZztcbiAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7IHJhdGluZzogcmF0aW5nLCBtYXhSYXRpbmc6IG1heFJhdGluZyB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICB1cmw6IHByb3BzLnVybCxcbiAgICAgIGhhc1N1Ym1pdHRlZDogZmFsc2UsXG4gICAgICByYXRpbmc6IDMsXG4gICAgICBhdmc6IDAsXG4gICAgICB2aWRlb1JhdGluZ3M6IFtdXG4gICAgfTtcbiAgICBfdGhpcy5yZW5kZXIgPSBfdGhpcy5yZW5kZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMucmVuZGVyRW5kID0gX3RoaXMucmVuZGVyRW5kLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmFkZFJhdGluZ01ldGhvZCA9IF90aGlzLmFkZFJhdGluZ01ldGhvZC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmlkZW9QbGF5ZXIsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuZ2V0UmF0aW5nKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkUmF0aW5nTWV0aG9kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkUmF0aW5nTWV0aG9kKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciB1cmwgPSB0aGlzLnN0YXRlLnVybDtcbiAgICAgIHZhciByYXRpbmcgPSB0aGlzLnN0YXRlLnJhdGluZztcbiAgICAgIGFkZFJhdGluZyh1cmwsIHJhdGluZykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGFzU3VibWl0dGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0QXZlcmFnZVJhdGluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEF2ZXJhZ2VSYXRpbmcocmF0aW5ncykge1xuICAgICAgcmF0aW5ncyA9IHJhdGluZ3MubWFwKGZ1bmN0aW9uIChyYXRpbmcpIHtcbiAgICAgICAgcmV0dXJuIHJhdGluZy5yYXRpbmc7XG4gICAgICB9KTtcbiAgICAgIHZhciBzdW0gPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByYXRpbmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHN1bSArPSBwYXJzZUludChyYXRpbmdzW2ldLCAxMCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhdmcgPSBzdW0gLyByYXRpbmdzLmxlbmd0aDtcbiAgICAgIHJldHVybiBhdmcudG9GaXhlZCgyKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRSYXRpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRSYXRpbmcoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIHVybCA9IHRoaXMuc3RhdGUudXJsO1xuICAgICAgZ2V0VmlkZW9SYXRpbmcodXJsKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgdmFyIGF2ZyA9IF90aGlzMy5nZXRBdmVyYWdlUmF0aW5nKHJlc3VsdC5kYXRhKTtcbiAgICAgICAgX3RoaXMzLnNldFN0YXRlKHtcbiAgICAgICAgICBhdmc6IGF2Z1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlckVuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckVuZCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmhhc1N1Ym1pdHRlZCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBTZWdtZW50LFxuICAgICAgICAgIHsgdGV4dEFsaWduOiAnY2VudGVyJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNjVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSWNvbiwgeyBuYW1lOiAnY2hlY2ttYXJrJywgc2l6ZTogJ2h1Z2UnLCBjb2xvcjogJ2dyZWVuJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNjZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogNzFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBTZWdtZW50LFxuICAgICAgICAgICAgeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmF0aW5nLCB7IG1heFJhdGluZzogNSwgZGVmYXVsdFJhdGluZzogMywgaWNvbjogJ3N0YXInLCBzaXplOiAnbWFzc2l2ZScsIG9uUmF0ZTogdGhpcy5oYW5kbGVSYXRlLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzNcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBTZWdtZW50LFxuICAgICAgICAgICAgeyB0ZXh0QWxpZ246ICdjZW50ZXInLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNzVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIEJ1dHRvbixcbiAgICAgICAgICAgICAgeyBwcmltYXJ5OiB0cnVlLCBvbkNsaWNrOiB0aGlzLmFkZFJhdGluZ01ldGhvZCwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA3NlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgJ0VudmlhcidcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA4NFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBTZWdtZW50LFxuICAgICAgICAgIHsgdGV4dEFsaWduOiAnY2VudGVyJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogODVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBIZWFkZXIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgICBsaW5lTnVtYmVyOiA4NlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJyBWaWRlbyAnLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5pZFxuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdFBsYXllciwge1xuICAgICAgICAgICAgdXJsOiB0aGlzLnByb3BzLnVybCxcbiAgICAgICAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogODdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICB0aGlzLnJlbmRlckVuZCgpLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KERpdmlkZXIsIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDkzXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVmlkZW9QbGF5ZXI7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvUGxheWVyO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL2NvbXBvbmVudHMvVmlkZW9QbGF5ZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/VideoPlayer.js\n");

/***/ })

};