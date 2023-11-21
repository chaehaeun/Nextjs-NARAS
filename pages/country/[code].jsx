import { useRouter } from "next/router";

const Country = () => {
  const router = useRouter();
  const { code } = router.query;

  return <div>{code}</div>;
};

export default Country;
