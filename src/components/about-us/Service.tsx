import React from "react";
import Services from "../service/Services";
import { Container, Row } from "react-bootstrap";

const Service = () => {
  return (
    <>
      <section className="gi-service-section padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Our <span>Services</span>
            </h2>
            <p>
              Customer service should not be a department. It should be the
              entire company.
            </p>
          </div>
          <Row className="m-tb-minus-12">
            <Services />
          </Row>
        </div>
      </section>
    </>
  );
};

export default Service;
