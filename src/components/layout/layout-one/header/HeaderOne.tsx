"use client";

import Link from "next/link";
import { useState } from "react";
import SidebarCart from "../../../model/SidebarCart";
import MobileManuSidebar from "../../../model/MobileManuSidebar";
import Dropdown from "react-bootstrap/Dropdown";

function HeaderOne({ cartItems, wishlistItems }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMainMenu, setActiveMainMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  }

  const closeMobileManu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
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
                World`s Fastest Online Shopping Destination
              </div>
            </div>
            {/* <!-- Header Top Message End -->
                        <!-- Header Top Language Currency --> */}
            <div className="col header-top-right d-none d-lg-block">
              <div className="header-top-right-inner d-flex justify-content-end">
                <Link className="gi-help" href="/faq">
                  Help?
                </Link>
                <Link className="gi-help" href="/track-order">
                  Track Order?
                </Link>
                {/* <!-- Language Start --> */}
                <Dropdown className="header-top-lan-curr header-top-lan">
                  <Dropdown.Toggle
                    variant=""
                    className="dropdown-toggle"
                    id="dropdown-basic"
                  >
                    English
                    <i
                      className="fi-rr-angle-small-down"
                      aria-hidden="true"
                    ></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li" className="active">
                      English
                    </Dropdown.Item>
                    <Dropdown.Item as="li">Italiano</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                {/* <!-- Language End -->
                                <!-- Currency Start --> */}
                <Dropdown className="header-top-lan-curr header-top-curr">
                  <Dropdown.Toggle
                    variant=""
                    className="dropdown-toggle"
                    id="dropdown-basic"
                  >
                    Dollar
                    <i
                      className="fi-rr-angle-small-down"
                      aria-hidden="true"
                    ></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu as="ul">
                    <Dropdown.Item as="li" className="dropdown-item active">
                      USD $
                    </Dropdown.Item>
                    <Dropdown.Item as="li" className="dropdown-item">
                      EUR €
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- Currency End --> */}
              </div>
            </div>
            {/* <!-- Header Top Language Currency -->
                        <!-- Header Top responsive Action --> */}
            <div className="col header-top-res d-lg-none">
              <div className="gi-header-bottons gi-header-buttons">
                <div className="right-icons">
                  {/* <!-- Header User Start --> */}
                  <Link href="/login" className="gi-header-btn gi-header-user gi-header-rtl-btn">
                    <div className="header-icon">
                      <i className="fi-rr-user"></i>
                    </div>
                  </Link>
                  {/* <!-- Header User End -->
                                    <!-- Header Wishlist Start --> */}
                  <Link
                    href="/wishlist"
                    className="gi-header-btn gi-wish-toggle gi-header-rtl-btn"
                  >
                    <div className="header-icon">
                      <i className="fi-rr-heart"></i>
                    </div>
                    <span className="gi-header-count gi-wishlist-count">
                      {wishlistItems.length}
                    </span>
                  </Link>
                  {/* <!-- Header Wishlist End -->
                                    <!-- Header Cart Start --> */}
                  <Link href="" className="gi-header-btn gi-cart-toggle gi-header-rtl-btn">
                    <div onClick={openCart} className="header-icon">
                      <i className="fi-rr-shopping-bag"></i>
                      <span className="main-label-note-new"></span>
                    </div>
                    <span className="gi-header-count gi-cart-count">
                      {cartItems.length}
                    </span>
                  </Link>
                  {/* <!-- Header Cart End -->
                                    <!-- Header menu Start --> */}
                  <Link
                    onClick={openMobileManu}
                    href=""
                    className="gi-header-btn gi-site-menu-icon d-lg-none"
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
      <SidebarCart isCartOpen={isCartOpen} closeCart={closeCart} />
      <MobileManuSidebar
        isMobileMenuOpen={isMobileMenuOpen}
        closeMobileManu={closeMobileManu}
        toggleMainMenu={toggleMainMenu}
        activeMainMenu={activeMainMenu}
      />
    </>
  );
}

export default HeaderOne;
