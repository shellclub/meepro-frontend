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
import useGetProductById from "@/hooks/product/useGetProductById";
import { IProductById } from "@/types/product/productType";
import { PRODUCT_STATUS } from "@/constants/confix-value.constant";

const SingleProductContentById = ({
  productData,
}: {
  productData: IProductById | undefined;
}) => {
  const [quantity, setQuantity] = useState(1);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const initialRef: any = null;
  const slider1 = useRef<Slider | null>(initialRef);
  const slider2 = useRef<Slider | null>(initialRef);

  const [selectedOptions, setSelectedOptions] = useState<{
    [optionId: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState(
    productData?.product_variants?.[0]
  );

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

  const handleOptionClick = (optionId: string, valueId: string) => {
    const updated = {
      ...selectedOptions,
      [optionId]: valueId,
    };
    setSelectedOptions(updated);
    // productData?.product_images.map((el)=>{
    //   el.
    // })
    // Convert selected option values to array of value IDs
    const selectedValueIds = Object.values(updated);

    // Find matching variant
    const match = productData?.product_variants?.find((variant) => {
      const variantValueIds = variant.product_variant_option_values.map(
        (val) => val.product_option_values.id
      );

      // Check if variant exactly matches all selected values
      return (
        variantValueIds.length === selectedValueIds.length &&
        selectedValueIds.every((id) => variantValueIds.includes(id))
      );
    });

    if (match) {
      setSelectedVariant(match);
      handleSlider2Click(
        productData?.product_images?.findIndex(
          (el) => el.variant_id == match.id
        )
      );
    }
  };

  if (!productData)
    return (
      <div>
        <Spinner />
      </div>
    );

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
                  {productData?.product_images?.map((item, idx) => (
                    <div
                      key={item.id}
                      className="single-slide zoom-image-hover"
                      onClick={() => handleSlider1Click(idx)}
                    >
                      <ZoomImage src={item.file_path} alt={""} />
                    </div>
                  ))}
                </Slider>
                <Slider
                  {...slider2Settings}
                  ref={(slider) => (slider2.current = slider)}
                  className="single-nav-thumb"
                >
                  {productData?.product_images?.map((item, idx) => (
                    <div
                      key={item.id}
                      className="single-slide"
                      onClick={() => handleSlider2Click(idx)}
                    >
                      <img
                        className="img-responsive"
                        src={item.file_path}
                        alt=""
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </Col>
          )}
          <Col className="single-pro-desc m-t-991">
            <div className="single-pro-content">
              <h5 className="gi-single-title">{productData?.product_name}</h5>
              <div className="gi-single-rating-wrap">
                <div className="gi-single-rating">
                  <i className="gicon gi-star-o"></i>
                  <i className="gicon gi-star-o"></i>
                  <i className="gicon gi-star-o"></i>
                  <i className="gicon gi-star-o"></i>
                  <i className="gicon gi-star-o"></i>
                </div>
                <span className="gi-read-review">
                  |&nbsp;&nbsp;<a href="#gi-spt-nav-review">0 Ratings</a>
                </span>
              </div>

              <div className="gi-single-price-stoke">
                <div className="gi-single-price">
                  <div className="final-price">
                    ฿{selectedVariant?.price_3 || ""}
                    <span className="price-des">-10%</span>
                  </div>

                  {/* <div className="mrp">
                    <span>
                      {(productData?.product_variants?.[0]?.price_3 &&
                        productData?.product_variants?.[0]?.price_3 * 1.1) ||
                        ""}
                    </span>
                  </div> */}
                </div>
                <div className="gi-single-stoke">
                  <span className="gi-single-sku">
                    SKU#:{" "}
                    {selectedVariant?.sku_id ||
                      productData?.product_variants?.[0].sku_id ||
                      ""}
                  </span>
                  <span className="gi-single-ps-title">
                    {(selectedVariant?.quantity &&
                      selectedVariant.quantity > 0) ||
                    (productData.product_variants?.[0]?.quantity &&
                      productData.product_variants[0].quantity > 0)
                      ? PRODUCT_STATUS.IN_STOCK
                      : PRODUCT_STATUS.OUT_OF_STOCK}
                  </span>
                </div>
              </div>

              <div className="gi-pro-variation">
                {productData?.product_options?.map((option) => (
                  <div
                    key={option.id}
                    className="gi-pro-variation-inner gi-pro-variation-size"
                  >
                    <span>{option.name}</span>
                    <div className="gi-pro-variation-content">
                      <ul>
                        {option.product_option_values.map((valueItem) => (
                          <li
                            key={valueItem.id}
                            className={`mb-2 ${
                              selectedOptions[option.id] === valueItem.id
                                ? "active"
                                : ""
                            }`}
                            onClick={() =>
                              handleOptionClick(option.id, valueItem.id)
                            }
                          >
                            <span>{valueItem.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="gi-single-desc"
                dangerouslySetInnerHTML={{
                  __html: productData?.product_description || "",
                }}
              />
              <div className="gi-single-qty">
                {/* <div className="qty-plus-minus ">
                  <QuantitySelector
                    setQuantity={setQuantity}
                    quantity={quantity}
                    id={data.id}
                  />
                </div> */}
                <div className="gi-single-cart">
                  <button className="btn btn-primary gi-btn-1">
                    เพิ่มลงตระกร้าสินค้า
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

export default SingleProductContentById;
