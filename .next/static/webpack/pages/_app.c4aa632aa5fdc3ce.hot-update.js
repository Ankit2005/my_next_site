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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FlotingBtn; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction FlotingBtn() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        position: \"fixed\",\n        bottom: 125,\n        right: 5,\n        zIndex: \"10\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n            as: framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button,\n            bg: \"primaryBlueBtn\",\n            //  width={58}\n            // height=\"58\"\n            color: \"white\",\n            borderRadius: 50,\n            fontSize: \"40\",\n            initial: {\n                width: \"40px\",\n                height: \"40px\",\n                borderRadius: \"50%\",\n                opacity: 0\n            },\n            animate: {\n                width: \"60px\",\n                height: \"60px\",\n                borderRadius: \"50%\",\n                opacity: 1,\n                transition: {\n                    type: \"spring\",\n                    duration: \"1.5\",\n                    iterations: Infinity\n                }\n            },\n            variants: {\n                zoomedIn: {\n                    scale: 1.2\n                },\n                zoomedOut: {\n                    scale: 0.8\n                }\n            },\n            onAnimationEnd: function() {\n                return console.log(\"Animation ended\");\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaViber, {}, void 0, false, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/FlotingBtn.jsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/FlotingBtn.jsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/FlotingBtn.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this));\n};\n_c = FlotingBtn;\nvar _c;\n$RefreshReg$(_c, \"FlotingBtn\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9GbG90aW5nQnRuLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzQztBQUNRO0FBQ047QUFFekIsUUFBUSxDQUFDSSxVQUFVLEdBQUcsQ0FBQztJQUNwQyxNQUFNLDZFQUNISCxpREFBRztRQUFDSSxRQUFRLEVBQUMsQ0FBTztRQUFDQyxNQUFNLEVBQUUsR0FBRztRQUFFQyxLQUFLLEVBQUUsQ0FBQztRQUFFQyxNQUFNLEVBQUMsQ0FBSTs4RkFDckROLG9EQUFNO1lBQ0xPLEVBQUUsRUFBRVQsd0RBQWE7WUFDakJXLEVBQUUsRUFBQyxDQUFnQjtZQUNuQixFQUFjO1lBQ2QsRUFBYztZQUNkQyxLQUFLLEVBQUMsQ0FBTztZQUNiQyxZQUFZLEVBQUUsRUFBRTtZQUNoQkMsUUFBUSxFQUFDLENBQUk7WUFDYkMsT0FBTyxFQUFFLENBQUM7Z0JBQ1JDLEtBQUssRUFBRSxDQUFNO2dCQUNiQyxNQUFNLEVBQUUsQ0FBTTtnQkFDZEosWUFBWSxFQUFFLENBQUs7Z0JBQ25CSyxPQUFPLEVBQUUsQ0FBQztZQUNaLENBQUM7WUFDREMsT0FBTyxFQUFFLENBQUM7Z0JBQ1JILEtBQUssRUFBRSxDQUFNO2dCQUNiQyxNQUFNLEVBQUUsQ0FBTTtnQkFDZEosWUFBWSxFQUFFLENBQUs7Z0JBQ25CSyxPQUFPLEVBQUUsQ0FBQztnQkFDVkUsVUFBVSxFQUFFLENBQUM7b0JBQ1hDLElBQUksRUFBRSxDQUFRO29CQUNkQyxRQUFRLEVBQUUsQ0FBSztvQkFDZkMsVUFBVSxFQUFFQyxRQUFRO2dCQUN0QixDQUFDO1lBQ0gsQ0FBQztZQUNEQyxRQUFRLEVBQUUsQ0FBQztnQkFDVEMsUUFBUSxFQUFFLENBQUM7b0JBQ1RDLEtBQUssRUFBRSxHQUFHO2dCQUNaLENBQUM7Z0JBQ0RDLFNBQVMsRUFBRSxDQUFDO29CQUNWRCxLQUFLLEVBQUUsR0FBRztnQkFDWixDQUFDO1lBQ0gsQ0FBQztZQUNERSxjQUFjLEVBQUUsUUFBUTtnQkFBRkMsTUFBTSxDQUFOQSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFpQjs7a0dBRWxENUIsbURBQU87Ozs7Ozs7Ozs7Ozs7OztBQUloQixDQUFDO0tBMUN1QkMsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GbG90aW5nQnRuLmpzeD9kMmYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyBGYVZpYmVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZsb3RpbmdCdG4oKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBwb3NpdGlvbj1cImZpeGVkXCIgYm90dG9tPXsxMjV9IHJpZ2h0PXs1fSB6SW5kZXg9XCIxMFwiPlxuICAgICAgPEJ1dHRvblxuICAgICAgICBhcz17bW90aW9uLmJ1dHRvbn1cbiAgICAgICAgYmc9XCJwcmltYXJ5Qmx1ZUJ0blwiXG4gICAgICAgIC8vICB3aWR0aD17NTh9XG4gICAgICAgIC8vIGhlaWdodD1cIjU4XCJcbiAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXG4gICAgICAgIGJvcmRlclJhZGl1cz17NTB9XG4gICAgICAgIGZvbnRTaXplPVwiNDBcIlxuICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgd2lkdGg6IFwiNDBweFwiLFxuICAgICAgICAgIGhlaWdodDogXCI0MHB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIH19XG4gICAgICAgIGFuaW1hdGU9e3tcbiAgICAgICAgICB3aWR0aDogXCI2MHB4XCIsXG4gICAgICAgICAgaGVpZ2h0OiBcIjYwcHhcIixcbiAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNTAlXCIsXG4gICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgZHVyYXRpb246IFwiMS41XCIsXG4gICAgICAgICAgICBpdGVyYXRpb25zOiBJbmZpbml0eSxcbiAgICAgICAgICB9LFxuICAgICAgICB9fVxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIHpvb21lZEluOiB7XG4gICAgICAgICAgICBzY2FsZTogMS4yLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgem9vbWVkT3V0OiB7XG4gICAgICAgICAgICBzY2FsZTogMC44LFxuICAgICAgICAgIH0sXG4gICAgICAgIH19XG4gICAgICAgIG9uQW5pbWF0aW9uRW5kPXsoKSA9PiBjb25zb2xlLmxvZyhcIkFuaW1hdGlvbiBlbmRlZFwiKX1cbiAgICAgID5cbiAgICAgICAgPEZhVmliZXIgLz5cbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvQm94PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkJveCIsIkJ1dHRvbiIsIkZhVmliZXIiLCJGbG90aW5nQnRuIiwicG9zaXRpb24iLCJib3R0b20iLCJyaWdodCIsInpJbmRleCIsImFzIiwiYnV0dG9uIiwiYmciLCJjb2xvciIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwiaW5pdGlhbCIsIndpZHRoIiwiaGVpZ2h0Iiwib3BhY2l0eSIsImFuaW1hdGUiLCJ0cmFuc2l0aW9uIiwidHlwZSIsImR1cmF0aW9uIiwiaXRlcmF0aW9ucyIsIkluZmluaXR5IiwidmFyaWFudHMiLCJ6b29tZWRJbiIsInNjYWxlIiwiem9vbWVkT3V0Iiwib25BbmltYXRpb25FbmQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/FlotingBtn.jsx\n");

/***/ })

});