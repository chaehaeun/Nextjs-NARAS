import SubLayout from "@/components/SubLayout/SubLayout";
import { useRouter } from "next/router";
import { fetchCountry } from "@/api";

const Country = ({ country }) => {
  const router = useRouter();
  const { code } = router.query; // 하이드레이션이 완료된 뒤에 사용할 수 있음
  // useRouter는 Next.js의 라우팅 시스템에 연결하는 React 훅
  // 현재 라우트에 대한 정보를 얻을 수 있으며, 클라이언트 사이드에서 사용

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
};

export default Country;

Country.Layout = SubLayout;

export const getServerSideProps = async (context) => {
  const { code } = context.params;
  // getServerSideProps는 context 매개변수를 받으며,
  // 이 매개변수에는 params, req, res, query 등 서버 사이드 렌더링에 필요한 다양한 정보가 포함

  let country = null;

  if (code) {
    country = await fetchCountry(code);
  }

  return {
    props: { country },
  };
};

// 주요 차이점
// 실행 시점: useRouter는 클라이언트 사이드에서 실행, getServerSideProps는 서버 사이드에서 실행.
// 사용 목적: useRouter는 현재 라우트에 대한 정보를 클라이언트 측에서 다룰 때 사용, getServerSideProps는 서버에서 페이지를 렌더링하기 전에 필요한 데이터를 불러올 때 사용
// 반환 값: useRouter는 라우터 객체를 반환하고, getServerSideProps는 페이지 컴포넌트의 props로 전달될 객체를 반환
