"use client";
import React, { useState } from "react";
import home from "../../../utility/header/home";
import classic from "../../../utility/header/classic";
import banner from "../../../utility/header/benner";
import column from "../../../utility/header/columns";
import blog from "../../../utility/header/blog";
import pages from "../../../utility/header/pages";
import QuickView from "../../model/SidebarCart";
import list from "../../../utility/header/list";
import Link from "next/link";
import productpage from "../../../utility/header/productpage";
import MobileManuSidebar from "../../model/MobileManuSidebar";
import FashionSidebar from "@/components/model/FashionSidebar";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { RootState } from "@/store";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import Spinner from "@/components/button/Spinner";
import { setSearchTerm } from "@/store/reducers/filterReducer";
import Dropdown from "react-bootstrap/Dropdown";

const Header = ({
  onSuccess = () => {},
  hasPaginate = false,
  onError = () => {},
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchMenuVisible, setSearchMenuVisible] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const { MinPrice, MaxPrice, selectedBrands, selectedCategory } = useSelector(
    (state: RootState) => state.filter
  );
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

  let filteredData = [...data];

  if (selectedBrands.length > 0) {
    filteredData = filteredData.filter((item) =>
      selectedBrands.includes(item.brand)
    );
  }

  filteredData = filteredData.filter(
    (item) => item.newPrice >= MinPrice && item.newPrice <= MaxPrice
  );

  const handleSearch = (event: any) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(setSearchTerm(searchInput));
    setSearchMenuVisible(false);
    setSearchInput("");
    router.push("/fashion-shop-left-sidebar-col-3");
  };

  const showSearchMenu = () => {
    setSearchMenuVisible(true);
  };

  const hideSearchMenu = () => {
    setSearchMenuVisible(false);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
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
      <header className="gi-header">
        {/* <!-- Header Top Start --> */}
        <div className="header-top">
          <div className="container">
            <div className="row align-itegi-center">
              {/* <!-- Header Top social Start --> */}
              <div className="col text-left header-top-left d-lg-block">
                <div className="header-top-social">
                  <ul className="mb-0">
                    <li className="list-inline-item">
                      <Link href="/">
                        <i className="fi fi-rr-phone-call"></i>
                      </Link>
                      +91 987 654 3210
                    </li>
                    <li className="list-inline-item">
                      <Link href="/">
                        <i className="fi fi-brands-whatsapp"></i>
                      </Link>
                      +91 987 654 3210
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Header Top social End -->
                    <!-- Header Top Message Start --> */}
              <div className="col text-center header-top-center">
                <div className="header-top-message">
                  World&apos;s Fastest Online Shopping Destination
                </div>
              </div>
              {/* <!-- Header Top Message End -->
                    <!-- Header Top Language Currency --> */}
              <div className="col header-top-right d-none d-lg-block">
                <div className="header-top-right-inner d-flex justify-content-end">
                  {/* <!-- Language Start --> */}
                  <Dropdown className="header-top-lan-curr header-top-lan dropdown">
                    <Dropdown.Toggle
                      variant=""
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Account
                      <i
                        className="fi-rr-angle-small-down"
                        aria-hidden="true"
                      ></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu as="ul">
                      <Dropdown.Item as="li">
                        <Link className="dropdown-item" href="/register">
                          Register
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item as="li">
                        <Link className="dropdown-item" href="/checkout">
                          Checkout
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item as="li">
                        <Link className="dropdown-item" href="/login">
                          Login
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <!-- Language End -->
                            <!-- Language Start --> */}
                  <Dropdown className="header-top-lan-curr header-top-lan dropdown">
                    <Dropdown.Toggle variant="" className="dropdown-toggle">
                      English
                      <i
                        className="fi-rr-angle-small-down"
                        aria-hidden="true"
                      ></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu as="ul">
                      <Dropdown.Item as="li" className="active">
                        <Link className="dropdown-item" href="#">
                          English
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item as="li">
                        <Link className="dropdown-item" href="#">
                          Italiano
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <!-- Language End -->
                            <!-- Currency Start --> */}
                  <Dropdown className="header-top-lan-curr header-top-curr dropdown">
                    <Dropdown.Toggle
                      variant=""
                      className="dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Dollar
                      <i
                        className="fi-rr-angle-small-down"
                        aria-hidden="true"
                      ></i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu as="ul" className="dropdown-menu">
                      <Dropdown.Item as="li" className="active">
                        <Link className="dropdown-item" href="#">
                          USD $
                        </Link>
                      </Dropdown.Item>
                      <Dropdown.Item as="li">
                        <Link className="dropdown-item" href="#">
                          EUR €
                        </Link>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <!-- Currency End --> */}
                </div>
              </div>
              {/* <!-- Header Top Language Currency --> */}
            </div>
          </div>
        </div>
        {/* <!-- Header Top  End -->

        <!-- Header Bottom  Start --> */}
        <div className="gi-header-bottom d-lg-block">
          <div className="container position-relative">
            <div className="row">
              <div className="gi-flex">
                {/* <!-- Header Logo Start --> */}
                <div className="align-self-center gi-header-logo">
                  {/* <!-- Header toggle for responsive menu sidebar --> */}
                  <Link
                    href="#"
                    className="gi-header-btn gi-site-menu-icon d-lg-none gi-header-rtl-btn"
                    onClick={openMobileManu}
                  >
                    <i className="fi-rr-menu-burger"></i>
                  </Link>
                  <div className="header-logo">
                    <Link href="/">
                      <img
                        src={
                          process.env.NEXT_PUBLIC_URL +
                          "/assets/img/logo/logo-2.png"
                        }
                        alt="Site Logo"
                      />
                    </Link>
                  </div>
                </div>
                {/* <!-- Header Logo End -->
                        <!-- Header menu --> */}
                <div className="gi-header-cat d-none d-lg-block">
                  <div className="container position-relative">
                    <div className="gi-nav-bar">
                      {/* <!-- Main Menu Start --> */}
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
                                      Home
                                      <i className="fi-rr-angle-small-right"></i>
                                    </Link>
                                    <ul className="sub-menu">
                                      {home.map((data, index) => (
                                        <li key={index}>
                                          <Link href={data.href}>
                                            {data.name}
                                          </Link>
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
                                              <Link href={data.href}>
                                                {data.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                        <ul className="d-block mega-block">
                                          <li className="menu_title">
                                            <Link href="">Banner</Link>
                                          </li>
                                          {banner.map((data, index) => (
                                            <li key={index}>
                                              <Link href={data.href}>
                                                {data.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                        <ul className="d-block mega-block">
                                          <li className="menu_title">
                                            <Link href="">Columns</Link>
                                          </li>
                                          {column.map((data, index) => (
                                            <li key={index}>
                                              <Link href={data.href}>
                                                {data.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                        <ul className="d-block mega-block">
                                          <li className="menu_title">
                                            <Link href="">List</Link>
                                          </li>
                                          {list.map((data, index) => (
                                            <li key={index}>
                                              <Link href={data.href}>
                                                {data.name}
                                              </Link>
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
                                            {data.subname.map(
                                              (subPage, subIndex) => (
                                                <React.Fragment key={subIndex}>
                                                  <li>
                                                    <Link href={subPage.href}>
                                                      {subPage.name}
                                                    </Link>
                                                  </li>
                                                </React.Fragment>
                                              )
                                            )}
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
                                      Blog
                                      <i className="fi-rr-angle-small-right"></i>
                                    </Link>
                                    <ul className="sub-menu">
                                      {blog.map((data, index) => (
                                        <li key={index}>
                                          <Link href={data.href}>
                                            {data.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                  <li className="dropdown drop-list">
                                    <Link href="" className="dropdown-arrow">
                                      Pages
                                      <i className="fi-rr-angle-small-right"></i>
                                    </Link>
                                    <ul className="sub-menu">
                                      {pages.map((data, index) => (
                                        <li key={index}>
                                          <Link href={data.href}>
                                            {data.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </li>
                                  <li className="non-drop">
                                    <Link href="/shop-left-sidebar-col-3">
                                      <i className="fi-rr-badge-percent"></i>
                                      Offers
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Main Menu End --> */}
                    </div>
                  </div>
                </div>
                {/* <!-- Header menu End -->
                        <!-- Header Button Start --> */}
                <div
                  style={{ display: "block" }}
                  className="gi-header-action align-self-center"
                >
                  <div className="gi-header-bottons">
                    {/* <!-- Header toggle for responsive menu sidebar --> */}
                    <Link
                      href=""
                      style={{ marginRight: "0px" }}
                      className="gi-header-btn gi-site-menu-icon d-lg-none "
                    >
                      <i
                        onClick={openMobileManu}
                        className="fi-rr-menu-burger"
                      ></i>
                    </Link>
                    {/* <!-- Header search Start --> */}
                    <Link
                      style={{ marginRight: "0" }}
                      href=""
                      className="gi-header-btn h-icon gi-search-icon"
                      title="search"
                      onClick={showSearchMenu}
                    >
                      <div className="header-icon">
                        <i className="fi-rr-search"></i>
                      </div>
                    </Link>
                    {isSearchMenuVisible && (
                      <div
                        style={{
                          display: isSearchMenuVisible ? "block" : "none",
                        }}
                        className={`gi-search-menu`}
                      >
                        <div className="gi-search-wrapper">
                          <Link
                            href="#"
                            className="gi-close-search"
                            title="search"
                            onClick={hideSearchMenu}
                          >
                            ×
                          </Link>
                          <form
                            onSubmit={handleSubmit}
                            className="gi-form"
                            action="#"
                          >
                            <input
                              className="gi-popup-search"
                              type="text"
                              name="u"
                              placeholder="Search here"
                              autoComplete="off"
                              onChange={handleSearch}
                            />

                            <button
                              className="gi-popup-search-button"
                              type="submit"
                              name="search"
                            >
                              <i className="fi-rr-search"></i>
                              <i className="ion-ios-search-strong"></i>
                            </button>
                          </form>
                        </div>
                      </div>
                    )}
                    {/* <!-- Header search End --> */}
                    {/* <!-- Header wishlist Start --> */}
                    <Link
                      style={{ marginRight: "0" }}
                      href="/wishlist"
                      className="gi-header-btn gi-wish-toggle h-icon"
                      title="Wishlist"
                    >
                      <div className="header-icon">
                        <i className="fi-rr-heart"></i>
                      </div>
                    </Link>
                    {/* <!-- Header wishlist End --> */}
                    {/* <!-- Header Cart Start --> */}
                    <Link
                      style={{ marginRight: "0" }}
                      href=""
                      className="gi-header-btn gi-cart-toggle h-icon"
                      title="Cart"
                    >
                      <div className="header-icon">
                        <i
                          onClick={openCart}
                          className="fi-rr-shopping-bag"
                        ></i>
                        <span className="main-label-note-new"></span>
                      </div>
                    </Link>
                    {/* <!-- Header Cart End --> */}
                    {/* <!-- Header toggle for responsive category sidebar --> */}
                    <Link
                      onClick={openSidebar}
                      href="#"
                      className="gi-header-btn gi-site-cat-icon d-lg-none"
                    >
                      <i className="fi-rr-apps"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Header Button End --> */}
      </header>
      <QuickView isCartOpen={isCartOpen} closeCart={closeCart} />
      <MobileManuSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileManu={closeMobileManu}
        toggleMainMenu={toggleMainMenu}
        activeMainMenu={activeMainMenu}
      />
      <FashionSidebar
        MinPrice={MinPrice}
        MaxPrice={MaxPrice}
        selectedBrands={selectedBrands}
        selectedCategory={selectedCategory}
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
    </>
  );
};

export default Header;
