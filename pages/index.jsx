import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList/CountryList";
import Searchbar from "@/components/Searchbar/SearchBar";
import Head from "next/head";

export default function Home({ countries }) {
  return (
    <>
      <Head>
        <title>NARAS</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta
          property="og:description"
          content="전세계 국가들의 정보를 확인해보세요."
        />
      </Head>
      <Searchbar />
      <CountryList countries={countries} />
    </>
  );
}

export const getStaticProps = async () => {
  const countries = await fetchCountries();

  return {
    props: {
      countries,
    },
  };
};
