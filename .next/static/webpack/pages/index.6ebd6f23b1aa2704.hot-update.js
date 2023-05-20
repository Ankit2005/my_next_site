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

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img */ \"./src/assets/img/index.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! config */ \"./config.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var src_utils_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/motion */ \"./src/utils/motion.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var color = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)(\"red\", \"blue\");\n    var isOdd = function(num) {\n        return num % 2;\n    };\n    var title = \"Home\";\n    var description = config__WEBPACK_IMPORTED_MODULE_4__.seo.description;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {\n                title: title,\n                description: description,\n                canonical: config__WEBPACK_IMPORTED_MODULE_4__.seo.canonical,\n                openGraph: {\n                    title: title,\n                    description: description,\n                    images: [\n                        {\n                            url: \"\".concat(config__WEBPACK_IMPORTED_MODULE_4__.seo.canonical, \"bighead.svg\"),\n                            width: \"350px\",\n                            height: \"350px\",\n                            alt: \"avatar bigheads\"\n                        }, \n                    ]\n                }\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                as: \"section\",\n                d: \"flex\",\n                alignItems: \"center\",\n                justifyContent: {\n                    base: \"space-between\"\n                },\n                flexDir: \"column\",\n                textAlign: {\n                    base: \"center\",\n                    lg: \"left\"\n                },\n                py: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    d: {\n                        lg: \"flex\"\n                    },\n                    justifyContent: {\n                        lg: \"center\"\n                    },\n                    alignItems: {\n                        lg: \"center\"\n                    },\n                    flexDir: {\n                        lg: \"row-reverse\"\n                    },\n                    w: \"100%\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, _objectSpread({\n                            as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div\n                        }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.5\"), {\n                            pl: {\n                                lg:  true && \"10\"\n                            },\n                            pr: {\n                                lg:  false && 0\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_img__WEBPACK_IMPORTED_MODULE_3__.Man,\n                                width: \"600\",\n                                height: \"600\",\n                                alt: \"man\",\n                                placeholder: \"blur\",\n                                blurDataURL: \"L8LE.{~60000_3V@ITx^00t:V?-P\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, _this)\n                        }), void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, _objectSpread({\n                                as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div,\n                                onScroll: function() {\n                                    framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div.play();\n                                }\n                            }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.5\"), {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.5\"), {\n                                        letterSpacing: 9,\n                                        color: \"#878787\",\n                                        children: \"WE SERVE👇\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.7\"), {\n                                        color: \"offWhiteText\",\n                                        fontSize: {\n                                            base: 30,\n                                            sm: 35,\n                                            md: 48,\n                                            lg: 44,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"Research & Strategy\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.9\"), {\n                                        className: \"out-line-text\",\n                                        fontSize: {\n                                            base: 30,\n                                            sm: 35,\n                                            md: 48,\n                                            lg: 32,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"UI/UX Design\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"1\"), {\n                                        color: \"offWhiteText\",\n                                        fontSize: {\n                                            base: 30,\n                                            sm: 35,\n                                            md: 48,\n                                            lg: 32,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"Web Development\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"1.1\"), {\n                                        className: \"out-line-text\",\n                                        fontSize: {\n                                            base: 30,\n                                            sm: 35,\n                                            md: 48,\n                                            lg: 32,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"Mobile Development\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }), void 0, true, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"UkpenSNhE6a/gjKW3lCjQeNZs8k=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SEFDQzlDLGtEQUFJO3dDQUNIc0IsRUFBRSxFQUFFZixtREFBUTt1Q0FDUkMsNkRBQVcsQ0FBQyxDQUFLO3dDQUNyQnVDLFNBQVMsRUFBQyxDQUFlO3dDQUN6QkwsUUFBUSxFQUFFLENBQUM7NENBQUNoQixJQUFJLEVBQUUsRUFBRTs0Q0FBRWlCLEVBQUUsRUFBRSxFQUFFOzRDQUFFQyxFQUFFLEVBQUUsRUFBRTs0Q0FBRWYsRUFBRSxFQUFFLEVBQUU7NENBQUVnQixFQUFFLEVBQUUsRUFBRTt3Q0FBQyxDQUFDO3dDQUN0REMsVUFBVSxFQUFFLEdBQUc7a0RBQ2hCLENBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9kLENBQUM7R0FySEtyQyxJQUFJOztRQUNNUiwrREFBaUI7OztLQUQzQlEsSUFBSTtBQXVIViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgSGVhZGluZyxcbiAgVGV4dCxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBOZXh0U2VvIH0gZnJvbSBcIm5leHQtc2VvXCI7XG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgeyBNYW4gfSBmcm9tIFwiLi4vYXNzZXRzL2ltZ1wiO1xuXG5pbXBvcnQgeyBzZW8sIGRhdGEgfSBmcm9tIFwiY29uZmlnXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdGV4dFZhcmlhbnQgfSBmcm9tIFwic3JjL3V0aWxzL21vdGlvblwiO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuICBjb25zdCBjb2xvciA9IHVzZUNvbG9yTW9kZVZhbHVlKFwicmVkXCIsIFwiYmx1ZVwiKTtcblxuICBjb25zdCBpc09kZCA9IChudW0pID0+IG51bSAlIDI7XG5cbiAgY29uc3QgdGl0bGUgPSBcIkhvbWVcIjtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBzZW8uZGVzY3JpcHRpb247XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRTZW9cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgIGNhbm9uaWNhbD17c2VvLmNhbm9uaWNhbH1cbiAgICAgICAgb3BlbkdyYXBoPXt7XG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgaW1hZ2VzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVybDogYCR7c2VvLmNhbm9uaWNhbH1iaWdoZWFkLnN2Z2AsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjM1MHB4XCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCIzNTBweFwiLFxuICAgICAgICAgICAgICBhbHQ6IFwiYXZhdGFyIGJpZ2hlYWRzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPEJveFxuICAgICAgICBhcz1cInNlY3Rpb25cIlxuICAgICAgICBkPVwiZmxleFwiXG4gICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD17eyBiYXNlOiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgICAgdGV4dEFsaWduPXt7IGJhc2U6IFwiY2VudGVyXCIsIGxnOiBcImxlZnRcIiB9fVxuICAgICAgICBweT1cIjRcIlxuICAgICAgPlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZD17eyBsZzogXCJmbGV4XCIgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17eyBsZzogXCJjZW50ZXJcIiB9fVxuICAgICAgICAgIGFsaWduSXRlbXM9e3sgbGc6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICBmbGV4RGlyPXt7IGxnOiBcInJvdy1yZXZlcnNlXCIgfX1cbiAgICAgICAgICB3PVwiMTAwJVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Qm94XG4gICAgICAgICAgICBhcz17bW90aW9uLmRpdn1cbiAgICAgICAgICAgIHsuLi50ZXh0VmFyaWFudChcIjAuNVwiKX1cbiAgICAgICAgICAgIHBsPXt7IGxnOiAxID09IDEgJiYgXCIxMFwiIH19XG4gICAgICAgICAgICBwcj17eyBsZzogMSA9PSAwICYmIFwiMTBcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxOZXh0SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtNYW59XG4gICAgICAgICAgICAgIHdpZHRoPVwiNjAwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNjAwXCJcbiAgICAgICAgICAgICAgYWx0PXtcIm1hblwifVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImJsdXJcIlxuICAgICAgICAgICAgICBibHVyRGF0YVVSTD1cIkw4TEUue342MDAwMF8zVkBJVHheMDB0OlY/LVBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIGFzPXttb3Rpb24uZGl2fVxuICAgICAgICAgICAgICBvblNjcm9sbD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIG1vdGlvbi5kaXYucGxheSgpO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIwLjVcIil9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgYXM9e21vdGlvbi5wfVxuICAgICAgICAgICAgICAgIHsuLi50ZXh0VmFyaWFudChcIjAuNVwiKX1cbiAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPXs5fVxuICAgICAgICAgICAgICAgIGNvbG9yPVwiIzg3ODc4N1wiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBXRSBTRVJWRfCfkYdcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGFzPXttb3Rpb24ucH1cbiAgICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIwLjdcIil9XG4gICAgICAgICAgICAgICAgY29sb3I9XCJvZmZXaGl0ZVRleHRcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IDMwLCBzbTogMzUsIG1kOiA0OCwgbGc6IDQ0LCB4bDogNTYgfX1cbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs3MDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBSZXNlYXJjaCAmIFN0cmF0ZWd5XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBhcz17bW90aW9uLnB9XG4gICAgICAgICAgICAgICAgey4uLnRleHRWYXJpYW50KFwiMC45XCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dC1saW5lLXRleHRcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IDMwLCBzbTogMzUsIG1kOiA0OCwgbGc6IDMyLCB4bDogNTYgfX1cbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs3MDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVSS9VWCBEZXNpZ25cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGFzPXttb3Rpb24ucH1cbiAgICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIxXCIpfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwib2ZmV2hpdGVUZXh0XCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAzMCwgc206IDM1LCBtZDogNDgsIGxnOiAzMiwgeGw6IDU2IH19XG4gICAgICAgICAgICAgICAgZm9udFdlaWdodD17NzAwfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgV2ViIERldmVsb3BtZW50XG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBhcz17bW90aW9uLnB9XG4gICAgICAgICAgICAgICAgey4uLnRleHRWYXJpYW50KFwiMS4xXCIpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm91dC1saW5lLXRleHRcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPXt7IGJhc2U6IDMwLCBzbTogMzUsIG1kOiA0OCwgbGc6IDMyLCB4bDogNTYgfX1cbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs3MDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNb2JpbGUgRGV2ZWxvcG1lbnRcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkhlYWRpbmciLCJUZXh0IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJOZXh0U2VvIiwiTmV4dEltYWdlIiwiTWFuIiwic2VvIiwiZGF0YSIsIm1vdGlvbiIsInRleHRWYXJpYW50IiwiSG9tZSIsImNvbG9yIiwiaXNPZGQiLCJudW0iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY2Fub25pY2FsIiwib3BlbkdyYXBoIiwiaW1hZ2VzIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJhcyIsImQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYXNlIiwiZmxleERpciIsInRleHRBbGlnbiIsImxnIiwicHkiLCJ3IiwiZGl2IiwicGwiLCJwciIsInNyYyIsInBsYWNlaG9sZGVyIiwiYmx1ckRhdGFVUkwiLCJvblNjcm9sbCIsInBsYXkiLCJwIiwibGV0dGVyU3BhY2luZyIsImZvbnRTaXplIiwic20iLCJtZCIsInhsIiwiZm9udFdlaWdodCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});