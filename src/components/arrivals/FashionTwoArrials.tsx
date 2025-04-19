"use client";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Col, Row } from "react-bootstrap";
import FashionProductItem from "../product-item/FashionProductItem";

const FashionTwoArrials = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleProductClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Tabs
        selectedIndex={selectedIndex}
        onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
      >
        <div className="gi-tab-title">
          <div className="gi-main-title">
            <div className="section-title">
              <div className="section-detail">
                <h2 className="gi-title">
                  New <span>Arrivals</span>
                </h2>
                <p>Shop online for new arrivals and get free shipping!</p>
              </div>
            </div>
          </div>
          {/* <!-- Tab Start --> */}
          <TabList className="gi-pro-tab">
            <ul className="gi-pro-tab-nav nav">
              <Tab
                style={{ outline: "none" }}
                className="nav-item gi-header-rtl-arrival"
                key={"all"}
              >
                <a
                  className={`nav-link ${selectedIndex == 0 ? "active" : ""}`}
                  onClick={() => handleProductClick(0)}
                  data-bs-toggle="tab"
                >
                  All
                </a>
              </Tab>
              <Tab
                style={{ outline: "none" }}
                className="nav-item gi-header-rtl-arrival"
                key={"clothe"}
              >
                <a
                  className={`nav-link ${selectedIndex == 1 ? "active" : ""}`}
                  onClick={() => handleProductClick(1)}
                  data-bs-toggle="tab"
                >
                  Clothes
                </a>
              </Tab>
              <Tab
                style={{ outline: "none" }}
                className="nav-item gi-header-rtl-arrival"
                key={"footwear"}
              >
                <a
                  className={`nav-link ${selectedIndex == 2 ? "active" : ""}`}
                  onClick={() => handleProductClick(2)}
                  data-bs-toggle="tab"
                >
                  Footwear
                </a>
              </Tab>
              <Tab
                style={{ outline: "none" }}
                className="nav-item gi-header-rtl-arrival"
                key={"accessories"}
              >
                <a
                  className={`nav-link ${selectedIndex == 3 ? "active" : ""}`}
                  onClick={() => handleProductClick(3)}
                  data-bs-toggle="tab"
                >
                  accessories
                </a>
              </Tab>
            </ul>
          </TabList>
          {/* <!-- Tab End --> */}
        </div>
        {/* <!-- New Product --> */}
        <Row className="m-b-minus-24px">
          <Col lg={12}>
            <div className="tab-content">
              {/* <!-- 1st Product tab start --> */}
              <TabPanel>
              <Fade
                triggerOnce
                duration={500}
                className={`tab-pane fade ${
                  selectedIndex === 0 ? "show active product-block" : ""
                }`}
              >
                <Row>
                  <FashionProductItem url="/api/fashiontwoall" />
                </Row>
              </Fade>
              </TabPanel>
              {/* <!-- 1st Product tab end -->*/}
              {/* <!-- 2nd Product tab start --> */}
              <TabPanel>
              <Fade
                triggerOnce
                duration={500}
                className={`tab-pane fade ${
                  selectedIndex === 1 ? "show active product-block" : ""
                }`}
              >
                <Row>
                  <FashionProductItem url="/api/fashiontwoclothes" />
                </Row>
              </Fade>
              </TabPanel>
              {/* <!-- 2nd Product tab end -->*/}
              {/* <!-- 3rd Product tab start --> */}
              <TabPanel>
              <Fade
                triggerOnce
                duration={500}
                className={`tab-pane fade ${
                  selectedIndex === 2 ? "show active product-block" : ""
                }`}
              >
                <Row>
                  <FashionProductItem url="/api/fashiontwofootwear" />
                </Row>
              </Fade>
              </TabPanel>
              {/* <!-- 3rd Product tab end -->*/}
              {/* <!-- 4th Product tab start --> */}
              <TabPanel>
              <Fade
                triggerOnce
                duration={500}
                className={`tab-pane fade ${
                  selectedIndex === 3 ? "show active product-block" : ""
                }`}
              >
                <Row>
                  <FashionProductItem url="/api/fashiontwoaccessories" />
                </Row>
              </Fade>
              </TabPanel>
              {/* <!-- 4th Product tab end --> */}
            </div>
          </Col>
        </Row>
      </Tabs>
    </>
  );
};

export default FashionTwoArrials;
