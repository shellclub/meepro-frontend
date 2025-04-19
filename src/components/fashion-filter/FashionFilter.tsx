"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Row } from "react-bootstrap";
import "swiper/css";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import SidebarCategory from "../fashion-sidebar/categoryall/SidebarCategory";
import ShopProductItem from "../product-item/ShopProductItem";
import Paginantion from "../paginantion/Paginantion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  setSearchTerm,
  setSortOption,
  setMaxPrice,
  setMinPrice,
  setSelectedBrands,
  setSelectedCategory,
  setSelectedTags,
} from "@/store/reducers/filterReducer";

const FashionFilter = ({ xl = 4, list = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isGridView, setIsGridView] = useState(false);
  const dispatch = useDispatch();
  const {
    selectedCategory,
    sortOption,
    MinPrice,
    MaxPrice,
    selectedBrands,
    searchTerm,
    selectedTags,
  } = useSelector((state: RootState) => state.filter);
  const itemsPerPage = 9;

  const postData = useMemo(
    () => ({
      searchTerm,
      page: currentPage,
      limit: itemsPerPage,
      sortOption,
      selectedCategory,
      selectedTags,
      selectedBrands,
      MinPrice,
      MaxPrice,
    }),
    [
      searchTerm,
      currentPage,
      itemsPerPage,
      sortOption,
      selectedCategory,
      selectedTags,
      selectedBrands,
      MinPrice,
      MaxPrice,
    ]
  );

  const { data, error } = useSWR(
    [`/api/fashion-all-item`, postData],
    ([url, postData]) => fetcher(url, postData)
  );

  const { data: posts = [], totalItems = 0, totalPages = 0 } = data || {};

  const getPageData = () => {
    return posts;
  };

  const handleSortChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(setSortOption(event.target.value));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(setSearchTerm(""));
  }, [dispatch]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) return <div>Failed to load products</div>;

  const toggleView = (isGrid: any) => {
    setIsGridView(isGrid);
  };

  const handleBrandChange = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((b) => b !== brand)
      : [...selectedBrands, brand];
    dispatch(setSelectedBrands(updatedBrands));
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    const updatedCategory = selectedCategory.includes(category)
      ? selectedCategory.filter((cat) => cat !== category)
      : [...selectedCategory, category];
    dispatch(setSelectedCategory(updatedCategory));
    setCurrentPage(1);
  };

  const handleTagsChange = (tag) => {
    const updatedTags = selectedTags.includes(tag)
      ? selectedTags.filter((tg) => tg !== tag)
      : [...selectedTags, tag];
    dispatch(setSelectedTags(updatedTags));
    setCurrentPage(1);
  };

  const handlePriceChange = (min: any, max: any) => {
    dispatch(setMinPrice(min));
    dispatch(setMaxPrice(max));
    setCurrentPage(1);
  };

  return (
    <>
      <section className="gi-main-container">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 sidebar-dis-991 h-sidebar padding-tb-40">
              <SidebarCategory
                handleBrandChange={handleBrandChange}
                handleCategoryChange={handleCategoryChange}
                handleTagsChange={handleTagsChange}
                handlePriceChange={handlePriceChange}
                MinPrice={MinPrice}
                MaxPrice={MaxPrice}
                selectedBrands={selectedBrands}
                selectedCategory={selectedCategory}
                selectedTags={selectedTags}
              />
            </div>

            <div className="col-lg-9 col-md-12 padding-tb-40">
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
                  <div style={{width : "160px"}} className="gi-select-inner">
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
              {!data ? (
                <>
                  <Spinner />
                </>
              ) : (
                <div
                  className={`shop-pro-content ${
                    isGridView ? "list-view-50" : ""
                  }`}
                >
                  <div className={`shop-pro-inner ${list}`}>
                    <Row>
                      {getPageData().map((item: any, index: any) => (
                        <ShopProductItem
                          isGridView={isGridView}
                          xl={xl}
                          data={item}
                          key={index}
                        />
                      ))}
                    </Row>
                  </div>
                  {/* <!-- Pagination Start --> */}

                  {!totalItems ? (
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
                        {Math.min(currentPage * itemsPerPage, totalItems)} of{" "}
                        {totalItems} item(s)
                      </span>

                      <Paginantion
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                      />
                    </div>
                  )}

                  {/* <!-- Pagination End --> */}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FashionFilter;
