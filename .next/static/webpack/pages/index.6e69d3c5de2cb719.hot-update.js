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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tilt */ \"./node_modules/react-tilt/dist/tilt.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar CardTil = function(param) {\n    var name = param.name, description = param.description, image = param.image, tags = param.tags, source_code_link = param.source_code_link, index = param.index;\n    var fadeInVariants = {\n        hidden: {\n            opacity: 0,\n            y: 35\n        },\n        visible: {\n            opacity: 1,\n            y: 0\n        }\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: fadeInVariants,\n        initial: \"hidden\",\n        animate: \"visible\",\n        transition: {\n            type: \"spring\",\n            delay: index * 0.5,\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tilt__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: {\n                max: 70,\n                scale: 0.6,\n                speed: 30\n            },\n            className: \"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    borderRadius: \"lg\",\n                    overflow: \"hidden\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {\n                        transform: \"scale(1.0)\",\n                        src: \"https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80\",\n                        alt: \"some text\",\n                        objectFit: \"contain\",\n                        width: \"100%\",\n                        transition: \"0.3s ease-in-out\",\n                        _hover: {\n                            transform: \"scale(1.05)\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n                    mt: \"5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            color: \"white\",\n                            fontWeight: \"bold\",\n                            fontSize: \"24px\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                            mt: \"2\",\n                            color: \"#878787\",\n                            fontSize: \"18px\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/CardTil.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, _this));\n};\n_c = CardTil;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardTil);\nvar _c;\n$RefreshReg$(_c, \"CardTil\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DYXJkVGlsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXlCO0FBQ0k7QUFDd0M7QUFDL0I7QUFDd0I7O0FBRTlELEdBQUssQ0FBQ1csT0FBTyxHQUFHLFFBQ1gsUUFNQyxDQUFDO1FBTkxDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxXQUFXLFNBQVhBLFdBQVcsRUFDWEMsS0FBSyxTQUFMQSxLQUFLLEVBQ0xDLElBQUksU0FBSkEsSUFBSSxFQUNKQyxnQkFBZ0IsU0FBaEJBLGdCQUFnQixFQUNoQkMsS0FBSyxTQUFMQSxLQUFLO0lBRUwsR0FBSyxDQUFDQyxjQUFjLEdBQUcsQ0FBQztRQUN0QkMsTUFBTSxFQUFFLENBQUM7WUFBQ0MsT0FBTyxFQUFFLENBQUM7WUFBRUMsQ0FBQyxFQUFFLEVBQUU7UUFBQyxDQUFDO1FBQzdCQyxPQUFPLEVBQUUsQ0FBQztZQUFDRixPQUFPLEVBQUUsQ0FBQztZQUFFQyxDQUFDLEVBQUUsQ0FBQztRQUFDLENBQUM7SUFDL0IsQ0FBQztJQUVELE1BQU0sNkVBQ0hkLHFEQUFVO1FBQ1RpQixRQUFRLEVBQUVOLGNBQWM7UUFDeEJPLE9BQU8sRUFBQyxDQUFRO1FBQ2hCQyxPQUFPLEVBQUMsQ0FBUztRQUNqQkMsVUFBVSxFQUFFLENBQUM7WUFBQ0MsSUFBSSxFQUFFLENBQVE7WUFBRUMsS0FBSyxFQUFFWixLQUFLLEdBQUcsR0FBRztZQUFFYSxRQUFRLEVBQUUsR0FBRztRQUFDLENBQUM7OEZBRWhFN0Isa0RBQUk7WUFDSDhCLE9BQU8sRUFBRSxDQUFDO2dCQUNSQyxHQUFHLEVBQUUsRUFBRTtnQkFDUEMsS0FBSyxFQUFFLEdBQUc7Z0JBQ1ZDLEtBQUssRUFBRSxFQUFFO1lBQ1gsQ0FBQztZQUNEQyxTQUFTLEVBQUMsQ0FBaUQ7OzRGQUUxRGpDLGlEQUFHO29CQUFDa0MsWUFBWSxFQUFDLENBQUk7b0JBQUNDLFFBQVEsRUFBQyxDQUFROzBHQUNyQ2hDLG1EQUFLO3dCQUNKaUMsU0FBUyxFQUFDLENBQVk7d0JBQ3RCQyxHQUFHLEVBQ0QsQ0FBaUs7d0JBRW5LQyxHQUFHLEVBQUMsQ0FBVzt3QkFDZkMsU0FBUyxFQUFDLENBQVM7d0JBQ25CQyxLQUFLLEVBQUMsQ0FBTTt3QkFDWmYsVUFBVSxFQUFDLENBQWtCO3dCQUM3QmdCLE1BQU0sRUFBRSxDQUFDOzRCQUNQTCxTQUFTLEVBQUUsQ0FBYTt3QkFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7NEZBcUNKcEMsaURBQUc7b0JBQUMwQyxFQUFFLEVBQUMsQ0FBRzs7b0dBQ1J6QyxrREFBSTs0QkFBQzBDLEtBQUssRUFBQyxDQUFPOzRCQUFDQyxVQUFVLEVBQUMsQ0FBTTs0QkFBQ0MsUUFBUSxFQUFDLENBQU07c0NBQ2xEbkMsSUFBSTs7Ozs7O29HQUVOVCxrREFBSTs0QkFBQ3lDLEVBQUUsRUFBQyxDQUFHOzRCQUFDQyxLQUFLLEVBQUMsQ0FBUzs0QkFBQ0UsUUFBUSxFQUFDLENBQU07c0NBQ3pDbEMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjeEIsQ0FBQztLQWhHS0YsT0FBTztBQWtHYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NhcmRUaWwuanN4P2FhYTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRpbHQgZnJvbSBcInJlYWN0LXRpbHRcIjtcbmltcG9ydCB7IEJveCwgVGV4dCwgRmxleCwgSW1hZ2UsIEljb25CdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IEJzR2l0aHViLCBCc0Rpc2NvcmQsIEJzUGVyc29uIH0gZnJvbSBcInJlYWN0LWljb25zL2JzXCI7XG5cbmNvbnN0IENhcmRUaWwgPSAoe1xuICBuYW1lLFxuICBkZXNjcmlwdGlvbixcbiAgaW1hZ2UsXG4gIHRhZ3MsXG4gIHNvdXJjZV9jb2RlX2xpbmssXG4gIGluZGV4LFxufSkgPT4ge1xuICBjb25zdCBmYWRlSW5WYXJpYW50cyA9IHtcbiAgICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogMzUgfSxcbiAgICB2aXNpYmxlOiB7IG9wYWNpdHk6IDEsIHk6IDAgfSxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uZGl2XG4gICAgICB2YXJpYW50cz17ZmFkZUluVmFyaWFudHN9XG4gICAgICBpbml0aWFsPVwiaGlkZGVuXCJcbiAgICAgIGFuaW1hdGU9XCJ2aXNpYmxlXCJcbiAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgZGVsYXk6IGluZGV4ICogMC41LCBkdXJhdGlvbjogMC41IH19XG4gICAgPlxuICAgICAgPFRpbHRcbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIG1heDogNzAsXG4gICAgICAgICAgc2NhbGU6IDAuNixcbiAgICAgICAgICBzcGVlZDogMzAsXG4gICAgICAgIH19XG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXRlcnRpYXJ5IHAtNSByb3VuZGVkLTJ4bCBzbTp3LVszNjBweF0gdy1mdWxsXCJcbiAgICAgID5cbiAgICAgICAgPEJveCBib3JkZXJSYWRpdXM9XCJsZ1wiIG92ZXJmbG93PVwiaGlkZGVuXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJzY2FsZSgxLjApXCJcbiAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTk5NTEzNjA0NDctYjE5YmU4ZmU4MGY1P2l4bGliPXJiLTEuMi4xJml4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTgwMCZxPTgwXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFsdD1cInNvbWUgdGV4dFwiXG4gICAgICAgICAgICBvYmplY3RGaXQ9XCJjb250YWluXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICAgICAgICB0cmFuc2l0aW9uPVwiMC4zcyBlYXNlLWluLW91dFwiXG4gICAgICAgICAgICBfaG92ZXI9e3tcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKDEuMDUpXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHsvKiA8Qm94IHBvc2l0aW9uPVwicmVsYXRpdmVcIiB3PVwiZnVsbFwiIGg9XCI0MDBweFwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtpbWFnZX1cbiAgICAgICAgICAgIGFsdD1cInByb2plY3RfaW1hZ2VcIlxuICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgaD1cImZ1bGxcIlxuICAgICAgICAgICAgb2JqZWN0Rml0PVwiY292ZXJcIlxuICAgICAgICAgICAgcm91bmRlZD1cIjJ4bFwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGbGV4XG4gICAgICAgICAgICBqdXN0aWZ5PVwiZW5kXCJcbiAgICAgICAgICAgIG09XCIzXCJcbiAgICAgICAgICAgIHBvc2l0aW9uPVwiYWJzb2x1dGVcIlxuICAgICAgICAgICAgaW5zZXQ9XCIwXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nX2hvdmVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Qm94XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5vcGVuKHNvdXJjZV9jb2RlX2xpbmssIFwiX2JsYW5rXCIpfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjay1ncmFkaWVudCB3LTEwIGgtMTAgcm91bmRlZC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEljb25CdXR0b25cbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiZ2l0aHViXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiZ2hvc3RcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgICAgICAgICAgaXNSb3VuZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBfaG92ZXI9e3sgYmc6IFwic2Vjb25kYXJ5XCIgfX1cbiAgICAgICAgICAgICAgICBpY29uPXs8QnNHaXRodWIgc2l6ZT1cIjI4cHhcIiAvPn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9Cb3g+ICovfVxuXG4gICAgICAgIDxCb3ggbXQ9XCI1XCI+XG4gICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCIyNHB4XCI+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgPFRleHQgbXQ9XCIyXCIgY29sb3I9XCIjODc4Nzg3XCIgZm9udFNpemU9XCIxOHB4XCI+XG4gICAgICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICAgICAgPC9UZXh0PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICB7LyogPEZsZXggbXQ9XCI0XCIgZmxleFdyYXA9XCJ3cmFwXCIgZ2FwPVwiMlwiPlxuICAgICAgICAgIHt0YWdzLm1hcCgodGFnKSA9PiAoXG4gICAgICAgICAgICA8VGV4dCBrZXk9e2Ake25hbWV9LSR7dGFnLm5hbWV9YH0gZm9udFNpemU9XCIxNHB4XCIgY29sb3I9e3RhZy5jb2xvcn0+XG4gICAgICAgICAgICAgICN7dGFnLm5hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvRmxleD4gKi99XG4gICAgICA8L1RpbHQ+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZFRpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIlRpbHQiLCJCb3giLCJUZXh0IiwiRmxleCIsIkltYWdlIiwiSWNvbkJ1dHRvbiIsIm1vdGlvbiIsIkJzR2l0aHViIiwiQnNEaXNjb3JkIiwiQnNQZXJzb24iLCJDYXJkVGlsIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlX2NvZGVfbGluayIsImluZGV4IiwiZmFkZUluVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJkZWxheSIsImR1cmF0aW9uIiwib3B0aW9ucyIsIm1heCIsInNjYWxlIiwic3BlZWQiLCJjbGFzc05hbWUiLCJib3JkZXJSYWRpdXMiLCJvdmVyZmxvdyIsInRyYW5zZm9ybSIsInNyYyIsImFsdCIsIm9iamVjdEZpdCIsIndpZHRoIiwiX2hvdmVyIiwibXQiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/CardTil.jsx\n");

/***/ })

});