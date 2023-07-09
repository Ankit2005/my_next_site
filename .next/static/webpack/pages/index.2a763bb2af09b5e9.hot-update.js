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

/***/ "./src/utils/motion.js":
/*!*****************************!*\
  !*** ./src/utils/motion.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textVariant\": function() { return /* binding */ textVariant; },\n/* harmony export */   \"textSlideVariant\": function() { return /* binding */ textSlideVariant; },\n/* harmony export */   \"cardVariant\": function() { return /* binding */ cardVariant; },\n/* harmony export */   \"staggerContainer\": function() { return /* binding */ staggerContainer; },\n/* harmony export */   \"slideIn\": function() { return /* binding */ slideIn; },\n/* harmony export */   \"fadeIn\": function() { return /* binding */ fadeIn; },\n/* harmony export */   \"zoomIn\": function() { return /* binding */ zoomIn; },\n/* harmony export */   \"test\": function() { return /* binding */ test; },\n/* harmony export */   \"MotionBox\": function() { return /* binding */ MotionBox; },\n/* harmony export */   \"scaleIn\": function() { return /* binding */ scaleIn; },\n/* harmony export */   \"rotateIn\": function() { return /* binding */ rotateIn; },\n/* harmony export */   \"slideUp\": function() { return /* binding */ slideUp; },\n/* harmony export */   \"slideDown\": function() { return /* binding */ slideDown; },\n/* harmony export */   \"shake\": function() { return /* binding */ shake; },\n/* harmony export */   \"MotionSlideIn\": function() { return /* binding */ MotionSlideIn; },\n/* harmony export */   \"MotionScaleIn\": function() { return /* binding */ MotionScaleIn; },\n/* harmony export */   \"MotionRotateIn\": function() { return /* binding */ MotionRotateIn; },\n/* harmony export */   \"MotionSlideDown\": function() { return /* binding */ MotionSlideDown; },\n/* harmony export */   \"MotionShake\": function() { return /* binding */ MotionShake; },\n/* harmony export */   \"MotionFadeIn\": function() { return /* binding */ MotionFadeIn; },\n/* harmony export */   \"MotionSlideUp\": function() { return /* binding */ MotionSlideUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar textVariant = function(delay) {\n    return {\n        initial: _objectSpread({}, {\n            y: 50,\n            opacity: 0\n        }),\n        animate: _objectSpread({}, {\n            y: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                duration: 1.25,\n                delay: delay\n            }\n        })\n    };\n};\nvar textSlideVariant = function(delay, direction, inView) {\n    return {\n        initial: _objectSpread({}, {\n            y: 60,\n            opacity: 0\n        }),\n        animate: _objectSpread({}, {\n            y: 0,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                duration: 1.25,\n                delay: delay\n            }\n        })\n    };\n};\nvar cardVariant = function(delay, inView, x) {\n    return {\n        initial: _objectSpread({}, {\n            y: x,\n            opacity: 0\n        }),\n        animate: _objectSpread({}, {\n            y: 50,\n            opacity: 1,\n            transition: {\n                type: \"spring\",\n                duration: 1.5,\n                delay: delay\n            }\n        })\n    };\n};\nvar staggerContainer = function(staggerChildren, delayChildren) {\n    return {\n        hidden: {},\n        show: {\n            transition: {\n                staggerChildren: staggerChildren,\n                delayChildren: delayChildren || 0\n            }\n        }\n    };\n};\nvar slideIn = function(direction, type, delay, duration) {\n    return {\n        hidden: _objectSpread({}, {\n            x: direction === \"left\" ? 100 : direction === \"right\" ? -100 : 0,\n            y: direction === \"up\" ? 100 : direction === \"down\" ? -100 : 0\n        }),\n        left: direction === \"left\" ? \"-10%\" : direction === \"right\" ? \"100%\" : 0,\n        transition: _objectSpread({}, {\n            type: type,\n            delay: delay,\n            duration: duration,\n            ease: \"easeOut\"\n        })\n    };\n};\nvar fadeIn = function(direction, type, delay, duration) {\n    return {\n        hidden: {\n            x: direction === \"left\" ? 100 : direction === \"right\" ? -100 : 0,\n            y: direction === \"up\" ? 100 : direction === \"down\" ? -100 : 0,\n            opacity: 0\n        },\n        show: {\n            x: 0,\n            y: 0,\n            opacity: 1,\n            transition: {\n                type: type,\n                delay: delay,\n                duration: duration,\n                ease: \"easeOut\"\n            }\n        }\n    };\n};\nvar zoomIn = function(delay, duration) {\n    return {\n        hidden: {\n            scale: 0,\n            opacity: 0\n        },\n        show: {\n            scale: 1,\n            opacity: 1,\n            transition: {\n                type: \"tween\",\n                delay: delay,\n                duration: duration,\n                ease: \"easeOut\"\n            }\n        }\n    };\n};\nvar test = function(i, inView) {\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"initial=\",\n            {\n                y: 70,\n                opacity: 0\n            },\n            \"whileInView=\\\"visible\\\" viewport=\",\n            {\n                once: true\n            },\n            \"transition=\",\n            {\n                type: \"spring\",\n                delay: i * 0.6,\n                duration: 2.5\n            },\n            \"animate=\",\n            {\n                y: 0,\n                opacity: 1,\n                transition: {\n                    type: \"spring\",\n                    duration: 1.5,\n                    delay: i * 0.5\n                }\n            },\n            \"variants=\",\n            {\n                visible: {\n                    opacity: inView ? 1 : 0,\n                    scale: inView ? 1 : 0\n                },\n                hidden: {\n                    opacity: inView ? 1 : 0,\n                    scale: inView ? 1 : 0\n                }\n            },\n            \";\"\n        ]\n    }, void 0, true);\n};\n// ===============\nvar MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box);\n_c = MotionBox;\n// export const fadeIn = {\n//   initial: { opacity: 0 },\n//   animate: { opacity: 1 },\n//   exit: { opacity: 0 },\n// };\n// export const slideIn = {\n//   initial: { x: -100 },\n//   animate: { x: 0 },\n//   exit: { x: -100 },\n// };\nvar scaleIn = {\n    initial: {\n        scale: 0\n    },\n    animate: {\n        scale: 1\n    },\n    exit: {\n        scale: 0\n    }\n};\nvar rotateIn = {\n    initial: {\n        rotate: -180\n    },\n    animate: {\n        rotate: 0\n    },\n    exit: {\n        rotate: -180\n    }\n};\nvar slideUp = {\n    initial: {\n        y: 50,\n        opacity: 0\n    },\n    animate: {\n        y: 0,\n        opacity: 1\n    },\n    exit: {\n        y: 50,\n        opacity: 0\n    }\n};\nvar slideDown = {\n    initial: {\n        y: -50,\n        opacity: 0\n    },\n    animate: {\n        y: 0,\n        opacity: 1\n    },\n    exit: {\n        y: -50,\n        opacity: 0\n    }\n};\nvar shake = {\n    animate: {\n        rotate: [\n            -10,\n            10,\n            -10,\n            10,\n            0\n        ],\n        transition: {\n            duration: 0.5\n        }\n    }\n};\nvar MotionSlideIn = function(param) {\n    var children = param.children;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        variants: slideIn,\n        initial: \"initial\",\n        animate: \"animate\",\n        exit: \"exit\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/utils/motion.js\",\n        lineNumber: 233,\n        columnNumber: 3\n    }, _this);\n};\n_c1 = MotionSlideIn;\nvar MotionScaleIn = function(param) {\n    var children = param.children;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        variants: scaleIn,\n        initial: \"initial\",\n        animate: \"animate\",\n        exit: \"exit\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/utils/motion.js\",\n        lineNumber: 244,\n        columnNumber: 3\n    }, _this);\n};\n_c2 = MotionScaleIn;\nvar MotionRotateIn = function(param) {\n    var children = param.children;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        variants: rotateIn,\n        initial: \"initial\",\n        animate: \"animate\",\n        exit: \"exit\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/utils/motion.js\",\n        lineNumber: 255,\n        columnNumber: 3\n    }, _this);\n};\n_c3 = MotionRotateIn;\nvar MotionSlideDown = function(param) {\n    var children = param.children;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        variants: slideDown,\n        initial: \"initial\",\n        animate: \"animate\",\n        exit: \"exit\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/utils/motion.js\",\n        lineNumber: 266,\n        columnNumber: 3\n    }, _this);\n};\n_c4 = MotionSlideDown;\nvar MotionShake = function(param) {\n    var children = param.children;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n        variants: shake,\n        animate: \"animate\",\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/utils/motion.js\",\n        lineNumber: 277,\n        columnNumber: 3\n    }, _this);\n};\n_c5 = MotionShake;\nvar MotionFadeIn = function(param) {\n    var _duration = param.duration, duration = _duration === void 0 ? 0.3 : _duration, _delay = param.delay, delay = _delay === void 0 ? 0 : _delay, children = param.children;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n        variants: fadeIn,\n        initial: \"initial\",\n        animate: \"animate\",\n        exit: \"exit\",\n        transition: {\n            duration: duration,\n            delay: delay\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/utils/motion.js\",\n        lineNumber: 283,\n        columnNumber: 3\n    }, _this);\n};\n_c6 = MotionFadeIn;\nvar MotionSlideUp = function(param) {\n    var duration = param.duration, delay = param.delay, children = param.children, inView = param.inView;\n    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MotionBox, {\n        variants: {\n            //transition: { duration, delay },\n            visible: {\n                opacity: inView ? 1 : 0,\n                scale: inView ? 1 : 0,\n                //  x: 0,\n                transitionDuration: 2,\n                y: 10\n            },\n            hidden: {\n                opacity: inView ? 1 : 0,\n                // scale: inView ? 1 : 0,\n                // x: 100,\n                y: 100\n            }\n        },\n        initial: \"hidden\",\n        // animate=\"animate\"\n        // exit=\"exit\"\n        transition: {\n            duration: duration,\n            delay: delay\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/utils/motion.js\",\n        lineNumber: 295,\n        columnNumber: 3\n    }, _this);\n};\n_c7 = MotionSlideUp;\nvar _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;\n$RefreshReg$(_c, \"MotionBox\");\n$RefreshReg$(_c1, \"MotionSlideIn\");\n$RefreshReg$(_c2, \"MotionScaleIn\");\n$RefreshReg$(_c3, \"MotionRotateIn\");\n$RefreshReg$(_c4, \"MotionSlideDown\");\n$RefreshReg$(_c5, \"MotionShake\");\n$RefreshReg$(_c6, \"MotionFadeIn\");\n$RefreshReg$(_c7, \"MotionSlideUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxLQUFLO1FBQUMsQ0FBQztrQkFFOUJxQyxRQUFROzs7Ozs7O01BUkFPLFlBQVk7QUFZbEIsR0FBSyxDQUFDQyxhQUFhLEdBQUcsUUFBUTtRQUFMdEMsUUFBUSxTQUFSQSxRQUFRLEVBQUVQLEtBQUssU0FBTEEsS0FBSyxFQUFFcUMsUUFBUSxTQUFSQSxRQUFRLEVBQUUzQixNQUFNLFNBQU5BLE1BQU07a0JBQy9ELE1BQU0sK0RBQUxrQixTQUFTO1FBQ1JXLFFBQVEsRUFBRSxDQUFDO1lBQ1QsRUFBa0M7WUFDbENaLE9BQU8sRUFBRSxDQUFDO2dCQUNSeEIsT0FBTyxFQUFFTyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUM7Z0JBQ3ZCYSxLQUFLLEVBQUViLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDckIsRUFBUztnQkFDVG9DLGtCQUFrQixFQUFFLENBQUM7Z0JBQ3JCNUMsQ0FBQyxFQUFFLEVBQUU7WUFDUCxDQUFDO1lBQ0RjLE1BQU0sRUFBRSxDQUFDO2dCQUNQYixPQUFPLEVBQUVPLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQztnQkFDdkIsRUFBeUI7Z0JBQ3pCLEVBQVU7Z0JBQ1ZSLENBQUMsRUFBRSxHQUFHO1lBQ1IsQ0FBQztRQUNILENBQUM7UUFDREQsT0FBTyxFQUFDLENBQVE7UUFDaEIsRUFBb0I7UUFDcEIsRUFBYztRQUNkSSxVQUFVLEVBQUUsQ0FBQztZQUFDRSxRQUFRLEVBQVJBLFFBQVE7WUFBRVAsS0FBSyxFQUFMQSxLQUFLO1FBQUMsQ0FBQztrQkFFOUJxQyxRQUFROzs7Ozs7O01BdkJBUSxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9tb3Rpb24uanM/ZTljOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3ggfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IHRleHRWYXJpYW50ID0gKGRlbGF5KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgLi4ue1xuICAgICAgICB5OiA1MCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhbmltYXRlOiB7XG4gICAgICAuLi57XG4gICAgICAgIHk6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgIGR1cmF0aW9uOiAxLjI1LFxuICAgICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXh0U2xpZGVWYXJpYW50ID0gKGRlbGF5LCBkaXJlY3Rpb24sIGluVmlldykgPT4ge1xuICByZXR1cm4ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgIC4uLntcbiAgICAgICAgeTogNjAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBhbmltYXRlOiB7XG4gICAgICAuLi57XG4gICAgICAgIHk6IDAsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgIGR1cmF0aW9uOiAxLjI1LFxuICAgICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBjYXJkVmFyaWFudCA9IChkZWxheSwgaW5WaWV3LCB4KSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgLi4ue1xuICAgICAgICB5OiB4LFxuXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBhbmltYXRlOiB7XG4gICAgICAuLi57XG4gICAgICAgIHk6IDUwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICBkdXJhdGlvbjogMS41LFxuICAgICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdGFnZ2VyQ29udGFpbmVyID0gKHN0YWdnZXJDaGlsZHJlbiwgZGVsYXlDaGlsZHJlbikgPT4ge1xuICByZXR1cm4ge1xuICAgIGhpZGRlbjoge30sXG4gICAgc2hvdzoge1xuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBzdGFnZ2VyQ2hpbGRyZW46IHN0YWdnZXJDaGlsZHJlbixcbiAgICAgICAgZGVsYXlDaGlsZHJlbjogZGVsYXlDaGlsZHJlbiB8fCAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlSW4gPSAoZGlyZWN0aW9uLCB0eXBlLCBkZWxheSwgZHVyYXRpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoaWRkZW46IHtcbiAgICAgIC4uLntcbiAgICAgICAgeDogZGlyZWN0aW9uID09PSBcImxlZnRcIiA/IDEwMCA6IGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiID8gLTEwMCA6IDAsXG4gICAgICAgIHk6IGRpcmVjdGlvbiA9PT0gXCJ1cFwiID8gMTAwIDogZGlyZWN0aW9uID09PSBcImRvd25cIiA/IC0xMDAgOiAwLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgbGVmdDogZGlyZWN0aW9uID09PSBcImxlZnRcIiA/IFwiLTEwJVwiIDogZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgPyBcIjEwMCVcIiA6IDAsXG5cbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAuLi57XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBlYXNlOiBcImVhc2VPdXRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBmYWRlSW4gPSAoZGlyZWN0aW9uLCB0eXBlLCBkZWxheSwgZHVyYXRpb24pID0+IHtcbiAgcmV0dXJuIHtcbiAgICBoaWRkZW46IHtcbiAgICAgIHg6IGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgPyAxMDAgOiBkaXJlY3Rpb24gPT09IFwicmlnaHRcIiA/IC0xMDAgOiAwLFxuICAgICAgeTogZGlyZWN0aW9uID09PSBcInVwXCIgPyAxMDAgOiBkaXJlY3Rpb24gPT09IFwiZG93blwiID8gLTEwMCA6IDAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgc2hvdzoge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBkZWxheTogZGVsYXksXG4gICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgZWFzZTogXCJlYXNlT3V0XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgem9vbUluID0gKGRlbGF5LCBkdXJhdGlvbikgPT4ge1xuICByZXR1cm4ge1xuICAgIGhpZGRlbjoge1xuICAgICAgc2NhbGU6IDAsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgc2hvdzoge1xuICAgICAgc2NhbGU6IDEsXG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICB0eXBlOiBcInR3ZWVuXCIsXG4gICAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICBlYXNlOiBcImVhc2VPdXRcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCB0ZXN0ID0gKGksIGluVmlldykgPT4gKFxuICA8PlxuICAgIGluaXRpYWw9XG4gICAge3tcbiAgICAgIHk6IDcwLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICB9fVxuICAgIHdoaWxlSW5WaWV3PVwidmlzaWJsZVwiIHZpZXdwb3J0PXt7IG9uY2U6IHRydWUgfX1cbiAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwic3ByaW5nXCIsIGRlbGF5OiBpICogMC42LCBkdXJhdGlvbjogMi41IH19XG4gICAgYW5pbWF0ZT1cbiAgICB7e1xuICAgICAgeTogMCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxLjUsXG4gICAgICAgIGRlbGF5OiBpICogMC41LFxuICAgICAgfSxcbiAgICB9fVxuICAgIHZhcmlhbnRzPVxuICAgIHt7XG4gICAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IGluVmlldyA/IDEgOiAwLCBzY2FsZTogaW5WaWV3ID8gMSA6IDAgfSxcbiAgICAgIGhpZGRlbjogeyBvcGFjaXR5OiBpblZpZXcgPyAxIDogMCwgc2NhbGU6IGluVmlldyA/IDEgOiAwIH0sXG4gICAgfX1cbiAgICA7XG4gIDwvPlxuKTtcblxuLy8gPT09PT09PT09PT09PT09XG5cbmV4cG9ydCBjb25zdCBNb3Rpb25Cb3ggPSBtb3Rpb24oQm94KTtcblxuLy8gZXhwb3J0IGNvbnN0IGZhZGVJbiA9IHtcbi8vICAgaW5pdGlhbDogeyBvcGFjaXR5OiAwIH0sXG4vLyAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSB9LFxuLy8gICBleGl0OiB7IG9wYWNpdHk6IDAgfSxcbi8vIH07XG5cbi8vIGV4cG9ydCBjb25zdCBzbGlkZUluID0ge1xuLy8gICBpbml0aWFsOiB7IHg6IC0xMDAgfSxcbi8vICAgYW5pbWF0ZTogeyB4OiAwIH0sXG4vLyAgIGV4aXQ6IHsgeDogLTEwMCB9LFxuLy8gfTtcblxuZXhwb3J0IGNvbnN0IHNjYWxlSW4gPSB7XG4gIGluaXRpYWw6IHsgc2NhbGU6IDAgfSxcbiAgYW5pbWF0ZTogeyBzY2FsZTogMSB9LFxuICBleGl0OiB7IHNjYWxlOiAwIH0sXG59O1xuXG5leHBvcnQgY29uc3Qgcm90YXRlSW4gPSB7XG4gIGluaXRpYWw6IHsgcm90YXRlOiAtMTgwIH0sXG4gIGFuaW1hdGU6IHsgcm90YXRlOiAwIH0sXG4gIGV4aXQ6IHsgcm90YXRlOiAtMTgwIH0sXG59O1xuXG5leHBvcnQgY29uc3Qgc2xpZGVVcCA9IHtcbiAgaW5pdGlhbDogeyB5OiA1MCwgb3BhY2l0eTogMCB9LFxuICBhbmltYXRlOiB7IHk6IDAsIG9wYWNpdHk6IDEgfSxcbiAgZXhpdDogeyB5OiA1MCwgb3BhY2l0eTogMCB9LFxuICAvLyB0cmFuc2l0aW9uOiB7XG4gIC8vICAgZHVyYXRpb246IDAuOCwgLy8gQWRqdXN0IHRoZSBkdXJhdGlvbiBhcyBuZWVkZWRcbiAgLy8gICBlYXNlOiBcImVhc2VPdXRcIiwgLy8gVXNlIGEgc3BlY2lmaWMgZWFzaW5nIGZ1bmN0aW9uIChlLmcuLCBcImVhc2VPdXRcIiwgXCJlYXNlSW5PdXRcIilcbiAgLy8gICAvLyBBZGQgb3RoZXIgdHJhbnNpdGlvbiBwcm9wZXJ0aWVzIHRvIGVuaGFuY2UgdGhlIGFuaW1hdGlvblxuICAvLyAgIC8vIEZvciBleGFtcGxlOlxuICAvLyAgIC8vIGRlbGF5OiAwLjEsIC8vIEFkZCBhIGRlbGF5IGJlZm9yZSB0aGUgYW5pbWF0aW9uIHN0YXJ0c1xuICAvLyAgIC8vIGJvdW5jZTogMC41LCAvLyBBZGQgYSBib3VuY2UgZWZmZWN0IGF0IHRoZSBlbmRcbiAgLy8gICAvLyBkYW1waW5nOiA4LCAvLyBBZGp1c3QgdGhlIGRhbXBpbmcgZm9yIHNwcmluZyBhbmltYXRpb25zXG4gIC8vICAgLy8gc3RpZmZuZXNzOiAxNTAsIC8vIEFkanVzdCB0aGUgc3RpZmZuZXNzIGZvciBzcHJpbmcgYW5pbWF0aW9uc1xuICAvLyB9LFxufTtcblxuZXhwb3J0IGNvbnN0IHNsaWRlRG93biA9IHtcbiAgaW5pdGlhbDogeyB5OiAtNTAsIG9wYWNpdHk6IDAgfSxcbiAgYW5pbWF0ZTogeyB5OiAwLCBvcGFjaXR5OiAxIH0sXG4gIGV4aXQ6IHsgeTogLTUwLCBvcGFjaXR5OiAwIH0sXG59O1xuXG5leHBvcnQgY29uc3Qgc2hha2UgPSB7XG4gIGFuaW1hdGU6IHtcbiAgICByb3RhdGU6IFstMTAsIDEwLCAtMTAsIDEwLCAwXSxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAwLjUgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBNb3Rpb25TbGlkZUluID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bW90aW9uLmRpdlxuICAgIHZhcmlhbnRzPXtzbGlkZUlufVxuICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgZXhpdD1cImV4aXRcIlxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgTW90aW9uU2NhbGVJbiA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPG1vdGlvbi5kaXZcbiAgICB2YXJpYW50cz17c2NhbGVJbn1cbiAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgIGV4aXQ9XCJleGl0XCJcbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IE1vdGlvblJvdGF0ZUluID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8bW90aW9uLmRpdlxuICAgIHZhcmlhbnRzPXtyb3RhdGVJbn1cbiAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgIGV4aXQ9XCJleGl0XCJcbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9tb3Rpb24uZGl2PlxuKTtcblxuZXhwb3J0IGNvbnN0IE1vdGlvblNsaWRlRG93biA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPG1vdGlvbi5kaXZcbiAgICB2YXJpYW50cz17c2xpZGVEb3dufVxuICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgZXhpdD1cImV4aXRcIlxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5leHBvcnQgY29uc3QgTW90aW9uU2hha2UgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtzaGFrZX0gYW5pbWF0ZT1cImFuaW1hdGVcIj5cbiAgICB7Y2hpbGRyZW59XG4gIDwvbW90aW9uLmRpdj5cbik7XG5cbmV4cG9ydCBjb25zdCBNb3Rpb25GYWRlSW4gPSAoeyBkdXJhdGlvbiA9IDAuMywgZGVsYXkgPSAwLCBjaGlsZHJlbiB9KSA9PiAoXG4gIDxNb3Rpb25Cb3hcbiAgICB2YXJpYW50cz17ZmFkZUlufVxuICAgIGluaXRpYWw9XCJpbml0aWFsXCJcbiAgICBhbmltYXRlPVwiYW5pbWF0ZVwiXG4gICAgZXhpdD1cImV4aXRcIlxuICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb24sIGRlbGF5IH19XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvTW90aW9uQm94PlxuKTtcblxuZXhwb3J0IGNvbnN0IE1vdGlvblNsaWRlVXAgPSAoeyBkdXJhdGlvbiwgZGVsYXksIGNoaWxkcmVuLCBpblZpZXcgfSkgPT4gKFxuICA8TW90aW9uQm94XG4gICAgdmFyaWFudHM9e3tcbiAgICAgIC8vdHJhbnNpdGlvbjogeyBkdXJhdGlvbiwgZGVsYXkgfSxcbiAgICAgIHZpc2libGU6IHtcbiAgICAgICAgb3BhY2l0eTogaW5WaWV3ID8gMSA6IDAsXG4gICAgICAgIHNjYWxlOiBpblZpZXcgPyAxIDogMCxcbiAgICAgICAgLy8gIHg6IDAsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMixcbiAgICAgICAgeTogMTAsXG4gICAgICB9LFxuICAgICAgaGlkZGVuOiB7XG4gICAgICAgIG9wYWNpdHk6IGluVmlldyA/IDEgOiAwLFxuICAgICAgICAvLyBzY2FsZTogaW5WaWV3ID8gMSA6IDAsXG4gICAgICAgIC8vIHg6IDEwMCxcbiAgICAgICAgeTogMTAwLFxuICAgICAgfSxcbiAgICB9fVxuICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgIC8vIGFuaW1hdGU9XCJhbmltYXRlXCJcbiAgICAvLyBleGl0PVwiZXhpdFwiXG4gICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbiwgZGVsYXkgfX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9Nb3Rpb25Cb3g+XG4pO1xuIl0sIm5hbWVzIjpbIkJveCIsIm1vdGlvbiIsInRleHRWYXJpYW50IiwiZGVsYXkiLCJpbml0aWFsIiwieSIsIm9wYWNpdHkiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJkdXJhdGlvbiIsInRleHRTbGlkZVZhcmlhbnQiLCJkaXJlY3Rpb24iLCJpblZpZXciLCJjYXJkVmFyaWFudCIsIngiLCJzdGFnZ2VyQ29udGFpbmVyIiwic3RhZ2dlckNoaWxkcmVuIiwiZGVsYXlDaGlsZHJlbiIsImhpZGRlbiIsInNob3ciLCJzbGlkZUluIiwibGVmdCIsImVhc2UiLCJmYWRlSW4iLCJ6b29tSW4iLCJzY2FsZSIsInRlc3QiLCJpIiwib25jZSIsInZpc2libGUiLCJNb3Rpb25Cb3giLCJzY2FsZUluIiwiZXhpdCIsInJvdGF0ZUluIiwicm90YXRlIiwic2xpZGVVcCIsInNsaWRlRG93biIsInNoYWtlIiwiTW90aW9uU2xpZGVJbiIsImNoaWxkcmVuIiwiZGl2IiwidmFyaWFudHMiLCJNb3Rpb25TY2FsZUluIiwiTW90aW9uUm90YXRlSW4iLCJNb3Rpb25TbGlkZURvd24iLCJNb3Rpb25TaGFrZSIsIk1vdGlvbkZhZGVJbiIsIk1vdGlvblNsaWRlVXAiLCJ0cmFuc2l0aW9uRHVyYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/motion.js\n");

/***/ })

});