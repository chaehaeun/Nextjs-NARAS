import { fetchSearchResults } from "@/api";
import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout/SubLayout";
import { useEffect, useState } from "react";
import Searchbar from "@/components/Searchbar/SearchBar";
import CountryList from "@/components/CountryList/CountryList";

const SearchPage = () => {
  const router = useRouter();
  const { q: query } = router.query;

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countries = await fetchSearchResults(query);
      setCountries(countries);
    };

    if (query) {
      fetchCountries();
    }
  }, [query]);

  return (
    <>
      <Searchbar q={query} />
      <CountryList countries={countries} />
    </>
  );
};

export default SearchPage;

SearchPage.Layout = SubLayout; // 객체에 Layout 프로퍼티를 추가하고 SubLayout 컴포넌트를 할당
