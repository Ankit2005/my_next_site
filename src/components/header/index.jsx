import { Box } from "@chakra-ui/react";

import { MAX_WIDTH } from "config";
import Logo from "../UI/logo";
import Navbar from "./navbar";
import { useColorModeValue } from "@chakra-ui/react";

const Header = () => {
  const bg = useColorModeValue("gray.200", "gray.300");
  return (
    <Box
      as="header"
      boxShadow="md"
      //   bg="white"
      bg={{ base: "bgPrimary" }}
      zIndex={5}
      position="sticky"
      top={0}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        h="4rem"
        px={[4, 6, 10, 14, 20]}
        maxW={MAX_WIDTH}
        mx="auto"
      >
        <Logo />
        <Navbar />
      </Box>
    </Box>
  );
};

export default Header;
