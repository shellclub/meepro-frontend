import React from "react";

const ShopColorItem = ({data}) => {
  return (
    <>
      <li>
        <div className="gi-sidebar-block-item">
          <input type="checkbox" value="" />
          <span
            className="gi-clr-block"
            style={{ backgroundColor: data.color }}
          ></span>
          <span className="checked"></span>
        </div>
      </li>
    </>
  );
};

export default ShopColorItem;
