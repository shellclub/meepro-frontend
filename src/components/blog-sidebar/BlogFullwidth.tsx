"use client"
import React, { useMemo, useState } from "react";
import BlogContent from "./blog-content/BlogContent";
import { Col } from "react-bootstrap";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Paginantion from "../paginantion/Paginantion";

const BlogFullwidth = ({ order = "", lg, md, }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;


  const postData = useMemo(
    () => ({
      page: currentPage,
      limit: itemsPerPage,
    }),
    [ currentPage, itemsPerPage,]
  );

  const { data, error } = useSWR(
    ["/api/blogcontent", postData],
    ([url, postData]) => fetcher(url, postData)
  );

  if (error) return <div>Failed to load products</div>;

  const { data: posts = [], totalPages = 0 } = data || {};

  const getPageData = () => {
    return posts;
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Col md={12} className={`gi-blogs-rightside ${order}`}>
        {/* <!-- Blog content Start --> */}
        <div className="gi-blogs-content">
          <div className="gi-blogs-inner">
            <div className="row">
            {getPageData().map((item: any, index: number) => (
                <BlogContent data={item} lg={lg} key={index} md={md} />
              ))}
            </div>
          </div>
        </div>
        {/* <!-- Blog content end --> */}

        {/* <!-- Pagination Start --> */}
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
        {/* <!-- Pagination End --> */}
      </Col>
      {/* <!-- Sidebar Area Start --> */}
    </>
  );
};

export default BlogFullwidth;
