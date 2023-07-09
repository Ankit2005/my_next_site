import { Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const textVariant = (delay) => {
  return {
    initial: {
      ...{
        y: 50,
        opacity: 0,
      },
    },
    animate: {
      ...{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    },
  };
};

export const textSlideVariant = (delay, direction, inView) => {
  return {
    initial: {
      ...{
        y: 60,
        opacity: 0,
      },
    },

    animate: {
      ...{
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    },
  };
};

export const cardVariant = (delay, inView, x) => {
  return {
    initial: {
      ...{
        y: x,

        opacity: 0,
      },
    },

    animate: {
      ...{
        y: 50,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          delay: delay,
        },
      },
    },
  };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      ...{
        x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
        y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      },
    },

    left: direction === "left" ? "-10%" : direction === "right" ? "100%" : 0,

    transition: {
      ...{
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const fadeIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay, duration) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const test = (i, inView) => (
  <>
    initial=
    {{
      y: 70,
      opacity: 0,
    }}
    whileInView="visible" viewport={{ once: true }}
    transition={{ type: "spring", delay: i * 0.6, duration: 2.5 }}
    animate=
    {{
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.5,
        delay: i * 0.5,
      },
    }}
    variants=
    {{
      visible: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
      hidden: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
    }}
    ;
  </>
);

// ===============

export const MotionBox = motion(Box);

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

export const scaleIn = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  exit: { scale: 0 },
};

export const rotateIn = {
  initial: { rotate: -180 },
  animate: { rotate: 0 },
  exit: { rotate: -180 },
};

export const slideUp = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 50, opacity: 0 },
  // transition: {
  //   duration: 0.8, // Adjust the duration as needed
  //   ease: "easeOut", // Use a specific easing function (e.g., "easeOut", "easeInOut")
  //   // Add other transition properties to enhance the animation
  //   // For example:
  //   // delay: 0.1, // Add a delay before the animation starts
  //   // bounce: 0.5, // Add a bounce effect at the end
  //   // damping: 8, // Adjust the damping for spring animations
  //   // stiffness: 150, // Adjust the stiffness for spring animations
  // },
};

export const slideDown = {
  initial: { y: -50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
};

export const shake = {
  animate: {
    rotate: [-10, 10, -10, 10, 0],
    transition: { duration: 0.5 },
  },
};

export const MotionSlideIn = ({ children }) => (
  <motion.div
    variants={slideIn}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export const MotionScaleIn = ({ children }) => (
  <motion.div
    variants={scaleIn}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export const MotionRotateIn = ({ children }) => (
  <motion.div
    variants={rotateIn}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export const MotionSlideDown = ({ children }) => (
  <motion.div
    variants={slideDown}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

export const MotionShake = ({ children }) => (
  <motion.div variants={shake} animate="animate">
    {children}
  </motion.div>
);

export const MotionFadeIn = ({ duration = 0.3, delay = 0, children }) => (
  <MotionBox
    variants={fadeIn}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration, delay }}
  >
    {children}
  </MotionBox>
);

export const MotionSlideUp = ({ duration, delay, children, inView }) => (
  <MotionBox
    initial="hidden"
    variants={{
      //transition: { duration, delay },
      visible: {
        opacity: inView ? 1 : 0,
        // scale: inView ? 1 : 0,
        //  x: 0,
        // transitionDuration: 2,
        y: 10,
      },
      hidden: {
        opacity: inView ? 1 : 0,
        // scale: inView ? 1 : 0,
        // x: 100,
        y: 100,
      },
    }}
    // animate="animate"
    // exit="exit"
    transition={{ duration, delay }}
  >
    {children}
  </MotionBox>
);
