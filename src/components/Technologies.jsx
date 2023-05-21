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
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  TabIndicator,
} from "@chakra-ui/react";

// import NextImage from "next/image";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  slideIn,
  textVariant,
  textSlideVariant,
  cardVariant,
} from "src/utils/motion";
import { technologies } from "src/utils/technologies";

export default function Technologies() {
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
                {...textVariant("0.3")}
                color="offWhiteText"
                textAlign="center"
                fontSize={{ base: 29, sm: 35, md: 48, lg: 44, xl: 48 }}
                fontWeight={700}
              >
                Technologies we work with
              </Text>
            </Box>
          </Box>
        </Box>

        <Box py="10">
          <Tabs position="relative" variant="unstyled">
            <TabList display={"flex"} justifyContent="center">
              <Tab _focus={{}}>Mobile</Tab>
              <Tab _focus={{}}>Two</Tab>
              <Tab _focus={{}}>Three</Tab>
            </TabList>
            <TabIndicator
              //mt="-1.5px"
              height="1px"
              bg="white"
              borderRadius="1px"
            />
            <TabPanels py="10">
              <TabPanel>
                <Wrap justifyContent="space-between">
                  {technologies.mobile.map((tech, i) => {
                    return (
                      <Tech
                        title={tech.technologie}
                        icon={tech.img}
                        index={i}
                      />
                    );
                  })}
                </Wrap>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

const Tech = ({ title, icon, i }) => {
  return (
    <WrapItem key={i}>
      <Center>
        <Box textAlign="center" p="2" w="190px">
          <Box display="flex" justifyContent="center">
            <Image src={icon} />
          </Box>
          <Box my="4">{title}</Box>
        </Box>
      </Center>
    </WrapItem>
  );
};
