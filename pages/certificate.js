import { useEffect, useState } from "react";
import {
  Container,
  SimpleGrid,
  Heading,
  Box,
  Spinner,
  Button,
  HStack,
  Link,
  Flex,
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import { useTranslation } from "react-i18next";
import Firebase from "../components/services/firebaseConfig";

const Certificate = () => {
  const { t, i18n } = useTranslation();
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const certificatesPerPage = 4;

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const firestore = Firebase.firestore();
        const certificatesRef = firestore.collection("certificados");
        const snapshot = await certificatesRef.get();

        const certificatesData = snapshot.docs.map(async (doc) => {
          const data = doc.data();
          const { id, titulo, imagen, comp, link, title } = data;

          // Convertir la URL de gs:// a una URL pública
          const imageUrl = await Firebase.storage()
            .refFromURL(imagen)
            .getDownloadURL();

          return { id, titulo, imagen: imageUrl, comp, link, title };
        });

        const projectsWithUrls = await Promise.all(certificatesData);

        setCertificates(projectsWithUrls);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setIsLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastCertificate = currentPage * certificatesPerPage;
  const indexOfFirstCertificate = indexOfLastCertificate - certificatesPerPage;
  const paginatedCertificates = certificates.slice(
    indexOfFirstCertificate,
    indexOfLastCertificate
  );
  const totalPages = Math.ceil(certificates.length / certificatesPerPage);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
        <Spinner size="xl" color="teal" />
      </Box>
    );
  }

  return (
    <Container mt={{ base: 4, md: 6 }}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h3" fontSize={20}>
          {t("works.certificates")}
        </Heading>
        <Link href="/">
          <Button colorScheme={"teal"}>{t("home")}</Button>
        </Link>
      </Flex>

      <SimpleGrid columns={[2, 2, 2]} gridColumnGap={10}>
        {paginatedCertificates.map((certificate) => (
          <Section key={certificate.id}>
            <WorkGridItem
              id={certificate.link}
              title={
                i18n.language === "es" ? certificate.titulo : certificate.title
              }
              thumbnail={certificate.imagen}>
              {certificate.comp}
            </WorkGridItem>
          </Section>
        ))}
      </SimpleGrid>

      <Flex
        justifyContent="center"
        alignItems="center"
        position="fixed"
        bottom={{
          base: 2,
          md: 3,
        }}
        left={0}
        right={0}
        p={4}
        bg="transparent">
        <HStack spacing={2}>
          <Button
            colorScheme="teal"
            width="100px"
            onClick={handlePreviousPage}
            isDisabled={currentPage === 1}>
            {t("pagination.previous")}
          </Button>
          <p
            style={{
              flex: 1,
              textAlign: "center",
              paddingRight: "1rem",
              paddingLeft: "1rem",
              width: 150,
            }}>
            {t("pagination.page")} {currentPage} {t("pagination.of")}{" "}
            {totalPages}
          </p>
          <Button
            colorScheme="teal"
            width="100px"
            onClick={handleNextPage}
            isDisabled={currentPage === totalPages}>
            {t("pagination.next")}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Certificate;
