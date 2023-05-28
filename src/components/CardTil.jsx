import React from "react";
import Tilt from "react-tilt";
import { Box, Text, Flex, Image, IconButton } from "@chakra-ui/react";
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
    hidden: { opacity: 0, y: 50 },
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
          max: 70,
          scale: 1,
          speed: 300,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <Box position="relative" w="full" h="400px">
          <Image
            src={image}
            alt="project_image"
            w="full"
            h="full"
            objectFit="cover"
            rounded="2xl"
          />

          <Flex
            justify="end"
            m="3"
            position="absolute"
            inset="0"
            className="card-img_hover"
          >
            {/* <Box
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <IconButton
                aria-label="github"
                variant="ghost"
                size="lg"
                isRound={true}
                _hover={{ bg: "secondary" }}
                icon={<BsGithub size="28px" />}
              />
            </Box> */}
          </Flex>
        </Box>

        <Box mt="5">
          <Text color="white" fontWeight="bold" fontSize="24px">
            {name}
          </Text>
          <Text mt="2" color="#878787" fontSize="18px">
            {description}
          </Text>
        </Box>

        {/* <Flex mt="4" flexWrap="wrap" gap="2">
          {tags.map((tag) => (
            <Text key={`${name}-${tag.name}`} fontSize="14px" color={tag.color}>
              #{tag.name}
            </Text>
          ))}
        </Flex> */}
      </Tilt>
    </motion.div>
  );
};

export default CardTil;
