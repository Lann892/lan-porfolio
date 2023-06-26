import React, { lazy, Suspense } from "react";
import { Container } from "@chakra-ui/react";
import Section from "../components/section";
import Layout from "../components/layouts/article";
import ScrollToTopButton from "../components/scrollToTopButton";
import Contact from "../components/contact";
import About from "../components/about";
import Work from "../components/work";
import Skills from "../components/skills";
import Certificates from "../components/certificates";

const Page = () => {
  return (
    <Layout>
      <Container marginTop="-60px">
        <Section
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          as={"section"}
          id="about"
          minHeight="95vh">
          <Container maxW="full">
            <About />
          </Container>
        </Section>

        <Section
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
          as={"section"}
          id="projects"
          minHeight="100vh">
          <Work />
        </Section>

        <Section
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          as="section"
          id="skills"
          minHeight="100vh">
          <Container maxW="full">
            <Skills />
          </Container>
        </Section>

        <Section
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
          as="section"
          id="certificates"
          minHeight="100vh">
          <Container maxW="full">
            <Certificates />
          </Container>
        </Section>

        <Section
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          as="section"
          id="contact"
          minHeight="90vh">
          <Container maxW="full">
            <Contact />
          </Container>
        </Section>
      </Container>

      <ScrollToTopButton />
    </Layout>
  );
};

export default Page;
