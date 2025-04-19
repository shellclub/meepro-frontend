"use client";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { RootState } from "@/store";
import { useSelector } from "react-redux";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

const VendorDeshboard = () => {
  const [products, setProducts] = useState<any[]>([]);

  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const options: any = {
    chart: {
      height: 365,
      type: "line",
      stacked: false,
      foreColor: "#373d3f",
      sparkline: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    stroke: {
      width: [0, 4, 4],
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        columnWidth: "30%",
        borderRadius: 10,
      },
    },
    colors: ["#fadfa2", "#89a6ff", "#54d3c2"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    legend: {
      show: true,
      horizontalAlign: "center",
      offsetX: 0,
      offsetY: 2,
      markers: {
        width: 12,
        height: 12,
        radius: 4,
      },
      itemMargin: {
        horizontal: 10,
        vertical: 0,
      },
    },
    grid: {
      show: false,
      padding: {
        top: 0,
        right: -2,
        bottom: 15,
        left: 10,
      },
    },
    tooltip: {
      theme: "dark",
      shared: true,
      y: [
        {
          formatter: (e: number) => (e !== undefined ? e.toFixed(0) + "k" : e),
        },
        {
          formatter: (e: number) =>
            e !== undefined ? "$" + e.toFixed(2) + "k" : e,
        },
        {
          formatter: (e: number) =>
            e !== undefined ? "$" + e.toFixed(2) + "k" : e,
        },
      ],
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 300,
          },
          yaxis: {
            show: false,
          },
          plotOptions: {
            bar: {
              columnWidth: "40%",
              borderRadius: 5,
            },
          },
        },
      },
    ],
  };

  const series: any = [
    {
      name: "Orders",
      type: "bar",
      data: [23, 12, 23, 22, 15, 42, 31, 27, 45, 28, 37, 45],
    },
    {
      name: "Revenue",
      type: "line",
      data: [
        44.64, 55.48, 45.15, 67.62, 52.57, 44.38, 41.85, 41.44, 56.56, 27.84,
        43.78, 52.57,
      ],
    },
    {
      name: "Expense",
      type: "line",
      data: [
        30.55, 24.67, 36.85, 37.08, 42.85, 38.85, 46.64, 45.42, 49.89, 36.56,
        38.49, 55.57,
      ],
    },
  ];

  useEffect(() => {
    const storedProductsString = localStorage.getItem("products");

    if (storedProductsString) {
      const storedProducts = JSON.parse(storedProductsString);
      setProducts(storedProducts);
    } else {
      console.error("No products found in localStorage");
    }
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
            <Col lg={9} md={12} className="mb-24">
              <Row>
                <div className="container">
                  <div className="gi-vendor-cover">
                    <div className="detail">
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/vendor/1.jpg"
                        }
                        alt="vendor"
                      />
                      <div className="v-detail">
                        <h5>Centora Fashion</h5>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Standard dummy text ever since
                          the 1500s.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Row>
              <Row>
                <Col lg={3} md={6}>
                  <div className="gi-vendor-dashboard-sort-card">
                    <h5>Products</h5>
                    <h3>625</h3>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="gi-vendor-dashboard-sort-card">
                    <h5>Orders</h5>
                    <h3>56</h3>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="gi-vendor-dashboard-sort-card">
                    <h5>Earnings</h5>
                    <h3>$56</h3>
                  </div>
                </Col>
                <Col lg={3} md={6}>
                  <div className="gi-vendor-dashboard-sort-card">
                    <h5>Sales</h5>
                    <h3>550</h3>
                  </div>
                </Col>
              </Row>
              <div className="gi-vendor-dashboard-card m-b-30px">
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
                    {products && products.length > 0 ? (
                      <table className="table gi-vender-table">
                        <thead>
                          <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Image</th>
                            <th scope="col">Name</th>
                            <th scope="col">Method</th>
                            <th scope="col">Status</th>
                            <th scope="col">Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((data, index) => (
                            <tr key={index}>
                              <th scope="row">
                                <span>{data.id}</span>
                              </th>
                              <td>
                                <span>
                                  <img
                                    className="prod-img"
                                    src={data.image}
                                    alt="product image"
                                  />
                                </span>
                              </td>
                              <td>
                                <span>{data.title}</span>
                              </td>
                              <td>
                                <span>COD</span>
                              </td>
                              <td>
                                <span>Pending</span>
                              </td>
                              <td>
                                <span>${data.newPrice}</span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    ) : (
                      <p>You have no latest orders</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="gi-vendor-dashboard-card m-b-30px">
                <div className="gi-vendor-card-header">
                  <h5>Product List</h5>
                  <div className="gi-header-btn">
                    <a
                      className="gi-btn-2"
                      href="#"
                      style={{ marginRight: "5px" }}
                    >
                      View All
                    </a>
                    <a className="gi-btn-2" href="#">
                      ADD
                    </a>
                  </div>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-vender-table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Image</th>
                          <th scope="col">Name</th>
                          <th scope="col">Method</th>
                          <th scope="col">Status</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">
                            <span>684</span>
                          </th>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/product-images/1_1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>Crunchy Triangle Chips Snacks</span>
                          </td>
                          <td>
                            <span>COD</span>
                          </td>
                          <td>
                            <span>Pending</span>
                          </td>
                          <td>
                            <span>$548</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span>225</span>
                          </th>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/product-images/2_1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>Dates Value Pack Pouch</span>
                          </td>
                          <td>
                            <span>Cash</span>
                          </td>
                          <td>
                            <span>Pending</span>
                          </td>
                          <td>
                            <span>$320</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span>984</span>
                          </th>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/product-images/3_1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>Crunchy Triangle Chips Snacks</span>
                          </td>
                          <td>
                            <span>Ewallets</span>
                          </td>
                          <td>
                            <span>On Way</span>
                          </td>
                          <td>
                            <span>$200</span>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <span>548</span>
                          </th>
                          <td>
                            <span>
                              <img
                                className="prod-img"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/product-images/4_1.jpg"
                                }
                                alt="product image"
                              />
                            </span>
                          </td>
                          <td>
                            <span>Banana Chips Snacks & Spices</span>
                          </td>
                          <td>
                            <span>Bank Transfers</span>
                          </td>
                          <td>
                            <span>Delivered</span>
                          </td>
                          <td>
                            <span>$214</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>Growth statastics</h5>
                  <div className="gi-header-btn">
                    <a className="gi-btn-2" href="#">
                      View All
                    </a>
                  </div>
                </div>
                <div className="gi-vendor-card-body">
                  <div id="growthChart">
                    <ApexCharts
                      options={options}
                      series={series}
                      type="line"
                      height={350}
                    />
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

export default VendorDeshboard;
