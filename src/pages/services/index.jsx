import {
  SimpleGrid,
  Stack,
  Heading,
  Text,
  StackDivider,
  Flex,
  Image,
  Icon,
  useColorModeValue,
  Container,
  useBreakpointValue,
  Box,
  Button,
  VStack,
  UnorderedList,
  ListItem,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  WrapItem,
  Center,
  Wrap,
} from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { textVariant } from "src/utils/motion";
import {
  MdArrowCircleRight,
  MdArrowRight,
  MdArrowRightAlt,
} from "react-icons/md";

const technologies = {
  web: {
    front_end: [
      {
        technologie: "AngularJs Development",
        img: "/img/angular.svg",
      },
      {
        technologie: "ReactJs Development",
        img: "/img/react.svg",
      },
      {
        technologie: "VueJs Development",
        img: "/img/vue.svg",
      },
      {
        technologie: "JavaScript Development",
        img: "/img/js.svg",
      },
    ],
    back_end: [
      {
        technologie: "ios",
        img: "/img/apple.svg",
      },
    ],
    design: [
      {
        technologie: "Figma",
        img: "/img/figma.svg",
      },
    ],
  },
  mobile_app: {
    development: [
      {
        technologie: "iOS App Development",
        img: "/img/apple.svg",
      },
      {
        technologie: "Android App Development",
        img: "/img/android.svg",
      },
      {
        technologie: "Flutter App Development",
        img: "/img/flutter.svg",
      },
      {
        technologie: "React Native App Development",
        img: "/img/react.svg",
      },
    ],
    design: [
      {
        technologie: "Figma",
        img: "/img/figma.svg",
      },
      {
        technologie: "XD",
        img: "/img/xd.svg",
      },
    ],
  },
};

function Service() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <Box py={4}>
      <Stack
        height={{ base: "60vh", md: "78vh" }}
        direction={{ base: "column", md: "row" }}
      >
        <Flex p={8} flex={1} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                color={"#99EFD0"}
                // mt="4"data-aos="fade-up"  data-aos-duration="1500"  {...textVariant("0.7")}
                fontSize={{ base: 27, sm: 45, md: 40, lg: 52, xl: 65 }}
                fontWeight={700}
              >
                Many reasons to get up and start to get back in the business
              </Text>
            </Heading>
            <Text
              data-aos="fade-up"
              data-aos-duration="1500"
              fontSize={{ base: "md", lg: "xl" }}
              color={"gray.500"}
            >
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                data-aos="fade-up"
                data-aos-duration="1500"
                rounded={"md"}
                color="white"
                bg={"secondary"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Learn More
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1} p="4">
          <Image
            data-aos="fade-up"
            data-aos-duration="1500"
            alt={"Login Image"}
            size="xl"
            height={{ base: 400, sm: 550, md: 350, lg: 600 }}
            // objectFit={"cover"}
            src={"/img/man_run.svg"}
          />
        </Flex>
      </Stack>

      {/* Start card */}
      <Box px={{ base: 4, md: 20 }}>
        {/* ------------- First card ------------- */}
        <Box
          data-aos="fade-up"
          data-aos-duration="1500"
          borderRadius={14}
          bgGradient="linear(to-r, #1D2671, #C33764)"
          p={{ base: 4, sm: 10 }}
          pos="relative"
        >
          <Box display={{ base: "column", md: "flex" }} alignItems="center">
            {/* ---------- 1 ---------- */}
            <Box w={{ base: "100%", lg: "40%" }} px="4">
              <Box display={{ base: "flex" }} alignItems="center" gap="8">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  src="/img/figma.svg"
                  alt="figma"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  src="/img/daymand.svg"
                  alt="daymand"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  src="/img/xd.svg"
                  alt="xd"
                />
              </Box>
              <Text
                data-aos="fade-up"
                data-aos-duration="1500"
                color="white"
                fontWeight="bold"
                fontSize={32}
                my="6"
              >
                UI/UX Design
              </Text>
              <Box>
                <UnorderedList
                  // styleType="unset"
                  color="white"
                  fontSize={24}
                  spacing="4"
                >
                  <ListItem data-aos="fade-up" data-aos-duration="1500">
                    Interface Design
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="1500">
                    Interaction Design
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="1500">
                    Research
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="1500">
                    Prototyping
                  </ListItem>
                </UnorderedList>
                <Box px="1" py="4">
                  <Box
                    w="10"
                    h="10"
                    border="1px"
                    borderColor="white"
                    rounded="full"
                    textAlign="center"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <MdArrowRightAlt fontSize={24} color="white" />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* ---------- 2 ---------- */}
            <Box w={{ base: "100%", lg: "40%" }} mt={{ base: 10, md: 0 }}>
              <Box display={{ base: "flex" }} alignItems="center" gap="8">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  src="/img/ai.svg"
                  alt="ai"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  src="/img/ps.svg"
                  alt="ps"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="1500"
                  src="/img/ae.svg"
                  alt="ae"
                />
              </Box>
              <Text
                data-aos="fade-up"
                data-aos-duration="1500"
                color="white"
                fontWeight="bold"
                fontSize={32}
                my="6"
              >
                Graphic Design
              </Text>
              <Box>
                <UnorderedList
                  // styleType="unset"
                  color="white"
                  fontSize={24}
                  spacing="4"
                >
                  <ListItem data-aos="fade-up" data-aos-duration="1500">
                    Illustration Design
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="1500">
                    Motion Graphics & Animations
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="1500">
                    Icon Design
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="1500">
                    Logo Design
                  </ListItem>
                </UnorderedList>
                <Box px="1" py="4">
                  <Box
                    w="10"
                    h="10"
                    border="1px"
                    borderColor="white"
                    rounded="full"
                    textAlign="center"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    data-aos="fade-up"
                    data-aos-duration="1500"
                  >
                    <MdArrowRightAlt fontSize={24} color="white" />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* ---------- corner image ---------- */}

            <Image
              display={{ base: "none", md: "block" }}
              pos="absolute"
              right={0}
              bottom="0"
              height={250}
              src="/img/ui-ux.svg"
              size="300"
              data-aos="fade-up"
              data-aos-duration="1500"
              // boxSize={300}
              alt="ui-ux"
            />
          </Box>
        </Box>
        {/* ------------- Second card ------------- */}
        <Box
          data-aos="fade-up"
          my="8"
          data-aos-duration="1500"
          borderRadius={14}
          bgGradient="linear(to-r, #185A9D, #43CEA2)"
          p="10"
          pos="relative"
        >
          <Box display={{ base: "column" }} alignItems="center">
            <Text color="white" fontWeight="bold" fontSize="xl">
              Web
            </Text>
            {/* ---------- TAB ---------- */}
            <Box w={{ base: "100%", lg: "100%" }} px="0">
              <Box>
                <Tabs
                  outline="none"
                  mt="6"
                  position="relative"
                  variant="unstyled"
                >
                  <TabList
                    color="#f7f7f773"
                    //  borderTop="1px"
                    // borderBottom="1px"
                    borderColor="#f7f7f72b"
                    borderTopWidth="thin"
                    borderBottomWidth="thin"
                  >
                    <Tab _selected={{ color: "white" }}>Front-end</Tab>
                    <Tab _selected={{ color: "white" }}>Back-end</Tab>
                    <Tab _selected={{ color: "white" }}>Design</Tab>
                  </TabList>
                  <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    color="red"
                    // bg="blue.500"
                  />
                  <TabPanels>
                    <TabPanel>
                      <Box mt="8">
                        <Wrap justify="start" spacing={0}>
                          <GenerateTab list={technologies?.web?.front_end} />
                        </Wrap>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <Box mt="8">
                        <Wrap justify="start" spacing={0}>
                          <GenerateTab list={technologies?.web?.back_end} />
                        </Wrap>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <Box mt="8">
                        <Wrap justify="start" spacing={0}>
                          <GenerateTab list={technologies?.web?.design} />
                        </Wrap>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>

            {/* ---------- corner image ---------- */}

            <Image
              display={{ base: "none", md: "block" }}
              pos="absolute"
              right={0}
              bottom="0"
              height={250}
              src="/img/man_vr.svg"
              size="300"
              data-aos="fade-up"
              data-aos-duration="1500"
              // boxSize={300}
              alt="ui-ux"
            />
          </Box>
        </Box>
        {/* ------------- Third card ------------- */}
        <Box
          data-aos="fade-up"
          my="8"
          data-aos-duration="1500"
          borderRadius={14}
          bgGradient="linear(to-r, #2D9EE0, #2F80ED, #091E3A)"
          p="10"
          pos="relative"
        >
          <Box display={{ base: "column" }} alignItems="center">
            <Text color="white" fontWeight="bold" fontSize="xl">
              Mobile App
            </Text>
            {/* ---------- TAB ---------- */}
            <Box w={{ base: "100%", lg: "100%" }} px="0">
              <Box>
                <Tabs
                  outline="none"
                  mt="6"
                  position="relative"
                  variant="unstyled"
                >
                  <TabList
                    color="#f7f7f773"
                    //  borderTop="1px"
                    // borderBottom="1px"
                    borderColor="#f7f7f72b"
                    borderTopWidth="thin"
                    borderBottomWidth="thin"
                  >
                    <Tab _selected={{ color: "white" }}>Development</Tab>
                    <Tab _selected={{ color: "white" }}>Design</Tab>
                  </TabList>
                  <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    color="red"
                    // bg="blue.500"
                  />
                  <TabPanels>
                    <TabPanel>
                      <Box mt="8">
                        <Wrap justify="start" spacing={0}>
                          <GenerateTab
                            list={technologies?.mobile_app?.development}
                          />
                        </Wrap>
                      </Box>
                    </TabPanel>
                    <TabPanel>
                      <Box mt="8">
                        <Wrap justify="start" spacing={0}>
                          <GenerateTab
                            list={technologies?.mobile_app?.design}
                          />
                        </Wrap>
                      </Box>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Box>
            </Box>

            {/* ---------- corner image ---------- */}

            <Image
              display={{ base: "none", md: "block" }}
              pos="absolute"
              right={0}
              bottom="0"
              height={250}
              src="/img/man_vr.svg"
              size="300"
              data-aos="fade-up"
              data-aos-duration="1500"
              // boxSize={300}
              alt="ui-ux"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Service;

const RoundedArrow = () => (
  <Box
    w="10"
    h="10"
    border="1px"
    borderColor="white"
    rounded="full"
    textAlign="center"
    display="flex"
    justifyContent="center"
    alignItems="center"
    data-aos="fade-up"
    data-aos-duration="1500"
  >
    <MdArrowRightAlt fontSize={24} color="white" />
  </Box>
);

const GenerateTab = ({ list }) =>
  list.map((tech, i) => (
    <WrapItem key={i} p="0">
      {/* <Center> */}
      <Box
        mt={{ base: 18, sm: 0 }}
        data-aos="fade-up"
        textAlign="center"
        w="200px"
      >
        <VStack spacing={4} align="start" justify="space-around" height={210}>
          <Box display="flex" justifyContent="center">
            <Image src={tech.img} />
          </Box>
          <Box textAlign="left" w={"125px"} color="white" my="2">
            {tech.technologie}
          </Box>
          <Box display="flex" justifyContent="center">
            <RoundedArrow />
          </Box>
        </VStack>
      </Box>
      {/* </Center> */}
    </WrapItem>
  ));
