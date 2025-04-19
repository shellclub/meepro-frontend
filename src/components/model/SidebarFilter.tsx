"use client";
import PriceRangeSlider from "../price-range/PriceRangeSlider";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
  setSelectedCategory,
  setSelectedColor,
  setSelectedTags,
  setSelectedWeight,
} from "@/store/reducers/filterReducer";

const SidebarFilter = ({
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
  handlePriceChange,
  min,
  max,
  closeFilter,
  isFilterOpen,
  selectedCategory,
  selectedWeight,
  selectedColor,
  selectedTags,
  setCurrentPage,
}) => {
  const dispatch = useDispatch();

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

  const categoryData = getData();
  const weightData = getWaightData();
  const colorValue = getColorData();
  const tagsData = getTagData();

  const handleCategoryChange = (category) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
    setCurrentPage(1);
  };

  const handleWeightChange = (weight) => {
    const updatedweight = selectedWeight.includes(weight)
      ? selectedWeight.filter((wet) => wet !== weight)
      : [...selectedWeight, weight];
    dispatch(setSelectedWeight(updatedweight));
    setCurrentPage(1);
  };

  const handleColorChange = (color) => {
    const updatedcolor = selectedColor.includes(color)
      ? selectedColor.filter((clr) => clr !== color)
      : [...selectedColor, color];
    dispatch(setSelectedColor(updatedcolor));
    setCurrentPage(1);
  };

  const handleTagsChange = (tag) => {
    const updatedtag = selectedTags.includes(tag)
      ? selectedTags.filter((tg) => tg !== tag)
      : [...selectedTags, tag];
    dispatch(setSelectedTags(updatedtag));
    setCurrentPage(1);
  };

  return (
    <>
      {isFilterOpen && (
        <div
          style={{ display: isFilterOpen ? "block" : "none" }}
          className="filter-sidebar-overlay"
          onClick={closeFilter}
        ></div>
      )}
      <div
        className={`gi-shop-sidebar gi-filter-sidebar col-lg-3 col-md-12 ${
          isFilterOpen ? "filter-sidebar-open" : ""
        }`}
      >
        <div className="sidebar-filter-title">
          <h5>Filters</h5>
          <a className="filter-close" onClick={closeFilter}>
            ×
          </a>
        </div>
        <div id="shop_sidebar">
          <div className="gi-sidebar-wrap">
            {/* <!-- Sidebar Category Block --> */}
            <div className="gi-sidebar-block">
              <div className="gi-sb-title">
                <h3 className="gi-sidebar-title">Category</h3>
              </div>
              <div className="gi-sb-block-content">
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
            </div>
            {/* <!-- Sidebar Weight Block --> */}
            <div className="gi-sidebar-block">
              <div className="gi-sb-title">
                <h3 className="gi-sidebar-title">Weight</h3>
              </div>
              <div className="gi-sb-block-content">
                <ul>
                  {weightData.map((data: any, index: any) => (
                    <li key={index}>
                      <div className="gi-sidebar-block-item">
                        <input
                          checked={selectedWeight?.includes(data.weight)}
                          onChange={() => handleWeightChange(data.weight)}
                          type="checkbox"
                          value=""
                        />
                        <Link href="/">{data.weight}</Link>
                        <span className="checked"></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <!-- Sidebar Color item --> */}
            <div className="gi-sidebar-block color-block gi-sidebar-block-clr">
              <div className="gi-sb-title">
                <h3 className="gi-sidebar-title">Color</h3>
              </div>
              <div className="gi-sb-block-content  gi-sidebar-dropdown">
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
                            selectedColor.includes(data.color) ? "checked" : ""
                          }`}
                        ></span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <!-- Sidebar Price Block --> */}
            <div className="gi-sidebar-block">
              <div className="gi-sb-title">
                <h3 className="gi-sidebar-title">Price</h3>
              </div>
              <div className="gi-sb-block-content gi-price-range-slider es-price-slider">
                <div className="gi-price-filter">
                  <PriceRangeSlider
                    min={min}
                    max={max}
                    onPriceChange={handlePriceChange}
                  />
                </div>
              </div>
            </div>
            {/* <!-- Sidebar tags --> */}
            <div className="gi-sidebar-block">
              <div className="gi-sb-title">
                <h3 className="gi-sidebar-title">Tags</h3>
              </div>
              <div className="gi-tag-block gi-sb-block-content gi-sidebar-dropdown">
                {tagsData.map((data, index) => (
                  <a
                    key={index}
                    onClick={() => handleTagsChange(data.tags)}
                    className="gi-btn-2 color-white"
                  >
                    {data.tags}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarFilter;
