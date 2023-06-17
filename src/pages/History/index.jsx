import React, { useEffect } from "react";

import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
// import {
//   VerticalTimeline,
//   VerticalTimelineElement,
// } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { textVariant } from "src/utils/motion";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const companyHistory_two = [
  {
    date: "2014-2016",
    title: "Company Founded",
    cmpName: "Google",
    description:
      "The company expanded its operations to new markets and achieved significant growth.",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    date: "2015-2016",
    title: "Expansion to New Markets",
    cmpName: "whatsApp",
    description:
      "The company expanded its operations to new markets and achieved significant growth.",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    date: "2019-2023",
    title: "Acquisition of Competitor",
    cmpName: "Zomato",
    description:
      "The company acquired one of its major competitors, strengthening its market.",
    image:
      "data:image/png;base64,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",
  },
];

const HistoryPage = () => {
  return (
    <Box bg="bgPrimary">
      <Container maxW={"7xl"} py={6} as={Stack}>
        <Box textAlign="center">
          <Heading color="white" my="6" as="h2" size="3xl" noOfLines={1}>
            History
          </Heading>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {companyHistory.map((item, i) => (
            <Testimonial key={i}>
              <TestimonialContent>
                <TestimonialHeading>{item.title}</TestimonialHeading>
                <TestimonialText>{item.description}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={item.image}
                name={item.cmpName}
                title={item.date}
              />
            </Testimonial>
          ))}
        </Stack>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {companyHistory_two.map((item, i) => (
            <Testimonial key={i}>
              <TestimonialContent>
                <TestimonialHeading>{item.title}</TestimonialHeading>
                <TestimonialText>{item.description}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={item.image}
                name={item.cmpName}
                title={item.date}
              />
            </Testimonial>
          ))}
        </Stack>
      </Container>

      <Container maxW={"7xl"} py={6} as={Stack}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {companyHistory_two.map((item, i) => (
            <Testimonial key={i}>
              <TestimonialContent>
                <TestimonialHeading>{item.title}</TestimonialHeading>
                <TestimonialText>{item.description}</TestimonialText>
              </TestimonialContent>
              <TestimonialAvatar
                src={item.image}
                name={item.cmpName}
                title={item.date}
              />
            </Testimonial>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default HistoryPage;

const Testimonial = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  return (
    <Box
      ref={ref}
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 1 * 0.5, duration: 1.2 }}
      // width={{ base: "100%", md: "40%", lg: "30%" }} test
      variants={{
        visible: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
        hidden: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
      }}
    >
      {children}
    </Box>
  );
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: "white",
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      bg="#cfbee8fc"
    >
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text textAlign={"center"} color="gray.800" fontSize={"sm"}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex mb="9" align={"center"} mt={8} direction={"column"}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={"center"}>
        <Text color={"white"} fontWeight={600}>
          {name}
        </Text>
        <Text fontSize={"sm"} color="gray.600">
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};
