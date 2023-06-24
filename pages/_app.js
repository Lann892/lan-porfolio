require("dotenv").config(); // Coloca esto al principio del archivo
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layouts/main";
import theme from "../libs/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next"; // importa el HOC
import i18n from "../components/i18n"; // importa tu instancia de i18n
import { GridItemStyle } from "../components/grid-item"; // importa el componente GridItemStyle

function Website({ Component, pageProps, router }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Fonts />
      <Layout router={router}>
        <GridItemStyle /> {/* Mueve el componente GridItemStyle aquí */}
        <AnimatePresence initial={true}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}

export default appWithTranslation(Website);
