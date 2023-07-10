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

const companyHistory = [
  {
    date: "2010-2013",
    title: "Company Founded",
    cmpName: "TCS",
    description:
      "The company expanded its operations to new markets and achieved significant growth.",
    // image: "https://source.unsplash.com/random/?Cryptocurrency&",
    image:
      "https://assets.upstox.com/content/dam/aem-content-integration/assets/images/logos/TCS/TCS.png",
  },
  {
    date: "2011-2013",
    title: "Expansion to New Markets",
    cmpName: "Netflix",
    description:
      "The company expanded its operations to new markets and achieved significant growth.",
    image:
      "data:image/png;base64,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",
  },
  {
    date: "2013-2015",
    title: "Acquisition of Competitor",
    cmpName: "Paytm",
    description:
      "The company acquired one of its major competitors, strengthening its market.",
    image:
      "data:image/png;base64,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",
  },
];

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);
  return (
    <Container bg="bgPrimary" maxW={"7xl"}>
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
              boxSize="550"
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
        mx="6"
        pos="relative"
      >
        <Box display="flex" justifyContent="center">
          <Text
            textAlign="center"
            color="white"
            fontSize={{ base: "5xl" }}
            fontWeight="bold"
            w={{ base: "2xl" }}
          >
            A simple, yet powerful and efficient process
          </Text>
        </Box>

        <Box
          w={{ base: "70%" }}
          mx="auto"
          mt="20"
          // border="1px"
          // borderColor="white"
          p="2"
        >
          {/* Number line code start */}

          <Divider
            orientation="horizontal"
            borderStyle="dotted"
            borderWidth="1px"
            borderColor="tomato"
            width="0"
            height="90vh"
            position="absolute"
            left="48%"
          />

          {/* Number line code end */}

          {/* ----------- 1 ----------- */}
          <Stack
            direction={{ base: "row" }}
            align="center"
            justify="space-between"
          >
            <Box>
              <Image src="/img/service_page_screen.svg" alt="screen_page" />
            </Box>
            <Box zIndex={2}>
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
              >
                1
              </Box>
            </Box>
            <Box w={{ base: "40%" }}>
              <Text color="white" fontWeight="bold" fontSize={{ base: "2xl" }}>
                Marketing Plan
              </Text>
              <Text color="gray.600">
                consectetur amet dolor sit comeneer ilremsilom dolce issilm
                acalrm
              </Text>
            </Box>
          </Stack>
          {/* ----------- 2 ----------- */}

          <Stack
            direction={{ base: "row-reverse" }}
            align="center"
            justify="space-between"
          >
            <Box>
              <Image src="/img/service_page_screen.svg" alt="screen_page" />
            </Box>
            <Box w={{ base: "40%" }}>
              <Text color="white" fontWeight="bold" fontSize={{ base: "2xl" }}>
                Marketing Plan
              </Text>
              <Text color="gray.600">
                consectetur amet dolor sit comeneer ilremsilom dolce issilm
                acalrm
              </Text>
            </Box>
          </Stack>
          {/* ----------- 3 ----------- */}

          <Stack
            direction={{ base: "row" }}
            align="center"
            justify="space-between"
          >
            <Box>
              <Image src="/img/service_page_screen.svg" alt="screen_page" />
            </Box>
            <Box w={{ base: "40%" }}>
              <Text color="white" fontWeight="bold" fontSize={{ base: "2xl" }}>
                Marketing Plan
              </Text>
              <Text color="gray.600">
                consectetur amet dolor sit comeneer ilremsilom dolce issilm
                acalrm
              </Text>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
