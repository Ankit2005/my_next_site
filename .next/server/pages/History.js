/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/History";
exports.ids = ["pages/History"];
exports.modules = {

/***/ "./src/pages/History/index.jsx":
/*!*************************************!*\
  !*** ./src/pages/History/index.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-vertical-timeline-component */ \"react-vertical-timeline-component\");\n/* harmony import */ var react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-vertical-timeline-component/style.min.css */ \"./node_modules/react-vertical-timeline-component/style.min.css\");\n/* harmony import */ var react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_vertical_timeline_component_style_min_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst companyHistory = [\n    {\n        date: \"2001\",\n        title: \"Company Founded\",\n        description: \"The company was founded by John Doe and Jane Smith.\",\n        image: \"https://source.unsplash.com/random/?Cryptocurrency&\"\n    },\n    {\n        date: \"2005\",\n        title: \"Expansion to New Markets\",\n        description: \"The company expanded its operations to new markets and achieved significant growth.\",\n        image: \"https://source.unsplash.com/random/?Cryptocurrency&\"\n    },\n    {\n        date: \"2010\",\n        title: \"Acquisition of Competitor\",\n        description: \"The company acquired one of its major competitors, strengthening its market position.\",\n        image: \"https://source.unsplash.com/random/?Cryptocurrency&\"\n    },\n    {\n        date: \"2015\",\n        title: \"Product Innovation\",\n        description: \"The company introduced a groundbreaking product that revolutionized the industry.\",\n        image: \"https://source.unsplash.com/random/?Cryptocurrency&\"\n    },\n    {\n        date: \"2020\",\n        title: \"Global Recognition\",\n        description: \"The company received prestigious awards and recognition for its outstanding achievements.\",\n        image: \"https://source.unsplash.com/random/?Cryptocurrency&\"\n    }, \n];\nconst HistoryPage = ()=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        p: 4,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__.VerticalTimeline, {\n            contentStyle: {\n                overflow: \"hidden\"\n            },\n            children: companyHistory.map((event, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_vertical_timeline_component__WEBPACK_IMPORTED_MODULE_3__.VerticalTimelineElement, {\n                    className: \"vertical-timeline-element\",\n                    contentStyle: {\n                        background: \"#171c35\",\n                        color: \"white\",\n                        fontWeight: \"bold\",\n                        boxShadow: \"none\"\n                    },\n                    contentArrowStyle: {\n                        borderRight: \"7px solid transparent\"\n                    },\n                    date: event.date,\n                    iconStyle: {\n                        background: \"#7214FF\",\n                        color: \"white\"\n                    },\n                    icon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        borderRadius: \"full\",\n                        overflow: \"hidden\",\n                        boxShadow: \"md\",\n                        w: \"full\",\n                        h: \"full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            src: `${event.image}${index}`,\n                            alt: \"Profile Image\",\n                            objectFit: \"fit\",\n                            boxSize: \"100%\" // Make the image fill the box\n                        }, void 0, false, void 0, void 0)\n                    }, void 0, false, void 0, void 0),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            fontSize: 120,\n                            fon: true,\n                            color: \"white\",\n                            fontWeight: \"bold\",\n                            children: event.title\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/History/index.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                            color: \"gray.500\",\n                            children: event.description\n                        }, void 0, false, {\n                            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/History/index.jsx\",\n                            lineNumber: 88,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/History/index.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 11\n                }, undefined)\n            )\n        }, void 0, false, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/History/index.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/pages/History/index.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HistoryPage);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cmMvcGFnZXMvSGlzdG9yeS9pbmRleC5qc3g/MGFlOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCb3gsIEltYWdlLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7XG4gIFZlcnRpY2FsVGltZWxpbmUsXG4gIFZlcnRpY2FsVGltZWxpbmVFbGVtZW50LFxufSBmcm9tIFwicmVhY3QtdmVydGljYWwtdGltZWxpbmUtY29tcG9uZW50XCI7XG5pbXBvcnQgXCJyZWFjdC12ZXJ0aWNhbC10aW1lbGluZS1jb21wb25lbnQvc3R5bGUubWluLmNzc1wiO1xuaW1wb3J0IHsgQnNHaXRodWIsIEJzRGlzY29yZCwgQnNQZXJzb24gfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcblxuY29uc3QgY29tcGFueUhpc3RvcnkgPSBbXG4gIHtcbiAgICBkYXRlOiBcIjIwMDFcIixcbiAgICB0aXRsZTogXCJDb21wYW55IEZvdW5kZWRcIixcbiAgICBkZXNjcmlwdGlvbjogXCJUaGUgY29tcGFueSB3YXMgZm91bmRlZCBieSBKb2huIERvZSBhbmQgSmFuZSBTbWl0aC5cIixcbiAgICBpbWFnZTogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tLz9DcnlwdG9jdXJyZW5jeSZcIixcbiAgfSxcbiAge1xuICAgIGRhdGU6IFwiMjAwNVwiLFxuICAgIHRpdGxlOiBcIkV4cGFuc2lvbiB0byBOZXcgTWFya2V0c1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgY29tcGFueSBleHBhbmRlZCBpdHMgb3BlcmF0aW9ucyB0byBuZXcgbWFya2V0cyBhbmQgYWNoaWV2ZWQgc2lnbmlmaWNhbnQgZ3Jvd3RoLlwiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb20vP0NyeXB0b2N1cnJlbmN5JlwiLFxuICB9LFxuICB7XG4gICAgZGF0ZTogXCIyMDEwXCIsXG4gICAgdGl0bGU6IFwiQWNxdWlzaXRpb24gb2YgQ29tcGV0aXRvclwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJUaGUgY29tcGFueSBhY3F1aXJlZCBvbmUgb2YgaXRzIG1ham9yIGNvbXBldGl0b3JzLCBzdHJlbmd0aGVuaW5nIGl0cyBtYXJrZXQgcG9zaXRpb24uXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS8/Q3J5cHRvY3VycmVuY3kmXCIsXG4gIH0sXG4gIHtcbiAgICBkYXRlOiBcIjIwMTVcIixcbiAgICB0aXRsZTogXCJQcm9kdWN0IElubm92YXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIGNvbXBhbnkgaW50cm9kdWNlZCBhIGdyb3VuZGJyZWFraW5nIHByb2R1Y3QgdGhhdCByZXZvbHV0aW9uaXplZCB0aGUgaW5kdXN0cnkuXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbS8/Q3J5cHRvY3VycmVuY3kmXCIsXG4gIH0sXG4gIHtcbiAgICBkYXRlOiBcIjIwMjBcIixcbiAgICB0aXRsZTogXCJHbG9iYWwgUmVjb2duaXRpb25cIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiVGhlIGNvbXBhbnkgcmVjZWl2ZWQgcHJlc3RpZ2lvdXMgYXdhcmRzIGFuZCByZWNvZ25pdGlvbiBmb3IgaXRzIG91dHN0YW5kaW5nIGFjaGlldmVtZW50cy5cIixcbiAgICBpbWFnZTogXCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vcmFuZG9tLz9DcnlwdG9jdXJyZW5jeSZcIixcbiAgfSxcbl07XG5cbmNvbnN0IEhpc3RvcnlQYWdlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxCb3ggcD17NH0+XG4gICAgICA8VmVydGljYWxUaW1lbGluZVxuICAgICAgICBjb250ZW50U3R5bGU9e3tcbiAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAge2NvbXBhbnlIaXN0b3J5Lm1hcCgoZXZlbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPFZlcnRpY2FsVGltZWxpbmVFbGVtZW50XG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidmVydGljYWwtdGltZWxpbmUtZWxlbWVudFwiXG4gICAgICAgICAgICBjb250ZW50U3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMTcxYzM1XCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICBib3hTaGFkb3c6IFwibm9uZVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNvbnRlbnRBcnJvd1N0eWxlPXt7IGJvcmRlclJpZ2h0OiBcIjdweCBzb2xpZCB0cmFuc3BhcmVudFwiIH19XG4gICAgICAgICAgICBkYXRlPXtldmVudC5kYXRlfVxuICAgICAgICAgICAgaWNvblN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzcyMTRGRlwiLCBjb2xvcjogXCJ3aGl0ZVwiIH19XG4gICAgICAgICAgICBpY29uPXtcbiAgICAgICAgICAgICAgPEJveFxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICBib3hTaGFkb3c9XCJtZFwiXG4gICAgICAgICAgICAgICAgdz1cImZ1bGxcIlxuICAgICAgICAgICAgICAgIGg9XCJmdWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtldmVudC5pbWFnZX0ke2luZGV4fWB9IC8vIFJlcGxhY2Ugd2l0aCB0aGUgVVJMIG9mIHRoZSBwcm9maWxlIGltYWdlXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlIEltYWdlXCJcbiAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImZpdFwiXG4gICAgICAgICAgICAgICAgICBib3hTaXplPVwiMTAwJVwiIC8vIE1ha2UgdGhlIGltYWdlIGZpbGwgdGhlIGJveFxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPXsxMjB9IGZvbiBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIj5cbiAgICAgICAgICAgICAge2V2ZW50LnRpdGxlfVxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmF5LjUwMFwiPntldmVudC5kZXNjcmlwdGlvbn08L1RleHQ+XG4gICAgICAgICAgPC9WZXJ0aWNhbFRpbWVsaW5lRWxlbWVudD5cbiAgICAgICAgKSl9XG4gICAgICA8L1ZlcnRpY2FsVGltZWxpbmU+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIaXN0b3J5UGFnZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkltYWdlIiwiVGV4dCIsIlZlcnRpY2FsVGltZWxpbmUiLCJWZXJ0aWNhbFRpbWVsaW5lRWxlbWVudCIsIkJzR2l0aHViIiwiQnNEaXNjb3JkIiwiQnNQZXJzb24iLCJjb21wYW55SGlzdG9yeSIsImRhdGUiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJIaXN0b3J5UGFnZSIsInAiLCJjb250ZW50U3R5bGUiLCJvdmVyZmxvdyIsIm1hcCIsImV2ZW50IiwiaW5kZXgiLCJjbGFzc05hbWUiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiYm94U2hhZG93IiwiY29udGVudEFycm93U3R5bGUiLCJib3JkZXJSaWdodCIsImljb25TdHlsZSIsImljb24iLCJib3JkZXJSYWRpdXMiLCJ3IiwiaCIsInNyYyIsImFsdCIsIm9iamVjdEZpdCIsImJveFNpemUiLCJmb250U2l6ZSIsImZvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/History/index.jsx\n");

/***/ }),

/***/ "./node_modules/react-vertical-timeline-component/style.min.css":
/*!**********************************************************************!*\
  !*** ./node_modules/react-vertical-timeline-component/style.min.css ***!
  \**********************************************************************/
/***/ (() => {



/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-vertical-timeline-component":
/*!****************************************************!*\
  !*** external "react-vertical-timeline-component" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-vertical-timeline-component");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/History/index.jsx"));
module.exports = __webpack_exports__;

})();