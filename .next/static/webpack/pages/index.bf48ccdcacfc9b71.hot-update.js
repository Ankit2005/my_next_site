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

/***/ "./src/components/SimpleCard.jsx":
/*!***************************************!*\
  !*** ./src/components/SimpleCard.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_tilt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-tilt */ \"./node_modules/react-tilt/dist/tilt.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aos */ \"./node_modules/aos/dist/aos.js\");\n/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! aos/dist/aos.css */ \"./node_modules/aos/dist/aos.css\");\n/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SimpleCardTil = function(param) {\n    var name = param.name, description = param.description, btnText = param.btnText, tags = param.tags, source_code_link = param.source_code_link, index = param.index;\n    _s();\n    var fadeInVariants = {\n        hidden: {\n            opacity: 0,\n            y: 35\n        },\n        visible: {\n            opacity: 1,\n            y: 0\n        }\n    };\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), isHovered = ref[0], setIsHovered = ref[1];\n    var handleMouseEnter = function() {\n        setIsHovered(true);\n    };\n    var handleMouseLeave = function() {\n        setIsHovered(false);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        aos__WEBPACK_IMPORTED_MODULE_3___default().init({\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n        variants: fadeInVariants,\n        initial: \"hidden\",\n        animate: \"visible\",\n        transition: {\n            type: \"spring\",\n            delay: index * 0.5,\n            duration: 0.5\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_tilt__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            options: {\n                max: 15,\n                scale: 1,\n                speed: 15\n            },\n            \"data-aos\": \"fade-up\",\n            className: \"bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                _hover: {\n                    bg: \"#5956E9\",\n                    color: \"white !important\"\n                },\n                onMouseEnter: handleMouseEnter,\n                onMouseLeave: handleMouseLeave,\n                borderRadius: 16,\n                p: \"8\",\n                variants: \"outline\",\n                bg: \"bgLightPrimary\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        fontWeight: \"bold\",\n                        borderRadius: 26,\n                        textColor: \"white\",\n                        padding: 6,\n                        bg: \"#060B27\",\n                        _hover: {},\n                        children: btnText\n                    }, void 0, false, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        mt: \"4\",\n                        px: \"2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                color: \"white\",\n                                fontWeight: \"bold\",\n                                fontSize: \"20px\",\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                                lineNumber: 86,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                mt: \"2\",\n                                color: isHovered ? \"white\" : \"#878787\",\n                                fontSize: \"18px\",\n                                children: description\n                            }, void 0, false, {\n                                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                                lineNumber: 89,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                        lineNumber: 85,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/apple/Documents/My projects/NextJs_projects/my_next_site/src/components/SimpleCard.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, _this));\n};\n_s(SimpleCardTil, \"kc8+hhKG3+iGUxqsVUryptgPYnY=\");\n_c = SimpleCardTil;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleCardTil);\nvar _c;\n$RefreshReg$(_c, \"SimpleCardTil\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFNOzBDQUNsRDNDLElBQUk7Ozs7Ozt3R0FFTlosa0RBQUk7Z0NBQ0hxRCxFQUFFLEVBQUMsQ0FBRztnQ0FDTlIsS0FBSyxFQUFFckIsU0FBUyxHQUFHLENBQU8sU0FBRyxDQUFTO2dDQUN0QytCLFFBQVEsRUFBQyxDQUFNOzBDQUVkMUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8xQixDQUFDO0dBcEZLRixhQUFhO0tBQWJBLGFBQWE7QUFzRm5CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2ltcGxlQ2FyZC5qc3g/ZDJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGlsdCBmcm9tIFwicmVhY3QtdGlsdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBUZXh0LFxuICBGbGV4LFxuICBJbWFnZSxcbiAgSWNvbkJ1dHRvbixcbiAgQnV0dG9uR3JvdXAsXG4gIEJ1dHRvbixcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBCc0dpdGh1YiwgQnNEaXNjb3JkLCBCc1BlcnNvbiB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IEFPUyBmcm9tIFwiYW9zXCI7XG5pbXBvcnQgXCJhb3MvZGlzdC9hb3MuY3NzXCI7XG5cbmNvbnN0IFNpbXBsZUNhcmRUaWwgPSAoe1xuICBuYW1lLFxuICBkZXNjcmlwdGlvbixcbiAgYnRuVGV4dCxcbiAgdGFncyxcbiAgc291cmNlX2NvZGVfbGluayxcbiAgaW5kZXgsXG59KSA9PiB7XG4gIGNvbnN0IGZhZGVJblZhcmlhbnRzID0ge1xuICAgIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiAzNSB9LFxuICAgIHZpc2libGU6IHsgb3BhY2l0eTogMSwgeTogMCB9LFxuICB9O1xuXG4gIGNvbnN0IFtpc0hvdmVyZWQsIHNldElzSG92ZXJlZF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VFbnRlciA9ICgpID0+IHtcbiAgICBzZXRJc0hvdmVyZWQodHJ1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VMZWF2ZSA9ICgpID0+IHtcbiAgICBzZXRJc0hvdmVyZWQoZmFsc2UpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgQU9TLmluaXQoe1xuICAgICAgLy8gQ3VzdG9taXplIEFPUyBvcHRpb25zIGhlcmVcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIHZhcmlhbnRzPXtmYWRlSW5WYXJpYW50c31cbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgYW5pbWF0ZT1cInZpc2libGVcIlxuICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiBcInNwcmluZ1wiLCBkZWxheTogaW5kZXggKiAwLjUsIGR1cmF0aW9uOiAwLjUgfX1cbiAgICA+XG4gICAgICA8VGlsdFxuICAgICAgICBvcHRpb25zPXt7XG4gICAgICAgICAgbWF4OiAxNSxcbiAgICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgICBzcGVlZDogMTUsXG4gICAgICAgIH19XG4gICAgICAgIGRhdGEtYW9zPVwiZmFkZS11cFwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJnLXRlcnRpYXJ5IHAtNSByb3VuZGVkLTJ4bCBzbTp3LVszNjBweF0gdy1mdWxsXCJcbiAgICAgID5cbiAgICAgICAgPEJveFxuICAgICAgICAgIF9ob3Zlcj17e1xuICAgICAgICAgICAgYmc6IFwiIzU5NTZFOVwiLFxuICAgICAgICAgICAgY29sb3I6IFwid2hpdGUgIWltcG9ydGFudFwiLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25Nb3VzZUVudGVyPXtoYW5kbGVNb3VzZUVudGVyfVxuICAgICAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VMZWF2ZX1cbiAgICAgICAgICBib3JkZXJSYWRpdXM9ezE2fVxuICAgICAgICAgIHA9XCI4XCJcbiAgICAgICAgICB2YXJpYW50cz1cIm91dGxpbmVcIlxuICAgICAgICAgIGJnPVwiYmdMaWdodFByaW1hcnlcIlxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgZm9udFdlaWdodD1cImJvbGRcIlxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPXsyNn1cbiAgICAgICAgICAgIHRleHRDb2xvcj1cIndoaXRlXCJcbiAgICAgICAgICAgIHBhZGRpbmc9ezZ9XG4gICAgICAgICAgICBiZz1cIiMwNjBCMjdcIlxuICAgICAgICAgICAgX2hvdmVyPXt7fX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7YnRuVGV4dH1cbiAgICAgICAgICA8L0J1dHRvbj5cblxuICAgICAgICAgIDxCb3ggbXQ9XCI0XCIgcHg9XCIyXCI+XG4gICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCIgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT1cIjIwcHhcIj5cbiAgICAgICAgICAgICAge25hbWV9XG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dFxuICAgICAgICAgICAgICBtdD1cIjJcIlxuICAgICAgICAgICAgICBjb2xvcj17aXNIb3ZlcmVkID8gXCJ3aGl0ZVwiIDogXCIjODc4Nzg3XCJ9XG4gICAgICAgICAgICAgIGZvbnRTaXplPVwiMThweFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L1RpbHQ+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2ltcGxlQ2FyZFRpbDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsIlRpbHQiLCJCb3giLCJUZXh0IiwiRmxleCIsIkltYWdlIiwiSWNvbkJ1dHRvbiIsIkJ1dHRvbkdyb3VwIiwiQnV0dG9uIiwibW90aW9uIiwiQnNHaXRodWIiLCJCc0Rpc2NvcmQiLCJCc1BlcnNvbiIsIkFPUyIsIlNpbXBsZUNhcmRUaWwiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJidG5UZXh0IiwidGFncyIsInNvdXJjZV9jb2RlX2xpbmsiLCJpbmRleCIsImZhZGVJblZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidXNlU3RhdGUiLCJpc0hvdmVyZWQiLCJzZXRJc0hvdmVyZWQiLCJoYW5kbGVNb3VzZUVudGVyIiwiaGFuZGxlTW91c2VMZWF2ZSIsImluaXQiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsInR5cGUiLCJkZWxheSIsImR1cmF0aW9uIiwib3B0aW9ucyIsIm1heCIsInNjYWxlIiwic3BlZWQiLCJkYXRhLWFvcyIsImNsYXNzTmFtZSIsIl9ob3ZlciIsImJnIiwiY29sb3IiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJib3JkZXJSYWRpdXMiLCJwIiwiZm9udFdlaWdodCIsInRleHRDb2xvciIsInBhZGRpbmciLCJtdCIsInB4IiwiZm9udFNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SimpleCard.jsx\n");

/***/ })

});