"use client";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import QuestionsOne from "./questions/QuestionsOne";
import QuestionsTwo from "./questions/QuestionsTwo";

const Faq = ({}) => {
  return (
    <>
      <section className="gi-faq padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              frequently asked <span>questions</span>
            </h2>
            <p>Customer service management.</p>
          </div>
          <Row>
            <Col lg={6}>
              <QuestionsOne />
            </Col>
            <Col lg={6} className="m-t-991">
              <QuestionsTwo />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Faq;
