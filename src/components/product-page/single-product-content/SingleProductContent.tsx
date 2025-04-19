import React, { useEffect, useRef, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSWR from "swr";
import fetcher from "../../fetcher-api/Fetcher";
import QuantitySelector from "../../quantity-selector/QuantitySelector";
import Spinner from "@/components/button/Spinner";
import ZoomImage from "@/components/zoom-image/ZoomImage";

const SingleProductContent = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const initialRef: any = null;
  const slider1 = useRef<Slider | null>(initialRef);
  const slider2 = useRef<Slider | null>(initialRef);

  const slider1Settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: slider2.current,
    focusOnSelect: true,
  };

  const slider2Settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: slider1.current,
    dots: false,
    arrows: true,
    focusOnSelect: true,
  };

  useEffect(() => {
    setIsSliderInitialized(true);
  }, [isSliderInitialized]);

  const handleSlider1Click = (index: any) => {
    if (slider2.current) {
      slider2.current.slickGoTo(index);
    }
  };

  const handleSlider2Click = (index: any) => {
    if (slider1.current) {
      slider1.current.slickGoTo(index);
    }
  };

  const { data, error } = useSWR("/api/productphoto", fetcher, {
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
      <div className="single-pro-inner">
        <Row>
          {isSliderInitialized && (
            <Col className="single-pro-img">
              <div className="single-product-scroll">
                <Slider
                  {...slider1Settings}
                  ref={(slider) => (slider1.current = slider)}
                  className="single-product-cover"
                >
                  {getData().map((item: any, index: any) => (
                    <div
                      key={index}
                      className="single-slide zoom-image-hover"
                      onClick={() => handleSlider1Click(index)}
                    >
                      <ZoomImage
                        src={item.image}
                        alt="" />
                    </div>
                  ))}
                </Slider>
                <Slider
                  {...slider2Settings}
                  ref={(slider) => (slider2.current = slider)}
                  className="single-nav-thumb"
                >
                  {getData().map((item: any, index: number) => (
                    <div
                      key={index}
                      className="single-slide"
                      onClick={() => handleSlider2Click(index)}
                    >
                      <img className="img-responsive" src={item.image} alt="" />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          )}
          <Col className="single-pro-desc m-t-991">
            <div className="single-pro-content">
              <h5 className="gi-single-title">
                Potato Chips 52g, American Cream & Onion Flavour, Crunchy Chips
                & Snacks.
              </h5>
              <div className="gi-single-rating-wrap">
                <div className="gi-single-rating">
                  <i className="gicon gi-star fill"></i>
                  <i className="gicon gi-star fill"></i>
                  <i className="gicon gi-star fill"></i>
                  <i className="gicon gi-star fill"></i>
                  <i className="gicon gi-star-o"></i>
                </div>
                <span className="gi-read-review">
                  |&nbsp;&nbsp;<a href="#gi-spt-nav-review">992 Ratings</a>
                </span>
              </div>

              <div className="gi-single-price-stoke">
                <div className="gi-single-price">
                  <div className="final-price">
                    $664.00<span className="price-des">-78%</span>
                  </div>
                  <div className="mrp">
                    M.R.P. : <span>$2,999.00</span>
                  </div>
                </div>
                <div className="gi-single-stoke">
                  <span className="gi-single-sku">SKU#: WH12</span>
                  <span className="gi-single-ps-title">IN STOCK</span>
                </div>
              </div>
              <div className="gi-single-desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry s standard dummy
                text ever since the 1990.
              </div>

              <div className="gi-single-list">
                <ul>
                  <li>
                    <strong>Closure :</strong> Hook & Loop
                  </li>
                  <li>
                    <strong>Sole :</strong> Polyvinyl Chloride
                  </li>
                  <li>
                    <strong>Width :</strong> Medium
                  </li>
                  <li>
                    <strong>Outer Material :</strong> A-Grade Standard Quality
                  </li>
                </ul>
              </div>

              <div className="gi-pro-variation">
                <div className="gi-pro-variation-inner gi-pro-variation-size">
                  <span>Weight</span>
                  <div className="gi-pro-variation-content">
                    <ul>
                      <li className="active">
                        <span>250g</span>
                      </li>
                      <li>
                        <span>500g</span>
                      </li>
                      <li>
                        <span>1kg</span>
                      </li>
                      <li>
                        <span>2kg</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="gi-single-qty">
                <div className="qty-plus-minus ">
                  <QuantitySelector setQuantity={setQuantity} quantity={quantity} id={data.id} />
                </div>
                <div className="gi-single-cart">
                  <button className="btn btn-primary gi-btn-1">
                    Add To Cart
                  </button>
                </div>
                <div className="gi-single-wishlist">
                  <a className="gi-btn-group wishlist" title="Wishlist">
                    <i className="fi-rr-heart"></i>
                  </a>
                </div>
                <div className="gi-single-quickview">
                  <a
                    href="#"
                    className="gi-btn-group quickview"
                    data-link-action="quickview"
                    title="Quick view"
                    data-bs-toggle="modal"
                    data-bs-target="#gi_quickview_modal"
                  >
                    <i className="fi-rr-eye"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SingleProductContent;
