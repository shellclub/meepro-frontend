"use client";
import React, { useEffect, useState } from "react";
import home from "../../../../utility/header/home";
import classic from "../../../../utility/header/classic";
import banner from "../../../../utility/header/benner";
import column from "../../../../utility/header/columns";
import list from "../../../../utility/header/list";
import blog from "../../../../utility/header/blog";
import Link from "next/link";
import productpage from "../../../../utility/header/productpage";
import pages from "../../../../utility/header/pages";
import MobileManuSidebar from "../../../model/MobileManuSidebar";
import SidebarCart from "../../../model/SidebarCart";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { logout, setUserData } from "@/store/reducers/registrationSlice";

const HeaderButtom = ({ cartItems, wishlistItems }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  useEffect(() => {
    const userdata = localStorage.getItem("login_user") ?? "";
    const user = userdata !== "" ? JSON.parse(userdata) : null;
    dispatch(setUserData({ isAuthenticated: userdata !== "", user }));
  }, [dispatch]);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("login_user");
    dispatch(logout());
    router.push("/");
  };

  const toggleMainMenu = (menuKey: any) => {
    setActiveMainMenu((prevMenu) => (prevMenu === menuKey ? null : menuKey));
  };

  const openMobileManu = () => {
    setIsMobileMenuOpen((prev: any) => !prev);
  };

  const closeMobileManu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className="gi-header-bottom d-lg-block">
        <div className="container position-relative">
          <div className="row">
            <div className="gi-flex">
              {/* <!-- Header Logo Start --> */}
              <div className="align-self-center gi-header-logo">
                <div className="header-logo">
                  <Link href="/">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL +
                        "/assets/img/logo/logo.png"
                      }
                      alt="Site Logo"
                    />
                  </Link>
                </div>
              </div>
              {/* <!-- Header Logo End -->
                        <!-- Main Menu Start --> */}
              <div
                id="gi-main-menu-desk"
                className="d-none d-lg-block sticky-nav"
              >
                <div className="nav-desk">
                  <div className="row">
                    <div className="col-md-12 align-self-center">
                      <div className="gi-main-menu">
                        <ul>
                          <li className="dropdown drop-list">
                            <Link href="" className="dropdown-arrow">
                              Home<i className="fi-rr-angle-small-right"></i>
                            </Link>
                            <ul className="sub-menu">
                              {home.map((data, index) => (
                                <li key={index}>
                                  <Link href={data.href}>{data.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="dropdown drop-list position-static">
                            <Link href="" className="dropdown-arrow">
                              Categories
                              <i className="fi-rr-angle-small-right"></i>
                            </Link>
                            <ul className="mega-menu d-block">
                              <li className="d-flex">
                                <span className="bg"></span>
                                <ul className="d-block mega-block">
                                  <li className="menu_title">
                                    <Link href="">Classic</Link>
                                  </li>
                                  {classic.map((data, index) => (
                                    <li key={index}>
                                      <Link href={data.href}>{data.name}</Link>
                                    </li>
                                  ))}
                                </ul>
                                <ul className="d-block mega-block">
                                  <li className="menu_title">
                                    <Link href="">Banner</Link>
                                  </li>
                                  {banner.map((data, index) => (
                                    <li key={index}>
                                      <Link href={data.href}>{data.name}</Link>
                                    </li>
                                  ))}
                                </ul>
                                <ul className="d-block mega-block">
                                  <li className="menu_title">
                                    <Link href="">Columns</Link>
                                  </li>
                                  {column.map((data, index) => (
                                    <li key={index}>
                                      <Link href={data.href}>{data.name}</Link>
                                    </li>
                                  ))}
                                </ul>
                                <ul className="d-block mega-block">
                                  <li className="menu_title">
                                    <Link href="">List</Link>
                                  </li>
                                  {list.map((data, index) => (
                                    <li key={index}>
                                      <Link href={data.href}>{data.name}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown drop-list">
                            <Link href="" className="dropdown-arrow">
                              Products
                              <i className="fi-rr-angle-small-right"></i>
                            </Link>
                            <ul className="sub-menu">
                              {productpage.map((data, index) => (
                                <li
                                  key={index}
                                  className="dropdown position-static"
                                >
                                  <Link href="">
                                    {data.name}
                                    <i className="fi-rr-angle-small-right"></i>
                                  </Link>
                                  <ul className="sub-menu sub-menu-child">
                                    {data.subname.map((subPage, subIndex) => (
                                      <React.Fragment key={subIndex}>
                                        <li>
                                          <Link href={subPage.href}>
                                            {subPage.name}
                                          </Link>
                                        </li>
                                      </React.Fragment>
                                    ))}
                                  </ul>
                                </li>
                              ))}
                              <li>
                                <a href="/product-full-width">
                                  Product full width
                                </a>
                              </li>
                              <li>
                                <a href="/product-according-full-width">
                                  accordion full width
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown drop-list">
                            <Link href="" className="dropdown-arrow">
                              Blog<i className="fi-rr-angle-small-right"></i>
                            </Link>
                            <ul className="sub-menu">
                              {blog.map((data, index) => (
                                <li key={index}>
                                  <Link href={data.href}>{data.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="dropdown drop-list">
                            <Link href="" className="dropdown-arrow">
                              Pages<i className="fi-rr-angle-small-right"></i>
                            </Link>
                            <ul className="sub-menu">
                              {pages.map((data, index) => (
                                <li key={index}>
                                  <Link href={data.href}>{data.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="non-drop">
                            <Link href="/banner-left-sidebar-col-3">
                              <i className="fi-rr-badge-percent"></i>Offers
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Main Menu End --> */}

              {/* <!-- Header Button Start --> */}
              <div className="gi-header-action align-self-center">
                <div className="gi-header-bottons gi-header-buttons">
                  {/* <!-- Header User Start --> */}
                  <div className="gi-acc-drop">
                    <Link
                      href=""
                      className="gi-header-btn gi-header-user dropdown-toggle gi-user-toggle"
                      title="Account"
                    >
                      <div className="header-icon">
                        <i className="fi-rr-user"></i>
                      </div>
                      <div className="gi-btn-desc">
                        <span className="gi-btn-title">Account</span>
                        <span className="gi-btn-stitle">
                          {" "}
                          {isAuthenticated ? "Logout" : "Login"}
                        </span>
                      </div>
                    </Link>
                    <ul className="gi-dropdown-menu">
                      {isAuthenticated ? (
                        <>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/user-profile"
                            >
                              My Profile
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/orders">
                              Orders
                            </Link>
                          </li>
                          <li>
                            <a className="dropdown-item" onClick={handleLogout}>
                              Logout
                            </a>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link className="dropdown-item" href="/register">
                              Register
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/checkout">
                              Checkout
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" href="/login">
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/forgot-password"
                            >
                              Forgot
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="dropdown-item"
                              href="/reset-password"
                            >
                              Reset
                            </Link>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  {/* <!-- Header User End -->
                                <!-- Header wishlist Start --> */}
                  <Link
                    href="/wishlist"
                    className="gi-header-btn gi-wish-toggle"
                    title="Wishlist"
                  >
                    <div className="header-icon">
                      <i className="fi-rr-heart"></i>
                    </div>
                    <div className="gi-btn-desc">
                      <span className="gi-btn-title">Wishlist</span>
                      <span className="gi-btn-stitle">
                        <b className="gi-wishlist-count">
                          {wishlistItems.length}
                        </b>
                        -items
                      </span>
                    </div>
                  </Link>
                  {/* <!-- Header wishlist End -->
                                <!-- Header Cart Start --> */}
                  <Link
                    href=""
                    onClick={openCart}
                    className="gi-header-btn gi-cart-toggle"
                    title="Cart"
                  >
                    <div className="header-icon">
                      <i className="fi-rr-shopping-bag"></i>
                      <span className="main-label-note-new"></span>
                    </div>
                    <div className="gi-btn-desc">
                      <span className="gi-btn-title">Cart</span>
                      <span className="gi-btn-stitle">
                        <b className="gi-cart-count">{cartItems.length}</b>
                        -items
                      </span>
                    </div>
                  </Link>
                  {/* <!-- Header Cart End --> */}
                </div>
              </div>

              {/* <!-- Header Top responsive Action --> */}
              <div className="col header-top-res d-lg-none">
                <div className="gi-header-bottons gi-header-buttons">
                  <div className="right-icons">
                    {/* <!-- Header User Start --> */}
                    <Link
                      href="/login"
                      className="gi-header-btn gi-header-user"
                    >
                      <div className="header-icon">
                        <i className="fi-rr-user"></i>
                      </div>
                    </Link>
                    {/* <!-- Header User End --> */}
                    {/* <!-- Header Wishlist Start --> */}
                    <Link
                      href="/wishlist"
                      className="gi-header-btn gi-wish-toggle"
                    >
                      <div className="header-icon">
                        <i className="fi-rr-heart"></i>
                      </div>
                      <span className="gi-header-count gi-wishlist-count">
                        {wishlistItems.length}
                      </span>
                    </Link>
                    {/* <!-- Header Wishlist End --> */}
                    {/* <!-- Header Cart Start --> */}
                    <Link
                      onClick={openCart}
                      href=""
                      className="gi-header-btn gi-cart-toggle gi-header-rtl-btn-icon"
                    >
                      <div className="header-icon">
                        <i className="fi-rr-shopping-bag"></i>
                        <span className="main-label-note-new"></span>
                      </div>
                      <span className="gi-header-count gi-cart-count">
                        {cartItems.length}
                      </span>
                    </Link>
                    {/* <!-- Header Cart End --> */}
                    {/* <!-- Header menu Start --> */}
                    <Link
                      onClick={openMobileManu}
                      href=""
                      className="gi-header-btn gi-site-menu-icon d-lg-none gi-header-rtl-right"
                    >
                      <i className="fi-rr-menu-burger"></i>
                    </Link>
                    {/* <!-- Header menu End --> */}
                  </div>
                </div>
              </div>
              {/* <!-- Header Top responsive Action --> */}
            </div>
          </div>
        </div>
      </div>

      <MobileManuSidebar
        toggleMainMenu={toggleMainMenu}
        closeMobileManu={closeMobileManu}
        activeMainMenu={activeMainMenu}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <SidebarCart isCartOpen={isCartOpen} closeCart={closeCart} />
    </>
  );
};

export default HeaderButtom;
