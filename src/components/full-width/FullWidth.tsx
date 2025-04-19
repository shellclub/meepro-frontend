"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import ShopProductItem from "../product-item/ShopProductItem";
import { Col, Row } from "react-bootstrap";
import SidebarFilter from "../model/SidebarFilter";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Paginantion from "../paginantion/Paginantion";
import {
  setRange,
  setSearchTerm,
  setSortOption,
} from "@/store/reducers/filterReducer";

const FullWidth = ({
  xl,
  lg,
  classCol,
  itemsPerPage = 12,
  className = "padding-tb-40",
  onlyRow = false,
}: any) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isGridView, setIsGridView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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

  const postData = useMemo(
    () => ({
      searchTerm,
      page: currentPage,
      limit: itemsPerPage,
      sortOption,
      selectedCategory,
      selectedWeight,
      selectedColor,
      selectedTags,
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
      selectedWeight,
      selectedColor,
      selectedTags,
      minPrice,
      maxPrice,
      range,
    ]
  );

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

  useEffect(() => {
    dispatch(setSearchTerm(""));
    setCurrentPage(1);
  }, [dispatch]);

  const openFilter = () => {
    setIsFilterOpen(true);
  };

  const closeFilter = () => {
    setIsFilterOpen(false);
  };

  const toggleView = (isGrid: any) => {
    setIsGridView(isGrid);
  };

  const { data, error } = useSWR(
    ["/api/shopitem", postData],
    ([url, postData]) => fetcher(url, postData)
  );
  if (error) return <div>Failed to load products</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const LoadRowOrContainer = ({ children, onlyRow, className }: any) => {
    return (
      <>
        {onlyRow ? (
          children
        ) : (
          <section className={`gi-shop ${className}`}>
            <div className="container">{children}</div>
          </section>
        )}
      </>
    );
  };

  return (
    <LoadRowOrContainer onlyRow={onlyRow} className={className}>
      <Row>
        <Col
          lg={lg}
          md={12}
          className={`margin-b-30 gi-shop-rightside margin-b-30`}
        >
          {/* <!-- Shop Top Start --> */}
          <div className="gi-pro-list-top d-flex">
            <div className="col-md-6 gi-grid-list">
              <div className="gi-gl-btn">
                <button
                  onClick={openFilter}
                  className="grid-btn filter-toggle-icon"
                >
                  <i className="fi fi-rr-filter"></i>
                </button>
                <button
                  className={`grid-btn btn-grid-50 ${
                    !isGridView ? "active" : ""
                  }`}
                  onClick={() => toggleView(false)}
                >
                  <i className="fi fi-rr-apps"></i>
                </button>
                <button
                  className={`grid-btn btn-grid-50 ${
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
                >
                  <option defaultValue="" disabled>
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
            <div className={`shop-pro-content`}>
              <div
                className={`shop-pro-inner ${isGridView ? "list-view-50" : ""}`}
              >
                <Row>
                  {data.data.map((item: any, index: any) => (
                    <ShopProductItem
                      isGridView={isGridView}
                      xl={xl}
                      classCol={classCol}
                      data={item}
                      key={index}
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
        <SidebarFilter
          setCurrentPage={setCurrentPage}
          min={minPrice}
          max={maxPrice}
          handlePriceChange={handlePriceChange}
          selectedWeight={selectedWeight}
          selectedCategory={selectedCategory}
          selectedColor={selectedColor}
          selectedTags={selectedTags}
          isFilterOpen={isFilterOpen}
          closeFilter={closeFilter}
        />
      </Row>
    </LoadRowOrContainer>
  );
};

export default FullWidth;
