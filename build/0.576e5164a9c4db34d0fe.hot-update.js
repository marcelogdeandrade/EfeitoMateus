exports.id = 0;
exports.modules = {

/***/ "./src/components/Home.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(\"babel-runtime/core-js/object/get-prototype-of\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(\"babel-runtime/helpers/classCallCheck\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(\"babel-runtime/helpers/createClass\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(\"babel-runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(\"babel-runtime/helpers/inherits\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(\"react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__ = __webpack_require__(\"semantic-ui-react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AddSpecie__ = __webpack_require__(\"./src/components/AddSpecie.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ListSpecies__ = __webpack_require__(\"./src/components/ListSpecies.js\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Gabi__ = __webpack_require__(\"./src/components/Gabi.js\");\n\n\n\n\n\nvar _jsxFileName = '/home/marcelo/Documents/Insper/6_Semestre/BigData/Projeto1/WebApp/src/components/Home.js';\n\n\n\n\n\n\nvar Home = function (_Component) {\n  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(Home, _Component);\n\n  function Home() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, Home);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (_ref = Home.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleItemClick = function (e, _ref2) {\n      var name = _ref2.name;\n      return _this.setState({ activeItem: name });\n    }, _temp), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(_this, _ret);\n  }\n\n  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(Home, [{\n    key: 'renderContent',\n    value: function renderContent() {\n      if (this.state.activeItem === 'list_specie') {\n        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__ListSpecies__[\"a\" /* default */], {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 15\n          }\n        });\n      }if (this.state.activeItem === 'add_specie') {\n        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__AddSpecie__[\"a\" /* default */], {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 19\n          }\n        });\n      }if (this.state.activeItem === 'gabi') {\n        return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Gabi__[\"a\" /* default */], {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 23\n          }\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var activeItem = this.state.activeItem;\n\n\n      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n        {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 32\n          }\n        },\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Menu\"],\n          {\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 33\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Menu\"].Item,\n            { name: 'list_specie', active: activeItem === 'list_specie', onClick: this.handleItemClick, __source: {\n                fileName: _jsxFileName,\n                lineNumber: 34\n              }\n            },\n            'Listar Esp\\xE9cies'\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Menu\"].Item,\n            { name: 'add_specie', active: activeItem === 'add_specie', onClick: this.handleItemClick, __source: {\n                fileName: _jsxFileName,\n                lineNumber: 38\n              }\n            },\n            'Adicionar Esp\\xE9cie'\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Menu\"].Item,\n            { name: 'add_specie', active: activeItem === 'gabi', onClick: this.handleItemClick, __source: {\n                fileName: _jsxFileName,\n                lineNumber: 42\n              }\n            },\n            'Gabi'\n          )\n        ),\n        this.renderContent()\n      );\n    }\n  }]);\n\n  return Home;\n}(__WEBPACK_IMPORTED_MODULE_5_react__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvSG9tZS5qcz82YTc5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICcvaG9tZS9tYXJjZWxvL0RvY3VtZW50cy9JbnNwZXIvNl9TZW1lc3RyZS9CaWdEYXRhL1Byb2pldG8xL1dlYkFwcC9zcmMvY29tcG9uZW50cy9Ib21lLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNZW51LCBTZWdtZW50IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IEFkZFNwZWNpZSBmcm9tICcuL0FkZFNwZWNpZSc7XG5pbXBvcnQgTGlzdFNwZWNpZXMgZnJvbSAnLi9MaXN0U3BlY2llcyc7XG5pbXBvcnQgR2FiaSBmcm9tICcuL0dhYmknO1xuXG52YXIgSG9tZSA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhIb21lLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBIb21lKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIF90ZW1wLCBfdGhpcywgX3JldDtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBIb21lKTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYgPSBIb21lLl9fcHJvdG9fXyB8fCBfT2JqZWN0JGdldFByb3RvdHlwZU9mKEhvbWUpKS5jYWxsLmFwcGx5KF9yZWYsIFt0aGlzXS5jb25jYXQoYXJncykpKSwgX3RoaXMpLCBfdGhpcy5zdGF0ZSA9IHt9LCBfdGhpcy5oYW5kbGVJdGVtQ2xpY2sgPSBmdW5jdGlvbiAoZSwgX3JlZjIpIHtcbiAgICAgIHZhciBuYW1lID0gX3JlZjIubmFtZTtcbiAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZUl0ZW06IG5hbWUgfSk7XG4gICAgfSwgX3RlbXApLCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihfdGhpcywgX3JldCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoSG9tZSwgW3tcbiAgICBrZXk6ICdyZW5kZXJDb250ZW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyQ29udGVudCgpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUl0ZW0gPT09ICdsaXN0X3NwZWNpZScpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlzdFNwZWNpZXMsIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE1XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1pZiAodGhpcy5zdGF0ZS5hY3RpdmVJdGVtID09PSAnYWRkX3NwZWNpZScpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQWRkU3BlY2llLCB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAxOVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9aWYgKHRoaXMuc3RhdGUuYWN0aXZlSXRlbSA9PT0gJ2dhYmknKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEdhYmksIHtcbiAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgIGxpbmVOdW1iZXI6IDIzXG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICB2YXIgYWN0aXZlSXRlbSA9IHRoaXMuc3RhdGUuYWN0aXZlSXRlbTtcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgU2VnbWVudCxcbiAgICAgICAge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMzJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgTWVudSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAzM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIE1lbnUuSXRlbSxcbiAgICAgICAgICAgIHsgbmFtZTogJ2xpc3Rfc3BlY2llJywgYWN0aXZlOiBhY3RpdmVJdGVtID09PSAnbGlzdF9zcGVjaWUnLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUl0ZW1DbGljaywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDM0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnTGlzdGFyIEVzcFxceEU5Y2llcydcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBNZW51Lkl0ZW0sXG4gICAgICAgICAgICB7IG5hbWU6ICdhZGRfc3BlY2llJywgYWN0aXZlOiBhY3RpdmVJdGVtID09PSAnYWRkX3NwZWNpZScsIG9uQ2xpY2s6IHRoaXMuaGFuZGxlSXRlbUNsaWNrLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMzhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdBZGljaW9uYXIgRXNwXFx4RTljaWUnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgTWVudS5JdGVtLFxuICAgICAgICAgICAgeyBuYW1lOiAnYWRkX3NwZWNpZScsIGFjdGl2ZTogYWN0aXZlSXRlbSA9PT0gJ2dhYmknLCBvbkNsaWNrOiB0aGlzLmhhbmRsZUl0ZW1DbGljaywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDQyXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnR2FiaSdcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBIb21lO1xufShDb21wb25lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2NvbXBvbmVudHMvSG9tZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvY29tcG9uZW50cy9Ib21lLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Home.js\n");

/***/ })

};