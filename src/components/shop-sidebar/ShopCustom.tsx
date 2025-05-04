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
  setSelectedBrands,
  setSortOption,
} from "@/store/reducers/filterCustomReducer";
import Paginantion from "../paginantion/Paginantion";
import SidebarAreaCustom from "./sidebar-area/SidebarAreaCustom";
import useGetProduct from "@/hooks/product/useGetProduct";
import useGetProductFilter from "@/hooks/product/useGetProductFilter";

const ShopCustom = ({
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
    selectedBrands,
    sortOption,
    minPrice,
    maxPrice,
    range,
    searchTerm,
  } = useSelector((state: RootState) => state.filterCustom);
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
    ]
  );

  const {
    data,
    isLoading: loading,
    refetch,
    error,
  } = useGetProductFilter({
    maxPrice: maxPrice,
    minPrice: minPrice,
    limit: 12,
    page: currentPage,
    category: selectedCategory,
    sortOption: sortOption,
  });

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
                    เรียงจาก
                  </option>
                  {/* <option value="1">Position</option>
                  <option value="2">Relevance</option>
                  <option value="3">Name, A to Z</option>
                  <option value="4">Name, Z to A</option> */}
                  <option value="price_asc">ราคา: จากน้อยไปมาก</option>
                  <option value="price_desc">ราคา: จากมากไปน้อย</option>
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
                  {data?.product.map((item: any, index: any) => (
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
              {!data.product.length ? (
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
                    {Math.min(currentPage * itemsPerPage)} of{" "}
                    {data.meta?.totalCount} item(s)
                  </span>

                  <Paginantion
                    currentPage={currentPage}
                    totalPages={data.meta?.totalPage}
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

        <SidebarAreaCustom
          handleCategoryChange={handleCategoryChange}
          min={minPrice}
          max={maxPrice}
          handlePriceChange={handlePriceChange}
          selectedCategory={selectedCategory}
          order={order}
        />
      </Row>
    </>
  );
};

export default ShopCustom;
