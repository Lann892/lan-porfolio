import { useState, useEffect, useRef } from "react";
import { useEffectOnce } from "react-use";
import Logo from "./logo";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from "react-i18next";
import { FaPause, FaPlay } from "react-icons/fa";

// In the LinkItem component
const LinkItem = ({ href, path, children, scrollToSection }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray.800", "whiteAlpha.900");
  const hoverColor = useColorModeValue("teal.500", "teal.300");

  const handleClick = (event) => {
    event.preventDefault();
    scrollToSection();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      p={2}
      bg={active ? "glassTeal" : undefined}
      color={active ? "#202023" : inactiveColor}
      transition="all 0.2s ease-in-out"
      _hover={{ color: hoverColor }}>
      {children}
    </Link>
  );
};

const Navbar = (props) => {
  const { path } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const audioRef = useRef();
  const [isAudioInitialized, setIsAudioInitialized] = useState(false);

  useEffectOnce(() => {
    if (typeof Audio !== "undefined") {
      audioRef.current = new Audio("/music/lofi.mp3");
      audioRef.current.loop = true; // Enable looping
    }
    setIsAudioInitialized(true);
  });

  useEffect(() => {
    if (isAudioInitialized) {
      if (isAudioPlaying && audioRef.current) {
        audioRef.current.play();
        audioRef.current.volume = 0.3;
      } else if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [isAudioInitialized, isAudioPlaying]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);

    if (isAudioPlaying) {
      if (audioRef.current) {
        audioRef.current.muted = true;
      }
    } else {
      if (audioRef.current) {
        audioRef.current.muted = false;
        audioRef.current.play();
      }
    }
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const { t } = useTranslation();

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        align="center"
        justifyContent="space-between">
        <Flex align="center" mr={5} _hover={{ cursor: "pointer" }}>
          <Heading as="h1" size="lg" letterSpacing="tight">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
          motionpreset="slideInRight"
          motionduration="0.5s"
          motiondelay="0.1s">
          <LinkItem
            href="#about"
            path={path}
            scrollToSection={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }>
            {t("navbar.about")}
          </LinkItem>
          <LinkItem
            href="#projects"
            path={path}
            scrollToSection={() => scrollToSection("projects")}>
            {t("navbar.projects")}
          </LinkItem>
          <LinkItem
            href="#contact"
            path={path}
            scrollToSection={() => scrollToSection("skills")}>
            {t("about.skills")}
          </LinkItem>
          <LinkItem
            href="#contact"
            path={path}
            scrollToSection={() => scrollToSection("contact")}>
            {t("navbar.contact")}
          </LinkItem>
        </Stack>

        <Box flex={1} align="right" justifyContent="flex-end">
          <Flex alignItems="center" display={{ base: "contents", md: "flex" }}>
            <IconButton
              aria-label="Toggle Audio"
              icon={isAudioPlaying ? <FaPause /> : <FaPlay />}
              onClick={toggleAudio}
              size="md"
              mr={2}
              variant="outline"
              colorScheme={useColorModeValue("black", "white")}
              bg={useColorModeValue("whiteAlpha.900", "gray.800")}
            />
            <LanguageSwitcher />
            <ThemeToggleButton />
          </Flex>
          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isOpen={isMenuOpen} onClose={closeMenu}>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
                onClick={toggleMenu}
                bg={useColorModeValue("whiteAlpha.900", "gray.800")}
              />
              <MenuList>
                <MenuItem
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }>
                  {t("navbar.about")}
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("projects")}>
                  {t("navbar.projects")}
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("skills")}>
                  {t("about.skills")}
                </MenuItem>
                <MenuItem onClick={() => scrollToSection("contact")}>
                  {t("navbar.contact")}
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
