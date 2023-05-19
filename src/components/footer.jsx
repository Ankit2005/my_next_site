import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { MAX_WIDTH } from "config";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      // bg={useColorModeValue("gray.50", "gray.900")}
      bg={useColorModeValue("gray.50", "bgPrimary")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        p={8}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Stack
          // borderTopWidth={1}
          p="5"
          border="1px"
          borderRadius="8"
          borderWidth={1}
          w={{ base: "60%" }}
          borderStyle={"dashed"}
          borderColor={useColorModeValue("gray.200", "primaryBorder")}
          direction={"row"}
          justifyContent="space-around"
          spacing={6}
        >
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>Service</Link>
          <Link href={"#"}>History</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>
      </Container>

      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={2}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>{`© ${currentYear} All rights reserved`}</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"YouTube"} href={"#"}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={"Instagram"} href={"#"}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
