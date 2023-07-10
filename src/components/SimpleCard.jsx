import React, { useEffect } from "react";
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
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);

  return (
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
        data-aos="fade-up-left"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        borderRadius={16}
        p="8"
        //variants="outline"
        bg="bgLightPrimary"
      >
        <Button
          //  data-aos="fade-up"
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
          <Text
            //  data-aos="fade-up"
            color="white"
            fontWeight="bold"
            fontSize="20px"
          >
            {name}
          </Text>
          <Text
            mt="2"
            // data-aos="fade-up"
            color={isHovered ? "white" : "#878787"}
            fontSize="18px"
          >
            {description}
          </Text>
        </Box>
      </Box>
    </Tilt>
  );
};

export default SimpleCardTil;
