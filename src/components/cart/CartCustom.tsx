"use client";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeItem } from "../../store/reducers/cartCustomSlice";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import Link from "next/link";
import { IProductCart } from "@/types/product/productType";
import { CommonHelper } from "@/helper/common-helper";
import QuantitySelectorCustom from "../quantity-selector/QuantitySelectorCustom";
import { checkProductStock } from "@/store/thunk/cartCustomThunks";
import { useAppDispatch } from "@/store/hook/hook";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Country {
  id: string;
  name: any;
  iso2: string;
}

interface State {
  id: string;
  name: any;
  state_code: string;
}

const Cart = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const router = useRouter();
  const cartItems = useSelector((state: RootState) => state.cartCustom.items);

  const dispatch = useAppDispatch();
  const [filteredCountryData, setFilteredCountryData] = useState<Country[]>([]);
  const [filteredStateData, setFilteredStateData] = useState<State[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [subTotal, setSubTotal] = useState(0);
  const [vat, setVat] = useState(0);
  const [discount, setDiscount] = useState(0);
  const { data: country } = useSWR("/api/country", fetcher, {
    onSuccess,
    onError,
  });

  useEffect(() => {
    if (country) {
      setFilteredCountryData(
        country.map((country: any) => ({
          id: country.id,
          countryName: country.name,
          iso2: country.iso2,
        }))
      );
    }
  }, [country]);

  const handleCheckStock = () => {
    const ids = cartItems.map((item) => item.id);
    dispatch(checkProductStock(ids));
  };

  useEffect(() => {
    if (cartItems.length === 0) {
      setSubTotal(0);
      setVat(0);
      return;
    }
    handleCheckStock();
    const subtotal = cartItems.reduce(
      (acc, item) => acc + item.newPrice * item.productQuantityCart,
      0
    );
    setSubTotal(subtotal);
    // Calculate VAT
    const vatAmount = subtotal * 0.2;
    setVat(vatAmount);
  }, [cartItems]);

  const handleDiscountApplied = (discount) => {
    setDiscount(discount);
  };

  const discountAmount = subTotal * (discount / 100);
  const total = subTotal + vat - discountAmount;

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeItem(item.id));
  };

  const { data, error } = useSWR("/api/deal", fetcher, { onSuccess, onError });

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

  const handleCheckStockBeforeCheckout = async () => {
    handleCheckStock();
    const outOfStockItems = cartItems.filter(
      (item) => item.quantity === 0 || item.quantity < item.productQuantityCart
    );
    if (outOfStockItems.length > 0) {
      toast.error(`โปรดตรวจสอบจำนวนสินค้าที่ต้องการสั่งซื้อ`);
    } else {
      router.push("/checkout");
    }
  };
  return (
    <>
      <section className="gi-cart-section padding-tb-40">
        <h2 className="d-none">Cart Page</h2>
        <div className="container">
          {cartItems.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                fontSize: "20px",
                fontWeight: "300",
              }}
              className="gi-pro-content cart-pro-title"
            >
              {" "}
              ไม่มีสินค้าในตะกร้า
            </div>
          ) : (
            <div className="row">
              <div className="gi-cart-leftside col-lg-12 col-md-12 m-t-991">
                {/* <!-- cart content Start --> */}
                <div className="gi-cart-content">
                  <div className="gi-cart-inner">
                    <div className="row">
                      <form action="#">
                        <div className="table-content cart-table-content">
                          <table>
                            <thead>
                              <tr>
                                <th>สินค้า</th>
                                <th>ราคา</th>
                                <th style={{ textAlign: "center" }}>จำนวน</th>
                                <th>ราคารวม</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems.map(
                                (item: IProductCart, index: number) => (
                                  <tr key={index}>
                                    <td
                                      data-label="Product"
                                      className="gi-cart-pro-name"
                                    >
                                      <a href={`/product/${item.product_id}`}>
                                        <img
                                          className="gi-cart-pro-img mr-4"
                                          src={item.image}
                                          alt=""
                                        />
                                        <div>
                                          <div>{item.title}</div>
                                          {item.option && (
                                            <div
                                              style={{
                                                fontSize: "0.9rem",
                                                color: "#888",
                                              }}
                                            >
                                              • {item.option}
                                            </div>
                                          )}
                                        </div>
                                      </a>
                                    </td>
                                    <td
                                      data-label="Price"
                                      className="gi-cart-pro-price"
                                    >
                                      <span className="amount">
                                        ฿
                                        {CommonHelper.formatNumber(
                                          item.newPrice
                                        )}
                                      </span>
                                    </td>
                                    <td
                                      data-label="Quantity"
                                      className="gi-cart-pro-qty"
                                      style={{ textAlign: "center" }}
                                    >
                                      <div className="cart-qty-plus-minus">
                                        <QuantitySelectorCustom
                                          stock={item.quantity}
                                          quantity={item.productQuantityCart}
                                          id={item.id || ""}
                                        />
                                      </div>
                                      <div
                                        style={{
                                          color: "#FF0000",
                                          fontSize: "0.8rem",
                                        }}
                                      >
                                        {" "}
                                        {item.quantity <
                                          item.productQuantityCart &&
                                          item.quantity != 0 &&
                                          `จำนวนสินค้าในสต๊อกมีทั้งหมด ${item.quantity} ชิ้น`}
                                        {item.quantity <= 0 && `สินค้าหมด`}
                                      </div>
                                    </td>
                                    <td
                                      data-label="Total"
                                      className="gi-cart-pro-subtotal"
                                    >
                                      ฿
                                      {CommonHelper.formatNumber(
                                        item.newPrice * item.productQuantityCart
                                      )}
                                    </td>
                                    <td
                                      onClick={() => handleRemoveFromCart(item)}
                                      data-label="Remove"
                                      className="gi-cart-pro-remove"
                                    >
                                      <a href="#">
                                        <i className="gicon gi-trash-o"></i>
                                      </a>
                                    </td>
                                  </tr>
                                )
                              )}
                              <tr>
                                <td
                                  colSpan={4}
                                  data-label="Total"
                                  className="gi-cart-pro-name text-end"
                                >
                                  ราคารวม
                                </td>
                                <td style={{ textAlign: "end" }}>
                                  {CommonHelper.formatNumber(subTotal)}
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="gi-cart-update-bottom">
                              <Link href="/">ซื้อสินค้าต่อ</Link>
                              <div
                                onClick={() => {
                                  handleCheckStockBeforeCheckout();
                                }}
                                className="gi-btn-2"
                              >
                                สั่งซื้อสินค้า
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* <!--cart content End --> */}
              </div>
            </div>
          )}
        </div>
      </section>
      {/* <section className="gi-new-product padding-tb-40">
        <div className="container">
          <div className="row overflow-hidden m-b-minus-24px">
            <div className="gi-new-prod-section col-lg-12">
              <div className="gi-products">
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={200}
                  className="section-title-2"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="200"
                >
                  <div>
                    <h2 className="gi-title">
                      New <span>Arrivals</span>
                    </h2>
                    <p>Browse The Collection of Top Products</p>
                  </div>
                </Fade>
                <Fade
                  triggerOnce
                  direction="up"
                  duration={2000}
                  delay={200}
                  className="gi-new-block m-minus-lr-12"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  data-aos-delay="300"
                >
                  <Swiper
                    loop={true}
                    autoplay={{ delay: 1000 }}
                    slidesPerView={5}
                    breakpoints={{
                      0: {
                        slidesPerView: 1,
                      },
                      320: {
                        slidesPerView: 1,
                        spaceBetween: 25,
                      },
                      426: {
                        slidesPerView: 2,
                      },
                      640: {
                        slidesPerView: 2,
                      },
                      768: {
                        slidesPerView: 3,
                      },
                      1024: {
                        slidesPerView: 3,
                      },
                      1025: {
                        slidesPerView: 5,
                      },
                    }}
                    className="deal-slick-carousel gi-product-slider"
                  >
                    {getData().map((item: any, index: number) => (
                      <SwiperSlide key={index}>
                        <ItemCard data={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Cart;
