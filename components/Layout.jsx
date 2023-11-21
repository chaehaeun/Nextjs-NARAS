import React from "react";
import style from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={style.header}>
        <h1>NARAS</h1>
      </header>
      <main className={style.main}>{children}</main>
    </>
  );
};

export default Layout;
