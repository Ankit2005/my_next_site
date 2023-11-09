import { Box, chakra } from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { AukLogo } from "src/assets/img";

const Logo = () => {
  return (
    <NextLink href="/" passHref>
      <chakra.a fontSize="2rem" color="white" fontWeight="700">
        <Box p="4" >

        <Image          
        src={AukLogo}
        width={120}
        height={120}
        alt="Description of the image"
        />
        </Box>
      </chakra.a>
    </NextLink>
  );
};

export default Logo;
