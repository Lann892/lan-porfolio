import { useEffect, useState } from "react";
import {
  Container,
  Box,
  SimpleGrid,
  Heading,
  Spinner,
  Flex,
  Link,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import { useTranslation } from "react-i18next";
import Firebase from "../components/services/firebaseConfig";

const Work = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const firestore = Firebase.firestore();
        const projectsRef = firestore.collection("proyectos").limit(4);
        const snapshot = await projectsRef.get();

        const projectsData = snapshot.docs.map(async (doc) => {
          const data = doc.data();
          const {
            id,
            titulo,
            imagen,
            descBreve,
            descLarga,
            link,
            description,
          } = data;

          // Convertir la URL de gs:// a una URL pública
          const imageUrl = await Firebase.storage()
            .refFromURL(imagen)
            .getDownloadURL();

          return {
            id,
            titulo,
            imagen: imageUrl,
            descBreve,
            descLarga,
            link,
            description,
          };
        });

        const projectsWithUrls = await Promise.all(projectsData);

        setProjects(projectsWithUrls);
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
    <Container mt={{ base: 16, md: 16 }}>
      <Flex justifyContent="space-between" alignItems="center" mb={4}>
        <Heading as="h3" fontSize={20}>
          {t("works.projects")}
        </Heading>
        <Link href="/works" mb={2}>
          <Button colorScheme={"teal"} width={100}
          height={38}>{t("skills.seeMore")}</Button>
        </Link>
      </Flex>

      <SimpleGrid columns={[2, 2, 2]} gap={8}>
        {projects.map((project) => (
          <Section key={project.id}>
            <WorkGridItem
              id={project.link}
              title={project.titulo}
              thumbnail={project.imagen}>
              {i18n.language === "es" ? project.descBreve : project.description}
            </WorkGridItem>
          </Section>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Work;
