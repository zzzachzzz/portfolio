webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.tsx":
/*!******************************!*\
  !*** ./pages/blog/index.tsx ***!
  \******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSG\", function() { return __N_SSG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return BlogList; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Link */ \"./components/Link.tsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Navigation */ \"./components/Navigation.tsx\");\n\n\nvar _jsxFileName = \"/Users/zach/github/portfolio/pages/blog/index.tsx\",\n    _this2 = undefined;\n\n\n\n\n\n\nvar _StyledH = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"h1\").withConfig({\n  displayName: \"blog___StyledH\",\n  componentId: \"gs9s1w-0\"\n})([\"text-align:center;\"]);\n\nvar __N_SSG = true;\nfunction BlogList(_ref) {\n  var _this = this;\n\n  var allPosts = _ref.allPosts;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Web Dev Blog - zzzachzzz\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: \"JavaScript, TypeScript, and React by example with code.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Navigation__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledH, {\n      children: \"Recent Posts\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        flexDirection: 'column',\n        display: 'flex',\n        maxWidth: '1200px'\n      },\n      children: allPosts.map(function (post, i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BlogPreview, {\n          title: post.title,\n          slug: post.slug\n        }, i, false, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 36\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, this);\n}\n_c = BlogList;\n\nvar _StyledSpan = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\").withConfig({\n  displayName: \"blog___StyledSpan\",\n  componentId: \"gs9s1w-1\"\n})([\"\", \"\"], function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.prismRed;\n});\n\nvar _StyledSpan2 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\").withConfig({\n  displayName: \"blog___StyledSpan2\",\n  componentId: \"gs9s1w-2\"\n})([\"\", \"\"], function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.prismBlue;\n});\n\nvar _StyledSpan3 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\").withConfig({\n  displayName: \"blog___StyledSpan3\",\n  componentId: \"gs9s1w-3\"\n})([\"\", \"\"], function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.prismGreen;\n});\n\nvar _StyledSpan4 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\").withConfig({\n  displayName: \"blog___StyledSpan4\",\n  componentId: \"gs9s1w-4\"\n})([\"\", \"\"], function (_ref5) {\n  var theme = _ref5.theme;\n  return theme.prismGreen;\n});\n\nvar _StyledSpan5 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\").withConfig({\n  displayName: \"blog___StyledSpan5\",\n  componentId: \"gs9s1w-5\"\n})([\"\", \"\"], function (_ref6) {\n  var theme = _ref6.theme;\n  return theme.prismBlue;\n});\n\nvar BlogPreview = function BlogPreview(_ref7) {\n  var title = _ref7.title,\n      slug = _ref7.slug;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(BlogLink, {\n    href: \"/blog/\".concat(slug),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        fontSize: '1em',\n        display: 'flex',\n        alignItems: 'center'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledSpan, {\n        children: \"{\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledSpan2, {\n        children: \"{\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledSpan3, {\n        children: \"{\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 7\n      }, _this2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      style: {\n        marginLeft: '1em',\n        marginRight: '1em',\n        textAlign: 'center',\n        display: 'flex',\n        alignItems: 'center'\n      },\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 5\n    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      style: {\n        fontSize: '1em',\n        display: 'flex',\n        alignItems: 'center'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledSpan4, {\n        children: \"}\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 7\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledSpan5, {\n        children: \"}\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 7\n      }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Brace, {\n        color: \"prismRed\",\n        close: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 7\n      }, _this2)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 5\n    }, _this2)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 3\n  }, _this2);\n};\n\n_c2 = BlogPreview;\n\nvar _StyledSpan6 = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"span\").withConfig({\n  displayName: \"blog___StyledSpan6\",\n  componentId: \"gs9s1w-6\"\n})([\"color:\", \";\"], function (_ref8) {\n  var theme = _ref8.theme;\n  return theme['prismRed'];\n});\n\nvar Brace = function Brace(_ref9) {\n  var color = _ref9.color,\n      _ref9$close = _ref9.close,\n      close = _ref9$close === void 0 ? false : _ref9$close;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_StyledSpan6, {\n    children: close ? '}' : '{'\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 3\n  }, _this2);\n};\n\n_c3 = Brace;\nvar BlogLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_components_Link__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).withConfig({\n  displayName: \"blog__BlogLink\",\n  componentId: \"gs9s1w-7\"\n})([\"min-height:60px;background:#272822;border-radius:0.3em;margin:1.5em;padding:1.1em;display:flex;flex-direction:row;justify-content:space-between;font-size:1.1em;color:white;&:hover{color:#ae81ff;}\"]);\n_c4 = BlogLink;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"BlogList\");\n$RefreshReg$(_c2, \"BlogPreview\");\n$RefreshReg$(_c3, \"Brace\");\n$RefreshReg$(_c4, \"BlogLink\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC50c3g/MWRmMyJdLCJuYW1lcyI6WyJCbG9nTGlzdCIsImFsbFBvc3RzIiwiZmxleERpcmVjdGlvbiIsImRpc3BsYXkiLCJtYXhXaWR0aCIsIm1hcCIsInBvc3QiLCJpIiwidGl0bGUiLCJzbHVnIiwidGhlbWUiLCJwcmlzbVJlZCIsInByaXNtQmx1ZSIsInByaXNtR3JlZW4iLCJCbG9nUHJldmlldyIsImZvbnRTaXplIiwiYWxpZ25JdGVtcyIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInRleHRBbGlnbiIsIkJyYWNlIiwiY29sb3IiLCJjbG9zZSIsIkJsb2dMaW5rIiwic3R5bGVkIiwiTGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBTWUsU0FBU0EsUUFBVCxPQUF1QztBQUFBOztBQUFBLE1BQW5CQyxRQUFtQixRQUFuQkEsUUFBbUI7QUFDcEQsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUNFLFlBQUksRUFBQyxhQURQO0FBRUUsZUFBTyxFQUFDO0FBRlY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBU0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVVFO0FBQUssV0FBSyxFQUFFO0FBQUNDLHFCQUFhLEVBQUUsUUFBaEI7QUFBMEJDLGVBQU8sRUFBRSxNQUFuQztBQUEyQ0MsZ0JBQVEsRUFBRTtBQUFyRCxPQUFaO0FBQUEsZ0JBQ0dILFFBQVEsQ0FBQ0ksR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBT0MsQ0FBUDtBQUFBLDRCQUFhLHFFQUFDLFdBQUQ7QUFBYSxlQUFL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QSwyTUFBZDtNQUFNRixRIiwiZmlsZSI6Ii4vcGFnZXMvYmxvZy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkLCB7IGNzcyB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBMaW5rIGZyb20gJ0AvY29tcG9uZW50cy9MaW5rJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0AvY29tcG9uZW50cy9OYXZpZ2F0aW9uJztcbmltcG9ydCB7IGdldEFsbFBvc3RzIH0gZnJvbSAnQC9saWIvYXBpJztcbmltcG9ydCB7IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlIH0gZnJvbSAnbmV4dCdcblxudHlwZSBQcm9wcyA9IEluZmVyR2V0U3RhdGljUHJvcHNUeXBlPHR5cGVvZiBnZXRTdGF0aWNQcm9wcz47XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJsb2dMaXN0KHsgYWxsUG9zdHMgfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5XZWIgRGV2IEJsb2cgLSB6enphY2h6eno8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkphdmFTY3JpcHQsIFR5cGVTY3JpcHQsIGFuZCBSZWFjdCBieSBleGFtcGxlIHdpdGggY29kZS5cIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxoMSBjc3M9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7XCI+UmVjZW50IFBvc3RzPC9oMT5cbiAgICAgIDxkaXYgc3R5bGU9e3tmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgZGlzcGxheTogJ2ZsZXgnLCBtYXhXaWR0aDogJzEyMDBweCd9fT5cbiAgICAgICAge2FsbFBvc3RzLm1hcCgocG9zdCwgaSkgPT4gPEJsb2dQcmV2aWV3IHRpdGxlPXtwb3N0LnRpdGxlfSBzbHVnPXtwb3N0LnNsdWd9IGtleT17aX0gLz4pfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IEJsb2dQcmV2aWV3ID0gKHsgdGl0bGUsIHNsdWcgfTogeyB0aXRsZTogc3RyaW5nOyBzbHVnOiBzdHJpbmc7IH0pID0+IChcbiAgPEJsb2dMaW5rIGhyZWY9e2AvYmxvZy8ke3NsdWd9YH0+XG4gICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMWVtJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgPHNwYW4gY3NzPXtjc3NgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmlzbVJlZH1gfT57YHtgfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNzcz17Y3NzYCR7KHsgdGhlbWUgfSkgPT4gdGhlbWUucHJpc21CbHVlfWB9Pntge2B9PC9zcGFuPlxuICAgICAgPHNwYW4gY3NzPXtjc3NgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmlzbUdyZWVufWB9Pntge2B9PC9zcGFuPlxuICAgIDwvZGl2PlxuICAgIDxwIHN0eWxlPXt7bWFyZ2luTGVmdDogJzFlbScsIG1hcmdpblJpZ2h0OiAnMWVtJywgdGV4dEFsaWduOiAnY2VudGVyJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319Pnt0aXRsZX08L3A+XG4gICAgPGRpdiBzdHlsZT17e2ZvbnRTaXplOiAnMWVtJywgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgPHNwYW4gY3NzPXtjc3NgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmlzbUdyZWVufWB9PntgfWB9PC9zcGFuPlxuICAgICAgPHNwYW4gY3NzPXtjc3NgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5wcmlzbUJsdWV9YH0+e2B9YH08L3NwYW4+XG4gICAgICA8QnJhY2UgY29sb3I9XCJwcmlzbVJlZFwiIGNsb3NlIC8+XG4gICAgPC9kaXY+XG4gIDwvQmxvZ0xpbms+XG4pO1xuXG50eXBlIEJyYWNlUHJvcHMgPSB7XG4gIGNvbG9yOiAncHJpc21SZWQnIHwgJ3ByaXNtQmx1ZScgfCAncHJpc21HcmVlbic7XG4gIGNsb3NlPzogYm9vbGVhbjtcbn07XG5cbmNvbnN0IEJyYWNlID0gKHsgY29sb3IsIGNsb3NlID0gZmFsc2UgfTogQnJhY2VQcm9wcykgPT4gKFxuICA8c3BhbiBjc3M9e2Nzc2Bjb2xvcjogJHsoeyB0aGVtZSB9KSA9PiB0aGVtZVsncHJpc21SZWQnXX07YH0+XG4gICAge2Nsb3NlID8gJ30nIDogJ3snfVxuICA8L3NwYW4+XG4pO1xuXG5jb25zdCBCbG9nTGluayA9IHN0eWxlZChMaW5rKWBcbiAgbWluLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogIzI3MjgyMjtcbiAgYm9yZGVyLXJhZGl1czogMC4zZW07XG4gIG1hcmdpbjogMS41ZW07XG4gIHBhZGRpbmc6IDEuMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGNvbG9yOiB3aGl0ZTtcblxuICAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2FlODFmZjtcbiAgfVxuYDtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBhbGxQb3N0cyA9IGdldEFsbFBvc3RzKFtcbiAgICAndGl0bGUnLFxuICAgICdkYXRlJyxcbiAgICAnc2x1ZycsXG4gIF0pO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgYWxsUG9zdHMgfVxuICB9O1xufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blog/index.tsx\n");

/***/ })

})