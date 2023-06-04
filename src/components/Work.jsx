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

// import NextImage from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  slideIn,
  textVariant,
  textSlideVariant,
  cardVariant,
} from "src/utils/motion";
import CardTil from "./CardTil";

export default function Work() {
  const cards = [
    {
      title: "Virtual Gym",
      img: "https://cdn.pixabay.com/photo/2015/01/09/11/11/office-594132_1280.jpg",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
    {
      title: "Virtual Gym",
      img: "https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_1280.jpg",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
    {
      title: "Virtual Gym",
      img: "https://cdn.pixabay.com/photo/2015/05/31/13/45/working-791849_1280.jpg",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
    {
      title: "Virtual Gym",
      img: "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
    {
      title: "Virtual Gym",
      img: "https://cdn.pixabay.com/photo/2019/12/17/17/09/woman-4702060_1280.jpg",
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

  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      flexDir="column"
      textAlign={{ base: "center", lg: "left" }}
      // p="4"
      className="gd"
    >
      <Box>
        <Box
          d={{ lg: "flex" }}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          flexDir={{ lg: "row-reverse" }}
          w="100%"
          as={motion.div}
          {...textSlideVariant(0.2, "left", inView)}
        >
          <Box>
            <Box mb={{ base: 0 }} mt="14">
              <Text
                as={motion.p}
                {...textSlideVariant(0.2, "right", inView)}
                // letterSpacing={9}
                textAlign="center"
                color="#878787"
                py="1"
                fontSize={{ base: 13, sm: 17, md: 20, lg: 19, xl: 19 }}
              >
                DESIGNS THAT BRANDS ADORE & USERS ENJOY.
              </Text>
              <Text
                as={motion.p}
                {...textVariant("0.3")}
                color="offWhiteText"
                textAlign="center"
                fontSize={{ base: 29, sm: 35, md: 48, lg: 44, xl: 48 }}
                fontWeight={700}
              >
                Client Satisfying Projects
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py="20">
          <Wrap p="4" ref={ref} spacing="26px" justify="center">
            {cards.map((item, i) => (
              <WrapItem
                key={i}
                as={motion.div}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.5, duration: 1.2 }}
                width={{ base: "100%", md: "40%", lg: "30%" }}
                variants={{
                  visible: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
                  hidden: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
                }}
                // {...cardVariant(i * 0.4, inView)}
              >
                <Center py={2}>
                  <CardTil
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
