import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import NextImage from "next/image";
import { Block, Flawer, Man, Plant } from "../assets/img";

import { seo, data } from "config";
import { motion } from "framer-motion";
import { textVariant } from "src/utils/motion";
import AnimatedObject from "./AnimatedObject";
// import ThreeText from "./ThreeText";

export default function Hero() {
  return (
    <Box
      as="section"
      d="flex"
      alignItems="center"
      justifyContent={{ base: "space-between" }}
      flexDir="column"
      textAlign={{ base: "center", lg: "left" }}
      mb="50px"
      py={{ base: 20, md: 14 }}
      px={[4, 6, 10, 14, 20]}
    >
      <Box
        d={{ lg: "flex" }}
        justifyContent={{ lg: "center" }}
        alignItems={{ lg: "center" }}
        flexDir={{ lg: "row-reverse" }}
        textAlign="center"
        // border="1px"
        // borderColor={"white"}
        w="100%"
      >
        <Box
          as={motion.div}
          position="relative"
          {...textVariant("0.5")}
          pl={{ lg: 1 == 1 && "10" }}
          pr={{ lg: 1 == 0 && "10" }}
          //width="70%"
          //  height={"70vh"}
          // border={"1px"}
          // borderColor="white"
        >
          <Box position="absolute" top="2">
            <AnimatedObject
              img={Flawer}
              animate={{
                // scale: [1, 0, 1, 0, 1],
                //  scale: [0.8, 1, 1, 1, 1],
                // rotate: [0, 0, 270, 270, 0],
                y: ["0%", "20%", "0%"],
                rotate: [-1, 0, -10, 0],
                // borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            />
          </Box>
          <NextImage
            src={Man}
            width="600"
            height="600"
            alt={"man"}
            placeholder="blur"
            blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
          />
          {/* <ThreeText /> */}
          <Box position="absolute" top="42" right={0}>
            <AnimatedObject
              img={Block}
              animate={{
                y: ["0%", "-10%", "0%"],
                x: ["0%", "-10%", "0%"],
                rotate: [-1, 0, -10, 0],
              }}
            />
          </Box>
          <Box position="absolute" bottom={18} right={0}>
            <AnimatedObject
              img={Plant}
              animate={{
                scale: [2, 2],
                //  rotate: [0, 50, 270, 270, 0],
                y: ["0%", "-10%", "0%"],
              }}
            />
          </Box>
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
              fontSize={{ base: 27, sm: 35, md: 48, lg: 30, xl: 56 }}
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

// import {
//   Box,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { NextSeo } from "next-seo";
// import NextImage from "next/image";
// import { Man } from "../assets/img";

// import { seo, data } from "config";
// import { motion } from "framer-motion";
// import { textVariant } from "src/utils/motion";

// const Home = () => {
//   const color = useColorModeValue("red", "blue");

//   const isOdd = (num) => num % 2;

//   const title = "Home";
//   const description = seo.description;

//   return (
//     <>
//       <NextSeo
//         title={title}
//         description={description}
//         canonical={seo.canonical}
//         openGraph={{
//           title,
//           description,
//           images: [
//             {
//               url: `${seo.canonical}bighead.svg`,
//               width: "350px",
//               height: "350px",
//               alt: "avatar bigheads",
//             },
//           ],
//         }}
//       />
//       <Box
//         as="section"
//         d="flex"
//         alignItems="center"
//         justifyContent={{ base: "space-between" }}
//         flexDir="column"
//         textAlign={{ base: "center", lg: "left" }}
//         py="4"
//       >
//         <Box
//           d={{ lg: "flex" }}
//           justifyContent={{ lg: "center" }}
//           alignItems={{ lg: "center" }}
//           flexDir={{ lg: "row-reverse" }}
//           w="100%"
//         >
//           <Box
//             as={motion.div}
//             {...textVariant("0.5")}
//             pl={{ lg: 1 == 1 && "10" }}
//             pr={{ lg: 1 == 0 && "10" }}
//           >
//             <NextImage
//               src={Man}
//               width="600"
//               height="600"
//               alt={"man"}
//               placeholder="blur"
//               blurDataURL="L8LE.{~60000_3V@ITx^00t:V?-P"
//             />
//           </Box>

//           <Box>
//             {/* <Heading as="h1">{"item.title"}</Heading> */}
//             <Box
//               as={motion.div}
//               onScroll={() => {
//                 // This will animate the heading when the user scrolls
//                 motion.div.play();
//               }}
//               {...textVariant("0.5")}
//             >
//               <Text
//                 as={motion.p}
//                 {...textVariant("0.5")}
//                 letterSpacing={9}
//                 color="#878787"
//               >
//                 WE SERVE👇
//               </Text>
//               <Text
//                 as={motion.p}
//                 {...textVariant("0.7")}
//                 color="offWhiteText"
//                 fontSize="56"
//                 fontWeight={700}
//               >
//                 Research & Strategy
//               </Text>
//               <Text
//                 as={motion.p}
//                 {...textVariant("0.9")}
//                 className="out-line-text"
//                 fontSize="56"
//                 fontWeight={700}
//               >
//                 UI/UX Design
//               </Text>
//               <Text
//                 as={motion.p}
//                 {...textVariant("1")}
//                 color="offWhiteText"
//                 fontSize="56"
//                 fontWeight={700}
//               >
//                 Web Development
//               </Text>
//               <Text
//                 as={motion.p}
//                 {...textVariant("1.1")}
//                 className="out-line-text"
//                 fontSize="56"
//                 fontWeight={700}
//               >
//                 Mobile Development
//               </Text>
//             </Box>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Home;
