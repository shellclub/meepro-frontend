"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import TrackViewModal from "../model/TrackViewModal";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLoadOrders } from "../login/CheckOut";
import useGetOrder from "@/hooks/order/useGetOrder";

const OrderCustomPage = () => {
  const { data: orderList, refetch } = useGetOrder();

  const [show, setShow] = useState(false);
  const orders = useSelector((state: RootState) => state.cart.orders);
  const router = useRouter();
  const dispatch = useDispatch();

  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB")
  );

  useLoadOrders();

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-GB"));
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <section className="gi-faq padding-tb-40 gi-wishlist">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              <span>การซื้อของฉัน</span>
            </h2>
            <p>การสั่งซื้อสินค้าของคุณคือสิ่งสำคัญที่สุดของเรา</p>
          </div>
          <Row>
            <Col md={12}>
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>รายการสั่งซื้อสินค้า</h5>
                  <div className="gi-header-btn">
                    <Link className="gi-btn-2" href="/shop-left-sidebar-col-3">
                      ช็อปต่อ
                    </Link>
                  </div>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-table">
                      <thead>
                        <tr>
                          <th scope="col">หมายเลขคำสั่งซื้อ</th>

                          <th scope="col">จำนวนสินค้าที่สั่ง</th>
                          <th scope="col">วันที่สั่งซื้อ</th>
                          <th scope="col">ราคารวม</th>
                          <th scope="col">สถานะ</th>
                          <th scope="col">จัดการ</th>
                        </tr>
                      </thead>
                      <tbody className="wish-empt">
                        {orderList?.map((el) => (
                          <tr
                            key={el.id}
                            style={{ cursor: "pointer" }}
                            className="pro-gl-content"
                          >
                            <td scope="row">
                              <span>{el.order_no}</span>
                            </td>

                            <td>
                              <span>{el.order_item?.length ?? 0}</span>
                            </td>
                            <td>
                              <span>{el.created_at}</span>
                            </td>
                            <td>
                              <span>${el.total_amount}</span>
                            </td>
                            <td>
                              <span className="avl">
                                {el.order_status_dict?.value}
                              </span>
                            </td>
                            <td>
                              <span className="avl">
                                <Link
                                  href={`/orders/${el.id}`}
                                  style={{ padding: "20px 30px" }}
                                  className="gi-btn-2"
                                >
                                  ดูรายการ
                                </Link>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      {/* <section className="gi-faq padding-tb-40 gi-wishlist">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>complete Orders</h5>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-table">
                      <thead>
                        <tr>
                          <th scope="col">Orders ID</th>
                          <th scope="col">Shipping</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Date</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody className="wish-empt">
                        {orders.filter((o: any) => o.status == "Completed")
                          .length === 0 ? (
                          <tr>
                            <td colSpan={7} className="text-center">
                              <span style={{ display: "flow" }}>
                                No orders found
                              </span>
                            </td>
                          </tr>
                        ) : (
                          <>
                            {orders
                              .filter((o: any) => o.status == "Completed")
                              .map((data: any, index: number) => (
                                <tr
                                  key={index}
                                  style={{ cursor: "pointer" }}
                                  onClick={handleShow}
                                  className="pro-gl-content"
                                >
                                  <td scope="row">
                                    <span>{data.orderId}</span>
                                  </td>
                                  <td>
                                    <span>{data.shippingMethod}</span>
                                  </td>
                                  <td>
                                    <span>{data.totalItems}</span>
                                  </td>
                                  <td>
                                    <span>{currentDate}</span>
                                  </td>
                                  <td>
                                    <span>${data.totalPrice}</span>
                                  </td>
                                  <td>
                                    <span className="out">Completed</span>
                                  </td>
                                  <td>
                                    <span className="avl">
                                      <a
                                        style={{ padding: "20px 30px" }}
                                        className="gi-btn-2"
                                        href="#"
                                      >
                                        View
                                      </a>
                                    </span>
                                  </td>
                                </tr>
                              ))}
                          </>
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section> */}
      <TrackViewModal
        currentDate={currentDate}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
};

export default OrderCustomPage;
