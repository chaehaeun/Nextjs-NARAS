import React from "react";
import style from "./SubLayout.module.css";

const SubLayout = ({ children }) => {
  return (
    <>
      {children}
      <footer className={style.footer}>Haeun Chae</footer>
    </>
  );
};

export default SubLayout;
