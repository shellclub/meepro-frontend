"use client";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import StarRating from "../stars/StarRating";
import { addItem } from "../../store/reducers/cartSlice";
import { addWishlist } from "@/store/reducers/wishlistSlice";
import { removeCompareItem } from "@/store/reducers/compareSlice";

interface Item {
  id: number;
  title: string;
  newPrice: number;
  waight: string;
  image: string;
  imageTwo: string;
  date: string;
  status: string;
  rating: number;
  oldPrice: number;
  location: string;
  brand: string;
  sku: number;
  category: string;
  quantity: number;
}

const Compare = () => {
  const CompareItem = useSelector((state: RootState) => state.compare.compare);
  const dispatch = useDispatch();

  const handleCart = (data: Item) => {
    dispatch(addItem(data));
  };

  const handleRemoveCompareItem = (data: any) => {
    dispatch(removeCompareItem(data.id));
  };

  const handleWishlist = (data: Item) => {
    dispatch(addWishlist(data));
  };

  if (CompareItem.length === 0) {
    return (
      <div style={{ textAlign: "center" }} className="gi-compare-col">
        <h5>Compare items are empty.</h5>
      </div>
    );
  }

  return (
    <>
      <section className="gi-compare padding-tb-40">
        <h2 className="d-none">Compare</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="gi-compare-box">
                <div className="gi-compare-col title-col">
                  <div className="gi-compare-cell">
                    <div className="title">
                      <h5>Product Image</h5>
                    </div>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>Name</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>Category</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>Ratings</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>Availability</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>location</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>Brand</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>SKU</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>Quantity</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <h5>Weight</h5>
                  </div>
                  <div className="gi-compare-cell">
                    <div className="desc">
                      <h5>Description</h5>
                    </div>
                  </div>
                </div>
                {CompareItem.map((data, index) => (
                  <div key={index} className="gi-compare-col">
                    <a
                      onClick={() => handleRemoveCompareItem(data)}
                      className="remove-compare-product"
                    >
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/icons/close.svg"
                        }
                        className="svg_img"
                        alt="close"
                      />
                    </a>
                    <div className="gi-compare-cell">
                      <div className="list">
                        <img src={data.image} alt="product" />
                        <div className="gi-action">
                          <ul>
                            <li>
                              <a
                                className="gi-btn-group wishlist"
                                onClick={() => handleWishlist(data)}
                                title="Wishlist"
                              >
                                <i className="fi-rr-heart"></i>
                              </a>
                            </li>
                            <li>
                              <a
                                title="Add To Cart"
                                onClick={() => handleCart(data)}
                                className="gi-btn-group add-to-cart"
                              >
                                <i className="fi-rr-shopping-basket"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="gi-compare-cell">
                      <p>{data.title}</p>
                    </div>
                    <div className="gi-compare-cell">
                      <p>{data.category}</p>
                    </div>
                    <div className="gi-compare-cell">
                      <span className="gi-pro-rating">
                        <StarRating rating={data.rating} />
                      </span>
                      <p className="rating-info">(654 Review)</p>
                    </div>
                    <div className="gi-compare-cell">
                      <p
                        className={
                          data.status === "Available" ? "i-stock" : "o-stock"
                        }
                      >
                        {data.status}
                      </p>
                    </div>
                    <div className="gi-compare-cell">
                      <p>{data.location}</p>
                    </div>
                    <div className="gi-compare-cell">
                      <p>{data.brand}</p>
                    </div>
                    <div className="gi-compare-cell">
                      <p>{data.sku}</p>
                    </div>
                    <div className="gi-compare-cell">
                      <p>1 Pack</p>
                    </div>
                    <div className="gi-compare-cell">
                      <p>{data.waight}</p>
                    </div>
                    <div className="gi-compare-cell">
                      <div className="desc">
                        <p>
                          Recently with desktop publishing software like Aldus
                          PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Compare;
