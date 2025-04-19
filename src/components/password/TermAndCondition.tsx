"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TermOne from "./term-condition/TermOne";
import TermTwo from "./term-condition/TermTwo";

const TermAndCondition = () => {
  return (
    <>
      <section className="gi-terms-conditions padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              <span>Terms</span> & Condition
            </h2>
            <p>Browse The Collection of Top Products</p>
          </div>
          <Row>
            <Col lg={6}>
              <TermOne />
            </Col>
            <Col lg={6} className="m-t-991">
              <TermTwo />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default TermAndCondition;
