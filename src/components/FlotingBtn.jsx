import { motion } from "framer-motion";
import { Box, Button } from "@chakra-ui/react";
import { FaViber } from "react-icons/fa";

export default function FlotingBtn() {
  return (
    <Box position="fixed" bottom={125} right={10} p="2" zIndex="10">
      <Button
        as={motion.button}
        bg="primaryBlueBtn"
        //  width={58}
        // height="58"
        color="white"
        borderRadius={50}
        fontSize="40"
        initial={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          opacity: 0,
        }}
        animate={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          opacity: 1,
          transition: {
            type: "spring",
            duration: "1",
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
    </Box>
  );
}
