"use client";

import { useState } from "react";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <>
      {showLoader && (
        <div id="gi-overlay">
          <span className="loader"></span>
        </div>
      )}
    </>
  );
};

export default Loader;
