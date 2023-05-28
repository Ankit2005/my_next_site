import { useState } from "react";
import { Box, Button, chakra, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

import HamburgerMenu from "../UI/hamburgerMenu";
import ColorModeToggle from "../UI/colorModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const bg = useColorModeValue("gray.200", "gray.300");
  const color = useColorModeValue("white", "white");

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Navbar menu
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Service",
      link: "/service",
    },
    {
      name: "History",
      link: "/History",
    },
    {
      name: "About us",
      link: "/about",
    },
  ];

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
                <a onClick={closeMenu}>{menu.name}</a>
              </NextLink>
            </chakra.li>
          ))}
        </chakra.ul>

        {/* <ColorModeToggle /> sds */}
      </Box>

      <Button
        display={{ base: "none", lg: "block" }}
        color="white"
        borderRadius={50}
        bg="primaryBlueBtn"
      >
        Get Demo
      </Button>
    </>
  );
};

export default Navbar;
