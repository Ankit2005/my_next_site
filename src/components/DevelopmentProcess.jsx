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
} from "@chakra-ui/react";

// import NextImage from "next/image";

import NextImage from "next/image";

import { useInView } from "react-intersection-observer";
import {
  slideIn,
  textVariant,
  textSlideVariant,
  cardVariant,
  test,
} from "src/utils/motion";

import { Build, Deliver, Design, Discover } from "../assets/img";
import { useEffect, useState } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export default function DevelopmentProcess() {
  const list = [
    {
      title: "Discover",
      img: "/img/discover.svg",
      desc: "We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.",
    },
    {
      title: "Build",
      img: "/img/build.svg",
      desc: `Using modern technologies, we
      build with efficiency and skill,
      creating flexible and scalable
      business-driven solutions.`,
    },
    {
      title: "Deliver",
      img: "/img/deliver.svg",
      desc: `We take an iterative approach
      to both our work and our
      practice, always looking for
      ways to improve what we do.`,
    },
    {
      title: "Design",
      img: "/img/design.svg",
      desc: `Our design approach is to
      simplify. We embrace the joy in
      creating something unique that
      is easy for end users.`,
    },
  ];

  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger the animation once
  });

  const [x, setX] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      console.log("dddddddddd", window.scrollY);
      if (window.scrollY >= 2137) {
        setX(50);
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
      py="18"
      className="gd"
    >
      <Box
        width={{
          base: "100%",
          xl: "95%",
        }}
        mx="auto"
      >
        <Box
          d={{ lg: "flex" }}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          flexDir={{ lg: "row-reverse" }}
          w="100%"
          as={motion.div}
          {...textSlideVariant(0.2, "left", false)}
        >
          <Box>
            <Box p="10">
              <Text
                as={motion.p}
                {...textVariant("0.3")}
                color="offWhiteText"
                textAlign="center"
                fontSize={{ base: 24, sm: 32, md: 48, lg: 44, xl: 38 }}
                fontWeight={700}
              >
                We Simplify Software Development Process
              </Text>
            </Box>
          </Box>
        </Box>
        {/* // test */}
        <Box>
          <Wrap ref={ref} spacing="20px" justify="center">
            {list.map((item, i) => (
              <WrapItem
                key={i}
                as={motion.div}
                initial={{
                  y: 70,
                  opacity: 0,
                }}
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ type: "spring", delay: i * 0.6, duration: 2.5 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                    duration: 1.5,
                    delay: i * 0.5,
                  },
                }}
                variants={{
                  visible: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
                  hidden: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
                }}
                width={{
                  base: "100%",
                  sm: "100%",
                  md: "40%",
                  lg: "344px",
                  xl: "22%",
                }}
                // {...cardVariant(i * 0.4, false, x)}
                px={[3, 5]}
              >
                <Center py={2}>
                  <Box
                    overscroll={"auto"}
                    //maxW={"445px"}
                    // border="1px"
                    // borderColor="primaryBorder"
                    w={"full"}
                    bg={useColorModeValue("white", "bgGradientPrimary")}
                    // bgGradient="linear(to-l, #7928CA, #FF0080)"
                    // boxShadow={"2xl"}
                    rounded={"md"}
                    p={2}
                    overflow={"hidden"}
                  >
                    <Box
                      as={motion.div}
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      initial="hidden"
                      whileInView="show"
                      // w="full"
                    >
                      <Image
                        borderRadius={10}
                        src={item.img}
                        boxSize="100px"
                        objectFit="cover"
                        // width="60"
                        // height="60"
                        // layout={"fill"}
                        alt={item.title}
                      />
                      <Box
                        display={{ base: "none", sm: "none", md: "block" }}
                        mx="8"
                        width={{ base: "60%" }}
                        borderTop="1px dotted"
                        borderWidth={3}
                      ></Box>
                    </Box>

                    <Stack
                      mt={6}
                      direction={"row"}
                      spacing={2}
                      align={"center"}
                    >
                      <Stack textAlign="left" direction={"column"} spacing={3}>
                        <Text
                          fontSize={36}
                          {...textVariant("0.7")}
                          fontWeight={600}
                        >
                          {item.title}
                        </Text>
                        <Text fontSize={"md"} color={"gray.500"}>
                          {item.desc}
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </Center>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Box>
    </Box>
  );
}
