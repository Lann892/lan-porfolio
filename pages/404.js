import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Divider,
  Button,
  Container,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="90vh"
    >
      <Container maxW="container.md">
        <Box textAlign="center">
          <Heading as="h1" fontSize="4xl" mb={4}>
            Not Found
          </Heading>
          <Text fontSize="xl" mb={6}>
            The page you're looking for was not found.
          </Text>
          <Divider
            borderColor="teal.500"
            borderWidth="2px"
            my={6}
            w="50%"
            mx="auto"
          />
          <Box my={6}>
            <NextLink href="/" passHref>
              <Button colorScheme="teal" size="lg">
                Go to Home
              </Button>
            </NextLink>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
