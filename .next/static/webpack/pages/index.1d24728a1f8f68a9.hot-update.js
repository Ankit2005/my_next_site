"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SimpleCard.jsx":
/*!***************************************!*\
  !*** ./src/components/SimpleCard.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tilt */ \"./node_modules/react-tilt/dist/tilt.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SimpleCardTil = function(param) {\n    var name = param.name, description = param.description, btnText = param.btnText, tags = param.tags, source_code_link = param.source_code_link, index = param.index;\n    _s();\n    var fadeInVariants = {\n        hidden: {\n            opacity: 0,\n            y: 35\n        },\n        visible: {\n            opacity: 1,\n            y: 0\n        }\n    };\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), isHovered = ref[0], setIsHovered = ref[1];\n    var handleMouseEnter = function() {\n        setIsHovered(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHovered(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init({\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tilt__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        options: {\n            max: 15,\n            scale: 1,\n            speed: 15\n        },\n        className: \"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full\",\n        \"data-aos\": \"fade-up\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            _hover: {\n                bg: \"#5956E9\",\n                color: \"white !important\"\n            },\n            onMouseEnter: handleMouseEnter,\n            onMouseLeave: handleMouseLeave,\n            borderRadius: 16,\n            p: \"8\",\n            //variants=\"outline\"\n            bg: \"bgLightPrimary\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    //  data-aos=\"fade-up\"\n                    fontWeight: \"bold\",\n                    borderRadius: 26,\n                    textColor: \"white\",\n                    padding: 6,\n                    bg: \"#060B27\",\n                    _hover: {},\n                    children: btnText\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    mt: \"4\",\n                    px: \"2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            //  data-aos=\"fade-up\"\n                            color: \"white\",\n                            fontWeight: \"bold\",\n                            fontSize: \"20px\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                            mt: \"2\",\n                            // data-aos=\"fade-up\"\n                            color: isHovered ? \"white\" : \"#878787\",\n                            fontSize: \"18px\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n            lineNumber: 56,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_s(SimpleCardTil, \"kc8+hhKG3+iGUxqsVUryptgPYnY=\");\n_c = SimpleCardTil;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleCardTil);\nvar _c;\n$RefreshReg$(_c, \"SimpleCardTil\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGFBQWE7S0FBYkEsYUFBYTtBQXNGbkIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaW1wbGVDYXJkLmpzeD9kMmU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUaWx0IGZyb20gXCJyZWFjdC10aWx0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIFRleHQsXG4gIEZsZXgsXG4gIEltYWdlLFxuICBJY29uQnV0dG9uLFxuICBCdXR0b25Hcm91cCxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEJzR2l0aHViLCBCc0Rpc2NvcmQsIEJzUGVyc29uIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5pbXBvcnQgQU9TIGZyb20gXCJhb3NcIjtcbmltcG9ydCBcImFvcy9kaXN0L2Fvcy5jc3NcIjtcblxuY29uc3QgU2ltcGxlQ2FyZFRpbCA9ICh7XG4gIG5hbWUsXG4gIGRlc2NyaXB0aW9uLFxuICBidG5UZXh0LFxuICB0YWdzLFxuICBzb3VyY2VfY29kZV9saW5rLFxuICBpbmRleCxcbn0pID0+IHtcbiAgY29uc3QgZmFkZUluVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDM1IH0sXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gIH07XG5cbiAgY29uc3QgW2lzSG92ZXJlZCwgc2V0SXNIb3ZlcmVkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUVudGVyID0gKCkgPT4ge1xuICAgIHNldElzSG92ZXJlZCh0cnVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZUxlYXZlID0gKCkgPT4ge1xuICAgIHNldElzSG92ZXJlZChmYWxzZSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBBT1MuaW5pdCh7XG4gICAgICAvLyBDdXN0b21pemUgQU9TIG9wdGlvbnMgaGVyZVxuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8VGlsdFxuICAgICAgb3B0aW9ucz17e1xuICAgICAgICBtYXg6IDE1LFxuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgc3BlZWQ6IDE1LFxuICAgICAgfX1cbiAgICAgIGNsYXNzTmFtZT1cImJnLXRlcnRpYXJ5IHAtNSByb3VuZGVkLTJ4bCBzbTp3LVszNjBweF0gdy1mdWxsXCJcbiAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgPlxuICAgICAgPEJveFxuICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICBiZzogXCIjNTk1NkU5XCIsXG4gICAgICAgICAgY29sb3I6IFwid2hpdGUgIWltcG9ydGFudFwiLFxuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZU1vdXNlRW50ZXJ9XG4gICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgYm9yZGVyUmFkaXVzPXsxNn1cbiAgICAgICAgcD1cIjhcIlxuICAgICAgICAvL3ZhcmlhbnRzPVwib3V0bGluZVwiXG4gICAgICAgIGJnPVwiYmdMaWdodFByaW1hcnlcIlxuICAgICAgPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgLy8gIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz17MjZ9XG4gICAgICAgICAgdGV4dENvbG9yPVwid2hpdGVcIlxuICAgICAgICAgIHBhZGRpbmc9ezZ9XG4gICAgICAgICAgYmc9XCIjMDYwQjI3XCJcbiAgICAgICAgICBfaG92ZXI9e3t9fVxuICAgICAgICA+XG4gICAgICAgICAge2J0blRleHR9XG4gICAgICAgIDwvQnV0dG9uPlxuXG4gICAgICAgIDxCb3ggbXQ9XCI0XCIgcHg9XCIyXCI+XG4gICAgICAgICAgPFRleHRcbiAgICAgICAgICAgIC8vICBkYXRhLWFvcz1cImZhZGUtdXBcIlxuICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICBmb250V2VpZ2h0PVwiYm9sZFwiXG4gICAgICAgICAgICBmb250U2l6ZT1cIjIwcHhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgbXQ9XCIyXCJcbiAgICAgICAgICAgIC8vIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgICAgICBjb2xvcj17aXNIb3ZlcmVkID8gXCJ3aGl0ZVwiIDogXCIjODc4Nzg3XCJ9XG4gICAgICAgICAgICBmb250U2l6ZT1cIjE4cHhcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9UaWx0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQ2FyZFRpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlRpbHQiLCJCb3giLCJUZXh0IiwiRmxleCIsIkltYWdlIiwiSWNvbkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwibW90aW9uIiwiQnNHaXRodWIiLCJCc0Rpc2NvcmQiLCJCc1BlcnNvbiIsIkFPUyIsIlNpbXBsZUNhcmRUaWwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidG5UZXh0IiwidGFncyIsInNvdXJjZV9jb2RlX2xpbmsiLCJpbmRleCIsImZhZGVJblZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidXNlU3RhdGUiLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImluaXQiLCJvcHRpb25zIiwibWF4Iiwic2NhbGUiLCJzcGVlZCIsImNsYXNzTmFtZSIsImRhdGEtYW9zIiwiX2hvdmVyIiwiYmciLCJjb2xvciIsIm9uTW91c2VFbnRlciIsIm9uTW91c2VMZWF2ZSIsImJvcmRlclJhZGl1cyIsInAiLCJmb250V2VpZ2h0IiwidGV4dENvbG9yIiwicGFkZGluZyIsIm10IiwicHgiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SimpleCard.jsx\n");

/***/ })

});