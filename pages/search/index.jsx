import { fetchSearchResults } from "@/api";
import { useRouter } from "next/router";
import SubLayout from "@/components/SubLayout/SubLayout";
import { useEffect, useState } from "react";

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
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
};

export default SearchPage;

SearchPage.Layout = SubLayout; // 객체에 Layout 프로퍼티를 추가하고 SubLayout 컴포넌트를 할당
