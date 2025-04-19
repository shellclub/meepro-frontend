"use client";
import Link from "next/link";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <Fade triggerOnce direction="up" duration={2000} delay={200}>
      <section
        className="gi-banner padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="container">
          <Row>
            <Col md={12}>
              <div
                className="gi-animated-banner"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="200"
              >
                <h2 className="d-none">Offers</h2>
                <div className="gi-bnr-detail">
                  <div className="gi-bnr-info">
                    <h2>
                      Fresh Fruits <br></br>Healthy Products
                    </h2>
                    <h3>
                      30% off sale <span>Hurry up!!!</span>
                    </h3>
                    <Link href="/shop-left-sidebar-col-3" className="gi-btn-2">
                      Shop now
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </Fade>
  );
};

export default Banner;
