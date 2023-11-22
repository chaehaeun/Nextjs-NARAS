import { fetchCountries } from "@/api";

export default function Home({ countries }) {
  // console.log("Home Component Called!"); // 서버 콘솔, 클라이언트 콘솔 모두 출력

  // useEffect(() => {
  //   console.log("Home Component Mounted!"); // 마운트 시점에 호출되기 때문에 클라이언트 콘솔에만 출력
  // }, []);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const countries = await fetchCountries();

  return {
    props: {
      // props로 전달할 데이터를 설정. 객체 형태로 전달

      countries,
    },
  };
};

// 빌드했을 때 흰 동그라미 : 정적 페이지
// 람다 아이콘 : SSR 방식으로 작동하는 페이지
// 검은색 동그라미 : SSG방식으로 동작하기는 하지만 getStaticProps가 없는 페이지(데이터 패칭이 필요 없는 페이지)
