"use client";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemCard from "../product-item/ItemCard";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const MultiCatalog = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/deal", fetcher, { onSuccess, onError });

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (
      <div>
        <Spinner />
      </div>
    );

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

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
          <Row className="overflow-hidden m-t-30px m-b-minus-24px">
            <div className="gi-new-prod-section col-lg-12">
              <div className="gi-products">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={300}
                  className="gi-new-block m-minus-lr-12"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <Swiper
                    loop={true}
                    autoplay={{ delay: 1000 }}
                    slidesPerView={5}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      320: {
                        slidesPerView: 1,
                      },
                      425: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1025: {
                        slidesPerView: 5,
                      },
                    }}
                    className="deal-slick-carousel gi-product-slider"
                  >
                    {getData().map((item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <ItemCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Fade>
              </div>
            </div>
          </Row>
        </div>
      </section>
      <section className="gi-single-vendor padding-tb-40">
        <div className="container">
          <Row>
            <Col lg={12}>
              <div className="gi-page-description">
                <img
                  src={process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/3.jpg"}
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
                <h5>Mari fashion</h5>
                <span>( Retail Shop )</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>Level</h5>
                <span>Level : 5 out of 10</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>Seller Products</h5>
                <span>561 Products</span>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="gi-vendor-dashboard-sort-card">
                <h5>Seller since</h5>
                <span>2year and 3months</span>
              </div>
            </Col>
          </Row>
          <Row className="overflow-hidden m-t-30px m-b-minus-24px">
            <div className="gi-new-prod-section col-lg-12">
              <div className="gi-products">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={300}
                  className="gi-new-block m-minus-lr-12"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <Swiper
                    loop={true}
                    autoplay={{ delay: 1000 }}
                    slidesPerView={5}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      320: {
                        slidesPerView: 1,
                      },
                      425: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1025: {
                        slidesPerView: 5,
                      },
                    }}
                    className="deal-slick-carousel gi-product-slider"
                  >
                    {getData().map((item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <ItemCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Fade>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default MultiCatalog;
