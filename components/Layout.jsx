import React from "react";
import style from "./Layout.module.css";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/");
  };

  return (
    <>
      <header onClick={onClickLogo} className={style.header}>
        <h1>NARAS</h1>
      </header>
      <main className={style.main}>{children}</main>
    </>
  );
};

export default Layout;
