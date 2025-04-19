"use client";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";

const UserHistory = () => {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB")
  );

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-GB"));
  }, []);

  if (!login) {
    return (
      <div className="container">
        <p>
          Please <a href="/login">login</a> or <a href="/register">register</a>{" "}
          to view this page.
        </p>
      </div>
    );
  }

  return (
    <>
      <section className="gi-vendor-dashboard padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>Latest Order</h5>
                  <div className="gi-header-btn">
                    <a className="gi-btn-2" href="#">
                      View All
                    </a>
                  </div>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    {wishlistItems && wishlistItems.length > 0 ? (
                      <table className="table gi-vender-table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="wish-empt">
                          {wishlistItems.map((data, index) => (
                            <tr key={index} className="pro-gl-content">
                              <td scope="row">
                                <span>{index + 1}</span>
                              </td>
                              <td>
                                <img
                                  className="prod-img"
                                  src={data.image}
                                  alt="product image"
                                />
                              </td>
                              <td>
                                <span>{data.title}</span>
                              </td>
                              <td>
                                <span>{currentDate}</span>
                              </td>
                              <td>
                                <span>${data.newPrice}</span>
                              </td>
                              <td>
                                <span
                                  className={
                                    data.status === "Available" ? "avl" : "out"
                                  }
                                >
                                  {data.status}
                                </span>
                              </td>
                              <td>
                                <span>
                                  <a className="gi-btn-2" href="#">
                                    View All
                                  </a>
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>You have no latest orders!</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default UserHistory;
