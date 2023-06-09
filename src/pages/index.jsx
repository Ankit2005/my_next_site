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
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import DevelopmentProcess from "@/components/DevelopmentProcess";
import ContactUs from "@/components/ContactUs";
import Technologies from "@/components/Technologies";
import SectorWork from "@/components/SectorWork";
import BestOfBest from "@/components/BestOfBest";
import UiInteractionDesign from "@/components/UiInteractionDesign";
import Testimonials from "@/components/Testimonials";
import LatestNewsArticles from "@/components/LatestNewsArticles";

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
      <Hero />
      <SectorWork />
      {/* <BestOfBest /> */}
      <Work />
      <UiInteractionDesign />
      <DevelopmentProcess />
      <Technologies />
      <Testimonials />
      <LatestNewsArticles />
      <ContactUs />
    </>
  );
};

export default Home;
