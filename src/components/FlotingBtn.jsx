import { motion } from "framer-motion";
import { Box, Button } from "@chakra-ui/react";
import { FaViber } from "react-icons/fa";

export default function FlotingBtn() {
  return (
    <Box position="fixed" bottom={25} right={6} zIndex="10">
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
    </Box>
  );
}
