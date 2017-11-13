exports.id = 0;
exports.modules = {

/***/ "./src/components/foods/AddFood.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__ = __webpack_require__(\"babel-runtime/core-js/object/get-prototype-of\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(\"babel-runtime/helpers/classCallCheck\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__ = __webpack_require__(\"babel-runtime/helpers/createClass\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(\"babel-runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__ = __webpack_require__(\"babel-runtime/helpers/inherits\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(\"react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__ = __webpack_require__(\"semantic-ui-react\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__(\"moment\");\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_Controller__ = __webpack_require__(\"./src/modules/Controller.js\");\n\n\n\n\n\nvar _jsxFileName = '/home/marcelo/Documents/Insper/6_Semestre/BigData/Projeto1/WebApp/src/components/foods/AddFood.js';\n\n\n\n\n\n\n\nvar AddFood = function (_Component) {\n  __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_inherits___default()(AddFood, _Component);\n\n  function AddFood(props) {\n    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, AddFood);\n\n    var _this = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_possibleConstructorReturn___default()(this, (AddFood.__proto__ || __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_prototype_of___default()(AddFood)).call(this, props));\n\n    _this._handleChangeName = function (e, _ref) {\n      var name = _ref.name,\n          value = _ref.value;\n      return _this.setState({ name: value });\n    };\n\n    _this._handleChangeidSpecies = function (e, _ref2) {\n      var idSpecies = _ref2.idSpecies,\n          value = _ref2.value;\n      return _this.setState({ idSpecies: value });\n    };\n\n    _this._handleChangeQuantity = function (e, _ref3) {\n      var quantity = _ref3.quantity,\n          value = _ref3.value;\n      return _this.setState({ quantity: value });\n    };\n\n    _this.handleSubmit = function () {\n      var _this$state = _this.state,\n          name = _this$state.name,\n          idSpecies = _this$state.idSpecies,\n          quantity = _this$state.quantity;\n\n      Object(__WEBPACK_IMPORTED_MODULE_8__modules_Controller__[\"b\" /* addFood */])(name, idSpecies, quantity).then(function (result) {\n        _this.setState({\n          fetching: false\n        });\n        if (!result.problem) {\n          _this.setState({\n            success: true\n          });\n        } else {\n          _this.setState({\n            error: true\n          });\n        }\n      });\n    };\n\n    _this.state = {\n      fetching: false,\n      fetchingSpecies: false,\n      success: false,\n      error: false,\n      errorSpecies: false,\n      species: []\n    };\n    _this._renderForm = _this._renderForm.bind(_this);\n    return _this;\n  }\n\n  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_createClass___default()(AddFood, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      this.setState({\n        fetchingSpecies: true\n      });\n      Object(__WEBPACK_IMPORTED_MODULE_8__modules_Controller__[\"o\" /* getSpecies */])().then(function (result) {\n        if (result.problem) {\n          _this2.setState({\n            errorSpecies: true,\n            fetchingSpecies: false\n          });\n        } else {\n          _this2.setState({\n            errorSpecies: false,\n            species: result.data,\n            fetchingSpecies: false\n          });\n        }\n      });\n    }\n  }, {\n    key: '_formatSpeciesList',\n    value: function _formatSpeciesList(species) {\n      var result = [];\n      species.map(function (item) {\n        var obj = {\n          key: item.idSpecies.toString(),\n          value: item.idSpecies.toString(),\n          text: item.name\n        };\n        result.push(obj);\n        return item;\n      });\n      return result;\n    }\n\n    /**\n     * Input Handlers\n     *\n     * @memberof addFood\n     */\n\n    /**\n     *\n     * Adiciona um cliente\n     */\n\n  }, {\n    key: '_renderMessages',\n    value: function _renderMessages() {\n      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n        'div',\n        {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 106\n          }\n        },\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Message\"], {\n          success: true,\n          header: 'Comida Adicionada',\n          content: 'Voc\\xEA adicionou uma comida com sucesso',\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 107\n          }\n        }),\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Message\"], {\n          error: true,\n          header: 'Erro',\n          content: 'Houve um erro ao tentar adicionar uma comida',\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 112\n          }\n        })\n      );\n    }\n  }, {\n    key: '_renderForm',\n    value: function _renderForm() {\n      var _state = this.state,\n          name = _state.name,\n          idSpecies = _state.idSpecies,\n          quantity = _state.quantity;\n\n      var species = this._formatSpeciesList(this.state.species);\n      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Form\"],\n        {\n          loading: this.state.fetching,\n          success: this.state.success,\n          error: this.state.error,\n          onSubmit: this.handleSubmit,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 125\n          }\n        },\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Form\"].Field,\n          {\n            required: true,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 131\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            'label',\n            {\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 134\n              }\n            },\n            'Nome'\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Form\"].Input, { placeholder: 'Nome', name: 'name', onChange: this._handleChangeName, __source: {\n              fileName: _jsxFileName,\n              lineNumber: 135\n            }\n          })\n        ),\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Form\"].Field,\n          {\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 137\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            'label',\n            {\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 138\n              }\n            },\n            'Esp\\xE9cie'\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Select\"], { loading: this.state.fetchingSpecies, placeholder: 'Esp\\xE9cie', options: species, onChange: this._handleChangeSpecies, __source: {\n              fileName: _jsxFileName,\n              lineNumber: 139\n            }\n          })\n        ),\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Form\"].Field,\n          {\n            required: true,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 141\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            'label',\n            {\n              __source: {\n                fileName: _jsxFileName,\n                lineNumber: 144\n              }\n            },\n            'Quantidade'\n          ),\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Form\"].Input, { placeholder: 'Quantidade', name: 'quantidade', onChange: this._handleChangeQuantity, __source: {\n              fileName: _jsxFileName,\n              lineNumber: 145\n            }\n          })\n        ),\n        this._renderMessages(),\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Button\"],\n          { type: 'submit', __source: {\n              fileName: _jsxFileName,\n              lineNumber: 148\n            }\n          },\n          'Adicionar Comida'\n        )\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log(this.state);\n      return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n        __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Grid\"],\n        {\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 156\n          }\n        },\n        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n          __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Grid\"].Row,\n          {\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 157\n            }\n          },\n          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n            __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Grid\"].Column,\n            { width: 4, __source: {\n                fileName: _jsxFileName,\n                lineNumber: 158\n              }\n            },\n            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(\n              __WEBPACK_IMPORTED_MODULE_6_semantic_ui_react__[\"Segment\"],\n              {\n                __source: {\n                  fileName: _jsxFileName,\n                  lineNumber: 159\n                }\n              },\n              this._renderForm()\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return AddFood;\n}(__WEBPACK_IMPORTED_MODULE_5_react__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (AddFood);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9mb29kcy9BZGRGb29kLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vZHMvQWRkRm9vZC5qcz9iOWM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfT2JqZWN0JGdldFByb3RvdHlwZU9mIGZyb20gJ2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZ2V0LXByb3RvdHlwZS1vZic7XG5pbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xudmFyIF9qc3hGaWxlTmFtZSA9ICcvaG9tZS9tYXJjZWxvL0RvY3VtZW50cy9JbnNwZXIvNl9TZW1lc3RyZS9CaWdEYXRhL1Byb2pldG8xL1dlYkFwcC9zcmMvY29tcG9uZW50cy9mb29kcy9BZGRGb29kLmpzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCdXR0b24sIENoZWNrYm94LCBGb3JtLCBNZXNzYWdlLCBEaW1tZXIsIExvYWRlciwgU2VnbWVudCwgR3JpZCwgU2VsZWN0IH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7IGFkZEZvb2QsIGdldFNwZWNpZXMgfSBmcm9tICcuLi8uLi9tb2R1bGVzL0NvbnRyb2xsZXInO1xuXG52YXIgQWRkRm9vZCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhBZGRGb29kLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBBZGRGb29kKHByb3BzKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEFkZEZvb2QpO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEFkZEZvb2QuX19wcm90b19fIHx8IF9PYmplY3QkZ2V0UHJvdG90eXBlT2YoQWRkRm9vZCkpLmNhbGwodGhpcywgcHJvcHMpKTtcblxuICAgIF90aGlzLl9oYW5kbGVDaGFuZ2VOYW1lID0gZnVuY3Rpb24gKGUsIF9yZWYpIHtcbiAgICAgIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgICAgIHZhbHVlID0gX3JlZi52YWx1ZTtcbiAgICAgIHJldHVybiBfdGhpcy5zZXRTdGF0ZSh7IG5hbWU6IHZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlQ2hhbmdlaWRTcGVjaWVzID0gZnVuY3Rpb24gKGUsIF9yZWYyKSB7XG4gICAgICB2YXIgaWRTcGVjaWVzID0gX3JlZjIuaWRTcGVjaWVzLFxuICAgICAgICAgIHZhbHVlID0gX3JlZjIudmFsdWU7XG4gICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoeyBpZFNwZWNpZXM6IHZhbHVlIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5faGFuZGxlQ2hhbmdlUXVhbnRpdHkgPSBmdW5jdGlvbiAoZSwgX3JlZjMpIHtcbiAgICAgIHZhciBxdWFudGl0eSA9IF9yZWYzLnF1YW50aXR5LFxuICAgICAgICAgIHZhbHVlID0gX3JlZjMudmFsdWU7XG4gICAgICByZXR1cm4gX3RoaXMuc2V0U3RhdGUoeyBxdWFudGl0eTogdmFsdWUgfSk7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVN1Ym1pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBfdGhpcyRzdGF0ZSA9IF90aGlzLnN0YXRlLFxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRzdGF0ZS5uYW1lLFxuICAgICAgICAgIGlkU3BlY2llcyA9IF90aGlzJHN0YXRlLmlkU3BlY2llcyxcbiAgICAgICAgICBxdWFudGl0eSA9IF90aGlzJHN0YXRlLnF1YW50aXR5O1xuXG4gICAgICBhZGRGb29kKG5hbWUsIGlkU3BlY2llcywgcXVhbnRpdHkpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmV0Y2hpbmc6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3VsdC5wcm9ibGVtKSB7XG4gICAgICAgICAgX3RoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc3VjY2VzczogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZldGNoaW5nOiBmYWxzZSxcbiAgICAgIGZldGNoaW5nU3BlY2llczogZmFsc2UsXG4gICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgIGVycm9yOiBmYWxzZSxcbiAgICAgIGVycm9yU3BlY2llczogZmFsc2UsXG4gICAgICBzcGVjaWVzOiBbXVxuICAgIH07XG4gICAgX3RoaXMuX3JlbmRlckZvcm0gPSBfdGhpcy5fcmVuZGVyRm9ybS5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQWRkRm9vZCwgW3tcbiAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBmZXRjaGluZ1NwZWNpZXM6IHRydWVcbiAgICAgIH0pO1xuICAgICAgZ2V0U3BlY2llcygpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0LnByb2JsZW0pIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgZXJyb3JTcGVjaWVzOiB0cnVlLFxuICAgICAgICAgICAgZmV0Y2hpbmdTcGVjaWVzOiBmYWxzZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzMi5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvclNwZWNpZXM6IGZhbHNlLFxuICAgICAgICAgICAgc3BlY2llczogcmVzdWx0LmRhdGEsXG4gICAgICAgICAgICBmZXRjaGluZ1NwZWNpZXM6IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19mb3JtYXRTcGVjaWVzTGlzdCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9mb3JtYXRTcGVjaWVzTGlzdChzcGVjaWVzKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICBzcGVjaWVzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2YXIgb2JqID0ge1xuICAgICAgICAgIGtleTogaXRlbS5pZFNwZWNpZXMudG9TdHJpbmcoKSxcbiAgICAgICAgICB2YWx1ZTogaXRlbS5pZFNwZWNpZXMudG9TdHJpbmcoKSxcbiAgICAgICAgICB0ZXh0OiBpdGVtLm5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0LnB1c2gob2JqKTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5wdXQgSGFuZGxlcnNcbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBhZGRGb29kXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEFkaWNpb25hIHVtIGNsaWVudGVcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiAnX3JlbmRlck1lc3NhZ2VzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlbmRlck1lc3NhZ2VzKCkge1xuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7XG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDZcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTWVzc2FnZSwge1xuICAgICAgICAgIHN1Y2Nlc3M6IHRydWUsXG4gICAgICAgICAgaGVhZGVyOiAnQ29taWRhIEFkaWNpb25hZGEnLFxuICAgICAgICAgIGNvbnRlbnQ6ICdWb2NcXHhFQSBhZGljaW9ub3UgdW1hIGNvbWlkYSBjb20gc3VjZXNzbycsXG4gICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICBsaW5lTnVtYmVyOiAxMDdcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KE1lc3NhZ2UsIHtcbiAgICAgICAgICBlcnJvcjogdHJ1ZSxcbiAgICAgICAgICBoZWFkZXI6ICdFcnJvJyxcbiAgICAgICAgICBjb250ZW50OiAnSG91dmUgdW0gZXJybyBhbyB0ZW50YXIgYWRpY2lvbmFyIHVtYSBjb21pZGEnLFxuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMTEyXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdfcmVuZGVyRm9ybScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9yZW5kZXJGb3JtKCkge1xuICAgICAgdmFyIF9zdGF0ZSA9IHRoaXMuc3RhdGUsXG4gICAgICAgICAgbmFtZSA9IF9zdGF0ZS5uYW1lLFxuICAgICAgICAgIGlkU3BlY2llcyA9IF9zdGF0ZS5pZFNwZWNpZXMsXG4gICAgICAgICAgcXVhbnRpdHkgPSBfc3RhdGUucXVhbnRpdHk7XG5cbiAgICAgIHZhciBzcGVjaWVzID0gdGhpcy5fZm9ybWF0U3BlY2llc0xpc3QodGhpcy5zdGF0ZS5zcGVjaWVzKTtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBGb3JtLFxuICAgICAgICB7XG4gICAgICAgICAgbG9hZGluZzogdGhpcy5zdGF0ZS5mZXRjaGluZyxcbiAgICAgICAgICBzdWNjZXNzOiB0aGlzLnN0YXRlLnN1Y2Nlc3MsXG4gICAgICAgICAgZXJyb3I6IHRoaXMuc3RhdGUuZXJyb3IsXG4gICAgICAgICAgb25TdWJtaXQ6IHRoaXMuaGFuZGxlU3VibWl0LFxuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMTI1XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEZvcm0uRmllbGQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMzFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnbGFiZWwnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBfX3NvdXJjZToge1xuICAgICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTM0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnTm9tZSdcbiAgICAgICAgICApLFxuICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRm9ybS5JbnB1dCwgeyBwbGFjZWhvbGRlcjogJ05vbWUnLCBuYW1lOiAnbmFtZScsIG9uQ2hhbmdlOiB0aGlzLl9oYW5kbGVDaGFuZ2VOYW1lLCBfX3NvdXJjZToge1xuICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICBsaW5lTnVtYmVyOiAxMzVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEZvcm0uRmllbGQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMTM3XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDEzOFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ0VzcFxceEU5Y2llJ1xuICAgICAgICAgICksXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTZWxlY3QsIHsgbG9hZGluZzogdGhpcy5zdGF0ZS5mZXRjaGluZ1NwZWNpZXMsIHBsYWNlaG9sZGVyOiAnRXNwXFx4RTljaWUnLCBvcHRpb25zOiBzcGVjaWVzLCBvbkNoYW5nZTogdGhpcy5faGFuZGxlQ2hhbmdlU3BlY2llcywgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMTM5XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgKSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBGb3JtLkZpZWxkLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgZmlsZU5hbWU6IF9qc3hGaWxlTmFtZSxcbiAgICAgICAgICAgICAgbGluZU51bWJlcjogMTQxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ2xhYmVsJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0NFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ1F1YW50aWRhZGUnXG4gICAgICAgICAgKSxcbiAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KEZvcm0uSW5wdXQsIHsgcGxhY2Vob2xkZXI6ICdRdWFudGlkYWRlJywgbmFtZTogJ3F1YW50aWRhZGUnLCBvbkNoYW5nZTogdGhpcy5faGFuZGxlQ2hhbmdlUXVhbnRpdHksIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0NVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICksXG4gICAgICAgIHRoaXMuX3JlbmRlck1lc3NhZ2VzKCksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQnV0dG9uLFxuICAgICAgICAgIHsgdHlwZTogJ3N1Ym1pdCcsIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE0OFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgJ0FkaWNpb25hciBDb21pZGEnXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgR3JpZCxcbiAgICAgICAge1xuICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgbGluZU51bWJlcjogMTU2XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgIEdyaWQuUm93LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBfanN4RmlsZU5hbWUsXG4gICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE1N1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIEdyaWQuQ29sdW1uLFxuICAgICAgICAgICAgeyB3aWR0aDogNCwgX19zb3VyY2U6IHtcbiAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgIGxpbmVOdW1iZXI6IDE1OFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICAgU2VnbWVudCxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIF9fc291cmNlOiB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZTogX2pzeEZpbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgbGluZU51bWJlcjogMTU5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB0aGlzLl9yZW5kZXJGb3JtKClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIEFkZEZvb2Q7XG59KENvbXBvbmVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZvb2Q7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvY29tcG9uZW50cy9mb29kcy9BZGRGb29kLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9jb21wb25lbnRzL2Zvb2RzL0FkZEZvb2QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/foods/AddFood.js\n");

/***/ })

};