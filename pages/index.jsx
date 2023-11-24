import { fetchCountries } from "@/api";
import CountryList from "@/components/CountryList/CountryList";
import Searchbar from "@/components/Searchbar/SearchBar";

export default function Home({ countries }) {
  return (
    <>
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
