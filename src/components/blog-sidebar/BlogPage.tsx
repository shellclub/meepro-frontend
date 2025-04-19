"use client";
import React, { useEffect, useMemo, useState } from "react";
import BlogContent from "./blog-content/BlogContent";
import RecentBlog from "./blog-sidebar-area/RecentBlog";
import BlogCategories from "./blog-sidebar-area/BlogCategories";
import { Col } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Paginantion from "../paginantion/Paginantion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setSearchTerm } from "@/store/reducers/filterReducer";
import Spinner from "../button/Spinner";

const BlogPage = ({ order = "", lg = 12, md }: any) => {
  const dispatch = useDispatch();
  const { selectedCategory, searchTerm } = useSelector(
    (state: RootState) => state.filter
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState(searchTerm || "");
  const itemsPerPage = 6;

  const postData = useMemo(
    () => ({
      searchTerm,
      page: currentPage,
      limit: itemsPerPage,
      selectedCategory,
    }),
    [searchTerm, currentPage, itemsPerPage, selectedCategory]
  );

  const handleSearch = (event: any) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(setSearchTerm(searchInput));
    setCurrentPage(1);
  };

  const { data, error } = useSWR(
    ["/api/blogcontent", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  useEffect(() => {
    setSearchInput(searchTerm || "");
  }, [searchTerm]);

  if (error) return <div>Failed to load products</div>;

  const { data: posts = [], totalPages = 0 } = data || {};

  const getPageData = () => {
    return posts;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <>
      <Col lg={lg} md={12} className={`gi-blogs-rightside ${order}`}>
        {!data ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            {/* <!-- Blog content Start --> */}
            <div className="gi-blogs-content">
              <div className="gi-blogs-inner">
                <div className="row">
                  {getPageData().map((item: any, index: number) => (
                    <BlogContent data={item} key={index} md={md} />
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- Blog content end --> */}

            {/* <!-- Pagination Start --> */}
            {posts.length === 0 ? (
              <span className="gi-pro-content cart-pro-title">
                Blog record is not found.
              </span>
            ) : (
              <div className="gi-pro-pagination">
                <span>
                  Showing {(currentPage - 1) * itemsPerPage + 1}-
                  {Math.min(currentPage * itemsPerPage, posts.length)} of{" "}
                  {posts.length} item(s)
                </span>
                <Paginantion
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
            {/* <!-- Pagination End --> */}
          </>
        )}
      </Col>

      {/* <!-- Sidebar Area Start --> */}
      <Col
        lg={4}
        md={12}
        className={`gi-blogs-sidebar gi-blogs-leftside m-t-991 ${(order = -1)}`}
      >
        <div className="gi-blog-search">
          <div className="gi-blog-search-form">
            <input
              style={{ boxShadow: "none" }}
              className="form-control"
              placeholder="Search Our Blog"
              type="text"
              value={searchInput}
              onChange={handleSearch}
              onKeyDown={handleKeyPress}
            />

            <button onClick={handleSubmit} className="submit" type="button">
              <i className="gicon gi-search"></i>
            </button>
          </div>
        </div>
        <div className="gi-blog-sidebar-wrap">
          {/* <!-- Sidebar Recent Blog Block --> */}
          <div className="gi-sidebar-block gi-sidebar-recent-blog">
            <div className="gi-sb-title">
              <h3 className="gi-sidebar-title">Recent Articles</h3>
            </div>
            <div className="gi-blog-block-content gi-sidebar-dropdown">
              <RecentBlog />
            </div>
          </div>
          {/* <!-- Sidebar Recent Blog Block --> */}
          {/* <!-- Sidebar Category Block --> */}
          <BlogCategories selectedCategory={selectedCategory} />

          {/* <!-- Sidebar Category Block --> */}
        </div>
      </Col>
    </>
  );
};

export default BlogPage;
