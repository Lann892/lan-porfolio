import { useEffect, useState } from "react";
import {
  Container,
  SimpleGrid,
  Heading,
  Box,
  Spinner,
  Button,
  Link,
  Flex,
} from "@chakra-ui/react";
import Section from "./section";
import { WorkGridItem } from "./grid-item";
import { useTranslation } from "react-i18next";
import Firebase from "./services/firebaseConfig";

const Certificates = () => {
  const { t, i18n } = useTranslation();
  const [certificates, setCertificates] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const firestore = Firebase.firestore();
        const projectsRef = firestore.collection("certificados").limit(4);
        const snapshot = await projectsRef.get();

        const projectsData = snapshot.docs.map(async (doc) => {
          const data = doc.data();
          const { id, titulo, imagen, comp, link, title } = data;

          // Convertir la URL de gs:// a una URL pública
          const imageUrl = await Firebase.storage()
            .refFromURL(imagen)
            .getDownloadURL();

          return { id, titulo, imagen: imageUrl, comp, link, title };
        });

        const projectsWithUrls = await Promise.all(projectsData);

        setCertificates(projectsWithUrls);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" h="100vh">
        <Spinner size="xl" color="teal" />
      </Box>
    );
  }

  return (
    <Container mt={{ base: 0, md: 4 }}>
      <Flex justifyContent="space-between" alignItems="center" mb={6}>
        <Heading as="h3" fontSize={20}>
          {t("works.certificates")}
        </Heading>
        <Link href="/certificate">
          <Button colorScheme={"teal"}>{t("skills.seeMore")}</Button>
        </Link>
      </Flex>

      <SimpleGrid columns={[2, 2, 2]} gap={7}>
        {certificates.map((certificate) => (
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
    </Container>
  );
};

export default Certificates;
