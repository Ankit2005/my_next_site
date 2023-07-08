import React from "react";
import Tilt from "react-tilt";
import {
  Box,
  Text,
  Flex,
  Image,
  IconButton,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const SimpleCardTil = ({
  name,
  description,
  btnText,
  tags,
  source_code_link,
  index,
}) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", delay: index * 0.5, duration: 0.5 }}
    >
      <Tilt
        options={{
          max: 15,
          scale: 1,
          speed: 15,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <Box
          _hover={{
            bg: "#5956E9",
            color: "white !important",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          borderRadius={16}
          p="8"
          variants="outline"
          bg="bgLightPrimary"
        >
          <Button
            fontWeight="bold"
            borderRadius={26}
            textColor="white"
            padding={6}
            bg="#060B27"
            _hover={{}}
          >
            {btnText}
          </Button>

          <Box mt="4" px="2">
            <Text color="white" fontWeight="bold" fontSize="20px">
              {name}
            </Text>
            <Text
              mt="2"
              color={isHovered ? "white" : "#878787"}
              fontSize="18px"
            >
              {description}
            </Text>
          </Box>
        </Box>
      </Tilt>
    </motion.div>
  );
};

export default SimpleCardTil;
