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
      <Stack direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} justify={"center"}>
          <Stack spacing={6} w={"full"} maxW={"lg"}>
            <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
              <Text
                color={"#99EFD0"}
                // mt="4"data-aos="fade-up"  data-aos-duration="3000"  {...textVariant("0.7")}
                fontSize={{ base: 27, sm: 35, md: 48, lg: 30, xl: 56 }}
                fontWeight={700}
              >
                Many reasons to get up and start to get back in the business
              </Text>
            </Heading>
            <Text
              data-aos="fade-up"
              data-aos-duration="3000"
              fontSize={{ base: "md", lg: "lg" }}
              color={"gray.500"}
            >
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </Text>
            <Stack direction={{ base: "column", md: "row" }} spacing={4}>
              <Button
                data-aos="fade-up"
                data-aos-duration="3000"
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
            data-aos-duration="3000"
            alt={"Login Image"}
            // objectFit={"cover"}
            src={"/img/man_run.svg"}
          />
        </Flex>
      </Stack>

      {/* Start card */}
      <Box px="20">
        <Box
          data-aos="fade-up"
          data-aos-duration="3000"
          borderRadius={14}
          bgGradient="linear(to-r, #1D2671, #C33764)"
          p="10"
          pos="relative"
        >
          <Box display={{ base: "column", md: "flex" }} alignItems="center">
            {/* ---------- 1 ---------- */}
            <Box w={{ base: "100%", lg: "40%" }} px="4">
              <Box display={{ base: "flex" }} alignItems="center" gap="8">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  src="/img/figma.svg"
                  alt="figma"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  src="/img/daymand.svg"
                  alt="daymand"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  src="/img/xd.svg"
                  alt="xd"
                />
              </Box>
              <Text
                data-aos="fade-up"
                data-aos-duration="3000"
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
                  <ListItem data-aos="fade-up" data-aos-duration="3000">
                    Interface Design
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="3000">
                    Interaction Design
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="3000">
                    Research
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="3000">
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
                    data-aos-duration="3000"
                  >
                    <MdArrowRightAlt fontSize={24} color="white" />
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* ---------- 2 ---------- */}
            <Box w={{ base: "100%", lg: "40%" }}>
              <Box display={{ base: "flex" }} alignItems="center" gap="8">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  src="/img/ai.svg"
                  alt="ai"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  src="/img/ps.svg"
                  alt="ps"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  src="/img/ae.svg"
                  alt="ae"
                />
              </Box>
              <Text
                data-aos="fade-up"
                data-aos-duration="3000"
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
                  <ListItem data-aos="fade-up" data-aos-duration="3000">
                    Illustration Design
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="3000">
                    Motion Graphics & Animations
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="3000">
                    Icon Design
                  </ListItem>
                  <ListItem data-aos="fade-up" data-aos-duration="3000">
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
                    data-aos-duration="3000"
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
              data-aos-duration="3000"
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
