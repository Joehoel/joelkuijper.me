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
      </Head>
      <div className="pb-safe selection:bg-yellow-100 font-body bg-white dark:bg-dark text-dark dark:text-white">
        <Header />
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Layout;
