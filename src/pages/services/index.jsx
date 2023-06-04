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
} from "@chakra-ui/react";
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const imgBaseUrl = "https://source.unsplash.com/random/?Tech&";

const rows = [
  {
    heading: "A digital Product design agency",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    features: [
      {
        icon: <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />,
        iconBg: "yellow.100",
        text: "Business Planning",
      },
      {
        icon: <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />,
        iconBg: "green.100",
        text: "Fully Responsive",
      },
      {
        icon: <Icon as={IoSearchSharp} color={"purple.300"} w={5} h={5} />,
        iconBg: "purple.500",
        text: "S E O",
      },
    ],
    imageUrl: "/img/img_test.jpg",
  },
  {
    heading: "A digital Product design agency",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    features: [
      {
        icon: <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />,
        iconBg: "yellow.100",
        text: "Business Planning",
      },
      {
        icon: <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />,
        iconBg: "green.100",
        text: "Fully Responsive",
      },
      {
        icon: <Icon as={IoSearchSharp} color={"purple.300"} w={5} h={5} />,
        iconBg: "purple.500",
        text: "S E O",
      },
    ],

    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80",
  },
  {
    heading: "A digital Product design agency",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    features: [
      {
        icon: <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />,
        iconBg: "yellow.100",
        text: "Business Planning",
      },
      {
        icon: <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />,
        iconBg: "green.100",
        text: "Fully Responsive",
      },
      {
        icon: <Icon as={IoSearchSharp} color={"purple.300"} w={5} h={5} />,
        iconBg: "purple.500",
        text: "S E O",
      },
    ],

    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80",
  },
  {
    heading: "A digital Product design agency",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    features: [
      {
        icon: <Icon as={IoAnalyticsSharp} color={"yellow.500"} w={5} h={5} />,
        iconBg: "yellow.100",
        text: "Business Planning",
      },
      {
        icon: <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />,
        iconBg: "green.100",
        text: "Fully Responsive",
      },
      {
        icon: <Icon as={IoSearchSharp} color={"purple.300"} w={5} h={5} />,
        iconBg: "purple.500",
        text: "S E O",
      },
    ],

    imageUrl:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2062&q=80",
  },
];

function Service() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid ref={ref} columns={{ base: 1 }} spacing={10}>
        {rows.map((row, index) => (
          <Stack
            key={index}
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.5, duration: 1.2 }}
            // width={{ base: "100%", md: "40%", lg: "30%" }}
            variants={{
              visible: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
              hidden: { opacity: inView ? 1 : 0, scale: inView ? 1 : 0 },
            }}
            spacing={4}
            p="5"
            //  w="70%"
            direction={{
              base: "column",
              md: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <Stack
              spacing={4}
              divider={<StackDivider borderColor={"#718096"} />}
            >
              <Heading color="white">{row.heading}</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                {row.text}
              </Text>
              {row.features.map((feature, featureIndex) => (
                <Feature
                  key={featureIndex}
                  icon={feature.icon}
                  iconBg={feature.iconBg}
                  text={feature.text}
                  color="white"
                />
              ))}
            </Stack>

            <Flex
              overflow="hidden"
              width={{ base: "100%", md: "100%", lg: "60%" }}
            >
              <Image
                transform="scale(1.0)"
                src={`${row.imageUrl}`}
                alt="some text"
                objectFit="cover"
                rounded="lg"
                // width="80%"
                transition="0.3s ease-in-out"
                _hover={{
                  transform: "scale(1.05)",
                }}
              />
            </Flex>
          </Stack>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Service;

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text color={iconBg} fontWeight={600}>
        {text}
      </Text>
    </Stack>
  );
};
