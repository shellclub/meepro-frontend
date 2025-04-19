"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const FashionHeroSlider = () => {
  return (
    <>
      <section className="section gi-hero m-tb-40">
        <div className="container">
          <div className="gi-main-content">
            {/* <!-- Hero Slider Start --> */}
            <div className="gi-slider-content">
              <div className="gi-main-slider">
                <div className="swiper-pagination-white gi-slider main-slider-nav main-slider-dot">
                  {/* <!-- Main slider  --> */}
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
                    spaceBetween={500}
                    slidesPerView={1}
                    className="swiper-wrapper swiper-radius"
                  >
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-3">
                      <div className="gi-slide-content slider-animation">
                        <p>
                          Starting at $ <b>20.00</b>
                        </p>
                        <h1 className="gi-slide-title">
                          Fashion sale for women&apos;s
                        </h1>
                        <div className="gi-slide-btn">
                          <a href="" className="gi-btn-1">
                            Shop Now{" "}
                            <i
                              className="fi-rr-angle-double-small-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-4">
                      <div className="gi-slide-content slider-animation">
                        <p>
                          Starting at $ <b>29.99</b>
                        </p>
                        <h1 className="gi-slide-title">
                          Explore jackets sale for men&apos;s
                        </h1>
                        <div className="gi-slide-btn">
                          <a href="#" className="gi-btn-1">
                            Shop Now{" "}
                            <i
                              className="fi-rr-angle-double-small-right"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </div>
                      </div>
                    </SwiperSlide>
                    <div className="swiper-pagination swiper-pagination-white"></div>
                    <div className="swiper-buttons">
                      <div className=" swiper-button-next"></div>
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

export default FashionHeroSlider;
