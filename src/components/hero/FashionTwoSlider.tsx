"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const FashionTwoSlider = () => {
  return (
    <>
      <section className="section gi-hero ">
        <div className="container-fulid position-relative">
          <div className="gi-main-content">
            {/* <!-- Hero Slider Start --> */}
            <div className="gi-slider-content">
              <div className="gi-main-slider">
                <div className="gi-slider slider-home-3 main-slider-nav main-slider-dot">
                  {/* <!-- Main slider --> */}
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={2000}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    className="swiper-wrapper"
                  >
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-3">
                      <div className="container">
                        <div className="gi-slide-content slider-animation">
                          <p>
                            Starting at $ <b>20.00</b>
                          </p>
                          <h1 className="gi-slide-title">
                            Fashion sale for women&apos;s
                          </h1>
                          <div className="gi-slide-btn">
                            <a href="#" className="gi-btn-1">
                              Shop Now
                              <i
                                className="fi-rr-angle-double-small-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-4">
                      <div className="container">
                        <div className="gi-slide-content slider-animation">
                          <p>
                            Starting at $ <b>29.99</b>
                          </p>
                          <h1 className="gi-slide-title">
                            Explore glasses sale for Women&apos;s
                          </h1>
                          <div className="gi-slide-btn">
                            <a href="#" className="gi-btn-1">
                              Shop Now
                              <i
                                className="fi-rr-angle-double-small-right"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                    <div
                      style={{ position: "relative", left: "100px" }}
                      className="swiper-pagination swiper-pagination-white"
                    ></div>
                    <div className="swiper-buttons">
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FashionTwoSlider;
