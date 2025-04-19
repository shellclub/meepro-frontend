import Link from "next/link";
import React from "react";
import { Col,Row } from "react-bootstrap";

const Breadcrumb = ({ title }) => {
  return (
    <>
      <div className="gi-breadcrumb m-b-40">
        <div className="container">
          <Row>
            <Col>
              <Row className="gi_breadcrumb_inner">
                <Col md={6} sm={12}>
                  <h2 className="gi-breadcrumb-title">{title}</h2>
                </Col>
                <Col md={6} sm={12}>
                  {/* <!-- gi-breadcrumb-list start --> */}
                  <ul className="gi-breadcrumb-list">
                    <li className="gi-breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="gi-breadcrumb-item active">{title}</li>
                  </ul>
                  {/* <!-- gi-breadcrumb-list end --> */}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
