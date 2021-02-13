webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Link */ \"./components/Link.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navigation */ \"./components/Navigation.tsx\");\n\n\nvar _jsxFileName = \"/Users/zach/github/portfolio/pages/blog/index.tsx\",\n    _this2 = undefined;\n\n\n\n\n\n\nvar _StyledH = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h1\").withConfig({\n  displayName: \"blog___StyledH\",\n  componentId: \"gs9s1w-0\"\n})([\"text-align:center;\"]);\n\nvar _StyledDiv = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\").withConfig({\n  displayName: \"blog___StyledDiv\",\n  componentId: \"gs9s1w-1\"\n})([\"flex-direction:column;display:flex;max-width:1200px;margin:0 auto;\"]);\n\nvar __N_SSG = true;\nfunction BlogList(_ref) {\n  var _this = this;\n\n  var allPosts = _ref.allPosts;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Web Dev Blog - zzzachzzz\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"JavaScript, TypeScript, and React by example with code.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledH, {\n      children: \"Recent Posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledDiv, {\n      children: allPosts.map(function (post, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BlogPreview, {\n          title: post.title,\n          slug: post.slug\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 36\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n_c = BlogList;\n\nvar _StyledDiv2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\").withConfig({\n  displayName: \"blog___StyledDiv2\",\n  componentId: \"gs9s1w-2\"\n})([\"display:flex;align-items:center;\"]);\n\nvar _StyledSpan = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\").withConfig({\n  displayName: \"blog___StyledSpan\",\n  componentId: \"gs9s1w-3\"\n})([\"margin:1em;text-align:center;display:flex;align-items:center;\"]);\n\nvar _StyledDiv3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\").withConfig({\n  displayName: \"blog___StyledDiv3\",\n  componentId: \"gs9s1w-4\"\n})([\"display:flex;align-items:center;\"]);\n\nvar BlogPreview = function BlogPreview(_ref2) {\n  var title = _ref2.title,\n      slug = _ref2.slug;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BlogLink, {\n    href: \"/blog/\".concat(slug),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledDiv2, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Brace, {\n        color: \"prismRed\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Brace, {\n        color: \"prismBlue\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Brace, {\n        color: \"prismGreen\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, _this2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledSpan, {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledDiv3, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Brace, {\n        color: \"prismGreen\",\n        close: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Brace, {\n        color: \"prismBlue\",\n        close: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Brace, {\n        color: \"prismRed\",\n        close: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, _this2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }, _this2);\n};\n\n_c2 = BlogPreview;\n\nvar _StyledSpan2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\").withConfig({\n  displayName: \"blog___StyledSpan2\",\n  componentId: \"gs9s1w-5\"\n})([\"\", \"\"], function (p) {\n  return p._css2;\n});\n\nvar Brace = function Brace(_ref3) {\n  var color = _ref3.color,\n      _ref3$close = _ref3.close,\n      close = _ref3$close === void 0 ? false : _ref3$close;\n\n  var _css = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"css\"])([\"color:\", \";\"], function (_ref4) {\n    var theme = _ref4.theme;\n    return theme[color];\n  });\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledSpan2, {\n    _css2: _css,\n    children: close ? '}' : '{'\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, _this2);\n};\n\n_c3 = Brace;\nvar BlogLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).withConfig({\n  displayName: \"blog__BlogLink\",\n  componentId: \"gs9s1w-6\"\n})([\"min-height:60px;background:#272822;border-radius:0.3em;margin:1.5em;padding:1.1em;display:flex;flex-direction:row;justify-content:space-between;font-size:1.1em;color:white;&:hover{color:#ae81ff;}\"]);\n_c4 = BlogLink;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"BlogList\");\n$RefreshReg$(_c2, \"BlogPreview\");\n$RefreshReg$(_c3, \"Brace\");\n$RefreshReg$(_c4, \"BlogLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3g/MWRmMyJdLCJuYW1lcyI6WyJCbG9nTGlzdCIsImFsbFBvc3RzIiwibWFwIiwicG9zdCIsImkiLCJ0aXRsZSIsInNsdWciLCJCbG9nUHJldmlldyIsIkJyYWNlIiwiY29sb3IiLCJjbG9zZSIsIl9jc3MiLCJjc3MiLCJ0aGVtZSIsIkJsb2dMaW5rIiwic3R5bGVkIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFNZSxTQUFTQSxRQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBbkJDLFFBQW1CLFFBQW5CQSxRQUFtQjtBQUNwRCxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQ0UsWUFBSSxFQUFDLGFBRFA7QUFFRSxlQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFRRSxxRUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBVUU7QUFBQSxnQkFDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQO0FBQUEsNEJBQWEscUVBQUMsV0FBRDtBQUFhLGVBQUssRUFBRUQsSUFBSSxDQUFDRSxLQUF6QjtBQUFnQyxjQUFJLEVBQUVGLElBQUksQ0FBQ0c7QUFBM0MsV0FBc0RGLENBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWI7QUFBQSxPQUFiO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEO0tBakJ1QkosUTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQnhCLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR0YsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVUMsSUFBVixTQUFVQSxJQUFWO0FBQUEsc0JBQ2xCLHFFQUFDLFFBQUQ7QUFBVSxRQUFJLGtCQUFXQSxJQUFYLENBQWQ7QUFBQSw0QkFDRTtBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUscUVBQUMsS0FBRDtBQUFPLGFBQUssRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSxxRUFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQU1FO0FBQUEsZ0JBQWtGRDtBQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUFPRTtBQUFBLDhCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFLLEVBQUMsWUFBYjtBQUEwQixhQUFLO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxLQUFEO0FBQU8sYUFBSyxFQUFDLFdBQWI7QUFBeUIsYUFBSztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0UscUVBQUMsS0FBRDtBQUFPLGFBQUssRUFBQyxVQUFiO0FBQXdCLGFBQUs7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFEa0I7QUFBQSxDQUFwQjs7TUFBTUUsVzs7Ozs7Ozs7O0FBcUJOLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLFFBQTBDO0FBQUEsTUFBdkNDLEtBQXVDLFNBQXZDQSxLQUF1QztBQUFBLDBCQUFoQ0MsS0FBZ0M7QUFBQSxNQUFoQ0EsS0FBZ0MsNEJBQXhCLEtBQXdCOztBQUN0RCxNQUFNQyxJQUFJLEdBQUdDLDZEQUFILGtCQUFnQjtBQUFBLFFBQUdDLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWVBLEtBQUssQ0FBQ0osS0FBRCxDQUFwQjtBQUFBLEdBQWhCLENBQVY7O0FBQ0Esc0JBQ0U7QUFBQSxXQUFXRSxJQUFYO0FBQUEsY0FDR0QsS0FBSyxHQUFHLEdBQUgsR0FBUztBQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFLRCxDQVBEOztNQUFNRixLO0FBU04sSUFBTU0sUUFBUSxHQUFHQyxpRUFBTSxDQUFDQyx3REFBRCxDQUFUO0FBQUE7QUFBQTtBQUFBLDJNQUFkO01BQU1GLFEiLCJmaWxlIjoiLi9wYWdlcy9ibG9nL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsgY3NzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnQC9jb21wb25lbnRzL0xpbmsnO1xuaW1wb3J0IE5hdmlnYXRpb24gZnJvbSAnQC9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IHsgZ2V0QWxsUG9zdHMgfSBmcm9tICdAL2xpYi9hcGknO1xuaW1wb3J0IHsgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0J1xuXG50eXBlIFByb3BzID0gSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0xpc3QoeyBhbGxQb3N0cyB9OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldlYiBEZXYgQmxvZyAtIHp6emFjaHp6ejwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiSmF2YVNjcmlwdCwgVHlwZVNjcmlwdCwgYW5kIFJlYWN0IGJ5IGV4YW1wbGUgd2l0aCBjb2RlLlwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgPGgxIGNzcz1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5SZWNlbnQgUG9zdHM8L2gxPlxuICAgICAgPGRpdiBjc3M9XCJmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBkaXNwbGF5OiBmbGV4OyBtYXgtd2lkdGg6IDEyMDBweDsgbWFyZ2luOiAwIGF1dG87XCI+XG4gICAgICAgIHthbGxQb3N0cy5tYXAoKHBvc3QsIGkpID0+IDxCbG9nUHJldmlldyB0aXRsZT17cG9zdC50aXRsZX0gc2x1Zz17cG9zdC5zbHVnfSBrZXk9e2l9IC8+KX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBCbG9nUHJldmlldyA9ICh7IHRpdGxlLCBzbHVnIH06IHsgdGl0bGU6IHN0cmluZzsgc2x1Zzogc3RyaW5nOyB9KSA9PiAoXG4gIDxCbG9nTGluayBocmVmPXtgL2Jsb2cvJHtzbHVnfWB9PlxuICAgIDxkaXYgY3NzPVwiZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cbiAgICAgIDxCcmFjZSBjb2xvcj1cInByaXNtUmVkXCIgLz5cbiAgICAgIDxCcmFjZSBjb2xvcj1cInByaXNtQmx1ZVwiIC8+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbUdyZWVuXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8c3BhbiBjc3M9XCJtYXJnaW46IDFlbTsgdGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPnt0aXRsZX08L3NwYW4+XG4gICAgPGRpdiBjc3M9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxuICAgICAgPEJyYWNlIGNvbG9yPVwicHJpc21HcmVlblwiIGNsb3NlIC8+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbUJsdWVcIiBjbG9zZSAvPlxuICAgICAgPEJyYWNlIGNvbG9yPVwicHJpc21SZWRcIiBjbG9zZSAvPlxuICAgIDwvZGl2PlxuICA8L0Jsb2dMaW5rPlxuKTtcblxudHlwZSBCcmFjZVByb3BzID0ge1xuICBjb2xvcjogJ3ByaXNtUmVkJyB8ICdwcmlzbUJsdWUnIHwgJ3ByaXNtR3JlZW4nO1xuICBjbG9zZT86IGJvb2xlYW47XG59O1xuXG5jb25zdCBCcmFjZSA9ICh7IGNvbG9yLCBjbG9zZSA9IGZhbHNlIH06IEJyYWNlUHJvcHMpID0+IHtcbiAgY29uc3QgX2NzcyA9IGNzc2Bjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZVtjb2xvcl19O2A7XG4gIHJldHVybiAoXG4gICAgPHNwYW4gY3NzPXtfY3NzfT5cbiAgICAgIHtjbG9zZSA/ICd9JyA6ICd7J31cbiAgICA8L3NwYW4+XG4gICk7XG59O1xuXG5jb25zdCBCbG9nTGluayA9IHN0eWxlZChMaW5rKWBcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzI3MjgyMjtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIG1hcmdpbjogMS41ZW07XG4gIHBhZGRpbmc6IDEuMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2FlODFmZjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfVxuICB9O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})