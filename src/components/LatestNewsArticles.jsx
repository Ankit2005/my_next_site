import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Divider,
  ButtonGroup,
  Grid,
  GridItem,
  Avatar,
  Center,
  Flex,
  useColorModeValue,
  Wrap,
  WrapItem,
  HStack,
  Tag,
} from "@chakra-ui/react";

import Tilt from "react-tilt";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import AOS from "aos";

import { useInView } from "react-intersection-observer";
import {
  slideIn,
  textVariant,
  textSlideVariant,
  cardVariant,
} from "src/utils/motion";
import CardTil from "./CardTil";

export default function LatestNewsArticles() {
  const cards = [
    {
      title: "Product Mail is taking on Gmail by betting on privacy",
      img: "/img/news_img_one.svg",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
    {
      title: "Product Mail is taking on Gmail by betting on privacy",
      img: "/img/news_img_one.svg",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
    {
      title: "Product Mail is taking on Gmail by betting on privacy",
      img: "/img/news_img_one.svg",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger the animation once
  });

  const [x, setX] = useState(-100);

  useEffect(() => {
    const handleScroll = () => {
      console.log("dddddddddd", window.scrollY);
      if (window.scrollY >= 1730) {
        setX(-100);
      } else {
        setX(0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      flexDir="column"
      textAlign={{ base: "center", lg: "left" }}
      //className="gd"
      bgGradient="linear-gradient(250deg, rgba(6,11,39,1) 40%, rgba(6,11,39,1) 88%, rgba(14,12,54,0.9122242647058824) 100%)"
    >
      <Box>
        <Box
          display={{ lg: "flex" }}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          flexDir={{ lg: "row-reverse" }}
          w="100%"
          mt="6"
        >
          <Box>
            <Box mb={{ base: 0 }} mt="4">
              <Text
                data-aos="fade-up"
                // letterSpacing={9}
                textAlign="center"
                bgGradient="linear(to-l, #F6F6F7, #7E808F)"
                bgClip="text"
                py="1"
                fontSize={{ base: 29, sm: 35, md: 48, lg: 44, xl: 48 }}
              >
                Latest News & Articles
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py="4">
          <Wrap
            px={{ base: 4, sm: 14 }}
            mt="4"
            ref={ref}
            spacing="40px"
            justify="center"
          >
            {cards.map((item, i) => (
              <WrapItem
                key={i}
                as={motion.div}
                data-aos="fade-up"
                width={{ base: "100%", md: "40%", lg: "30%" }}
              >
                <Center>
                  <NewsCard
                    description={item.desc}
                    imageSrc={item.img}
                    title={item.title}
                    name={item.title}
                    image={item.img}
                    source_code_link="https://test.com/"
                    index={i}
                  />
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Box>
    </Box>
  );
}

const NewsCard = ({
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
        data-aos="fade-up"
      >
        <Box
          border="1px"
          borderColor="#282D45"
          boxShadow="xl"
          borderRadius={10}
          bg="bgPrimary"
          p="0"
        >
          <Box m="6" borderRadius="lg" overflow="hidden">
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
              data-aos="fade-up"
            />
          </Box>

          <Box mx="4" mt="5">
            <Text
              color="white"
              fontWeight="bold"
              fontSize="24px"
              data-aos="fade-up"
            >
              {name}
            </Text>
            <Text mt="2" color="#8E9BB7" fontSize="17px" data-aos="fade-up">
              {description}
            </Text>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="4"
              my="1"
              borderTop="1px"
              borderColor="#282D45"
            >
              <Text data-aos="fade-up" color="#8E9BB7">
                February 8, 2023
              </Text>
              <Text
                data-aos="fade-up"
                fontWeight="bold"
                color="white"
              >{`Read more ->`}</Text>
            </Box>
          </Box>
        </Box>
      </Tilt>
    </motion.div>
  );
};
