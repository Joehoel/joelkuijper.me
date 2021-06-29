import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container maxW="container.lg">
      <Header />
      {children}
    </Container>
  );
};

export default Layout;
