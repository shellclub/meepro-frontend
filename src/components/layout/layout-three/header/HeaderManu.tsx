"use client";
import Link from "next/link";
import React, { useState } from "react";
import footwear from "../../../../utility/header/footwear";
import clothe from "../../../../utility/header/clothes";
import jewelry from "../../../../utility/header/jewelry";
import perfume from "../../../../utility/header/perfume";
import cosmetics from "../../../../utility/header/cosmetics";
import juices from "../../../../utility/header/juices";
import softdrink from "../../../../utility/header/softdrink";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Fade } from "react-awesome-reveal";

const HeaderManu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleProductClick = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <>
      <div className="gi-header-cat d-none d-lg-block">
        <div className="container position-relative">
          <div className="gi-nav-bar">
            {/* <!-- Category Toggle --> */}
            <Tabs
              selectedIndex={selectedIndex}
              onSelect={(selectedIndex) => setSelectedIndex(selectedIndex)}
              className="gi-category-icon-block"
            >
              <div className="gi-category-menu">
                <div className="gi-category-toggle">
                  <i className="fi fi-rr-apps"></i>
                  <span className="text">All Categories</span>
                  <i
                    className="fi-rr-angle-small-down d-1199 gi-angle"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
              <div className="gi-cat-dropdown">
                <div className="gi-cat-block">
                  <div className="gi-cat-tab">
                    <TabList>
                      <div
                        className="gi-tab-list nav flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <Tab>
                          <button
                            className={`tab nav-link ${
                              selectedIndex == 0 ? "active" : ""
                            }`}
                            onClick={() => handleProductClick(0)}
                            id="v-pills-home-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-home"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-home"
                            aria-selected="true"
                            style={{
                              padding: "10px 30px 10px 20px",
                              marginBottom: "10px",
                            }}
                          >
                            <img
                              src={
                                process.env.NEXT_PUBLIC_URL +
                                "/assets/img/category/c-1.png"
                              }
                              alt="category"
                            />
                            Cothes & Footwear
                          </button>
                        </Tab>
                        <Tab>
                          <button
                            className={`tab nav-link ${
                              selectedIndex == 1 ? "active" : ""
                            }`}
                            onClick={() => handleProductClick(1)}
                            id="v-pills-profile-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-profile"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-profile"
                            aria-selected="false"
                            style={{
                              padding: "10px 93px 10px 20px",
                              marginBottom: "10px",
                            }}
                          >
                            <img
                              src={
                                process.env.NEXT_PUBLIC_URL +
                                "/assets/img/category/c-2.png"
                              }
                              alt="category"
                            />
                            Jewellery
                          </button>
                        </Tab>
                        <Tab>
                          <button
                            className={`tab nav-link ${
                              selectedIndex == 2 ? "active" : ""
                            }`}
                            onClick={() => handleProductClick(2)}
                            id="v-pills-messages-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-messages"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-messages"
                            aria-selected="false"
                            style={{
                              padding: "10px 13px 10px 20px",
                              marginBottom: "10px",
                            }}
                          >
                            <img
                              src={
                                process.env.NEXT_PUBLIC_URL +
                                "/assets/img/category/c-3.png"
                              }
                              alt="category"
                            />
                            perfume & cosmetics
                          </button>
                        </Tab>
                        <Tab>
                          <button
                            className={`tab nav-link ${
                              selectedIndex == 3 ? "active" : ""
                            }`}
                            onClick={() => handleProductClick(3)}
                            id="v-pills-settings-tab"
                            data-bs-toggle="pill"
                            data-bs-target="#v-pills-settings"
                            type="button"
                            role="tab"
                            aria-controls="v-pills-settings"
                            aria-selected="false"
                            style={{
                              padding: "10px 54px 10px 20px",
                              marginBottom: "10px",
                            }}
                          >
                            <img
                              src={
                                process.env.NEXT_PUBLIC_URL +
                                "/assets/img/category/c-4.png"
                              }
                              alt="category"
                            />
                            glasses & bags
                          </button>
                        </Tab>
                      </div>
                    </TabList>
                    <div className="tab-content" id="v-pills-tabContent">
                      <Fade duration={500} delay={200}>
                        <TabPanel
                          className={`tab-pane fade ${
                            selectedIndex === 0 ? "show active" : ""
                          }`}
                          role="tabpanel"
                          aria-labelledby="v-pills-home-tab"
                        >
                          <div className="tab-list row">
                            <div className="col">
                              <h6 className="gi-col-title">Cothes</h6>
                              <ul className="cat-list">
                                {clothe.map((data, index) => (
                                  <li key={index}>
                                    <Link href={data.href}>{data.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col">
                              <h6 className="gi-col-title">Footwear</h6>
                              <ul className="cat-list">
                                {footwear.map((data, index) => (
                                  <li key={index}>
                                    <Link href={data.href}>{data.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </TabPanel>
                      </Fade>
                      <Fade duration={500} delay={200}>
                        <TabPanel
                          className={`tab-pane fade ${
                            selectedIndex === 1 ? "show active" : ""
                          }`}
                          role="tabpanel"
                          aria-labelledby="v-pills-profile-tab"
                        >
                          <div className="tab-list row">
                            <div className="col">
                              <h6 className="gi-col-title">Jewelry</h6>
                              <ul className="cat-list">
                                {jewelry.map((data, index) => (
                                  <li key={index}>
                                    <Link href={data.href}>{data.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col">
                              <h6 className="gi-col-title">Jewelry</h6>
                              <ul className="cat-list">
                                {jewelry.map((data, index) => (
                                  <li key={index}>
                                    <Link href={data.href}>{data.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </TabPanel>
                      </Fade>
                      <Fade duration={500} delay={200}>
                        <TabPanel
                          className={`tab-pane fade ${
                            selectedIndex === 2 ? "show active" : ""
                          }`}
                          role="tabpanel"
                          aria-labelledby="v-pills-messages-tab"
                        >
                          <div className="tab-list row">
                            <div className="col">
                              <h6 className="gi-col-title">Perfume</h6>
                              <ul className="cat-list">
                                {perfume.map((data, index) => (
                                  <li key={index}>
                                    <Link href={data.href}>{data.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="col">
                              <h6 className="gi-col-title">Cosmetics</h6>
                              <ul className="cat-list">
                                {cosmetics.map((data, index) => (
                                  <li key={index}>
                                    <Link href={data.href}>{data.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </TabPanel>
                      </Fade>
                      <Fade duration={500} delay={200}>
                        <TabPanel
                          className={`tab-pane fade ${
                            selectedIndex === 3 ? "show active" : ""
                          }`}
                          role="tabpanel"
                          aria-labelledby="v-pills-settings-tab"
                        >
                          <div className="tab-list row">
                            <div className="col">
                              <h6 className="gi-col-title">Juice</h6>
                              <ul className="cat-list">
                                <ul className="cat-list">
                                  {juices.map((data, index) => (
                                    <li key={index}>
                                      <Link href={data.href}>{data.name}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </ul>
                            </div>
                            <div className="col">
                              <h6 className="gi-col-title">soft drink</h6>
                              <ul className="cat-list">
                                {softdrink.map((data, index) => (
                                  <li key={index}>
                                    <Link href={data.href}>{data.name}</Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </TabPanel>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs>

            {/* <!-- Header Search Start --> */}
            <div className="align-self-center gi-header-search">
              <div className="header-search">
                <form className="gi-search-group-form" action="#">
                  <input
                    className="form-control gi-search-bar"
                    placeholder="Search Products..."
                    type="text"
                  />
                  <button className="search_submit" type="submit">
                    <i className="fi-rr-search"></i>
                  </button>
                </form>
              </div>
            </div>
            {/* <!-- Header Search End --> */}

            <div className="gi-location-block">
              <div className="gi-location-menu">
                <div className="gi-location-toggle">
                  <i className="fi fi-rr-marker location"></i>
                  <span className="gi-location-title d-1199 gi-location">
                    New York
                  </span>
                  <i
                    className="fi-rr-angle-small-down d-1199 gi-angle"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="gi-location-content">
                  <div className="gi-location-dropdown">
                    <div className="row gi-location-wrapper">
                      <ul className="loc-grid">
                        <li className="loc-list current">
                          <i className="fi fi-rr-map-marker-plus"></i>
                          <span className="gi-detail-current">
                            current Location
                          </span>
                        </li>
                        <li className="loc-list">
                          <i className="fi fi-rr-map-marker-plus"></i>
                          <span className="gi-detail">Los Angeles</span>
                        </li>
                        <li className="loc-list">
                          <i className="fi fi-rr-map-marker-plus"></i>
                          <span className="gi-detail">Chicago</span>
                        </li>
                        <li className="loc-list">
                          <i className="fi fi-rr-map-marker-plus"></i>
                          <span className="gi-detail">Houston</span>
                        </li>
                        <li className="loc-list">
                          <i className="fi fi-rr-map-marker-plus"></i>
                          <span className="gi-detail">Phoenix</span>
                        </li>
                        <li className="loc-list">
                          <i className="fi fi-rr-map-marker-plus"></i>
                          <span className="gi-detail">San Diego</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderManu;
