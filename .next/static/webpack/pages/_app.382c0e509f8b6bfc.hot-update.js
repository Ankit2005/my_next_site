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

/***/ "./src/components/header/index.jsx":
/*!*****************************************!*\
  !*** ./src/components/header/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! config */ \"./config.js\");\n/* harmony import */ var _UI_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/logo */ \"./src/components/UI/logo.jsx\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar */ \"./src/components/header/navbar.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Header = function() {\n    _s();\n    var bg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)(\"gray.200\", \"gray.300\");\n    var width = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useScreenSize)().width;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n        as: \"header\",\n        boxShadow: \"md\",\n        //   bg=\"white\"\n        bg: {\n            base: \"bgPrimary\"\n        },\n        zIndex: 5,\n        position: \"sticky\",\n        top: 0,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {\n            display: \"flex\",\n            justifyContent: \"space-between\",\n            alignItems: \"center\",\n            h: \"4rem\",\n            px: [\n                4,\n                6,\n                10,\n                14,\n                20\n            ],\n            maxW: config__WEBPACK_IMPORTED_MODULE_1__.MAX_WIDTH,\n            mx: \"auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UI_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/header/index.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: [\n                        \"Screen size:\",\n                        width < 768 ? \"Small\" : width < 992 ? \"Medium\" : width < 1200 ? \"Large\" : \"Extra Large\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/header/index.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/header/index.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/header/index.jsx\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/header/index.jsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this));\n};\n_s(Header, \"83mGBmy+2yb0HBuHhIQyYbybwQs=\", false, function() {\n    return [\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue,\n        _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useScreenSize\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFxRDtBQUVuQjtBQUNMO0FBQ0E7QUFDdUI7OztBQUVwRCxHQUFLLENBQUNNLE1BQU0sR0FBRyxRQUNmLEdBRHFCLENBQUM7O0lBQ3BCLEdBQUssQ0FBQ0MsRUFBRSxHQUFHRixtRUFBaUIsQ0FBQyxDQUFVLFdBQUUsQ0FBVTtJQUNuRCxHQUFLLENBQUdHLEtBQUssR0FBS1AsK0RBQWEsR0FBdkJPLEtBQUs7SUFDYixNQUFNLDZFQUNIUixpREFBRztRQUNGUyxFQUFFLEVBQUMsQ0FBUTtRQUNYQyxTQUFTLEVBQUMsQ0FBSTtRQUNkLEVBQWU7UUFDZkgsRUFBRSxFQUFFLENBQUM7WUFBQ0ksSUFBSSxFQUFFLENBQVc7UUFBQyxDQUFDO1FBQ3pCQyxNQUFNLEVBQUUsQ0FBQztRQUNUQyxRQUFRLEVBQUMsQ0FBUTtRQUNqQkMsR0FBRyxFQUFFLENBQUM7OEZBRUxkLGlEQUFHO1lBQ0ZlLE9BQU8sRUFBQyxDQUFNO1lBQ2RDLGNBQWMsRUFBQyxDQUFlO1lBQzlCQyxVQUFVLEVBQUMsQ0FBUTtZQUNuQkMsQ0FBQyxFQUFDLENBQU07WUFDUkMsRUFBRSxFQUFFLENBQUM7QUFBQSxpQkFBQztBQUFFLGlCQUFDO0FBQUUsa0JBQUU7QUFBRSxrQkFBRTtBQUFFLGtCQUFFO1lBQUEsQ0FBQztZQUN0QkMsSUFBSSxFQUFFbEIsNkNBQVM7WUFDZm1CLEVBQUUsRUFBQyxDQUFNOzs0RkFFUmxCLGdEQUFJOzs7Ozs0RkFDSm1CLENBQUM7O3dCQUFDLENBRUQ7d0JBQUNkLEtBQUssR0FBRyxHQUFHLEdBQ1IsQ0FBTyxTQUNQQSxLQUFLLEdBQUcsR0FBRyxHQUNYLENBQVEsVUFDUkEsS0FBSyxHQUFHLElBQUksR0FDWixDQUFPLFNBQ1AsQ0FBYTs7Ozs7Ozs0RkFFbEJKLCtDQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztHQXJDS0UsTUFBTTs7UUFDQ0QsK0RBQWlCO1FBQ1ZKLDJEQUFhOzs7S0FGM0JLLE1BQU07QUF1Q1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanN4PzYzOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCB1c2VTY3JlZW5TaXplIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuaW1wb3J0IHsgTUFYX1dJRFRIIH0gZnJvbSBcImNvbmZpZ1wiO1xuaW1wb3J0IExvZ28gZnJvbSBcIi4uL1VJL2xvZ29cIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vbmF2YmFyXCI7XG5pbXBvcnQgeyB1c2VDb2xvck1vZGVWYWx1ZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgYmcgPSB1c2VDb2xvck1vZGVWYWx1ZShcImdyYXkuMjAwXCIsIFwiZ3JheS4zMDBcIik7XG4gIGNvbnN0IHsgd2lkdGggfSA9IHVzZVNjcmVlblNpemUoKTtcbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBhcz1cImhlYWRlclwiXG4gICAgICBib3hTaGFkb3c9XCJtZFwiXG4gICAgICAvLyAgIGJnPVwid2hpdGVcIlxuICAgICAgYmc9e3sgYmFzZTogXCJiZ1ByaW1hcnlcIiB9fVxuICAgICAgekluZGV4PXs1fVxuICAgICAgcG9zaXRpb249XCJzdGlja3lcIlxuICAgICAgdG9wPXswfVxuICAgID5cbiAgICAgIDxCb3hcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxuICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxuICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgICAgaD1cIjRyZW1cIlxuICAgICAgICBweD17WzQsIDYsIDEwLCAxNCwgMjBdfVxuICAgICAgICBtYXhXPXtNQVhfV0lEVEh9XG4gICAgICAgIG14PVwiYXV0b1wiXG4gICAgICA+XG4gICAgICAgIDxMb2dvIC8+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFNjcmVlbiBzaXplOlxuICAgICAgICAgIHt3aWR0aCA8IDc2OFxuICAgICAgICAgICAgPyBcIlNtYWxsXCJcbiAgICAgICAgICAgIDogd2lkdGggPCA5OTJcbiAgICAgICAgICAgID8gXCJNZWRpdW1cIlxuICAgICAgICAgICAgOiB3aWR0aCA8IDEyMDBcbiAgICAgICAgICAgID8gXCJMYXJnZVwiXG4gICAgICAgICAgICA6IFwiRXh0cmEgTGFyZ2VcIn1cbiAgICAgICAgPC9wPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJuYW1lcyI6WyJCb3giLCJ1c2VTY3JlZW5TaXplIiwiTUFYX1dJRFRIIiwiTG9nbyIsIk5hdmJhciIsInVzZUNvbG9yTW9kZVZhbHVlIiwiSGVhZGVyIiwiYmciLCJ3aWR0aCIsImFzIiwiYm94U2hhZG93IiwiYmFzZSIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImgiLCJweCIsIm1heFciLCJteCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/header/index.jsx\n");

/***/ })

});