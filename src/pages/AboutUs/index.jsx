import React, { useEffect } from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import AOS from "aos";

const list = [
  {
    title: "Marketing Plan",
    desc: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm",
    // image: "https://source.unsplash.com/random/?Cryptocurrency&",
    img: "/img/service_page_screen.svg",
  },
  {
    title: "Work Execution",
    desc: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm ",
    // image: "https://source.unsplash.com/random/?Cryptocurrency&",
    img: "/img/service_page_screen.svg",
  },
  {
    title: "Marketing Plan",
    desc: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm",
    // image: "https://source.unsplash.com/random/?Cryptocurrency&",
    img: "/img/service_page_screen.svg",
  },
  {
    title: "Marketing Plan",
    desc: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm",
    // image: "https://source.unsplash.com/random/?Cryptocurrency&",
    img: "/img/service_page_screen.svg",
  },
];

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);
  return (
    <Container bg="bgPrimary" maxW={{ base: "", md: "7xl" }}>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 8 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <Text as={"span"} color="white">
              A fully integrated digital{" "}
              <Text as={"span"} color="secondary">
                marketing
              </Text>{" "}
              agency
            </Text>
          </Heading>
          <Text color={"gray.500"} data-aos="fade-up" data-aos-duration="2000">
            Lorem ipsum dolor sit amet, ea mundi malorum cum, ocurreret
            reprehendunt ius ex. Ut vis mazim erroribus forensibus.
          </Text>
        </Stack>
        <Flex
          flex={1}
          justify={"center"}
          // align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box position={"relative"}>
            <Image
              alt={"monitor Image"}
              //  fit={"cover"}
              align={"center"}
              boxSize={{ base: "sm", md: "md", lg: "xl" }}
              data-aos="fade-up"
              data-aos-duration="2000"
              // w={"100%"}
              // h={"100%"}
              src="/img/monitor.png"
            />
          </Box>
        </Flex>
      </Stack>

      {/* ----------------  */}

      <Box
        bg="##060B27"
        border="1px"
        borderColor="gray.700"
        borderRadius="lg"
        mx={{ base: 2, md: 8 }}
        pos="relative"
      >
        <Box display="flex" justifyContent="center" pt="8">
          <Text
            textAlign="center"
            color="white"
            fontSize={{ base: "2xl", md: "5xl" }}
            fontWeight="bold"
            w={{ base: "xl", md: "2xl" }}
            data-aos="fade-up"
          >
            A simple, yet powerful and efficient process
          </Text>
        </Box>

        <Box
          w={{ base: "100%", lg: "70%" }}
          mx="auto"
          mt="20"
          // border="1px"
          // borderColor="white"
          p="2"
        >
          {/* Number line code start */}

          {/* <Divider
            orientation="horizontal"
            borderStyle="dotted"
            zIndex={1}
            borderWidth="2px"
            borderColor="tomato"
            width="0"
            height={{ base: "65vh" }}
            position="absolute"
            //  / top={"50px"}
            bottom={3}
            left="48%"
          /> */}

          {/* Number line code end */}

          {/* ----------- 1 ----------- */}
          {list.map((item, i) => (
            <Stack
              px="8"
              direction={{
                base: "column",
                md: "row",
                lg: i % 2 !== 0 ? "row" : "row-reverse",
              }}
              align="center"
              justify="space-between"
              mt={{ base: 2, md: 10 }}
              gap={6}
            >
              <Box w={{ base: "full", md: "70%" }} data-aos="fade-up">
                <Image src={item.img} alt="service" />
              </Box>
              <Box display={{ base: "none", lg: "block" }} data-aos="fade-up">
                <Box
                  border="1px"
                  borderWidth="6px"
                  borderColor="#778BFF"
                  color="white"
                  w="20"
                  h="20"
                  rounded="full"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  fontWeight="bold"
                  fontSize="4xl"
                  bg="#060B27"
                >
                  {i + 1}
                </Box>
              </Box>
              <Box my="2" w={{ base: "100%", lg: "40%" }}>
                <Text
                  color="white"
                  fontWeight="bold"
                  fontSize={{ base: "2xl" }}
                  data-aos="fade-up"
                >
                  {item.title}
                </Text>
                <Text color="gray.600" data-aos="fade-up">
                  {item.desc}
                </Text>
              </Box>
            </Stack>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
