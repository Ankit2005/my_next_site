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

/***/ "./src/components/UiInteractionDesign.jsx":
/*!************************************************!*\
  !*** ./src/components/UiInteractionDesign.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var src_utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/utils/motion */ \"./src/utils/motion.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar UiInteractionDesign = function() {\n    var _this1 = _this;\n    _s();\n    var list = [\n        {\n            title: \"Hire Dedicated Developers\",\n            img: \"/img/timer.svg\",\n            desc: \"Create your own team of\\n      developers for your software\\n      development project on short term,\\n      long term or permanent basis with\\n      guaranteed project delivery at\\n      affordable prices.\"\n        },\n        {\n            title: \"Mobile Apps\",\n            img: \"/img/puzzle.svg\",\n            desc: \"We build intuitive and engaging\\n      Android, iOS and cross-platform\\n      apps for businesses, consumers\\n      and enterprises that end users love\\n      and adapt to them very quickly.\"\n        },\n        {\n            title: \"UI/UX Design\",\n            img: \"/img/color.svg\",\n            desc: \"Starting from concept, information\\n      architecture, visual identity and\\n      UI/UX design, our team delivers\\n      dazzling experiences for maximum\\n      user engagement.\"\n        },\n        {\n            title: \"Web Development\",\n            img: \"/img/search.svg\",\n            desc: \"Our design approach is to\\n          simplify. We embrace the joy in\\n          creating something unique that\\n          is easy for end users.\"\n        }, \n    ];\n    var scrollYProgress = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useViewportScroll)().scrollYProgress;\n    var opacity = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform)(scrollYProgress, [\n        0,\n        0.5\n    ], [\n        0,\n        1\n    ]);\n    var ref = _slicedToArray((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView)({\n        triggerOnce: false\n    }), 2), ref1 = ref[0], inView = ref[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        p: \"6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                mt: \"16\",\n                mx: \"10\",\n                textAlign: \"center\",\n                fontSize: \"6xl\",\n                color: \"#878787\",\n                children: [\n                    \"I’m a designer specialising in\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        as: \"span\",\n                        fontWeight: \"bold\",\n                        color: \"white\",\n                        children: \"UI/UX\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this),\n                    \" \",\n                    \"and\",\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                        as: \"span\",\n                        fontWeight: \"bold\",\n                        color: \"white\",\n                        children: \"Interaction Design\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                p: \"4\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                w: \"full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                    // objectFit=\"cover\"\n                    boxSize: 1200,\n                    height: 420,\n                    src: \"/img/ui-ux.svg\",\n                    alt: \"Dan Abramov\"\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                    lineNumber: 83,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                mt: \"28\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Wrap, {\n                    ref: ref1,\n                    spacing: \"28px\",\n                    justify: \"center\",\n                    children: list.map(function(item, i) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.WrapItem, {\n                            as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div,\n                            initial: \"hidden\",\n                            whileInView: \"visible\",\n                            borderRadius: 16,\n                            bg: \"#121839\",\n                            transition: {\n                                delay: i * 0.8,\n                                duration: 1.5\n                            },\n                            variants: {\n                                visible: {\n                                    opacity: inView ? 1 : 0,\n                                    scale: inView ? 1 : 0\n                                },\n                                hidden: {\n                                    opacity: inView ? 1 : 0,\n                                    scale: inView ? 1 : 0\n                                }\n                            },\n                            width: {\n                                base: \"100%\",\n                                sm: \"100%\",\n                                md: \"40%\",\n                                lg: \"344px\",\n                                xl: \"22%\"\n                            },\n                            px: [\n                                3,\n                                5\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Center, {\n                                py: 2,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                    overscroll: \"auto\",\n                                    //maxW={\"445px\"}\n                                    // border=\"1px\"\n                                    // borderColor=\"primaryBorder\"\n                                    w: \"full\",\n                                    bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useColorModeValue)(\"bgGradientPrimary\", \"bgGradientPrimary\"),\n                                    rounded: \"md\",\n                                    p: 2,\n                                    overflow: \"hidden\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                                            as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div,\n                                            display: \"flex\",\n                                            justifyContent: \"space-between\",\n                                            alignItems: \"center\",\n                                            initial: \"hidden\",\n                                            whileInView: \"show\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                                                borderRadius: 10,\n                                                src: item.img,\n                                                boxSize: \"100px\",\n                                                objectFit: \"cover\",\n                                                alt: item.title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                                                lineNumber: 145,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                                            lineNumber: 137,\n                                            columnNumber: 19\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                                            mt: 6,\n                                            direction: \"row\",\n                                            spacing: 2,\n                                            align: \"center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {\n                                                textAlign: \"left\",\n                                                direction: \"column\",\n                                                spacing: 3,\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, _objectSpread({\n                                                        fontSize: 26\n                                                    }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(\"0.7\"), {\n                                                        fontWeight: 600,\n                                                        color: \"white\",\n                                                        children: item.title\n                                                    }), void 0, false, {\n                                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                                                        lineNumber: 156,\n                                                        columnNumber: 23\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {\n                                                        fontSize: \"md\",\n                                                        color: \"gray.500\",\n                                                        children: item.desc\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                                                        lineNumber: 164,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                                                lineNumber: 155,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                                            lineNumber: 154,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                                    lineNumber: 123,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, _this1)\n                        }, i, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/UiInteractionDesign.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, _this));\n};\n_s(UiInteractionDesign, \"6+NsusRhXIqGJ0eYcft585hwPXs=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useViewportScroll,\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useTransform,\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_4__.useInView\n    ];\n});\n_c = UiInteractionDesign;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UiInteractionDesign);\nvar _c;\n$RefreshReg$(_c, \"UiInteractionDesign\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VaUludGVyYWN0aW9uRGVzaWduLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVN5QjtBQUM4QztBQUM5QztBQUM4QjtBQU85Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFekIsR0FBSyxDQUFDa0IsbUJBQW1CLEdBQUcsUUFDNUIsR0FEa0MsQ0FBQzs7O0lBQ2pDLEdBQUssQ0FBQ0MsSUFBSSxHQUFHLENBQUM7UUFDWixDQUFDO1lBQ0NDLEtBQUssRUFBRSxDQUEyQjtZQUNsQ0MsR0FBRyxFQUFFLENBQWdCO1lBQ3JCQyxJQUFJLEVBQUcsQ0FLVztRQUNwQixDQUFDO1FBQ0QsQ0FBQztZQUNDRixLQUFLLEVBQUUsQ0FBYTtZQUNwQkMsR0FBRyxFQUFFLENBQWlCO1lBQ3RCQyxJQUFJLEVBQUcsQ0FJd0I7UUFDakMsQ0FBQztRQUNELENBQUM7WUFDQ0YsS0FBSyxFQUFFLENBQWM7WUFDckJDLEdBQUcsRUFBRSxDQUFnQjtZQUNyQkMsSUFBSSxFQUFHLENBSVM7UUFDbEIsQ0FBQztRQUNELENBQUM7WUFDQ0YsS0FBSyxFQUFFLENBQWlCO1lBQ3hCQyxHQUFHLEVBQUUsQ0FBaUI7WUFDdEJDLElBQUksRUFBRyxDQUdtQjtRQUM1QixDQUFDO0lBQ0gsQ0FBQztJQUVELEdBQUssQ0FBR0MsZUFBZSxHQUFLYixnRUFBaUIsR0FBckNhLGVBQWU7SUFDdkIsR0FBSyxDQUFDQyxPQUFPLEdBQUdmLDJEQUFZLENBQUNjLGVBQWUsRUFBRSxDQUFDO0FBQUEsU0FBQztBQUFFLFdBQUc7SUFBQSxDQUFDLEVBQUUsQ0FBQztBQUFBLFNBQUM7QUFBRSxTQUFDO0lBQUEsQ0FBQztJQUU5RCxHQUFLLENBQWlCWCxHQUVwQixrQkFGb0JBLHNFQUFTLENBQUMsQ0FBQztRQUMvQmEsV0FBVyxFQUFFLEtBQUs7SUFDcEIsQ0FBQyxPQUZNQyxJQUFH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WTtRQUVORyxrRUFBUzs7O0tBM0MzQk0sbUJBQW1CO0FBNkp6QiwrREFBZUEsbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVWlJbnRlcmFjdGlvbkRlc2lnbi5qc3g/OGZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIENlbnRlcixcbiAgSW1hZ2UsXG4gIFRleHQsXG4gIHVzZUNvbG9yTW9kZVZhbHVlLFxuICBXcmFwLFxuICBXcmFwSXRlbSxcbiAgU3RhY2ssXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVRyYW5zZm9ybSwgdXNlVmlld3BvcnRTY3JvbGwgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuaW1wb3J0IHtcbiAgc2xpZGVJbixcbiAgdGV4dFZhcmlhbnQsXG4gIHRleHRTbGlkZVZhcmlhbnQsXG4gIGNhcmRWYXJpYW50LFxuICB0ZXN0LFxufSBmcm9tIFwic3JjL3V0aWxzL21vdGlvblwiO1xuXG5jb25zdCBVaUludGVyYWN0aW9uRGVzaWduID0gKCkgPT4ge1xuICBjb25zdCBsaXN0ID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIkhpcmUgRGVkaWNhdGVkIERldmVsb3BlcnNcIixcbiAgICAgIGltZzogXCIvaW1nL3RpbWVyLnN2Z1wiLFxuICAgICAgZGVzYzogYENyZWF0ZSB5b3VyIG93biB0ZWFtIG9mXG4gICAgICBkZXZlbG9wZXJzIGZvciB5b3VyIHNvZnR3YXJlXG4gICAgICBkZXZlbG9wbWVudCBwcm9qZWN0IG9uIHNob3J0IHRlcm0sXG4gICAgICBsb25nIHRlcm0gb3IgcGVybWFuZW50IGJhc2lzIHdpdGhcbiAgICAgIGd1YXJhbnRlZWQgcHJvamVjdCBkZWxpdmVyeSBhdFxuICAgICAgYWZmb3JkYWJsZSBwcmljZXMuYCxcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIk1vYmlsZSBBcHBzXCIsXG4gICAgICBpbWc6IFwiL2ltZy9wdXp6bGUuc3ZnXCIsXG4gICAgICBkZXNjOiBgV2UgYnVpbGQgaW50dWl0aXZlIGFuZCBlbmdhZ2luZ1xuICAgICAgQW5kcm9pZCwgaU9TIGFuZCBjcm9zcy1wbGF0Zm9ybVxuICAgICAgYXBwcyBmb3IgYnVzaW5lc3NlcywgY29uc3VtZXJzXG4gICAgICBhbmQgZW50ZXJwcmlzZXMgdGhhdCBlbmQgdXNlcnMgbG92ZVxuICAgICAgYW5kIGFkYXB0IHRvIHRoZW0gdmVyeSBxdWlja2x5LmAsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJVSS9VWCBEZXNpZ25cIixcbiAgICAgIGltZzogXCIvaW1nL2NvbG9yLnN2Z1wiLFxuICAgICAgZGVzYzogYFN0YXJ0aW5nIGZyb20gY29uY2VwdCwgaW5mb3JtYXRpb25cbiAgICAgIGFyY2hpdGVjdHVyZSwgdmlzdWFsIGlkZW50aXR5IGFuZFxuICAgICAgVUkvVVggZGVzaWduLCBvdXIgdGVhbSBkZWxpdmVyc1xuICAgICAgZGF6emxpbmcgZXhwZXJpZW5jZXMgZm9yIG1heGltdW1cbiAgICAgIHVzZXIgZW5nYWdlbWVudC5gLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiV2ViIERldmVsb3BtZW50XCIsXG4gICAgICBpbWc6IFwiL2ltZy9zZWFyY2guc3ZnXCIsXG4gICAgICBkZXNjOiBgT3VyIGRlc2lnbiBhcHByb2FjaCBpcyB0b1xuICAgICAgICAgIHNpbXBsaWZ5LiBXZSBlbWJyYWNlIHRoZSBqb3kgaW5cbiAgICAgICAgICBjcmVhdGluZyBzb21ldGhpbmcgdW5pcXVlIHRoYXRcbiAgICAgICAgICBpcyBlYXN5IGZvciBlbmQgdXNlcnMuYCxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IHsgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VWaWV3cG9ydFNjcm9sbCgpO1xuICBjb25zdCBvcGFjaXR5ID0gdXNlVHJhbnNmb3JtKHNjcm9sbFlQcm9ncmVzcywgWzAsIDAuNV0sIFswLCAxXSk7XG5cbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7XG4gICAgdHJpZ2dlck9uY2U6IGZhbHNlLCAvLyBPbmx5IHRyaWdnZXIgdGhlIGFuaW1hdGlvbiBvbmNlXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveCBwPVwiNlwiPlxuICAgICAgPEJveCBtdD1cIjE2XCIgbXg9XCIxMFwiIHRleHRBbGlnbj1cImNlbnRlclwiIGZvbnRTaXplPVwiNnhsXCIgY29sb3I9e1wiIzg3ODc4N1wifT5cbiAgICAgICAgSeKAmW0gYSBkZXNpZ25lciBzcGVjaWFsaXNpbmcgaW57XCIgXCJ9XG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgY29sb3I9XCJ3aGl0ZVwiPlxuICAgICAgICAgIFVJL1VYXG4gICAgICAgIDwvVGV4dD57XCIgXCJ9XG4gICAgICAgIGFuZHtcIiBcIn1cbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgZm9udFdlaWdodD1cImJvbGRcIiBjb2xvcj1cIndoaXRlXCI+XG4gICAgICAgICAgSW50ZXJhY3Rpb24gRGVzaWduXG4gICAgICAgIDwvVGV4dD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IHA9XCI0XCIgZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHc9XCJmdWxsXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIC8vIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICBib3hTaXplPXsxMjAwfVxuICAgICAgICAgIGhlaWdodD17NDIwfVxuICAgICAgICAgIHNyYz1cIi9pbWcvdWktdXguc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJEYW4gQWJyYW1vdlwiXG4gICAgICAgIC8+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBtdD1cIjI4XCI+XG4gICAgICAgIDxXcmFwIHJlZj17cmVmfSBzcGFjaW5nPVwiMjhweFwiIGp1c3RpZnk9XCJjZW50ZXJcIj5cbiAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgIDxXcmFwSXRlbVxuICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgIGFzPXttb3Rpb24uZGl2fVxuICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgd2hpbGVJblZpZXc9XCJ2aXNpYmxlXCJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsxNn1cbiAgICAgICAgICAgICAgYmc9XCIjMTIxODM5XCJcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkZWxheTogaSAqIDAuOCwgZHVyYXRpb246IDEuNSB9fVxuICAgICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHtcbiAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IGluVmlldyA/IDEgOiAwLFxuICAgICAgICAgICAgICAgICAgc2NhbGU6IGluVmlldyA/IDEgOiAwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaGlkZGVuOiB7XG4gICAgICAgICAgICAgICAgICBvcGFjaXR5OiBpblZpZXcgPyAxIDogMCxcbiAgICAgICAgICAgICAgICAgIHNjYWxlOiBpblZpZXcgPyAxIDogMCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB3aWR0aD17e1xuICAgICAgICAgICAgICAgIGJhc2U6IFwiMTAwJVwiLFxuICAgICAgICAgICAgICAgIHNtOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICBtZDogXCI0MCVcIixcbiAgICAgICAgICAgICAgICBsZzogXCIzNDRweFwiLFxuICAgICAgICAgICAgICAgIHhsOiBcIjIyJVwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBweD17WzMsIDVdfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Q2VudGVyIHB5PXsyfT5cbiAgICAgICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgICAgICBvdmVyc2Nyb2xsPXtcImF1dG9cIn1cbiAgICAgICAgICAgICAgICAgIC8vbWF4Vz17XCI0NDVweFwifVxuICAgICAgICAgICAgICAgICAgLy8gYm9yZGVyPVwiMXB4XCJcbiAgICAgICAgICAgICAgICAgIC8vIGJvcmRlckNvbG9yPVwicHJpbWFyeUJvcmRlclwiXG4gICAgICAgICAgICAgICAgICB3PXtcImZ1bGxcIn1cbiAgICAgICAgICAgICAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcbiAgICAgICAgICAgICAgICAgICAgXCJiZ0dyYWRpZW50UHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBcImJnR3JhZGllbnRQcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICByb3VuZGVkPXtcIm1kXCJ9XG4gICAgICAgICAgICAgICAgICBwPXsyfVxuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c9e1wiaGlkZGVuXCJ9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgICAgICBhcz17bW90aW9uLmRpdn1cbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz17MTB9XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmltZ31cbiAgICAgICAgICAgICAgICAgICAgICBib3hTaXplPVwiMTAwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L0JveD5cblxuICAgICAgICAgICAgICAgICAgPFN0YWNrIG10PXs2fSBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezJ9IGFsaWduPXtcImNlbnRlclwifT5cbiAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHRleHRBbGlnbj1cImxlZnRcIiBkaXJlY3Rpb249e1wiY29sdW1uXCJ9IHNwYWNpbmc9ezN9PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17MjZ9XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4udGV4dFZhcmlhbnQoXCIwLjdcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PXs2MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9e1wibWRcIn0gY29sb3I9e1wiZ3JheS41MDBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjfVxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9XcmFwPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVaUludGVyYWN0aW9uRGVzaWduO1xuIl0sIm5hbWVzIjpbIkJveCIsIkNlbnRlciIsIkltYWdlIiwiVGV4dCIsInVzZUNvbG9yTW9kZVZhbHVlIiwiV3JhcCIsIldyYXBJdGVtIiwiU3RhY2siLCJtb3Rpb24iLCJ1c2VUcmFuc2Zvcm0iLCJ1c2VWaWV3cG9ydFNjcm9sbCIsIlJlYWN0IiwidXNlSW5WaWV3Iiwic2xpZGVJbiIsInRleHRWYXJpYW50IiwidGV4dFNsaWRlVmFyaWFudCIsImNhcmRWYXJpYW50IiwidGVzdCIsIlVpSW50ZXJhY3Rpb25EZXNpZ24iLCJsaXN0IiwidGl0bGUiLCJpbWciLCJkZXNjIiwic2Nyb2xsWVByb2dyZXNzIiwib3BhY2l0eSIsInRyaWdnZXJPbmNlIiwicmVmIiwiaW5WaWV3IiwicCIsIm10IiwibXgiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbG9yIiwiYXMiLCJmb250V2VpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwidyIsImJveFNpemUiLCJoZWlnaHQiLCJzcmMiLCJhbHQiLCJzcGFjaW5nIiwianVzdGlmeSIsIm1hcCIsIml0ZW0iLCJpIiwiZGl2IiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3IiwiYm9yZGVyUmFkaXVzIiwiYmciLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsInZhcmlhbnRzIiwidmlzaWJsZSIsInNjYWxlIiwiaGlkZGVuIiwid2lkdGgiLCJiYXNlIiwic20iLCJtZCIsImxnIiwieGwiLCJweCIsInB5Iiwib3ZlcnNjcm9sbCIsInJvdW5kZWQiLCJvdmVyZmxvdyIsImFsaWduSXRlbXMiLCJvYmplY3RGaXQiLCJkaXJlY3Rpb24iLCJhbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UiInteractionDesign.jsx\n");

/***/ })

});