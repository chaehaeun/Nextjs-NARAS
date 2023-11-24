import SubLayout from "@/components/SubLayout/SubLayout";
import { useRouter } from "next/router";
import { fetchCountry } from "@/api";
import style from "./[code].module.css";
import Image from "next/image";

const Country = ({ country }) => {
  const router = useRouter();
  const { code } = router.query;

  if (router.isFallback) {
    // 라우터 객체로 현재 fallback 상태를 확인할 수 있음
    return <div>Loading...</div>;
  }

  if (!country) return <div>존재하지 않는 국가입니다.</div>;

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.commonName}>
          {country.flagEmoji}&nbsp;{country.commonName}
        </div>
        <div className={style.officialName}>{country.officialName}</div>
      </div>

      <div className={style.flag_img}>
        <Image
          fill
          src={country.flagImg}
          alt={`${country.commonName}의 국기 이미지입니다`}
        />
      </div>

      <div className={style.body}>
        <div>
          <b>코드 :</b>&nbsp;{country.code}
        </div>
        <div>
          <b>수도 :</b>&nbsp;{country.capital.join(", ")}
        </div>
        <div>
          <b>지역 :</b>&nbsp;{country.region}
        </div>
        <div>
          <b>지도 :</b>&nbsp;
          <a target="_blank" href={country.googleMapURL}>
            {country.googleMapURL}
          </a>
        </div>
      </div>
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
    fallback: true,
    // fallback은 불러올 경로가 없을 때 어떻게 처리할지 설정하는 옵션 : false는 404 페이지를 반환
    // blocking : 빌드 시점에 없는 경로를 미리 생성하지 않고, 요청이 들어올 때 서버사이드에서 생성. 사용자는 완성된 페이지가 로드될 때까지 대기해야됨. 이후 로드 때는 정적 페이지로 캐싱
    // true : 요청이 들어오면 빠르게 빈 페이지를 반환하고, 클라이언트 사이드에서 페이지 생성. 이후 로드 때는 정적 페이지로 캐싱
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
    revalidate: 3, // ISR 방식으로 동작하도록 설정. 3초마다 캐시를 갱신
  };
};
