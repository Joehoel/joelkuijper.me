import { ThemeProvider } from "next-themes";
import { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import "../styles/tailwind.css";
import MDXComponents from "components/MDXComponents";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
