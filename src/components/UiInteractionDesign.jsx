import {
  Box,
  Center,
  Image,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
  Stack,
} from "@chakra-ui/react";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useInView } from "react-intersection-observer";
import {
  slideIn,
  textVariant,
  textSlideVariant,
  cardVariant,
  test,
} from "src/utils/motion";

const UiInteractionDesign = () => {
  const list = [
    {
      title: "Hire Dedicated Developers",
      img: "/img/timer.svg",
      desc: `Create your own team of
      developers for your software
      development project on short term,
      long term or permanent basis with
      guaranteed project delivery at
      affordable prices.`,
    },
    {
      title: "Mobile Apps",
      img: "/img/puzzle.svg",
      desc: `We build intuitive and engaging
      Android, iOS and cross-platform
      apps for businesses, consumers
      and enterprises that end users love
      and adapt to them very quickly.`,
    },
    {
      title: "UI/UX Design",
      img: "/img/color.svg",
      desc: `Starting from concept, information
      architecture, visual identity and
      UI/UX design, our team delivers
      dazzling experiences for maximum
      user engagement.`,
    },
    {
      title: "Web Development",
      img: "/img/search.svg",
      desc: `Our web developers create custom
      web and web application solutions.
      We deliver web presence to help
      you grow your business using the
      best web technologies.`,
    },
  ];

  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger the animation once
  });

  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
  }, []);

  return (
    <Box p="6">
      <Box
        data-aos="fade-up"
        mt="16"
        mx="10"
        textAlign="center"
        fontSize="6xl"
        color={"#878787"}
      >
        I’m a designer specialising in{" "}
        <Text data-aos="fade-up" as="span" fontWeight="bold" color="white">
          UI/UX
        </Text>{" "}
        and{" "}
        <Text data-aos="fade-up" as="span" fontWeight="bold" color="white">
          Interaction Design
        </Text>
      </Box>

      <Box p="4" display="flex" justifyContent="center" w="full">
        <Image
          // objectFit="cover"
          data-aos="fade-up"
          boxSize={1200}
          height={420}
          src="/img/ui-ux.svg"
          alt="Dan Abramov"
        />
      </Box>

      <Box mt="28">
        <Wrap ref={ref} spacing="28px" justify="center">
          {list.map((item, i) => (
            <WrapItem
              data-aos="fade-up"
              key={i}
              borderRadius={16}
              bg="#121839"
              width={{
                base: "100%",
                sm: "100%",
                md: "40%",
                lg: "344px",
                xl: "22%",
              }}
              px={[3, 5]}
            >
              <Center py={2}>
                <Box
                  overscroll={"auto"}
                  //maxW={"445px"}
                  // border="1px"
                  // borderColor="primaryBorder"
                  w={"full"}
                  bg={useColorModeValue(
                    "bgGradientPrimary",
                    "bgGradientPrimary"
                  )}
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
                  >
                    <Image
                      data-aos="fade-up"
                      borderRadius={10}
                      src={item.img}
                      boxSize="100px"
                      objectFit="cover"
                      alt={item.title}
                    />
                  </Box>

                  <Stack mt={6} direction={"row"} spacing={2} align={"center"}>
                    <Stack textAlign="left" direction={"column"} spacing={3}>
                      <Text
                        data-aos="fade-up"
                        fontSize={24}
                        {...textVariant("0.7")}
                        fontWeight={600}
                        color="white"
                      >
                        {item.title}
                      </Text>
                      <Text data-aos="fade-up" color="white" fontSize={"md"}>
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
  );
};

export default UiInteractionDesign;
