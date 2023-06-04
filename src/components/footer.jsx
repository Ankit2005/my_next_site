import {
  Box,
  Center,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { MAX_WIDTH } from "config";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { menu } from "src/utils/constant";
import { useRouter } from "next/router";
import NextLink from "next/link";

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
  const router = useRouter();
  const currentYear = new Date().getFullYear();
  return (
    <Box
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.700", "gray.700")}
      // bg={useColorModeValue("bgPrimary", "gray.900")}
      bg={useColorModeValue("bgPrimary", "bgPrimary")}
      color={useColorModeValue("gray.200", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        p={8}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Wrap
          p="5"
          borderRadius="8"
          borderWidth={{ base: 0, md: 1 }}
          w={{ base: "100%", md: "60%" }}
          borderStyle={"dashed"}
          borderColor={useColorModeValue("primaryBorder", "primaryBorder")}
          spacing="40px"
          justify="center"
        >
          {menu.map((menu, i) => (
            <WrapItem>
              <NextLink href={menu.link}>
                <Text
                  color={router.pathname === menu.link ? "secondary" : "white"}
                  cursor="pointer"
                  // onClick={closeMenu}
                >
                  {menu.name}
                </Text>
              </NextLink>
            </WrapItem>
          ))}
        </Wrap>
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
