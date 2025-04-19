"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import FashionBlogTwoItem from "../product-item/FashionBlogTwoItem";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import { Row } from "react-bootstrap";

import Spinner from "../button/Spinner";

const FashionTwoBlog = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/fashiontwoblog", fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>Failed to load products</div>;
  if (!data)
    return (<div><Spinner /></div>);

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  return (
    <Fade triggerOnce direction="up">
      <section className="gi-blog-section padding-tb-40 wow fadeInUp">
        <div className="container">
          <Row>
            <div className="section-title">
              <div className="section-detail">
                <h2 className="gi-title">
                  Latest <span>Blog</span>
                </h2>
                <p>We tackle interesting topics every day in 2023.</p>
              </div>
              <span className="title-link">
                <a href="/blog-left-sidebar">
                  All Blogs<i className="fi-rr-angle-double-small-right"></i>
                </a>
              </span>
            </div>
            <Swiper
              loop={true}
              autoplay={{ delay: 1000 }}
              slidesPerView={4}
              spaceBetween={25}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                320: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                425: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 2,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 2,
                },
                1440: {
                  slidesPerView: 5,
                  spaceBetween: 2,
                },
              }}
              className="gi-blog-carousel owl-carousel"
            >
              {getData().map((item: any, index: number) => (
                <SwiperSlide key={index} style={{padding: "0 12px"}} className="gi-blog-item">
                  <FashionBlogTwoItem data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </div>
      </section>
    </Fade>
  );
};

export default FashionTwoBlog;
