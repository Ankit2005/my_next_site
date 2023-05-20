import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import { Man } from "../assets/img";

import { seo, data } from "config";
import { motion } from "framer-motion";
import { textVariant } from "src/utils/motion";

const Home = () => {
  const color = useColorModeValue("red", "blue");

  const isOdd = (num) => num % 2;

  const title = "Home";
  const description = seo.description;

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={seo.canonical}
        openGraph={{
          title,
          description,
          images: [
            {
              url: `${seo.canonical}bighead.svg`,
              width: "350px",
              height: "350px",
              alt: "avatar bigheads",
            },
          ],
        }}
      />
      <Box
        as="section"
        d="flex"
        alignItems="center"
        justifyContent={{ base: "space-between" }}
        flexDir="column"
        textAlign={{ base: "center", lg: "left" }}
        py="4"
      >
        <Box
          d={{ lg: "flex" }}
          justifyContent={{ lg: "center" }}
          alignItems={{ lg: "center" }}
          flexDir={{ lg: "row-reverse" }}
          w="100%"
        >
          <Box
            as={motion.div}
            {...textVariant("0.5")}
            pl={{ lg: 1 == 1 && "10" }}
            pr={{ lg: 1 == 0 && "10" }}
          >
            <NextImage
              src={Man}
              width="600"
              height="600"
              alt={"man"}
              placeholder="blur"
              blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
            />
          </Box>

          <Box>
            <Box
              as={motion.div}
              onScroll={() => {
                motion.div.play();
              }}
              {...textVariant("0.5")}
            >
              <Text
                as={motion.p}
                {...textVariant("0.5")}
                letterSpacing={9}
                color="#878787"
              >
                WE SERVE👇
              </Text>
              <Text
                as={motion.p}
                {...textVariant("0.7")}
                color="offWhiteText"
                fontSize={{ base: 31, sm: 35, md: 48, lg: 44, xl: 56 }}
                fontWeight={700}
              >
                Research & Strategy
              </Text>
              <Text
                as={motion.p}
                {...textVariant("0.9")}
                className="out-line-text"
                fontSize={{ base: 31, sm: 35, md: 48, lg: 32, xl: 56 }}
                fontWeight={700}
              >
                UI/UX Design
              </Text>
              <Text
                as={motion.p}
                {...textVariant("1")}
                color="offWhiteText"
                fontSize={{ base: 31, sm: 35, md: 48, lg: 32, xl: 56 }}
                fontWeight={700}
              >
                Web Development
              </Text>
              <Text
                as={motion.p}
                {...textVariant("1.1")}
                className="out-line-text"
                fontSize={{ base: 31, sm: 35, md: 48, lg: 32, xl: 56 }}
                fontWeight={700}
              >
                Mobile Development
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
