import React from "react";
import { Col, Row } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section className="gi-about padding-tb-40">
        <div className="container">
          <Row>
            <Col xl={6} md={12}>
              <div className="gi-about-img">
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL + "/assets/img/common/about.png"
                  }
                  className="v-img"
                  alt="about"
                />
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    "/assets/img/common/about-2.png"
                  }
                  className="h-img"
                  alt="about"
                />
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL +
                    "/assets/img/common/about-3.png"
                  }
                  className="h-img"
                  alt="about"
                />
              </div>
            </Col>
            <Col xl={6} md={12}>
              <div className="gi-about-detail">
                <div className="section-title">
                  <h2>
                    Who We <span>Are?</span>
                  </h2>
                  <p>
                    We’re here to serve only the best products for you.
                    Enriching your homes with the best essentials.
                  </p>
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <p>
                  Lorem Ipsum has survived not only five centuries, but also the
                  leap into electronic typesetting, remaining essentially
                  unchanged.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default About;
