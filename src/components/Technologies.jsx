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
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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

  useEffect(() => {
    AOS.init({
      // Customize AOS options here
    });
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
          data-aos="fade-up"
        >
          <Box>
            <Box mb={{ base: 0 }} mt="14">
              <Text
                data-aos="fade-up"
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
          <Tabs variant="unstyled">
            <TabList display={"flex"} gap="3" justifyContent="center">
              {[
                "Mobile",
                "Front End",
                // "Database",
                // "Backend",
                // "Database",
                "CMS",
                // "Infra and DevOps",
              ].map((tab, i) => (
                <Tab
                  key={i}
                  data-aos="fade-up"
                  _selected={{ borderBottom: "1px", color: "white" }}
                  color="gray.600"
                  _focus={{}}
                >
                  {tab}
                </Tab>
              ))}
            </TabList>

            <TabPanels display={"flex"} justifyContent="center" py="10">
              <TabPanel width={{ base: "90%" }}>
                <Wrap justify="center" spacing={0}>
                  <GeneratedTab list={technologies?.mobile} />
                </Wrap>
              </TabPanel>
              <TabPanel>
                <Wrap justify="center" spacing={0}>
                  <GeneratedTab list={technologies?.front_end} />
                </Wrap>
              </TabPanel>
              <TabPanel>
                <Wrap justify="center" spacing={0}>
                  <GeneratedTab list={technologies?.cms} />
                </Wrap>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}

const GeneratedTab = ({ list }) =>
  list.map((tech, i) => {
    return (
      <WrapItem key={i} p="5" border="1px" borderColor="#47434333">
        <Center>
          <Box
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
            textAlign="center"
            w="140px"
          >
            <Box display="flex" justifyContent="center">
              <Image src={tech.img} />
            </Box>
            <Box color="white" my="4">
              {tech.technologie}
            </Box>
          </Box>
        </Center>
      </WrapItem>
    );
  });
