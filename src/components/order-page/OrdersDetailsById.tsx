"use client";
import { CommonHelper } from "@/helper/common-helper";
import useGetOrderById from "@/hooks/order/useGetOrderById";
import { useRouter } from "next/navigation";
import { Col, Row } from "react-bootstrap";

const ProductOrderDetailsById = ({ id }) => {
  const { data: orderData, refetch } = useGetOrderById(id);

  const router = useRouter();

  const handleBackBtn = () => {
    router.push("/orders");
  };

  return (
    <>
      <section className="gi-faq padding-tb-40 gi-wishlist">
        <div className="container">
          <Row>
            <Col lg={3} className="m-b-991">
              <div className="bill-box" style={{ lineHeight: "25px" }}>
                <h5 style={{ textAlign: "center" }}>ที่อยู่ในการจัดส่ง</h5>
                <div className="gi-single-list">
                  <ul>
                    <li>
                      <strong className="gi-check-subtitle">ที่ผู้รับ :</strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.user_address?.recipient_name}
                      </span>
                    </li>
                    <li>
                      <strong className="gi-check-subtitle">ที่อยู่ :</strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.user_address?.address}
                      </span>
                    </li>

                    <li>
                      <strong className="gi-check-subtitle">ตำบล :</strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.user_address?.sub_district}
                      </span>
                    </li>
                    <li>
                      <strong className="gi-check-subtitle">อำเภอ :</strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.user_address?.district}
                      </span>
                    </li>
                    <li>
                      <strong className="gi-check-subtitle">จังหวัด :</strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.user_address?.province}
                      </span>
                    </li>
                    <li>
                      <strong className="gi-check-subtitle">
                        รหัสไปรษณีย์ :
                      </strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.user_address?.postal_code}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="bill-box"
                style={{ lineHeight: "25px", marginTop: 10 }}
              >
                <h5 style={{ textAlign: "center" }}>การชำระเงิน</h5>
                <div className="gi-single-list">
                  <ul>
                    <li>
                      <strong className="gi-check-subtitle">
                        สถานะการชำระ :
                      </strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.payment?.check_slip_message}
                      </span>
                    </li>
                    <li>
                      <strong className="gi-check-subtitle">จำนวนเงิน :</strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.payment?.amount}
                      </span>
                    </li>

                    <li>
                      <strong className="gi-check-subtitle">
                        วันที่ชำระ :
                      </strong>{" "}
                      <span style={{ color: "#777" }}>
                        {orderData?.payment?.paid_date}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={12} lg={9}>
              <div
                className="gi-vendor-dashboard-card"
                style={{ padding: 10, marginBottom: 10 }}
              >
                {" "}
                <h5 style={{ textAlign: "center" }}>ข้อมูลคำสั่งซื้อ</h5>
                <ul>
                  <li>
                    <strong className="gi-check-subtitle">
                      หมายเลขคำสั่งซื้อ :
                    </strong>{" "}
                    <span style={{ color: "#777" }}>{orderData?.order_no}</span>
                  </li>
                  <li>
                    <strong className="gi-check-subtitle">สถานะ :</strong>{" "}
                    <span style={{ color: "#777" }}>
                      {orderData?.order_status_dict?.value}
                    </span>
                  </li>
                </ul>
              </div>
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
                  <h5>รายการสินค้า</h5>
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
                          <th
                            style={{
                              textAlign: "center",
                            }}
                            scope="col"
                          >
                            ลำดับ
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                            }}
                            scope="col"
                          >
                            รูปสินค้า
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                            }}
                            scope="col"
                          >
                            รายการสินค้า
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                            }}
                            scope="col"
                          >
                            ราคา
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                            }}
                            scope="col"
                          >
                            จำนวน
                          </th>
                          <th
                            style={{
                              textAlign: "center",
                            }}
                            scope="col"
                          >
                            ราคารวม
                          </th>
                        </tr>
                      </thead>
                      <tbody
                        style={{ textAlign: "center" }}
                        className="wish-empt"
                      >
                        {orderData?.order_item?.map((product, productIndex) => (
                          <tr key={`${product.id}`} className="pro-gl-content">
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
                              <span
                                style={{
                                  maxWidth: "650px",
                                  textAlign: "start",
                                  whiteSpace: "normal",
                                  wordWrap: "break-word",
                                }}
                              >
                                {product.title} <br /> • {product.option}
                              </span>
                            </td>
                            <td
                              style={{
                                maxWidth: "100px",
                                textAlign: "end",
                                whiteSpace: "normal",
                                wordWrap: "break-word",
                              }}
                            >
                              {CommonHelper.formatNumber(
                                product.unit_price ?? 0
                              )}
                            </td>
                            <td>{product.quantity}</td>
                            <td
                              style={{
                                maxWidth: "100px",
                                textAlign: "end",
                                whiteSpace: "normal",
                                wordWrap: "break-word",
                              }}
                            >
                              {CommonHelper.formatNumber(
                                product.total_price ?? 0
                              )}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <td
                            style={{
                              maxWidth: "100px",
                              textAlign: "end",
                              whiteSpace: "normal",
                              wordWrap: "break-word",
                            }}
                            colSpan={5}
                          >
                            รวม
                          </td>

                          <td
                            style={{
                              maxWidth: "120px",
                              textAlign: "end",
                              whiteSpace: "normal",
                              wordWrap: "break-word",
                            }}
                          >
                            {orderData?.total_amount}
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

export default ProductOrderDetailsById;
