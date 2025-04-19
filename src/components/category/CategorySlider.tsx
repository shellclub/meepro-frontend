"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Col } from "react-bootstrap";
import CategoryItemTwo from "../product-item/CategoryItemTwo";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const CategorySlider = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { direction } = useSelector((state: RootState) => state.theme);
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
    <>
      <Col xl={12} className="border-content-color">
        <Swiper
          dir={direction == "RTL" ? "rtl" : "ltr"}
          loop={true}
          autoplay={{ delay: 1000 }}
          slidesPerView={4}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            419: {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            420: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1025: {
              slidesPerView: 3,
              spaceBetween: 25,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 25,
            },
            1440: {
              slidesPerView: 5,
              spaceBetween: 25,
            },
          }}
          className={`gi-category-block-2 owl-carousel ${direction == "RTL" ? "rtl" : "ltr"}`}
        >
          {getData().map((item: any, index: number) => (
            <SwiperSlide
              key={index}
              className={`gi-cat-box gi-cat-box-${item.num}`}
            >
              <CategoryItemTwo data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Col>
    </>
  );
};

export default CategorySlider;
