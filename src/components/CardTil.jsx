import React, { useEffect } from "react";
import Tilt from "react-tilt";
import { Box, Text, Flex, Image, IconButton, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const CardTil = ({
  name,
  description,
  image,
  tags,
  source_code_link,
  index,
}) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);

  return (
    <motion.div
      variants={fadeInVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", delay: index * 0.5, duration: 0.5 }}
    >
      <Tilt
        options={{
          max: 10,
          scale: 1,
          speed: 10,
        }}
        className="bg-tertiary-e p-5 rounded-1xl sm:w-[360px] w-full"
      >
        <Box
          data-aos="fade-up"
          boxShadow="xl"
          borderRadius={10}
          bg="bgPrimary"
          p="0"
        >
          <Box borderRadius="lg" overflow="hidden">
            <Image
              transform="scale(1.0)"
              data-aos="fade-up"
              src={image}
              alt="project_image"
              objectFit="contain"
              width="100%"
              transition="0.3s ease-in-out"
              _hover={{
                transform: "scale(1.05)",
              }}
            />
          </Box>

          <Box mx="4" mt="5">
            <Text
              data-aos="fade-up"
              color="white"
              fontWeight="bold"
              fontSize="24px"
            >
              {name}
            </Text>
            <Text data-aos="fade-up" mt="2" color="white" fontSize="17px">
              {description}
            </Text>
            <Box data-aos="fade-up" p="4" my="4">
              <Button
                w="full"
                borderColor="white"
                color="white"
                variant="outline"
                _hover={{}}
              >
                Sign up now
              </Button>
            </Box>
          </Box>
        </Box>
      </Tilt>
    </motion.div>
  );
};

export default CardTil;
