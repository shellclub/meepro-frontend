"use client";
import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import {
  FaEnvelope,
  FaMobileAlt,
  FaGlobeAmericas,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <>
      <section className="gi-contact padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Get in <span>Touch</span>
            </h2>
            <p>
              Please select a topic below related to you inquiry. If you don t
              fint what you need, fill out our contact form.
            </p>
          </div>
          <Row className="gi-contact-detail m-tb-minus-12">
            <Col sm={6} lg={4} className="p-tp-12">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-envelope" aria-hidden="true">
                      <FaEnvelope />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Mail & Website</h3>
                    <p>
                      <i className="fa fa-envelope" aria-hidden="true">
                        <FaEnvelope />
                      </i>{" "}
                      &nbsp; mail.example@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-globe" aria-hidden="true">
                        <FaGlobeAmericas />
                      </i>{" "}
                      &nbsp; www.yourdomain.com
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>

            <Col sm={6} lg={4} className="p-tp-12">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-mobile" aria-hidden="true">
                      <FaMobileAlt />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Contact</h3>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true">
                        <FaMobileAlt />
                      </i>{" "}
                      &nbsp; (+91)-9876XXXXX
                    </p>
                    <p>
                      <i className="fa fa-mobile" aria-hidden="true">
                        <FaMobileAlt />
                      </i>{" "}
                      &nbsp; (+91)-987654XXXX
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>

            <Col sm={6} lg={4} className="p-tp-12 m-auto">
              <div className="gi-box">
                <div className="detail">
                  <div className="icon">
                    <i className="fa fa-map-marker" aria-hidden="true">
                      <FaMapMarkerAlt />
                    </i>
                  </div>
                  <div className="info">
                    <h3 className="title">Address</h3>
                    <p>
                      <i className="fa fa-map-marker" aria-hidden="true">
                        <FaMapMarkerAlt />
                      </i>{" "}
                      &nbsp; Ruami Mello Moraes Filho, 987 - Salvador - MA,
                      40352, Brazil.
                    </p>
                  </div>
                </div>
                <div className="space"></div>
              </div>
            </Col>
          </Row>
          <Row className="p-t-80">
            <Col md={6}>
              <iframe src="//maps.google.com/maps?q=-12.942227,-38.480291&z=15&output=embed"></iframe>
            </Col>
            <Col md={6}>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="fname"
                    placeholder="Full Name"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter Full Name.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="email"
                    className="form-control"
                    id="umail"
                    placeholder="Email"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter correct username.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <Form.Control
                    type="text"
                    className="form-control"
                    id="phone"
                    placeholder="Phone"
                    pattern="^\d{10,12}$"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter 10-12 digit number.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-group">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    placeholder="Message"
                    required
                  ></textarea>
                  <Form.Control.Feedback type="invalid">
                    Please Enter Message.
                  </Form.Control.Feedback>
                </Form.Group>
                <button type="submit" className="gi-btn-2">
                  Submit
                </button>
              </Form>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Contact;
