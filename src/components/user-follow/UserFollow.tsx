"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";

const UserFollow = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const SwitchOn = useSelector((state: RootState) => state.cart.isSwitchOn);

  if (!login) {
    return (
      <div className="container">
        <p>
          Please <a href="/login">login</a> or <a href="/register">register</a> to view this page.
        </p>
      </div>
    );
  }
  return (
    <>
      <section className="gi-User-Follow padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            <VendorSidebar />
            <Col lg={9} md={12} className="mb-24">
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>Your Follow list</h5>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-vender-table">
                      <thead>
                        <tr>
                          <th scope="col">Vendor</th>
                          <th scope="col">Name</th>
                          <th scope="col">Product</th>
                          <th scope="col">Level</th>
                          <th scope="col">Country</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/vendor/1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>Zshop Mart</span>
                          </td>
                          <td>
                            <span>678</span>
                          </td>
                          <td>
                            <span>8</span>
                          </td>
                          <td>
                            <span>India</span>
                          </td>
                          <td>
                            <span>
                              <a href="#" className="gi-btn-2">
                                Unfollow
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/vendor/2.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>Crivi Fashion</span>
                          </td>
                          <td>
                            <span>901</span>
                          </td>
                          <td>
                            <span>8</span>
                          </td>
                          <td>
                            <span>Turkey</span>
                          </td>
                          <td>
                            <span>
                              <a href="#" className="gi-btn-2">
                                Unfollow
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/vendor/3.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>Miramar Mall</span>
                          </td>
                          <td>
                            <span>589</span>
                          </td>
                          <td>
                            <span>10</span>
                          </td>
                          <td>
                            <span>USA</span>
                          </td>
                          <td>
                            <span>
                              <a href="#" className="gi-btn-2">
                                Unfollow
                              </a>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/vendor/4.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>BrandX Retails</span>
                          </td>
                          <td>
                            <span>390</span>
                          </td>
                          <td>
                            <span>9</span>
                          </td>
                          <td>
                            <span>Brazil</span>
                          </td>
                          <td>
                            <span>
                              <a href="#" className="gi-btn-2">
                                Unfollow
                              </a>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default UserFollow;
