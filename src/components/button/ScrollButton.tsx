import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollButton = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {showBackToTop && (
        <a
          style={{ color: "#fff", padding: "7px" }}
          onClick={scrollToTop}
          className="gi-back-to-top show"
        >
          <FaArrowUp />
        </a>
      )}
    </>
  );
};

export default ScrollButton;
