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

export default function Hero() {
  return (
    <Box
      as="section"
      d="flex"
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      flexDir="column"
      textAlign={{ base: "center", lg: "left" }}
      py={{ base: 20, md: 24 }}
      px={[4, 6, 10, 14, 20]}
    >
      <Box
        d={{ lg: "flex" }}
        justifyContent={{ lg: "center" }}
        alignItems={{ lg: "center" }}
        flexDir={{ lg: "row-reverse" }}
        textAlign="center"
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
              fontSize={{ base: 27, sm: 35, md: 48, lg: 44, xl: 56 }}
              fontWeight={700}
            >
              Research & Strategy
            </Text>
            <Text
              as={motion.p}
              {...textVariant("0.9")}
              className="out-line-text"
              fontSize={{ base: 27, sm: 35, md: 48, lg: 32, xl: 56 }}
              fontWeight={700}
            >
              UI/UX Design
            </Text>
            <Text
              as={motion.p}
              {...textVariant("1")}
              color="offWhiteText"
              fontSize={{ base: 27, sm: 35, md: 48, lg: 32, xl: 56 }}
              fontWeight={700}
            >
              Web Development
            </Text>
            <Text
              as={motion.p}
              {...textVariant("1.1")}
              className="out-line-text"
              fontSize={{ base: 27, sm: 35, md: 48, lg: 32, xl: 56 }}
              fontWeight={700}
            >
              Mobile Development
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}