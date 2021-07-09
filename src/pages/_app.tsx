import "tailwindcss/tailwind.css";
import { AppProps } from "next/app";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider resetCSS theme={theme}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </ChakraProvider>
  );
}

export default MyApp;
