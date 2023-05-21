import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: {
    "html, body": {
      fontSize: "18px",
    },
  },
};

const fonts = {
  heading: "Poppins, -apple-system",
  body: "Poppins, -apple-system",
};

const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  bgPrimary: "#0E1330",
  secondary: "#7214FF",
  bgGradientPrimary: "linear(to-r, #282D45, #0E1330)",
  primaryBlueBtn: "#7214FF",
  primaryBorder: "#7214FF",
  neutralGray: "#8F9BB7",
  offWhiteText: "#FAFAFC",

  gray: {
    50: "#f7fafc",
    600: "#909090",
    900: "#171923",
  },
  // ...
};

const theme = extendTheme({
  styles,
  fonts,
  colors,
});

export default theme;
