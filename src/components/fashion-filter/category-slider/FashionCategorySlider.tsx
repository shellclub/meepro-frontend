"use client";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import Spinner from "@/components/button/Spinner";
import fetcher from "@/components/fetcher-api/Fetcher";
import CategoryItemTwo from "@/components/product-item/CategoryItemTwo";

const FashionCategorySlider = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/fashioncategory", fetcher, {
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
    <Fade triggerOnce direction="up">
      <section
        className="gi-category body-bg padding-tb-40"
      >
        <div className="container">
          <Row className="m-b-minus-15px">
            <Col xl={12} className="border-content-color">
              <Swiper
                loop={true}
                autoplay={{ delay: 1000 }}
                spaceBetween={20}
                slidesPerView={5}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 25,
                  },
                  425: {
                    slidesPerView: 2,
                    spaceBetween: 25,
                  },
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  768: {
                    slidesPerView: 3,
                    spaceBetween: 25,
                  },
                  1024: {
                    slidesPerView: 4,
                    spaceBetween: 25,
                  },
                  1025: {
                    slidesPerView: 5,
                    spaceBetween: 25,
                  },
                  1440: {
                    slidesPerView: 6,
                    spaceBetween: 25,
                  },
                }}
                className="gi-category-block-2 owl-carousel"
              >
                {getData().map((item: any, index: number) => (
                  <SwiperSlide
                    key={index}
                    className={`gi-cat-box gi-cat-box-${item.num}`}>
                    <CategoryItemTwo data={item} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </div>
      </section>
    </Fade>
  );
};

export default FashionCategorySlider;

