import {
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { DownloadIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";
import { FaInstagram, FaTiktok, FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const { t, i18n } = useTranslation();

  const iconHoverColor = useColorModeValue("#000", "#fff");
  const iconSize = useBreakpointValue({ base: 42, md: 56 });

  const cv =
    i18n.language === "es"
      ? "https://firebasestorage.googleapis.com/v0/b/portfolio-88924.appspot.com/o/proyectos%2FCVlanEspan%CC%83ol.pdf?alt=media&token=fad95909-5556-41ec-9e97-f3693f9810a7"
      : "https://firebasestorage.googleapis.com/v0/b/portfolio-88924.appspot.com/o/proyectos%2FCVlanEnglish.pdf?alt=media&token=c2e0fd09-fffa-46ac-9634-b0e24e8d53ea";

  return (
    <Box>
      <Box
        display={{ base: "flex", md: "flex" }}
        pt={{ base: 16, md: 16 }}
        alignItems="center">
        <Box flexShrink={0} mt={{ base: 0, md: 2 }} mr={{ base: 6, md: 12 }}>
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={1}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden">
            <Image
              borderColor="whiteAlpha.500"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/lan.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Box flexGrow={1} alignSelf="center">
          <Heading as="h2" variant="page-title" mb={{ base: 0, md: 2 }}>
            Ian Vega
          </Heading>
          <p>{t("about.p")}</p>
        </Box>
      </Box>

      <Box
        borderRadius="lg"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
        p={3}
        mb={6}
        align="center"
        maxW="3xl"
        mx="auto"
        mt={{ base: 4, md: 6 }}
        boxShadow="md">
        <Typewriter
          options={{
            strings: [t("about.t1"), t("about.t2"), t("about.t3")],
            autoStart: true,
            loop: true,
            delay: 30,
            pauseFor: 2000,
            deleteSpeed: 20,
          }}
        />
      </Box>

      <Section delay={2}>
        <Heading
          as="h3"
          variant="section-title"
          mb={{
            base: 4,
            md: 8,
          }}
          mt={{
            base: 8,
            md: 12,
          }}>
          {t("navbar.about")}
        </Heading>
        <Paragraph>
          {t("about.me1")}
          <Link target="_blank" href="https://www.instagram.com/youth.4health/">
            Y4H
          </Link>
          {t("about.me2")}
          <Link target="_blank" href="https://education.github.com/experts">
            GitHub Campus Expert
          </Link>
          {t("about.me3")}
        </Paragraph>
      </Section>

      <Section delay={2}>
        <Heading
          as="h3"
          variant="section-title"
          mb={{
            base: 6,
            md: 12,
          }}
          mt={{
            base: 4,
            md: 12,
          }}>
          {t("about.contact")}
        </Heading>
        <Paragraph style={{ display: "flex", justifyContent: "center" }}>
          <Link
            target="_blank"
            href="https://www.instagram.com/lan.developer/"
            style={{ marginRight: 40 }}
            _hover={{ color: iconHoverColor, transform: "scale(1.1)" }}>
            <FaInstagram size={iconSize} />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/lann892/"
            style={{ marginRight: 40 }}
            _hover={{ color: iconHoverColor, transform: "scale(1.1)" }}>
            <FaLinkedin size={iconSize} />
          </Link>
          <Link
            target="_blank"
            href="https://github.com/Lann892"
            style={{ marginRight: 40 }}
            _hover={{ color: iconHoverColor, transform: "scale(1.1)" }}>
            <FaGithub size={iconSize} />
          </Link>
          <Link
            target="_blank"
            href="https://www.tiktok.com/@lan.developer"
            _hover={{ color: iconHoverColor, transform: "scale(1.1)" }}>
            <FaTiktok size={iconSize} />
          </Link>
        </Paragraph>
        <Box align="center" mt={{ base: 6, md: 14 }}>
          <Button rightIcon={<DownloadIcon />} colorScheme="teal">
            <a href={cv} target="_blank">
              {t("about.download")}
            </a>
          </Button>
        </Box>
      </Section>
    </Box>
  );
};

export default About;
