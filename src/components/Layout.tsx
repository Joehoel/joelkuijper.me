import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="mx-auto max-w-7xl pb-safe selection:bg-yellow-100">
      <Header />
      <main className="px-6 py-4">{children}</main>
    </div>
  );
};

export default Layout;
