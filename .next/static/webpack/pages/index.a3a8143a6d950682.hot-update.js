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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_img__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/img */ \"./src/assets/img/index.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! config */ \"./config.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var src_utils_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/motion */ \"./src/utils/motion.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var color = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue)(\"red\", \"blue\");\n    var isOdd = function(num) {\n        return num % 2;\n    };\n    var title = \"Home\";\n    var description = config__WEBPACK_IMPORTED_MODULE_4__.seo.description;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {\n                title: title,\n                description: description,\n                canonical: config__WEBPACK_IMPORTED_MODULE_4__.seo.canonical,\n                openGraph: {\n                    title: title,\n                    description: description,\n                    images: [\n                        {\n                            url: \"\".concat(config__WEBPACK_IMPORTED_MODULE_4__.seo.canonical, \"bighead.svg\"),\n                            width: \"350px\",\n                            height: \"350px\",\n                            alt: \"avatar bigheads\"\n                        }, \n                    ]\n                }\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                as: \"section\",\n                d: \"flex\",\n                alignItems: \"center\",\n                justifyContent: {\n                    base: \"space-between\"\n                },\n                flexDir: \"column\",\n                textAlign: {\n                    base: \"center\",\n                    lg: \"left\"\n                },\n                py: \"4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    d: {\n                        lg: \"flex\"\n                    },\n                    justifyContent: {\n                        lg: \"center\"\n                    },\n                    alignItems: {\n                        lg: \"center\"\n                    },\n                    flexDir: {\n                        lg: \"row-reverse\"\n                    },\n                    w: \"100%\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, _objectSpread({\n                            as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div\n                        }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.5\"), {\n                            pl: {\n                                lg:  true && \"10\"\n                            },\n                            pr: {\n                                lg:  false && 0\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_img__WEBPACK_IMPORTED_MODULE_3__.Man,\n                                width: \"600\",\n                                height: \"600\",\n                                alt: \"man\",\n                                placeholder: \"blur\",\n                                blurDataURL: \"L8LE.{~60000_3V@ITx^00t:V?-P\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, _this)\n                        }), void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, _objectSpread({\n                                as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div,\n                                onScroll: function() {\n                                    framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div.play();\n                                }\n                            }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.5\"), {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.5\"), {\n                                        letterSpacing: 9,\n                                        color: \"#878787\",\n                                        children: \"WE SERVE👇\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.7\"), {\n                                        color: \"offWhiteText\",\n                                        fontSize: {\n                                            base: 31,\n                                            sm: 48,\n                                            lg: 40,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"Research & Strategy\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"0.9\"), {\n                                        className: \"out-line-text\",\n                                        fontSize: {\n                                            base: 31,\n                                            sm: 28,\n                                            lg: 40,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"UI/UX Design\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"1\"), {\n                                        color: \"offWhiteText\",\n                                        fontSize: {\n                                            base: 31,\n                                            sm: 48,\n                                            lg: 40,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"Web Development\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_5__.textVariant)(\"1.1\"), {\n                                        className: \"out-line-text\",\n                                        fontSize: {\n                                            base: 31,\n                                            sm: 48,\n                                            lg: 40,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"Mobile Development\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }), void 0, true, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/index.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_s(Home, \"UkpenSNhE6a/gjKW3lCjQeNZs8k=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.useColorModeValue\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBQyxDQUFlO3dDQUN6QkosUUFBUSxFQUFFLENBQUM7NENBQUNoQixJQUFJLEVBQUUsRUFBRTs0Q0FBRWlCLEVBQUUsRUFBRSxFQUFFOzRDQUFFZCxFQUFFLEVBQUUsRUFBRTs0Q0FBRWUsRUFBRSxFQUFFLEVBQUU7d0NBQUMsQ0FBQzt3Q0FDOUNDLFVBQVUsRUFBRSxHQUFHO2tEQUNoQixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPZCxDQUFDO0dBckhLcEMsSUFBSTs7UUFDTVIsK0RBQWlCOzs7S0FEM0JRLElBQUk7QUF1SFYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEhlYWRpbmcsXG4gIFRleHQsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gXCJuZXh0LXNlb1wiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgTWFuIH0gZnJvbSBcIi4uL2Fzc2V0cy9pbWdcIjtcblxuaW1wb3J0IHsgc2VvLCBkYXRhIH0gZnJvbSBcImNvbmZpZ1wiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHRleHRWYXJpYW50IH0gZnJvbSBcInNyYy91dGlscy9tb3Rpb25cIjtcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgY29uc3QgY29sb3IgPSB1c2VDb2xvck1vZGVWYWx1ZShcInJlZFwiLCBcImJsdWVcIik7XG5cbiAgY29uc3QgaXNPZGQgPSAobnVtKSA9PiBudW0gJSAyO1xuXG4gIGNvbnN0IHRpdGxlID0gXCJIb21lXCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gc2VvLmRlc2NyaXB0aW9uO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxOZXh0U2VvXG4gICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufVxuICAgICAgICBjYW5vbmljYWw9e3Nlby5jYW5vbmljYWx9XG4gICAgICAgIG9wZW5HcmFwaD17e1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgIGltYWdlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1cmw6IGAke3Nlby5jYW5vbmljYWx9YmlnaGVhZC5zdmdgLFxuICAgICAgICAgICAgICB3aWR0aDogXCIzNTBweFwiLFxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzUwcHhcIixcbiAgICAgICAgICAgICAgYWx0OiBcImF2YXRhciBiaWdoZWFkc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIDxCb3hcbiAgICAgICAgYXM9XCJzZWN0aW9uXCJcbiAgICAgICAgZD1cImZsZXhcIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgYmFzZTogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cbiAgICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICAgIHRleHRBbGlnbj17eyBiYXNlOiBcImNlbnRlclwiLCBsZzogXCJsZWZ0XCIgfX1cbiAgICAgICAgcHk9XCI0XCJcbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIGQ9e3sgbGc6IFwiZmxleFwiIH19XG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9e3sgbGc6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgICBhbGlnbkl0ZW1zPXt7IGxnOiBcImNlbnRlclwiIH19XG4gICAgICAgICAgZmxleERpcj17eyBsZzogXCJyb3ctcmV2ZXJzZVwiIH19XG4gICAgICAgICAgdz1cIjEwMCVcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJveFxuICAgICAgICAgICAgYXM9e21vdGlvbi5kaXZ9XG4gICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIwLjVcIil9XG4gICAgICAgICAgICBwbD17eyBsZzogMSA9PSAxICYmIFwiMTBcIiB9fVxuICAgICAgICAgICAgcHI9e3sgbGc6IDEgPT0gMCAmJiBcIjEwXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TmV4dEltYWdlXG4gICAgICAgICAgICAgIHNyYz17TWFufVxuICAgICAgICAgICAgICB3aWR0aD1cIjYwMFwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjYwMFwiXG4gICAgICAgICAgICAgIGFsdD17XCJtYW5cIn1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJibHVyXCJcbiAgICAgICAgICAgICAgYmx1ckRhdGFVUkw9XCJMOExFLnt+NjAwMDBfM1ZASVR4XjAwdDpWPy1QXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICBhcz17bW90aW9uLmRpdn1cbiAgICAgICAgICAgICAgb25TY3JvbGw9eygpID0+IHtcbiAgICAgICAgICAgICAgICBtb3Rpb24uZGl2LnBsYXkoKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgey4uLnRleHRWYXJpYW50KFwiMC41XCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGFzPXttb3Rpb24ucH1cbiAgICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIwLjVcIil9XG4gICAgICAgICAgICAgICAgbGV0dGVyU3BhY2luZz17OX1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIiM4Nzg3ODdcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgV0UgU0VSVkXwn5GHXG4gICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgPFRleHRcbiAgICAgICAgICAgICAgICBhcz17bW90aW9uLnB9XG4gICAgICAgICAgICAgICAgey4uLnRleHRWYXJpYW50KFwiMC43XCIpfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwib2ZmV2hpdGVUZXh0XCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAzMSwgc206IDQ4LCBsZzogNDAsIHhsOiA1NiB9fVxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFJlc2VhcmNoICYgU3RyYXRlZ3lcbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGFzPXttb3Rpb24ucH1cbiAgICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIwLjlcIil9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3V0LWxpbmUtdGV4dFwiXG4gICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogMzEsIHNtOiAyOCwgbGc6IDQwLCB4bDogNTYgfX1cbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs3MDB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBVSS9VWCBEZXNpZ25cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGFzPXttb3Rpb24ucH1cbiAgICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIxXCIpfVxuICAgICAgICAgICAgICAgIGNvbG9yPVwib2ZmV2hpdGVUZXh0XCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAzMSwgc206IDQ4LCBsZzogNDAsIHhsOiA1NiB9fVxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFdlYiBEZXZlbG9wbWVudFxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgYXM9e21vdGlvbi5wfVxuICAgICAgICAgICAgICAgIHsuLi50ZXh0VmFyaWFudChcIjEuMVwiKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdXQtbGluZS10ZXh0XCJcbiAgICAgICAgICAgICAgICBmb250U2l6ZT17eyBiYXNlOiAzMSwgc206IDQ4LCBsZzogNDAsIHhsOiA1NiB9fVxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1vYmlsZSBEZXZlbG9wbWVudFxuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiSGVhZGluZyIsIlRleHQiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIk5leHRTZW8iLCJOZXh0SW1hZ2UiLCJNYW4iLCJzZW8iLCJkYXRhIiwibW90aW9uIiwidGV4dFZhcmlhbnQiLCJIb21lIiwiY29sb3IiLCJpc09kZCIsIm51bSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJjYW5vbmljYWwiLCJvcGVuR3JhcGgiLCJpbWFnZXMiLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImFzIiwiZCIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImJhc2UiLCJmbGV4RGlyIiwidGV4dEFsaWduIiwibGciLCJweSIsInciLCJkaXYiLCJwbCIsInByIiwic3JjIiwicGxhY2Vob2xkZXIiLCJibHVyRGF0YVVSTCIsIm9uU2Nyb2xsIiwicGxheSIsInAiLCJsZXR0ZXJTcGFjaW5nIiwiZm9udFNpemUiLCJzbSIsInhsIiwiZm9udFdlaWdodCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n");

/***/ })

});