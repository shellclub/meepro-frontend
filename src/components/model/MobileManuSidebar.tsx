import React, { useState } from "react";
import classic from "../../utility/header/classic";
import Link from "next/link";
import home from "../../utility/header/home";
import banner from "../../utility/header/benner";
import column from "../../utility/header/columns";
import list from "../../utility/header/list";
import blog from "../../utility/header/blog";
import pages from "../../utility/header/pages";
import Collapse from 'react-bootstrap/Collapse';

const MobileManuSidebar = ({ isMobileMenuOpen, closeMobileManu, toggleMainMenu, activeMainMenu }) => {
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  const toggleSubMenu = (submenu: string) => {
    setActiveSubMenu((prevSubMenu) => (prevSubMenu === submenu ? null : submenu));
  };

  return (
    <>
      <div
        style={{ display: isMobileMenuOpen ? "block" : "none" }}
        onClick={closeMobileManu}
        className="gi-mobile-menu-overlay"
      ></div>
      {isMobileMenuOpen && (
        <div id="gi-mobile-menu" className="gi-mobile-menu gi-menu-open">
          <div className="gi-menu-title">
            <span className="menu_title">My Menu</span>
            <button onClick={closeMobileManu} className="gi-close-menu">
              ×
            </button>
          </div>
          <div className="gi-menu-inner">
            <div className="gi-menu-content">
              <ul>
                <li className={`dropdown drop-list ${activeMainMenu ? "active" : ""}`}>
                  <span onClick={() => toggleMainMenu('home')} className="menu-toggle"></span>
                  <Link
                    href=""
                    onClick={() => toggleMainMenu('home')}
                    className="dropdown-arrow"
                  >
                    Home
                  </Link>
                  <Collapse in={activeMainMenu === "home"} >
                    <ul style={{ display: activeMainMenu === "home" ? "block" : "none" }} className="sub-menu height-transition-1s-ease">
                      {home.map((data, index) => (
                        <li key={index}>
                          <a href={data.href}>{data.name}</a>
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                </li>
                <li>
                  <span onClick={() => toggleMainMenu('Categories')} className="menu-toggle"></span>
                  <Link href="#" onClick={() => toggleMainMenu('Categories')}>
                    Categories
                  </Link>
                  <Collapse in={activeMainMenu === "Categories"} >
                    <ul style={{ display: activeMainMenu === 'Categories' ? 'block' : 'none' }} className="sub-menu height-transition-1s-ease">
                      <li className={`${activeSubMenu ? "active" : ""}`}>
                        <span onClick={() => toggleSubMenu('Classic')} className="menu-toggle-plus togglr-plus-rtl">{activeSubMenu === "Classic" ? "-" : "+"}</span>
                        <Link onClick={() => toggleSubMenu('Classic')} href="#">
                          Classic Variation
                        </Link>
                        <Collapse in={activeSubMenu === "Classic"} >
                          <ul style={{ display: activeSubMenu === 'Classic' ? 'block' : 'none' }} className="sub-menu height-transition-1s-ease">
                            {classic.map((data, index) => (
                              <li key={index}>
                                <Link href={data.href}>{data.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <span onClick={() => toggleSubMenu('Banner')} className="menu-toggle-plus togglr-plus-rtl">{activeSubMenu === "Banner" ? "-" : "+"}</span>
                        <Link onClick={() => toggleSubMenu('Banner')} href="#">
                          Classic Variation
                        </Link>
                        <Collapse in={activeSubMenu === "Banner"} >
                          <ul style={{ display: activeSubMenu === "Banner" ? "block" : "none" }} className="sub-menu height-transition-1s-ease">
                            {banner.map((data, index) => (
                              <li key={index}>
                                <Link href={data.href}>Banner {data.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <span onClick={() => toggleSubMenu('Columns')} className="menu-toggle-plus togglr-plus-rtl">{activeSubMenu === "Columns" ? "-" : "+"}</span>
                        <Link onClick={() => toggleSubMenu('Columns')} href="#">
                          Columns Variation
                        </Link>
                        <Collapse in={activeSubMenu === "Columns"} >
                          <ul style={{ display: activeSubMenu === "Columns" ? "block" : "none" }} className="sub-menu height-transition-1s-ease">
                            {column.map((data, index) => (
                              <li key={index}>
                                <Link href={data.href}>{data.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <span onClick={() => toggleSubMenu('List')} className="menu-toggle-plus togglr-plus-rtl">{activeSubMenu === "List" ? "-" : "+"}</span>
                        <Link onClick={() => toggleSubMenu('List')} href="#">
                          List Variation
                        </Link>
                        <Collapse in={activeSubMenu === "List"} >
                          <ul style={{ display: activeSubMenu === "List" ? "block" : "none" }} className="sub-menu height-transition-1s-ease">
                            {list.map((data, index) => (
                              <li key={index}>
                                <Link href={data.href}>{data.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </Collapse>
                      </li>
                    </ul>
                  </Collapse>
                </li>
                <li>
                  <span onClick={() => toggleMainMenu('Products')} className="menu-toggle"></span>
                  <Link onClick={() => toggleMainMenu('Products')} href="#">
                    Products
                  </Link>
                  <Collapse in={activeMainMenu === "Products"} >
                    <ul style={{ display: activeMainMenu === "Products" ? "block" : "none" }} className="sub-menu height-transition-1s-ease">
                      <li>
                        <span onClick={() => toggleSubMenu('product')} className="menu-toggle-plus togglr-plus-rtl">{activeSubMenu === "product" ? "-" : "+"}</span>
                        <a onClick={() => toggleSubMenu("product")} href="#">Product page</a>
                        <Collapse in={activeSubMenu === "product"} >
                          <ul style={{ display: activeSubMenu === "product" ? "block" : "none" }} className="sub-menu height-transition-1s-ease">
                            <li><a href="/product-left-sidebar">Product left sidebar</a></li>
                            <li><a href="/product-right-sidebar">Product right sidebar</a></li>
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <span onClick={() => toggleSubMenu('productAccordion')} className="menu-toggle-plus togglr-plus-rtl">{activeSubMenu === "productAccordion" ? "-" : "+"}</span>
                        <a onClick={() => toggleSubMenu("productAccordion")} href="#">Product accordion</a>
                        <Collapse in={activeSubMenu === "productAccordion"} >
                          <ul style={{ display: activeSubMenu === "productAccordion" ? "block" : "none" }} className="sub-menu height-transition-1s-ease">
                            <li><a href="/product-according-left-sidebar">left sidebar</a></li>
                            <li><a href="/product-according-right-sidebar">right sidebar</a></li>
                          </ul>
                        </Collapse>
                      </li>
                      <li>
                        <Link href="/product-full-width">Product full width</Link>
                      </li>
                      <li>
                        <Link href="/product-according-full-width">
                          accordion full width
                        </Link>
                      </li>
                    </ul>
                  </Collapse>
                </li>
                <li className="dropdown">
                  <span onClick={() => toggleMainMenu('blog')} className="menu-toggle"></span>
                  <Link onClick={() => toggleMainMenu("blog")} href="#">
                    Blog
                  </Link>
                  <Collapse in={activeMainMenu === "blog"} >
                    <ul style={{ display: activeMainMenu === "blog" ? "block" : 'none' }} className="sub-menu height-transition-1s-ease">
                      {blog.map((data, index) => (
                        <li key={index}>
                          <Link href={data.href}>{data.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                </li>
                <li className="dropdown">
                  <span onClick={() => toggleMainMenu('pages')} className="menu-toggle"></span>
                  <Link onClick={() => toggleMainMenu("pages")} href="">
                    Pages
                  </Link>
                  <Collapse in={activeMainMenu === "pages"} >
                    <ul style={{ display: activeMainMenu === "pages" ? "block" : "none" }} className="sub-menu height-transition-1s-ease">
                      {pages.map((data, index) => (
                        <li key={index}>
                          <Link href={data.href}>{data.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </Collapse>
                </li>
              </ul>
            </div>
            <div className="header-res-lan-curr">
              {/* <!-- Social Start --> */}
              <div className="header-res-social">
                <div className="header-top-social">
                  <ul className="mb-0">
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="gicon gi-facebook"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="gicon gi-twitter"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="gicon gi-instagram"></i>
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link href="#">
                        <i className="gicon gi-linkedin"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- Social End --> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileManuSidebar;
