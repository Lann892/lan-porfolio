import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import Navbar from "../navbar";

const Main = ({ children, router }) => {
  const footPrintImg = `/images/lan-dark.png`;

  return (
    <Box as="div" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Lan</title>
        <link rel="icon" href={footPrintImg} />
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
