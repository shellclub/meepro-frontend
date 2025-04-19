"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import DealendTimer from "../dealend-timer/DealendTimer";
import { Col, Row } from "react-bootstrap";
import Spinner from "../button/Spinner";
import ItemCard from "../product-item/ItemCard";

const FashionTwoDeal = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/fashiontwodeal", fetcher, {
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
      <Fade
        direction="up"
        duration={2000}
        triggerOnce
        className="gi-deal-section padding-tb-40 wow fadeInUp"
        data-wow-duration="2s"
      >
        <div className="container">
          <Row className="overflow-hidden m-b-minus-24px">
            <Col lg={12} className="gi-deal-section">
              <div className="gi-products">
                <div
                  className="section-title"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <Fade direction="up" duration={2000} delay={200} triggerOnce>
                    <div className="section-detail">
                      <h2 className="gi-title">
                        Day of the <span>deal</span>
                      </h2>
                      <p>Don{"'"}t wait. The time will never be just right.</p>
                    </div>
                    <DealendTimer />
                  </Fade>
                </div>
                <div className="gi-deal-block m-minus-lr-12">
                  <Fade direction="up" duration={2000} triggerOnce delay={300}>
                    <Swiper
                      loop={true}
                      autoplay={{ delay: 1000 }}
                      slidesPerView={5}
                      spaceBetween={0}
                      breakpoints={{
                        0: {
                          slidesPerView: 1,
                        },
                        420: {
                          slidesPerView: 1,
                        },
                        421: {
                          slidesPerView: 2,
                        },
                        575: {
                          slidesPerView: 2,
                        },
                        767: {
                          slidesPerView: 2,
                        },
                        768: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 3,
                        },
                        1200: {
                          slidesPerView: 5,
                        },
                        1440: {
                          slidesPerView: 5,
                        },
                      }}
                      className="deal-slick-carousel gi-product-slider "
                    >
                      {getData().map((item: any, index: number) => (
                        <SwiperSlide key={index} className="swiper-slide-rtl">
                          <ItemCard data={item} />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </Fade>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Fade>
    </>
  );
};

export default FashionTwoDeal;
