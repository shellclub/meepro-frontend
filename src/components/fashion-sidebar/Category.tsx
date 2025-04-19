"use client";
import SidebarCategory from "./categoryall/SidebarCategory";
import CategorySlider from "../category/CategorySlider";
import { Col, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ItemCard from "../product-item/ItemCard";
import FashionArrials from "../arrivals/FashionArrials";
import { Fade } from "react-awesome-reveal";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import FashionTrendingProduct from "./fashion-item/FashionTrendingProduct";
import FashionTopRatedProduct from "./fashion-item/FashionTopRatedProduct";
import FashionSellingProduct from "./fashion-item/FashionSellingProduct";
import DealendTimer from "../dealend-timer/DealendTimer";
import Spinner from "../button/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  setMaxPrice,
  setMinPrice,
  setSelectedBrands,
  setSelectedCategory,
  setSelectedTags,
} from "@/store/reducers/filterReducer";
import { Navigation } from "swiper/modules";

const Category = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const dispatch = useDispatch();
  const {
    MinPrice,
    MaxPrice,
    selectedBrands,
    selectedCategory,
    selectedTags,
  }: any = useSelector((state: RootState) => state.filter);

  const { data, error } = useSWR("/api/fashiondeal", fetcher, {
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

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    dispatch(setSelectedBrands(updatedBrands));
  };

  const handleCategoryChange = (category) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
  };

  const handleTagsChange = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((tg) => tg !== tag)
      : [...selectedTags, tag];
    dispatch(setSelectedTags(updatedTags));
  };

  const handlePriceChange = (min: any, max: any) => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
  };

  return (
    <>
      <section className="gi-main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 sidebar-dis-991 h-sidebar padding-tb-40 hide-991">
              <SidebarCategory
                handleBrandChange={handleBrandChange}
                handleCategoryChange={handleCategoryChange}
                handleTagsChange={handleTagsChange}
                MinPrice={MinPrice}
                MaxPrice={MaxPrice}
                handlePriceChange={handlePriceChange}
                selectedBrands={selectedBrands}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
              />
            </div>
            <div className="col-lg-9 col-md-12">
              {/* <!-- Category section --> */}
              <Fade
                direction="up"
                duration={2000}
                triggerOnce
                data-wow-duration="2s"
              >
                <div className="gi-category body-bg padding-tb-40 wow fadeInUp">
                  <Row className=" m-b-minus-15px">
                    <CategorySlider />
                  </Row>
                </div>
              </Fade>
              {/* <!-- Category section End -->
                    <!-- Product tab Area Start --> */}
              <FashionArrials />
              {/* <!-- Product tab Area End -->
                    <!-- Offer Banner Section Start --> */}
              <Fade
                direction="up"
                duration={2000}
                triggerOnce
                data-wow-duration="2s"
              >
                <div className="gi-offer-section padding-tb-40 wow fadeInUp">
                  {/* <!--  Offer banners --> */}
                  <div className="row">
                    <Fade
                      duration={2000}
                      direction="left"
                      triggerOnce
                      className="col-md-6 wow fadeInLeft"
                      data-wow-duration="2s"
                    >
                      <div className="gi-ofr-banners">
                        <div className="gi-bnr-body">
                          <div className="gi-bnr-img">
                            <img
                              src={
                                process.env.NEXT_PUBLIC_URL +
                                "/assets/img/banner/8.jpg"
                              }
                              alt="banner"
                            />
                          </div>
                          <div className="gi-bnr-detail gi-right-banner">
                            <h5>Digital smartwatch</h5>
                            <p>50% OFF</p>
                            <a
                              href="/shop-left-sidebar-col-3"
                              className="gi-btn-2"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </Fade>
                    <Fade
                      duration={2000}
                      direction="right"
                      triggerOnce
                      className="col-md-6 wow fadeInRight"
                      data-wow-duration="2s"
                    >
                      <div className="gi-ofr-banners m-t-767">
                        <div className="gi-bnr-body">
                          <div className="gi-bnr-img">
                            <img
                              src={
                                process.env.NEXT_PUBLIC_URL +
                                "/assets/img/banner/9.jpg"
                              }
                              alt="banner"
                            />
                          </div>
                          <div className="gi-bnr-detail gi-right-banner">
                            <h5>Men&apos;s Sport Shoes</h5>
                            <p>70% OFF</p>
                            <a
                              href="/shop-left-sidebar-col-3"
                              className="gi-btn-2"
                            >
                              Shop Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </Fade>
              {/* <!-- Offer section end -->
                    <!--  Day Of The Deal Start --> */}
              <Fade
                duration={2000}
                direction="up"
                triggerOnce
                className="gi-deal-section padding-tb-40 wow fadeInUp"
                data-wow-duration="2s"
              >
                <Row className="row overflow-hidden m-b-minus-24px">
                  <Col lg={12} className="gi-deal-section col-lg-12">
                    <div className="gi-products">
                      <div className="section-title">
                        <Fade
                          triggerOnce
                          duration={2000}
                          direction="up"
                          delay={200}
                        >
                          <div className="section-detail">
                            <h2 className="gi-title">
                              Day of the <span>deal</span>
                            </h2>
                          </div>
                          <DealendTimer />
                        </Fade>
                      </div>
                      <div
                        className="gi-deal-block m-minus-lr-12"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        data-aos-delay="300"
                      >
                        <Swiper
                          dir="rtl"
                          loop={true}
                          autoplay={{ delay: 1000 }}
                          slidesPerView={4}
                          modules={[Navigation]}
                          breakpoints={{
                            0: {
                              slidesPerView: 1,
                            },
                            320: {
                              slidesPerView: 1,
                            },
                            425: {
                              slidesPerView: 2,
                            },
                            640: {
                              slidesPerView: 2,
                            },
                            768: {
                              slidesPerView: 2,
                            },
                            991: {
                              slidesPerView: 2,
                            },
                            992: {
                              slidesPerView: 3,
                            },
                            1199: {
                              slidesPerView: 3,
                            },
                            1200: {
                              slidesPerView: 4,
                            },
                            1400: {
                              slidesPerView: 4,
                            },
                          }}
                          className="deal-slick-carousel gi-product-slider"
                        >
                          {getData()?.map((item: any, index: number) => (
                            <SwiperSlide key={index}>
                              <ItemCard data={item} />
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Fade>
              {/* <!--  Day Of The Deal Start End -->
                    <!-- Banner section --> */}
              <Fade
                duration={2000}
                direction="up"
                triggerOnce
                className="gi-banner padding-tb-40 wow fadeInUp"
                data-wow-duration="2s"
              >
                <Row>
                  <Col md={12}>
                    <Fade
                      triggerOnce
                      duration={2000}
                      direction="up"
                      delay={200}
                    >
                      <div className="gi-animated-banner">
                        <h2 className="d-none">Offers</h2>
                        <div className="gi-bnr-detail ">
                          <div className="gi-bnr-info">
                            <h2>
                              Shopping Today<br></br>Fashion sale
                            </h2>
                            <h3>
                              30% off <span>Hurry up!!!</span>
                            </h3>
                            <a
                              href="/shop-left-sidebar-col-3"
                              className="gi-btn-2"
                            >
                              Shop now
                            </a>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              </Fade>
              {/* <!-- Banner section End -->
                    <!-- Trending, Top Rated Start --> */}
              <div className="gi-offer-section padding-tb-40">
                <Row>
                  {/* <!-- Trending --> */}
                  <Col
                    xl={4}
                    lg={6}
                    md={6}
                    sm={12}
                    className=" gi-all-product-content gi-new-product-content wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <FashionTrendingProduct />
                  </Col>
                  {/* <!-- Top Rated --> */}
                  <Col
                    xl={4}
                    lg={6}
                    md={6}
                    sm={12}
                    className=" gi-all-product-content gi-new-product-content mt-767-40 wow fadeInUp"
                    data-wow-delay=".6s"
                  >
                    <FashionTopRatedProduct />
                  </Col>
                  {/* <!-- Top Selling --> */}
                  <Col
                    xl={4}
                    lg={6}
                    md={6}
                    sm={12}
                    className=" gi-all-product-content gi-new-product-content d-n-1199 d-n-767 wow fadeInUp"
                    data-wow-delay=".8s"
                  >
                    <FashionSellingProduct />
                  </Col>
                </Row>
              </div>
              {/* <!-- Trending, Top Rated End --> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
