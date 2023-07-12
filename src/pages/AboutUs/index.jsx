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
  Avatar,
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
    img: "/img/service_page_sec.svg",
  },
  {
    title: "Growth & Scale",
    desc: "consectetur amet dolor sit comeneer ilremsilom dolce issilm acalrm ",
    // image: "https://source.unsplash.com/random/?Cryptocurrency&",
    img: "/img/service_page_third.svg",
  },
];

const arr = [
  {
    tag_line: "iFornelli",
    title: `Learn to cook like a pro
    with MarsterChef Italia
    winner Melvin Bonello`,
    title_two: `“This is pretty amazing. It looks great. Thank you
    everyone for creating such excellent interface”`,
    name: "Arturo Dell'Eva",
    desgination: "Founder",
    bgGradient: "linear(to-r, #E89B35,  #FFCF65)",
    img: "/img/mobile.svg",
  },
  {
    tag_line: "Shopnowtofund",
    title: `Ecommerce + Crowd
    Funding Campaigns for
    a Cause`,
    title_two: `“"It's not just like any other online marketplace you
    already use, and IndiaNIC made it happen for us"”`,
    name: "Shehan & Shenali Rajaratnam",
    desgination: "Founder",
    bgGradient: "linear(to-r, #079E50,  #07BF60)",
    img: "/img/website.svg",
  },
  {
    tag_line: "Minimisecost",
    title: `Reverse bidding
    platform for all things
    electronics`,
    title_two: `"It’s the skill and expertise of IndiaNIC that truly
    shines through this very complicated project"`,
    name: "Praveen Sharma",
    desgination: "Founder",
    bgGradient: "linear(to-r, #44A7C0,  #308CA5 )",
    img: "/img/website_two.svg",
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
            fontSize={{ base: "2xl", sm: "2xl", md: "5xl" }}
            px={{ base: 2, sm: 0 }}
            fontWeight="bold"
            w={{ base: "xl", md: "2xl" }}
            data-aos="fade-up"
          >
            A simple, yet powerful and efficient process
          </Text>
        </Box>

        <Box w={{ base: "100%", lg: "70%" }} mx="auto" mt="20" p="2">
          {/* ----------- 1 ----------- */}
          {list.map((item, i) => (
            <Stack
              px="8"
              direction={{
                base: "column",
                md: "row",
                lg: i % 2 === 0 ? "row" : "row-reverse",
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
      <Box mx={{ base: 2, md: 8 }}>
        {arr.map((item, ind) => (
          <Box
            my="14"
            px={{ base: 4, sm: 8, lg: 14 }}
            py={{ base: 4, sm: 4, lg: 0, xl: 0 }}
            key={ind}
            bgGradient={item.bgGradient}
            borderRadius="md"
          >
            <Box
              display={{ base: "column", md: "flex" }}
              //  alignItems="center"
              justifyContent={{ base: "space-between" }}
              gap="4"
              pos="relative"
              bgImage={{ base: "", lg: `url(${item.img})` }} // Replace with the path to your image
              bgSize="auto" // Adjust the background size as needed (cover, contain, etc.)
              // bgPosition="center" // Adjust the background position as needed (center, top, left, etc.)
              bgRepeat="no-repeat" // Specify if the background should repeat (no-repeat, repeat, repeat-x, repeat-y)
              bgPos={{ base: "bottom right" }}
            >
              <Box w={{ base: "100%", lg: "50%" }}>
                <Text
                  py="8"
                  letterSpacing={2}
                  color="white"
                  fontWeight="bold"
                  fontSize={{ base: "2xl" }}
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  {" "}
                  {item.tag_line}{" "}
                </Text>

                <Box my="10">
                  <Text
                    color="white"
                    fontWeight="bold"
                    fontSize={{
                      base: "2xl",
                      sm: "32",
                      md: "46",
                      lg: "40",
                      xl: "48",
                    }}
                    fontWeigh="bold"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    {item.title}
                  </Text>
                </Box>
                <Box
                  bg="#ffffff30"
                  p="8"
                  borderRadius="md"
                  mb="14"
                  data-aos="fade-up"
                  data-aos-duration="1500"
                >
                  <Stack>
                    <Text
                      color="white"
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      {item.title_two}
                    </Text>
                  </Stack>
                  <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
                    <Avatar
                      src={
                        "https://avatars0.githubusercontent.com/u/1164541?v=4"
                      }
                      alt={"Author"}
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    />
                    <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                      <Text
                        color="white"
                        fontWeight={600}
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        {item.name}
                      </Text>
                      <Text
                        color={"white"}
                        fontWeight="light"
                        data-aos="fade-up"
                        data-aos-duration="1500"
                      >
                        {item.desgination}
                      </Text>
                    </Stack>
                  </Stack>
                </Box>
              </Box>

              {/* <Box
                w={{ base: "100%", sm: "50%" }}
                // pos="relative"
                height={80}
                // border="1px"
                // borderColor="white"
                // overflow="hidden"
              >
                <Image
                  src={item.img}
                  boxSize="lg"
                  pos="absolute"
                  bottom={{ base: -14 }}
                  // top={{ base: "28%" }}
                />
              </Box> */}
            </Box>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
