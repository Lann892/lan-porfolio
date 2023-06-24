import { motion } from "framer-motion";
import { chakra, forwardRef, shouldForwardProp } from "@chakra-ui/react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => shouldForwardProp(prop) && prop !== "transition",
});

const Section = forwardRef(({ children, delay = 0, ...rest }, ref) => {
  return (
    <StyledDiv
      ref={ref}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2, delay }}
      mb={4}
      {...rest}>
      {children}
    </StyledDiv>
  );
});

export default Section;
