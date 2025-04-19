"use client";
import Header from "./Header";
import Footer from "./Footer";
import FeatureTools from "@/theme/ThemeSwitcher";

import Toastify from "../../toast-popup/Toastify";
import { useEffect } from "react";

const LayoutTwo = ({ children }) => {
  useEffect(() => {
    const cssFilePath = "/assets/css/demo-2.css";
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
      {/* <Loader /> */}
      <FeatureTools />
      <Header />
      {children}
      <Footer />
      <Toastify />
    </>
  );
};

export default LayoutTwo;
