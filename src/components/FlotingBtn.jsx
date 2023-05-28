import {
  Box,
  Button,
  Container,
  chakra,
  shouldForwardProp,
} from "@chakra-ui/react";
import { FaViber } from "react-icons/fa";

import { motion, isValidMotionProp } from "framer-motion";
import NextImage from "next/image";

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function FlotingBtn() {
  return (
    <Box position="fixed" bottom={25} right={6} zIndex="10">
      <Container
      //  h="100vh"
      // display="flex"
      // alignItems="center"
      // justifyContent="center"
      >
        <ChakraBox
          animate={{
            //scale: [0.3, 0.4, 0.4],
            //  rotate: [0, 50, 270, 270, 0],
            y: ["0%", "-10%", "0%"],
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
          <Button
            as={motion.button}
            bg="primaryBlueBtn"
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            //  width={58}
            // height="58"
            color="white"
            borderRadius={50}
            fontSize="40"
            initial={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              opacity: 0,
            }}
            animate={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              opacity: 1,
              transition: {
                type: "spring",
                duration: "1.5",
                iterations: Infinity,
              },
            }}
            variants={{
              zoomedIn: {
                scale: 1.2,
              },
              zoomedOut: {
                scale: 0.8,
              },
            }}
            onAnimationEnd={() => console.log("Animation ended")}
          >
            <FaViber />
          </Button>
        </ChakraBox>
      </Container>
    </Box>
  );
}
