"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 6271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wt": () => (/* binding */ textVariant),
/* harmony export */   "NO": () => (/* binding */ textSlideVariant)
/* harmony export */ });
/* unused harmony exports cardVariant, staggerContainer, slideIn, fadeIn, zoomIn, test */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const textVariant = (delay)=>{
    return {
        initial: {
            ...{
                y: 50,
                opacity: 0
            }
        },
        animate: {
            ...{
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1.25,
                    delay: delay
                }
            }
        }
    };
};
const textSlideVariant = (delay, direction, inView)=>{
    return {
        initial: {
            ...{
                y: 60,
                opacity: 0
            }
        },
        animate: {
            ...{
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1.25,
                    delay: delay
                }
            }
        }
    };
};
const cardVariant = (delay, inView, x)=>{
    return {
        initial: {
            ...{
                y: x,
                opacity: 0
            }
        },
        animate: {
            ...{
                y: 50,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1.5,
                    delay: delay
                }
            }
        }
    };
};
const staggerContainer = (staggerChildren, delayChildren)=>{
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0
            }
        }
    };
};
const slideIn = (direction, type, delay, duration)=>{
    return {
        hidden: {
            ...{
                x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
                y: direction === "up" ? 100 : direction === "down" ? -100 : 0
            }
        },
        left: direction === "left" ? "-10%" : direction === "right" ? "100%" : 0,
        transition: {
            ...{
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut"
            }
        }
    };
};
const fadeIn = (direction, type, delay, duration)=>{
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut"
            }
        }
    };
};
// export const cardVariant = (delay, inView) => {
//   return {
//     initial: {
//       ...{
//         y: 50,
//         opacity: 0,
//       },
//     },
//     animate: {
//       ...{
//         // y: 0,
//         y: inView ? 0 : 200,
//         opacity: inView ? 1 : 0,
//         transition: {
//           type: "spring",
//           duration: 1.25,
//           delay: delay,
//         },
//       },
//     },
//   };
// };
const zoomIn = (delay, duration)=>{
    return {
        hidden: {
            scale: 0,
            opacity: 0
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "tween",
                delay: delay,
                duration: duration,
                ease: "easeOut"
            }
        }
    };
};
const test = (i, inView)=>/*#__PURE__*/ _jsxs(_Fragment, {
        children: [
            "initial=",
            {
                y: 70,
                opacity: 0
            },
            "whileInView=\"visible\" viewport=",
            {
                once: true
            },
            "transition=",
            {
                type: "spring",
                delay: i * 0.6,
                duration: 2.5
            },
            "animate=",
            {
                y: 0,
                opacity: 1,
                transition: {
                    type: "spring",
                    duration: 1.5,
                    delay: i * 0.5
                }
            },
            "variants=",
            {
                visible: {
                    opacity: inView ? 1 : 0,
                    scale: inView ? 1 : 0
                },
                hidden: {
                    opacity: inView ? 1 : 0,
                    scale: inView ? 1 : 0
                }
            },
            ";"
        ]
    })
;


/***/ })

};
;