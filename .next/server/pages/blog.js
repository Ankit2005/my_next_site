"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 1854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1635);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_tagColor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4276);
/* harmony import */ var _UI_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3671);







const BlogPost = ({ posts  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const summaryColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.600", "gray.300");
    const dateColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.500", "gray.400");
    const yearColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("telegram.500", "telegram.400");
    let year = 0;
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: posts.map((post)=>{
            const { slug , title , summary , tags , publishedAt  } = post;
            const thisYear = publishedAt.substring(0, 4);
            const YearComponent = thisYear !== year && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                color: yearColor,
                mt: "2",
                children: thisYear
            });
            year = thisYear;
            return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                my: "3",
                py: "2",
                px: "4",
                rounded: "md",
                children: [
                    YearComponent,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                        as: "h3",
                        fontSize: "2xl",
                        fontWeight: "700",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__["default"], {
                            href: `/blog/${slug}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: title
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "17px",
                        fontWeight: "400",
                        color: summaryColor,
                        py: "1",
                        children: summary
                    }),
                    tags.map((tag)=>{
                        const color = _UI_tagColor__WEBPACK_IMPORTED_MODULE_5__/* .tagColor */ .Y[tag];
                        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UI_tag__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            color: color,
                            onClick: ()=>router.push({
                                    pathname: "/blog/",
                                    query: {
                                        tag
                                    }
                                })
                            ,
                            children: tag
                        }, tag));
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "16px",
                        fontWeight: "500",
                        color: dateColor,
                        py: "1",
                        children: dayjs__WEBPACK_IMPORTED_MODULE_4___default()(publishedAt).format("MMMM DD, YYYY")
                    })
                ]
            }, slug));
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogPost);


/***/ }),

/***/ 4077:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6641);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2733);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(381);
/* harmony import */ var _components_UI_tagColor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4276);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1838);
/* harmony import */ var _components_UI_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3671);
/* harmony import */ var _components_blogPost__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1854);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_posts__WEBPACK_IMPORTED_MODULE_6__]);
_lib_posts__WEBPACK_IMPORTED_MODULE_6__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];











const options = {
    includeScore: true,
    threshold: 0.3,
    ignoreLocation: true,
    keys: [
        "title"
    ]
};
const Blog = ({ posts  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const fuse = new (fuse_js__WEBPACK_IMPORTED_MODULE_5___default())(posts, options);
    const { 0: blogPost , 1: setBlogPost  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(posts);
    const { 0: searchValue , 1: setSearchValue  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const filteredPosts = (tag)=>{
        const blogResults = posts.filter((post)=>post.tags.includes(tag)
        );
        setBlogPost(blogResults);
    };
    const updateSearch = ()=>{
        const results = fuse.search(searchValue);
        const blogResults = results.map((res)=>res.item
        );
        setBlogPost(blogResults);
    };
    const delayedSearch = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(updateSearch, [
        searchValue
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (searchValue.length === 0) {
            return setBlogPost(posts);
        }
        delayedSearch();
    }, [
        delayedSearch
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router.query?.tag !== undefined) {
            filteredPosts(router.query?.tag);
        }
    }, [
        router
    ]);
    const title = "Blog";
    const description = config__WEBPACK_IMPORTED_MODULE_8__/* .seo.description */ .$K.description;
    const url = `${config__WEBPACK_IMPORTED_MODULE_8__/* .seo.canonical */ .$K.canonical}blog`;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_seo__WEBPACK_IMPORTED_MODULE_4__.NextSeo, {
                title: title,
                description: description,
                canonical: url,
                openGraph: {
                    title,
                    description,
                    url
                }
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                as: "section",
                fontSize: "16px",
                px: {
                    md: "10",
                    lg: "20",
                    xl: "30"
                },
                py: "4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        justify: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Input, {
                            onChange: (e)=>{
                                setSearchValue(e.target.value);
                            },
                            value: searchValue,
                            variant: "outline",
                            placeholder: "Search...",
                            maxWidth: "400px"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                        justify: "center",
                        align: "center",
                        direction: "row",
                        wrap: "wrap",
                        m: "1.5rem 0",
                        children: Object.keys(_components_UI_tagColor__WEBPACK_IMPORTED_MODULE_7__/* .tagColor */ .Y).map((tag, index)=>{
                            const color = _components_UI_tagColor__WEBPACK_IMPORTED_MODULE_7__/* .tagColor */ .Y[tag];
                            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_UI_tag__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    color: color,
                                    onClick: ()=>filteredPosts(tag)
                                    ,
                                    children: tag
                                })
                            }, index));
                        })
                    }),
                    blogPost.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_blogPost__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        posts: blogPost
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Alert, {
                        status: "info",
                        borderRadius: "md",
                        d: "flex",
                        justifyContent: "center",
                        mx: "auto",
                        maxWidth: "500px",
                        fontWeight: "500",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AlertIcon, {}),
                            "No blog post has been found!"
                        ]
                    })
                ]
            })
        ]
    }));
};
async function getStaticProps() {
    const data = await (0,_lib_posts__WEBPACK_IMPORTED_MODULE_6__/* .getAllFilesFrontMatter */ .sj)("blog");
    const posts = data.sort((a, b)=>Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
    return {
        props: {
            posts
        }
    };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

});

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 1635:
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ 2733:
/***/ ((module) => {

module.exports = require("fuse.js");

/***/ }),

/***/ 8076:
/***/ ((module) => {

module.exports = require("gray-matter");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,61,838,701], () => (__webpack_exec__(4077)));
module.exports = __webpack_exports__;

})();