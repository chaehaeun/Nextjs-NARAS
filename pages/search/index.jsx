import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout/SubLayout";
import React from "react";

const SearchPage = ({ countries }) => {
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

export const getServerSideProps = async (context) => {
  const { q: query } = context.query; // 쿼리 스트링을 가져옴

  let countries = [];

  if (query) {
    // 쿼리 스트링이 있으면
    countries = await fetchSearchResults(query);
  }

  return {
    props: {
      countries,
    },
  };
};
