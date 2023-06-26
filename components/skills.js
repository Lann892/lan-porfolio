import React from "react";
import {
  Grid,
  Box,
  Heading,
  Container,
  useBreakpointValue,
} from "@chakra-ui/react";
import { BallCanvas } from "./canvas";
import { languages, technologies } from "./constants";
import Paragraph from "./paragraph";
import { useTranslation } from "react-i18next";

const Skills = () => {
  const { t } = useTranslation();

  const columnCount = useBreakpointValue({ base: 3, md: 4 });
  const ballSizey = useBreakpointValue({ base: 24, md: 32 });
  const ballSizex = useBreakpointValue({ base: 24, md: 36 });

  return (
    <Container
      pt={{
        base: 0,
        md: 10,
      }}>
      <Heading
        as="h3"
        fontSize={20}
        mb={{
          base: 4,
          md: 2,
        }}
        mt={{
          base: 0,
          md: 4,
        }}>
        {t("about.languages")}
      </Heading>
      <Grid
        templateColumns={`repeat(${columnCount}, 1fr)`}
        gap={{
          base: 0,
          md: 4,
        }}
        justifyItems="center">
        {languages.map((language) => (
          <Box
            key={language.name}
            w={ballSizey}
            h={ballSizex}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer">
            <BallCanvas icon={language.icon} />
            <Paragraph
              style={{
                fontWeight: 500,
              }}>
              {language.name}
            </Paragraph>
          </Box>
        ))}
      </Grid>
      <Heading
        as="h3"
        fontSize={20}
        mt={{
          base: 6,
          md: 8,
        }}
        mb={{
          base: 4,
          md: 2,
        }}>
        {t("about.tech")}
      </Heading>
      <Grid
        templateColumns={`repeat(${columnCount}, 1fr)`}
        justifyItems="center"
        gap={{
          base: 0,
          md: 4,
        }}>
        {technologies.map((technology) => (
          <Box
            key={technology.name}
            w={ballSizey}
            h={ballSizex}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer">
            <BallCanvas icon={technology.icon} />
            <Paragraph
              style={{
                fontWeight: 500,
              }}>
              {technology.name}
            </Paragraph>
          </Box>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;
