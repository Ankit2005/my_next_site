import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";

import theme from "@/theme/index";
import Layout from "@/layouts/global";
import SEO from "next-seo.config";

import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@/styles/index.css";
import { StrictMode } from "react";
import "aos/dist/aos.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <StrictMode>
      <DefaultSeo {...SEO} />

      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </StrictMode>
  </>
);

export default MyApp;
