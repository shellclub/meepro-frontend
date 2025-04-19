import React from "react";
import { Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const TrackViewModal = ({ handleClose, show, currentDate }) => {
  return (
    <>
      <Modal
        centered
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="gi-Track-Order gi-track padding-tb-40"
      >
        <button
          type="button"
          className="btn-close qty_close"
          data-bs-dismiss="modal"
          aria-label="Close"
          onClick={handleClose}
        ></button>
        <Modal.Body className="container">
          <Row style={{ padding: "18px" }}>
            <Col lg={12}>
              {/* <!-- Details--> */}
              <Row>
                <Col md={4} className="m-b-767">
                  <div className="gi-track-card">
                    <span className="gi-track-title">order</span>
                    <span>#6152</span>
                  </div>
                </Col>
                <Col md={4} className="m-b-767">
                  <div className="gi-track-card">
                    <span className="gi-track-title">Grasshoppers</span>
                    <span>v534hb</span>
                  </div>
                </Col>
                <Col md={4} className="m-b-767">
                  <div className="gi-track-card">
                    <span className="gi-track-title">Expected date</span>
                    <span>{currentDate}</span>
                  </div>
                </Col>
              </Row>
              {/* <ul className="gi" data-gi-steps="5">
                {steps.map((step: any, index: number) => (
                  <li key={index} className={step.done ? "gi-done" : "gi-todo"}>
                    {step.title}
                  </li>
                ))}
              </ul> */}
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default TrackViewModal;
