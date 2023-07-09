"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/services",{

/***/ "./src/pages/services/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/services/index.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var src_utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/motion */ \"./src/utils/motion.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Service() {\n    _s();\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    var ref = _slicedToArray((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), ref1 = ref[0], inView = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inView) {\n            controls.start({\n                opacity: 1,\n                y: 0\n            });\n        }\n    }, [\n        controls,\n        inView\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        py: 4,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                direction: {\n                    base: \"column\",\n                    md: \"row\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                        p: 8,\n                        flex: 1,\n                        justify: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                            spacing: 6,\n                            w: \"full\",\n                            maxW: \"lg\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                    fontSize: {\n                                        base: \"3xl\",\n                                        md: \"4xl\",\n                                        lg: \"5xl\"\n                                    },\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span,\n                                        color: \"#99EFD0\"\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(\"0.7\"), {\n                                        fontSize: {\n                                            base: 27,\n                                            sm: 35,\n                                            md: 48,\n                                            lg: 30,\n                                            xl: 56\n                                        },\n                                        fontWeight: 700,\n                                        children: \"Many reasons to get up and start to get back in the business\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, _objectSpread({\n                                    as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p\n                                }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(\"0.9\"), {\n                                    fontSize: {\n                                        base: \"md\",\n                                        lg: \"lg\"\n                                    },\n                                    color: \"gray.500\",\n                                    children: \"The harder you work for something, the greater you’ll feel when you achieve it.\"\n                                }), void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                                    direction: {\n                                        base: \"column\",\n                                        md: \"row\"\n                                    },\n                                    spacing: 4,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, _objectSpread({\n                                        as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button\n                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(\"1\"), {\n                                        rounded: \"md\",\n                                        color: \"white\",\n                                        bg: \"secondary\",\n                                        _hover: {\n                                            bg: \"blue.500\"\n                                        },\n                                        children: \"Learn More\"\n                                    }), void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                        flex: 1,\n                        p: \"4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, _objectSpread({\n                            as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.img\n                        }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(\"1.2\"), {\n                            alt: \"Login Image\",\n                            // objectFit={\"cover\"}\n                            src: \"/img/man_run.svg\"\n                        }), void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                px: \"20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    border: \"1px\",\n                    borderColor: \"white\",\n                    borderRadius: 14,\n                    p: \"12\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                        display: {\n                            base: \"flex\"\n                        },\n                        alignItems: \"center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                    display: {\n                                        base: \"flex\"\n                                    },\n                                    alignItems: \"center\",\n                                    gap: \"8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                                            src: \"/img/figma.svg\",\n                                            alt: \"figma\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                            lineNumber: 99,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                                            src: \"/img/daymand.svg\",\n                                            alt: \"daymand\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                            lineNumber: 100,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                                            src: \"/img/xd.svg\",\n                                            alt: \"xd\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                    color: \"white\",\n                                    fontWeight: \"bold\",\n                                    fontSize: 32,\n                                    my: \"6\",\n                                    children: \"UI/UX Design\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                    lineNumber: 103,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.UnorderedList, {\n                                        color: \"white\",\n                                        fontSize: 20,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                                children: \"Lorem ipsum dolor sit amet\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                                children: \"Consectetur adipiscing elit\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                                lineNumber: 109,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                                children: \"Integer molestie lorem at massa\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                                lineNumber: 110,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.ListItem, {\n                                                children: \"Facilisis in pretium nisl aliquet\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                                lineNumber: 111,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                        lineNumber: 107,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                        lineNumber: 96,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this));\n}\n_s(Service, \"2NEUvrxzw09dl1eC0Q0pbm0pOIE=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = Service;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Service);\nvar _c;\n$RefreshReg$(_c, \"Service\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VydmljZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBaUJ5QjtBQU1EO0FBQ1M7QUFDbUI7QUFDRztBQUNUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRXJDd0IsT0FBTyxHQUFHLENBQUM7O0lBQ2xCLEdBQUssQ0FBQ0MsUUFBUSxHQUFHSiwyREFBWTtJQUM3QixHQUFLLENBQWlCQyxHQUFXLGtCQUFYQSxzRUFBUyxRQUF4QkksSUFBRyxHQUFZSixHQUFXLEtBQXJCSyxNQUFNLEdBQUlMLEdBQVc7SUFFakNILGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsRUFBRSxFQUFFUSxNQUFNLEVBQUUsQ0FBQztZQUNYRixRQUFRLENBQUNHLEtBQUssQ0FBQyxDQUFDO2dCQUFDQyxPQUFPLEVBQUUsQ0FBQztnQkFBRUMsQ0FBQyxFQUFFLENBQUM7WUFBQyxDQUFDO1FBQ3JDLENBQUM7SUFDSCxDQUFDLEVBQUUsQ0FBQ0w7UUFBQUEsUUFBUTtRQUFFRSxNQUFNO0lBQUEsQ0FBQztJQUVyQixNQUFNLDZFQUNIaEIsaURBQUc7UUFBQ29CLEVBQUUsRUFBRSxDQUFDOzt3RkFDUDlCLG1EQUFLO2dCQUFDK0IsU0FBUyxFQUFFLENBQUM7b0JBQUNDLElBQUksRUFBRSxDQUFRO29CQUFFQyxFQUFFLEVBQUUsQ0FBSztnQkFBQyxDQUFDOztnR0FDNUM3QixrREFBSTt3QkFBQzhCLENBQUMsRUFBRSxDQUFDO3dCQUFFQyxJQUFJLEVBQUUsQ0FBQzt3QkFBRUMsT0FBTyxFQUFFLENBQVE7OEdBQ25DcEMsbURBQUs7NEJBQUNxQyxPQUFPLEVBQUUsQ0FBQzs0QkFBRUMsQ0FBQyxFQUFFLENBQU07NEJBQUVDLElBQUksRUFBRSxDQUFJOzs0R0FDckN0QyxxREFBTztvQ0FBQ3VDLFFBQVEsRUFBRSxDQUFDO3dDQUFDUixJQUFJLEVB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O3dDQUFDSixRQUFRLEVBQUUsRUFBRTs7d0hBQ3RDMUIsc0RBQVE7MERBQUMsQ0FBMEI7Ozs7Ozt3SEFDbkNBLHNEQUFROzBEQUFDLENBQTJCOzs7Ozs7d0hBQ3BDQSxzREFBUTswREFBQyxDQUErQjs7Ozs7O3dIQUN4Q0Esc0RBQVE7MERBQUMsQ0FBaUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUzdELENBQUM7R0ExRlFTLE9BQU87O1FBQ0dILHVEQUFZO1FBQ1BDLGtFQUFTOzs7S0FGeEJFLE9BQU87QUE0RmhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NlcnZpY2VzL2luZGV4LmpzeD9lYzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNpbXBsZUdyaWQsXG4gIFN0YWNrLFxuICBIZWFkaW5nLFxuICBUZXh0LFxuICBTdGFja0RpdmlkZXIsXG4gIEZsZXgsXG4gIEltYWdlLFxuICBJY29uLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgQ29udGFpbmVyLFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBWU3RhY2ssXG4gIFVub3JkZXJlZExpc3QsXG4gIExpc3RJdGVtLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQge1xuICBJb0FuYWx5dGljc1NoYXJwLFxuICBJb0xvZ29CaXRjb2luLFxuICBJb1NlYXJjaFNoYXJwLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCB7IHRleHRWYXJpYW50IH0gZnJvbSBcInNyYy91dGlscy9tb3Rpb25cIjtcblxuZnVuY3Rpb24gU2VydmljZSgpIHtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAxLCB5OiAwIH0pO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xzLCBpblZpZXddKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggcHk9ezR9PlxuICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fT5cbiAgICAgICAgPEZsZXggcD17OH0gZmxleD17MX0ganVzdGlmeT17XCJjZW50ZXJcIn0+XG4gICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezZ9IHc9e1wiZnVsbFwifSBtYXhXPXtcImxnXCJ9PlxuICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9e3sgYmFzZTogXCIzeGxcIiwgbWQ6IFwiNHhsXCIsIGxnOiBcIjV4bFwiIH19PlxuICAgICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICAgIGFzPXttb3Rpb24uc3Bhbn1cbiAgICAgICAgICAgICAgICBjb2xvcj17XCIjOTlFRkQwXCJ9XG4gICAgICAgICAgICAgICAgLy8gbXQ9XCI0XCJcbiAgICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIwLjdcIil9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogMjcsIHNtOiAzNSwgbWQ6IDQ4LCBsZzogMzAsIHhsOiA1NiB9fVxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1hbnkgcmVhc29ucyB0byBnZXQgdXAgYW5kIHN0YXJ0IHRvIGdldCBiYWNrIGluIHRoZSBidXNpbmVzc1xuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICBhcz17bW90aW9uLnB9XG4gICAgICAgICAgICAgIHsuLi50ZXh0VmFyaWFudChcIjAuOVwiKX1cbiAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCJtZFwiLCBsZzogXCJsZ1wiIH19XG4gICAgICAgICAgICAgIGNvbG9yPXtcImdyYXkuNTAwXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRoZSBoYXJkZXIgeW91IHdvcmsgZm9yIHNvbWV0aGluZywgdGhlIGdyZWF0ZXIgeW914oCZbGwgZmVlbCB3aGVuXG4gICAgICAgICAgICAgIHlvdSBhY2hpZXZlIGl0LlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fSBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIGFzPXttb3Rpb24uYnV0dG9ufVxuICAgICAgICAgICAgICAgIHsuLi50ZXh0VmFyaWFudChcIjFcIil9XG4gICAgICAgICAgICAgICAgcm91bmRlZD17XCJtZFwifVxuICAgICAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgICAgIGJnPXtcInNlY29uZGFyeVwifVxuICAgICAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICAgICAgYmc6IFwiYmx1ZS41MDBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTGVhcm4gTW9yZVxuICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgPC9GbGV4PlxuICAgICAgICA8RmxleCBmbGV4PXsxfSBwPVwiNFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgYXM9e21vdGlvbi5pbWd9XG4gICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIxLjJcIil9XG4gICAgICAgICAgICBhbHQ9e1wiTG9naW4gSW1hZ2VcIn1cbiAgICAgICAgICAgIC8vIG9iamVjdEZpdD17XCJjb3ZlclwifVxuICAgICAgICAgICAgc3JjPXtcIi9pbWcvbWFuX3J1bi5zdmdcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZsZXg+XG4gICAgICA8L1N0YWNrPlxuXG4gICAgICB7LyogU3RhcnQgY2FyZCAqL31cbiAgICAgIDxCb3ggcHg9XCIyMFwiPlxuICAgICAgICA8Qm94IGJvcmRlcj1cIjFweFwiIGJvcmRlckNvbG9yPVwid2hpdGVcIiBib3JkZXJSYWRpdXM9ezE0fSBwPVwiMTJcIj5cbiAgICAgICAgICA8Qm94IGRpc3BsYXk9e3sgYmFzZTogXCJmbGV4XCIgfX0gYWxpZ25JdGVtcz1cImNlbnRlclwiPlxuICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgPEJveCBkaXNwbGF5PXt7IGJhc2U6IFwiZmxleFwiIH19IGFsaWduSXRlbXM9XCJjZW50ZXJcIiBnYXA9XCI4XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcvZmlnbWEuc3ZnXCIgYWx0PVwiZmlnbWFcIiAvPlxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvaW1nL2RheW1hbmQuc3ZnXCIgYWx0PVwiZGF5bWFuZFwiIC8+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9pbWcveGQuc3ZnXCIgYWx0PVwieGRcIiAvPlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9ezMyfSBteT1cIjZcIj5cbiAgICAgICAgICAgICAgICBVSS9VWCBEZXNpZ25cbiAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgIDxVbm9yZGVyZWRMaXN0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT17MjB9PlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0PC9MaXN0SXRlbT5cbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5Db25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQ8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPkludGVnZXIgbW9sZXN0aWUgbG9yZW0gYXQgbWFzc2E8L0xpc3RJdGVtPlxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtPkZhY2lsaXNpcyBpbiBwcmV0aXVtIG5pc2wgYWxpcXVldDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICAgICAgPC9Vbm9yZGVyZWRMaXN0PlxuICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xuIl0sIm5hbWVzIjpbIlNpbXBsZUdyaWQiLCJTdGFjayIsIkhlYWRpbmciLCJUZXh0IiwiU3RhY2tEaXZpZGVyIiwiRmxleCIsIkltYWdlIiwiSWNvbiIsInVzZUNvbG9yTW9kZVZhbHVlIiwiQ29udGFpbmVyIiwidXNlQnJlYWtwb2ludFZhbHVlIiwiQm94IiwiQnV0dG9uIiwiVlN0YWNrIiwiVW5vcmRlcmVkTGlzdCIsIkxpc3RJdGVtIiwiSW9BbmFseXRpY3NTaGFycCIsIklvTG9nb0JpdGNvaW4iLCJJb1NlYXJjaFNoYXJwIiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwidXNlSW5WaWV3IiwidGV4dFZhcmlhbnQiLCJTZXJ2aWNlIiwiY29udHJvbHMiLCJyZWYiLCJpblZpZXciLCJzdGFydCIsIm9wYWNpdHkiLCJ5IiwicHkiLCJkaXJlY3Rpb24iLCJiYXNlIiwibWQiLCJwIiwiZmxleCIsImp1c3RpZnkiLCJzcGFjaW5nIiwidyIsIm1heFciLCJmb250U2l6ZSIsImxnIiwiYXMiLCJzcGFuIiwiY29sb3IiLCJzbSIsInhsIiwiZm9udFdlaWdodCIsImJ1dHRvbiIsInJvdW5kZWQiLCJiZyIsIl9ob3ZlciIsImltZyIsImFsdCIsInNyYyIsInB4IiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdhcCIsIm15Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/services/index.jsx\n");

/***/ })

});