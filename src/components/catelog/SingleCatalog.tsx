import Shop from "../shop-sidebar/Shop";
import { Col, Row } from "react-bootstrap";

const SingleCatelog = () => {
  return (
    <>
      <section className="gi-single-vendor padding-tb-40">
        <div className="container">
          <Row>
            <Col lg={12}>
              <div className="gi-page-description">
                <img
                  src={process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/1.jpg"}
                  alt="vendor"
                />
                <div className="detail">
                  <h5 className="gi-desc-title">About Our Firm</h5>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>Neon Foods</h5>
                <span>( Retail Business )</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>Level</h5>
                <span>Level : 9 out of 10</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>Seller Products</h5>
                <span>568 Products</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>Seller since</h5>
                <span>1year and 11months</span>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section className="gi-shop">
        <div className="container">
          <Shop order={"order-lg-last order-md-first"} lg={9} xl={4} />
        </div>
      </section>
    </>
  );
};

export default SingleCatelog;
