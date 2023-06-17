"use strict";
(() => {
var exports = {};
exports.id = 492;
exports.ids = [492];
exports.modules = {

/***/ 7986:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7425);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4041);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2340);
/* harmony import */ var next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(381);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1838);
/* harmony import */ var _components_UI_tagColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4276);
/* harmony import */ var _components_MDXComponents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7790);
/* harmony import */ var _components_UI_tag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3671);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_8__]);
_lib_posts__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];













const BlogPost = ({ mdxSource , frontMatter  })=>{
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const color1 = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useColorModeValue)("gray.700", "gray.400");
    const content = next_mdx_remote_hydrate__WEBPACK_IMPORTED_MODULE_7___default()(mdxSource, {
        components: _components_MDXComponents__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z
    });
    const title = frontMatter.title;
    const description = frontMatter.summary;
    const url = `${config__WEBPACK_IMPORTED_MODULE_9__/* .seo.canonical */ .$K.canonical}blog/${frontMatter.slug}`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {
                title: title,
                description: description,
                canonical: url,
                openGraph: {
                    title,
                    description,
                    url,
                    type: "article",
                    article: {
                        publishedTime: frontMatter.publishedAt,
                        modifiedTime: frontMatter.modifiedAt,
                        tags: frontMatter.tags?.map((tag)=>tag
                        )
                    }
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mdx_js_react__WEBPACK_IMPORTED_MODULE_4__.MDXProvider, {
                components: _components_MDXComponents__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                    as: "section",
                    px: {
                        md: "10",
                        lg: "20",
                        xl: "40"
                    },
                    py: "4",
                    fontSize: "16px",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            as: "header",
                            textAlign: "center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
                                    as: "h1",
                                    py: "4",
                                    size: "2xl",
                                    children: frontMatter.title
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                                    direction: "column",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                            fontSize: "16px",
                                            color: color1,
                                            py: "1",
                                            children: [
                                                frontMatter.author,
                                                " /",
                                                " ",
                                                dayjs__WEBPACK_IMPORTED_MODULE_6___default()(frontMatter.publishedAt).format("MMMM DD, YYYY"),
                                                " /",
                                                " ",
                                                frontMatter.readingTime.text
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                            py: "1",
                                            children: frontMatter.tags.map((tag)=>{
                                                const color = _components_UI_tagColor__WEBPACK_IMPORTED_MODULE_10__/* .tagColor */ .Y[tag];
                                                return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_tag__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    color: color,
                                                    onClick: ()=>push({
                                                            pathname: "/blog/",
                                                            query: {
                                                                tag
                                                            }
                                                        })
                                                    ,
                                                    children: tag
                                                }, tag));
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
                            as: "article",
                            children: [
                                content,
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                                    fontWeight: "500",
                                    py: "6",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
                                        href: `https://github.com/imadatyatalah/nextjs-chakra-ui-portfolio-template/blob/main/src/data/blog/${frontMatter.slug}.mdx`,
                                        d: "flex",
                                        alignItems: "flex-end",
                                        _focus: {
                                            outline: "none"
                                        },
                                        isExternal: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                as: react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdEdit,
                                                w: 6,
                                                h: 6,
                                                marginRight: "2"
                                            }),
                                            "Edit this page on github."
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
const getStaticPaths = async ()=>{
    const posts = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_8__/* .getFiles */ .bE)("blog");
    return {
        paths: posts.map((post)=>({
                params: {
                    slug: post.replace(/\.mdx/, "")
                }
            })
        ),
        fallback: false
    };
};
const getStaticProps = async ({ params  })=>{
    const post = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_8__/* .getFileBySlug */ .x7)("blog", params.slug);
    return {
        props: post
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);

});

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 7425:
/***/ ((module) => {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 2340:
/***/ ((module) => {

module.exports = require("next-mdx-remote/hydrate");

/***/ }),

/***/ 3354:
/***/ ((module) => {

module.exports = require("next-mdx-remote/render-to-string");

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

/***/ 7096:
/***/ ((module) => {

module.exports = require("prism-react-renderer");

/***/ }),

/***/ 9123:
/***/ ((module) => {

module.exports = require("prism-react-renderer/themes/nightOwl");

/***/ }),

/***/ 8671:
/***/ ((module) => {

module.exports = require("prism-react-renderer/themes/nightOwlLight");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4041:
/***/ ((module) => {

module.exports = require("react-icons/md");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

module.exports = require("reading-time");

/***/ }),

/***/ 7275:
/***/ ((module) => {

module.exports = require("remark-code-titles");

/***/ }),

/***/ 9071:
/***/ ((module) => {

module.exports = import("remark-slug");;

/***/ }),

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,838,701], () => (__webpack_exec__(7986)));
module.exports = __webpack_exports__;

})();