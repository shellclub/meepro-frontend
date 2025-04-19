import Link from "next/link";
import React from "react";

function CategoryBlock({ data, handleWeightChange, selectedWeight }) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="gi-sidebar-block-item">
        <input
          checked={selectedWeight?.includes(data.weight)}
          onChange={() => handleWeightChange(data.weight)}
          type="checkbox"
          value=""
        />
        <Link onClick={handleSubmit} href="/">
          {data.weight}
        </Link>
        <span className="checked"></span>
      </div>
    </>
  );
}

export default CategoryBlock;
