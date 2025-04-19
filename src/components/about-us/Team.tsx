"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";

const Team = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const { data, error } = useSWR("/api/team", fetcher, { onSuccess, onError });

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
      <section className="gi-team-section padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Our <span>Team</span>
            </h2>
            <p>Meet out expert team members.</p>
          </div>
          <Swiper
            loop={true}
            navigation={false}
            modules={[Autoplay]}
            autoplay={{ delay: 2000 }}
            spaceBetween={30}
            slidesPerView={5}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1025: {
                slidesPerView: 5,
              },
            }}
            className="gi-team owl-carousel"
          >
            {getData().map((item: any, index: number) => (
              <SwiperSlide key={index} className="gi-team-box">
                <div className="gi-team-imag">
                  <img src={item.image} alt="user" />
                  <div className="gi-team-socials">
                    <ul className="align-itegi-center">
                      <li className="gi-social-link">
                        <a href="#">
                          <i
                            className="gicon gi-twitter"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="gi-social-link">
                        <a href="#">
                          <i
                            className="gicon gi-facebook"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                      <li className="gi-social-link">
                        <a href="#">
                          <i
                            className="gicon gi-linkedin"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="gi-team-info">
                  <h5>{item.name}</h5>
                  <p>{item.title}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Team;
