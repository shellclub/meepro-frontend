"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FashionTwoTrending from "./fashion-two/FashionTwoTrending";
import FashionTwoTopRated from "./fashion-two/FashionTwoTopRated";
import FashionTwoSelling from "./fashion-two/FashionTwoSelling";

const TrendingFashionTwo = () => {
  return (
    <>
      <div className="gi-offer-section padding-tb-40">
        <Container>
          <Row>
            {/* <!-- Trending --> */}
            <Col
              lg={12}
              className="gi-all-product-content gi-new-product-content wow fadeInUp padding-b-40"
              data-wow-delay=".4s"
            >
              <FashionTwoTrending />
            </Col>
            {/* <!-- Top Rated --> */}
            <Col
              lg={12}
              className="gi-all-product-content gi-new-product-content wow fadeInUp padding-b-40"
              data-wow-delay=".6s"
            >
              <FashionTwoTopRated />
            </Col>
            {/* <!-- Top Selling --> */}
            <Col
              lg={12}
              className="gi-all-product-content gi-new-product-content wow fadeInUp"
              data-wow-delay=".8s"
            >
              <FashionTwoSelling />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TrendingFashionTwo;
