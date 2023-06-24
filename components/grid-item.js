import Image from "next/image";
import { Box, Text, Link, useBreakpointValue } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { motion } from "framer-motion";

const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" textAlign="center">
      <Link href={href} target="_blank" sx={styles}>
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <Text mt={2}>{title}</Text>
        <Text fontSize={14}>{children}</Text>
      </Link>
    </Box>
  );
};

const WorkGridItem = ({ children, id, title, thumbnail }) => {
  const variants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  };

  const width = useBreakpointValue({ base: "300px", md: "300px" });
  const height = useBreakpointValue({ base: "150px", md: "200px" });

  return (
    <motion.div whileHover="hover" initial="initial" variants={variants}>
      <Box w="100%" textAlign="center">
        <a href={`${id}`} target="_blank">
          <img
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            style={{
              width: width,
              height: height,
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Text
            mt={{
              base: 2,
              md: 4,
            }}
            mb={{
              base: 2,
              md: 0,
            }}
            fontSize={{
              base: 16,
              md: 16,
            }}
            fontWeight={650}>
            {title}
          </Text>
          <Text
            fontSize={{
              base: 13,
              md: 14,
            }}
            textAlign="center">
            {children}
          </Text>
        </a>
      </Box>
    </motion.div>
  );
};

const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 30px;
      }
      
      .hover-animation:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;
      }
    `}
  />
);

export { GridItem, WorkGridItem, GridItemStyle };
