"use client";
import { Col, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import TrendingProduct from "./grocery-item/TrendingProduct";
import TopRatedProduct from "./grocery-item/TopRatedProduct";
import SellingProduct from "./grocery-item/SellingProduct";

const Trending = () => {
  return (
    <div>
      <section className="gi-offer-section padding-tb-40">
        <div className="container">
          <Row>
            {/* <!-- Banner --> */}
            <Col
              xl={3}
              lg={6}
              md={6}
              sm={12}
              className="col-xs-6 gi-all-product-content gi-new-product-content wow fadeInUp"
            >
              <Fade triggerOnce direction="up" className="gi-banner-inner">
                <div className="gi-banner-block gi-banner-block-1">
                  <div className="banner-block">
                    <div className="banner-content">
                      <div className="banner-text">
                        <span className="gi-banner-title">
                          สินค้ายอดนิยมจากทาง Mee PRO PETSHOP
                        </span>
                      </div>
                      <a href="/shop-left-sidebar-col-3" className="gi-btn-2">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </Fade>
            </Col>
            {/* <!-- Trending --> */}
            
              <TrendingProduct />

            {/* <!-- Top Rated --> */}
            
              <TopRatedProduct />

            {/* <!-- Top Selling --> */}
            
              <SellingProduct />
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Trending;
