import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#e4dcc9", "#202023")(props),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 19,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 3,
        marginTop: 3,
        marginBottom: 4,
        fontWeight: "bold",
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("teal", "#ff63c3")(props),
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const color = {
  glassTeal: "#24221b",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({
  styles,
  components,
  fonts,
  color,
  config,
});

export default theme;
