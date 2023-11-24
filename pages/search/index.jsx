import { fetchSearchResults } from "@/api";
import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout/SubLayout";
import { useEffect, useState } from "react";
import Searchbar from "@/components/Searchbar/SearchBar";
import CountryList from "@/components/CountryList/CountryList";
import Head from "next/head";

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
      <Head>
        <title>NARAS 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="NARAS" />
        <meta
          property="og:description"
          content="전세계 국가들의 정보를 확인해보세요."
        />
      </Head>
      <Searchbar q={query} />
      <CountryList countries={countries} />
    </>
  );
};

export default SearchPage;

SearchPage.Layout = SubLayout; // 객체에 Layout 프로퍼티를 추가하고 SubLayout 컴포넌트를 할당
