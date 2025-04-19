"use client";
import { useEffect, useState } from "react";
import PriceRangeSlider from "../../price-range/PriceRangeSlider";
import { GoChevronDown } from "react-icons/go";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import Collapse from 'react-bootstrap/Collapse';

const SidebarArea = ({
  handleCategoryChange,
  handleWeightChange,
  handleColorChange,
  handleTagsChange,
  selectedColor,
  selectedTags,
  selectedCategory,
  selectedWeight,
  closeFilter,
  handlePriceChange,
  min,
  max,
  isFilterOpen,
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
  order = "order-md-last order-lg-first",
  none = "",
}: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(true);

  const [isOpen, setIsOpen] = useState({
    category: true,
    weight: true,
    color: true,
    price: true,
    tags: true,
  });

  const { data, error } = useSWR(`/api/shopcategory`, fetcher, {
    onSuccess,
    onError,
  });

  const { data: waightData } = useSWR(`/api/sidebarweight`, fetcher, {
    onSuccess,
    onError,
  });

  const { data: colorData } = useSWR(`/api/shopcolor`, fetcher, {
    onSuccess,
    onError,
  });

  const { data: tagData } = useSWR(`/api/shoptags`, fetcher, {
    onSuccess,
    onError,
  });

  useEffect(() => {
    const hiddenPaths = [
      "/product-left-sidebar/",
      "/product-right-sidebar/",
      "/product-according-left-sidebar/",
      "/product-according-right-sidebar/",
    ];
    setShowButton(hiddenPaths.includes(pathname));
  }, [pathname]);

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div></div>;

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  if (!waightData) return <div></div>;

  const getWaightData = () => {
    if (hasPaginate) return waightData.data;
    else return waightData;
  };

  if (!colorData) return <div></div>;

  const getColorData = () => {
    if (hasPaginate) return colorData.data;
    else return colorData;
  };

  if (!tagData) return <div></div>;

  const getTagData = () => {
    if (hasPaginate) return tagData.data;
    else return tagData;
  };

  const categoryData = getData();
  const weightData = getWaightData();
  const colorValue = getColorData();
  const tagsData = getTagData();

  const renderIcon = (category: string) => {
    switch (category) {
      case "Dried Fruit":
        return "fi fi-rs-grape";
      case "Fresh Fruit":
        return "fi fi-rs-apple-whole";
      case "Snacks":
        return "fi fi-rs-popcorn";
      case "Cookies":
        return "fi fi-rs-cookie";
      case "Foods":
        return "fi fi-rs-hamburger";
      case "Tuber root":
        return "fi fi-rs-corn";
      case "Vegetables":
        return "fi fi-rs-tomato";
      case "Clothes":
        return "fi-rr-shop";
      case "jewellery":
        return "fi fi-rs-gem";
      case "unisex":
        return "fi fi-rs-portrait";
      default:
        return null;
    }
  };

  const handleFilterBtn = () => {
    router.push("/shop-left-sidebar-col-3");
  };

  const toggleDropdown = (section: any) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <>
      {isFilterOpen && (
        <div className="filter-sidebar-overlay" onClick={closeFilter}></div>
      )}
      <div
        className={`gi-shop-sidebar col-lg-3 col-md-12 m-t-991 ${
          ((order = -1), none)
        }`}
      >
        <div id="shop_sidebar">
          <div className="gi-sidebar-wrap">
            {/* <!-- Sidebar Category Block --> */}
            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Category</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("category")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <Collapse
                in={isOpen.category}
              >
                <div
                  style={{ display: isOpen.category ? "block" : "none" }}
                  className={`gi-cat-sub-dropdown gi-sb-block-content height-transition-1s-ease`}
                >
                  <ul>
                    {/* Check if data is an array before mapping */}
                    {categoryData.map((category: any, index: number) => (
                      <li key={index}>
                        {/* Assuming ShopCategoryBlock accepts a 'data' prop */}
                        <div className="gi-sidebar-block-item">
                          <input
                            checked={selectedCategory?.includes(
                              category.category
                            )}
                            onChange={() =>
                              handleCategoryChange(category.category)
                            }
                            type="checkbox"
                          />
                          <Link href="/">
                            <span>
                              <i
                                className={`${renderIcon(category.category)}`}
                              ></i>
                              {category.category}
                            </span>
                          </Link>
                          <span className="checked"></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </div>
            {/* <!-- Sidebar Weight Block --> */}
            <div className="gi-sidebar-block">
              <div className="gi-sb-title">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  <h3 className="gi-sidebar-title">Weight</h3>
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleDropdown("weight")}
                  >
                    <GoChevronDown />
                  </div>
                </div>
              </div>
              <Collapse
                in={isOpen.weight}
                
              >
                <div
                  style={{ display: isOpen.weight ? "block" : "none" }}
                  className="gi-sb-block-content height-transition-1s-ease"
                >
                  <ul>
                    {weightData.map((data: any, index: number) => (
                      <li key={index}>
                        <div className="gi-sidebar-block-item">
                          <input
                            checked={selectedWeight?.includes(data.weight)}
                            onChange={() => handleWeightChange(data.weight)}
                            type="checkbox"
                          />
                          <Link href="/">{data.weight}</Link>
                          <span className="checked"></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </div>
            {/* <!-- Sidebar Color item --> */}
            <div className="gi-sidebar-block color-block gi-sidebar-block-clr">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Color</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("color")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <Collapse
                in={isOpen.color}
                
              >
                <div
                  style={{ display: isOpen.color ? "block" : "none" }}
                  className="gi-sb-block-content gi-sidebar-dropdown height-transition-1s-ease"
                >
                  <ul>
                    {colorValue.map((data: any, index: number) => (
                      <li key={index}>
                        <div className="gi-sidebar-block-item">
                          <input
                            checked={selectedColor?.includes(data.color)}
                            onChange={() => handleColorChange(data.color)}
                            type="checkbox"
                            value=""
                          />
                          <span
                            className={`gi-clr-block`}
                            style={{ backgroundColor: data.color }}
                          ></span>
                          <span
                            style={{
                              display: selectedColor.includes(data.color)
                                ? "block"
                                : "none",
                            }}
                            className={`${
                              selectedColor.includes(data.color)
                                ? "checked"
                                : ""
                            }`}
                          ></span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </div>
            {/* <!-- Sidebar Price Block --> */}
            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Price</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("price")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <Collapse
                in={isOpen.price}
                
              >
                <div
                  style={{ display: isOpen.price ? "block" : "none" }}
                  className="gi-sb-block-content gi-price-range-slider es-price-slider height-transition-1s-ease"
                >
                  <PriceRangeSlider
                    min={min}
                    max={max}
                    onPriceChange={handlePriceChange}
                  />
                </div>
              </Collapse>
            </div>
            {/* <-- Sidebar tags --> */}
            <div className="gi-sidebar-block">
              <div
                style={{ display: "flex", justifyContent: "space-evenly" }}
                className="gi-sb-title"
              >
                <h3 className="gi-sidebar-title">Tags</h3>
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleDropdown("tags")}
                >
                  <GoChevronDown />
                </div>
              </div>
              <Collapse in={isOpen.tags} >
                <div
                  style={{ display: isOpen.tags ? "block" : "none" }}
                  className="gi-tag-block gi-sb-block-content gi-sidebar-dropdown height-transition-1s-ease"
                >
                  {tagsData.map((data, index) => (
                    <a
                      key={index}
                      onClick={() => handleTagsChange(data.tags)}
                      className="gi-btn-2"
                      style={{
                        marginRight: "5px",
                        backgroundColor: selectedTags.includes(data.tags)
                          ? "#343a40"
                          : "#5caf90",
                      }}
                      color="#fff"
                    >
                      {data.tags}
                    </a>
                  ))}
                </div>
              </Collapse>
              {showButton && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "end",
                    paddingTop: "20px",
                  }}
                >
                  <button onClick={handleFilterBtn} className="gi-btn-2">
                    Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarArea;
