import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import "../styles/tailwind.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={{}}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
