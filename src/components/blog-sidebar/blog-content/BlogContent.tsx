import React from "react";
import { Col } from "react-bootstrap";

const BlogContent = ({md, data, lg}: any) => {

  return (
    <>
        <Col md={md} sm={12} lg={lg} className="mb-6 gi-blog-block">
          <div className="gi-blog-item">
            <div className="blog-info">
              <figure className="blog-img">
                <a  href="#">
                  <img src={data.image} alt="news imag" />
                </a>
              </figure>
              <div className="detail">
                <label>
                  {data.date} -{" "}
                  <a  href="#">
                    {data.category}
                  </a>
                </label>
                <h3>
                  <a href="#">
                    {data.title}
                  </a>
                </h3>
                <p className="text-length">
                  {data.description}
                </p>
                <div className="more-info">
                  <a href="/blog-detail-left-sidebar">
                    Read More<i className="gicon gi-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Col>

    </>
  );
};

export default BlogContent;
