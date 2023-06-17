"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1838);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    titleTemplate: `%s | ${config__WEBPACK_IMPORTED_MODULE_0__/* .seo.title */ .$K.title}`,
    openGraph: {
        type: "website",
        locale: "en_US",
        url: config__WEBPACK_IMPORTED_MODULE_0__/* .seo.canonical */ .$K.canonical,
        site_name: config__WEBPACK_IMPORTED_MODULE_0__/* .seo.title */ .$K.title
    }
});


/***/ }),

/***/ 7097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FlotingBtn)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var _Modal_CustomModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1909);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






const ChakraBox = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
    /**
   * Allow motion props and non-Chakra props to be forwarded.
   */ shouldForwardProp: (prop)=>(0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.isValidMotionProp)(prop) || (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.shouldForwardProp)(prop)
});
function FlotingBtn() {
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        position: "fixed",
        bottom: 0,
        right: 0,
        zIndex: "10",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ChakraBox, {
                    animate: {
                        //scale: [0.3, 0.4, 0.4],
                        //  rotate: [0, 50, 270, 270, 0],
                        y: [
                            "0%",
                            "-10%",
                            "0%"
                        ]
                    },
                    transition: {
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatType: "loop"
                    },
                    padding: "2",
                    //  bgGradient="linear(to-l, #7928CA, #FF0080)"
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100px",
                    height: "100px",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                        as: framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button,
                        bg: "primaryBlueBtn",
                        whileHover: {
                            scale: 1.2
                        },
                        onHoverStart: (e)=>{},
                        onHoverEnd: (e)=>{},
                        onClick: ()=>onOpen()
                        ,
                        //  width={58}
                        // height="58"
                        _hover: {},
                        color: "white",
                        borderRadius: 50,
                        fontSize: "40",
                        initial: {
                            width: "40px",
                            height: "40px",
                            borderRadius: "50%",
                            opacity: 0
                        },
                        animate: {
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            opacity: 1,
                            transition: {
                                type: "spring",
                                duration: "1.5",
                                iterations: Infinity
                            }
                        },
                        variants: {
                            zoomedIn: {
                                scale: 1.2
                            },
                            zoomedOut: {
                                scale: 0.8
                            }
                        },
                        onAnimationEnd: ()=>console.log("Animation ended")
                        ,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__.FaViber, {})
                    })
                })
            }),
            isOpen && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Modal_CustomModal__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                isOpen: isOpen,
                onOpen: ()=>onOpen()
                ,
                onClose: ()=>onClose()
            })
        ]
    }));
};

});

/***/ }),

/***/ 1909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const CustomModal = ({ isOpen , onClose  })=>{
    const { 0: isSuccess , 1: setIsSuccess  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
            onClose: onClose,
            size: "md",
            isOpen: isOpen,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, {
                    isOpen: isOpen
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalCloseButton, {
                            color: "white"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, {
                            bg: "bgPrimary",
                            children: isSuccess ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Success, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                color: "white",
                                spacing: 8,
                                mx: "auto",
                                maxW: "lg",
                                py: 12,
                                px: 6,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                        align: "center",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                            fontSize: "4xl",
                                            children: "Sign in"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        rounded: "lg",
                                        bg: "bgPrimary",
                                        boxShadow: "lg",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                            spacing: 4,
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                                    id: "email",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                            children: "Email address"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                                            type: "email"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormControl, {
                                                    id: "query",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.FormLabel, {
                                                            children: "Write Your Query"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Textarea, {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                                    spacing: 10,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                                        onClick: ()=>setIsSuccess(true)
                                                        ,
                                                        bg: "primaryBlueBtn",
                                                        color: "white",
                                                        _hover: {},
                                                        children: "Send"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomModal);
const Success = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        textAlign: "center",
        py: 10,
        px: 6,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                display: "flex",
                justifyContent: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TikSvg, {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                color: "green.400",
                as: "h2",
                size: "xl",
                mt: 6,
                mb: 2,
                children: "Thank You"
            })
        ]
    }));
};
const TikSvg = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "144px",
        height: "144px",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                id: "I9GV0SozQFknxHSR6DCx5a",
                x1: "9.858",
                x2: "38.142",
                y1: "9.858",
                y2: "38.142",
                gradientUnits: "userSpaceOnUse",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: "0",
                        "stop-color": "#21ad64"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                        offset: "1",
                        "stop-color": "#088242"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "url(#I9GV0SozQFknxHSR6DCx5a)",
                d: "M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414 c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172 C34.219,15.391,32.953,15.391,32.172,16.172z",
                opacity: ".05"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0 L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13 C22.475,33.646,21.525,33.646,20.939,33.061z",
                opacity: ".07"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "#fff",
                d: "M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0 L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13 C22.317,33.098,21.683,33.098,21.293,32.707z"
            })
        ]
    }));
};


/***/ }),

/***/ 3346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1838);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4807);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);







const SocialButton = ({ children , label , href  })=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.button, {
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blackAlpha.100", "whiteAlpha.100"),
        rounded: "full",
        w: 8,
        h: 8,
        cursor: "pointer",
        as: "a",
        href: href,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease",
        _hover: {
            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blackAlpha.200", "whiteAlpha.200")
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
                children: label
            }),
            children
        ]
    }));
};
function Footer() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const currentYear = new Date().getFullYear();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.700"),
        // bg={useColorModeValue("bgPrimary", "gray.900")}
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("bgPrimary", "bgPrimary"),
        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.200"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
                maxW: "6xl",
                p: 8,
                spacing: 4,
                justify: "center",
                align: "center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Wrap, {
                    p: "5",
                    borderRadius: "8",
                    borderWidth: {
                        base: 0,
                        md: 1
                    },
                    w: {
                        base: "100%",
                        md: "60%"
                    },
                    borderStyle: "dashed",
                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("primaryBorder", "primaryBorder"),
                    spacing: "40px",
                    justify: "center",
                    children: src_utils_constant__WEBPACK_IMPORTED_MODULE_4__/* .menu.map */ .G.map((menu1, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                href: menu1.link,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    color: router.pathname === menu1.link ? "secondary" : "white",
                                    cursor: "pointer",
                                    children: menu1.name
                                })
                            })
                        })
                    )
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
                    maxW: "6xl",
                    py: 2,
                    direction: {
                        base: "column",
                        md: "row"
                    },
                    spacing: 4,
                    justify: {
                        base: "center",
                        md: "space-between"
                    },
                    align: {
                        base: "center",
                        md: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            children: `© ${currentYear} All rights reserved`
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            direction: "row",
                            spacing: 6,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialButton, {
                                    label: "Twitter",
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaTwitter, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialButton, {
                                    label: "YouTube",
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaYoutube, {})
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialButton, {
                                    label: "Instagram",
                                    href: "#",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {})
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};


/***/ }),

/***/ 5100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(1838);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/UI/logo.jsx



const Logo = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.a, {
            fontSize: "2rem",
            fontWeight: "700",
            children: "LOGO"
        })
    }));
};
/* harmony default export */ const logo = (Logo);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "hamburger-react"
const external_hamburger_react_namespaceObject = require("hamburger-react");
;// CONCATENATED MODULE: ./src/components/UI/hamburgerMenu.jsx



const HamburgerMenu = ({ toggled , toggle  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        display: {
            lg: "none"
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_hamburger_react_namespaceObject.Turn, {
            hideOutline: false,
            label: "hamburger menu",
            size: 25,
            toggled: toggled,
            toggle: toggle,
            direction: "right"
        })
    }));
};
/* harmony default export */ const hamburgerMenu = (HamburgerMenu);

;// CONCATENATED MODULE: external "@chakra-ui/icons"
const icons_namespaceObject = require("@chakra-ui/icons");
;// CONCATENATED MODULE: ./src/components/UI/colorModeToggle.jsx



const DarkModeToggle = ()=>{
    const { colorMode , toggleColorMode  } = useColorMode();
    return(/*#__PURE__*/ _jsx(Button, {
        "aria-label": colorMode === "light" ? "switch to dark mode" : "switch to light mode",
        ml: {
            lg: "6"
        },
        variant: "ghost",
        _hover: {
            color: "black",
            bgColor: "white"
        },
        onClick: toggleColorMode,
        children: colorMode === "light" ? /*#__PURE__*/ _jsx(MoonIcon, {
            name: "moon-icon"
        }) : /*#__PURE__*/ _jsx(SunIcon, {
            name: "sun-icon"
        })
    }));
};
/* harmony default export */ const colorModeToggle = ((/* unused pure expression or super */ null && (DarkModeToggle)));

// EXTERNAL MODULE: ./src/utils/constant.js
var constant = __webpack_require__(4807);
;// CONCATENATED MODULE: ./src/components/header/navbar.jsx








const Navbar = ()=>{
    const router = (0,router_.useRouter)();
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: activeSec , 1: setActiveSec  } = (0,external_react_.useState)("");
    const bg = (0,react_.useColorModeValue)("gray.200", "gray.300");
    const color = (0,react_.useColorModeValue)("white", "white");
    const closeMenu = ()=>{
        setIsOpen(false);
    };
    console.log("path nane --> ", router.pathname);
    // Navbar menu
    const handleScrollClick = (name)=>{
        setActiveSec(name);
        const section = document.getElementById(name);
        section.scrollIntoView({
            behavior: "smooth"
        });
        closeMenu();
    };
    (0,external_react_.useEffect)(()=>{
        if (router.pathname !== "/") {
            setActiveSec("");
        }
        setActiveSec("");
    }, [
        router.pathname
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                as: "nav",
                display: "flex",
                flexDir: {
                    base: "row-reverse",
                    lg: "row"
                },
                alignItems: "center",
                fontWeight: "400",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(hamburgerMenu, {
                        toggled: isOpen,
                        toggle: setIsOpen
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.chakra.ul, {
                        bg: {
                            base: bg,
                            lg: "transparent"
                        },
                        color: {
                            base: "black",
                            lg: color
                        },
                        display: {
                            base: isOpen ? "block" : "none",
                            lg: "flex"
                        },
                        justifyContent: "space-around",
                        position: {
                            base: "absolute",
                            lg: "static"
                        },
                        top: "5rem",
                        left: "5%",
                        right: "5%",
                        rounded: {
                            base: "lg",
                            lg: "none"
                        },
                        py: {
                            base: "2",
                            lg: "0"
                        },
                        px: {
                            base: "4",
                            lg: "0"
                        },
                        alignItems: {
                            lg: "center"
                        },
                        boxShadow: {
                            base: "xl",
                            lg: "none"
                        },
                        zIndex: "2",
                        children: [
                            constant/* menu.map */.G.map((menu1, i)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.li, {
                                    listStyleType: "none",
                                    px: {
                                        lg: "8"
                                    },
                                    py: {
                                        base: "3",
                                        lg: "0"
                                    },
                                    fontWeight: "700",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                        href: menu1.link,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                            //  onClick={() => handleScrollClick("home-section")}
                                            color: router.pathname === menu1.link ? "secondary" : "white",
                                            cursor: "pointer",
                                            onClick: closeMenu,
                                            children: menu1.name
                                        })
                                    })
                                }, `menu_${i}`)
                            ),
                            router.pathname === "/" && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                fontWeight: "700",
                                color: activeSec === "contact-section" ? "secondary" : "white",
                                cursor: "pointer",
                                onClick: ()=>handleScrollClick("contact-section")
                                ,
                                children: "Contact us"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                display: {
                    base: "none",
                    lg: "block"
                },
                color: "white",
                borderRadius: 50,
                bg: "primaryBlueBtn",
                children: "Get Demo"
            })
        ]
    }));
};
/* harmony default export */ const navbar = (Navbar);

;// CONCATENATED MODULE: ./src/components/header/index.jsx






const Header = ()=>{
    const bg = (0,react_.useColorModeValue)("gray.200", "gray.300");
    const value = (0,react_.useBreakpointValue)({
        base: "~base~",
        sm: "~sm~",
        md: "~md~",
        lg: "~lg",
        xl: "~xl~"
    });
    // console.log("value ==> ", value);
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "header",
        boxShadow: "md",
        //   bg="white"
        bg: {
            base: "bgPrimary"
        },
        zIndex: 5,
        position: "sticky",
        top: 0,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            h: "4rem",
            px: [
                4,
                6,
                10,
                14,
                20
            ],
            maxW: config/* MAX_WIDTH */.d,
            mx: "auto",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(logo, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                    children: value
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(navbar, {})
            ]
        })
    }));
};
/* harmony default export */ const header = (Header);


/***/ }),

/***/ 8980:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1838);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5100);
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3346);
/* harmony import */ var _components_FlotingBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_FlotingBtn__WEBPACK_IMPORTED_MODULE_5__]);
_components_FlotingBtn__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];






// maxW={MAX_WIDTH}
const Layout = ({ children  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        bg: "bgPrimary",
        position: "relative",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_header__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                as: "main",
                mx: "auto",
                children: [
                    children,
                    "\xa0",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FlotingBtn__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_footer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

});

/***/ }),

/***/ 7149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2732);
/* harmony import */ var _layouts_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8980);
/* harmony import */ var next_seo_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5056);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_global__WEBPACK_IMPORTED_MODULE_4__]);
_layouts_global__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];












const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_6__.StrictMode, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_2__.DefaultSeo, {
                    ...next_seo_config__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
                    theme: _theme_index__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layouts_global__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            ]
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

});

/***/ }),

/***/ 2732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);

const styles = {
    global: {
        "html, body": {
            fontSize: "18px"
        }
    }
};
const fonts = {
    heading: "Poppins, -apple-system",
    body: "Poppins, -apple-system"
};
const colors = {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    bgPrimary: "#0E1330",
    secondary: "#7214FF",
    bgGradientPrimary: "linear(to-r, #282D45, #0E1330)",
    primaryBlueBtn: "#7214FF",
    primaryBorder: "#7214FF",
    neutralGray: "#8F9BB7",
    offWhiteText: "#FAFAFC",
    gray: {
        50: "#f7fafc",
        600: "#909090",
        900: "#171923"
    }
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    styles,
    fonts,
    colors
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ }),

/***/ 4807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ menu)
/* harmony export */ });
const menu = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Service",
        link: "/services"
    },
    {
        name: "History",
        link: "/History"
    }, 
];



/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 6641:
/***/ ((module) => {

module.exports = require("next-seo");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,838], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();