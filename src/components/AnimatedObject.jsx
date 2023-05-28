import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import NextImage from "next/image";
import { Flawer } from "../assets/img";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function AnimatedObject({ img, animate }) {
  return (
    <Container
    //  h="100vh"
    // display="flex"
    // alignItems="center"
    // justifyContent="center"
    >
      <ChakraBox
        animate={{
          ...animate,
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        padding="2"
        //  bgGradient="linear(to-l, #7928CA, #FF0080)"
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100px"
        height="100px"
      >
        <NextImage
          src={img}
          width="600"
          height="600"
          alt={"man"}
          placeholder="blur"
          blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
        />
      </ChakraBox>
    </Container>
  );
}
