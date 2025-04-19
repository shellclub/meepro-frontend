"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import { Col, Row } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const Testimonials = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/testimonials", fetcher, {
    onSuccess,
    onError,
  });

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
      <section className="gi-testimonials-section padding-tb-40">
        <div className="container">
          <Row>
            <Col md={12}>
              <div className="testim-bg p-tb-80">
                <div className="section-title d-none">
                  <h2>
                    Customers <span>Review</span>
                  </h2>
                </div>
                <span className="gi-testi-shape-1"></span>
                <div className="gi-test-outer gi-test-section">
                  <Swiper
                    loop={true}
                    modules={[Autoplay, EffectCreative]}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                      },
                      next: {
                        translate: ["100%", 0, 0],
                      },
                    }}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={1}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                      },
                      768: {
                        slidesPerView: 1,
                      },
                      1024: {
                        slidesPerView: 1,
                      },
                    }}
                    onSlideChangeTransitionStart={(swiper) => {
                      const slides = swiper.slides;
                      slides.forEach((slide, index) => {
                        slide.style.opacity =
                          index === swiper.activeIndex ? "1" : "0";
                      });
                    }}
                    id="gi-testimonial-slider"
                    className="swiper-container"
                  >
                    {getData().map((item, index) => (
                      <SwiperSlide key={index} className="gi-test-item">
                        <img
                          src={item.subimage}
                          className="svg_img test_svg top"
                          alt="user"
                        />
                        <div className="gi-test-inner">
                          <div className="gi-test-img">
                            <img
                              alt="testimonial"
                              title="testimonial"
                              src={item.image}
                              width={100}
                            />
                          </div>
                          <div className="gi-test-content">
                            <div className="gi-test-desc">
                              {item.description}
                            </div>
                            <div className="gi-test-name ">{item.name}</div>
                            <div className="gi-test-designation">
                              {item.category}
                            </div>
                            <div className="gi-test-rating">
                              <i className="gicon gi-star fill"></i>
                              <i className="gicon gi-star fill"></i>
                              <i className="gicon gi-star fill"></i>
                              <i className="gicon gi-star fill"></i>
                              <i className="gicon gi-star fill"></i>
                            </div>
                          </div>
                        </div>
                        <img
                          src={item.subimagetwo}
                          className="svg_img test_svg bottom"
                          alt=""
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <span className="gi-testi-shape-2"></span>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
