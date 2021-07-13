import Hero from "components/Hero";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Home - Joël Kuijper</title>
      <link rel="icon" href="https://fav.farm/🏠" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Hero />
  </div>
);

export default Home;
