import { useEffect, useState } from "react";
import StarRating from "../stars/StarRating";
import QuickViewModal from "../model/QuickViewModal";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  setItems,
  updateItemQuantity,
} from "../../store/reducers/cartSlice";
import Link from "next/link";
import { showSuccessToast } from "../toast-popup/Toastify";
import { RootState } from "@/store";
import { addWishlist, removeWishlist } from "@/store/reducers/wishlistSlice";
import { addCompare, removeCompareItem } from "@/store/reducers/compareSlice";

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
const ItemCard = ({ data }: any) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const compareItems = useSelector((state: RootState) => state.compare.compare);
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );
  const cartItems = useSelector((state: RootState) => state.cart.items);

  useEffect(() => {
    const itemsFromLocalStorage =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem("products") || "[]")
        : [];
    if (itemsFromLocalStorage.length) {
      dispatch(setItems(itemsFromLocalStorage));
    }
  }, [dispatch]);

  const handleCart = (data: Item) => {
    const isItemInCart = cartItems.some((item: Item) => item.id === data.id);

    if (!isItemInCart) {
      dispatch(addItem({ ...data, quantity: 1 }));
      showSuccessToast("Add product in Cart Successfully!");
    } else {
      const updatedCartItems = cartItems.map((item: Item) =>
        item.id === data.id
          ? {
              ...item,
              quantity: item.quantity + 1,
              price: item.newPrice + data.newPrice,
            } // Increment quantity and update price
          : item
      );
      dispatch(updateItemQuantity(updatedCartItems));
      showSuccessToast("Add product in Cart Successfully!");
    }
  };

  const isInWishlist = (data: Item) => {
    return wishlistItems.some((item: Item) => item.id === data.id);
  };

  const handleWishlist = (data: Item) => {
    if (!isInWishlist(data)) {
      dispatch(addWishlist(data));
      showSuccessToast("Add product in Wishlist Successfully!", {
        icon: false,
      });
    } else {
      dispatch(removeWishlist(data.id));
      showSuccessToast("Remove product on Wishlist Successfully!", {
        icon: false,
      });
      // showErrorToast("Item already have to wishlist");
    }
  };

  const isInCompare = (data: Item) => {
    return compareItems.some((item: Item) => item.id === data.id);
  };

  const handleCompareItem = (data: Item) => {
    if (!isInCompare(data)) {
      dispatch(addCompare(data));
      showSuccessToast(`Add product in Compare list Successfully!`, {
        icon: false,
      });
    } else {
      dispatch(removeCompareItem(data.id));
      showSuccessToast("Remove product on Compare list Successfully!", {
        icon: false,
      });
      // showErrorToast("Item already have to compare list");
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="gi-product-content">
        <div className={` gi-product-inner`}>
          <div className="gi-pro-image-outer">
            <div className="gi-pro-image">
              <Link onClick={handleSubmit} href="/" className="image">
                <span className="label veg">
                  <span className="dot"></span>
                </span>
                <img className="main-image" src={data.image} alt="Product" />
                <img
                  className="hover-image"
                  src={data.imageTwo}
                  alt="Product"
                />
              </Link>
              <span className="flags">
                {data.sale && (
                  <span className={data.sale === "Sale" ? "sale" : "new"}>
                    {data.sale}
                  </span>
                )}
              </span>
              <div className="gi-pro-actions">
                <button
                  onClick={() => handleWishlist(data)}
                  className={
                    "gi-btn-group wishlist " +
                    (isInWishlist(data) ? "active" : "")
                  }
                  title="Wishlist"
                >
                  <i className="fi-rr-heart"></i>
                </button>
                <button
                  className="gi-btn-group quickview gi-cart-toggle"
                  data-link-action="quickview"
                  title="Quick view"
                  data-bs-toggle="modal"
                  data-bs-target="#gi_quickview_modal"
                  onClick={handleShow}
                >
                  <i className="fi-rr-eye"></i>
                </button>
                <button
                  onClick={() => handleCompareItem(data)}
                  className={
                    "gi-btn-group compare " +
                    (isInCompare(data) ? "active" : "")
                  }
                  title="Compare"
                >
                  <i className="fi fi-rr-arrows-repeat"></i>
                </button>
                <button
                  title="Add To Cart"
                  className="gi-btn-group add-to-cart"
                  onClick={() => handleCart(data)}
                >
                  <i className="fi-rr-shopping-basket"></i>
                </button>
              </div>
              <div className="gi-pro-option">
                {data.color1 && data.color2 && data.color3 && (
                  <ul className="colors">
                    {data.color1 && (
                      <li className={`color-${data.color1}`}>
                        <a href=""></a>
                      </li>
                    )}
                    {data.color2 && (
                      <li className={`color-${data.color2}`}>
                        <a href=""></a>
                      </li>
                    )}
                    {data.color3 && (
                      <li className={`color-${data.color3}`}>
                        <a href=""></a>
                      </li>
                    )}
                  </ul>
                )}
                {data.size1 && data.size2 && (
                  <ul className="sizes">
                    {data.size1 && (
                      <li>
                        <a href="">{data.size1}</a>
                      </li>
                    )}
                    {data.size2 && (
                      <li>
                        <a href="">{data.size2}</a>
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="gi-pro-content">
            <Link href="/shop-left-sidebar-col-3">
              <h6 className="gi-pro-stitle">{data.category}</h6>
            </Link>
            <h5 className="gi-pro-title">
              <Link href="/product-left-sidebar">{data.title}</Link>
            </h5>
            <p className="gi-info">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old.
            </p>
            <div className="gi-pro-rat-price">
              <span className="gi-pro-rating">
                <StarRating rating={data.rating} />
                <span className="qty">{data.weight}</span>
              </span>
              <span className="gi-price">
                <span className="new-price">${data.newPrice}.00</span>
                <span className="old-price">${data.oldPrice}.00</span>
              </span>
            </div>
          </div>
        </div>
        <QuickViewModal data={data} handleClose={handleClose} show={show} />
      </div>
    </>
  );
};

export default ItemCard;
