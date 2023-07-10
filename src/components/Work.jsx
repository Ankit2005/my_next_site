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
import AOS from "aos";
import "aos/dist/aos.css";

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
      img: "https://picsum.photos/500/300/?random",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
    {
      title: "Virtual Gym",
      img: "https://picsum.photos/500/300/?random",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
    {
      title: "Virtual Gym",
      img: "https://picsum.photos/500/300/?random",
      desc: "We designed Virtual Gym to make it more convenient to ensure that users only focus on fitness.",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger the animation once
  });

  const [x, setX] = useState(-100);
  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);

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

  const svgBackground = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1234' height='527' viewBox='0 0 1234 527' fill='none'%3E%3Crect opacity='0.75' x='1126' y='64' width='232' height='232' rx='50' fill='%2315803D'/%3E%3Crect opacity='0.75' x='1017' y='325' width='202' height='202' rx='30' fill='%23A21CAF'/%3E%3Crect opacity='0.75' x='756' y='325' width='130' height='130' rx='30' fill='%23B45309'/%3E%3Crect opacity='0.75' x='457' width='161' height='161' rx='50' fill='%230369A1'/%3E%3Crect opacity='0.75' y='207' width='271' height='271' rx='50' fill='%23BE185D'/%3E%3C/svg%3E")`;

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      flexDir="column"
      textAlign={{ base: "center", lg: "left" }}
      // p="4"

      className="gd"

      // bgSquare
    >
      <Box>
        <Box
          display={{ base: "column", md: "flex" }}
          justifyContent={{ base: "space-between" }}
          alignItems="center"
          w={{ base: "100%", md: "95%" }}
          mx="auto"
          mt="4"
        >
          <Text fontWeight="bold" fontSize={{ base: "4xl" }} color="white">
            The best of the best
          </Text>
          <Button borderColor="white" color="white" variant="outline">
            Sign up now
          </Button>
        </Box>

        <Box
          py="4"
          background={svgBackground}
          backgroundSize={{ base: "auto", md: "cover" }}
          backgroundRepeat="no-repeat"
        >
          <Wrap
            px={{ base: 2, md: 6, lg: 4, xl: 14 }}
            mt="4"
            ref={ref}
            spacing="40px"
            justify="center"
          >
            {cards.map((item, i) => (
              <WrapItem
                key={i}
                width={{
                  base: "100%",
                  sm: "80%",
                  md: "40%",
                  lg: "40%",
                  xl: "30%",
                }}

                // {...cardVariant(i * 0.4, inView)}
              >
                <Center>
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
