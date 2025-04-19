"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../store/reducers/cartSlice";
import { RootState } from "../../store";

import { removeWishlist } from "@/store/reducers/wishlistSlice";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";

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

const WishlistTwo = () => {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishlist.wishlist
  );
  const SwitchOn = useSelector((state: RootState) => state.cart.isSwitchOn);
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString("en-GB")
  );

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString("en-GB"));
  }, []);

  const dispatch = useDispatch();

  const handleRemoveFromwishlist = (id: number) => {
    dispatch(removeWishlist(id));
  };

  const handleCart = (data: Item) => {
    dispatch(addItem(data));
  };
  return (
    <>
      <section className="gi-Wishlist padding-tb-40">
        <div className="container">
          <div className="row mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="gi-vendor-dashboard-card">
                <div className="gi-vendor-card-header">
                  <h5>Your Follow list</h5>
                </div>
                <div className="gi-vendor-card-body">
                  <div className="gi-vendor-card-table">
                    <table className="table gi-vender-table">
                      <thead>
                        <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Vendor</th>
                          <th scope="col">Name</th>
                          <th scope="col">Date</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="wish-empt">
                        {wishlistItems.map((data, index) => (
                          <tr key={index} className="pro-gl-content">
                            <td scope="row">
                              <span>{index + 1}</span>
                            </td>
                            <td>
                              <img
                                className="prod-img"
                                src={data.image}
                                alt="product image"
                              />
                            </td>
                            <td>
                              <span>{data.title}</span>
                            </td>
                            <td>
                              <span>{currentDate}</span>
                            </td>
                            <td>
                              <span>${data.newPrice}</span>
                            </td>
                            <td>
                              <span
                                className={
                                  data.status === "Available" ? "avl" : "out"
                                }
                              >
                                {data.status}
                              </span>
                            </td>
                            <td>
                              <span className="tbl-btn">
                                <a
                                  className="gi-btn-one"
                                  href=""
                                  title="Add To Cart"
                                  onClick={() => handleCart(data)}
                                >
                                  <i className="fi-rr-shopping-basket"></i>
                                </a>
                                <a
                                  onClick={() =>
                                    handleRemoveFromwishlist(data.id)
                                  }
                                  className="gi-two-remove"
                                  href="#"
                                  title="Remove From List"
                                >
                                  ×
                                </a>
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishlistTwo;
