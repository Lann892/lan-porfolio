import Link from "next/link";
import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-weight: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(-20deg);
  }s
`;

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

const Logo = () => {
  const footPrintImg = `/images/lan${useColorModeValue("", "-dark")}.png`;

  const handleClick = () => {
    scrollToSection("about"); // Sección a la que se quiere hacer scroll
  };

  return (
    <Link legacyBehavior href="/" scroll={false}>
      <LogoBox onClick={handleClick}>
        <Image src={footPrintImg} alt="logo" width={25} height={25} />
        <Text
          color={useColorModeValue("#24221b", "whiteAlpha.900")}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}>
          Ian Vega
        </Text>
      </LogoBox>
    </Link>
  );
};

export default Logo;
