"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/footer.jsx":
/*!***********************************!*\
  !*** ./src/components/footer.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Footer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ \"./config.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar SocialButton = function(param) {\n    var children = param.children, label = param.label, href = param.href;\n    _s();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra.button, {\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"blackAlpha.100\", \"whiteAlpha.100\"),\n        rounded: \"full\",\n        w: 8,\n        h: 8,\n        cursor: \"pointer\",\n        as: \"a\",\n        href: href,\n        display: \"inline-flex\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        transition: \"background 0.3s ease\",\n        _hover: {\n            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"blackAlpha.200\", \"whiteAlpha.200\")\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VisuallyHidden, {\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this));\n};\n_s(SocialButton, \"5rxRexUsrrZIvnjV+vC1pFVSBPE=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c = SocialButton;\nfunction Footer() {\n    _s1();\n    var currentYear = new Date().getFullYear();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        borderTopWidth: 1,\n        borderStyle: \"solid\",\n        borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.700\", \"gray.700\"),\n        // bg={useColorModeValue(\"bgPrimary\", \"gray.900\")}\n        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"bgPrimary\", \"bgPrimary\"),\n        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"gray.200\", \"gray.200\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack,\n                maxW: \"6xl\",\n                p: 8,\n                spacing: 4,\n                justify: \"center\",\n                align: \"center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Wrap, {\n                    p: \"5\",\n                    borderRadius: \"8\",\n                    borderWidth: {\n                        base: 0,\n                        md: 1\n                    },\n                    w: {\n                        base: \"100%\",\n                        md: \"60%\"\n                    },\n                    borderStyle: \"dashed\",\n                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)(\"primaryBorder\", \"primaryBorder\"),\n                    spacing: \"40px\",\n                    justify: \"center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            color: router.pathname === menu.link ? \"secondary\" : \"white\",\n                            cursor: \"pointer\",\n                            onClick: closeMenu,\n                            children: menu.name\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.WrapItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                w: \"60px\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    href: \"#\",\n                                    children: \"Home\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.WrapItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                w: \"60px\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    href: \"#\",\n                                    children: \"Service\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.WrapItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                w: \"60px\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    href: \"#\",\n                                    children: \"About\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.WrapItem, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Center, {\n                                w: \"60px\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {\n                                    href: \"#\",\n                                    children: \"Contact\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                lineNumber: 93,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack,\n                    maxW: \"6xl\",\n                    py: 2,\n                    direction: {\n                        base: \"column\",\n                        md: \"row\"\n                    },\n                    spacing: 4,\n                    justify: {\n                        base: \"center\",\n                        md: \"space-between\"\n                    },\n                    align: {\n                        base: \"center\",\n                        md: \"center\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            children: \"\\xa9 \".concat(currentYear, \" All rights reserved\")\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {\n                            direction: \"row\",\n                            spacing: 6,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocialButton, {\n                                    label: \"Twitter\",\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTwitter, {}, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                        lineNumber: 113,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocialButton, {\n                                    label: \"YouTube\",\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaYoutube, {}, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                        lineNumber: 116,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SocialButton, {\n                                    label: \"Instagram\",\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {}, void 0, false, {\n                                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                    lineNumber: 101,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/footer.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this));\n};\n_s1(Footer, \"OISidYhpPY1oLTBS1ZSwimRrYAM=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue\n    ];\n});\n_c1 = Footer;\nvar _c, _c1;\n$RefreshReg$(_c, \"SocialButton\");\n$RefreshReg$(_c1, \"Footer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLENBQVM7b0NBQUVDLElBQUksRUFBRSxDQUFHOzBIQUN0Q0oscURBQVM7Ozs7Ozs7Ozs7NEdBRVhDLFlBQVk7b0NBQUNFLEtBQUssRUFBRSxDQUFXO29DQUFFQyxJQUFJLEVBQUUsQ0FBRzswSEFDeENOLHVEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUIsQ0FBQztJQXJGdUJtQixNQUFNOztRQU1YeEIsK0RBQWlCO1FBRTFCQSwrREFBaUI7UUFDZEEsK0RBQWlCO1FBZ0JQQSwrREFBaUI7OztNQXpCaEJ3QixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci5qc3g/MmIxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBCb3gsXG4gIENlbnRlcixcbiAgY2hha3JhLFxuICBDb250YWluZXIsXG4gIExpbmssXG4gIFN0YWNrLFxuICBUZXh0LFxuICB1c2VDb2xvck1vZGVWYWx1ZSxcbiAgVmlzdWFsbHlIaWRkZW4sXG4gIFdyYXAsXG4gIFdyYXBJdGVtLFxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgTUFYX1dJRFRIIH0gZnJvbSBcImNvbmZpZ1wiO1xuaW1wb3J0IHsgRmFJbnN0YWdyYW0sIEZhVHdpdHRlciwgRmFZb3V0dWJlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmNvbnN0IFNvY2lhbEJ1dHRvbiA9ICh7IGNoaWxkcmVuLCBsYWJlbCwgaHJlZiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGNoYWtyYS5idXR0b25cbiAgICAgIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcImJsYWNrQWxwaGEuMTAwXCIsIFwid2hpdGVBbHBoYS4xMDBcIil9XG4gICAgICByb3VuZGVkPXtcImZ1bGxcIn1cbiAgICAgIHc9ezh9XG4gICAgICBoPXs4fVxuICAgICAgY3Vyc29yPXtcInBvaW50ZXJcIn1cbiAgICAgIGFzPXtcImFcIn1cbiAgICAgIGhyZWY9e2hyZWZ9XG4gICAgICBkaXNwbGF5PXtcImlubGluZS1mbGV4XCJ9XG4gICAgICBhbGlnbkl0ZW1zPXtcImNlbnRlclwifVxuICAgICAganVzdGlmeUNvbnRlbnQ9e1wiY2VudGVyXCJ9XG4gICAgICB0cmFuc2l0aW9uPXtcImJhY2tncm91bmQgMC4zcyBlYXNlXCJ9XG4gICAgICBfaG92ZXI9e3tcbiAgICAgICAgYmc6IHVzZUNvbG9yTW9kZVZhbHVlKFwiYmxhY2tBbHBoYS4yMDBcIiwgXCJ3aGl0ZUFscGhhLjIwMFwiKSxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFZpc3VhbGx5SGlkZGVuPntsYWJlbH08L1Zpc3VhbGx5SGlkZGVuPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvY2hha3JhLmJ1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgY29uc3QgY3VycmVudFllYXIgPSBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCk7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgYm9yZGVyVG9wV2lkdGg9ezF9XG4gICAgICBib3JkZXJTdHlsZT17XCJzb2xpZFwifVxuICAgICAgYm9yZGVyQ29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS43MDBcIiwgXCJncmF5LjcwMFwiKX1cbiAgICAgIC8vIGJnPXt1c2VDb2xvck1vZGVWYWx1ZShcImJnUHJpbWFyeVwiLCBcImdyYXkuOTAwXCIpfVxuICAgICAgYmc9e3VzZUNvbG9yTW9kZVZhbHVlKFwiYmdQcmltYXJ5XCIsIFwiYmdQcmltYXJ5XCIpfVxuICAgICAgY29sb3I9e3VzZUNvbG9yTW9kZVZhbHVlKFwiZ3JheS4yMDBcIiwgXCJncmF5LjIwMFwiKX1cbiAgICA+XG4gICAgICA8Q29udGFpbmVyXG4gICAgICAgIGFzPXtTdGFja31cbiAgICAgICAgbWF4Vz17XCI2eGxcIn1cbiAgICAgICAgcD17OH1cbiAgICAgICAgc3BhY2luZz17NH1cbiAgICAgICAganVzdGlmeT17XCJjZW50ZXJcIn1cbiAgICAgICAgYWxpZ249e1wiY2VudGVyXCJ9XG4gICAgICA+XG4gICAgICAgIDxXcmFwXG4gICAgICAgICAgcD1cIjVcIlxuICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjhcIlxuICAgICAgICAgIGJvcmRlcldpZHRoPXt7IGJhc2U6IDAsIG1kOiAxIH19XG4gICAgICAgICAgdz17eyBiYXNlOiBcIjEwMCVcIiwgbWQ6IFwiNjAlXCIgfX1cbiAgICAgICAgICBib3JkZXJTdHlsZT17XCJkYXNoZWRcIn1cbiAgICAgICAgICBib3JkZXJDb2xvcj17dXNlQ29sb3JNb2RlVmFsdWUoXCJwcmltYXJ5Qm9yZGVyXCIsIFwicHJpbWFyeUJvcmRlclwiKX1cbiAgICAgICAgICBzcGFjaW5nPVwiNDBweFwiXG4gICAgICAgICAganVzdGlmeT1cImNlbnRlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgY29sb3I9e3JvdXRlci5wYXRobmFtZSA9PT0gbWVudS5saW5rID8gXCJzZWNvbmRhcnlcIiA6IFwid2hpdGVcIn1cbiAgICAgICAgICAgIGN1cnNvcj1cInBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17Y2xvc2VNZW51fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHttZW51Lm5hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxXcmFwSXRlbT5cbiAgICAgICAgICAgIDxDZW50ZXIgdz1cIjYwcHhcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIjXCJ9PkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgIDxXcmFwSXRlbT5cbiAgICAgICAgICAgIDxDZW50ZXIgdz1cIjYwcHhcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIjXCJ9PlNlcnZpY2U8L0xpbms+XG4gICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICA8L1dyYXBJdGVtPlxuICAgICAgICAgIDxXcmFwSXRlbT5cbiAgICAgICAgICAgIDxDZW50ZXIgdz1cIjYwcHhcIj5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17XCIjXCJ9PkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICAgICA8V3JhcEl0ZW0+XG4gICAgICAgICAgICA8Q2VudGVyIHc9XCI2MHB4XCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e1wiI1wifT5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgPC9XcmFwSXRlbT5cbiAgICAgICAgPC9XcmFwPlxuICAgICAgPC9Db250YWluZXI+XG5cbiAgICAgIDxCb3g+XG4gICAgICAgIDxDb250YWluZXJcbiAgICAgICAgICBhcz17U3RhY2t9XG4gICAgICAgICAgbWF4Vz17XCI2eGxcIn1cbiAgICAgICAgICBweT17Mn1cbiAgICAgICAgICBkaXJlY3Rpb249e3sgYmFzZTogXCJjb2x1bW5cIiwgbWQ6IFwicm93XCIgfX1cbiAgICAgICAgICBzcGFjaW5nPXs0fVxuICAgICAgICAgIGp1c3RpZnk9e3sgYmFzZTogXCJjZW50ZXJcIiwgbWQ6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgYWxpZ249e3sgYmFzZTogXCJjZW50ZXJcIiwgbWQ6IFwiY2VudGVyXCIgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxUZXh0PntgwqkgJHtjdXJyZW50WWVhcn0gQWxsIHJpZ2h0cyByZXNlcnZlZGB9PC9UZXh0PlxuICAgICAgICAgIDxTdGFjayBkaXJlY3Rpb249e1wicm93XCJ9IHNwYWNpbmc9ezZ9PlxuICAgICAgICAgICAgPFNvY2lhbEJ1dHRvbiBsYWJlbD17XCJUd2l0dGVyXCJ9IGhyZWY9e1wiI1wifT5cbiAgICAgICAgICAgICAgPEZhVHdpdHRlciAvPlxuICAgICAgICAgICAgPC9Tb2NpYWxCdXR0b24+XG4gICAgICAgICAgICA8U29jaWFsQnV0dG9uIGxhYmVsPXtcIllvdVR1YmVcIn0gaHJlZj17XCIjXCJ9PlxuICAgICAgICAgICAgICA8RmFZb3V0dWJlIC8+XG4gICAgICAgICAgICA8L1NvY2lhbEJ1dHRvbj5cbiAgICAgICAgICAgIDxTb2NpYWxCdXR0b24gbGFiZWw9e1wiSW5zdGFncmFtXCJ9IGhyZWY9e1wiI1wifT5cbiAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIC8+XG4gICAgICAgICAgICA8L1NvY2lhbEJ1dHRvbj5cbiAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJveCIsIkNlbnRlciIsImNoYWtyYSIsIkNvbnRhaW5lciIsIkxpbmsiLCJTdGFjayIsIlRleHQiLCJ1c2VDb2xvck1vZGVWYWx1ZSIsIlZpc3VhbGx5SGlkZGVuIiwiV3JhcCIsIldyYXBJdGVtIiwiTUFYX1dJRFRIIiwiRmFJbnN0YWdyYW0iLCJGYVR3aXR0ZXIiLCJGYVlvdXR1YmUiLCJTb2NpYWxCdXR0b24iLCJjaGlsZHJlbiIsImxhYmVsIiwiaHJlZiIsImJ1dHRvbiIsImJnIiwicm91bmRlZCIsInciLCJoIiwiY3Vyc29yIiwiYXMiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwidHJhbnNpdGlvbiIsIl9ob3ZlciIsIkZvb3RlciIsImN1cnJlbnRZZWFyIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiYm9yZGVyVG9wV2lkdGgiLCJib3JkZXJTdHlsZSIsImJvcmRlckNvbG9yIiwiY29sb3IiLCJtYXhXIiwicCIsInNwYWNpbmciLCJqdXN0aWZ5IiwiYWxpZ24iLCJib3JkZXJSYWRpdXMiLCJib3JkZXJXaWR0aCIsImJhc2UiLCJtZCIsInJvdXRlciIsInBhdGhuYW1lIiwibWVudSIsImxpbmsiLCJvbkNsaWNrIiwiY2xvc2VNZW51IiwibmFtZSIsInB5IiwiZGlyZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/footer.jsx\n");

/***/ })

});