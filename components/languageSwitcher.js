import { useTranslation } from "next-i18next";
import { IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { FiGlobe } from "react-icons/fi";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  const buttonVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
  };

  return (
    <Tooltip
      label={`${
        i18n.language === "en" ? "Cambiar a Español" : "Switch to English"
      }`}
      placement="bottom"
      hasArrow>
      <motion.div
        whileHover="hover"
        variants={buttonVariants}
        initial={{ scale: 1 }}
        style={{ display: "inline-block" }}>
        <IconButton
          aria-label="Change Language"
          icon={<FiGlobe />}
          variant="outline"
          onClick={() =>
            handleLanguageChange(i18n.language === "en" ? "es" : "en")
          }
          colorScheme={useColorModeValue("black", "white")}
          _hover={{
            bg: useColorModeValue("whiteAlpha.900", "whiteAlpha.200"),
          }}
          bg={useColorModeValue("whiteAlpha.900", "gray.800")}
          mr={2}
        />
      </motion.div>
    </Tooltip>
  );
};

export default LanguageSwitcher;
