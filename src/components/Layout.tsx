import { Box, Container } from "@chakra-ui/react";
import Header from "./Header";
import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="https://fav.farm/🏠" />
      </Head>
      <div className="pb-safe selection:bg-yellow-100 font-body bg-white dark:bg-dark text-dark dark:text-white">
        <Header />
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
