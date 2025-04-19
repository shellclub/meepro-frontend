"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store";
import { setTheme, toggleMode, setDirection } from "@/store/reducers/themeSlice";
import { useEffect, useState } from "react";
import {colorCss} from "../utility/data/colorCss";
import Link from "next/link";

const ThemeSwitcher = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme, mode, direction } = useSelector((state: RootState) => state.theme);
  const [isOpen, setIsOpen] = useState(false);

  
  useEffect(() => {
    // Remove previous color stylesheets
    document.querySelectorAll("link[data-theme]").forEach((el) => el.remove());

    // Apply new theme color stylesheet
    const themeLink = document.createElement("link");
    themeLink.rel = "stylesheet";
    themeLink.href = `/assets/css/${theme}.css`;
    themeLink.setAttribute("data-theme", "true");
    document.head.appendChild(themeLink);

    // Handle dark mode dynamically
    const darkLinkId = "dark-mode";
    if (mode === "dark") {
      if (!document.getElementById(darkLinkId)) {
        const darkLink = document.createElement("link");
        darkLink.id = darkLinkId;
        darkLink.rel = "stylesheet";
        darkLink.href = "/assets/css/dark.css";

        // Set background only after dark.css is loaded
        darkLink.onload = () => {
          document.body.style.backgroundColor = "#161a2a";
        };

        document.head.appendChild(darkLink);
      } else {
        document.body.style.backgroundColor = "#161a2a"; // If dark.css already exists
      }
    } else {
      document.getElementById(darkLinkId)?.remove();
      document.body.style.backgroundColor = "#fff";
    }

    // Handle RTL stylesheet
    const rtlLinkId = "rtl-link";
    if (direction === "RTL") {
      if (!document.getElementById(rtlLinkId)) {
        const rtlLink = document.createElement("link");
        rtlLink.id = rtlLinkId;
        rtlLink.rel = "stylesheet";
        rtlLink.href = "/assets/css/rtl.css";
        document.head.appendChild(rtlLink);
      }
    } else {
      document.getElementById(rtlLinkId)?.remove();
    }

    // Apply mode and direction classes
    document.body.className = `${theme} ${mode} ${direction}`;

    return () => {
      themeLink.remove();
      document.getElementById(rtlLinkId)?.remove();
    };
  }, [theme, mode, direction]);

  const toggleSidebar = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const handleDirection = (mode: "LTR" | "RTL") => {
    dispatch(setDirection(mode));
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }


  return (
    <>
      <div
        onClick={closeSidebar}
        className="gi-tools-sidebar-overlay"
        style={{ display: isOpen ? "block" : "none" }}
      ></div>
      <div className={`gi-tools-sidebar ${isOpen ? "open-tools" : ""}`}>
        <a href="" className="gi-tools-sidebar-toggle in-out" onClick={toggleSidebar}>
          <i className="fi fi-rr-settings"></i>
        </a>
        <div className="gi-bar-title">
          <h6>Tools</h6>
          <a href="#" className="close-tools">
            <i onClick={closeSidebar} className="ri-close-line"></i>
          </a>
        </div>
        <div className="gi-tools-detail">
          <div className="gi-tools-block">
            <h3>Select Color</h3>
            <ul className="gi-color">
              {colorCss.length > 0 && colorCss.map((each, index) => (
                <li
                  key={index}
                  onClick={(e) => dispatch(setTheme(each))}
                  className={`${each} ${
                    theme === each  ? "active-variant" : ""
                  }`}
                >
                <Link onClick={(e) => dispatch(setTheme(each))} href="/" aria-label='Link to our color page' className={each}></Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="gi-tools-block">
            <h3>Direction Switching</h3>
            <div className="gi-tools-rtl">
              <div
                onClick={() => handleDirection("LTR")}
                className={`mode-primary gi-tools-item rtl-mode mode ltr ${direction === 'RTL' ? "" : "active-mode"}`}
                data-gi-mode-tool="ltr"
              >
                <img src={process.env.NEXT_PUBLIC_URL + "/assets/img/tools/ltr.png"} alt="ltr" />
                <p>LTR</p>
              </div>
              <div
                onClick={() => handleDirection("RTL")}
                className={`gi-tools-item rtl-mode mode rtl ${direction === 'RTL' ? "active-mode" : ""} `}
                data-gi-mode-tool="rtl"
              >
                <img src={process.env.NEXT_PUBLIC_URL + "/assets/img/tools/rtl.png"} alt="rtl" />
                <p>RTL</p>
              </div>
            </div>
          </div>
          <div className="gi-tools-block">
            <h3>Dark Modes</h3>
            <div className="gi-tools-dark">
              <div
                onClick={() => dispatch(toggleMode())}
                className={`mode-primary gi-tools-item mode-dark light ${
                  mode === 'light'  ? "active-mode" : ""
                } `}
                data-gi-mode-dark="light"
              >
                <img src={process.env.NEXT_PUBLIC_URL + "/assets/img/tools/light.png"} alt="light" />
                <p>Light</p>
              </div>
              <div
                onClick={() => dispatch(toggleMode())}
                className={`gi-tools-item mode-dark dark ${mode === 'dark' ? "active-mode" : ""}`}
                data-gi-mode-dark="dark"
              >
                <img src={process.env.NEXT_PUBLIC_URL + "/assets/img/tools/dark.png"} alt="dark" />
                <p>Dark</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThemeSwitcher;
