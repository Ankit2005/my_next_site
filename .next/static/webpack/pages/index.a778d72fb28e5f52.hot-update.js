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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Work; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var src_utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/utils/motion */ \"./src/utils/motion.js\");\n/* harmony import */ var _CardTil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardTil */ \"./src/components/CardTil.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n// import NextImage from \"next/image\";\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction Work() {\n    var _this = this;\n    _s();\n    var cards = [\n        {\n            title: \"Virtual Gym\",\n            img: \"https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_1280.jpg\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        },\n        {\n            title: \"Virtual Gym\",\n            img: \"https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_1280.jpg\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        },\n        {\n            title: \"Virtual Gym\",\n            img: \"https://cdn.pixabay.com/photo/2015/05/31/13/45/working-791849_1280.jpg\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        },\n        {\n            title: \"Virtual Gym\",\n            img: \"https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        },\n        {\n            title: \"Virtual Gym\",\n            img: \"https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg\",\n            desc: \"We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.\"\n        }, \n    ];\n    var ref = _slicedToArray((0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView)({\n        triggerOnce: false\n    }), 2), ref1 = ref[0], inView = ref[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(-100), x = ref2[0], setX = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleScroll = function() {\n            console.log(\"dddddddddd\", window.scrollY);\n            if (window.scrollY >= 1730) {\n                setX(-100);\n            } else {\n                setX(0);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            return window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        d: \"flex\",\n        alignItems: \"center\",\n        justifyContent: {\n            base: \"space-between\"\n        },\n        flexDir: \"column\",\n        textAlign: {\n            base: \"center\",\n            lg: \"left\"\n        },\n        // p=\"4\"\n        className: \"gd\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, _objectSpread({\n                    display: {\n                        base: \"column\",\n                        md: \"flex\"\n                    },\n                    justifyContent: {\n                        base: \"space-between\"\n                    },\n                    alignItems: \"center\",\n                    as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.p\n                }, (0,src_utils_motion__WEBPACK_IMPORTED_MODULE_3__.textSlideVariant)(0.2, \"right\", inView), {\n                    w: {\n                        base: \"100%\",\n                        md: \"93%\"\n                    },\n                    mx: \"auto\",\n                    mt: \"4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                            fontWeight: \"bold\",\n                            fontSize: {\n                                base: \"4xl\"\n                            },\n                            color: \"white\",\n                            children: \"The best of the best\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            borderColor: \"white\",\n                            color: \"white\",\n                            variant: \"outline\",\n                            children: \"Sign up now\"\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                            lineNumber: 114,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }), void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    py: \"10\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Wrap, {\n                        p: \"4\",\n                        ref: ref1,\n                        spacing: \"40px\",\n                        justify: \"center\",\n                        children: cards.map(function(item, i) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.WrapItem, {\n                                as: framer_motion__WEBPACK_IMPORTED_MODULE_7__.motion.div,\n                                initial: \"hidden\",\n                                whileInView: \"visible\",\n                                viewport: {\n                                    once: true\n                                },\n                                transition: {\n                                    delay: i * 0.5,\n                                    duration: 1.2\n                                },\n                                width: {\n                                    base: \"100%\",\n                                    md: \"40%\",\n                                    lg: \"30%\"\n                                },\n                                variants: {\n                                    visible: {\n                                        opacity: inView ? 1 : 0,\n                                        scale: inView ? 1 : 0\n                                    },\n                                    hidden: {\n                                        opacity: inView ? 1 : 0,\n                                        scale: inView ? 1 : 0\n                                    }\n                                },\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Center, {\n                                    py: 2,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_CardTil__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        description: item.desc,\n                                        imageSrc: item.img,\n                                        title: item.title,\n                                        name: item.title,\n                                        image: item.img,\n                                        source_code_link: \"https://test.com/\",\n                                        index: i\n                                    }, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 19\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                                    lineNumber: 136,\n                                    columnNumber: 17\n                                }, _this)\n                            }, i, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n                    lineNumber: 119,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/Work.jsx\",\n        lineNumber: 91,\n        columnNumber: 5\n    }, this));\n};\n_s(Work, \"pFLA4uFRnPI3HxyEnJ343+H4S/4=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.useInView\n    ];\n});\n_c = Work;\nvar _c;\n$RefreshReg$(_c, \"Work\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQUMvQixJQUFJLEVBQUUsQ0FBTTtvQ0FBRU0sRUFBRSxFQUFFLENBQUs7b0NBQUVILEVBQUUsRUFBRSxDQUFLO2dDQUFDLENBQUM7Z0NBQzdDNkIsUUFBUSxFQUFFLENBQUM7b0NBQ1RDLE9BQU8sRUFBRSxDQUFDO3dDQUFDQyxPQUFPLEVBQUUvQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0NBQUVnRCxLQUFLLEVBQUVoRCxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7b0NBQUMsQ0FBQztvQ0FDM0RpRCxNQUFNLEVBQUUsQ0FBQzt3Q0FBQ0YsT0FBTyxFQUFFL0MsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDO3dDQUFFZ0QsS0FBSyxFQUFFaEQsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDO29DQUFDLENBQUM7Z0NBQzVELENBQUM7c0hBR0F6QixvREFBTTtvQ0FBQ3VELEVBQUUsRUFBRSxDQUFDOzBIQUNWdEMsZ0RBQU87d0NBQ04wRCxXQUFXLEVBQUVoQixJQUFJLENBQUNyQyxJQUFJO3dDQUN0QnNELFFBQVEsRUFBRWpCLElBQUksQ0FBQ3RDLEdBQUc7d0NBQ2xCRCxLQUFLLEVBQUV1QyxJQUFJLENBQUN2QyxLQUFLO3dDQUNqQnlELElBQUksRUFBRWxCLElBQUksQ0FBQ3ZDLEtBQUs7d0NBQ2hCMEQsS0FBSyxFQUFFbkIsSUFBSSxDQUFDdEMsR0FBRzt3Q0FDZjBELGdCQUFnQixFQUFDLENBQW1CO3dDQUNwQ0MsS0FBSyxFQUFFcEIsQ0FBQzs7Ozs7Ozs7Ozs7K0JBckJQQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQnRCLENBQUM7R0FsSHVCMUMsSUFBSTs7UUE2QkpOLGtFQUFTOzs7S0E3QlRNLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvV29yay5qc3g/MTM1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIEJ1dHRvbixcbiAgSGVhZGluZyxcbiAgSW1hZ2UsXG4gIFRleHQsXG4gIENhcmQsXG4gIENhcmRCb2R5LFxuICBDYXJkRm9vdGVyLFxuICBTdGFjayxcbiAgRGl2aWRlcixcbiAgQnV0dG9uR3JvdXAsXG4gIEdyaWQsXG4gIEdyaWRJdGVtLFxuICBBdmF0YXIsXG4gIENlbnRlcixcbiAgRmxleCxcbiAgdXNlQ29sb3JNb2RlVmFsdWUsXG4gIFdyYXAsXG4gIFdyYXBJdGVtLFxuICBIU3RhY2ssXG4gIFRhZyxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuLy8gaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQge1xuICBzbGlkZUluLFxuICB0ZXh0VmFyaWFudCxcbiAgdGV4dFNsaWRlVmFyaWFudCxcbiAgY2FyZFZhcmlhbnQsXG59IGZyb20gXCJzcmMvdXRpbHMvbW90aW9uXCI7XG5pbXBvcnQgQ2FyZFRpbCBmcm9tIFwiLi9DYXJkVGlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdvcmsoKSB7XG4gIGNvbnN0IGNhcmRzID0gW1xuICAgIHtcbiAgICAgIHRpdGxlOiBcIlZpcnR1YWwgR3ltXCIsXG4gICAgICBpbWc6IFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNS8wMS8wOS8xMS8xMS9vZmZpY2UtNTk0MTMyXzEyODAuanBnXCIsXG4gICAgICBkZXNjOiBcIldlIGRlc2lnbmVkIFZpcnR1YWwgR3ltIHRvIG1ha2UgaXQgbW9yZSBjb252ZW5pZW50IHRvIGVuc3VyZSB0aGF0IHVzZXJzIG9ubHkgZm9jdXMgb24gZml0bmVzcy5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiBcIlZpcnR1YWwgR3ltXCIsXG4gICAgICBpbWc6IFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNi8wNi8yNS8xMi81Mi9sYXB0b3AtMTQ3ODgyMl8xMjgwLmpwZ1wiLFxuICAgICAgZGVzYzogXCJXZSBkZXNpZ25lZCBWaXJ0dWFsIEd5bSB0byBtYWtlIGl0IG1vcmUgY29udmVuaWVudCB0byBlbnN1cmUgdGhhdCB1c2VycyBvbmx5IGZvY3VzIG9uIGZpdG5lc3MuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0aXRsZTogXCJWaXJ0dWFsIEd5bVwiLFxuICAgICAgaW1nOiBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTUvMDUvMzEvMTMvNDUvd29ya2luZy03OTE4NDlfMTI4MC5qcGdcIixcbiAgICAgIGRlc2M6IFwiV2UgZGVzaWduZWQgVmlydHVhbCBHeW0gdG8gbWFrZSBpdCBtb3JlIGNvbnZlbmllbnQgdG8gZW5zdXJlIHRoYXQgdXNlcnMgb25seSBmb2N1cyBvbiBmaXRuZXNzLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVmlydHVhbCBHeW1cIixcbiAgICAgIGltZzogXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE5LzEyLzE3LzE3LzA5L3dvbWFuLTQ3MDIwNjBfMTI4MC5qcGdcIixcbiAgICAgIGRlc2M6IFwiV2UgZGVzaWduZWQgVmlydHVhbCBHeW0gdG8gbWFrZSBpdCBtb3JlIGNvbnZlbmllbnQgdG8gZW5zdXJlIHRoYXQgdXNlcnMgb25seSBmb2N1cyBvbiBmaXRuZXNzLlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6IFwiVmlydHVhbCBHeW1cIixcbiAgICAgIGltZzogXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE5LzEyLzE3LzE3LzA5L3dvbWFuLTQ3MDIwNjBfMTI4MC5qcGdcIixcbiAgICAgIGRlc2M6IFwiV2UgZGVzaWduZWQgVmlydHVhbCBHeW0gdG8gbWFrZSBpdCBtb3JlIGNvbnZlbmllbnQgdG8gZW5zdXJlIHRoYXQgdXNlcnMgb25seSBmb2N1cyBvbiBmaXRuZXNzLlwiLFxuICAgIH0sXG4gIF07XG5cbiAgY29uc3QgW3JlZiwgaW5WaWV3XSA9IHVzZUluVmlldyh7XG4gICAgdHJpZ2dlck9uY2U6IGZhbHNlLCAvLyBPbmx5IHRyaWdnZXIgdGhlIGFuaW1hdGlvbiBvbmNlXG4gIH0pO1xuXG4gIGNvbnN0IFt4LCBzZXRYXSA9IHVzZVN0YXRlKC0xMDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJkZGRkZGRkZGRkXCIsIHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAxNzMwKSB7XG4gICAgICAgIHNldFgoLTEwMCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRYKDApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGQ9XCJmbGV4XCJcbiAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAganVzdGlmeUNvbnRlbnQ9e3sgYmFzZTogXCJzcGFjZS1iZXR3ZWVuXCIgfX1cbiAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxuICAgICAgdGV4dEFsaWduPXt7IGJhc2U6IFwiY2VudGVyXCIsIGxnOiBcImxlZnRcIiB9fVxuICAgICAgLy8gcD1cIjRcIlxuICAgICAgY2xhc3NOYW1lPVwiZ2RcIlxuICAgID5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxCb3hcbiAgICAgICAgICBkaXNwbGF5PXt7IGJhc2U6IFwiY29sdW1uXCIsIG1kOiBcImZsZXhcIiB9fVxuICAgICAgICAgIGp1c3RpZnlDb250ZW50PXt7IGJhc2U6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAgICAgYXM9e21vdGlvbi5wfVxuICAgICAgICAgIHsuLi50ZXh0U2xpZGVWYXJpYW50KDAuMiwgXCJyaWdodFwiLCBpblZpZXcpfVxuICAgICAgICAgIHc9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjkzJVwiIH19XG4gICAgICAgICAgbXg9XCJhdXRvXCJcbiAgICAgICAgICBtdD1cIjRcIlxuICAgICAgICA+XG4gICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT17eyBiYXNlOiBcIjR4bFwiIH19IGNvbG9yPVwid2hpdGVcIj5cbiAgICAgICAgICAgIFRoZSBiZXN0IG9mIHRoZSBiZXN0XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxCdXR0b24gYm9yZGVyQ29sb3I9XCJ3aGl0ZVwiIGNvbG9yPVwid2hpdGVcIiB2YXJpYW50PVwib3V0bGluZVwiPlxuICAgICAgICAgICAgU2lnbiB1cCBub3dcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBweT1cIjEwXCI+XG4gICAgICAgICAgPFdyYXAgcD1cIjRcIiByZWY9e3JlZn0gc3BhY2luZz1cIjQwcHhcIiBqdXN0aWZ5PVwiY2VudGVyXCI+XG4gICAgICAgICAgICB7Y2FyZHMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgIDxXcmFwSXRlbVxuICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICBhcz17bW90aW9uLmRpdn1cbiAgICAgICAgICAgICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz1cInZpc2libGVcIlxuICAgICAgICAgICAgICAgIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGRlbGF5OiBpICogMC41LCBkdXJhdGlvbjogMS4yIH19XG4gICAgICAgICAgICAgICAgd2lkdGg9e3sgYmFzZTogXCIxMDAlXCIsIG1kOiBcIjQwJVwiLCBsZzogXCIzMCVcIiB9fVxuICAgICAgICAgICAgICAgIHZhcmlhbnRzPXt7XG4gICAgICAgICAgICAgICAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IGluVmlldyA/IDEgOiAwLCBzY2FsZTogaW5WaWV3ID8gMSA6IDAgfSxcbiAgICAgICAgICAgICAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiBpblZpZXcgPyAxIDogMCwgc2NhbGU6IGluVmlldyA/IDEgOiAwIH0sXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvLyB7Li4uY2FyZFZhcmlhbnQoaSAqIDAuNCwgaW5WaWV3KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxDZW50ZXIgcHk9ezJ9PlxuICAgICAgICAgICAgICAgICAgPENhcmRUaWxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2l0ZW0uZGVzY31cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmM9e2l0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgICB0aXRsZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgbmFtZT17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2l0ZW0uaW1nfVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VfY29kZV9saW5rPVwiaHR0cHM6Ly90ZXN0LmNvbS9cIlxuICAgICAgICAgICAgICAgICAgICBpbmRleD17aX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgIDwvV3JhcEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L1dyYXA+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiSGVhZGluZyIsIkltYWdlIiwiVGV4dCIsIkNhcmQiLCJDYXJkQm9keSIsIkNhcmRGb290ZXIiLCJTdGFjayIsIkRpdmlkZXIiLCJCdXR0b25Hcm91cCIsIkdyaWQiLCJHcmlkSXRlbSIsIkF2YXRhciIsIkNlbnRlciIsIkZsZXgiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIldyYXAiLCJXcmFwSXRlbSIsIkhTdGFjayIsIlRhZyIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIkxpbmsiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUluVmlldyIsInNsaWRlSW4iLCJ0ZXh0VmFyaWFudCIsInRleHRTbGlkZVZhcmlhbnQiLCJjYXJkVmFyaWFudCIsIkNhcmRUaWwiLCJXb3JrIiwiY2FyZHMiLCJ0aXRsZSIsImltZyIsImRlc2MiLCJ0cmlnZ2VyT25jZSIsInJlZiIsImluVmlldyIsIngiLCJzZXRYIiwiaGFuZGxlU2Nyb2xsIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImQiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJiYXNlIiwiZmxleERpciIsInRleHRBbGlnbiIsImxnIiwiY2xhc3NOYW1lIiwiZGlzcGxheSIsIm1kIiwiYXMiLCJwIiwidyIsIm14IiwibXQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJjb2xvciIsImJvcmRlckNvbG9yIiwidmFyaWFudCIsInB5Iiwic3BhY2luZyIsImp1c3RpZnkiLCJtYXAiLCJpdGVtIiwiaSIsImRpdiIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsInRyYW5zaXRpb24iLCJkZWxheSIsImR1cmF0aW9uIiwid2lkdGgiLCJ2YXJpYW50cyIsInZpc2libGUiLCJvcGFjaXR5Iiwic2NhbGUiLCJoaWRkZW4iLCJkZXNjcmlwdGlvbiIsImltYWdlU3JjIiwibmFtZSIsImltYWdlIiwic291cmNlX2NvZGVfbGluayIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Work.jsx\n");

/***/ })

});