import Head from "next/head";
import Header from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <link rel="icon" href="https://fav.farm/🏠" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="font-body bg-white dark:bg-dark text-dark dark:text-white">
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
