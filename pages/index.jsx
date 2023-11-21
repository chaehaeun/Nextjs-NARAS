import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const code = "KOR";
  const router = useRouter();

  const handleClickButton = () => {
    router.push("/search");
    // router.push({
    //   pathname: "/country/[code]",
    //   query: { code },
    // });

    // router.replace("/search"); // 뒤로가기 했을 때 이전 페이지로 돌아가지 않음
    // router.reload(); // 새로고침 (새로고침을 하지 않으면 쿼리스트링이 변경되어도 페이지가 새로고침 되지 않음)
  };

  return (
    <div>
      Home Page
      <div>
        <button onClick={handleClickButton}>Search 페이지로 이동</button>
      </div>
      <div>
        <Link href={"./search"}>Search Page 이동</Link>
      </div>
      <div>
        <Link
          href={{
            pathname: "/country/[code]",
            query: { code },
          }}
        >
          {code} 페이지로 이동
        </Link>
      </div>
    </div>
  );
}
