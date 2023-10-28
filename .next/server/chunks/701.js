exports.id = 701;
exports.ids = [701];
exports.modules = {

/***/ 929:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "codeBlock_wrapper__TavKP",
	"lineNo": "codeBlock_lineNo__CHb7n",
	"lineContent": "codeBlock_lineContent__QEcgI"
};


/***/ }),

/***/ 7790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_MDXComponents)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/MDXComponents/common.jsx



const CustomLink = (props)=>{
    const href = props.href;
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
    if (isInternalLink) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: href,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
                ...props
            })
        }));
    }
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
        isExternal: true,
        ...props
    }));
};
const UnorderedList = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.ul, {
        style: {
            paddingLeft: "1rem",
            paddingTop: "0.5rem"
        },
        ...props
    })
;
const OrderedList = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.ol, {
        style: {
            paddingLeft: "1rem",
            paddingTop: "0.5rem"
        },
        ...props
    })
;
const ListItem = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.li, {
        style: {
            paddingBottom: "0.25rem"
        },
        ...props
    })
;
const InlineCode = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Code, {
        ...props
    })
;

;// CONCATENATED MODULE: ./src/components/MDXComponents/headings.jsx


const Headings = (props)=>{
    const { children , id  } = props;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
        my: "0.75em",
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            pointerEvents: "auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.VisuallyHidden, {
                    children: [
                        "Read the ",
                        children,
                        " section."
                    ]
                }),
                children,
                id && /*#__PURE__*/ jsx_runtime_.jsx(react_.chakra.a, {
                    href: `#${id}`,
                    pl: "2px",
                    color: "#3182ce",
                    fontWeight: "500",
                    outline: "none",
                    opacity: "0",
                    _hover: {
                        opacity: 0.75
                    },
                    "aria-label": "anchor",
                    children: "#"
                })
            ]
        })
    }));
};
/* harmony default export */ const headings = (Headings);

// EXTERNAL MODULE: external "prism-react-renderer"
var external_prism_react_renderer_ = __webpack_require__(7096);
var external_prism_react_renderer_default = /*#__PURE__*/__webpack_require__.n(external_prism_react_renderer_);
// EXTERNAL MODULE: external "prism-react-renderer/themes/nightOwlLight"
var nightOwlLight_ = __webpack_require__(8671);
var nightOwlLight_default = /*#__PURE__*/__webpack_require__.n(nightOwlLight_);
// EXTERNAL MODULE: external "prism-react-renderer/themes/nightOwl"
var nightOwl_ = __webpack_require__(9123);
var nightOwl_default = /*#__PURE__*/__webpack_require__.n(nightOwl_);
// EXTERNAL MODULE: ./src/components/MDXComponents/styles/codeBlock.module.css
var codeBlock_module = __webpack_require__(929);
var codeBlock_module_default = /*#__PURE__*/__webpack_require__.n(codeBlock_module);
;// CONCATENATED MODULE: ./src/components/MDXComponents/codeBlock.jsx






const CodeBlock = ({ children , className: className1  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const { hasCopied , onCopy  } = (0,react_.useClipboard)(children);
    const language = className1.replace(/language-/, "");
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        pos: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                fontFamily: "Poppins",
                colorScheme: "twitter",
                pos: "absolute",
                right: "2",
                top: "2",
                size: "sm",
                onClick: onCopy,
                children: hasCopied ? "Copied" : "Copy"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_prism_react_renderer_default()), {
                ...external_prism_react_renderer_.defaultProps,
                theme: colorMode === "dark" ? (nightOwl_default()) : (nightOwlLight_default()),
                code: children,
                language: language,
                children: ({ className , style , tokens , getLineProps , getTokenProps  })=>/*#__PURE__*/ jsx_runtime_.jsx("pre", {
                        className: `${className} ${(codeBlock_module_default()).wrapper}`,
                        style: {
                            ...style
                        },
                        children: tokens.map((line, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                ...getLineProps({
                                    line,
                                    key: i
                                }),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (codeBlock_module_default()).lineNo,
                                        children: i + 1
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: (codeBlock_module_default()).lineContent,
                                        children: line.map((token, key)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                ...getTokenProps({
                                                    token,
                                                    key
                                                })
                                            }, key)
                                        )
                                    })
                                ]
                            }, i)
                        )
                    })
            })
        ]
    }));
};
/* harmony default export */ const codeBlock = (CodeBlock);

;// CONCATENATED MODULE: ./src/components/MDXComponents/index.jsx





const MDXComponents = {
    h1: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(headings, {
            as: "h1",
            fontSize: "36px",
            ...props
        })
    ,
    h2: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(headings, {
            as: "h2",
            fontSize: "28px",
            ...props
        })
    ,
    h3: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(headings, {
            as: "h3",
            fontSize: "24px",
            ...props
        })
    ,
    h4: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(headings, {
            as: "h4",
            fontSize: "18px",
            ...props
        })
    ,
    h5: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(headings, {
            as: "h5",
            fontSize: "16px",
            ...props
        })
    ,
    h6: (props)=>/*#__PURE__*/ jsx_runtime_.jsx(headings, {
            as: "h6",
            fontSize: "14px",
            ...props
        })
    ,
    code: codeBlock,
    a: CustomLink,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
    inlineCode: InlineCode,
    Image: next_image["default"]
};
/* harmony default export */ const components_MDXComponents = (MDXComponents);


/***/ }),

/***/ 3671:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const TagComponent = ({ children , color , ...props })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
        fontSize: ".9rem",
        fontWeight: "600",
        color: "white",
        backgroundColor: color.bgColor,
        minHeight: "2rem",
        m: "0 .5rem 7px 0",
        p: ".3rem .75rem",
        cursor: "pointer",
        transitionDuration: "250ms",
        userSelect: "none",
        _hover: {
            backgroundColor: color.hover
        },
        ...props,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TagComponent);


/***/ }),

/***/ 4276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ tagColor)
/* harmony export */ });
const tagColor = {
    nextjs: {
        bgColor: "#0A7B83E2",
        hover: "#09686dE2"
    },
    javascript: {
        bgColor: "#ffba08",
        hover: "#faa307"
    },
    typescript: {
        bgColor: "#3178C6E2",
        hover: "#265d99E2"
    },
    api: {
        bgColor: "#E8265EE2",
        hover: "#ce0840E2"
    },
    asynchronous: {
        bgColor: "#1A91DAE2",
        hover: "#0b7bbcE2"
    },
    react: {
        bgColor: "#b2475dE2",
        hover: "#933346E2"
    },
    tutorial: {
        bgColor: "#865DCAE2",
        hover: "#784cc4E2"
    },
    design: {
        bgColor: "#f11df1E2",
        hover: "#d313d3E2"
    },
    html: {
        bgColor: "#f06529",
        hover: "#e34c26"
    },
    nodejs: {
        bgColor: "#ff7bacE2",
        hover: "#f7659aE2"
    },
    ssr: {
        bgColor: "#77aa7bE2",
        hover: "#609363E2"
    },
    css: {
        bgColor: "#FE4A49E2",
        hover: "#ed3434E2"
    },
    testing: {
        bgColor: "#05afa0E2",
        hover: "#0ce5d2E2"
    },
    webpack: {
        bgColor: "#a02438",
        hover: "#a02438E2"
    },
    optimization: {
        bgColor: "#8f4dbf",
        hover: "#8f4dbfE2"
    },
    markdown: {
        bgColor: "#168aad",
        hover: "#1a759f"
    }
};


/***/ }),

/***/ 381:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bE": () => (/* binding */ getFiles),
/* harmony export */   "x7": () => (/* binding */ getFileBySlug),
/* harmony export */   "sj": () => (/* binding */ getAllFilesFrontMatter)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8076);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_slug__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9071);
/* harmony import */ var next_mdx_remote_render_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3354);
/* harmony import */ var next_mdx_remote_render_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_render_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark_slug__WEBPACK_IMPORTED_MODULE_4__]);
remark_slug__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];







const root = process.cwd();
async function getFiles(type) {
    return (0,fs__WEBPACK_IMPORTED_MODULE_1__.readdirSync)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)(root, "src/data", type));
}
async function getFileBySlug(type, slug) {
    const source = slug ? (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)(root, "src/data", type, `${slug}.mdx`), "utf8") : (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)(root, "src/data", `${type}.mdx`), "utf8");
    const { data , content  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
    const mdxSource = await next_mdx_remote_render_to_string__WEBPACK_IMPORTED_MODULE_5___default()(content, {
        components: _components_MDXComponents__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
        mdxOptions: {
            remarkPlugins: [
                remark_slug__WEBPACK_IMPORTED_MODULE_4__["default"],
                __webpack_require__(7275)
            ]
        }
    });
    return {
        mdxSource,
        frontMatter: {
            wordCount: content.split(/\s+/gu).length,
            readingTime: reading_time__WEBPACK_IMPORTED_MODULE_3___default()(content),
            slug: slug || null,
            ...data
        }
    };
}
async function getAllFilesFrontMatter(type) {
    const files = (0,fs__WEBPACK_IMPORTED_MODULE_1__.readdirSync)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)(root, "src/data", type));
    return files.reduce((allPosts, postSlug)=>{
        const source = (0,fs__WEBPACK_IMPORTED_MODULE_1__.readFileSync)((0,path__WEBPACK_IMPORTED_MODULE_0__.join)(root, "src/data", type, postSlug), "utf8");
        const { data  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(source);
        return [
            {
                ...data,
                slug: postSlug.replace(".mdx", "")
            },
            ...allPosts, 
        ];
    }, []);
}

});

/***/ })

};
;