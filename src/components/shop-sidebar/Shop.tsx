"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ShopProductItem from "../product-item/ShopProductItem";
import { Col, Row } from "react-bootstrap";
import SidebarArea from "./sidebar-area/SidebarArea";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  setRange,
  setSearchTerm,
  setSelectedCategory,
  setSelectedColor,
  setSelectedTags,
  setSelectedWeight,
  setSortOption,
} from "@/store/reducers/filterReducer";
import Paginantion from "../paginantion/Paginantion";

const Shop = ({
  xl = 4,
  lg = 12,
  order = "",
  list = "",
  className = "padding-tb-40",
  isList = false,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(false);
  const dispatch = useDispatch();
  const {
    selectedCategory,
    selectedWeight,
    sortOption,
    minPrice,
    maxPrice,
    range,
    searchTerm,
    selectedColor,
    selectedTags,
  } = useSelector((state: RootState) => state.filter);
  const itemsPerPage = 12;

  const postData = useMemo(
    () => ({
      searchTerm,
      page: currentPage,
      limit: itemsPerPage,
      sortOption,
      selectedCategory,
      minPrice,
      maxPrice,
      range,
      selectedWeight,
      selectedColor,
      selectedTags,
    }),
    [
      searchTerm,
      currentPage,
      itemsPerPage,
      sortOption,
      selectedCategory,
      minPrice,
      maxPrice,
      range,
      selectedWeight,
      selectedColor,
      selectedTags,
    ]
  );

  const { data, error } = useSWR(
    ["/api/shopitem", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  const toggleView = (isGrid: any) => {
    setIsGridView(isGrid);
  };

  useEffect(() => {
    dispatch(setSearchTerm(""));
    setCurrentPage(1);
  }, [dispatch]);

  const handlePriceChange = useCallback(
    (min: number, max: number) => {
      dispatch(setRange({ min, max }));
      setCurrentPage(1);
    },
    [dispatch]
  );

  const handleSortChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortOption(event.target.value));
      setCurrentPage(1);
    },
    [dispatch]
  );

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
      : [weight];
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

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) return <div>Failed to load products</div>;

  return (
    <>
      <Row className={className}>
        <Col
          lg={lg}
          md={12}
          className={`margin-b-30 gi-shop-rightside ${order}`}
        >
          {/* <!-- Shop Top Start --> */}
          <div className="gi-pro-list-top d-flex">
            <div className="col-md-6 gi-grid-list">
              <div className="gi-gl-btn">
                <button
                  className={`grid-btn btn-grid-50 ${
                    !isGridView ? "active" : ""
                  }`}
                  onClick={() => toggleView(false)}
                >
                  <i className="fi fi-rr-apps"></i>
                </button>
                <button
                  className={`grid-btn btn-list-50 ${
                    isGridView ? "active" : ""
                  }`}
                  onClick={() => toggleView(true)}
                >
                  <i className="fi fi-rr-list"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 gi-sort-select">
              <div className="gi-select-inner">
                <select
                  name="gi-select"
                  id="gi-select"
                  onChange={handleSortChange}
                  defaultValue=""
                >
                  <option value="" disabled>
                    Sort by
                  </option>
                  <option value="1">Position</option>
                  <option value="2">Relevance</option>
                  <option value="3">Name, A to Z</option>
                  <option value="4">Name, Z to A</option>
                  <option value="5">Price, low to high</option>
                  <option value="6">Price, high to low</option>
                </select>
              </div>
            </div>
          </div>
          {/* <!-- Shop Top End --> */}

          {/* <!-- Shop content Start --> */}
          {!data ? (
            <>
              <Spinner />
            </>
          ) : (
            <div
              className={`shop-pro-content ${isGridView ? "list-view-50" : ""}`}
            >
              <div className={`shop-pro-inner ${list}`}>
                <Row>
                  {data?.data.map((item: any, index: any) => (
                    <ShopProductItem
                      isGridView={isGridView}
                      xl={xl}
                      data={item}
                      key={index}
                      isList={isList}
                    />
                  ))}
                </Row>
              </div>
              {/* <!-- Pagination Start --> */}
              {!data.data.length ? (
                <div
                  style={{ textAlign: "center" }}
                  className="gi-pro-content cart-pro-title"
                >
                  Products is not found.
                </div>
              ) : (
                <div className="gi-pro-pagination">
                  <span>
                    Showing {(currentPage - 1) * itemsPerPage + 1}-
                    {Math.min(currentPage * itemsPerPage, data.totalItems)} of{" "}
                    {data.totalItems} item(s)
                  </span>

                  <Paginantion
                    currentPage={currentPage}
                    totalPages={data.totalPages}
                    onPageChange={handlePageChange}
                  />
                </div>
              )}

              {/* <!-- Pagination End --> */}
            </div>
          )}

          {/* <!--Shop content End --> */}
        </Col>
        {/* <!-- Sidebar Area Start --> */}

        <SidebarArea
          handleCategoryChange={handleCategoryChange}
          handleWeightChange={handleWeightChange}
          handleColorChange={handleColorChange}
          handleTagsChange={handleTagsChange}
          min={minPrice}
          max={maxPrice}
          handlePriceChange={handlePriceChange}
          selectedWeight={selectedWeight}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          selectedTags={selectedTags}
          order={order}
        />
      </Row>
    </>
  );
};

export default Shop;
