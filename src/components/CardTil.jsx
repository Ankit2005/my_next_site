import React from "react";
import Tilt from "react-tilt";
import { Box, Text, Flex, Image, IconButton, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

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
        <Box boxShadow="xl" borderRadius={10} bg="bgPrimary" p="0">
          <Box borderRadius="lg" overflow="hidden">
            <Image
              transform="scale(1.0)"
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
            <Text color="white" fontWeight="bold" fontSize="24px">
              {name}
            </Text>
            <Text mt="2" color="white" fontSize="17px">
              {description}
            </Text>
            <Box p="4" my="4">
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
