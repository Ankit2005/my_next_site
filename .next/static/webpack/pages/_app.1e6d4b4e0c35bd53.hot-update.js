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

/***/ "./src/components/FlotingBtn.jsx":
/*!***************************************!*\
  !*** ./src/components/FlotingBtn.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FlotingBtn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar ChakraBox = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n    /**\n   * Allow motion props and non-Chakra props to be forwarded.\n   */ shouldForwardProp: function(prop) {\n        return (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.isValidMotionProp)(prop) || (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.shouldForwardProp)(prop);\n    }\n});\n_c = ChakraBox;\nfunction FlotingBtn() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        position: \"fixed\",\n        border: \"1px\",\n        borderColor: \"red\",\n        bottom: -50,\n        right: 2,\n        zIndex: \"10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChakraBox, {\n                animate: {\n                    //scale: [0.3, 0.4, 0.4],\n                    //  rotate: [0, 50, 270, 270, 0],\n                    y: [\n                        \"0%\",\n                        \"-10%\",\n                        \"0%\"\n                    ]\n                },\n                transition: {\n                    duration: 2,\n                    ease: \"easeInOut\",\n                    repeat: Infinity,\n                    repeatType: \"loop\"\n                },\n                padding: \"2\",\n                //  bgGradient=\"linear(to-l, #7928CA, #FF0080)\"\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                width: \"100px\",\n                height: \"100px\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                    as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button,\n                    bg: \"primaryBlueBtn\",\n                    whileHover: {\n                        scale: 1.2\n                    },\n                    onHoverStart: function(e) {},\n                    onHoverEnd: function(e) {},\n                    //  width={58}\n                    // height=\"58\"\n                    color: \"white\",\n                    borderRadius: 50,\n                    fontSize: \"40\",\n                    initial: {\n                        width: \"40px\",\n                        height: \"40px\",\n                        borderRadius: \"50%\",\n                        opacity: 0\n                    },\n                    animate: {\n                        width: \"60px\",\n                        height: \"60px\",\n                        borderRadius: \"50%\",\n                        opacity: 1,\n                        transition: {\n                            type: \"spring\",\n                            duration: \"1.5\",\n                            iterations: Infinity\n                        }\n                    },\n                    variants: {\n                        zoomedIn: {\n                            scale: 1.2\n                        },\n                        zoomedOut: {\n                            scale: 0.8\n                        }\n                    },\n                    onAnimationEnd: function() {\n                        return console.log(\"Animation ended\");\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaViber, {}, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/FlotingBtn.jsx\",\n                        lineNumber: 95,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/FlotingBtn.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/FlotingBtn.jsx\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/FlotingBtn.jsx\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/FlotingBtn.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this));\n};\n_c1 = FlotingBtn;\nvar _c, _c1;\n$RefreshReg$(_c, \"ChakraBox\");\n$RefreshReg$(_c1, \"FlotingBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7O0FBTXBCLENBQUM7TUFoRnVCTyxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Zsb3RpbmdCdG4uanN4P2QyZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgY2hha3JhLFxuICBzaG91bGRGb3J3YXJkUHJvcCxcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IEZhVmliZXIgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuaW1wb3J0IHsgbW90aW9uLCBpc1ZhbGlkTW90aW9uUHJvcCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IENoYWtyYUJveCA9IGNoYWtyYShtb3Rpb24uZGl2LCB7XG4gIC8qKlxuICAgKiBBbGxvdyBtb3Rpb24gcHJvcHMgYW5kIG5vbi1DaGFrcmEgcHJvcHMgdG8gYmUgZm9yd2FyZGVkLlxuICAgKi9cbiAgc2hvdWxkRm9yd2FyZFByb3A6IChwcm9wKSA9PlxuICAgIGlzVmFsaWRNb3Rpb25Qcm9wKHByb3ApIHx8IHNob3VsZEZvcndhcmRQcm9wKHByb3ApLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsb3RpbmdCdG4oKSB7XG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgcG9zaXRpb249XCJmaXhlZFwiXG4gICAgICBib3JkZXI9XCIxcHhcIlxuICAgICAgYm9yZGVyQ29sb3I9e1wicmVkXCJ9XG4gICAgICBib3R0b209ey01MH1cbiAgICAgIHJpZ2h0PXsyfVxuICAgICAgekluZGV4PVwiMTBcIlxuICAgID5cbiAgICAgIDxDb250YWluZXJcbiAgICAgIC8vICBoPVwiMTAwdmhcIlxuICAgICAgLy8gZGlzcGxheT1cImZsZXhcIlxuICAgICAgLy8gYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICAvLyBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiXG4gICAgICA+XG4gICAgICAgIDxDaGFrcmFCb3hcbiAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAvL3NjYWxlOiBbMC4zLCAwLjQsIDAuNF0sXG4gICAgICAgICAgICAvLyAgcm90YXRlOiBbMCwgNTAsIDI3MCwgMjcwLCAwXSxcbiAgICAgICAgICAgIHk6IFtcIjAlXCIsIFwiLTEwJVwiLCBcIjAlXCJdLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17e1xuICAgICAgICAgICAgZHVyYXRpb246IDIsXG4gICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgcmVwZWF0OiBJbmZpbml0eSxcbiAgICAgICAgICAgIHJlcGVhdFR5cGU6IFwibG9vcFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgcGFkZGluZz1cIjJcIlxuICAgICAgICAgIC8vICBiZ0dyYWRpZW50PVwibGluZWFyKHRvLWwsICM3OTI4Q0EsICNGRjAwODApXCJcbiAgICAgICAgICBkaXNwbGF5PVwiZmxleFwiXG4gICAgICAgICAganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIlxuICAgICAgICAgIGFsaWduSXRlbXM9XCJjZW50ZXJcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwcHhcIlxuICAgICAgICAgIGhlaWdodD1cIjEwMHB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGFzPXttb3Rpb24uYnV0dG9ufVxuICAgICAgICAgICAgYmc9XCJwcmltYXJ5Qmx1ZUJ0blwiXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjIgfX1cbiAgICAgICAgICAgIG9uSG92ZXJTdGFydD17KGUpID0+IHt9fVxuICAgICAgICAgICAgb25Ib3ZlckVuZD17KGUpID0+IHt9fVxuICAgICAgICAgICAgLy8gIHdpZHRoPXs1OH1cbiAgICAgICAgICAgIC8vIGhlaWdodD1cIjU4XCJcbiAgICAgICAgICAgIGNvbG9yPVwid2hpdGVcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXs1MH1cbiAgICAgICAgICAgIGZvbnRTaXplPVwiNDBcIlxuICAgICAgICAgICAgaW5pdGlhbD17e1xuICAgICAgICAgICAgICB3aWR0aDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI1MCVcIixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBhbmltYXRlPXt7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjYwcHhcIixcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogXCIxLjVcIixcbiAgICAgICAgICAgICAgICBpdGVyYXRpb25zOiBJbmZpbml0eSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgICB6b29tZWRJbjoge1xuICAgICAgICAgICAgICAgIHNjYWxlOiAxLjIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHpvb21lZE91dDoge1xuICAgICAgICAgICAgICAgIHNjYWxlOiAwLjgsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgb25BbmltYXRpb25FbmQ9eygpID0+IGNvbnNvbGUubG9nKFwiQW5pbWF0aW9uIGVuZGVkXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGYVZpYmVyIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2hha3JhQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiY2hha3JhIiwic2hvdWxkRm9yd2FyZFByb3AiLCJGYVZpYmVyIiwibW90aW9uIiwiaXNWYWxpZE1vdGlvblByb3AiLCJOZXh0SW1hZ2UiLCJDaGFrcmFCb3giLCJkaXYiLCJwcm9wIiwiRmxvdGluZ0J0biIsInBvc2l0aW9uIiwiYm9yZGVyIiwiYm9yZGVyQ29sb3IiLCJib3R0b20iLCJyaWdodCIsInpJbmRleCIsImFuaW1hdGUiLCJ5IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiZWFzZSIsInJlcGVhdCIsIkluZmluaXR5IiwicmVwZWF0VHlwZSIsInBhZGRpbmciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJoZWlnaHQiLCJhcyIsImJ1dHRvbiIsImJnIiwid2hpbGVIb3ZlciIsInNjYWxlIiwib25Ib3ZlclN0YXJ0IiwiZSIsIm9uSG92ZXJFbmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ0eXBlIiwiaXRlcmF0aW9ucyIsInZhcmlhbnRzIiwiem9vbWVkSW4iLCJ6b29tZWRPdXQiLCJvbkFuaW1hdGlvbkVuZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/FlotingBtn.jsx\n");

/***/ })

});