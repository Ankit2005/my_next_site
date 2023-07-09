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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var src_utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/motion */ \"./src/utils/motion.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Service() {\n    _s();\n    var controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    var ref = _slicedToArray((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)(), 2), ref1 = ref[0], inView = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (inView) {\n            controls.start({\n                opacity: 1,\n                y: 0\n            });\n        }\n    }, [\n        controls,\n        inView\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        py: 4,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n            minH: \"100vh\",\n            direction: {\n                base: \"column\",\n                md: \"row\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    p: 8,\n                    flex: 1,\n                    justify: \"center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                        spacing: 6,\n                        w: \"full\",\n                        maxW: \"lg\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                                fontSize: {\n                                    base: \"3xl\",\n                                    md: \"4xl\",\n                                    lg: \"5xl\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, _objectSpread({\n                                    as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p,\n                                    color: \"#99EFD0\"\n                                }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(\"0.7\"), {\n                                    fontSize: {\n                                        base: 27,\n                                        sm: 35,\n                                        md: 48,\n                                        lg: 30,\n                                        xl: 56\n                                    },\n                                    fontWeight: 700,\n                                    children: \"Many reasons to get up and start to get back in the business\"\n                                }), void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, _objectSpread({\n                                as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.p\n                            }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(\"0.9\"), {\n                                fontSize: {\n                                    base: \"md\",\n                                    lg: \"lg\"\n                                },\n                                color: \"gray.500\",\n                                children: \"The harder you work for something, the greater you’ll feel when you achieve it.\"\n                            }), void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                                direction: {\n                                    base: \"column\",\n                                    md: \"row\"\n                                },\n                                spacing: 4,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                    rounded: \"md\",\n                                    color: \"white\",\n                                    bg: \"secondary\",\n                                    _hover: {\n                                        bg: \"blue.500\"\n                                    },\n                                    children: \"Learn More\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n                    flex: 1,\n                    p: \"4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                        alt: \"Login Image\",\n                        // objectFit={\"cover\"}\n                        src: \"/img/man_run.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/services/index.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this));\n}\n_s(Service, \"2NEUvrxzw09dl1eC0Q0pbm0pOIE=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = Service;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Service);\nvar _c;\n$RefreshReg$(_c, \"Service\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2VydmljZXMvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBY3lCO0FBTUQ7QUFDUztBQUNtQjtBQUNHO0FBQ1Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFckNxQixPQUFPLEdBQUcsQ0FBQzs7SUFDbEIsR0FBSyxDQUFDQyxRQUFRLEdBQUdKLDJEQUFZO0lBQzdCLEdBQUssQ0FBaUJDLEdBQVcsa0JBQVhBLHNFQUFTLFFBQXhCSSxJQUFHLEdBQVlKLEdBQVcsS0FBckJLLE1BQU0sR0FBSUwsR0FBVztJQUVqQ0gsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixFQUFFLEVBQUVRLE1BQU0sRUFBRSxDQUFDO1lBQ1hGLFFBQVEsQ0FBQ0csS0FBSyxDQUFDLENBQUM7Z0JBQUNDLE9BQU8sRUFBRSxDQUFDO2dCQUFFQyxDQUFDLEVBQUUsQ0FBQztZQUFDLENBQUM7UUFDckMsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDTDtRQUFBQSxRQUFRO1FBQUVFLE1BQU07SUFBQSxDQUFDO0lBRXJCLE1BQU0sNkVBQ0hiLGlEQUFHO1FBQUNpQixFQUFFLEVBQUUsQ0FBQzs4RkFDUDNCLG1EQUFLO1lBQUM0QixJQUFJLEVBQUUsQ0FBTztZQUFFQyxTQUFTLEVBQUUsQ0FBQztnQkFBQ0MsSUFBSSxFQUFFLENBQVE7Z0JBQUVDLEVBQUUsRUFBRSxDQUFLO1lBQUMsQ0FBQzs7NEZBQzNEM0Isa0RBQUk7b0JBQUM0QixDQUFDLEVBQUUsQ0FBQztvQkFBRUMsSUFBSSxFQUFFLENBQUM7b0JBQUVDLE9BQU8sRUFBRSxDQUFROzBHQUNuQ2xDLG1EQUFLO3dCQUFDbUMsT0FBTyxFQUFFLENBQUM7d0JBQUVDLENBQUMsRUFBRSxDQUFNO3dCQUFFQyxJQUFJLEVBQUUsQ0FBSTs7d0dBQ3JDcEMscURBQU87Z0NBQUNxQyxRQUFRLEVBQUUsQ0FBQztvQ0FBQ1IsSUFBSSxFQUFFLENBQUs7b0NBQUVDLEVBQUUsRUFBRSxDQUFLO29DQUFFUSxFQUFFLEVBQUUsQ0FBSztnQ0FBQyxDQUFDO3NIQUNyRHJDLGtEQUFJO29DQUNIc0MsRUFBRSxFQUFFeEIsbURBQVE7b0NBQ1p5QixLQUFLLEVBQUUsQ0FBUzttQ0FDWnRCLDZEQUFXLENBQUMsQ0FBSztvQ0FDckJtQixRQUFRLEVBQUUsQ0FBQzt3Q0FBQ1IsSUFBSSxFQUFFLEVBQUU7d0NBQUVZLEVBQUUsRUFBRSxFQUFFO3dDQUFFWCxFQUFFLEVBQUUsRUFBRTt3Q0FBRVEsRUFBRSxFQUFFLEVBQUU7d0NBQUVJLEVBQUUsRUFBRSxFQUFFO29DQUFDLENBQUM7b0NBQ3REQyxVQUFVLEVBQUUsR0FBRzs4Q0FDaEIsQ0FFRDs7Ozs7Ozs7Ozs7d0dBRUQxQyxrREFBSTtnQ0FDSHNDLEVBQUUsRUFBRXhCLG1EQUFROytCQUNSRyw2REFBVyxDQUFDLENBQUs7Z0NBQ3JCbUIsUUFBUSxFQUFFLENBQUM7b0NBQUNSLElBQUksRUFBRSxDQUFJO29DQUFFUyxFQUFFLEVBQUUsQ0FBSTtnQ0FBQyxDQUFDO2dDQUNsQ0UsS0FBSyxFQUFFLENBQVU7MENBQ2xCLENBR0Q7Ozs7Ozt3R0FDQ3pDLG1EQUFLO2dDQUFDNkIsU0FBUyxFQUFFLENBQUM7b0NBQUNDLElBQUksRUFBRSxDQUFRO29DQUFFQyxFQUFFLEVBQUUsQ0FBSztnQ0FBQyxDQUFDO2dDQUFFSSxPQUFPLEVBQUUsQ0FBQztzSEFDeER4QixvREFBTTtvQ0FDTGtDLE9BQU8sRUFBRSxDQUFJO29DQUNiSixLQUFLLEVBQUMsQ0FBTztvQ0FDYkssRUFBRSxFQUFFLENBQVc7b0NBQ2ZDLE1BQU0sRUFBRSxDQUFDO3dDQUNQRCxFQUFFLEVBQUUsQ0FBVTtvQ0FDaEIsQ0FBQzs4Q0FDRixDQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUlMMUMsa0RBQUk7b0JBQUM2QixJQUFJLEVBQUUsQ0FBQztvQkFBRUQsQ0FBQyxFQUFDLENBQUc7MEdBQ2pCM0IsbURBQUs7d0JBQ0oyQyxHQUFHLEVBQUUsQ0FBYTt3QkFDbEIsRUFBc0I7d0JBQ3RCQyxHQUFHLEVBQUUsQ0FBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbkMsQ0FBQztHQTNEUTdCLE9BQU87O1FBQ0dILHVEQUFZO1FBQ1BDLGtFQUFTOzs7S0FGeEJFLE9BQU87QUE2RGhCLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NlcnZpY2VzL2luZGV4LmpzeD9lYzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFNpbXBsZUdyaWQsXG4gIFN0YWNrLFxuICBIZWFkaW5nLFxuICBUZXh0LFxuICBTdGFja0RpdmlkZXIsXG4gIEZsZXgsXG4gIEltYWdlLFxuICBJY29uLFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgQ29udGFpbmVyLFxuICB1c2VCcmVha3BvaW50VmFsdWUsXG4gIEJveCxcbiAgQnV0dG9uLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuXG5pbXBvcnQge1xuICBJb0FuYWx5dGljc1NoYXJwLFxuICBJb0xvZ29CaXRjb2luLFxuICBJb1NlYXJjaFNoYXJwLFxufSBmcm9tIFwicmVhY3QtaWNvbnMvaW81XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiwgdXNlQW5pbWF0aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZUluVmlldyB9IGZyb20gXCJyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIjtcbmltcG9ydCB7IHRleHRWYXJpYW50IH0gZnJvbSBcInNyYy91dGlscy9tb3Rpb25cIjtcblxuZnVuY3Rpb24gU2VydmljZSgpIHtcbiAgY29uc3QgY29udHJvbHMgPSB1c2VBbmltYXRpb24oKTtcbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldygpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGluVmlldykge1xuICAgICAgY29udHJvbHMuc3RhcnQoeyBvcGFjaXR5OiAxLCB5OiAwIH0pO1xuICAgIH1cbiAgfSwgW2NvbnRyb2xzLCBpblZpZXddKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3ggcHk9ezR9PlxuICAgICAgPFN0YWNrIG1pbkg9e1wiMTAwdmhcIn0gZGlyZWN0aW9uPXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcInJvd1wiIH19PlxuICAgICAgICA8RmxleCBwPXs4fSBmbGV4PXsxfSBqdXN0aWZ5PXtcImNlbnRlclwifT5cbiAgICAgICAgICA8U3RhY2sgc3BhY2luZz17Nn0gdz17XCJmdWxsXCJ9IG1heFc9e1wibGdcIn0+XG4gICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT17eyBiYXNlOiBcIjN4bFwiLCBtZDogXCI0eGxcIiwgbGc6IFwiNXhsXCIgfX0+XG4gICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgYXM9e21vdGlvbi5wfVxuICAgICAgICAgICAgICAgIGNvbG9yPXtcIiM5OUVGRDBcIn1cbiAgICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIwLjdcIil9XG4gICAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogMjcsIHNtOiAzNSwgbWQ6IDQ4LCBsZzogMzAsIHhsOiA1NiB9fVxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9ezcwMH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1hbnkgcmVhc29ucyB0byBnZXQgdXAgYW5kIHN0YXJ0IHRvIGdldCBiYWNrIGluIHRoZSBidXNpbmVzc1xuICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICBhcz17bW90aW9uLnB9XG4gICAgICAgICAgICAgIHsuLi50ZXh0VmFyaWFudChcIjAuOVwiKX1cbiAgICAgICAgICAgICAgZm9udFNpemU9e3sgYmFzZTogXCJtZFwiLCBsZzogXCJsZ1wiIH19XG4gICAgICAgICAgICAgIGNvbG9yPXtcImdyYXkuNTAwXCJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFRoZSBoYXJkZXIgeW91IHdvcmsgZm9yIHNvbWV0aGluZywgdGhlIGdyZWF0ZXIgeW914oCZbGwgZmVlbCB3aGVuXG4gICAgICAgICAgICAgIHlvdSBhY2hpZXZlIGl0LlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFN0YWNrIGRpcmVjdGlvbj17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJyb3dcIiB9fSBzcGFjaW5nPXs0fT5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHJvdW5kZWQ9e1wibWRcIn1cbiAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICBiZz17XCJzZWNvbmRhcnlcIn1cbiAgICAgICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgICAgIGJnOiBcImJsdWUuNTAwXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIExlYXJuIE1vcmVcbiAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgIDwvRmxleD5cbiAgICAgICAgPEZsZXggZmxleD17MX0gcD1cIjRcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIGFsdD17XCJMb2dpbiBJbWFnZVwifVxuICAgICAgICAgICAgLy8gb2JqZWN0Rml0PXtcImNvdmVyXCJ9XG4gICAgICAgICAgICBzcmM9e1wiL2ltZy9tYW5fcnVuLnN2Z1wifVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRmxleD5cbiAgICAgIDwvU3RhY2s+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XG4iXSwibmFtZXMiOlsiU2ltcGxlR3JpZCIsIlN0YWNrIiwiSGVhZGluZyIsIlRleHQiLCJTdGFja0RpdmlkZXIiLCJGbGV4IiwiSW1hZ2UiLCJJY29uIiwidXNlQ29sb3JNb2RlVmFsdWUiLCJDb250YWluZXIiLCJ1c2VCcmVha3BvaW50VmFsdWUiLCJCb3giLCJCdXR0b24iLCJJb0FuYWx5dGljc1NoYXJwIiwiSW9Mb2dvQml0Y29pbiIsIklvU2VhcmNoU2hhcnAiLCJ1c2VFZmZlY3QiLCJtb3Rpb24iLCJ1c2VBbmltYXRpb24iLCJ1c2VJblZpZXciLCJ0ZXh0VmFyaWFudCIsIlNlcnZpY2UiLCJjb250cm9scyIsInJlZiIsImluVmlldyIsInN0YXJ0Iiwib3BhY2l0eSIsInkiLCJweSIsIm1pbkgiLCJkaXJlY3Rpb24iLCJiYXNlIiwibWQiLCJwIiwiZmxleCIsImp1c3RpZnkiLCJzcGFjaW5nIiwidyIsIm1heFciLCJmb250U2l6ZSIsImxnIiwiYXMiLCJjb2xvciIsInNtIiwieGwiLCJmb250V2VpZ2h0Iiwicm91bmRlZCIsImJnIiwiX2hvdmVyIiwiYWx0Iiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/services/index.jsx\n");

/***/ })

});