import SubLayout from "@/components/SubLayout/SubLayout";
import { useRouter } from "next/router";
import { fetchCountry } from "@/api";

const Country = ({ country }) => {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
};

export default Country;

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  // getStaticPaths는 getStaticProps와 함께 사용되는 메서드로, 동적 라우팅을 위해 필요한 경로 정보를 반환

  return {
    paths: [
      {
        params: {
          code: "ABW",
        },
      },
      {
        params: {
          code: "KOR",
        },
      },
    ],
    fallback: false, // fallback은 불러올 경로가 없을 때 어떻게 처리할지 설정하는 옵션 : false는 404 페이지를 반환
  };
};

export const getStaticProps = async (context) => {
  const { code } = context.params;

  let country = null;

  if (code) {
    country = await fetchCountry(code); // 불러오는 데이터가 시간에 따라 변경되지는 않기 때문에 getServerSideProps보다 getStaticProps를 사용하는 것이 좋음
  }

  return {
    props: { country },
  };
};
