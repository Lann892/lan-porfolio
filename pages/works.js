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
  HStack,
} from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import { useTranslation } from "react-i18next";
import Firebase from "../components/services/firebaseConfig";

const Works = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const firestore = Firebase.firestore();
        const projectsRef = firestore.collection("proyectos");
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

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstCertificate = indexOfLastProject - projectsPerPage;
  const paginatedProject = projects.slice(
    indexOfFirstCertificate,
    indexOfLastProject
  );
  const totalPages = Math.ceil(projects.length / projectsPerPage);

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
          {t("works.projects")}
        </Heading>
        <Link href="/" mb={2}>
          <Button width={135} height={38} colorScheme={"teal"}>
            {t("home")}
          </Button>
        </Link>
      </Flex>

      <SimpleGrid columns={[2, 2, 2]} gap={10}>
        {paginatedProject.map((project) => (
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

export default Works;
