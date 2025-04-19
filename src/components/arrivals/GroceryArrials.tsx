"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductAll from "../product-item/ProductItem";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Fade } from "react-awesome-reveal";

const GroceryArrials = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleProductClick = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <section
        className="gi-product-tab gi-products padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="container">
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
                      className={`nav-link ${
                        selectedIndex == 0 ? "active" : ""
                      }`}
                      onClick={() => handleProductClick(0)}
                      data-bs-toggle="tab"
                    >
                      All
                    </a>
                  </Tab>
                  <Tab
                    style={{ outline: "none" }}
                    className="nav-item gi-header-rtl-arrival"
                    key={"snack"}
                  >
                    <a
                      className={`nav-link ${
                        selectedIndex == 1 ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      onClick={() => handleProductClick(1)}
                    >
                      Snack & Spices
                    </a>
                  </Tab>
                  <Tab
                    style={{ outline: "none" }}
                    className="nav-item gi-header-rtl-arrival"
                    key={"fruits"}
                  >
                    <a
                      className={`nav-link ${
                        selectedIndex == 2 ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      onClick={() => handleProductClick(2)}
                    >
                      Fruits
                    </a>
                  </Tab>
                  <Tab
                    style={{ outline: "none" }}
                    className="nav-item"
                    key={"veg"}
                  >
                    <a
                      className={`nav-link ${
                        selectedIndex == 3 ? "active" : ""
                      }`}
                      data-bs-toggle="tab"
                      onClick={() => handleProductClick(3)}
                    >
                      Vegetables
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
                      duration={400}
                      className={`tab-pane fade ${
                        selectedIndex === 0 ? "show active product-block" : ""
                      }`}
                    >
                      <Row>
                        <ProductAll url="/api/products" />
                      </Row>
                    </Fade>
                  </TabPanel>
                  <TabPanel>
                    <Fade
                      triggerOnce
                      duration={400}
                      className={`tab-pane fade ${
                        selectedIndex === 1 ? "show active product-block" : ""
                      }`}
                    >
                      <Row>
                        <ProductAll url="/api/snack" />
                      </Row>
                    </Fade>
                  </TabPanel>
                  <TabPanel>
                    <Fade
                      triggerOnce
                      duration={400}
                      className={`tab-pane fade ${
                        selectedIndex === 2 ? "show active product-block" : ""
                      }`}
                    >
                      <Row>
                        <ProductAll url="/api/fruits" />
                      </Row>
                    </Fade>
                  </TabPanel>
                  <TabPanel>
                    <Fade
                      triggerOnce
                      duration={400}
                      className={`tab-pane fade ${
                        selectedIndex === 3 ? "show active product-block" : ""
                      }`}
                    >
                      <Row>
                        <ProductAll url="/api/vegetables" />
                      </Row>
                    </Fade>
                  </TabPanel>
                </div>
              </Col>
            </Row>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default GroceryArrials;
