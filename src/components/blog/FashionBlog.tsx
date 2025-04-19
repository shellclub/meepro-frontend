"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import BlogItem from "../product-item/BlogItem";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const FashionBlog = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/fashionlatestblog", fetcher, {
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
      <section className="gi-blog-section padding-tb-40 wow fadeInUp">
        <div className="container">
          <div className="row m-b-minus-24px">
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
                575: {
                  slidesPerView: 1,
                  spaceBetween: 2,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 2,
                },
                911: {
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
              <div className="gi-blog-item">
                {getData().map((item: any, index: number) => (
                  <SwiperSlide
                    key={index}
                    style={{
                      padding: "0 12px",
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    className="blog-info"
                  >
                    <BlogItem data={item} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default FashionBlog;
