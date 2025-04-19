"use client";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

interface Product {
  id: number;
  title: string;
  newPrice: number;
  waight: string;
  image: string;
  imageTwo: string;
  date: string;
  status: string;
  rating: number;
  oldPrice: number;
  location: string;
  brand: string;
  sku: number;
  category: string;
  quantity: number;
}

interface Order {
  products: Product[];
}

const ProductOrderDetails = ({ id }) => {
  const orders = useSelector((state: RootState) => state.cart.orders);
  const order = orders.find((order: any) => (order as any).orderId === id);
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState<string>(
    new Date().toLocaleDateString("en-GB")
  );

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-GB"));
  }, []);

  const handleBackBtn = () => {
    router.push("/orders");
  };

  function isOrderValid(order: any): order is {
    address: {
      firstName: string;
      lastName: string;
      address: string;
      city: string;
      stateName: string;
      countryName: string;
      postalCode: string;
    };
  } {
    return (
      typeof order === "object" &&
      order !== null &&
      typeof order.address === "object" &&
      order.address !== null &&
      typeof order.address.firstName === "string" &&
      typeof order.address.lastName === "string" &&
      typeof order.address.address === "string" &&
      typeof order.address.city === "string" &&
      typeof order.address.stateName === "string" &&
      typeof order.address.countryName === "string" &&
      typeof order.address.postalCode === "string"
    );
  }

  function isOrderWithData(obj: any): obj is Order {
    return (
      typeof obj === "object" && obj !== null && Array.isArray(obj.products)
    );
  }

  return (
    <>
      <section className="gi-faq padding-tb-40 gi-wishlist">
        <div className="container">
          <Row>
            <Col
              lg={3}
              // style={{ padding: "15px", background: "transparent" }}
              className="m-b-991"
            >
              <div className="bill-box" style={{ lineHeight: "25px" }}>
                {isOrderValid(order) ? (
                  <div className="gi-single-list">
                    <ul>
                      <li>
                        <strong className="gi-check-subtitle">Name :</strong>{" "}
                        <span style={{ color: "#777" }}>
                          {order?.address.firstName} {order?.address.lastName}{" "}
                        </span>
                      </li>
                      <li>
                        <strong className="gi-check-subtitle">Address :</strong>{" "}
                        <span style={{ color: "#777" }}>
                          {order?.address.address}
                        </span>
                      </li>
                      <li>
                        <strong className="gi-check-subtitle">
                          PostalCode :
                        </strong>{" "}
                        <span style={{ color: "#777" }}>
                          {order?.address.postalCode}
                        </span>
                      </li>
                      <li>
                        <strong className="gi-check-subtitle">Country :</strong>{" "}
                        <span style={{ color: "#777" }}>
                          {order?.address.countryName}
                        </span>
                      </li>
                      <li>
                        <strong className="gi-check-subtitle">State :</strong>{" "}
                        <span style={{ color: "#777" }}>
                          {order?.address.stateName}
                        </span>
                      </li>
                      <li>
                        <strong className="gi-check-subtitle">City :</strong>{" "}
                        <span style={{ color: "#777" }}>
                          {order?.address.city}
                        </span>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <span className="gi-check-subtitle">Address is empty...</span>
                )}
              </div>
            </Col>
            <Col md={12} lg={9}>
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <button
                    onClick={handleBackBtn}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: "#5caf90",
                      padding: "10px 10px",
                      borderRadius: "4px",
                      color: "whitesmoke",
                    }}
                    className=""
                    type="submit"
                  >
                    <i
                      style={{ display: "flex" }}
                      className="fi fi-rs-arrow-left"
                    ></i>
                  </button>
                  <h5>Order Items</h5>
                  <span
                    style={{ float: "inline-end" }}
                    className="gi-register-wrap"
                  ></span>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Image</th>
                          <th scope="col">Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>
                      <tbody
                        style={{ textAlign: "center" }}
                        className="wish-empt"
                      >
                        {isOrderWithData(order) ? (
                          order.products.map(
                            (product: Product, productIndex: number) => (
                              <tr
                                key={`${productIndex}`}
                                className="pro-gl-content"
                              >
                                <td scope="row">
                                  <span>{productIndex + 1}</span>
                                </td>
                                <td>
                                  <img
                                    className="prod-img"
                                    src={product.image}
                                    alt="product image"
                                  />
                                </td>
                                <td>
                                  <span>{product.title}</span>
                                </td>
                                <td>
                                  <span>{currentDate}</span>
                                </td>
                                <td>
                                  <span>${product.newPrice}</span>
                                </td>
                              </tr>
                            )
                          )
                        ) : (
                          <tr>
                            <td colSpan={12}>
                              <span style={{ color: "#777" }}>
                                Order list empty...
                              </span>
                            </td>
                          </tr>
                        )}
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

export default ProductOrderDetails;
