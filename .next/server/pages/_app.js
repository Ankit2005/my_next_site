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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




function FlotingBtn() {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        position: "fixed",
        bottom: 25,
        right: 6,
        zIndex: "10",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
            as: framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button,
            bg: "primaryBlueBtn",
            whileHover: {
                scale: 1.2
            },
            onHoverStart: (e)=>{},
            onHoverEnd: (e)=>{},
            //  width={58}
            // height="58"
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
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaViber, {})
        })
    }));
};

});

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
    const currentYear = new Date().getFullYear();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        borderTopWidth: 1,
        borderStyle: "solid",
        borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.700"),
        // bg={useColorModeValue("gray.50", "gray.900")}
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.50", "bgPrimary"),
        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.200"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
                maxW: "6xl",
                p: 8,
                spacing: 4,
                justify: "center",
                align: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Wrap, {
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
                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "primaryBorder"),
                    spacing: "40px",
                    justify: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                w: "60px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    href: "#",
                                    children: "Home"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                w: "60px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    href: "#",
                                    children: "Service"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                w: "60px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    href: "#",
                                    children: "About"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.WrapItem, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Center, {
                                w: "60px",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    href: "#",
                                    children: "Contact"
                                })
                            })
                        })
                    ]
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

;// CONCATENATED MODULE: ./src/components/header/navbar.jsx






const Navbar = ()=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const bg = (0,react_.useColorModeValue)("gray.200", "gray.300");
    const color = (0,react_.useColorModeValue)("red", "white");
    const closeMenu = ()=>{
        setIsOpen(false);
    };
    // Navbar menu
    const menu1 = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Service",
            link: "/service"
        },
        {
            name: "History",
            link: "/history"
        },
        {
            name: "About us",
            link: "/about"
        }, 
    ];
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
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.ul, {
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
                        children: menu1.map((menu, i)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.li, {
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
                                    href: menu.link,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        onClick: closeMenu,
                                        children: menu.name
                                    })
                                })
                            }, `menu_${i}`)
                        )
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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_layouts_global__WEBPACK_IMPORTED_MODULE_4__]);
_layouts_global__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
    bgGradientPrimary: "linear(to-r, #282D45, #0E1330)",
    primaryBlueBtn: "#7214FF",
    primaryBorder: "#7214FF",
    neutralGray: "#8F9BB7",
    offWhiteText: "#FAFAFC",
    gray: {
        50: "#f7fafc",
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
var __webpack_exports__ = __webpack_require__.X(0, [190,676,664,838], () => (__webpack_exec__(7149)));
module.exports = __webpack_exports__;

})();