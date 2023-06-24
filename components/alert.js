import React, { useEffect } from "react";
import { FaCheck } from "react-icons/fa";
import { Box, Text, Fade } from "@chakra-ui/react";

const Alert = ({ show, onAnimationComplete }) => {
  useEffect(() => {
    if (show) {
      setTimeout(() => {
        onAnimationComplete();
      }, 4000);
    }
  }, [show, onAnimationComplete]);

  return (
    <Fade in={show} transition={{ duration: 0.5 }}>
      <Box
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        p={4}
        bg="#2D3748"
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        zIndex={2}
        borderRadius="md"
        boxShadow="lg"
        width="80%"
        maxWidth="400px"
        opacity={show ? 1 : 0}>
        <FaCheck style={{ marginRight: "0.5rem" }} />
        <Text fontSize="sm" fontWeight="bold">
          Your message was sent successfully
        </Text>
      </Box>
    </Fade>
  );
};

export default Alert;
