"use client";

import Header from "./Header";
import Footer from "./Footer";
import Toastify from "../../toast-popup/Toastify";
import { useEffect } from "react";

const LayoutThree = ({ children }) => {
  useEffect(() => {
    const cssFilePath = "/assets/css/demo-3.css";
    const link = document.createElement("link");
    link.href = cssFilePath;
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Toastify />
    </>
  );
};

export default LayoutThree;
