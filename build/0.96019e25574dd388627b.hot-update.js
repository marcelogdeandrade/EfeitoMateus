exports.id = 0;
exports.modules = {

/***/ "./src/components/VideoPlayer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(\"babel-runtime/core-js/object/get-prototype-of\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(\"babel-runtime/helpers/classCallCheck\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(\"babel-runtime/helpers/createClass\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(\"babel-runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(\"babel-runtime/helpers/inherits\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(\"react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__ = __webpack_require__(\"semantic-ui-react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_player__ = __webpack_require__(\"react-player\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_player__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_addRating__ = __webpack_require__(\"./src/modules/addRating.js\");\n\n\n\n\n\nvar _jsxFileName = '/home/marcelo/Documents/Insper/6_Semestre/RedesSociais/EfeitoMateus/WebApp/src/components/VideoPlayer.js';\n\n\n\n\n\nvar VideoPlayer = function (_Component) {\n  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(VideoPlayer, _Component);\n\n  function VideoPlayer(props) {\n    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, VideoPlayer);\n\n    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (VideoPlayer.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(VideoPlayer)).call(this));\n\n    _this.handleRate = function (e, _ref) {\n      var rating = _ref.rating,\n          maxRating = _ref.maxRating;\n      return _this.setState({ rating: rating, maxRating: maxRating });\n    };\n\n    _this.state = {\n      hasSubmitted: false,\n      rating: 3\n    };\n    _this.render = _this.render.bind(_this);\n    _this.renderEnd = _this.renderEnd.bind(_this);\n    _this.addRatingMethod = _this.addRatingMethod.bind(_this);\n    return _this;\n  }\n\n  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(VideoPlayer, [{\n    key: 'addRatingMethod',\n    value: function addRatingMethod() {\n      var _this2 = this;\n\n      var url = this.props.url;\n      var rating = this.state.rating;\n      Object(__WEBPACK_IMPORTED_MODULE_8__modules_addRating__[\"a\" /* addRating */])(url, rating).then(function (result) {\n        console.log(result);\n        _this2.setState({\n          hasSubmitted: true\n        });\n      });\n    }\n  }, {\n    key: 'renderEnd',\n    value: function renderEnd() {\n      console.log(this.state);\n      if (this.state.hasSubmitted) {\n        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n          { textAlign: 'center', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 37\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Icon\"], { name: 'checkmark', size: 'huge', color: 'green', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 38\n            }\n          })\n        );\n      } else {\n        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          'div',\n          {\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 43\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n            { textAlign: 'center', __source: {\n                fileName: _jsxFileName,\n                lineNumber: 44\n              }\n            },\n            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Rating\"], { maxRating: 5, defaultRating: 3, icon: 'star', size: 'massive', onRate: this.handleRate, __source: {\n                fileName: _jsxFileName,\n                lineNumber: 45\n              }\n            })\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n            { textAlign: 'center', __source: {\n                fileName: _jsxFileName,\n                lineNumber: 47\n              }\n            },\n            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Button\"],\n              { primary: true, onClick: this.addRatingMethod, __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 48\n                }\n              },\n              'Enviar'\n            )\n          )\n        );\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n        'div',\n        {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 56\n          }\n        },\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n          { textAlign: 'center', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 57\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Header\"],\n            {\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 58\n              }\n            },\n            ' Video ',\n            this.props.id,\n            ' '\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_player___default.a, {\n            url: this.props.url,\n            controls: true,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 59\n            }\n          })\n        ),\n        this.renderEnd(),\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Divider\"], {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 65\n          }\n        })\n      );\n    }\n  }]);\n\n  return VideoPlayer;\n}(__WEBPACK_IMPORTED_MODULE_5_react__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (VideoPlayer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9WaWRlb1BsYXllci5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzPzJhZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YgZnJvbSAnYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9nZXQtcHJvdG90eXBlLW9mJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG52YXIgX2pzeEZpbGVOYW1lID0gJy9ob21lL21hcmNlbG8vRG9jdW1lbnRzL0luc3Blci82X1NlbWVzdHJlL1JlZGVzU29jaWFpcy9FZmVpdG9NYXRldXMvV2ViQXBwL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBHcmlkLCBJbWFnZSwgU2VnbWVudCwgSGVhZGVyLCBJY29uLCBDb250YWluZXIsIFJhdGluZywgRGl2aWRlciwgQnV0dG9uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XG5pbXBvcnQgeyBhZGRSYXRpbmcgfSBmcm9tICcuLi9tb2R1bGVzL2FkZFJhdGluZyc7XG5cbnZhciBWaWRlb1BsYXllciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhWaWRlb1BsYXllciwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVmlkZW9QbGF5ZXIocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVmlkZW9QbGF5ZXIpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFZpZGVvUGxheWVyLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKFZpZGVvUGxheWVyKSkuY2FsbCh0aGlzKSk7XG5cbiAgICBfdGhpcy5oYW5kbGVSYXRlID0gZnVuY3Rpb24gKGUsIF9yZWYpIHtcbiAgICAgIHZhciByYXRpbmcgPSBfcmVmLnJhdGluZyxcbiAgICAgICAgICBtYXhSYXRpbmcgPSBfcmVmLm1heFJhdGluZztcbiAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7IHJhdGluZzogcmF0aW5nLCBtYXhSYXRpbmc6IG1heFJhdGluZyB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBoYXNTdWJtaXR0ZWQ6IGZhbHNlLFxuICAgICAgcmF0aW5nOiAzXG4gICAgfTtcbiAgICBfdGhpcy5yZW5kZXIgPSBfdGhpcy5yZW5kZXIuYmluZChfdGhpcyk7XG4gICAgX3RoaXMucmVuZGVyRW5kID0gX3RoaXMucmVuZGVyRW5kLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLmFkZFJhdGluZ01ldGhvZCA9IF90aGlzLmFkZFJhdGluZ01ldGhvZC5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVmlkZW9QbGF5ZXIsIFt7XG4gICAga2V5OiAnYWRkUmF0aW5nTWV0aG9kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gYWRkUmF0aW5nTWV0aG9kKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciB1cmwgPSB0aGlzLnByb3BzLnVybDtcbiAgICAgIHZhciByYXRpbmcgPSB0aGlzLnN0YXRlLnJhdGluZztcbiAgICAgIGFkZFJhdGluZyh1cmwsIHJhdGluZykudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgaGFzU3VibWl0dGVkOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyRW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyRW5kKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5oYXNTdWJtaXR0ZWQpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgU2VnbWVudCxcbiAgICAgICAgICB7IHRleHRBbGlnbjogJ2NlbnRlcicsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEljb24sIHsgbmFtZTogJ2NoZWNrbWFyaycsIHNpemU6ICdodWdlJywgY29sb3I6ICdncmVlbicsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgU2VnbWVudCxcbiAgICAgICAgICAgIHsgdGV4dEFsaWduOiAnY2VudGVyJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJhdGluZywgeyBtYXhSYXRpbmc6IDUsIGRlZmF1bHRSYXRpbmc6IDMsIGljb246ICdzdGFyJywgc2l6ZTogJ21hc3NpdmUnLCBvblJhdGU6IHRoaXMuaGFuZGxlUmF0ZSwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ1XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgU2VnbWVudCxcbiAgICAgICAgICAgIHsgdGV4dEFsaWduOiAnY2VudGVyJywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQ3XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBCdXR0b24sXG4gICAgICAgICAgICAgIHsgcHJpbWFyeTogdHJ1ZSwgb25DbGljazogdGhpcy5hZGRSYXRpbmdNZXRob2QsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogNDhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdFbnZpYXInXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogNTZcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgU2VnbWVudCxcbiAgICAgICAgICB7IHRleHRBbGlnbjogJ2NlbnRlcicsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgSGVhZGVyLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogNThcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICcgVmlkZW8gJyxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICAnICdcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3RQbGF5ZXIsIHtcbiAgICAgICAgICAgIHVybDogdGhpcy5wcm9wcy51cmwsXG4gICAgICAgICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDU5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5yZW5kZXJFbmQoKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChEaXZpZGVyLCB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiA2NVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFZpZGVvUGxheWVyO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlb1BsYXllcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9jb21wb25lbnRzL1ZpZGVvUGxheWVyLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/VideoPlayer.js\n");

/***/ })

};