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

/***/ "./src/components/Work.jsx":
/*!*********************************!*\
  !*** ./src/components/Work.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var src_utils_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/utils/motion */ \"./src/utils/motion.js\");\n/* harmony import */ var _CardTil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardTil */ \"./src/components/CardTil.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n// import NextImage from \"next/image\";\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Work() {\n    var _this = this;\n    _s();\n    var cards = [\n        {\n            title: \"Virtual Gym\",\n            img: \"https://picsum.photos/500/300/?random\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        },\n        {\n            title: \"Virtual Gym\",\n            img: \"https://picsum.photos/500/300/?random\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        },\n        {\n            title: \"Virtual Gym\",\n            img: \"https://picsum.photos/500/300/?random\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        }, \n    ];\n    var ref = _slicedToArray((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView)({\n        triggerOnce: false\n    }), 2), ref1 = ref[0], inView = ref[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(-100), x = ref2[0], setX = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        aos__WEBPACK_IMPORTED_MODULE_1___default().init({\n        });\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        var handleScroll = function() {\n            console.log(\"dddddddddd\", window.scrollY);\n            if (window.scrollY >= 1730) {\n                setX(-100);\n            } else {\n                setX(0);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    var svgBackground = \"url(\\\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1234' height='527' viewBox='0 0 1234 527' fill='none'%3E%3Crect opacity='0.75' x='1126' y='64' width='232' height='232' rx='50' fill='%2315803D'/%3E%3Crect opacity='0.75' x='1017' y='325' width='202' height='202' rx='30' fill='%23A21CAF'/%3E%3Crect opacity='0.75' x='756' y='325' width='130' height='130' rx='30' fill='%23B45309'/%3E%3Crect opacity='0.75' x='457' width='161' height='161' rx='50' fill='%230369A1'/%3E%3Crect opacity='0.75' y='207' width='271' height='271' rx='50' fill='%23BE185D'/%3E%3C/svg%3E\\\")\";\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n        display: \"flex\",\n        alignItems: \"center\",\n        justifyContent: {\n            base: \"space-between\"\n        },\n        flexDir: \"column\",\n        textAlign: {\n            base: \"center\",\n            lg: \"left\"\n        },\n        // p=\"4\"\n        className: \"gd\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    display: {\n                        base: \"column\",\n                        md: \"flex\"\n                    },\n                    justifyContent: {\n                        base: \"space-between\"\n                    },\n                    alignItems: \"center\",\n                    w: {\n                        base: \"100%\",\n                        md: \"95%\"\n                    },\n                    mx: \"auto\",\n                    mt: \"4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Text, {\n                            fontWeight: \"bold\",\n                            fontSize: {\n                                base: \"4xl\"\n                            },\n                            color: \"white\",\n                            children: \"The best of the best\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            borderColor: \"white\",\n                            color: \"white\",\n                            variant: \"outline\",\n                            children: \"Sign up now\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {\n                    py: \"4\",\n                    background: svgBackground,\n                    backgroundSize: \"auto\",\n                    backgroundRepeat: \"no-repeat\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Wrap, {\n                        px: {\n                            base: 2,\n                            md: 6,\n                            lg: 4,\n                            xl: 14\n                        },\n                        mt: \"4\",\n                        ref: ref1,\n                        spacing: \"40px\",\n                        justify: \"center\",\n                        children: cards.map(function(item, i) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.WrapItem, {\n                                width: {\n                                    base: \"100%\",\n                                    md: \"40%\",\n                                    lg: \"40%\",\n                                    xl: \"30%\"\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Center, {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardTil__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        description: item.desc,\n                                        imageSrc: item.img,\n                                        title: item.title,\n                                        name: item.title,\n                                        image: item.img,\n                                        source_code_link: \"https://test.com/\",\n                                        index: i\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                                    lineNumber: 139,\n                                    columnNumber: 17\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                                lineNumber: 133,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n        lineNumber: 90,\n        columnNumber: 5\n    }, this));\n};\n_s(Work, \"/MYh6A7Id0IIOPsW8zwdu4BqGHQ=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView\n    ];\n});\n_c = Work;\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Xb3JrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNCeUI7QUFDSjtBQUNJO0FBRXpCLEVBQXNDO0FBRWlCO0FBQzNCO0FBQ0k7QUFDQztBQUNzQjtBQU05QjtBQUNNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEIsUUFBUSxDQUFDaUMsSUFBSSxHQUFHLENBQUM7OztJQUM5QixHQUFLLENBQUNDLEtBQUssR0FBRyxDQUFDO1FBQ2IsQ0FBQztZQUNDQyxLQUFLLEVBQUUsQ0FBYTtZQUNwQkMsR0FBRyxFQUFFLENBQXVDO1lBQzVDQyxJQUFJLEVBQUUsQ0FBZ0c7UUFDeEcsQ0FBQztRQUNELENBQUM7WUFDQ0YsS0FBSyxFQUFFLENBQWE7WUFDcEJDLEdBQUcsRUFBRSxDQUF1QztZQUM1Q0MsSUFBSSxFQUFFLENBQWdHO1FBQ3hHLENBQUM7UUFDRCxDQUFDO1lBQ0NGLEtBQUssRUFBRSxDQUFhO1lBQ3BCQyxHQUFHLEVBQUUsQ0FBdUM7WUFDNUNDLElBQUksRUFBRSxDQUFnRztRQUN4RyxDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBaUJWLEdBRXBCLGtCQUZvQkEsc0VBQVMsQ0FBQyxDQUFDO1FBQy9CVyxXQUFXLEVBQUUsS0FBSztJQUNwQixDQUFDLE9BRk1DLElBQUcsR0FBWVosR0FFcEIsS0FGVWEsTUFBTSxHQUFJYixHQUVwQjtJQUVGLEdBQUssQ0FBYUYsSUFBYyxHQUFkQSwrQ0FBUSxFQUFFLEdBQUcsR0FBeEJnQixDQUFDLEdBQVVoQixJQUFjLEtBQXRCaUIsSUFBSSxHQUFJakIsSUFBYztJQUNoQ0MsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZkwsK0NBQVEsQ0FBQyxDQUFDO1FBRVYsQ0FBQztJQUNILENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTEssZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7UUFDZixHQUFLLENBQUNrQixZQUFZLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztZQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBWSxhQUFFQyxNQUFNLENBQUNDLE9BQU87WUFDeEMsRUFBRSxFQUFFRCxNQUFNLENBQUNDLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDM0JOLElBQUksRUFBRSxHQUFHO1lBQ1gsQ0FBQyxNQUFNLENBQUM7Z0JBQ05BLElBQUksQ0FBQyxDQUFDO1lBQ1IsQ0FBQztRQUNILENBQUM7UUFFREssTUFBTSxDQUFDRSxnQkFBZ0IsQ0FBQyxDQUFRLFNBQUVMLFlBQVk7UUFFOUMsTUFBTSxDQUFDLFFBQVE7WUFBRkcsTUFBTSxDQUFOQSxNQUFNLENBQUNHLG1CQUFtQixDQUFDLENBQVEsU0FBRU4sWUFBWTs7SUFDaEUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLEdBQUssQ0FBQ08sYUFBYSxHQUFJLENBQTBrQjtJQUVqbUIsTUFBTSw2RUFDSG5ELGlEQUFHO1FBQ0ZvRCxPQUFPLEVBQUMsQ0FBTTtRQUNkQyxVQUFVLEVBQUMsQ0FBUTtRQUNuQkMsY0FBYyxFQUFFLENBQUM7WUFBQ0MsSUFBSSxFQUFFLENBQWU7UUFBQyxDQUFDO1FBQ3pDQyxPQUFPLEVBQUMsQ0FBUTtRQUNoQkMsU0FBUyxFQUFFLENBQUM7WUFBQ0YsSUFBSSxFQUFFLENBQVE7WUFBRUcsRUFBRSxFQUFFLENBQU07UUFBQyxDQUFDO1FBQ3pDLEVBQVE7UUFFUkMsU0FBUyxFQUFDLENBQUk7OEZBSWIzRCxpREFBRzs7NEZBQ0RBLGlEQUFHO29CQUNGb0QsT0FBTyxFQUFFLENBQUM7d0JBQUNHLElBQUksRUFBRSxDQUFRO3dCQUFFSyxFQUFFLEVBQUUsQ0FBTTtvQkFBQyxDQUFDO29CQUN2Q04sY0FBYyxFQUFFLENBQUM7d0JBQUNDLElBQUksRUFBRSxDQUFlO29CQUFDLENBQUM7b0JBQ3pDRixVQUFVLEVBQUMsQ0FBUTtvQkFDbkJRLENBQUMsRUFBRSxDQUFDO3dCQUFDTixJQUFJLEVBQUUsQ0FBTTt3QkFBRUssRUFBRSxFQUFFLENBQUs7b0JBQUMsQ0FBQztvQkFDOUJFLEVBQUUsRUFBQyxDQUFNO29CQUNUQyxFQUFFLEVBQUMsQ0FBRzs7b0dBRUwzRCxrREFBSTs0QkFBQzRELFVBQVUsRUFBQyxDQUFNOzRCQUFDQyxRQUFRLEVBQUUsQ0FBQztnQ0FBQ1YsSUFBSSxFQUFFLENBQUs7NEJBQUMsQ0FBQzs0QkFBRVcsS0FBSyxFQUFDLENBQU87c0NBQUMsQ0FFakU7Ozs7OztvR0FDQ2pFLG9EQUFNOzRCQUFDa0UsV0FBVyxFQUFDLENBQU87NEJBQUNELEtBQUssRUFBQyxDQUFPOzRCQUFDRSxPQUFPLEVBQUMsQ0FBUztzQ0FBQyxDQUU1RDs7Ozs7Ozs7Ozs7OzRGQUdEcEUsaURBQUc7b0JBQ0ZxRSxFQUFFLEVBQUMsQ0FBRztvQkFDTkMsVUFBVSxFQUFFbkIsYUFBYTtvQkFDekJvQixjQUFjLEVBQUMsQ0FBTTtvQkFDckJDLGdCQUFnQixFQUFDLENBQVc7MEdBRTNCdkQsa0RBQUk7d0JBQ0h3RCxFQUFFLEVBQUUsQ0FBQzs0QkFBQ2xCLElBQUksRUFBRSxDQUFDOzRCQUFFSyxFQUFFLEVBQUUsQ0FBQzs0QkFBRUYsRUFBRSxFQUFFLENBQUM7NEJBQUVnQixFQUFFLEVBQUUsRUFBRTt3QkFBQyxDQUFDO3dCQUNyQ1gsRUFBRSxFQUFDLENBQUc7d0JBQ054QixHQUFHLEVBQUVBLElBQUc7d0JBQ1JvQyxPQUFPLEVBQUMsQ0FBTTt3QkFDZEMsT0FBTyxFQUFDLENBQVE7a0NBRWYxQyxLQUFLLENBQUMyQyxHQUFHLENBQUMsUUFBUSxDQUFQQyxJQUFJLEVBQUVDLENBQUM7MENBQ2pCLE1BQU0sK0RBQUw3RCxzREFBUTtnQ0FFUDhELEtBQUssRUFBRSxDQUFDO29DQUFDekIsSUFBSSxFQUFFLENBQU07b0NBQUVLLEVBQUUsRUFBRSxDQUFLO29DQUFFRixFQUFFLEVBQUUsQ0FBSztvQ0FBRWdCLEVBQUUsRUFBRSxDQUFLO2dDQUFDLENBQUM7c0hBSXZENUQsb0RBQU07MEhBQ0prQixnREFBTzt3Q0FDTmlELFdBQVcsRUFBRUgsSUFBSSxDQUFDekMsSUFBSTt3Q0FDdEI2QyxRQUFRLEVBQUVKLElBQUksQ0FBQzFDLEdBQUc7d0NBQ2xCRCxLQUFLLEVBQUUyQyxJQUFJLENBQUMzQyxLQUFLO3dDQUNqQmdELElBQUksRUFBRUwsSUFBSSxDQUFDM0MsS0FBSzt3Q0FDaEJpRCxLQUFLLEVBQUVOLElBQUksQ0FBQzFDLEdBQUc7d0NBQ2ZpRCxnQkFBZ0IsRUFBQyxDQUFtQjt3Q0FDcENDLEtBQUssRUFBRVAsQ0FBQzs7Ozs7Ozs7Ozs7K0JBYlBBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCdEIsQ0FBQztHQW5IdUI5QyxJQUFJOztRQW1CSk4sa0VBQVM7OztLQW5CVE0sSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Xb3JrLmpzeD8xMzVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEJveCxcbiAgQnV0dG9uLFxuICBIZWFkaW5nLFxuICBJbWFnZSxcbiAgVGV4dCxcbiAgQ2FyZCxcbiAgQ2FyZEJvZHksXG4gIENhcmRGb290ZXIsXG4gIFN0YWNrLFxuICBEaXZpZGVyLFxuICBCdXR0b25Hcm91cCxcbiAgR3JpZCxcbiAgR3JpZEl0ZW0sXG4gIEF2YXRhcixcbiAgQ2VudGVyLFxuICBGbGV4LFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgV3JhcCxcbiAgV3JhcEl0ZW0sXG4gIEhTdGFjayxcbiAgVGFnLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XG5cbi8vIGltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgc2xpZGVJbixcbiAgdGV4dFZhcmlhbnQsXG4gIHRleHRTbGlkZVZhcmlhbnQsXG4gIGNhcmRWYXJpYW50LFxufSBmcm9tIFwic3JjL3V0aWxzL21vdGlvblwiO1xuaW1wb3J0IENhcmRUaWwgZnJvbSBcIi4vQ2FyZFRpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JrKCkge1xuICBjb25zdCBjYXJkcyA9IFtcbiAgICB7XG4gICAgICB0aXRsZTogXCJWaXJ0dWFsIEd5bVwiLFxuICAgICAgaW1nOiBcImh0dHBzOi8vcGljc3VtLnBob3Rvcy81MDAvMzAwLz9yYW5kb21cIixcbiAgICAgIGRlc2M6IFwiV2UgZGVzaWduZWQgVmlydHVhbCBHeW0gdG8gbWFrZSBpdCBtb3JlIGNvbnZlbmllbnQgdG8gZW5zdXJlIHRoYXQgdXNlcnMgb25seSBmb2N1cyBvbiBmaXRuZXNzLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVmlydHVhbCBHeW1cIixcbiAgICAgIGltZzogXCJodHRwczovL3BpY3N1bS5waG90b3MvNTAwLzMwMC8/cmFuZG9tXCIsXG4gICAgICBkZXNjOiBcIldlIGRlc2lnbmVkIFZpcnR1YWwgR3ltIHRvIG1ha2UgaXQgbW9yZSBjb252ZW5pZW50IHRvIGVuc3VyZSB0aGF0IHVzZXJzIG9ubHkgZm9jdXMgb24gZml0bmVzcy5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlZpcnR1YWwgR3ltXCIsXG4gICAgICBpbWc6IFwiaHR0cHM6Ly9waWNzdW0ucGhvdG9zLzUwMC8zMDAvP3JhbmRvbVwiLFxuICAgICAgZGVzYzogXCJXZSBkZXNpZ25lZCBWaXJ0dWFsIEd5bSB0byBtYWtlIGl0IG1vcmUgY29udmVuaWVudCB0byBlbnN1cmUgdGhhdCB1c2VycyBvbmx5IGZvY3VzIG9uIGZpdG5lc3MuXCIsXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBbcmVmLCBpblZpZXddID0gdXNlSW5WaWV3KHtcbiAgICB0cmlnZ2VyT25jZTogZmFsc2UsIC8vIE9ubHkgdHJpZ2dlciB0aGUgYW5pbWF0aW9uIG9uY2VcbiAgfSk7XG5cbiAgY29uc3QgW3gsIHNldFhdID0gdXNlU3RhdGUoLTEwMCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQU9TLmluaXQoe1xuICAgICAgLy8gQ3VzdG9taXplIEFPUyBvcHRpb25zIGhlcmVcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJkZGRkZGRkZGRkXCIsIHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAxNzMwKSB7XG4gICAgICAgIHNldFgoLTEwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRYKDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzdmdCYWNrZ3JvdW5kID0gYHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMTIzNCcgaGVpZ2h0PSc1MjcnIHZpZXdCb3g9JzAgMCAxMjM0IDUyNycgZmlsbD0nbm9uZSclM0UlM0NyZWN0IG9wYWNpdHk9JzAuNzUnIHg9JzExMjYnIHk9JzY0JyB3aWR0aD0nMjMyJyBoZWlnaHQ9JzIzMicgcng9JzUwJyBmaWxsPSclMjMxNTgwM0QnLyUzRSUzQ3JlY3Qgb3BhY2l0eT0nMC43NScgeD0nMTAxNycgeT0nMzI1JyB3aWR0aD0nMjAyJyBoZWlnaHQ9JzIwMicgcng9JzMwJyBmaWxsPSclMjNBMjFDQUYnLyUzRSUzQ3JlY3Qgb3BhY2l0eT0nMC43NScgeD0nNzU2JyB5PSczMjUnIHdpZHRoPScxMzAnIGhlaWdodD0nMTMwJyByeD0nMzAnIGZpbGw9JyUyM0I0NTMwOScvJTNFJTNDcmVjdCBvcGFjaXR5PScwLjc1JyB4PSc0NTcnIHdpZHRoPScxNjEnIGhlaWdodD0nMTYxJyByeD0nNTAnIGZpbGw9JyUyMzAzNjlBMScvJTNFJTNDcmVjdCBvcGFjaXR5PScwLjc1JyB5PScyMDcnIHdpZHRoPScyNzEnIGhlaWdodD0nMjcxJyByeD0nNTAnIGZpbGw9JyUyM0JFMTg1RCcvJTNFJTNDL3N2ZyUzRVwiKWA7XG5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PXt7IGJhc2U6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICBmbGV4RGlyPVwiY29sdW1uXCJcbiAgICAgIHRleHRBbGlnbj17eyBiYXNlOiBcImNlbnRlclwiLCBsZzogXCJsZWZ0XCIgfX1cbiAgICAgIC8vIHA9XCI0XCJcblxuICAgICAgY2xhc3NOYW1lPVwiZ2RcIlxuXG4gICAgICAvLyBiZ1NxdWFyZVxuICAgID5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcImZsZXhcIiB9fVxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXt7IGJhc2U6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgdz17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiOTUlXCIgfX1cbiAgICAgICAgICBteD1cImF1dG9cIlxuICAgICAgICAgIG10PVwiNFwiXG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPXt7IGJhc2U6IFwiNHhsXCIgfX0gY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgICAgVGhlIGJlc3Qgb2YgdGhlIGJlc3RcbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJ1dHRvbiBib3JkZXJDb2xvcj1cIndoaXRlXCIgY29sb3I9XCJ3aGl0ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICBTaWduIHVwIG5vd1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94XG4gICAgICAgICAgcHk9XCI0XCJcbiAgICAgICAgICBiYWNrZ3JvdW5kPXtzdmdCYWNrZ3JvdW5kfVxuICAgICAgICAgIGJhY2tncm91bmRTaXplPVwiYXV0b1wiXG4gICAgICAgICAgYmFja2dyb3VuZFJlcGVhdD1cIm5vLXJlcGVhdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8V3JhcFxuICAgICAgICAgICAgcHg9e3sgYmFzZTogMiwgbWQ6IDYsIGxnOiA0LCB4bDogMTQgfX1cbiAgICAgICAgICAgIG10PVwiNFwiXG4gICAgICAgICAgICByZWY9e3JlZn1cbiAgICAgICAgICAgIHNwYWNpbmc9XCI0MHB4XCJcbiAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjYXJkcy5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgPFdyYXBJdGVtXG4gICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgIHdpZHRoPXt7IGJhc2U6IFwiMTAwJVwiLCBtZDogXCI0MCVcIiwgbGc6IFwiNDAlXCIsIHhsOiBcIjMwJVwiIH19XG5cbiAgICAgICAgICAgICAgICAvLyB7Li4uY2FyZFZhcmlhbnQoaSAqIDAuNCwgaW5WaWV3KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDZW50ZXI+XG4gICAgICAgICAgICAgICAgICA8Q2FyZFRpbFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNyYz17aXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17aXRlbS5pbWd9XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZV9jb2RlX2xpbms9XCJodHRwczovL3Rlc3QuY29tL1wiXG4gICAgICAgICAgICAgICAgICAgIGluZGV4PXtpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvV3JhcD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJIZWFkaW5nIiwiSW1hZ2UiLCJUZXh0IiwiQ2FyZCIsIkNhcmRCb2R5IiwiQ2FyZEZvb3RlciIsIlN0YWNrIiwiRGl2aWRlciIsIkJ1dHRvbkdyb3VwIiwiR3JpZCIsIkdyaWRJdGVtIiwiQXZhdGFyIiwiQ2VudGVyIiwiRmxleCIsInVzZUNvbG9yTW9kZVZhbHVlIiwiV3JhcCIsIldyYXBJdGVtIiwiSFN0YWNrIiwiVGFnIiwiQU9TIiwiQW5pbWF0ZVByZXNlbmNlIiwibW90aW9uIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlSW5WaWV3Iiwic2xpZGVJbiIsInRleHRWYXJpYW50IiwidGV4dFNsaWRlVmFyaWFudCIsImNhcmRWYXJpYW50IiwiQ2FyZFRpbCIsIldvcmsiLCJjYXJkcyIsInRpdGxlIiwiaW1nIiwiZGVzYyIsInRyaWdnZXJPbmNlIiwicmVmIiwiaW5WaWV3IiwieCIsInNldFgiLCJpbml0IiwiaGFuZGxlU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN2Z0JhY2tncm91bmQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFzZSIsImZsZXhEaXIiLCJ0ZXh0QWxpZ24iLCJsZyIsImNsYXNzTmFtZSIsIm1kIiwidyIsIm14IiwibXQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImJvcmRlckNvbG9yIiwidmFyaWFudCIsInB5IiwiYmFja2dyb3VuZCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsInB4IiwieGwiLCJzcGFjaW5nIiwianVzdGlmeSIsIm1hcCIsIml0ZW0iLCJpIiwid2lkdGgiLCJkZXNjcmlwdGlvbiIsImltYWdlU3JjIiwibmFtZSIsImltYWdlIiwic291cmNlX2NvZGVfbGluayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Work.jsx\n");

/***/ })

});