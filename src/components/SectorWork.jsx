import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  CardHeader,
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
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  slideIn,
  textVariant,
  textSlideVariant,
  cardVariant,
} from "src/utils/motion";
import CardTil from "./CardTil";
import SimpleCardTil from "./SimpleCard";

export default function SectorWork() {
  const cards = [
    {
      title: "Transportation app",
      btnText: "Most Successful",
      desc: "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
    },
    {
      title: "E-commerce app",
      btnText: "Respond",
      desc: "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
    },
    {
      title: "Truly automate your social media",
      btnText: "Automate",
      desc: "Building an enterprisedoesn't need nightmare or cost your thousands. Felix is purpose built.",
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
      // p="4"
      className="gd"
    >
      <Box>
        <Box
          display={{ lg: "flex" }}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          flexDir={{ lg: "row-reverse" }}
          w="100%"
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
                Sector we work
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py="6">
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
                  <SimpleCardTil
                    description={item.desc}
                    btnText={item.btnText}
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
