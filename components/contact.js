import React, { useState } from "react";
import {
  Container,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useColorModeValue,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import Firebase from "../components/services/firebaseConfig";
import Alert from "./alert";
import { FaInstagram, FaTiktok, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const contactForm = Firebase.database().ref("contactMessages");
  const [showAlert, setShowAlert] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { t } = useTranslation();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, subject, message } = fields;

    await saveMessage(name, email, subject, message);

    setShowAlert(true);
    setFields({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => {
      setShowAlert(false);
    }, 4000);
  };

  const saveMessage = async (name, email, subject, message) => {
    await contactForm.push().set({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });
  };

  const handleChange = (event) => {
    setFields((prevFields) => ({
      ...prevFields,
      [event.target.name]: event.target.value,
    }));
  };

  const formBackground = useColorModeValue("whiteAlpha.500", "whiteAlpha.200");
  const iconHoverColor = useColorModeValue("#000", "#fff");
  const iconSize = useBreakpointValue({ base: 30, md: 32 });

  return (
    <Container
      maxW="container.lg"
      w="full"
      mt={{ base: 10, md: 14 }}
      position="relative">
      <Box position="relative" zIndex={1}>
        <Heading as="h3" fontSize={20} mb={4}>
          {t("contact.me")}
        </Heading>

        <Box
          bg={formBackground}
          borderRadius="3xl"
          p={6}
          boxShadow="xl"
          position="relative"
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}>
          {/* Formulario */}
          <Box
            flex={1}
            mb={{ base: 6, md: 0 }}
            mr={{ base: 0, md: 6 }}
            width={{ base: "100%", md: "auto" }}>
            <Box
              mb={{
                base: 0,
                md: 6,
              }}>
              <form onSubmit={handleSubmit}>
                <FormControl id="name" mb={4} isRequired alignItems="center">
                  <FormLabel>{t("contact.name")}</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleChange}
                    borderColor={useColorModeValue("#24221b", "#9BA4B5")}
                    required
                  />
                </FormControl>

                <FormControl id="email" mb={4} isRequired>
                  <FormLabel>{t("contact.email")}</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={fields.email}
                    onChange={handleChange}
                    borderColor={useColorModeValue("#24221b", "#9BA4B5")}
                    required
                  />
                </FormControl>

                <FormControl id="subject" mb={4} isRequired>
                  <FormLabel>{t("contact.subject")}</FormLabel>
                  <Input
                    type="text"
                    name="subject"
                    value={fields.subject}
                    onChange={handleChange}
                    borderColor={useColorModeValue("#24221b", "#9BA4B5")}
                    required
                  />
                </FormControl>

                <FormControl id="message" mb={4} isRequired>
                  <FormLabel>{t("contact.message")}</FormLabel>
                  <Textarea
                    name="message"
                    value={fields.message}
                    onChange={handleChange}
                    borderColor={useColorModeValue("#24221b", "#9BA4B5")}
                    required
                  />
                </FormControl>

                <Button
                  type="submit"
                  colorScheme="teal"
                  w="full"
                  mt={{
                    base: 2,
                    md: 4,
                  }}>
                  {t("contact.submit")}
                </Button>
              </form>
            </Box>
            {showAlert && (
              <Alert status="success" message={t("contact.success")} />
            )}
          </Box>

          {/* Botones de redes sociales */}
          <Box
            display="flex"
            flexDirection={{ base: "row", md: "column" }}
            mt={{
              base: 0,
              md: 7,
            }}>
            <Link
              target="_blank"
              href="https://www.instagram.com/lan.developer/"
              mb={{
                base: 0,
                md: 6,
              }}
              mr={{
                base: 8,
                md: 0,
              }}
              ml={{
                base: 9,
                md: 0,
              }}
              _hover={{ color: iconHoverColor, transform: "scale(1.1)" }}>
              <FaInstagram size={iconSize} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/lann892/"
              mb={{
                base: 0,
                md: 6,
              }}
              mr={{
                base: 8,
                md: 0,
              }}
              _hover={{ color: iconHoverColor, transform: "scale(1.1)" }}>
              <FaLinkedin size={iconSize} />
            </Link>
            <Link
              target="_blank"
              href="https://github.com/Lann892"
              mb={{
                base: 0,
                md: 6,
              }}
              mr={{
                base: 8,
                md: 0,
              }}
              _hover={{ color: iconHoverColor, transform: "scale(1.1)" }}>
              <FaGithub size={iconSize} />
            </Link>
            <Link
              target="_blank"
              href="https://www.tiktok.com/@lan.developer"
              mr={{
                base: 8,
                md: 0,
              }}
              _hover={{ color: iconHoverColor, transform: "scale(1.1)" }}>
              <FaTiktok size={iconSize} />
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
