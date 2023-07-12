"use strict";
exports.id = 271;
exports.ids = [271];
exports.modules = {

/***/ 6271:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wt": () => (/* binding */ textVariant)
/* harmony export */ });
/* unused harmony exports textSlideVariant, cardVariant, staggerContainer, slideIn, fadeIn, zoomIn, test, MotionBox, scaleIn, rotateIn, slideUp, slideDown, shake, MotionSlideIn, MotionScaleIn, MotionRotateIn, MotionSlideDown, MotionShake, MotionFadeIn, MotionSlideUp */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



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
// ===============
const MotionBox = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box);
// export const fadeIn = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
// };
// export const slideIn = {
//   initial: { x: -100 },
//   animate: { x: 0 },
//   exit: { x: -100 },
// };
const scaleIn = {
    initial: {
        scale: 0
    },
    animate: {
        scale: 1
    },
    exit: {
        scale: 0
    }
};
const rotateIn = {
    initial: {
        rotate: -180
    },
    animate: {
        rotate: 0
    },
    exit: {
        rotate: -180
    }
};
const slideUp = {
    initial: {
        y: 50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: 50,
        opacity: 0
    }
};
const slideDown = {
    initial: {
        y: -50,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
    exit: {
        y: -50,
        opacity: 0
    }
};
const shake = {
    animate: {
        rotate: [
            -10,
            10,
            -10,
            10,
            0
        ],
        transition: {
            duration: 0.5
        }
    }
};
const MotionSlideIn = ({ children  })=>/*#__PURE__*/ _jsx(motion.div, {
        variants: slideIn,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        children: children
    })
;
const MotionScaleIn = ({ children  })=>/*#__PURE__*/ _jsx(motion.div, {
        variants: scaleIn,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        children: children
    })
;
const MotionRotateIn = ({ children  })=>/*#__PURE__*/ _jsx(motion.div, {
        variants: rotateIn,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        children: children
    })
;
const MotionSlideDown = ({ children  })=>/*#__PURE__*/ _jsx(motion.div, {
        variants: slideDown,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        children: children
    })
;
const MotionShake = ({ children  })=>/*#__PURE__*/ _jsx(motion.div, {
        variants: shake,
        animate: "animate",
        children: children
    })
;
const MotionFadeIn = ({ duration =0.3 , delay =0 , children  })=>/*#__PURE__*/ _jsx(MotionBox, {
        variants: fadeIn,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        transition: {
            duration,
            delay
        },
        children: children
    })
;
const MotionSlideUp = ({ duration , delay , children , inView  })=>/*#__PURE__*/ _jsx(MotionBox, {
        initial: "hidden",
        variants: {
            //transition: { duration, delay },
            visible: {
                opacity: inView ? 1 : 0,
                // scale: inView ? 1 : 0,
                //  x: 0,
                // transitionDuration: 2,
                y: 10
            },
            hidden: {
                opacity: inView ? 1 : 0,
                // scale: inView ? 1 : 0,
                // x: 100,
                y: 100
            }
        },
        // animate="animate"
        // exit="exit"
        transition: {
            duration,
            delay
        },
        children: children
    })
;

});

/***/ })

};
;