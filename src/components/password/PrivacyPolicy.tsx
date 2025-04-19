"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PolicyOne from "./policy/PolicyOne";
import PolicyTwo from "./policy/PolicyTwo";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="gi-terms-conditions padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              <span>Privacy</span> Policy
            </h2>
            <p>Browse The Collection of Top Products</p>
          </div>
          <Row>
            <Col lg={6}>
              <PolicyOne />
            </Col>
            <Col lg={6} className="m-t-991">
              <PolicyTwo />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
