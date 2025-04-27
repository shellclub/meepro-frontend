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
import {
  IProduct,
  IProductById,
  IProductCart,
  IProductVariant,
} from "@/types/product/productType";
import {
  PRODUCT_LOCATION,
  PRODUCT_STATUS,
} from "@/constants/confix-value.constant";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  addItem,
  setItems,
  updateItemQuantity,
} from "../../../store/reducers/cartCustomSlice";
import { showSuccessToast } from "@/components/toast-popup/Toastify";
import { useSession } from "next-auth/react";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import QuantitySelectorCustom from "@/components/quantity-selector/QuantitySelectorCustom";
import QuantitySelectorCustomValue from "@/components/quantity-selector/QuantitySelectorCustomValue";
const SingleProductContentById = ({
  productData,
}: {
  productData: IProductById | undefined;
}) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [isSliderInitialized, setIsSliderInitialized] = useState(false);
  const initialRef: any = null;
  const slider1 = useRef<Slider | null>(initialRef);
  const slider2 = useRef<Slider | null>(initialRef);
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cartCustom.items);

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
  useEffect(() => {
    if (productData?.product_options) {
      const initialSelections: { [optionId: string]: string } = {};

      productData.product_options.forEach((option) => {
        const firstValue = option.product_option_values?.[0];
        if (firstValue) {
          initialSelections[option.id] = firstValue.id;
        }
      });

      setSelectedOptions(initialSelections);
    }
  }, [productData]);

  if (!productData)
    return (
      <div>
        <Spinner />
      </div>
    );
  // useEffect(() => {
  //   // console.log(selectedOptions[productData.product_options?.[0].id || ""]);
  //   const idOptionValue =
  //     selectedOptions[productData.product_options?.[0].id || ""];
  //   // console.log(
  //   //   productData.product_options?.find((el) => selectedOptions[el.id])
  //   // );
  //   const product_options = productData.product_options?.find(
  //     (el) => selectedOptions[el.id]
  //   );
  //   const optionValue = product_options?.product_option_values.find(
  //     (el) => el.id == idOptionValue
  //   );
  //   // console.log(optionValue);
  // }, [selectedOptions]);

  const handleCart = async (productVarian: IProductVariant) => {
    if (!session?.user) {
      const result = await Swal.fire({
        icon: "info",
        title: "กรุณาลงชื่อเข้าใช้งาน",
        confirmButtonText: "ไปที่หน้าล็อกอิน",
        confirmButtonColor: "#3085d6",
      });
      if (result.isConfirmed) {
        router.push("/login");
      }
    } else {
      // const data = { rawData };
      const firstOptionId = productData.product_options?.[0]?.id;
      const selectedOptionValueId = selectedOptions[firstOptionId ?? ""];

      const selectedOption = productData.product_options?.find(
        (option) => selectedOptions[option.id]
      );

      const selectedOptionValue = selectedOption?.product_option_values.find(
        (value) => value.id === selectedOptions[selectedOption.id]
      );
      const data: IProductCart = {
        id: productVarian.id,
        product_id: productData.id,
        title: productData.product_name,
        sale: "",
        image: productVarian.main_image,
        imageTwo: productVarian.main_image,
        category: productData.category?.name,
        newPrice: Number(productVarian?.price_3 ?? 0),
        oldPrice: Number(productVarian?.price_3 ?? 0),
        location: PRODUCT_LOCATION.ONLINE,
        brand: productData.brand?.name,
        sku: productVarian?.sku_id,
        rating: 3,
        status:
          productVarian?.quantity > 0
            ? PRODUCT_STATUS.IN_STOCK
            : PRODUCT_STATUS.OUT_OF_STOCK,
        href: "string",
        weight: "",
        quantity: productVarian.quantity,
        description: productData.product_description,
        option: selectedOptionValue?.value,
        productQuantityCart: quantity,
      };

      const isItemInCart = cartItems.some(
        (item: IProduct) => item.id == data.id
      );
      if (!isItemInCart) {
        dispatch(addItem({ ...data, quantity: 1 }));
        showSuccessToast("เพิ่มสินค้าลงตะกร้าสำเร็จ!");
      } else {
        const updatedCartItems = cartItems.map((item: IProduct) =>
          item.id === data.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.newPrice + data.newPrice,
              } // Increment quantity and update price
            : item
        );
        dispatch(updateItemQuantity(updatedCartItems));
        // showSuccessToast("Add product in Cart Successfully!");
        showSuccessToast("เพิ่มสินค้าลงตะกร้าสำเร็จ!");
      }
    }
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

              <div className="gi-single-qty mb-5">
                <div className="qty-plus-minus ">
                  <QuantitySelectorCustomValue
                    setQuantity={setQuantity}
                    quantity={quantity}
                    // id={selectedVariant?.id || ""}
                  />
                </div>
                <div className="gi-single-cart">
                  <button
                    className="btn btn-primary gi-btn-1"
                    onClick={() => {
                      handleCart(selectedVariant!!);
                    }}
                  >
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
              <div
                className="gi-single-desc"
                dangerouslySetInnerHTML={{
                  __html: productData?.product_description || "",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SingleProductContentById;
