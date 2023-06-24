import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { IconButton, useColorModeValue } from "@chakra-ui/react";

const ScrollToTopButton = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <IconButton
      icon={<FiArrowUp />}
      onClick={handleClick}
      position="fixed"
      bottom={{base: "6", md: "24"}}
      right={{base: "6", md: "40"}}
      size="lg"
      variant="outline"
      aria-label="Scroll to top button"
      bg={useColorModeValue("whiteAlpha.700", "whiteAlpha.300")}
      color={useColorModeValue("gray.900", "whiteAlpha.900")}
    />
  );
};

export default ScrollToTopButton;
