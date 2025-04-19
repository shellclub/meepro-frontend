import { RootState } from "@/store";
import vendordeshboard from "@/utility/header/vendordeshboard";
import React from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const VendorSidebar = () => {
  const SwitchOn = useSelector((state: RootState) => state.cart.isSwitchOn);

  const filterDeshbord = SwitchOn
    ? vendordeshboard
    : vendordeshboard.filter((vendor) => !vendor.slug.startsWith("vendor"));

  return (
    <>
      <Col lg={3} md={12} className="mb-24">
        <div className="gi-sidebar-wrap gi-border-box gi-sticky-sidebar">
          <div className="gi-vendor-block-items">
            <ul>
              {filterDeshbord.map((data, index) => (
                <li key={index}>
                  <a href={data.href}>{data.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Col>
    </>
  );
};

export default VendorSidebar;
