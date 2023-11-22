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

export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 컴포넌트에게 전달할 데이터를 설정하는 함수
  // 서버에서만 실행되는 함수. 서버에서만 실행되는 코드를 작성할 수 있음
  // console.log("getServerSideProps Called!"); // 서버에서 실행되는 함수기 때문에 터미널에 출력됨
  // window.location < 서버에서 실행되는 함수이기 때문에 window 객체가 없음

  const countries = await fetchCountries();

  return {
    props: {
      // props로 전달할 데이터를 설정. 객체 형태로 전달

      countries,
    },
  };
};
