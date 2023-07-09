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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tilt */ \"./node_modules/react-tilt/dist/tilt.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar CardTil = function(param) {\n    var name = param.name, description = param.description, image = param.image, tags = param.tags, source_code_link = param.source_code_link, index = param.index;\n    var fadeInVariants = {\n        hidden: {\n            opacity: 0,\n            y: 35\n        },\n        visible: {\n            opacity: 1,\n            y: 0\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: fadeInVariants,\n        initial: \"hidden\",\n        animate: \"visible\",\n        transition: {\n            type: \"spring\",\n            delay: index * 0.5,\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tilt__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: {\n                max: 10,\n                scale: 1,\n                speed: 10\n            },\n            className: \"bg-tertiary p-5 rounded-1xl sm:w-[360px] w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    borderRadius: \"lg\",\n                    overflow: \"hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                        transform: \"scale(1.0)\",\n                        src: image,\n                        alt: \"project_image\",\n                        objectFit: \"contain\",\n                        width: \"100%\",\n                        transition: \"0.3s ease-in-out\",\n                        _hover: {\n                            transform: \"scale(1.05)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    mx: \"4\",\n                    mt: \"5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            color: \"white\",\n                            fontWeight: \"bold\",\n                            fontSize: \"24px\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"2\",\n                            color: \"white\",\n                            fontSize: \"17px\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                            my: \"4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                w: \"full\",\n                                borderColor: \"white\",\n                                color: \"white\",\n                                variant: \"outline\",\n                                _hover: {},\n                                children: \"Sign up now\"\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_c = CardTil;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardTil);\nvar _c;\n$RefreshReg$(_c, \"CardTil\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkVGlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ0k7QUFDZ0Q7QUFDdkM7QUFDd0I7O0FBRTlELEdBQUssQ0FBQ1ksT0FBTyxHQUFHLFFBQ1gsUUFNQyxDQUFDO1FBTkxDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUNoQkMsS0FBSyxTQUFMQSxLQUFLO0lBRUwsR0FBSyxDQUFDQyxjQUFjLEdBQUcsQ0FBQztRQUN0QkMsTUFBTSxFQUFFLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQUM7WUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBQyxDQUFDO1FBQzdCQyxPQUFPLEVBQUUsQ0FBQztZQUFDRixPQUFPLEVBQUUsQ0FBQztZQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELE1BQU0sNkVBQ0hkLHFEQUFVO1FBQ1RpQixRQUFRLEVBQUVOLGNBQWM7UUFDeEJPLE9BQU8sRUFBQyxDQUFRO1FBQ2hCQyxPQUFPLEVBQUMsQ0FBUztRQUNqQkMsVUFBVSxFQUFFLENBQUM7WUFBQ0MsSUFBSSxFQUFFLENBQVE7WUFBRUMsS0FBSyxFQUFFWixLQUFLLEdBQUcsR0FBRztZQUFFYSxRQUFRLEVBQUUsR0FBRztRQUFDLENBQUM7OEZBRWhFOUIsa0RBQUk7WUFDSCtCLE9BQU8sRUFBRSxDQUFDO2dCQUNSQyxHQUFHLEVBQUUsRUFBRTtnQkFDUEMsS0FBSyxFQUFFLENBQUM7Z0JBQ1JDLEtBQUssRUFBRSxFQUFFO1lBQ1gsQ0FBQztZQUNEQyxTQUFTLEVBQUMsQ0FBaUQ7OzRGQUUxRGxDLGlEQUFHO29CQUFDbUMsWUFBWSxFQUFDLENBQUk7b0JBQUNDLFFBQVEsRUFBQyxDQUFROzBHQUNyQ2pDLG1EQUFLO3dCQUNKa0MsU0FBUyxFQUFDLENBQVk7d0JBQ3RCQyxHQUFHLEVBQUV6QixLQUFLO3dCQUNWMEIsR0FBRyxFQUFDLENBQWU7d0JBQ25CQyxTQUFTLEVBQUMsQ0FBUzt3QkFDbkJDLEtBQUssRUFBQyxDQUFNO3dCQUNaZixVQUFVLEVBQUMsQ0FBa0I7d0JBQzdCZ0IsTUFBTSxFQUFFLENBQUM7NEJBQ1BMLFNBQVMsRUFBRSxDQUFhO3dCQUMxQixDQUFDOzs7Ozs7Ozs7Ozs0RkFJSnJDLGlEQUFHO29CQUFDMkMsRUFBRSxFQUFDLENBQUc7b0JBQUNDLEVBQUUsRUFBQyxDQUFHOztvR0FDZjNDLGtEQUFJOzRCQUFDNEMsS0FBSyxFQUFDLENBQU87NEJBQUNDLFVBQVUsRUFBQyxDQUFNOzRCQUFDQyxRQUFRLEVBQUMsQ0FBTTtzQ0FDbERwQyxJQUFJOzs7Ozs7b0dBRU5WLGtEQUFJOzRCQUFDMkMsRUFBRSxFQUFDLENBQUc7NEJBQUNDLEtBQUssRUFBQyxDQUFPOzRCQUFDRSxRQUFRLEVBQUMsQ0FBTTtzQ0FDdkNuQyxXQUFXOzs7Ozs7b0dBRWJaLGlEQUFHOzRCQUFDZ0QsRUFBRSxFQUFDLENBQUc7a0hBQ1IzQyxvREFBTTtnQ0FDTDRDLENBQUMsRUFBQyxDQUFNO2dDQUNSQyxXQUFXLEVBQUMsQ0FBTztnQ0FDbkJMLEtBQUssRUFBQyxDQUFPO2dDQUNiTSxPQUFPLEVBQUMsQ0FBUztnQ0FDakJULE1BQU0sRUFBRSxDQUFDLENBQUM7MENBQ1gsQ0FFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1aLENBQUM7S0FoRUtoQyxPQUFPO0FBa0ViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ2FyZFRpbC5qc3g/YWFhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwicmVhY3QtdGlsdFwiO1xuaW1wb3J0IHsgQm94LCBUZXh0LCBGbGV4LCBJbWFnZSwgSWNvbkJ1dHRvbiwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBCc0dpdGh1YiwgQnNEaXNjb3JkLCBCc1BlcnNvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuXG5jb25zdCBDYXJkVGlsID0gKHtcbiAgbmFtZSxcbiAgZGVzY3JpcHRpb24sXG4gIGltYWdlLFxuICB0YWdzLFxuICBzb3VyY2VfY29kZV9saW5rLFxuICBpbmRleCxcbn0pID0+IHtcbiAgY29uc3QgZmFkZUluVmFyaWFudHMgPSB7XG4gICAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDM1IH0sXG4gICAgdmlzaWJsZTogeyBvcGFjaXR5OiAxLCB5OiAwIH0sXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgdmFyaWFudHM9e2ZhZGVJblZhcmlhbnRzfVxuICAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwic3ByaW5nXCIsIGRlbGF5OiBpbmRleCAqIDAuNSwgZHVyYXRpb246IDAuNSB9fVxuICAgID5cbiAgICAgIDxUaWx0XG4gICAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgICBtYXg6IDEwLFxuICAgICAgICAgIHNjYWxlOiAxLFxuICAgICAgICAgIHNwZWVkOiAxMCxcbiAgICAgICAgfX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYmctdGVydGlhcnkgcC01IHJvdW5kZWQtMXhsIHNtOnctWzM2MHB4XSB3LWZ1bGxcIlxuICAgICAgPlxuICAgICAgICA8Qm94IGJvcmRlclJhZGl1cz1cImxnXCIgb3ZlcmZsb3c9XCJoaWRkZW5cIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInNjYWxlKDEuMClcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgIGFsdD1cInByb2plY3RfaW1hZ2VcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY29udGFpblwiXG4gICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgICAgICAgdHJhbnNpdGlvbj1cIjAuM3MgZWFzZS1pbi1vdXRcIlxuICAgICAgICAgICAgX2hvdmVyPXt7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgxLjA1KVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IG14PVwiNFwiIG10PVwiNVwiPlxuICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPVwiMjRweFwiPlxuICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgIDxUZXh0IG10PVwiMlwiIGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjE3cHhcIj5cbiAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPEJveCBteT1cIjRcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICBib3JkZXJDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcbiAgICAgICAgICAgICAgX2hvdmVyPXt7fX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgU2lnbiB1cCBub3dcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvVGlsdD5cbiAgICA8L21vdGlvbi5kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkVGlsO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGlsdCIsIkJveCIsIlRleHQiLCJGbGV4IiwiSW1hZ2UiLCJJY29uQnV0dG9uIiwiQnV0dG9uIiwibW90aW9uIiwiQnNHaXRodWIiLCJCc0Rpc2NvcmQiLCJCc1BlcnNvbiIsIkNhcmRUaWwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsInRhZ3MiLCJzb3VyY2VfY29kZV9saW5rIiwiaW5kZXgiLCJmYWRlSW5WYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsImRpdiIsInZhcmlhbnRzIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImRlbGF5IiwiZHVyYXRpb24iLCJvcHRpb25zIiwibWF4Iiwic2NhbGUiLCJzcGVlZCIsImNsYXNzTmFtZSIsImJvcmRlclJhZGl1cyIsIm92ZXJmbG93IiwidHJhbnNmb3JtIiwic3JjIiwiYWx0Iiwib2JqZWN0Rml0Iiwid2lkdGgiLCJfaG92ZXIiLCJteCIsIm10IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJteSIsInciLCJib3JkZXJDb2xvciIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CardTil.jsx\n");

/***/ })

});