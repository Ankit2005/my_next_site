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

/***/ "./src/components/LatestNewsArticles.jsx":
/*!***********************************************!*\
  !*** ./src/components/LatestNewsArticles.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LatestNewsArticles; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var src_utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/motion */ \"./src/utils/motion.js\");\n/* harmony import */ var _CardTil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardTil */ \"./src/components/CardTil.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import NextImage from \"next/image\";\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction LatestNewsArticles() {\n    var _this = this;\n    _s();\n    var cards = [\n        {\n            title: \"Virtual Gym\",\n            img: \"https://picsum.photos/500/300/?random\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        },\n        {\n            title: \"Virtual Gym\",\n            img: \"https://picsum.photos/500/300/?random\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        },\n        {\n            title: \"Virtual Gym\",\n            img: \"https://picsum.photos/500/300/?random\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        }, \n    ];\n    var ref = _slicedToArray((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n        triggerOnce: false\n    }), 2), ref1 = ref[0], inView = ref[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-100), x = ref2[0], setX = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleScroll = function() {\n            console.log(\"dddddddddd\", window.scrollY);\n            if (window.scrollY >= 1730) {\n                setX(-100);\n            } else {\n                setX(0);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    var svgBackground = \"url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1234' height='527' viewBox='0 0 1234 527' fill='none'%3E%3Crect opacity='0.75' x='1126' y='64' width='232' height='232' rx='50' fill='%2315803D'/%3E%3Crect opacity='0.75' x='1017' y='325' width='202' height='202' rx='30' fill='%23A21CAF'/%3E%3Crect opacity='0.75' x='756' y='325' width='130' height='130' rx='30' fill='%23B45309'/%3E%3Crect opacity='0.75' x='457' width='161' height='161' rx='50' fill='%230369A1'/%3E%3Crect opacity='0.75' y='207' width='271' height='271' rx='50' fill='%23BE185D'/%3E%3C/svg%3E\\\")\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        d: \"flex\",\n        alignItems: \"center\",\n        justifyContent: {\n            base: \"space-between\"\n        },\n        flexDir: \"column\",\n        textAlign: {\n            base: \"center\",\n            lg: \"left\"\n        },\n        // p=\"4\"\n        className: \"gd\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, _objectSpread({\n                    display: {\n                        base: \"column\",\n                        md: \"flex\"\n                    },\n                    justifyContent: {\n                        base: \"space-between\"\n                    },\n                    alignItems: \"center\",\n                    as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_3__.textSlideVariant)(0.2, \"right\", inView), {\n                    w: {\n                        base: \"100%\",\n                        md: \"95%\"\n                    },\n                    mx: \"auto\",\n                    mt: \"4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            fontWeight: \"bold\",\n                            fontSize: {\n                                base: \"4xl\"\n                            },\n                            color: \"white\",\n                            children: \"The best of the best\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            borderColor: \"white\",\n                            color: \"white\",\n                            variant: \"outline\",\n                            children: \"Sign up now\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n                            lineNumber: 109,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }), void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    py: \"4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Wrap, {\n                        px: \"14\",\n                        mt: \"4\",\n                        ref: ref1,\n                        spacing: \"40px\",\n                        justify: \"center\",\n                        children: cards.map(function(item, i) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.WrapItem, {\n                                as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div,\n                                initial: \"hidden\",\n                                whileInView: \"visible\",\n                                viewport: {\n                                    once: true\n                                },\n                                transition: {\n                                    delay: i * 0.5,\n                                    duration: 1.2\n                                },\n                                width: {\n                                    base: \"100%\",\n                                    md: \"40%\",\n                                    lg: \"30%\"\n                                },\n                                variants: {\n                                    visible: {\n                                        opacity: inView ? 1 : 0,\n                                        scale: inView ? 1 : 0\n                                    },\n                                    hidden: {\n                                        opacity: inView ? 1 : 0,\n                                        scale: inView ? 1 : 0\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardTil__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        description: item.desc,\n                                        imageSrc: item.img,\n                                        title: item.title,\n                                        name: item.title,\n                                        image: item.img,\n                                        source_code_link: \"https://test.com/\",\n                                        index: i\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n                                        lineNumber: 132,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n                                    lineNumber: 131,\n                                    columnNumber: 17\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n                                lineNumber: 117,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n            lineNumber: 95,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/LatestNewsArticles.jsx\",\n        lineNumber: 83,\n        columnNumber: 5\n    }, this));\n};\n_s(LatestNewsArticles, \"pFLA4uFRnPI3HxyEnJ343+H4S/4=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c = LatestNewsArticles;\nvar _c;\n$RefreshReg$(_c, \"LatestNewsArticles\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MYXRlc3ROZXdzQXJ0aWNsZXMuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0J5QjtBQUV6QixFQUFzQztBQUVpQjtBQUMzQjtBQUNJO0FBQ0M7QUFDc0I7QUFNOUI7QUFDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVoQixRQUFRLENBQUNnQyxrQkFBa0IsR0FBRyxDQUFDOzs7SUFDNUMsR0FBSyxDQUFDQyxLQUFLLEdBQUcsQ0FBQztRQUNiLENBQUM7WUFDQ0MsS0FBSyxFQUFFLENBQWE7WUFDcEJDLEdBQUcsRUFBRSxDQUF1QztZQUM1Q0MsSUFBSSxFQUFFLENBQWdHO1FBQ3hHLENBQUM7UUFDRCxDQUFDO1lBQ0NGLEtBQUssRUFBRSxDQUFhO1lBQ3BCQyxHQUFHLEVBQUUsQ0FBdUM7WUFDNUNDLElBQUksRUFBRSxDQUFnRztRQUN4RyxDQUFDO1FBQ0QsQ0FBQztZQUNDRixLQUFLLEVBQUUsQ0FBYTtZQUNwQkMsR0FBRyxFQUFFLENBQXVDO1lBQzVDQyxJQUFJLEVBQUUsQ0FBZ0c7UUFDeEcsQ0FBQztJQUNILENBQUM7SUFFRCxHQUFLLENBQWlCVixHQUVwQixrQkFGb0JBLHNFQUFTLENBQUMsQ0FBQztRQUMvQlcsV0FBVyxFQUFFLEtBQUs7SUFDcEIsQ0FBQyxPQUZNQyxJQUFHLEdBQVlaLEdBRXBCLEtBRlVhLE1BQU0sR0FBSWIsR0FFcEI7SUFFRixHQUFLLENBQWFGLElBQWMsR0FBZEEsK0NBQVEsRUFBRSxHQUFHLEdBQXhCZ0IsQ0FBQyxHQUFVaEIsSUFBYyxLQUF0QmlCLElBQUksR0FBSWpCLElBQWM7SUFFaENDLGdEQUFTLENBQUMsUUFDWixHQURrQixDQUFDO1FBQ2YsR0FBSyxDQUFDaUIsWUFBWSxHQUFHLFFBQ3pCLEdBRCtCLENBQUM7WUFDMUJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQVks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Q0FDVEMsT0FBTyxFQUFFLENBQUM7d0NBQUNDLE9BQU8sRUFBRWpELE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQzt3Q0FBRWtELEtBQUssRUFBRWxELE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztvQ0FBQyxDQUFDO29DQUMzRG1ELE1BQU0sRUFBRSxDQUFDO3dDQUFDRixPQUFPLEVBQUVqRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0NBQUVrRCxLQUFLLEVBQUVsRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0NBQUMsQ0FBQztnQ0FDNUQsQ0FBQztzSEFHQXpCLG9EQUFNOzBIQUNKaUIsZ0RBQU87d0NBQ040RCxXQUFXLEVBQUVoQixJQUFJLENBQUN2QyxJQUFJO3dDQUN0QndELFFBQVEsRUFBRWpCLElBQUksQ0FBQ3hDLEdBQUc7d0NBQ2xCRCxLQUFLLEVBQUV5QyxJQUFJLENBQUN6QyxLQUFLO3dDQUNqQjJELElBQUksRUFBRWxCLElBQUksQ0FBQ3pDLEtBQUs7d0NBQ2hCNEQsS0FBSyxFQUFFbkIsSUFBSSxDQUFDeEMsR0FBRzt3Q0FDZjRELGdCQUFnQixFQUFDLENBQW1CO3dDQUNwQ0MsS0FBSyxFQUFFcEIsQ0FBQzs7Ozs7Ozs7Ozs7K0JBckJQQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQnRCLENBQUM7R0E3R3VCNUMsa0JBQWtCOztRQW1CbEJOLGtFQUFTOzs7S0FuQlRNLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9MYXRlc3ROZXdzQXJ0aWNsZXMuanN4PzQxNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIEhlYWRpbmcsXG4gIEltYWdlLFxuICBUZXh0LFxuICBDYXJkLFxuICBDYXJkQm9keSxcbiAgQ2FyZEZvb3RlcixcbiAgU3RhY2ssXG4gIERpdmlkZXIsXG4gIEJ1dHRvbkdyb3VwLFxuICBHcmlkLFxuICBHcmlkSXRlbSxcbiAgQXZhdGFyLFxuICBDZW50ZXIsXG4gIEZsZXgsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBXcmFwLFxuICBXcmFwSXRlbSxcbiAgSFN0YWNrLFxuICBUYWcsXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbi8vIGltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgc2xpZGVJbixcbiAgdGV4dFZhcmlhbnQsXG4gIHRleHRTbGlkZVZhcmlhbnQsXG4gIGNhcmRWYXJpYW50LFxufSBmcm9tIFwic3JjL3V0aWxzL21vdGlvblwiO1xuaW1wb3J0IENhcmRUaWwgZnJvbSBcIi4vQ2FyZFRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXRlc3ROZXdzQXJ0aWNsZXMoKSB7XG4gIGNvbnN0IGNhcmRzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlZpcnR1YWwgR3ltXCIsXG4gICAgICBpbWc6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzUwMC8zMDAvP3JhbmRvbVwiLFxuICAgICAgZGVzYzogXCJXZSBkZXNpZ25lZCBWaXJ0dWFsIEd5bSB0byBtYWtlIGl0IG1vcmUgY29udmVuaWVudCB0byBlbnN1cmUgdGhhdCB1c2VycyBvbmx5IGZvY3VzIG9uIGZpdG5lc3MuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJWaXJ0dWFsIEd5bVwiLFxuICAgICAgaW1nOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy81MDAvMzAwLz9yYW5kb21cIixcbiAgICAgIGRlc2M6IFwiV2UgZGVzaWduZWQgVmlydHVhbCBHeW0gdG8gbWFrZSBpdCBtb3JlIGNvbnZlbmllbnQgdG8gZW5zdXJlIHRoYXQgdXNlcnMgb25seSBmb2N1cyBvbiBmaXRuZXNzLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVmlydHVhbCBHeW1cIixcbiAgICAgIGltZzogXCJodHRwczovL3BpY3N1bS5waG90b3MvNTAwLzMwMC8/cmFuZG9tXCIsXG4gICAgICBkZXNjOiBcIldlIGRlc2lnbmVkIFZpcnR1YWwgR3ltIHRvIG1ha2UgaXQgbW9yZSBjb252ZW5pZW50IHRvIGVuc3VyZSB0aGF0IHVzZXJzIG9ubHkgZm9jdXMgb24gZml0bmVzcy5cIixcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IFtyZWYsIGluVmlld10gPSB1c2VJblZpZXcoe1xuICAgIHRyaWdnZXJPbmNlOiBmYWxzZSwgLy8gT25seSB0cmlnZ2VyIHRoZSBhbmltYXRpb24gb25jZVxuICB9KTtcblxuICBjb25zdCBbeCwgc2V0WF0gPSB1c2VTdGF0ZSgtMTAwKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGRkZGRkZGRkZFwiLCB3aW5kb3cuc2Nyb2xsWSk7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gMTczMCkge1xuICAgICAgICBzZXRYKC0xMDApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0WCgwKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcblxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc3ZnQmFja2dyb3VuZCA9IGB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzEyMzQnIGhlaWdodD0nNTI3JyB2aWV3Qm94PScwIDAgMTIzNCA1MjcnIGZpbGw9J25vbmUnJTNFJTNDcmVjdCBvcGFjaXR5PScwLjc1JyB4PScxMTI2JyB5PSc2NCcgd2lkdGg9JzIzMicgaGVpZ2h0PScyMzInIHJ4PSc1MCcgZmlsbD0nJTIzMTU4MDNEJy8lM0UlM0NyZWN0IG9wYWNpdHk9JzAuNzUnIHg9JzEwMTcnIHk9JzMyNScgd2lkdGg9JzIwMicgaGVpZ2h0PScyMDInIHJ4PSczMCcgZmlsbD0nJTIzQTIxQ0FGJy8lM0UlM0NyZWN0IG9wYWNpdHk9JzAuNzUnIHg9Jzc1NicgeT0nMzI1JyB3aWR0aD0nMTMwJyBoZWlnaHQ9JzEzMCcgcng9JzMwJyBmaWxsPSclMjNCNDUzMDknLyUzRSUzQ3JlY3Qgb3BhY2l0eT0nMC43NScgeD0nNDU3JyB3aWR0aD0nMTYxJyBoZWlnaHQ9JzE2MScgcng9JzUwJyBmaWxsPSclMjMwMzY5QTEnLyUzRSUzQ3JlY3Qgb3BhY2l0eT0nMC43NScgeT0nMjA3JyB3aWR0aD0nMjcxJyBoZWlnaHQ9JzI3MScgcng9JzUwJyBmaWxsPSclMjNCRTE4NUQnLyUzRSUzQy9zdmclM0VcIilgO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZD1cImZsZXhcIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBqdXN0aWZ5Q29udGVudD17eyBiYXNlOiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgZmxleERpcj1cImNvbHVtblwiXG4gICAgICB0ZXh0QWxpZ249e3sgYmFzZTogXCJjZW50ZXJcIiwgbGc6IFwibGVmdFwiIH19XG4gICAgICAvLyBwPVwiNFwiXG5cbiAgICAgIGNsYXNzTmFtZT1cImdkXCJcblxuICAgICAgLy8gYmdTcXVhcmVcbiAgICA+XG4gICAgICA8Qm94PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgZGlzcGxheT17eyBiYXNlOiBcImNvbHVtblwiLCBtZDogXCJmbGV4XCIgfX1cbiAgICAgICAgICBqdXN0aWZ5Q29udGVudD17eyBiYXNlOiBcInNwYWNlLWJldHdlZW5cIiB9fVxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIGFzPXttb3Rpb24ucH1cbiAgICAgICAgICB7Li4udGV4dFNsaWRlVmFyaWFudCgwLjIsIFwicmlnaHRcIiwgaW5WaWV3KX1cbiAgICAgICAgICB3PXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCI5NSVcIiB9fVxuICAgICAgICAgIG14PVwiYXV0b1wiXG4gICAgICAgICAgbXQ9XCI0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9e3sgYmFzZTogXCI0eGxcIiB9fSBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgICBUaGUgYmVzdCBvZiB0aGUgYmVzdFxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8QnV0dG9uIGJvcmRlckNvbG9yPVwid2hpdGVcIiBjb2xvcj1cIndoaXRlXCIgdmFyaWFudD1cIm91dGxpbmVcIj5cbiAgICAgICAgICAgIFNpZ24gdXAgbm93XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggcHk9XCI0XCI+XG4gICAgICAgICAgPFdyYXAgcHg9XCIxNFwiIG10PVwiNFwiIHJlZj17cmVmfSBzcGFjaW5nPVwiNDBweFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIHtjYXJkcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPFdyYXBJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIGFzPXttb3Rpb24uZGl2fVxuICAgICAgICAgICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiXG4gICAgICAgICAgICAgICAgdmlld3BvcnQ9e3sgb25jZTogdHJ1ZSB9fVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IGkgKiAwLjUsIGR1cmF0aW9uOiAxLjIgfX1cbiAgICAgICAgICAgICAgICB3aWR0aD17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiNDAlXCIsIGxnOiBcIjMwJVwiIH19XG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e3tcbiAgICAgICAgICAgICAgICAgIHZpc2libGU6IHsgb3BhY2l0eTogaW5WaWV3ID8gMSA6IDAsIHNjYWxlOiBpblZpZXcgPyAxIDogMCB9LFxuICAgICAgICAgICAgICAgICAgaGlkZGVuOiB7IG9wYWNpdHk6IGluVmlldyA/IDEgOiAwLCBzY2FsZTogaW5WaWV3ID8gMSA6IDAgfSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8vIHsuLi5jYXJkVmFyaWFudChpICogMC40LCBpblZpZXcpfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPENlbnRlcj5cbiAgICAgICAgICAgICAgICAgIDxDYXJkVGlsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmRlc2N9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlU3JjPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgICAgc291cmNlX2NvZGVfbGluaz1cImh0dHBzOi8vdGVzdC5jb20vXCJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2l9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9XcmFwPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIkhlYWRpbmciLCJJbWFnZSIsIlRleHQiLCJDYXJkIiwiQ2FyZEJvZHkiLCJDYXJkRm9vdGVyIiwiU3RhY2siLCJEaXZpZGVyIiwiQnV0dG9uR3JvdXAiLCJHcmlkIiwiR3JpZEl0ZW0iLCJBdmF0YXIiLCJDZW50ZXIiLCJGbGV4IiwidXNlQ29sb3JNb2RlVmFsdWUiLCJXcmFwIiwiV3JhcEl0ZW0iLCJIU3RhY2siLCJUYWciLCJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJMaW5rIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VJblZpZXciLCJzbGlkZUluIiwidGV4dFZhcmlhbnQiLCJ0ZXh0U2xpZGVWYXJpYW50IiwiY2FyZFZhcmlhbnQiLCJDYXJkVGlsIiwiTGF0ZXN0TmV3c0FydGljbGVzIiwiY2FyZHMiLCJ0aXRsZSIsImltZyIsImRlc2MiLCJ0cmlnZ2VyT25jZSIsInJlZiIsImluVmlldyIsIngiLCJzZXRYIiwiaGFuZGxlU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN2Z0JhY2tncm91bmQiLCJkIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFzZSIsImZsZXhEaXIiLCJ0ZXh0QWxpZ24iLCJsZyIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJtZCIsImFzIiwicCIsInciLCJteCIsIm10IiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwiY29sb3IiLCJib3JkZXJDb2xvciIsInZhcmlhbnQiLCJweSIsInB4Iiwic3BhY2luZyIsImp1c3RpZnkiLCJtYXAiLCJpdGVtIiwiaSIsImRpdiIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwid2lkdGgiLCJ2YXJpYW50cyIsInZpc2libGUiLCJvcGFjaXR5Iiwic2NhbGUiLCJoaWRkZW4iLCJkZXNjcmlwdGlvbiIsImltYWdlU3JjIiwibmFtZSIsImltYWdlIiwic291cmNlX2NvZGVfbGluayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/LatestNewsArticles.jsx\n");

/***/ })

});