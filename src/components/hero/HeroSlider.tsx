"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import Link from "next/link";
import useGetAdvert from "@/hooks/advert/useGetAdvert";

function HeroSlider() {
  const { data, isLoading: loading, refetch } = useGetAdvert();
  return (
    <>
      <section className="section gi-hero m-tb-40">
        <div className="container">
          <div className="gi-main-content">
            {/* <!-- Hero Slider Start --> */}
            <div className="gi-slider-content">
              <div className="gi-main-slider">
                <>
                  {/* <!-- Main slider  --> */}
                  <Swiper
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={data && data["advert_main_center"].length > 1}
                    speed={3000}
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                    slidesPerView={1}
                    className="swiper-pagination-white gi-slider main-slider-nav main-slider-dot swiper-wrapper"
                  >
                    {data &&
                      data["advert_main_center"]?.map((item) => (
                        <SwiperSlide
                          key={item.id}
                          className="gi-slide-item swiper-slide d-flex"
                          style={{
                            backgroundImage: `url(${item.image_path})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                          }}
                        >
                          <div className="gi-slide-content slider-animation">
                            <p>{item.title}</p>
                            <h1 className="gi-slide-title">
                              {item.description}
                            </h1>
                            {item.button_text && (
                              <div className="gi-slide-btn">
                                <a href="#" className="gi-btn-1">
                                  {item.button_text}
                                  <i
                                    className="fi-rr-angle-double-small-right"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                              </div>
                            )}
                          </div>
                        </SwiperSlide>
                      ))}
                    {/* <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-1">
                      <div className="gi-slide-content slider-animation">
                        <p>จัดใหญ่ ลดราคา</p>
                        <h1 className="gi-slide-title">
                          Maga Sale ลดแหลกตั้งแต่ต้นปี
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
                    <SwiperSlide className="gi-slide-item swiper-slide d-flex slide-2">
                      <div className="gi-slide-content slider-animation"></div>
                    </SwiperSlide> */}
                    <div className=" swiper-pagination swiper-pagination-white"></div>
                    <div className="swiper-buttons">
                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </div>
                  </Swiper>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSlider;
