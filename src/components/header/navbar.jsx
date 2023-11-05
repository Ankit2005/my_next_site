import { useEffect, useState } from "react";
import { Box, Button, chakra, Text, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";
import { menu } from "src/utils/constant";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSec, setActiveSec] = useState("");

  const bg = useColorModeValue("gray.200", "gray.300");
  const color = useColorModeValue("white", "white");

  const closeMenu = () => {
    setIsOpen(false);
  };

  console.log("path nane --> ", router.pathname);

  // Navbar menu

  const handleScrollClick = (name) => {
    setActiveSec(name);
    const section = document.getElementById(name);
    section.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };

  useEffect(() => {
    if (router.pathname !== "/") {
      setActiveSec("");
    }
    setActiveSec("");
  }, [router.pathname]);

  return (
    <>
      <Box
        as="nav"
        display="flex"
        flexDir={{ base: "row-reverse", lg: "row" }}
        alignItems="center"
        fontWeight="400"
      >
        <HamburgerMenu toggled={isOpen} toggle={setIsOpen} />
        <chakra.ul
          bg={{ base: bg, lg: "transparent" }}
          color={{ base: "black", lg: color }}
          display={{
            base: isOpen ? "block" : "none",
            lg: "flex",
          }}
          justifyContent="space-around"
          position={{ base: "absolute", lg: "static" }}
          top="5rem"
          left="5%"
          right="5%"
          rounded={{ base: "lg", lg: "none" }}
          py={{ base: "2", lg: "0" }}
          px={{ base: "4", lg: "0" }}
          alignItems={{ lg: "center" }}
          boxShadow={{ base: "xl", lg: "none" }}
          zIndex="2"
        >
          {menu.map((menu, i) => (
            <chakra.li
              key={`menu_${i}`}
              listStyleType="none"
              px={{ lg: "8" }}
              py={{ base: "3", lg: "0" }}
              fontWeight="700"
            >
              <NextLink href={menu.link}>
                <Text
                  //  onClick={() => handleScrollClick("home-section")}
                  color={router.pathname === menu.link ? "secondary" : "white"}
                  cursor="pointer"
                  onClick={closeMenu}
                >
                  {menu.name}
                </Text>
              </NextLink>
            </chakra.li>
          ))}

          {router.pathname === "/" && (
            <Text
              fontWeight="700"
              color={activeSec === "contact-section" ? "secondary" : "white"}
              cursor="pointer"
              onClick={() => handleScrollClick("contact-section")}
            >
              Contact us
            </Text>
          )}
        </chakra.ul>

        {/* <ColorModeToggle /> sds */}
      </Box>

      <Box>
        {/* <Button
        display={{ base: "none", lg: "block" }}
        color="white"
        borderRadius={50}
        bg="primaryBlueBtn"
      >
        Get Demo
      </Button> */}
      </Box>
    </>
  );
};

export default Navbar;
