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

/***/ "./src/components/CardTil.jsx":
/*!************************************!*\
  !*** ./src/components/CardTil.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tilt */ \"./node_modules/react-tilt/dist/tilt.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar CardTil = function(param) {\n    var name = param.name, description = param.description, image = param.image, tags = param.tags, source_code_link = param.source_code_link, index = param.index;\n    var fadeInVariants = {\n        hidden: {\n            opacity: 0,\n            y: 35\n        },\n        visible: {\n            opacity: 1,\n            y: 0\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: fadeInVariants,\n        initial: \"hidden\",\n        animate: \"visible\",\n        transition: {\n            type: \"spring\",\n            delay: index * 0.5,\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tilt__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: {\n                max: 10,\n                scale: 1,\n                speed: 10\n            },\n            className: \"bg-tertiary p-5 rounded-1xl sm:w-[360px] w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    borderRadius: \"lg\",\n                    overflow: \"hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                        transform: \"scale(1.0)\",\n                        src: image,\n                        alt: \"project_image\",\n                        objectFit: \"contain\",\n                        width: \"100%\",\n                        transition: \"0.3s ease-in-out\",\n                        _hover: {\n                            transform: \"scale(1.05)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    mt: \"5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            color: \"white\",\n                            fontWeight: \"bold\",\n                            fontSize: \"24px\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"2\",\n                            color: \"white\",\n                            fontSize: \"17px\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        w: \"full\",\n                        borderColor: \"white\",\n                        color: \"white\",\n                        variant: \"outline\",\n                        children: \"Sign up now\"\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_c = CardTil;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardTil);\nvar _c;\n$RefreshReg$(_c, \"CardTil\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkVGlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ0k7QUFDZ0Q7QUFDdkM7QUFDd0I7O0FBRTlELEdBQUssQ0FBQ1ksT0FBTyxHQUFHLFFBQ1gsUUFNQyxDQUFDO1FBTkxDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUNoQkMsS0FBSyxTQUFMQSxLQUFLO0lBRUwsR0FBSyxDQUFDQyxjQUFjLEdBQUcsQ0FBQztRQUN0QkMsTUFBTSxFQUFFLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQUM7WUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBQyxDQUFDO1FBQzdCQyxPQUFPLEVBQUUsQ0FBQztZQUFDRixPQUFPLEVBQUUsQ0FBQztZQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELE1BQU0sNkVBQ0hkLHFEQUFVO1FBQ1RpQixRQUFRLEVBQUVOLGNBQWM7UUFDeEJPLE9BQU8sRUFBQyxDQUFRO1FBQ2hCQyxPQUFPLEVBQUMsQ0FBUztRQUNqQkMsVUFBVSxFQUFFLENBQUM7WUFBQ0MsSUFBSSxFQUFFLENBQVE7WUFBRUMsS0FBSyxFQUFFWixLQUFLLEdBQUcsR0FBRztZQUFFYSxRQUFRLEVBQUUsR0FBRztRQUFDLENBQUM7OEZBRWhFOUIsa0RBQUk7WUFDSCtCLE9BQU8sRUFBRSxDQUFDO2dCQUNSQyxHQUFHLEVBQUUsRUFBRTtnQkFDUEMsS0FBSyxFQUFFLENBQUM7Z0JBQ1JDLEtBQUssRUFBRSxFQUFFO1lBQ1gsQ0FBQztZQUNEQyxTQUFTLEVBQUMsQ0FBaUQ7OzRGQUUxRGxDLGlEQUFHO29CQUFDbUMsWUFBWSxFQUFDLENBQUk7b0JBQUNDLFFBQVEsRUFBQyxDQUFROzBHQUNyQ2pDLG1EQUFLO3dCQUNKa0MsU0FBUyxFQUFDLENBQVk7d0JBQ3RCQyxHQUFHLEVBQUV6QixLQUFLO3dCQUNWMEIsR0FBRyxFQUFDLENBQWU7d0JBQ25CQyxTQUFTLEVBQUMsQ0FBUzt3QkFDbkJDLEtBQUssRUFBQyxDQUFNO3dCQUNaZixVQUFVLEVBQUMsQ0FBa0I7d0JBQzdCZ0IsTUFBTSxFQUFFLENBQUM7NEJBQ1BMLFNBQVMsRUFBRSxDQUFhO3dCQUMxQixDQUFDOzs7Ozs7Ozs7Ozs0RkFJSnJDLGlEQUFHO29CQUFDMkMsRUFBRSxFQUFDLENBQUc7O29HQUNSMUMsa0RBQUk7NEJBQUMyQyxLQUFLLEVBQUMsQ0FBTzs0QkFBQ0MsVUFBVSxFQUFDLENBQU07NEJBQUNDLFFBQVEsRUFBQyxDQUFNO3NDQUNsRG5DLElBQUk7Ozs7OztvR0FFTlYsa0RBQUk7NEJBQUMwQyxFQUFFLEVBQUMsQ0FBRzs0QkFBQ0MsS0FBSyxFQUFDLENBQU87NEJBQUNFLFFBQVEsRUFBQyxDQUFNO3NDQUN2Q2xDLFdBQVc7Ozs7Ozs7Ozs7Ozs0RkFJZlosaURBQUc7MEdBQ0RLLG9EQUFNO3dCQUFDMEMsQ0FBQyxFQUFDLENBQU07d0JBQUNDLFdBQVcsRUFBQyxDQUFPO3dCQUFDSixLQUFLLEVBQUMsQ0FBTzt3QkFBQ0ssT0FBTyxFQUFDLENBQVM7a0NBQUMsQ0FFckU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVixDQUFDO0tBM0RLdkMsT0FBTztBQTZEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmRUaWwuanN4P2FhYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcInJlYWN0LXRpbHRcIjtcbmltcG9ydCB7IEJveCwgVGV4dCwgRmxleCwgSW1hZ2UsIEljb25CdXR0b24sIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgQnNHaXRodWIsIEJzRGlzY29yZCwgQnNQZXJzb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcblxuY29uc3QgQ2FyZFRpbCA9ICh7XG4gIG5hbWUsXG4gIGRlc2NyaXB0aW9uLFxuICBpbWFnZSxcbiAgdGFncyxcbiAgc291cmNlX2NvZGVfbGluayxcbiAgaW5kZXgsXG59KSA9PiB7XG4gIGNvbnN0IGZhZGVJblZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAzNSB9LFxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtmYWRlSW5WYXJpYW50c31cbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBkZWxheTogaW5kZXggKiAwLjUsIGR1cmF0aW9uOiAwLjUgfX1cbiAgICA+XG4gICAgICA8VGlsdFxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgbWF4OiAxMCxcbiAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICBzcGVlZDogMTAsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXRlcnRpYXJ5IHAtNSByb3VuZGVkLTF4bCBzbTp3LVszNjBweF0gdy1mdWxsXCJcbiAgICAgID5cbiAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9XCJsZ1wiIG92ZXJmbG93PVwiaGlkZGVuXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJzY2FsZSgxLjApXCJcbiAgICAgICAgICAgIHNyYz17aW1hZ2V9XG4gICAgICAgICAgICBhbHQ9XCJwcm9qZWN0X2ltYWdlXCJcbiAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgICAgICAgIHRyYW5zaXRpb249XCIwLjNzIGVhc2UtaW4tb3V0XCJcbiAgICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoMS4wNSlcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAgPEJveCBtdD1cIjVcIj5cbiAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT1cIjI0cHhcIj5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8VGV4dCBtdD1cIjJcIiBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCIxN3B4XCI+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94PlxuICAgICAgICAgIDxCdXR0b24gdz1cImZ1bGxcIiBib3JkZXJDb2xvcj1cIndoaXRlXCIgY29sb3I9XCJ3aGl0ZVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCI+XG4gICAgICAgICAgICBTaWduIHVwIG5vd1xuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvVGlsdD5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkVGlsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGlsdCIsIkJveCIsIlRleHQiLCJGbGV4IiwiSW1hZ2UiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwibW90aW9uIiwiQnNHaXRodWIiLCJCc0Rpc2NvcmQiLCJCc1BlcnNvbiIsIkNhcmRUaWwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2VfY29kZV9saW5rIiwiaW5kZXgiLCJmYWRlSW5WYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImRlbGF5IiwiZHVyYXRpb24iLCJvcHRpb25zIiwibWF4Iiwic2NhbGUiLCJzcGVlZCIsImNsYXNzTmFtZSIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwidHJhbnNmb3JtIiwic3JjIiwiYWx0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJfaG92ZXIiLCJtdCIsImNvbG9yIiwiZm9udFdlaWdodCIsImZvbnRTaXplIiwidyIsImJvcmRlckNvbG9yIiwidmFyaWFudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CardTil.jsx\n");

/***/ })

});