import { Box } from "@chakra-ui/react";

import { MAX_WIDTH } from "config";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FlotingBtn from "@/components/FlotingBtn";
// maxW={MAX_WIDTH}
const Layout = ({ children }) => (
  <Box bg="bgPrimary" position="relative">
    <Header />
    <Box as="main" mx="auto">
      {children}
       <FlotingBtn />
    </Box>
    <Footer />
  </Box>
);

export default Layout;
