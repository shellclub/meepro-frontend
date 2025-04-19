"use client";
import Footer from "./Footer";
import Header from "./Header";
import Toastify from "../../toast-popup/Toastify";
import { useEffect } from "react";

function LayoutOne({ children }) {
  useEffect(() => {
    const cssFilePath = "/assets/css/demo-1.css";
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
}

export default LayoutOne;
